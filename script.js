class Driver {
    constructor(fName,lName,image,icon,numImg,flagImg,dateOB,placeOB,podiums,points,gpsEntered,wDC,bestResult,bestGridPos) {
        this.fName = fName;
        this.lName = lName;
        this.abv = lName[0]+lName[1]+lName[2];

        this.image = image;
        this.icon = icon;
        this.numImg = numImg;
        this.flagImg = flagImg;

        this.dateOB = dateOB;
        this.placeOB = placeOB;
        this.podiums = podiums;
        this.points = points;
        this.gpsEntered = gpsEntered;
        this.wDC = wDC;
        this.bestResult = bestResult;
        this.bestGridPos = bestGridPos;
    }

    getLabels() {
        const labels = [
            "Date of Birth:", 
            "Place of Birth:", 
            "Podiums:", 
            "Points:", 
            "Grand Prix Entered:", 
            "World Championships:", 
            "Highest Race Finish:", 
            "Highest Grid Position:"
        ];

        let labelsText = "";
        for (let i = 0; i < labels.length; i++) {
            labelsText += "<tr><td>" + labels[i] + "</td></tr>";
        }

        return labelsText;
    }

    getStats() {
        const stats = [this.dateOB, this.placeOB, this.podiums,this.points,this.gpsEntered,this.wDC, this.bestResult,this.bestGridPos];

        let infoText = "";
        for (let i = 0; i < stats.length; i++) {
            infoText += "<tr><td>" + stats[i] + "</td></tr>";
        }

        return infoText;
    }
};

const maxVer = new Driver(
    "Max","Verstappen",
    "F1/drivers/VER/img.png",
    "F1/drivers/VER/icon.png",
    "F1/drivers/VER/num.png",
    "F1/flags/NED.svg",
    "30/09/1997","Hasselt, Belgium",
    "89","2325.5", "175", "2", "1 (x45)","1"
);

const serPer = new Driver(
    "Sergio","Perez",
    "F1/drivers/PER/img.png",
    "F1/drivers/PER/icon.png",
    "F1/drivers/PER/num.png",
    "F1/flags/MEX.svg",
    "26/01/1990","Guadalajara, Mexico",
    "33","1402","249", "N/A","1 (x6)","1"
);

const chaLec = new Driver(
    "Charles","Leclerc",
    "F1/drivers/LEC/img.png",
    "F1/drivers/LEC/icon.png",
    "F1/drivers/LEC/num.png",
    "F1/flags/MON.svg",
    "16/10/1997","Monte Carlo, Monaco",
    "27","967","115","N/A","1 (x5)","1"
);

const carSai = new Driver(
    "Carlos","Sainz",
    "F1/drivers/SAI/img.png",
    "F1/drivers/SAI/icon.png",
    "F1/drivers/SAI/num.png",
    "F1/flags/SPA.svg",
    "01/09/1994","Madrid, Spain",
    "15","4553.5","322","7","1 (x103)","1"
);

const lewHam = new Driver(
    "Lewis","Hamilton",
    "F1/drivers/HAM/img.png",
    "F1/drivers/HAM/icon.png",
    "F1/drivers/HAM/num.png",
    "F1/flags/UK.svg",
    "07/01/1985","Stevenage, England",
    "195","967","115","N/A","1 (x5)","1"
);

const geoRus = new Driver(
    "George","Russell",
    "F1/drivers/RUS/img.png",
    "F1/drivers/RUS/icon.png",
    "F1/drivers/RUS/num.png",
    "F1/flags/UK.svg",
    "15/02/1998","King's Lynn, England",
    "10","393","95","N/A","1 (x1)","1"
);

const pieGas = new Driver(
    "Pierre","Gasly",
    "F1/drivers/GAS/img.png",
    "F1/drivers/GAS/icon.png",
    "F1/drivers/GAS/num.png",
    "F1/flags/UK.svg",
    "07/02/1996","Rouen, France",
    "3","354","120","N/A","1 (x1)","2"
);

const estOco = new Driver(
    "Esteban","Ocon",
    "F1/drivers/OCO/img.png",
    "F1/drivers/OCO/icon.png",
    "F1/drivers/OCO/num.png",
    "F1/flags/UK.svg",
    "17/09/1996","Évreux, Normandy",
    "3","400","124","N/A","1 (x1)","3"
);

