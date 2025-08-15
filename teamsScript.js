class Team {
  constructor(base,teamCheif,chassis,pUnit,firstTeamEntry,wDC,bestRaceFinish,poles,fastestLaps) {
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

  getTeamLabels() {
    const teamLabels = ["Base:", "Team Cheif:", "Chassis:", "Power Unit:", "First Team Entry:", "World Championships:", "Highest Race Finish:",  "Pole Positions:",  "Fastest Laps:"];

    let labelText = "";
    for (let i = 0; i < teamLabels.length; i++) {
      labelText += "<tr><td>" + teamLabels[i] + "</td></tr>";
    }

    return labelText;
  }

  getTeamInfo() {
    const stats = [this.base,this.teamCheif,this.chassis, this.pUnit,this.firstTeamEntry, this.wDC,this.bestRaceFinish,this.poles,this.fastestLaps];

    let infoText = "";
    for (let i = 0; i < stats.length; i++) {
      infoText += "<tr><td>" + stats[i] + "</td></tr>";
    }

    return infoText;
  }
}

const redBull = new Team(
  "Milton Keynes, United Kingdom",
  "Christian Horner",
  "RB19","Honda RBPT","1997","5","1 (x105)","93","92"
);

const ferrari = new Team(
  "Maranello, Italy",
  "Frédéric Vasseur",
  "SF-23","Ferrari","1950","16","1 (x243)","246","259"
);

const mercedes = new Team(
  "Brackley, United Kingdom",
  "Toto Wolff",
  "W14","Mercedes","1970","8","1 (x116)","129","94"
);

const alpine = new Team(
  "Enstone, United Kingdom",
  "Bruno Famin",
  "A523","Renault","1986","2","1 (x21)","20","15"
);

const mclaren = new Team(
  "Woking, United Kingdom",
  "Andrea Stella",
  "MCL60","Mercedes","1966","8","1 (x183)","156","163"
);

const aRomeo = new Team(
  "Hinwil, Switzerland",
  "James Key",
  "C43","Ferrari","1993","N/A","1 (x1)","1","7"
);

const aMartin = new Team(
  "Silverstone, United Kingdom",
  "Mike Krack",
  "AMR23","Mercedes","2018","N/A","1 (x1)","1","1"
);

const haas = new Team(
  "Kannapolis, United States",
  "Guenther Steiner",
  "VF-23","Ferrari","2016","N/A","4 (x1)","1","2"
);

const aTauri = new Team(
  "Faenza, Italy",
  "Franz Tost",
  "AT04","Honda RBPT","1985","N/A","1 (x2)","1","2"
);

const williams = new Team(
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

function displayTeamStats(team, i) {
  const labels = document.getElementsByClassName("labels");
  labels[i].innerHTML = team.getTeamLabels();

  const info = document.getElementsByClassName("stats");
  info[i].innerHTML = team.getTeamInfo();
}

for (let i = 0; i < teams.length; i++) {
  displayTeamStats(teams[i], i);
}

function mOverDriver(driver) {
  const x = document.getElementsByClassName(driver);
  x[0].style.opacity = "50%";
  x[1].style.opacity = "50%";
}

function mOutDriver(driver) {
  const x = document.getElementsByClassName(driver);
  x[0].style.opacity = "100%";
  x[1].style.opacity = "100%";
}
