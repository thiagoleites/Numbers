let inpu = document.getElementById("um");
let onpu = document.getElementById("dois");
let but = document.getElementById("botao");
let dad = document.getElementById("recebido");
let tex = "";

but.addEventListener("click", () => {
    val = inpu.value;
    vel = onpu.value;

    for ( let i = val; i <= vel; i++){
        tex += '<div class="numeros">'+ i + '</div>';
    }
    document.getElementById("dados").style.display = "none";
    dad.innerHTML = tex;
})