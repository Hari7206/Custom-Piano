const keys = document.querySelectorAll('.keys');
const trackKey = document.querySelector('.trackKey');
const checkbox = document.querySelector('.keys-checkbox input');
const keySpans = document.querySelectorAll('.keys span');
const volumeSlider = document.querySelector('.volume-slider input');


let volumeLevel = volumeSlider.value / 100;


volumeSlider.addEventListener('input', () => {
 volumeLevel = volumeSlider.value / 100;
});



checkbox.addEventListener('change', () => {
    keySpans.forEach(span => {
        span.style.display = checkbox.checked ? 'block' : 'none';
    });
});


keys.forEach(key => {
    const audio = new Audio(`sounds/${key.dataset.note}`);
    const keyCode = key.dataset.key;

    key.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.volume = volumeLevel;
        audio.play();
           trackKey.textContent = `You pressed: ${key.dataset.key}`;
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === keyCode){
            audio.currentTime = 0;
            audio.volume = volumeLevel;
            audio.play();
               trackKey.textContent = `You pressed: ${key.dataset.key}`;
        }
    });
});
