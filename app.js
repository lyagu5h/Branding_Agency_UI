function setBackgroundImage(element, type, image) {
    element.style.backgroundImage = `url(/images/${type}/${image}.png)`;
}

function setPollenLocationBackground() {
    let pollenLocationElements = document.querySelectorAll('.pollen-locations__pollen-location');

    for (let i = 0; i < pollenLocationElements.length; i++) {
        setBackgroundImage(pollenLocationElements[i], 'locations', pollenLocationElements[i].getAttribute('data-location'));
    }
}

setPollenLocationBackground();