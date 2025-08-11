class Driver {
    constructor(name, team, time) {
        this.name = name;
        this.team = team;
        this.time = time;
    }
}

const prevRace = {
    completed: true,
    currRace: false,
    round: "20",
    country: "Mexico",
    title: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2023",
    flag:"F1/flags/MEX.png", 
    startDate: new Date("27 OCT 2023, 12:30:00"),
    endDate: new Date("29 OCT 2023"),

    firstPlace: ["F1/teams/redbull/drivers/VER.png","Verstappen"],
    results: [
        {driver:["1", "Max Verstappen", "RED BULL RACING HONDA RBPT", "1:35:21.362", "redbull"]},
        {driver:["2", "Lando Norris", "MCLAREN MERECEDES", "+10.730s", "mclaren"]},
        {driver:["3", "Carlos Sainz", "FERRARI", "+15.134s", "ferrari"]},
        {driver:["4", "Sergio Perez", "RED BULL RACING HONDA RBPT", "+18.460s", "redbull"]},
        {driver:["5", "George Russell", "MERECEDES", "+24.999s", "mercedes"]},
        {driver:["6", "Pierre Gasly", "ALPINE", "+47.996s", "alpine"]},
        {driver:["7", "Lance Stroll", "ASTON MARTIN ARAMCO MERCEDES", "+48.696s", "astonmartin"]},
        {driver:["8", "Yuki Tsunoda", "ALPHATAURI HONDA RBPT", "+74.385s", "alphatauri"]},
        {driver:["9", "Alexander Albon", "WILLIAMS MERCEDES", "+86.714s", "williams"]},
        {driver:["10", "Logan Sargeant", "WILLIAMS MERCEDES", "+87.998s", "williams"]}
    ],
    fastestLap: ["Yuki Tsunoda", "ALPHATAURI HONDA RBPT", "1:38.139"],
};

const currRace = {
    completed: false,
    currRace: true,

    round: "21",
    country: "Brazil",
    title: "FORMULA 1 ROLEX GRANDE PRÊMIO DE SÃO PAULO 2023",
    flag:"F1/flags/BRA.png", 
    startDate: new Date("03 NOV 2023, 11:30:00"),
    endDate: new Date("05 NOV 2023"),

    utcDiff: -3,
    localTZOffset: new Date().getTimezoneOffset() / (60),
    schedule: [
        session = {
            title: "Practice 1",
            startTime: new Date("03 NOV 2023, 11:30:00"),
            endTime: new Date("03 NOV 2023, 12:30:00"),
        },
        session = {
            title: "Qualifying",
            startTime: new Date("03 NOV 2023, 15:00:00"),
            endTime: new Date("03 NOV 2023, 16:00:00"),
        },
        session = {
            title: "Sprint Shootout",
            startTime: new Date("04 NOV 2023, 11:30:00"),
            endTime: new Date("04 NOV 2023, 11:44:00"),
        },
        session = {
            title: "Sprint",
            startTime: new Date("04 NOV 2023, 15:30:00"),
            endTime: new Date("04 NOV 2023, 16:30:00"),
        },
        session = {
            title: "Race",
            startTime: new Date("05 NOV 2023, 14:00:00"),
        },
    ],
};

const race1 = {
    completed: false,
    currRace: false,
    round: "22",
    country: "United States",
    title: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023",
    flag:"F1/flags/USA.png", 
    startDate: new Date("16 NOV 2023, 20:30:00"),
    endDate: new Date("18 NOV 2023"),

    utcDiff: -8,
    localTZOffset: new Date().getTimezoneOffset() / (60),
    schedule: [
        session = {
            title: "Practice 1",
            startTime: new Date("16 NOV 2023, 20:30:00"),
            endTime: new Date("16 NOV 2023, 21:30:00"),
        },
        session = {
            title: "Practice 2",
            startTime: new Date("17 NOV 2023, 00:00:00"),
            endTime: new Date("17 NOV 2023, 01:00:00"),
        },
        session = {
            title: "Practice 3",
            startTime: new Date("17 NOV 2023, 20:30:00"),
            endTime: new Date("17 NOV 2023, 21:30:00"),
        },
        session = {
            title: "Qualifying",
            startTime: new Date("18 NOV 2023, 00:00:00"),
            endTime: new Date("18 NOV 2023, 01:00:00"),
        },
        session = {
            title: "Race",
            startTime: new Date("18 NOV 2023, 22:00:00"),
        },
    ],
};

