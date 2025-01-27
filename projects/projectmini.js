document.addEventListener('DOMContentLoaded', function() {
    const hexagonContainer4 = document.querySelector('.hexagon-container4');
    const hexagonMini = document.querySelector('.hexagon-mini');
    const barContainerMini = document.querySelector('.bar-container-mini');
    const smallHexagons = document.querySelectorAll('.small-hexagon-bar-mini');

    //add 'actice' class when the main hexagon is hovered over
if (hexagonContainer4 && hexagonMini && barContainerMini)
    hexagonMini.addEventListener('mouseenter', function() {
        hexagonContainer4.classList.add('active');
        barContainerMini.classList.add('active');
    });

    //remove 'active' class when the hover ends (when mouse leaves the container)
    hexagonContainer4.addEventListener('mouseleave', function() {
        hexagonContainer4.classList.remove('active');
        barContainerMini.classList.remove('active');
    });

    const hexBarMcal = document.querySelector('.small-hex-bar-mini-calculator');
    const textBoxMcal = document.querySelector('.text-box-mini-calculator');
    const hexBarTet = document.querySelector('.small-hex-bar-tetrisish');
    const textBoxTet = document.querySelector('.text-box-tetrisish');

    if (hexBarMcal && textBoxMcal) {
        hexBarMcal.addEventListener('mouseenter', () => {
            textBoxMcal.style.opacity = '1';
            textBoxMcal.style.visibility = 'visible';
            textBoxMcal.style.pointerEvents = 'auto';
            console.log("detected")
        });
        hexBarMcal.addEventListener('mouseleave', () => {
            textBoxMcal.style.opacity = '0';
            textBoxMcal.style.visibility = 'hidden';
            textBoxMcal.style.pointerEvents = 'none';
        });
    } else {
        console.error("one or more elements are missing.")
    }

    if (hexBarTet && textBoxTet) {
        hexBarTet.addEventListener('mouseenter', () => {
            textBoxTet.style.opacity = '1';
            textBoxTet.style.visibility = 'visible';
            textBoxTet.style.pointerEvents = 'auto';
            console.log('detected');
        });

        hexBarTet.addEventListener('mouseleave', () => {
            textBoxTet.style.opacity = '0';
            textBoxTet.style.visibility = 'hidden';
            textBoxTet.style.pointerEvents = 'none';
        });

    } else {
        console.log('one or more elememnts are missing');
    }
});