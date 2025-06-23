// Generate sample data with addresses per day
const marschplanData = {
    "FREITAG": [
        {
            "strasse": "Hauptstraße",
            "hausnummer": "67",
            "uhrzeit": "17:19",
            "jahrgang": "Alle",
            "name": "Andreas Müller",
            "farbe": "#ab83a1",
            "spezialEvent": null,
            "pause": 0,
            "id": 11
        },
        {
            "strasse": "Rosenweg",
            "hausnummer": "63",
            "uhrzeit": "17:29",
            "jahrgang": "2014",
            "name": "Peter Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 3,
            "id": 12
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "23",
            "uhrzeit": "17:45",
            "jahrgang": "2014, 2015",
            "name": "Claudia Klein",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0,
            "id": 13
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "16",
            "uhrzeit": "18:04",
            "jahrgang": "2015",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": "Autos nach Festplatz",
            "pause": 5,
            "id": 14
        },
        {
            "strasse": "Marktplatz",
            "hausnummer": "21",
            "uhrzeit": "18:17",
            "jahrgang": "2013",
            "name": "Michael Wolf",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 30,
            "id": 15
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "80",
            "uhrzeit": "18:35",
            "jahrgang": "2014",
            "name": "Thomas Klein",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0,
            "id": 16
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "50",
            "uhrzeit": "18:45",
            "jahrgang": "2015",
            "name": "Josef Schwarz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 6,
            "id": 17
        },
        {
            "strasse": "Mozartstraße",
            "hausnummer": "51",
            "uhrzeit": "19:02",
            "jahrgang": "2014",
            "name": "Peter Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 10,
            "id": 18
        },
        {
            "strasse": "Hauptstraße",
            "hausnummer": "47",
            "uhrzeit": "19:22",
            "jahrgang": "2014, 2015",
            "name": "Sabine Wagner",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 30,
            "id": 19
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "91",
            "uhrzeit": "19:33",
            "jahrgang": "2014, 2015",
            "name": "Monika Zimmermann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0,
            "id": 110
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "99",
            "uhrzeit": "19:46",
            "jahrgang": "2014",
            "name": "Andrea Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 24,
            "id": 111
        },
        {
            "strasse": "Ahornstraße",
            "hausnummer": "28",
            "uhrzeit": "20:01",
            "jahrgang": "2010, 2011",
            "name": "Sabine Müller",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
            ,
            "id": 112
        },
        {
            "strasse": "Kastanienallee",
            "hausnummer": "68",
            "uhrzeit": "20:12",
            "jahrgang": "2012, 2013",
            "name": "Christine Richter",
            "farbe": "#ff9f1c",
            "spezialEvent": "Mittagspause",
            "pause": 0,
            "id": 113
        },
        {
            "strasse": "Tannenweg",
            "hausnummer": "18",
            "uhrzeit": "20:32",
            "jahrgang": "2013",
            "name": "Elisabeth Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0,
            "id": 114
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "49",
            "uhrzeit": "20:44",
            "jahrgang": "2012",
            "name": "Thomas Hoffmann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 25,
            "id": 115
        }
    ],
    "SAMSTAG": [
        {
            "strasse": "Beethovenallee",
            "hausnummer": "32",
            "uhrzeit": "09:16",
            "jahrgang": "2015",
            "name": "Wolfgang Fischer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Kirchstraße",
            "hausnummer": "65",
            "uhrzeit": "09:30",
            "jahrgang": "2010",
            "name": "Sabine Zimmermann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 23
        },
        {
            "strasse": "Bergstraße",
            "hausnummer": "16",
            "uhrzeit": "09:40",
            "jahrgang": "2010",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Hauptstraße",
            "hausnummer": "54",
            "uhrzeit": "09:58",
            "jahrgang": "2013",
            "name": "Thomas Richter",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 2
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "99",
            "uhrzeit": "10:16",
            "jahrgang": "2015",
            "name": "Andrea Schwarz",
            "farbe": "transparent",
            "spezialEvent": "Umzug startet",
            "pause": 23
        },
        {
            "strasse": "Goetheweg",
            "hausnummer": "78",
            "uhrzeit": "10:31",
            "jahrgang": "2010, 2011",
            "name": "Thomas Meyer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 15
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "9",
            "uhrzeit": "10:42",
            "jahrgang": "2013",
            "name": "Elisabeth Schröder",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Lindenweg",
            "hausnummer": "26",
            "uhrzeit": "10:56",
            "jahrgang": "2011",
            "name": "Martin Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 22
        },
        {
            "strasse": "Rosenweg",
            "hausnummer": "67",
            "uhrzeit": "11:11",
            "jahrgang": "Alle",
            "name": "Andrea Klein",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "83",
            "uhrzeit": "11:22",
            "jahrgang": "2012",
            "name": "Claudia Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Ahornstraße",
            "hausnummer": "45",
            "uhrzeit": "11:36",
            "jahrgang": "2012, 2013",
            "name": "Christine Schmidt",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Festplatz",
            "pause": 0
        },
        {
            "strasse": "Kastanienallee",
            "hausnummer": "77",
            "uhrzeit": "11:51",
            "jahrgang": "Alle",
            "name": "Andreas Schmidt",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 20
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "65",
            "uhrzeit": "12:07",
            "jahrgang": "2012",
            "name": null,
            "farbe": "#6a0572",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "65",
            "uhrzeit": "12:19",
            "jahrgang": "2012",
            "name": "Anna Becker",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Schule",
            "pause": 0
        },
        {
            "strasse": "Bachstraße",
            "hausnummer": "59",
            "uhrzeit": "12:35",
            "jahrgang": "2012, 2013",
            "name": "Sabine Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 22
        }
    ],
    "SONNTAG": [
        {
            "strasse": "Kirchstraße",
            "hausnummer": "61",
            "uhrzeit": "10:20",
            "jahrgang": "2012",
            "name": "Claudia Schmidt",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 19
        },
        {
            "strasse": "Goetheweg",
            "hausnummer": "73",
            "uhrzeit": "10:38",
            "jahrgang": "2014",
            "name": "Wolfgang Wolf",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 27
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "74",
            "uhrzeit": "10:48",
            "jahrgang": "2011",
            "name": "Peter Klein",
            "farbe": "transparent",
            "spezialEvent": "Umzug endet",
            "pause": 0
        },
        {
            "strasse": "Bachstraße",
            "hausnummer": "20",
            "uhrzeit": "10:59",
            "jahrgang": "2010",
            "name": "Martin Fischer",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Bahnhof",
            "pause": 0
        },
        {
            "strasse": "Bachstraße",
            "hausnummer": "53",
            "uhrzeit": "11:16",
            "jahrgang": "2013",
            "name": "Petra Schulz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Mozartstraße",
            "hausnummer": "9",
            "uhrzeit": "11:33",
            "jahrgang": "2013",
            "name": "Anna Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Rathausplatz",
            "hausnummer": "71",
            "uhrzeit": "11:43",
            "jahrgang": "2014, 2015",
            "name": "Sabine Schröder",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "50",
            "uhrzeit": "11:59",
            "jahrgang": "2014, 2015",
            "name": "Martin Richter",
            "farbe": "#ffe66d",
            "spezialEvent": null,
            "pause": 5
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "38",
            "uhrzeit": "12:19",
            "jahrgang": "2011",
            "name": "Peter Klein",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 9
        },
        {
            "strasse": "Beethovenallee",
            "hausnummer": "73",
            "uhrzeit": "12:36",
            "jahrgang": "2012, 2013",
            "name": "Petra Weber",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "24",
            "uhrzeit": "12:55",
            "jahrgang": "Alle",
            "name": "Christine Zimmermann",
            "farbe": "transparent",
            "spezialEvent": "Kurze Pause",
            "pause": 28
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "1",
            "uhrzeit": "13:06",
            "jahrgang": "2014, 2015",
            "name": "Maria Richter",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 23
        },
        {
            "strasse": "Beethovenallee",
            "hausnummer": "43",
            "uhrzeit": "13:26",
            "jahrgang": "2010, 2011",
            "name": "Peter Schröder",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 12
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "67",
            "uhrzeit": "13:36",
            "jahrgang": "Alle",
            "name": "Peter Fischer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Goetheweg",
            "hausnummer": "88",
            "uhrzeit": "13:54",
            "jahrgang": "2013",
            "name": "Andreas Wolf",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 1
        }
    ],
    "MONTAG": [
        {
            "strasse": "Goetheweg",
            "hausnummer": "48",
            "uhrzeit": "09:15",
            "jahrgang": "2013",
            "name": "Christian Wolf",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 24
        },
        {
            "strasse": "Tannenweg",
            "hausnummer": "91",
            "uhrzeit": "09:32",
            "jahrgang": "2012, 2013",
            "name": "Anna Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 22
        },
        {
            "strasse": "Tannenweg",
            "hausnummer": "86",
            "uhrzeit": "09:44",
            "jahrgang": "2014, 2015",
            "name": "Thomas Neumann",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Festplatz",
            "pause": 11
        },
        {
            "strasse": "Kirchstraße",
            "hausnummer": "28",
            "uhrzeit": "10:02",
            "jahrgang": "2015",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "29",
            "uhrzeit": "10:14",
            "jahrgang": "2013",
            "name": "Michael Schmidt",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "21",
            "uhrzeit": "10:27",
            "jahrgang": "2010, 2011",
            "name": "Andrea Koch",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Kastanienallee",
            "hausnummer": "56",
            "uhrzeit": "10:47",
            "jahrgang": "Alle",
            "name": "Ursula Schröder",
            "farbe": "#ff9f1c",
            "spezialEvent": "Autos nach Schule",
            "pause": 0
        },
        {
            "strasse": "Beethovenallee",
            "hausnummer": "6",
            "uhrzeit": "11:01",
            "jahrgang": "Alle",
            "name": "Petra Schwarz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 19
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "22",
            "uhrzeit": "11:16",
            "jahrgang": "2012",
            "name": "Martin Schulz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 26
        },
        {
            "strasse": "Bergstraße",
            "hausnummer": "76",
            "uhrzeit": "11:33",
            "jahrgang": "2014, 2015",
            "name": "Josef Neumann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "31",
            "uhrzeit": "11:47",
            "jahrgang": "2013",
            "name": "Maria Schäfer",
            "farbe": "#ff9f1c",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "33",
            "uhrzeit": "12:02",
            "jahrgang": "2012",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 17
        },
        {
            "strasse": "Kirchstraße",
            "hausnummer": "13",
            "uhrzeit": "12:18",
            "jahrgang": "Alle",
            "name": "Thomas Schmidt",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bergstraße",
            "hausnummer": "50",
            "uhrzeit": "12:36",
            "jahrgang": "2010",
            "name": "Monika Wolf",
            "farbe": "transparent",
            "spezialEvent": "Umzug endet",
            "pause": 22
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "93",
            "uhrzeit": "12:49",
            "jahrgang": "Alle",
            "name": "Christine Koch",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 27
        }
    ],
    "DIENSTAG": [
        {
            "strasse": "Hauptstraße",
            "hausnummer": "95",
            "uhrzeit": "09:19",
            "jahrgang": "2010, 2011",
            "name": "Maria Fischer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bergstraße",
            "hausnummer": "43",
            "uhrzeit": "09:36",
            "jahrgang": "Alle",
            "name": "Christian Weber",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Mozartstraße",
            "hausnummer": "91",
            "uhrzeit": "09:51",
            "jahrgang": "2010, 2011",
            "name": "Hans Schwarz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 22
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "58",
            "uhrzeit": "10:01",
            "jahrgang": "2012, 2013",
            "name": "Thomas Schwarz",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Bahnhof",
            "pause": 0
        },
        {
            "strasse": "Marktplatz",
            "hausnummer": "33",
            "uhrzeit": "10:20",
            "jahrgang": "2015",
            "name": "Andrea Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Rathausplatz",
            "hausnummer": "75",
            "uhrzeit": "10:39",
            "jahrgang": "2013",
            "name": "Maria Meyer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "13",
            "uhrzeit": "10:51",
            "jahrgang": "2013",
            "name": "Christine Schwarz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "58",
            "uhrzeit": "11:02",
            "jahrgang": "2012",
            "name": "Thomas Neumann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 29
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "37",
            "uhrzeit": "11:20",
            "jahrgang": "2013",
            "name": "Maria Schwarz",
            "farbe": "#ff6b6b",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "41",
            "uhrzeit": "11:35",
            "jahrgang": "2014",
            "name": "Sabine Schwarz",
            "farbe": "transparent",
            "spezialEvent": "Treffpunkt wechselt",
            "pause": 21
        },
        {
            "strasse": "Ahornstraße",
            "hausnummer": "66",
            "uhrzeit": "11:54",
            "jahrgang": "2010",
            "name": "Josef Wagner",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Marktplatz",
            "hausnummer": "62",
            "uhrzeit": "12:11",
            "jahrgang": "2010, 2011",
            "name": "Michael Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 29
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "49",
            "uhrzeit": "12:21",
            "jahrgang": "2015",
            "name": "Andreas Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "97",
            "uhrzeit": "12:38",
            "jahrgang": "2012",
            "name": "Claudia Meyer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 7
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "18",
            "uhrzeit": "12:56",
            "jahrgang": "2012, 2013",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 5
        }
    ],
    "AUSWÄRTIGER_SAMSTAG": [
        {
            "strasse": "Kastanienallee",
            "hausnummer": "93",
            "uhrzeit": "09:20",
            "jahrgang": "2012",
            "name": "Monika Klein",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Marktplatz",
            "pause": 0
        },
        {
            "strasse": "Kastanienallee",
            "hausnummer": "36",
            "uhrzeit": "09:40",
            "jahrgang": "2015",
            "name": "Martin Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 28
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "97",
            "uhrzeit": "09:52",
            "jahrgang": "2011",
            "name": "Josef Koch",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "87",
            "uhrzeit": "10:08",
            "jahrgang": "2014",
            "name": "Anna Bauer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Rathausplatz",
            "hausnummer": "84",
            "uhrzeit": "10:20",
            "jahrgang": "Alle",
            "name": "Anna Zimmermann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Rathausplatz",
            "hausnummer": "65",
            "uhrzeit": "10:34",
            "jahrgang": "2012, 2013",
            "name": "Christian Schröder",
            "farbe": "transparent",
            "spezialEvent": "Umzug endet",
            "pause": 0
        },
        {
            "strasse": "Marktplatz",
            "hausnummer": "51",
            "uhrzeit": "10:44",
            "jahrgang": "2012, 2013",
            "name": "Hans Hoffmann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Beethovenallee",
            "hausnummer": "88",
            "uhrzeit": "11:04",
            "jahrgang": "2014",
            "name": "Maria Müller",
            "farbe": "transparent",
            "spezialEvent": "Umzug endet",
            "pause": 4
        },
        {
            "strasse": "Beethovenallee",
            "hausnummer": "52",
            "uhrzeit": "11:20",
            "jahrgang": "2013",
            "name": "Josef Meyer",
            "farbe": "transparent",
            "spezialEvent": "Treffpunkt wechselt",
            "pause": 24
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "3",
            "uhrzeit": "11:39",
            "jahrgang": "2010, 2011",
            "name": "Petra Zimmermann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "32",
            "uhrzeit": "11:49",
            "jahrgang": "2015",
            "name": "Michael Hoffmann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 10
        },
        {
            "strasse": "Rosenweg",
            "hausnummer": "88",
            "uhrzeit": "11:59",
            "jahrgang": "2011",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 24
        },
        {
            "strasse": "Mozartstraße",
            "hausnummer": "80",
            "uhrzeit": "12:18",
            "jahrgang": "2014",
            "name": "Claudia Hoffmann",
            "farbe": "transparent",
            "spezialEvent": "Autos nach Marktplatz",
            "pause": 0
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "24",
            "uhrzeit": "12:32",
            "jahrgang": "2010, 2011",
            "name": "Petra Wagner",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bahnhofstraße",
            "hausnummer": "95",
            "uhrzeit": "12:52",
            "jahrgang": "2010",
            "name": "Sabine Schulz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 4
        }
    ],
    "AUSWÄRTIGER_SONNTAG": [
        {
            "strasse": "Marktplatz",
            "hausnummer": "40",
            "uhrzeit": "10:12",
            "jahrgang": "2010, 2011",
            "name": "Claudia Hoffmann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Hauptstraße",
            "hausnummer": "12",
            "uhrzeit": "10:22",
            "jahrgang": "2010, 2011",
            "name": "Petra Müller",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Bachstraße",
            "hausnummer": "36",
            "uhrzeit": "10:41",
            "jahrgang": "2010, 2011",
            "name": "Ursula Schwarz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "15",
            "uhrzeit": "10:54",
            "jahrgang": "2015",
            "name": "Andrea Schneider",
            "farbe": "#4ecdc4",
            "spezialEvent": null,
            "pause": 10
        },
        {
            "strasse": "Kastanienallee",
            "hausnummer": "22",
            "uhrzeit": "11:05",
            "jahrgang": "Alle",
            "name": "Andreas Müller",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Hauptstraße",
            "hausnummer": "76",
            "uhrzeit": "11:22",
            "jahrgang": "2012",
            "name": "Anna Richter",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 2
        },
        {
            "strasse": "Rosenweg",
            "hausnummer": "68",
            "uhrzeit": "11:34",
            "jahrgang": "2015",
            "name": "Monika Meyer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "25",
            "uhrzeit": "11:50",
            "jahrgang": "2010, 2011",
            "name": "Thomas Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Birkenallee",
            "hausnummer": "16",
            "uhrzeit": "12:10",
            "jahrgang": "2012, 2013",
            "name": "Anna Schneider",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 13
        },
        {
            "strasse": "Eichenstraße",
            "hausnummer": "25",
            "uhrzeit": "12:30",
            "jahrgang": "2012, 2013",
            "name": "Stefan Richter",
            "farbe": "transparent",
            "spezialEvent": "Treffpunkt wechselt",
            "pause": 1
        },
        {
            "strasse": "Ulmenweg",
            "hausnummer": "68",
            "uhrzeit": "12:49",
            "jahrgang": "2010, 2011",
            "name": null,
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 6
        },
        {
            "strasse": "Lindenweg",
            "hausnummer": "53",
            "uhrzeit": "13:04",
            "jahrgang": "2014",
            "name": "Elisabeth Schäfer",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 7
        },
        {
            "strasse": "Schillerstraße",
            "hausnummer": "45",
            "uhrzeit": "13:19",
            "jahrgang": "2015",
            "name": "Christine Schröder",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 16
        },
        {
            "strasse": "Goetheweg",
            "hausnummer": "81",
            "uhrzeit": "13:37",
            "jahrgang": "2011",
            "name": "Stefan Schulz",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 0
        },
        {
            "strasse": "Tulpenstraße",
            "hausnummer": "32",
            "uhrzeit": "13:53",
            "jahrgang": "2014, 2015",
            "name": "Christian Zimmermann",
            "farbe": "transparent",
            "spezialEvent": null,
            "pause": 1
        }
    ]
};

