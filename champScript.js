function defaultTable() {
    displayTeamTable();
}

function toggleTable(text) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("championshipTable").innerHTML = this.responseText;
    };
    xhttp.open("GET", text);
    xhttp.send();
}

function toggleActiveBtn(onBtn, offBtn) {
    document.getElementById(onBtn).className = "button activeBtn"
    document.getElementById(offBtn).className = "button"
}

function displayTeamTable() {
    toggleTable("teamsWC.txt");
    toggleActiveBtn("consChampBtn", "drivChampBtn");
}

function displayDriverTable() {
    toggleTable("driversWC.txt");
    toggleActiveBtn("drivChampBtn", "consChampBtn");
}