function clicou()
{
    document.getElementById("agradecimento").innerHTML="<em>Obrigado por clicar</em>" 
}

function redirecionar()
{
    window.open("http://github.com/sergiomerces/")
}

function trocar()
{
    document.getElementById("mousemove").innerHTML="Obrigado por passar!"
}

function voltar()
{
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
}

function trocar2(elemento)
{
    elemento.innerHTML="Obrigado por passar!"
}

function voltar2(elemento)
{
    elemento.innerHTML="Passe o mouse aqui!"
}

function load()
{
    alert("Bem-vindo(a)! Página carregada.")
}

function funcaoChange(elemento)
{
    console.log(elemento.value)
}