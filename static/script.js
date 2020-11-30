
var main = {


    resultado: function(valor){
        let p = document.getElementById('resultado');
        p.innerHTML = parseInt(valor,2);
    },



    valido: function(numero){
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = ''
        main.resultado(numero);
        console.log(numero);
    },
   


    // Mostra mensagen invalida apos validar entrada do input
    invalido: function(){    
        let alerta = document.getElementById('alerta');
        alerta.innerHTML = '<p>0s e 1s são permitidos!</p>'
    },



    // Entrada do input
    press: function() {
        const input =  document.querySelector("input").value;
        const num = Number(input[input.length -1]);

        if(num === 0 || num === 1){
            let numero = Number(input);
            main.valido(numero);
        }else{
            main.invalido();
        }

    },


};
