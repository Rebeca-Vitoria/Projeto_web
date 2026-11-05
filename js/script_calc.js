function Calcular() {
    event.preventDefault()
    let Produto = document.getElementById("Produto").value
    let Valor = Number(document.getElementById("Valor").value)
    let Desconto = Number(document.getElementById("Desconto").value)

    let Valor_desc = Valor * (Desconto / 100)
    let Valor_final = Valor - Valor_desc

    document.getElementById("Resultado1").innerText = 'Produto:' + Produto
    document.getElementById("Resultado2").innerText = 'Valor:' + Valor
    document.getElementById("Resultado3").innerText = 'Desconto:' + Desconto
    document.getElementById("Resultado4").innerText = ' Valor Final:' + Valor_final


}

function Calc_restaurante() {
    event.preventDefault()
    let Valor = Number(document.getElementById("Valor").value)
    let Pessoas = Number(document.getElementById("Pessoas").value)
    let percentual = Valor * (10 / 100)
    let Valor_atual = Valor + percentual
    let Conta = Valor_atual / Pessoas


    document.getElementById('Resultado1').innerHTML = 'Valor: R$' + Valor
    document.getElementById('Resultado2').innerHTML = '10%: R$' + percentual
    document.getElementById('Resultado3').innerHTML = 'Valor Atual:' + Valor_atual
    document.getElementById('Resultado4').innerHTML = 'Valor por pessoa:' + Conta.toFixed(2)


}
