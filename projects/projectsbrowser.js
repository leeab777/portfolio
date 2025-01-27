document.addEventListener('DOMContentLoaded', function() {
    const hexagonContainer3 = document.querySelector('.hexagon-container3');
    const hexagonBrowser = document.querySelector('.hexagon-browser');
    const barContainerBrowser = document.querySelector('.bar-container-browser');
    const smallHexagons = document.querySelectorAll('.small-hexagon-bar-browser');

    //add 'active' class when the main hexagon is hovered over
if (hexagonContainer3 && hexagonBrowser && barContainerBrowser)
    hexagonBrowser.addEventListener('mouseenter', function() {
        hexagonContainer3.classList.add('active');
        barContainerBrowser.classList.add('active');
    });

    //remove 'active' class when the hover ends (when mouse leaves the container)
    hexagonContainer3.addEventListener('mouseleave', function() {
        hexagonContainer3.classList.remove('active');
        barContainerBrowser.classList.remove('active');
    });

    const hexBarClone = document.querySelector('.small-hex-bar-clone');
    const textBoxClone = document.querySelector('.text-box-clone');
    const hexBarWdash = document.querySelector('.small-hex-bar-wdash');
    const textBoxWdash = document.querySelector('.text-box-wdash');

    if (hexBarClone && textBoxClone) {
        hexBarClone.addEventListener('mouseenter', () => {
            textBoxClone.style.opacity = '1';
            textBoxClone.style.visibility = 'visible';
            textBoxClone.style.pointerEvents = 'auto';
            console.log('detected');
        });

        hexBarClone.addEventListener('mouseleave', ()=> {
            console.log('mouse left')
            textBoxClone.style.opacity = '0';
            textBoxClone.style.visibility = 'hidden';
            textBoxClone.style.pointerEvents = 'none';
        });
    } else {
        console.error('one or more elements are missing')
    }

    if (hexBarWdash && textBoxWdash) {
        hexBarWdash.addEventListener('mouseenter', () => {
            textBoxWdash.style.opacity = '1';
            textBoxWdash.style.visibility = 'visible';
            textBoxWdash.style.pointerEvents = 'auto';
            console.log('detected');
        });

        hexBarWdash.addEventListener('mouseleave', () => {
            textBoxWdash.style.opacity = '0';
            textBoxWdash.style.visibility = 'hidden';
            textBoxWdash.style.pointerEvents = 'none';
        });
    } else {
        console.log('one or more elements are missing');
    }
});