const race2 = {
    completed: false,
    currRace: false,
    round: "23",
    country: "Abu Dhabi",
    title: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023",
    flag:"F1/flags/UAE.png", 
    startDate: new Date("24 NOV 2023, 13:30:00"),
    endDate: new Date("26 NOV 2023"),

    utcDiff: 4,
    localTZOffset: new Date().getTimezoneOffset() / (60),
    schedule: [
        session = {
            title: "Practice 1",
            startTime: new Date("24 NOV 2023, 13:30:00"),
            endTime: new Date("24 NOV 2023, 14:30:00"),
        },
        session = {
            title: "Practice 2",
            startTime: new Date("24 NOV 2023, 17:00:00"),
            endTime: new Date("24 NOV 2023, 18:00:00"),
        },
        session = {
            title: "Practice 3",
            startTime: new Date("25 NOV 2023, 14:30:00"),
            endTime: new Date("25 NOV 2023, 15:30:00"),
        },
        session = {
            title: "Qualifying",
            startTime: new Date("25 NOV 2023, 18:00:00"),
            endTime: new Date("25 NOV 2023, 19:00:00"),
        },
        session = {
            title: "Race",
            startTime: new Date("26 NOV 2023, 17:00:00"),
        },
    ],
};

const raceSchedule = [prevRace, currRace, race1, race2];
const remainingRaces = [race1, race2];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

let trackBtnActive = true;
let localBtnActive = false;

function toggleTime(btnID) {
    if (btnID == "local" && !localBtnActive) {
        displayLocalTime();
        trackBtnActive = false;
        localBtnActive = true;
    } else if(btnID == "track" && !trackBtnActive){
        displayTrackTime();
        trackBtnActive = true;
        localBtnActive = false;
    }
}

function displayLocalTime() {
    for(let i in currRace.schedule) {
        let session = currRace.schedule[i];
        session.startTime.setHours(session.startTime.getHours() - currRace.localTZOffset - currRace.utcDiff);
        if(session.title != "Race") {
            session.endTime.setHours(session.endTime.getHours() - currRace.localTZOffset - currRace.utcDiff);
        }
    }
    displayCurrRace(currRace);
    toggleActiveBtn("localTimeBtn", "trackTimeBtn");

}

function displayTrackTime() {
    for(let i in currRace.schedule) {
        let session = currRace.schedule[i];
        session.startTime.setHours(session.startTime.getHours() + currRace.localTZOffset + currRace.utcDiff);
        if(session.title != "Race") {
            session.endTime.setHours(session.endTime.getHours() + currRace.localTZOffset + currRace.utcDiff);
        }
    }
    displayCurrRace(currRace);
    toggleActiveBtn("trackTimeBtn", "localTimeBtn");
}

function getTZOffset(session, tzOffset) {
    session.startTime.setHours(session.startTime.getHours() - tzOffset);
    if(session.title != "Race") {
        session.endTime.setHours(session.endTime.getHours() - tzOffset);
    }
}

function toggleActiveBtn(onBtn, offBtn) {
    document.getElementById(onBtn).className = "button activeBtn"
    document.getElementById(offBtn).className = "button"
}

function getRaceDate(race) {
    let dateString = "";
    let sDay = race.startDate.getDate();
    let eDay = race.endDate.getDate();

    if(sDay < 10) {sDay = "0" + sDay;}
    if(eDay < 10) {eDay = "0" + eDay;}
    
    dateString += sDay + " - " + eDay + " ";
    dateString += months[race.startDate.getMonth()];

    if(race.startDate.getMonth() != race.endDate.getMonth()) {
        dateString += " - " + months[race.endDate.getMonth()];
    }
    return dateString;
}

function getGPCountDown(race) {
    let countDownArray = [];
    let now = new Date();
    now.setHours(now.getHours() + race.localTZOffset + race.utcDiff);
    let today = now.getTime();
    let countDownDate = race.startDate.getTime();
    
    let diff = countDownDate - today;

    let days = Math.floor(diff / (1000*60*60*24));
    if(days < 10) {days = "0" + days;}
    let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    if(hours < 10) {hours = "0" + hours;}
    let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    if(minutes < 10) {minutes = "0" + minutes;}

    countDownArray.push(days);
    countDownArray.push(hours);
    countDownArray.push(minutes);

    if (diff < 0) {
        countDownArray = ["00","00","00"];
    }

    return countDownArray;
}

function getScheduleArr(race){
    let array = [[]];
    for (let i in race.schedule) {
        let innerArray = [];
        innerArray.push(race.schedule[i].title);
        innerArray.push(days[race.schedule[i].startTime.getDay()]);

        innerArray.push(getTime(race, i));

        array[i] = innerArray;
    }
    return array;
}

function getTime(race, i) {
    let sHours = race.schedule[i].startTime.getHours();
    let sMins = race.schedule[i].startTime.getMinutes();
    if (sHours < 10) {sHours = "0" + sHours;}
    if (sMins == 0) {sMins = sMins + "0";}

    if (race.schedule[i].title != "Race") {
        let eHours = race.schedule[i].endTime.getHours();
        let eMins = race.schedule[i].endTime.getMinutes();
        if (eHours < 10) {eHours = "0" + eHours;}
        if (eMins == 0) {eMins = eMins + "0";}
        
        return sHours + ":" + sMins + " - " + eHours + ":" + eMins;
    } 

    return sHours + ":" + sMins;
}

const raceHeader = document.getElementsByClassName("raceHeader");
const raceRoundNumber = document.getElementsByClassName("roundNumber");
const raceSubHeader = document.getElementsByClassName("raceSubHeader");

