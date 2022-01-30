const scopri = document.getElementById('scopri') 

scopri.addEventListener('click', 

    function () {
        let parola = document.getElementById('parola').value;
        var carattere;
        var parolaInversa = '';

        var i = parola.length - 1;

        while (i >= 0) {
            carattere = parola[i];
            parolaInversa += carattere;
            console.log(carattere);
            i--;
        }

        console.log(parolaInversa);

        if(parola == parolaInversa){
            alert('la parola è palindroma')
            console.log('la parola è palindroma');
        } else {
            alert('la parola non è palindroma')
            console.log('la parola non è palindroma');
        }
    }

)



 