const $openClose = document.getElementById("open-close")
const $aside =document.getElementById("aside")


function desplegarMenu() {
    $aside.classList.toggle("desplegar")
}

$openClose.addEventListener("click",() =>{
    desplegarMenu();
});


