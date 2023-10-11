if ('webkitSpeechRecognition' in window) {

    const reconocimiento = new webkitSpeechRecognition();



    reconocimiento.continuous = true;

    reconocimiento.lang = 'es-ES'; 



    reconocimiento.onstart = function () {

        textoReconocidoElement.textContent = 'Escuchando...';

    };



    reconocimiento.onresult = function (event) {
        const resultado = event.results[event.results.length - 1];
        const texto = resultado[0].transcript;
        textoReconocidoElement.textContent = `Texto reconocido: ${texto}`;
    };
    reconocimiento.onend = function () {
        let miTexto = textoReconocidoElement.textContent
        textoReconocidoElement.textContent += ' (Fin del reconocimiento)';
        repetirTexto(miTexto)
    };
    iniciarReconocimientoBtn.addEventListener("click", function () {
        reconocimiento.start();
    });
} else {
    textoReconocidoElement.textContent = 'El reconocimiento de voz no es compatible con tu navegador.';
    boton.disabled = true;
}
