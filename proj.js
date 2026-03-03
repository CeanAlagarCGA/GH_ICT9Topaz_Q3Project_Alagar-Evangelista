const stations = [
    "Baclaran Station",
    "Monumento",
    "5th Avenue",
    "R. Papa",
    "Abad Santos",
    "Blumentritt",
    "Tayuman",
    "Bambang",
    "Doroteo Jose",
    "Carriedo",
    "Central Terminal",
    "United Nations",
    "Pedro Gil",
    "Quirino Avenue",
    "Vito Cruz",
    "Gil Puyat",
    "Libertad",
    "EDSA"
];

const pickupSelect = document.getElementById("pickup");
const dropoffSelect = document.getElementById("dropoff");


stations.forEach((station, index) => {
    pickupSelect.innerHTML += `<option value="${index}">${station}</option>`;
    dropoffSelect.innerHTML += `<option value="${index}">${station}</option>`;
});

function calculateFare() {

    const baseFare = 50;
    const perKMrate = 15;
    const baseKM = 2;
    let pickupIndex = parseInt(pickupSelect.value);
    let dropoffIndex = parseInt(dropoffSelect.value);
    let passengerType = document.getElementById("passengerType").value;
    if (isNaN(pickupIndex) || isNaN(dropoffIndex) || pickupIndex === dropoffIndex) {
        document.getElementById("result").innerHTML ="Please select valid stations.";
    return;
    }
    let distance = Math.abs(dropoffIndex - pickupIndex);  
    let totalFare = baseFare;
    if (distance > baseKM) {
        totalFare += (distance - baseKM) * perKMrate;
    } 
    if (passengerType === "discount") {
        totalFare *= 0.80;
    }
    document.getElementById("result").innerHTML =
        "Distance: " + distance + " km<br>" +
        "Total Fare: &#8369;" + totalFare.toFixed(2);

}


