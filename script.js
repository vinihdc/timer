    function convertir() {
        let h = parseInt(document.getElementById("hora").value) || 0;
        let m = parseInt(document.getElementById("minuto").value) || 0;
        let s = parseInt(document.getElementById("segundo").value) || 0;

        return (h * 3600) + (m * 60) + s;
    }

    function mostrarTempo(tempo) {
        let hora = Math.floor(tempo / 3600);
        let minuto = Math.floor((tempo % 3600) / 60);
        let segundo = tempo % 60;

        if (hora < 10) hora = "0" + hora;
        if (minuto < 10) minuto = "0" + minuto;
        if (segundo < 10) segundo = "0" + segundo;
        document.getElementById("hora").value = `${hora}`;
        document.getElementById("minuto").value = `${minuto}`;
        document.getElementById("segundo").value = `${segundo}`;
    }

    function iniciar() {
        parar();
        let tempoRestante = convertir();

        intervalo = setInterval(function() {
            if (tempoRestante > 0) {
                tempoRestante--;
                mostrarTempo(tempoRestante);
            } else {
                clearInterval(intervalo);
                alert("Tempo esgotado!");
            }
        }, 1000);
        
    }

    function pausar() {
        clearInterval(intervalo)
    }

    function zerar() {
        clearInterval(intervalo);
        document.getElementById("hora").value = "00";
        document.getElementById("minuto").value = "00";
        document.getElementById("segundo").value = "00";
        clearInterval(intervalo);
        parar();
    }

    function editar() {
        document.getElementById("hora").disabled = false;
        document.getElementById("minuto").disabled = false;
        document.getElementById("segundo").disabled = false;
    }

    function parar() {
        document.getElementById("hora").disabled = true;
        document.getElementById("minuto").disabled = true;
        document.getElementById("segundo").disabled = true;
    }






