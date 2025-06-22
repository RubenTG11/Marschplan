// Generate sample data with addresses per day
const marschplanData = generateSampleData();

// DOM elements
const daySelection = document.getElementById('day-selection');
const addressSelection = document.getElementById('address-selection');
const navigationView = document.getElementById('navigation-view');
const fullRouteView = document.getElementById('full-route-view');
const routeSection = document.getElementById('route-section');
const selectedDayTitle = document.getElementById('selected-day-title').querySelector('span');
const addressesList = document.getElementById('addresses-list');
const addressSearch = document.getElementById('address-search');
const currentAddressEl = document.getElementById('current-address');
const nextAddressEl = document.getElementById('next-address');
const currentPositionEl = document.getElementById('current-position');
const totalAddressesEl = document.getElementById('total-addresses');
const delayValueEl = document.getElementById('delay-value');
const plannedTimeEl = document.getElementById('planned-time');
const currentTimeEl = document.getElementById('current-time');
const pauseStatusContainer = document.getElementById('pause-status-container');
const mapsNavigationContainer = document.getElementById('maps-navigation-container');
const routeDistanceEl = document.getElementById('route-distance');
const routeDurationEl = document.getElementById('route-duration');
const fullRouteDistanceEl = document.getElementById('full-route-distance');
const fullRouteDurationEl = document.getElementById('full-route-duration');
const bottomNav = document.getElementById('bottom-nav');

// Buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backToDaysBtn = document.getElementById('back-to-days');
const backToAddressesBtn = document.getElementById('back-to-addresses');
const hideRouteBtn = document.getElementById('hide-route-btn');
const backFromFullRouteBtn = document.getElementById('back-from-full-route');
const fullRouteBtn = document.getElementById('full-route-btn');
const fullRouteBtnNav = document.getElementById('full-route-btn-nav');
const showRouteFixedBtn = document.getElementById('show-route-btn-fixed');

// State variables
let selectedDay = '';
let addresses = [];
let currentIndex = 0;
let delayUpdateInterval;
let map = null;
let fullMap = null;
let directionsService = null;
let directionsRenderer = null;
let fullDirectionsRenderer = null;
let currentView = 'day-selection'; // To track which view to return to
let userMarker = null;
let userLocationWatchId = null;
let currentUserLocation = null;

// Event listeners
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedDay = btn.dataset.day;
        showAddressSelection();
    });
});

backToDaysBtn.addEventListener('click', () => {
    addressSelection.classList.add('hidden');
    daySelection.classList.remove('hidden');
    currentView = 'day-selection';
});

backToAddressesBtn.addEventListener('click', () => {
    navigationView.classList.add('hidden');
    bottomNav.classList.add('hidden');
    addressSelection.classList.remove('hidden');
    currentView = 'address-selection';
    clearInterval(delayUpdateInterval);
    hideRouteSection();
    stopWatchingUserLocation();
});

hideRouteBtn.addEventListener('click', () => {
    hideRouteSection();
});

backFromFullRouteBtn.addEventListener('click', () => {
    fullRouteView.classList.add('hidden');
    
    if (currentView === 'navigation-view') {
        navigationView.classList.remove('hidden');
        bottomNav.classList.remove('hidden');
    } else {
        addressSelection.classList.remove('hidden');
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateNavigationView();
        hideRouteSection();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < addresses.length - 1) {
        currentIndex++;
        updateNavigationView();
        hideRouteSection();
    }
});

addressSearch.addEventListener('input', () => {
    const searchTerm = addressSearch.value.toLowerCase();
    renderAddressList(searchTerm);
});

fullRouteBtn.addEventListener('click', () => {
    showFullRouteView();
    currentView = 'address-selection';
});

fullRouteBtnNav.addEventListener('click', () => {
    showFullRouteView();
    currentView = 'navigation-view';
});

showRouteFixedBtn.addEventListener('click', () => {
    const currentAddress = addresses[currentIndex];
    const nextAddress = currentIndex < addresses.length - 1 ? addresses[currentIndex + 1] : null;
    
    if (nextAddress) {
        showRouteSection(currentAddress, nextAddress);
    }
});

