const driver = {
    abv:"XYZ",
    img:"F1/other/place-holder-driver.png",
    country:"F1/flags/checkered-flag-poster.png",
    podiumStyle:""
}

const ver = {
    abv:"VER",
    img:"F1/teams/redbull/drivers/VERicon.png",
    country:"F1/flags/NED.svg",
    podiumStyle:"redBull-BackgroundPrim redBull-Text",
};

const per = {
    abv:"PER",
    img:"F1/teams/redbull/drivers/PERicon.png",
    country:"F1/flags/MEX.png",
    podiumStyle:"redBull-BackgroundPrim redBull-Text",
};

const lec = {
    abv:"LEC",
    img:"F1/teams/ferrari/drivers/LECicon.png",
    country:"F1/flags/MON.svg",
    podiumStyle:"ferrari-BackgroundPrim ferrari-Text",
};

const sai = {
    abv:"SAI",
    img:"F1/teams/ferrari/drivers/SAIicon.png",
    country:"F1/flags/SPA.png",
    podiumStyle:"ferrari-BackgroundPrim ferrari-Text",
};

const ham = {
    abv:"HAM",
    img:"F1/teams/mercedes/drivers/HAMicon.png",
    country:"F1/flags/UK.svg",
    podiumStyle:"mercedes-BackgroundPrim mercedes-Text",
};

const rus = {
    abv:"RUS",
    img:"F1/teams/mercedes/drivers/RUSicon.png",
    country:"F1/flags/UK.svg",
    podiumStyle:"mercedes-BackgroundPrim mercedes-Text",
};

const alo = {
    abv:"ALO",
    img:"F1/teams/aston-martin/drivers/ALOicon.png",
    country:"F1/flags/SPA.png",
    podiumStyle:"aMartin-BackgroundPrim aMartin-Text",
};

const str = {
    abv:"STR",
    img:"F1/teams/aston-martin/drivers/STRicon.png",
    country:"F1/flags/CAN.svg",
    podiumStyle:"aMartin-BackgroundPrim aMartin-Text",
};

const gas = {
    abv:"GAS",
    img:"F1/teams/alpine/drivers/GASicon.png",
    country:"F1/flags/FRA.svg",
    podiumStyle:"alpine-BackgroundPrim alpine-Text"
}

const oco = {
    abv:"OCO",
    img:"F1/teams/alpine/drivers/OCOicon.png",
    country:"F1/flags/FRA.svg",
    podiumStyle:"alpine-BackgroundPrim alpine-Text"
}

const nor = {
    abv:"NOR",
    img:"F1/teams/mcLaren/drivers/NORicon.png",
    country:"F1/flags/UK.svg",
    podiumStyle:"mcLaren-BackgroundPrim mcLaren-Text"
}

const pia = {
    abv:"PIA",
    img:"F1/teams/mcLaren/drivers/PIAicon.png",
    country:"F1/flags/AUS.svg",
    podiumStyle:"mcLaren-BackgroundPrim mcLaren-Text"
}

const bah = {
    flag:"F1/flags/BAH.png", 
    country: "Bahrain", 
    title: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023",
    round: "R1",
    startDate: new Date("03 MAR 2023"),
    endDate: new Date("05 MAR 2023"),
    raceCancelled: false,
    p2:per, p1:ver, p3:alo
};

const sau = {
    flag:"F1/flags/SAU.png", 
    country: "Saudi Arabia", 
    title: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023",
    round: "R2",
    startDate: new Date("17 MAR 2023"),
    endDate: new Date("19 MAR 2023"),
    raceCancelled: false,
    p2:ver, p1:per, p3:alo
};

const au = {
    flag:"F1/flags/AUS.svg", 
    country: "Australia", 
    title: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023",
    round: "R3",
    startDate: new Date("31 MAR 2023"),
    endDate: new Date("02 APR 2023"),
    raceCancelled: false,
    p2:ham, p1:ver, p3:alo
};

const aze = {
    flag:"F1/flags/AZE.png", 
    country: "Azerbaijan", 
    title: "FORMULA 1 AZERBAIJAN GRAND PRIX 2023",
    round: "R4",
    startDate: new Date("28 APR 2023"),
    endDate: new Date("30 APR 2023"),
    raceCancelled: false,
    p2:ver, p1:per, p3:lec
};

const mia = {
    flag:"F1/flags/USA.png", 
    country: "United States", 
    title: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023",
    round: "R5",
    startDate: new Date("05 MAY 2023"),
    endDate: new Date("07 MAY 2023"),
    raceCancelled: false,
    p2:per, p1:ver, p3:alo
};

const imo = {
    flag:"F1/flags/ITA.png", 
    country: "Italy", 
    title: "FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023",
    round: "R6",
    startDate: new Date("19 MAY 2023"),
    endDate: new Date("21 MAY 2023"),
    raceCancelled: true,
    p2:driver, p1:driver, p3:driver
};

