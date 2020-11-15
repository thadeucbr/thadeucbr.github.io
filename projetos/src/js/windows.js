document.getElementById('botaoMarcelo').addEventListener('click',() => {
    const audio = new Audio('./src/audio/bonde.mp3');
    audio.play();
    document.querySelector('body').style.backgroundImage = 'url(./src/img/imageproxy.jpeg)'
    document.getElementById('botaoMarcelo').remove();
})

