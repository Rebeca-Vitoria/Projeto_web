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