const mon = {
    flag:"F1/flags/MON.svg", 
    country: "Monaco", 
    title: "FORMULA 1 GRAND PRIX DE MONACO 2023",
    round: "R7",
    startDate: new Date("26 MAY 2023"),
    endDate: new Date("28 MAy 2023"),
    raceCancelled: false,
    p2:alo, p1:ver, p3:oco
};

const spa = {
    flag:"F1/flags/SPA.png", 
    country: "Spain", 
    title: "FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023",
    round: "R8",
    startDate: new Date("02 JUN 2023"),
    endDate: new Date("04 JUN 2023"),
    raceCancelled: false,
    p2:ham, p1:ver, p3:rus
};

const can = {
    flag:"F1/flags/CAN.svg", 
    country: "Canada", 
    title: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023",
    round: "R9",
    startDate: new Date("16 JUN 2023"),
    endDate: new Date("18 JUN 2023"),
    raceCancelled: false,
    p2:alo, p1:ver, p3:ham
};

const at = {
    flag:"F1/flags/AT.png", 
    country: "Austria", 
    title: "FORMULA 1 ROLEX GROSSER PREIS VON ÖSTERREICH 2023",
    round: "R10",
    startDate: new Date("30 JUN 2023"),
    endDate: new Date("02 JUL 2023"),
    raceCancelled: false,
    p2:lec, p1:ver, p3:per
};

const uk = {
    flag:"F1/flags/UK.svg", 
    country: "Great Britain", 
    title: "FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023",
    round: "R11",
    startDate: new Date("07 JUL 2023"),
    endDate: new Date("09 JUL 2023"),
    raceCancelled: false,
    p2:nor, p1:ver, p3:ham
};

const hun = {
    flag:"F1/flags/HUN.png", 
    country: "Hungary", 
    title: "FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023",
    round: "R12",
    startDate: new Date("21 JUL 2023"),
    endDate: new Date("23 JUL 2023"),
    raceCancelled: false,
    p2:nor, p1:ver, p3:per
};

const bel = {
    flag:"F1/flags/BEL.png", 
    country: "Belgium", 
    title: "FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023",
    circuit: "F1/circuits/belgiumCircuit.png",
    round: "R13",
    startDate: new Date("28 JUL 2023"),
    endDate: new Date("30 JUL 2023"),
    raceCancelled: false,
    p2:per, p1:ver, p3:lec
};

const ned = {
    flag:"F1/flags/NED.svg", 
    country: "Netherlands", 
    title: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023",
    circuit: "F1/circuits/nedCircuit.png",
    round: "R14",
    startDate: new Date("25 AUG 2023"),
    endDate: new Date("27 AUG 2023"),
    raceCancelled: false,
    p2:alo, p1:ver, p3:gas
};

const ita = {
    flag:"F1/flags/ITA.png", 
    country: "Italy", 
    title: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2023",
    circuit: "F1/circuits/italyCircuit.png",
    round: "R15",
    startDate: new Date("01 SEP 2023"),
    endDate: new Date("03 SEP 2023"),
    raceCancelled: false,
    p2:per, p1:ver, p3:sai
};

const sin = {
    flag:"F1/flags/SIN.png", 
    country: "Singapore", 
    title: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023",
    circuit: "F1/circuits/singaporeCircuit.png",
    round: "R16",
    startDate: new Date("15 SEP 2023"),
    endDate: new Date("17 SEP 2023"),
    raceCancelled: false,
    p2:nor, p1:sai, p3:ham
};

const jap = {
    flag:"F1/flags/JAP.svg", 
    country: "Japan", 
    title: "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023",
    circuit: "F1/circuits/japanCircuit.png",
    round: "R17",
    startDate: new Date("22 SEP 2023"),
    endDate: new Date("24 SEP 2023"),
    raceCancelled: false,
    p2:nor, p1:ver, p3:pia
};

const qat = {
    flag:"F1/flags/QAT.png", 
    country: "Qatar", 
    title: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023",
    circuit: "F1/circuits/qatarCircuit.png",
    round: "R18",
    startDate: new Date("06 OCT 2023"),
    endDate: new Date("08 OCT 2023"),
    raceCancelled: false,
    p2:pia, p1:ver, p3:nor
};

const cot = {
    flag:"F1/flags/USA.png", 
    country: "United States", 
    title: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    circuit: "F1/circuits/cotaCircuit.png",
    round: "R19",
    startDate: new Date("20 OCT 2023"),
    endDate: new Date("22 OCT 2023"),
    raceCancelled: false,
    p2:nor, p1:ver, p3:sai
};

const mex = {
    flag:"F1/flags/MEX.png", 
    country: "Mexico", 
    title: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023",
    circuit: "F1/circuits/mexicoCircuit.png",
    round: "R20",
    startDate: new Date("27 OCT 2023"),
    endDate: new Date("29 OCT 2023"),
    raceCancelled: false,
    p2:driver, p1:driver, p3:driver
};

const bra = {
    flag:"F1/flags/BRA.png", 
    country: "Brazil", 
    title: "FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023",
    circuit: "F1/circuits/brazilCircuit.png",
    round: "R21",
    startDate: new Date("03 NOV 2023"),
    endDate: new Date("05 NOV 2023"),
    raceCancelled: false,
    p2:driver, p1:driver, p3:driver
};

