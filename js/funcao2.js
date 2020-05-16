function validaIdade(idade)
{
    var validar

    if(idade >= 18)
    {
        validar = true
    }

    else
    {
        validar = false
    }

    return validar
}

var idade = prompt("Quantos anos você tem?")
console.log(validaIdade(idade))