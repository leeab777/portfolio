document.addEventListener('DOMContentLoaded', function() {
    const hexagonContainer2 = document.querySelector('.hexagon-container2');
    const hexagonTerminal = document.querySelector('.hexagon-terminal');
    const barContainerTerminal = document.querySelector('.bar-container-terminal');
    const smallHexagonsTerminal = document.querySelectorAll('.small-hexagon-bar-terminal');

    //add 'active' class when the main hexagon is hovered over
if (hexagonContainer2 && hexagonTerminal &&barContainerTerminal) {
    hexagonTerminal.addEventListener('mouseenter', function() {
        hexagonContainer2.classList.add('active');       //add active to the container
        barContainerTerminal.classList.add('active');    //show the bar container
    });

    //remove 'active' class when the hover ends (when mouse leaves the container)
    hexagonContainer2.addEventListener('mouseleave', function() {
        hexagonContainer2.classList.remove('active');      //remove active from the container
        barContainerTerminal.classList.remove('active');   //hide the bar container
    });
   }

const hexBarTc = document.querySelector('.small-hex-bar-tc');
const textBoxTc = document.querySelector('.text-box-tcalculator');
const hexBarCashM = document.querySelector('.small-hex-bar-atm');
const textBoxCashM = document.querySelector('.text-box-cashm');

    if (hexBarTc && textBoxTc) {
        hexBarTc.addEventListener('mouseenter', () => {
            textBoxTc.style.opacity = '1';
            textBoxTc.style.visibility = 'visible';
            textBoxTc.style.pointerEvents = 'auto';
            console.log('detcted');
        });

        hexBarTc.addEventListener('mouseleave', () => {
            textBoxTc.style.opacity = '0';
            textBoxTc.style.visibility = 'hidden';
            textBoxTc.style.pointerEvents = 'none';
        });
    } else {
        console.error('one or more elements are missing');
    }

    if (hexBarCashM && textBoxCashM) {
        hexBarCashM.addEventListener('mouseenter', () => {
            textBoxCashM.style.opacity = '1';
            textBoxCashM.style.visibility = 'visible';
            textBoxCashM.style.pointerEvents = 'auto';
            console.log('detected');
        });

        hexBarCashM.addEventListener('mouseleave', () => {
            textBoxCashM.style.opacity = '0';
            textBoxCashM.style.visibility = 'hidden';
            textBoxCashM.style.pointerEvents = 'none';
        });
    } else {
        console.log('one or more elements are missing');
    }
});