const las = {
    flag:"F1/flags/USA.png", 
    country: "United States", 
    title: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
    circuit: "F1/circuits/lasvegasCircuit.png",
    round: "R22",
    startDate: new Date("16 NOV 2023"),
    endDate: new Date("18 NOV 2023"),
    raceCancelled: false,
    p2:driver, p1:driver, p3:driver
};

const abu = {
    flag:"F1/flags/UAE.png", 
    country: "United Arab Emirates", 
    title: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
    circuit: "F1/circuits/abudhabiCircuit.png",
    round: "R23",
    startDate: new Date("24 NOV 2023"),
    endDate: new Date("26 NOV 2023"),
    raceCancelled: false,
    p2:driver, p1:driver, p3:driver
};

const raceSchedule = [bah, sau, au, aze, mia, imo, mon, spa, can, at, uk, hun, bel, ned, ita, sin, jap, qat, cot, mex, bra, las, abu];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function getRaceDate(race) {
    let dateString = "";
    let sDay = race.startDate.getDate();
    let eDay = race.endDate.getDate();
    if(sDay < 10) {
        sDay = "0" + sDay;
    }
    if(eDay < 10) {
        eDay = "0" + eDay;
    }
    dateString += sDay + "-" + eDay + " ";
    dateString += months[race.startDate.getMonth()];

    if(race.startDate.getMonth() != race.endDate.getMonth()) {
        dateString += "-" + months[race.endDate.getMonth()];
    }
    return dateString;
}

let currentDate = new Date();
const raceCountryName = document.getElementsByClassName("raceCountryName");
const raceTitle = document.getElementsByClassName("raceTitle");
const raceRoundNumber = document.getElementsByClassName("raceRoundNumber");
const raceDate = document.getElementsByClassName("raceDate");
const raceCover = document.getElementsByClassName("raceCover");

const podium = document.getElementsByClassName("podium");
const leftPodium = document.getElementsByClassName("leftPodium");
const centerPodium = document.getElementsByClassName("centerPodium");
const rightPodium = document.getElementsByClassName("rightPodium");

const p2DriverImage = document.getElementsByClassName("p2DriverImage");
const p2DriverName = document.getElementsByClassName("p2DriverName");
const p2DriverCountryImage = document.getElementsByClassName("p2DriverCountryImage");

const p1DriverImage = document.getElementsByClassName("p1DriverImage");
const p1DriverName = document.getElementsByClassName("p1DriverName");
const p1DriverCountryImage = document.getElementsByClassName("p1DriverCountryImage");

const p3DriverImage = document.getElementsByClassName("p3DriverImage");
const p3DriverName = document.getElementsByClassName("p3DriverName");
const p3DriverCountryImage = document.getElementsByClassName("p3DriverCountryImage");

function displayRaces (race, i) {
    raceCountryName[i].innerHTML = race.country;
    raceTitle[i].innerHTML = race.title;
    raceRoundNumber[i].innerHTML = "R" + (i+1);
    raceDate[i].innerHTML = getRaceDate(race);
    raceCover[i].style.background = "#fff url(" + race.flag + ") no-repeat center/cover";

    if(race.startDate.getMonth() <= currentDate.getMonth()) {
        displayRaceResults(race, i);
    } else if(race.startDate.getDate() < currentDate.getDate()) {
        displayUpcomingRaces(race, i);
    }
}

function displayRaceResults(race, i) {
    leftPodium[i].setAttribute("class", "podiumDriver flexColumn " + race.p2.podiumStyle + " leftPodium");
    centerPodium[i].setAttribute("class", "podiumDriver flexColumn " + race.p1.podiumStyle + " centerPodium");
    rightPodium[i].setAttribute("class", "podiumDriver flexColumn " + race.p3.podiumStyle + " rightPodium");

    p2DriverImage[i].src = race.p2.img;
    p2DriverName[i].innerHTML = race.p2.abv;
    p2DriverCountryImage[i].src = race.p2.country;
    
    p1DriverImage[i].src = race.p1.img;
    p1DriverName[i].innerHTML = race.p1.abv;
    p1DriverCountryImage[i].src = race.p1.country;

    p3DriverImage[i].src = race.p3.img;
    p3DriverName[i].innerHTML = race.p3.abv;
    p3DriverCountryImage[i].src = race.p3.country;
}

function displayCancelledRaces(race,i) {
    podium[i].innerHTML = "<img id='calledOff' src='F1/other/CALLEDOFF.png'>";
}

function displayUpcomingRaces(race, i) {
    podium[i].innerHTML = "<img id='circuit' src='" + race.circuit + "'>";
}

for(let i = 0; i<raceSchedule.length;i+=1) {
    displayRaces(raceSchedule[i], i);
}

for(let i = 0; i<raceSchedule.length;i+=1) {
    if(raceSchedule[i].raceCancelled == true) {
        displayCancelledRaces(raceSchedule[i], i);
    }
}