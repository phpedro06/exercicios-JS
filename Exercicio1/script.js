function calc() {
    var nome = prompt('Digite o nome do produto:')
    var quantidadeP = parseFloat(prompt('Digite a quantidade de produtos no frete:'))
    var tipoFrete = parseFloat(prompt('Digite o tipo de frete desejado:\n1 - Frete rapido\n2 - frete regular\n3 - Frete economico'))
    var distanciaKm = parseFloat(prompt('Digite a distancia percorrida em km:'))
    var pesoM = prompt('Digite o peso da mercadoria:\nA - entre 1kg a 10kg\nB - entre 11kg a 25kg\nC - entre 26kg a 50kg\nD - mais de 50kg')

    // Valor por km

    var ajusteKm = distanciaKm*0.15

    // Variavel para não bugar o checker

    var tax1 = 0
    var tax2 = 0
    var tax3 = 0

    // Passar a entrada de dados para letra maiuscula ( evitar erros futuros )

    pesoM = pesoM.toUpperCase()

    // Primeira taxa ( por peso )

    if (pesoM === 'B'){
        var taxaPeso = ajusteKm*2
    } else if (pesoM === 'C') {
        var taxaPeso = ajusteKm*3
    } else if (pesoM === 'D') {
        var taxaPeso = ajusteKm*4
    } else { 
        var taxaPeso = ajusteKm*1.2
    }

    // Segunda taxa ( por tipo de frete )

    if (tipoFrete == 1) {
        var finalFrete = taxaPeso + (taxaPeso*0.10)
    } else  if (tipoFrete == 3) {
        var finalFrete = taxaPeso + (taxaPeso*0.01)
    } else {
        var finalFrete = taxaPeso + (taxaPeso*0.05)
    }

    // Primeiro desconto/taxa ( por km )

    if (distanciaKm <= 100) {
        var taxaKm = finalFrete-(finalFrete*0.05)
        var tax1 = 1
    } else if (distanciaKm >= 250) {
        var taxaKm = finalFrete+(finalFrete*0.05)
        var tax2 = 2
    } else {
        var taxaKm = finalFrete
    }

    // Segundo desconto ( por peso )

    if (quantidadeP >=10) {
        var finalTaxa = taxaKm - (taxaKm*0.05)
        var tax3 = 4
    } else {
        var finalTaxa = taxaKm
    }

    // Verifica se o cliente tem algum desconto ou taxa

    var verTax = 0
    var verTax = tax1 + tax2 + tax3

    if (verTax === 1) {
        var finalTax = "Você recebeu um desconto de 5%"
    } else if ( verTax === 2) {
        var finalTax = "Você recebeu um acrescimo de 5%"
    } else if ( verTax === 4) {
        var finalTax = "Você recebeu um desconto de 5%"
    } else if ( verTax === 5) {
        var finalTax = "Você não recebeu taxas nem descontos!"
    } else if ( verTax === 6) {
        var finalTax = "Você recebeu um acrescimo de 5%"
    } else {
        var finalTax = "Você não recebeu taxas nem descontos!"
    }

    // Calculo de valores por km ( taxa km e taxa quilo )

    var valorKm = taxaKm/distanciaKm
    var valorKg = taxaPeso/distanciaKm

    // Frete gratis

    if (finalTaxa <= 10) {
        var finalTaxa2 = "Frete gratis!"
    } else {
        var finalTaxa2 = finalTaxa
    }
    
    // Aparacer a div onde vai aprarecer a saida de dados (jquey)

    $(".saida").css("display","flex")

    // Arredondar numeros

    var valorKm = valorKm.toFixed(2)
    var valorKg = valorKg.toFixed(2)
    var finalTaxa2 = finalTaxa2.toFixed(2)

    // Saida de dados dentro da div

    document.getElementById('saida').innerHTML = `<span>Produto:</span> ${nome}<br><br><span>Quantidade de produtos:</span> ${quantidadeP}<br><br><span>Quilometros rodados:</span> ${distanciaKm}Km<br><br><span>Valor quilo/km:</span> R$${valorKg}<br><br><span>Valor por quilometro:</span> R$${valorKm}<br><br><span>O valor final do frete é de:</span> R$${finalTaxa2}<br><br><span>${finalTax}</span>`
}

// Fechar a div da saida de dados (jquery)

function closee() {
    $(".saida").css("display","none") 
}