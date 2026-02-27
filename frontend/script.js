
fetch("buildings.json")
    .then(response => response.json())
    .then(data => renderBuildings(data))

function renderBuildings(buildings) {

    container = document.getElementById("buildingContainer");
    buildings.forEach
    (
        function(building)
        {

            let buildingCard = document.createElement("div");
            buildingCard.classList.add("buildingCard");
            buildingCard.style.backgroundImage = `url(./assets/${building.building_picture})`;

            let buildingStatus = document.createElement("div");
            buildingStatus.classList.add("buildingStatus");
            
            let statusDot = document.createElement("div");
            statusDot.classList.add("statusDot");
            
            let statusText = document.createElement("span");
            statusText.textContent = `${building.rooms_available} rooms available`;

            buildingStatus.appendChild(statusDot);
            buildingStatus.appendChild(statusText);

            let buildingName = document.createElement("div");
            buildingName.classList.add("buildingName");
            buildingName.textContent = `${building.name}`;

            buildingCard.appendChild(buildingStatus);
            buildingCard.appendChild(buildingName);

            container.appendChild(buildingCard);

        }
    );

}


let logo = document.getElementById("freeroomsLogo");
let doorOpen = true;
logo.addEventListener("click", function() {
    doorOpen = !doorOpen;
    if (doorOpen) logo.src = "./assets/freeRoomsLogo.png";
    else logo.src = "./assets/freeroomsDoorClosed.png";
});
