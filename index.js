//Hacemos un loop para pasar por todas las cartas (cards) y asignarle un 
//event listener a cada una que asigne el brillo al hover del ratón


document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
     const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    }
}
