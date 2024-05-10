window.addEventListener("load", function () {
    let listedPlanets;
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;

        console.log(listedPlanets);

    }).then(function () {

        console.log(listedPlanets);

        const planet = pickPlanet(listedPlanets);
        const name = planet.name;
        const diameter = planet.diameter;
        const star = planet.star;
        const distance = planet.distance;
        const moons = planet.moons
        const imageUrl = planet.image

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let list = document.getElementById('faultyItems');
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });

});