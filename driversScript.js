class Driver {
  constructor(fName, lName,dateOB,placeOB,podiums,points,gpsEntered,wDC,bestResult,bestGridPos) {
    this.fName = fName;
    this.lName = lName;

    this.dateOB = dateOB;
    this.placeOB = placeOB;
    this.podiums = podiums;
    this.points = points;
    this.gpsEntered = gpsEntered;
    this.wDC = wDC;
    this.bestResult = bestResult;
    this.bestGridPos = bestGridPos;
  }

  getDriverLabels() {
    const labels = [
      "Date of Birth:", 
      "Place of Birth:", 
      "Podiums:", 
      "Points:", 
      "Grand Prix Entered:", 
      "World Championships:", 
      "Highest Race Finish:", 
      "Highest Grid Position:"];

    let labelsText = "";
    for (let i = 0; i < labels.length; i++) {
      labelsText += "<tr><td>" + labels[i] + "</td></tr>";
    }

    return labelsText;
  }

  getDriverStats() {
    const stats = [this.dateOB, this.placeOB, this.podiums,this.points,this.gpsEntered,this.wDC, this.bestResult,this.bestGridPos];

    let infoText = "";
    for (let i = 0; i < stats.length; i++) {
      infoText += "<tr><td>" + stats[i] + "</td></tr>";
    }

    return infoText;
  }
}

const maxVer = new Driver(
  "Max","Verstappen",
  "30/09/1997","Hasselt, Belgium",
  "89","2325.5", "175", "2", "1 (x45)","1"
);

const serPer = new Driver(
  "Sergio","Perez",
  "26/01/1990","Guadalajara, Mexico",
  "33","1402","249", "N/A","1 (x6)","1"
);

const chaLec = new Driver(
  "Charles","Leclerc",
  "16/10/1997","Monte Carlo, Monaco",
  "27","967","115","N/A","1 (x5)","1"
);

const carSai = new Driver(
  "Carlos","Sainz",
  "01/09/1994","Madrid, Spain",
  "15","4553.5","322","7","1 (x103)","1"
);

const lewHam = new Driver(
  "Lewis","Hamilton",
  "07/01/1985","Stevenage, England",
  "195","967","115","N/A","1 (x5)","1"
);

const geoRus = new Driver(
  "George","Russell",
  "15/02/1998","King's Lynn, England",
  "10","393","95","N/A","1 (x1)","1"
);

const pieGas = new Driver(
  "Pierre","Gasly",
  "07/02/1996","Rouen, France",
  "3","354","120","N/A","1 (x1)","2"
);

const estOco = new Driver(
  "Esteban","Ocon",
  "17/09/1996","Évreux, Normandy",
  "3","400","124","N/A","1 (x1)","3"
);

const lanNor = new Driver(
  "Lando","Norris",
  "13/11/1999","Bristol, England",
  "8","497","94","N/A","2 (x3)","1"
);

const oscPia = new Driver(
  "Oscar","Piastri",
  "06/04/2001","Melbourne, Victoria",
  "N/A","36","13","N/A","4 (x1)","3"
);

const valBot = new Driver(
  "Valteri","Bottas",
  "28/08/1989","Nastola, Finland",
  "67","1792","213","N/A","1 (x10)","1"
);

const zhoGua = new Driver(
  "Guanyu","Zhou",
  "30/05/1999","Shanghai, China",
  "N/A","10","34","N/A","8 (x1)","5"
);

const ferAlo = new Driver(
  "Fernando","Alonso",
  "29/07/1981","Oviedo, Spain",
  "104","2210","370","2","1 (x32)","1"
);

const lanStr = new Driver(
  "Lance","Stroll",
  "29/10/1998","Montreal, Canada",
  "3","241","135","N/A","3 (x3)","1"
);

const kevMag = new Driver(
  "Kevin","Magnussen",
  "05/10/1992", "Roskilde, Denmark",
  "1","185","154","N/A","2 (x1)","4"
);

const nicHul = new Driver(
  "Nico","Hulkenberg",
  "19/08/1987","Emmerich am Rhein, Germany",
  "N/A","530","197","N/A","4 (x3)","1"
);

const yukTsu = new Driver(
  "Yuki","Tsunoda",
  "11/05/2000","Sagamihara, Japan",
  "N/A","47","57","N/A","4 (x1)","7"
);

const danRic = new Driver(
  "Daniel","Ricciardo",
  "01/07/1989","Perth, Australia",
  "32","1311","234","N/A","1 (x8)","1"
);

const aleAlb = new Driver(
  "Alexander","Albon",
  "23/03/1996","London, England",
  "2","212","71","N/A", "3 (x2)","4"
);

const logSar = new Driver(
  "Logan","Sargeant",
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

function displayDriverStats(driverName, i) {
  const firstNames = document.getElementsByClassName("fname");
  firstNames[i].innerHTML = driverName.fName;

  const lastNames = document.getElementsByClassName("lname");
  lastNames[i].innerHTML = driverName.lName;

  const labels = document.getElementsByClassName("labels");
  labels[i].innerHTML = driverName.getDriverLabels();

  const info2 = document.getElementsByClassName("information");
  info2[i].innerHTML = driverName.getDriverStats();
}

for (let i = 0; i < drivers.length; i++) {
  displayDriverStats(drivers[i], i);
}
