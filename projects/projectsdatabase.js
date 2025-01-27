document.addEventListener('DOMContentLoaded', function () {
    // Hexagon hover effect
    const hexagonContainer = document.querySelector('.hexagon-container');
    const hexagonDatabase = document.querySelector('.hexagon-database');
    const barContainer = document.querySelector('.bar-container');

    if (hexagonDatabase && barContainer) {
        hexagonDatabase.addEventListener('mouseenter', function () {
            hexagonContainer.classList.add('active');
            barContainer.classList.add('active');
            console.log('detceted');
        });

        hexagonContainer.addEventListener('mouseleave', function () {
            hexagonContainer.classList.remove('active');
            barContainer.classList.remove('active');
        });
    }

    // Small hexagon hover effect
    const hexBarSql = document.querySelector('.small-hex-bar-sql');
    const textBoxSql = document.querySelector('.text-box-sql');

    if (hexBarSql && textBoxSql) {
        hexBarSql.addEventListener('mouseenter', () => {
            textBoxSql.style.opacity = '1';
            textBoxSql.style.visibility = 'visible';
            textBoxSql.style.pointerEvents = 'auto';
            console.log('detected');
        });

        hexBarSql.addEventListener('mouseleave', () => {
            textBoxSql.style.opacity = '0';
            textBoxSql.style.visibility = 'hidden';
            textBoxSql.style.pointerEvents = 'none';
        });
    } else {
        console.error('one or more elements are missing');
    }

    const hexBarsUnderCon = document.querySelectorAll('.small-hex-bar-under-con');
    const textBoxUnderCon = document.querySelector('.text-box-under-con');

    if (hexBarsUnderCon.length > 0 && textBoxUnderCon) {
        hexBarsUnderCon.forEach(hexBar => {
        hexBar.addEventListener('mouseenter', () => {
            textBoxUnderCon.style.opacity = '1';
            textBoxUnderCon.style.visibility = 'visible';
            textBoxUnderCon.style.pointerEvents = 'auto';
            console.log('hover detected on under-con hex bar');
        });
        hexBar.addEventListener('mouseleave', () => {
            textBoxUnderCon.style.opacity = '0';
            textBoxUnderCon.style.visibility = 'hidden';
            textBoxUnderCon.style.pointerEvents = 'none';
        });
    });

    } else {
        console.error('one or more elements (small-hex-bar-under-con or text-box-under-con) are missing.')
    }
});