// Functions
function showAddressSelection() {
    daySelection.classList.add('hidden');
    addressSelection.classList.remove('hidden');
    currentView = 'address-selection';
    selectedDayTitle.textContent = formatDayName(selectedDay);
    addresses = marschplanData[selectedDay] || [];
    renderAddressList();
}

function renderAddressList(searchTerm = '') {
    addressesList.innerHTML = '';
    
    addresses.forEach((address, index) => {
        const addressText = `${address.strasse} ${address.hausnummer}`.toLowerCase();
        const nameText = address.name ? address.name.toLowerCase() : '';
        if (searchTerm && !addressText.includes(searchTerm) && !nameText.includes(searchTerm)) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'address-card bg-white rounded-lg shadow-md p-3 hover:bg-indigo-50';
        
        // If address has a color, apply it as a left border
        if (address.farbe && address.farbe !== 'transparent') {
            card.style.borderLeft = `4px solid ${address.farbe}`;
        }

        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-semibold text-gray-800">${address.strasse} ${address.hausnummer}</h3>
                    ${address.name ? `<p class="text-gray-700">${address.name}</p>` : ''}
                    <div class="flex flex-wrap mt-1">
                        ${address.jahrgang ? `<span class="text-gray-600 mr-3 text-sm">Jahrgang: ${address.jahrgang}</span>` : ''}
                        ${address.pause ? `<span class="text-indigo-600 text-sm">Pause: ${address.pause}m</span>` : ''}
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-indigo-600 font-medium">${address.uhrzeit}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            currentIndex = index;
            showNavigationView();
        });

        addressesList.appendChild(card);
    });
}

function showNavigationView() {
    addressSelection.classList.add('hidden');
    navigationView.classList.remove('hidden');
    bottomNav.classList.remove('hidden');
    currentView = 'navigation-view';
    updateNavigationView();
    startDelayUpdates();
    hideRouteSection();
    startWatchingUserLocation();
}

function updateNavigationView() {
    const currentAddress = addresses[currentIndex];
    const nextAddress = currentIndex < addresses.length - 1 ? addresses[currentIndex + 1] : null;
    
    // Update position indicator
    currentPositionEl.textContent = currentIndex + 1;
    totalAddressesEl.textContent = addresses.length;
    
    // Update current address
    currentAddressEl.innerHTML = renderAddressDetails(currentAddress, true);
    
    // Update next address
    if (nextAddress) {
        nextAddressEl.innerHTML = renderAddressDetails(nextAddress);
        nextAddressEl.classList.remove('hidden');
        
        // Add Google Maps navigation button
        updateMapsNavigationButton(currentAddress, nextAddress);
    } else {
        nextAddressEl.innerHTML = `
            <div class="text-center py-3">
                <p class="text-gray-500">Keine weiteren Adressen</p>
            </div>
        `;
        // Hide maps button when there's no next address
        mapsNavigationContainer.innerHTML = '';
    }
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    prevBtn.classList.toggle('opacity-50', currentIndex === 0);
    nextBtn.disabled = currentIndex === addresses.length - 1;
    nextBtn.classList.toggle('opacity-50', currentIndex === addresses.length - 1);
    showRouteFixedBtn.disabled = currentIndex === addresses.length - 1;
    showRouteFixedBtn.classList.toggle('opacity-50', currentIndex === addresses.length - 1);
    
    // Update delay
    updateDelay();
}

function updateMapsNavigationButton(currentAddress, nextAddress) {
    if (!nextAddress) {
        mapsNavigationContainer.innerHTML = '';
        return;
    }
    
    const originAddress = `${currentAddress.strasse} ${currentAddress.hausnummer}, Ravensburg, Germany`;
    const destinationAddress = `${nextAddress.strasse} ${nextAddress.hausnummer}, Ravensburg, Germany`;
    
    mapsNavigationContainer.innerHTML = `
        <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originAddress)}&destination=${encodeURIComponent(destinationAddress)}&travelmode=walking" target="_blank" class="btn-maps-full text-white px-4 py-3 rounded-lg flex items-center justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            In Google Maps öffnen
        </a>
    `;
}

