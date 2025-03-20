function getTags() {
    debugger
    const listp = document.querySelectorAll("p");
    for (let p of listp) {
        console.log(p.textContent)
    }
    console.log("Exit")
}

function AddContent() {

    debugger
    const listp = document.querySelectorAll("p");
    let i = 0;
    for (let p of listp) {
        p.innerHTML = p.textContent + " " + i;
        i++;

    }
    console.log("exit")

}


function addTags() {

    debugger
    const listp = document.querySelectorAll("p");
    const Newtags = document.createElement("p");
    Newtags.innerText = "Hola mundo";

    for (let p of listp) {

       p.appendChild(Newtags);
       p.removeChild(Newtags);

    }


}


document.getElementById("first").addEventListener("click",function(){alert("Press")})


// Agregar mediante un boton

const lista = document.getElementById("Lista")
const agregar = du






