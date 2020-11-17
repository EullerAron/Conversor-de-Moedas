
function exchange() {

    let m1 = document.querySelector('#mEntrada').value
    console.log(m1)
    let m2 = document.querySelector('#mSaida').value
    console.log(m2)
    let qtd =  document.querySelector('#qtd').value
    console.log(qtd)


    window.fetch('https://api.exchangeratesapi.io/latest?base=' + m1).then(function (data) {

        data.json().then(function (cotacao) {
 
           pedido = cotacao.rates[m2]
           document.querySelector("#resultado").innerHTML = (pedido * qtd).toFixed(2) + " " + m2
    
        });
    });
}