getInitialData();

const socket = new WebSocket('ws://217.160.125.102:80');
        


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
        sendUpdatedAdress(currentIndex);
        updateNavigationView();
        hideRouteSection();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < addresses.length - 1) {
        currentIndex++;
        sendUpdatedAdress(currentIndex);
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
            sendUpdatedAdress(index);
        });

        addressesList.appendChild(card);
    });
}

async function getInitialData(){
    try {
        const response = await fetch('http://217.160.125.102:80/');
        
        if (!response.ok) {
          throw new Error(`HTTP-Fehler: ${response.status}`);
        }
    
        const data = await response.json();

        if(data != null){
            const jsonData = JSON.parse(data);
            const id = jsonData.id + '';

            selectedDay = jsonData.day;
            currentIndex = parseInt(id.substring(1), 0)-1;
            
            showAddressSelection();
            showNavigationView();

        }

        
        console.log(data);
      } catch (err) {
        console.error('❌ Fehler beim Abrufen der Daten:', err.message);
      }
}

socket.onmessage = (event) => {
    const data = JSON.parse(JSON.parse(event.data));
    const id = data.id + '';
    const newIndex = data.index;

    console.log(currentIndex + " : " + newIndex);

      if(currentIndex != newIndex){
          selectedDay = data.day;
          currentIndex = newIndex;
          showAddressSelection();
          showNavigationView();
          updateNavigationView();
        hideRouteSection();
      }
};

socket.onopen = () => console.log('WebSocket verbunden');
socket.onerror = (e) => console.error('WebSocket Fehler:', e);

function showNavigationView() {
    addressSelection.classList.add('hidden');
    navigationView.classList.remove('hidden');
    bottomNav.classList.remove('hidden');
    currentView = 'navigation-view';
    updateNavigationView();
    startDelayUpdates();
    hideRouteSection();
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

async function sendUpdatedAdress(index){
     await fetch('http://217.160.125.102:80/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"id": 1'+(index+1)+', "day": "'+selectedDay+'", "index": '+index+'}'
      });
}