function showRouteSection(originAddress, destinationAddress) {
    // Show the route section
    routeSection.classList.remove('hidden');
    
    // Scroll to the route section
    routeSection.scrollIntoView({ behavior: 'smooth' });
    
    // Initialize map if not already done
    if (!map) {
        initMap();
    }
    
    // Calculate and display route
    calculateRoute(originAddress, destinationAddress);
}

function hideRouteSection() {
    routeSection.classList.add('hidden');
}

function initMap() {
    // Create map
    map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: 47.7814, lng: 9.6136 }, // Ravensburg coordinates
        zoom: 15,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    });
    
    // Create directions service and renderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: false,
        polylineOptions: {
            strokeColor: '#4338ca',
            strokeWeight: 5
        }
    });
    
    // Add user location marker if available
    if (currentUserLocation) {
        addUserLocationMarker(map, currentUserLocation);
    }
}

function initFullMap() {
    // Create full route map
    fullMap = new google.maps.Map(document.getElementById('full-map-container'), {
        center: { lat: 47.7814, lng: 9.6136 }, // Ravensburg coordinates
        zoom: 14,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    });
    
    // Create directions renderer for full route
    fullDirectionsRenderer = new google.maps.DirectionsRenderer({
        map: fullMap,
        suppressMarkers: false,
        polylineOptions: {
            strokeColor: '#4285F4',
            strokeWeight: 5
        }
    });
    
    // Add user location marker if available
    if (currentUserLocation) {
        addUserLocationMarker(fullMap, currentUserLocation);
    }
}

function calculateRoute(originAddress, destinationAddress) {
    // Create the full addresses for origin and destination
    const origin = `${originAddress.strasse} ${originAddress.hausnummer}, Ravensburg, Germany`;
    const destination = `${destinationAddress.strasse} ${destinationAddress.hausnummer}, Ravensburg, Germany`;
    
    // Set route information
    routeDistanceEl.textContent = 'Wird berechnet...';
    routeDurationEl.textContent = 'Wird berechnet...';
    
    // Calculate route
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
    }, (response, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
            
            // Update route info
            const route = response.routes[0];
            const leg = route.legs[0];
            routeDistanceEl.textContent = leg.distance.text;
            routeDurationEl.textContent = leg.duration.text;
            
            // If we have user location, add it to the map
            if (currentUserLocation) {
                addUserLocationMarker(map, currentUserLocation);
            }
        } else {
            alert('Routenberechnung fehlgeschlagen: ' + status);
            routeDistanceEl.textContent = 'Fehler';
            routeDurationEl.textContent = 'Fehler';
        }
    });
}

function showFullRouteView() {
    // Hide current views
    navigationView.classList.add('hidden');
    bottomNav.classList.add('hidden');
    addressSelection.classList.add('hidden');
    
    // Show full route view
    fullRouteView.classList.remove('hidden');
    
    // Initialize full map if not already done
    if (!fullMap) {
        initFullMap();
    }
    
    // Calculate and display full route
    calculateFullRoute();
}