const lanNor = new Driver(
    "Lando","Norris",
    "F1/drivers/NOR/img.png",
    "F1/drivers/NOR/icon.png",
    "F1/drivers/NOR/num.png",
    "F1/flags/UK.svg",
    "13/11/1999","Bristol, England",
    "8","497","94","N/A","2 (x3)","1"
);

const oscPia = new Driver(
    "Oscar","Piastri",
    "F1/drivers/PIA/img.png",
    "F1/drivers/PIA/icon.png",
    "F1/drivers/PIA/num.png",
    "F1/flags/UK.svg",
    "06/04/2001","Melbourne, Victoria",
    "N/A","36","13","N/A","4 (x1)","3"
);

const valBot = new Driver(
    "Valteri","Bottas",
    "F1/drivers/BOT/img.png",
    "F1/drivers/BOT/icon.png",
    "F1/drivers/BOT/num.png",
    "F1/flags/UK.svg",
    "28/08/1989","Nastola, Finland",
    "67","1792","213","N/A","1 (x10)","1"
);

const zhoGua = new Driver(
    "Guanyu","Zhou",
    "F1/drivers/ZHO/img.png",
    "F1/drivers/ZHO/icon.png",
    "F1/drivers/ZHO/num.png",
    "F1/flags/UK.svg",
    "30/05/1999","Shanghai, China",
    "N/A","10","34","N/A","8 (x1)","5"
);

const ferAlo = new Driver(
    "Fernando","Alonso",
    "F1/drivers/ALO/img.png",
    "F1/drivers/ALO/icon.png",
    "F1/drivers/ALO/num.png",
    "F1/flags/UK.svg",
    "29/07/1981","Oviedo, Spain",
    "104","2210","370","2","1 (x32)","1"
);

const lanStr = new Driver(
    "Lance","Stroll",
    "F1/drivers/STR/img.png",
    "F1/drivers/STR/icon.png",
    "F1/drivers/STR/num.png",
    "F1/flags/UK.svg",
    "29/10/1998","Montreal, Canada",
    "3","241","135","N/A","3 (x3)","1"
);

const kevMag = new Driver(
    "Kevin","Magnussen",
    "F1/drivers/MAG/img.png",
    "F1/drivers/MAG/icon.png",
    "F1/drivers/MAG/num.png",
    "F1/flags/UK.svg",
    "05/10/1992", "Roskilde, Denmark",
    "1","185","154","N/A","2 (x1)","4"
);

const nicHul = new Driver(
    "Nico","Hulkenberg",
    "F1/drivers/HUL/img.png",
    "F1/drivers/HUL/icon.png",
    "F1/drivers/HUL/num.png",
    "F1/flags/UK.svg",
    "19/08/1987","Emmerich am Rhein, Germany",
    "N/A","530","197","N/A","4 (x3)","1"
);

const yukTsu = new Driver(
    "Yuki","Tsunoda",
    "F1/drivers/TSU/img.png",
    "F1/drivers/TSU/icon.png",
    "F1/drivers/TSU/num.png",
    "F1/flags/UK.svg",
    "11/05/2000","Sagamihara, Japan",
    "N/A","47","57","N/A","4 (x1)","7"
);

const danRic = new Driver(
    "Daniel","Ricciardo",
    "F1/drivers/RIC/img.png",
    "F1/drivers/RIC/icon.png",
    "F1/drivers/RIC/num.png",
    "F1/flags/UK.svg",
    "01/07/1989","Perth, Australia",
    "32","1311","234","N/A","1 (x8)","1"
);

const aleAlb = new Driver(
    "Alexander","Albon",
    "F1/drivers/ALB/img.png",
    "F1/drivers/ALB/icon.png",
    "F1/drivers/ALB/num.png",
    "F1/flags/UK.svg",
    "23/03/1996","London, England",
    "2","212","71","N/A", "3 (x2)","4"
);

const logSar = new Driver(
    "Logan","Sargeant",
    "F1/drivers/SAR/img.png",
    "F1/drivers/SAR/icon.png",
    "F1/drivers/SAR/num.png",
    "F1/flags/UK.svg",
    "31/12/2000","Fort Lauderdale, Florida",
    "N/A","0","13","N/A","11 (x1)","10"
);

const drivers = [
    maxVer,serPer,
    chaLec,carSai,
    lewHam,geoRus,
    pieGas,estOco,
    lanNor,oscPia,
    valBot,zhoGua,
    ferAlo,lanStr,
    kevMag,nicHul,
    yukTsu,danRic,
    aleAlb,logSar
];