const nextRaceCard = document.getElementsByClassName("nextRaceCard");
const nextRaceHeader = document.getElementsByClassName("nextRaceHeader");
const nextRaceCardDate = document.getElementsByClassName("nextRaceCardDate");
const gpCountdownHead = document.getElementsByClassName("gpCountdownHead");

const scheduleTableBody = document.getElementById("scheduleTableBody");
const raceWinner = document.getElementById("raceWinner");
const topTenBody = document.getElementById("topTenBody");
const fastestLap = document.getElementById("fastestLap");

const raceCalendarBtns = ["lastRaceBtn", "upNextBtn", "remRacesBtn"];
const raceCalendarCards = ["lastRaceCard", "upNextCard", "remRaceCard"];

function toggleCalendarTab(btnID) {
    for(let i in raceCalendarBtns) {
        if(btnID == raceCalendarBtns[i]){
            document.getElementById(raceCalendarBtns[i]).className = "button activeBtn";
            document.getElementById(raceCalendarCards[i]).style = "display: flex";
        } else{
            document.getElementById(raceCalendarBtns[i]).className = "button";
            document.getElementById(raceCalendarCards[i]).style = "display: none";
        }
    }
}

let nextRaceCardIndex = 0;
function toggleRemainingRace(index) {
    nextRaceCardIndex += index;
    if (nextRaceCardIndex < 0) {
        nextRaceCardIndex = remainingRaces.length-1;
    } else if (nextRaceCardIndex >= remainingRaces.length) {
        nextRaceCardIndex = 0;}

    for(let i in nextRaceCard) {
        if(nextRaceCardIndex == i){
            nextRaceCard[i].style = "display: flex";
        } else{
            nextRaceCard[i].style = "display: none";
        }
    }
}

function displayRace (race, i) {
    if(!race.completed && !race.currRace){
        displayRemainingRaces(race, i-2);
    } else{
        raceRoundNumber[i].innerHTML = "Round " + race.round;
        raceHeader[i].innerHTML = "<h1>" + race.title + "</h1>";
        raceSubHeader[i].innerHTML = displaySubHeader(race);
        if(race.completed) {
            displayPrevRace(race,i);
        } else if (race.currRace){
            displayCurrRace(race);
        }
    }
}

function displaySubHeader(race) {
    let subHeaderContents = "";
    subHeaderContents += "<img class='flag' src='" + race.flag + "' >";
    if(race.completed) {
        subHeaderContents += "<h1>Top 10</h1>"
    } else {
        subHeaderContents += "<h1>" + getRaceDate(race) + "</h1>"
    }
    return subHeaderContents;
}

/*prev race*/
function displayPrevRace(race,i){
    let raceWinnerString = "";
    raceWinnerString += "<img src='" + race.firstPlace[0] + "' >";
    raceWinnerString += "<h1>"+ race.firstPlace[1] +"</h1>";
    raceWinner.innerHTML = raceWinnerString;

    let tableContents = "";
    for (let i in race.results) {
        tableContents += "<tr class='"+ race.results[i].driver[4] +"'>";
        for (let j =0; j<4; j+=1) {
            tableContents += "<td>" +  race.results[i].driver[j] + "</td>";
        }
        tableContents += "</tr>";
    }
    topTenBody.innerHTML = tableContents;

    let fastestLapString = "<h3>Fastest Lap</h3>";
    for (let i in race.fastestLap) {
        fastestLapString += "<h3>" + race.fastestLap[i] + "</h3>";
    }
    fastestLap.innerHTML = fastestLapString;
}

function displayCurrRace(race){
    let tableContents = "";
    let scheduleArr = getScheduleArr(race);
    for (let i in scheduleArr) {
        tableContents += "<tr>";
        for(let j in scheduleArr[i]){
            tableContents += "<td>" + scheduleArr[i][j] + "</td>";
        }
        tableContents += "</tr>";
    }
    scheduleTableBody.innerHTML = tableContents;
}

function displayRemainingRaces(race,i){
    let flag = "<img class='flag' src='" + race.flag + "'>";
    let countryString = "<h2>" + race.country + "</h2>";
    let title = "<h3>" + race.title + "</h3>";
    nextRaceHeader[i].innerHTML = flag + countryString + title;

    let roundNumber = "<h3>Round " + race.round + "</h3>"
    let date = "<h3>" + getRaceDate(race) + "<h3>";
    nextRaceCardDate[i].innerHTML = roundNumber + "<hr>" + date;
}

setInterval(function() {
    for(let i=1;i<raceSchedule.length;i+=1){
    let countDownString = "<tr>";
        let countDownArray = getGPCountDown(raceSchedule[i]);
        for(let j in countDownArray){
            countDownString += "<th>" + countDownArray[j] + "</th>";
        }
        countDownString += "</tr>";
    gpCountdownHead[i-1].innerHTML = countDownString;
    }
},1000);



for(let i = 0; i<raceSchedule.length;i+=1) {
    displayRace(raceSchedule[i], i);
}