function calculateFullRoute() {
    if (addresses.length < 2) {
        alert('Es gibt nicht genügend Adressen für eine Route.');
        return;
    }
    
    // Get first and last address
    const firstAddress = addresses[0];
    const lastAddress = addresses[addresses.length - 1];
    
    // Set route information
    fullRouteDistanceEl.textContent = 'Wird berechnet...';
    fullRouteDurationEl.textContent = 'Wird berechnet...';
    
    // Create waypoints for intermediate addresses (max 8 due to Google Maps API limitations)
    const waypointAddresses = [];
    const step = Math.ceil(addresses.length / 8);
    
    for (let i = step; i < addresses.length - 1; i += step) {
        if (waypointAddresses.length < 8) {
            const address = addresses[i];
            waypointAddresses.push({
                location: `${address.strasse} ${address.hausnummer}, Ravensburg, Germany`,
                stopover: true
            });
        }
    }
    
    // Create origin and destination
    const origin = `${firstAddress.strasse} ${firstAddress.hausnummer}, Ravensburg, Germany`;
    const destination = `${lastAddress.strasse} ${lastAddress.hausnummer}, Ravensburg, Germany`;
    
    // Calculate route
    const directionsService = new google.maps.DirectionsService();
    directionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypointAddresses,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.WALKING
    }, (response, status) => {
        if (status === 'OK') {
            fullDirectionsRenderer.setDirections(response);
            
            // Calculate total distance and duration
            let totalDistance = 0;
            let totalDuration = 0;
            
            const route = response.routes[0];
            route.legs.forEach(leg => {
                totalDistance += leg.distance.value;
                totalDuration += leg.duration.value;
            });
            
            // Convert to human-readable format
            const distanceKm = (totalDistance / 1000).toFixed(1);
            const durationMin = Math.round(totalDuration / 60);
            
            // Update route info
            fullRouteDistanceEl.textContent = `${distanceKm} km`;
            fullRouteDurationEl.textContent = `${durationMin} Minuten`;
            
            // If we have user location, add it to the map
            if (currentUserLocation) {
                addUserLocationMarker(fullMap, currentUserLocation);
            }
        } else {
            alert('Routenberechnung fehlgeschlagen: ' + status);
            fullRouteDistanceEl.textContent = 'Fehler';
            fullRouteDurationEl.textContent = 'Fehler';
        }
    });
}

function renderAddressDetails(address, isCurrent = false) {
    const borderColor = address.farbe && address.farbe !== 'transparent' 
        ? address.farbe 
        : (isCurrent ? '#4338ca' : '#9ca3af');
    
    let html = `
        <div class="flex justify-between items-start">
            <div>
                <h3 class="font-bold text-gray-800">${address.strasse} ${address.hausnummer}</h3>
                ${address.name ? `<p class="text-gray-700">${address.name}</p>` : ''}
                <div class="flex flex-wrap mt-1">
                    ${address.jahrgang ? `<span class="text-gray-600 mr-3 text-sm">Jahrgang: ${address.jahrgang}</span>` : ''}
                    ${address.pause ? `<span class="text-indigo-600 text-sm">Pause: ${address.pause}m</span>` : ''}
                </div>
            </div>
            <div class="text-right">
                <span class="text-lg font-semibold ${isCurrent ? 'text-indigo-600' : 'text-gray-600'}">${address.uhrzeit}</span>
            </div>
        </div>
    `;
    
    // Add special note if exists
    if (address.spezialEvent) {
        html += `
            <div class="mt-2 special-note p-2 rounded text-sm">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <span class="font-medium text-amber-800">${address.spezialEvent}</span>
                </div>
            </div>
        `;
    }
    
    return html;
}

function startDelayUpdates() {
    updateDelay();
    clearInterval(delayUpdateInterval);
    delayUpdateInterval = setInterval(updateDelay, 1000); // Update every second
}

function updateDelay() {
    const currentAddress = addresses[currentIndex];
    const now = new Date();
    const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    // Update current time display
    currentTimeEl.textContent = currentTimeStr;
    plannedTimeEl.textContent = currentAddress.uhrzeit;
    
    // Calculate delay
    const [plannedHours, plannedMinutes] = currentAddress.uhrzeit.split(':').map(Number);
    const plannedTime = new Date();
    plannedTime.setHours(plannedHours, plannedMinutes, 0);
    
    const delayMs = now - plannedTime;
    const delayMinutes = Math.floor(delayMs / (1000 * 60));
    
    // Format delay in hours, minutes, seconds
    const delayFormatted = formatDelay(delayMs);
    
    // Update delay display
    delayValueEl.textContent = delayFormatted;
    delayValueEl.className = delayMs > 0 ? 'text-red-600' : 'text-green-600';
    
    // Update pause status
    updatePauseStatus(delayMinutes, currentAddress.pause || 0);
}