class Team {
    constructor(driver1,driver2,podiumStyle,logo,icon,car,base,teamCheif,chassis,pUnit,firstTeamEntry,wDC,bestRaceFinish,poles,fastestLaps) {
        this.driver1 = driver1;
        this.driver2 = driver2;

        this.podiumStyle = podiumStyle;
        this.logo = logo;
        this.icon = icon;
        this.car = car;

        this.base = base;
        this.teamCheif = teamCheif;
        this.chassis = chassis;
        this.pUnit = pUnit;
        this.firstTeamEntry = firstTeamEntry;
        this.wDC = wDC;
        this.bestRaceFinish = bestRaceFinish;
        this.poles = poles;
        this.fastestLaps = fastestLaps;
    }

    getLabels() {
        const teamLabels = [
            "Base:", 
            "Team Cheif:", 
            "Chassis:", 
            "Power Unit:", 
            "First Team Entry:", 
            "World Championships:", 
            "Highest Race Finish:",  
            "Pole Positions:",  
            "Fastest Laps:"
        ];
        
        let labelText = "";
        for (let i = 0; i < teamLabels.length; i++) {
            labelText += "<tr><td>" + teamLabels[i] + "</td></tr>";
        }
        return labelText;
    }
  
    getStats() {
        const stats = [this.base,this.teamCheif,this.chassis, this.pUnit,this.firstTeamEntry, this.wDC,this.bestRaceFinish,this.poles,this.fastestLaps];

        let infoText = "";
        for (let i = 0; i < stats.length; i++) {
            infoText += "<tr><td>" + stats[i] + "</td></tr>";
        }

        return infoText;
    }
}

const redBull = new Team(
    maxVer,serPer,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Milton Keynes, United Kingdom",
    "Christian Horner",
    "RB19","Honda RBPT","1997","5","1 (x105)","93","92"
);

const ferrari = new Team(
    chaLec,carSai,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Maranello, Italy",
    "Frédéric Vasseur",
    "SF-23","Ferrari","1950","16","1 (x243)","246","259"
);

const mercedes = new Team(
    lewHam,geoRus,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Brackley, United Kingdom",
    "Toto Wolff",
    "W14","Mercedes","1970","8","1 (x116)","129","94"
);

const alpine = new Team(
    pieGas,estOco,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Enstone, United Kingdom",
    "Bruno Famin",
    "A523","Renault","1986","2","1 (x21)","20","15"
);

const mclaren = new Team(
    lanNor,oscPia,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Woking, United Kingdom",
    "Andrea Stella",
    "MCL60","Mercedes","1966","8","1 (x183)","156","163"
);

const aRomeo = new Team(
    valBot,zhoGua,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Hinwil, Switzerland",
    "James Key",
    "C43","Ferrari","1993","N/A","1 (x1)","1","7"
);

const aMartin = new Team(
    ferAlo,lanStr,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Silverstone, United Kingdom",
    "Mike Krack",
    "AMR23","Mercedes","2018","N/A","1 (x1)","1","1"
);

const haas = new Team(
    kevMag,nicHul,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Kannapolis, United States",
    "Guenther Steiner",
    "VF-23","Ferrari","2016","N/A","4 (x1)","1","2"
);

const aTauri = new Team(
    yukTsu,danRic,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Faenza, Italy",
    "Franz Tost",
    "AT04","Honda RBPT","1985","N/A","1 (x2)","1","2"
);

const williams = new Team(
    aleAlb,logSar,
    "redBull-BackgroundPrim redBull-Text",
    "F1/teams/redbull/logo.png",
    "F1/teams/redbull/icon.png",
    "F1/teams/redbull/car.png",
    "Grove, United Kingdom",
    "James Vowles",
    "FW45","Mercedes","1978","9","1 (x114)","128","133"
);

const teams = [
    redBull,
    ferrari,
    mercedes,
    alpine,
    mclaren,
    aRomeo,
    aMartin,
    haas,
    aTauri,
    williams,
];

function displayDriverStats(driver, i) {
    const firstNames = document.getElementsByClassName("fname");
    firstNames[i].innerHTML = driver.fName;

    const lastNames = document.getElementsByClassName("lname");
    lastNames[i].innerHTML = driver.lName;

    const labels = document.getElementsByClassName("labels");
    labels[i].innerHTML = driver.getLabels();

    const info2 = document.getElementsByClassName("stats");
    info2[i].innerHTML = driver.getStats();
    }

for (let i = 0; i < drivers.length; i++) {
    displayDriverStats(drivers[i], i);
}