function updatePauseStatus(delayMinutes, pauseMinutes) {
    pauseStatusContainer.innerHTML = '';
    
    if (pauseMinutes === 0) {
        // No pause planned
        if (delayMinutes > 0) {
            pauseStatusContainer.innerHTML = `
                <div class="pause-status pause-danger">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span>Verspätung: ${delayMinutes} Minuten (keine Pause geplant)</span>
                    </div>
                </div>
            `;
        } else {
            pauseStatusContainer.innerHTML = `
                <div class="pause-status pause-ok">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Pünktlich (keine Pause geplant)</span>
                    </div>
                </div>
            `;
        }
    } else {
        // Pause planned
        if (delayMinutes <= 0) {
            // No delay, full pause available
            pauseStatusContainer.innerHTML = `
                <div class="pause-status pause-ok">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Volle Pause verfügbar: ${pauseMinutes} Minuten</span>
                    </div>
                </div>
            `;
        } else if (delayMinutes < pauseMinutes) {
            // Delay less than pause
            const remainingPause = pauseMinutes - delayMinutes;
            pauseStatusContainer.innerHTML = `
                <div class="pause-status pause-warning">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span>Verspätung: ${delayMinutes} Min, Restpause: ${remainingPause} Min</span>
                    </div>
                </div>
            `;
        } else {
            // Delay exceeds pause
            const excessDelay = delayMinutes - pauseMinutes;
            pauseStatusContainer.innerHTML = `
                <div class="pause-status pause-danger">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span>Verspätung: ${excessDelay} Min über die geplante Pause!</span>
                    </div>
                </div>
            `;
        }
    }
}

function formatDelay(ms) {
    // Handle negative delay (ahead of schedule)
    const isNegative = ms < 0;
    ms = Math.abs(ms);
    
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    
    const formattedTime = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return isNegative ? `-${formattedTime}` : formattedTime;
}

function formatDayName(day) {
    return day.replace('_', ' ');
}

// User location functions
function startWatchingUserLocation() {
    if (navigator.geolocation) {
        // Request permission and start watching position
        userLocationWatchId = navigator.geolocation.watchPosition(
            updateUserLocation,
            handleLocationError,
            { 
                enableHighAccuracy: true, 
                maximumAge: 10000, 
                timeout: 10000 
            }
        );
    }
}

function stopWatchingUserLocation() {
    if (userLocationWatchId !== null) {
        navigator.geolocation.clearWatch(userLocationWatchId);
        userLocationWatchId = null;
    }
}

function updateUserLocation(position) {
    const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    
    currentUserLocation = userLocation;
    
    // Update user marker on maps if they exist
    if (map && routeSection.classList.contains('hidden') === false) {
        addUserLocationMarker(map, userLocation);
    }
    
    if (fullMap && fullRouteView.classList.contains('hidden') === false) {
        addUserLocationMarker(fullMap, userLocation);
    }
}

function addUserLocationMarker(mapInstance, location) {
    // Remove existing user marker if it exists
    if (userMarker) {
        userMarker.setMap(null);
    }
    
    // Create a custom marker for user location
    userMarker = new google.maps.Marker({
        position: location,
        map: mapInstance,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285F4',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
            scale: 8
        },
        title: 'Dein Standort',
        zIndex: 1000
    });
    
    // Add accuracy circle
    const accuracyCircle = new google.maps.Circle({
        map: mapInstance,
        center: location,
        radius: 30, // Approximate accuracy in meters
        fillColor: '#4285F4',
        fillOpacity: 0.15,
        strokeColor: '#4285F4',
        strokeOpacity: 0.5,
        strokeWeight: 1
    });
}

function handleLocationError(error) {
    console.warn(`Standortfehler (${error.code}): ${error.message}`);
    
    // Only show alert for permission denied
    if (error.code === 1) {
        alert('Bitte erlaube den Zugriff auf deinen Standort, um deine Position auf der Karte zu sehen.');
    }
}

// Generate sample data with addresses per day
function generateSampleData() {
    const days = [
        'FREITAG', 'SAMSTAG', 'SONNTAG', 'MONTAG', 'DIENSTAG', 
        'AUSWÄRTIGER_SAMSTAG', 'AUSWÄRTIGER_SONNTAG'
    ];
    
    const streets = [
        'Marktplatz', 'Hauptstraße', 'Kirchstraße', 'Bachstraße', 'Bergstraße',
        'Schillerstraße', 'Goetheweg', 'Mozartstraße', 'Beethovenallee', 'Rathausplatz',
        'Bahnhofstraße', 'Lindenweg', 'Eichenstraße', 'Tannenweg', 'Birkenallee',
        'Ahornstraße', 'Ulmenweg', 'Kastanienallee', 'Rosenweg', 'Tulpenstraße'
    ];
    
    const specialEvents = [
        'Autos nach Marktplatz', 'Autos nach Festplatz', 'Autos nach Rathaus',
        'Autos nach Bahnhof', 'Autos nach Schule', 'Mittagspause', 'Kurze Pause',
        'Umzug startet', 'Umzug endet', 'Treffpunkt wechselt'
    ];
    
    const colors = [
        '#ff6b6b', '#4ecdc4', '#ffe66d', '#1a535c', '#ff9f1c', 
        '#2ec4b6', '#e71d36', '#ff9f1c', '#6a0572', '#ab83a1'
    ];
    
    const jahrgänge = [
        '2010', '2011', '2012', '2013', '2014', '2015',
        '2010, 2011', '2012, 2013', '2014, 2015', 'Alle'
    ];
    
    const firstNames = [
        'Hans', 'Peter', 'Michael', 'Thomas', 'Andreas', 'Wolfgang', 'Christian', 'Stefan', 'Martin', 'Josef',
        'Anna', 'Maria', 'Elisabeth', 'Monika', 'Ursula', 'Christine', 'Sabine', 'Petra', 'Claudia', 'Andrea'
    ];
    
    const lastNames = [
        'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
        'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'
    ];
    
    const data = {};
    
    days.forEach(day => {
        const dayAddresses = [];
        
        // Set start time based on day
        let startHour, startMinute;
        if (day === 'FREITAG') {
            startHour = 17;
            startMinute = 0;
        } else if (day.includes('SONNTAG')) {
            startHour = 10;
            startMinute = 0;
        } else {
            startHour = 9;
            startMinute = 0;
        }
        
        // Generate addresses for the day
        for (let i = 0; i < 15; i++) { // Reduced to 15 for better mobile performance
            // Calculate time (increment by 10-20 minutes)
            startMinute += 10 + Math.floor(Math.random() * 11);
            if (startMinute >= 60) {
                startHour += Math.floor(startMinute / 60);
                startMinute %= 60;
            }
            if (startHour >= 24) {
                startHour %= 24;
            }
            
            const timeStr = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
            
            // Randomly select street and other attributes
            const street = streets[Math.floor(Math.random() * streets.length)];
            const houseNumber = Math.floor(Math.random() * 100) + 1;
            const jahrgang = jahrgänge[Math.floor(Math.random() * jahrgänge.length)];
            
            // Generate a name (90% chance to have a name)
            const hasName = Math.random() < 0.9;
            const name = hasName ? 
                `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}` : 
                null;
            
            // 10% chance for colored address
            const hasColor = Math.random() < 0.1;
            const color = hasColor ? colors[Math.floor(Math.random() * colors.length)] : 'transparent';
            
            // 15% chance for special event
            const hasSpecialEvent = Math.random() < 0.15;
            const specialEvent = hasSpecialEvent ? specialEvents[Math.floor(Math.random() * specialEvents.length)] : null;
            
            // 60% chance for pause (0-30 minutes)
            const hasPause = Math.random() < 0.6;
            const pauseMinutes = hasPause ? Math.floor(Math.random() * 31) : 0;
            
            dayAddresses.push({
                strasse: street,
                hausnummer: String(houseNumber),
                uhrzeit: timeStr,
                jahrgang: jahrgang,
                name: name,
                farbe: color,
                spezialEvent: specialEvent,
                pause: pauseMinutes
            });
        }
        
        data[day] = dayAddresses;
    });
    
    return data;
}

// Load Google Maps API
function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqflpyqhfuMQ-LWCG3GpalzjatkpZvb2I&callback=initMapsCallback';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Callback for Google Maps API
window.initMapsCallback = function() {
    // Maps API loaded, ready to use when needed
    console.log('Google Maps API loaded');
};

// Load Google Maps API when the page loads
window.addEventListener('load', loadGoogleMapsAPI);