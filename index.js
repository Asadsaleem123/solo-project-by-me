let menuBtn=document.getElementById("menu-btn")
let openMenu=document.getElementById("open-menu")
menuBtn.addEventListener("click",open)
function open(){
if(openMenu.style.display==="none"){
    openMenu.style.display="block"
}else{
    openMenu.style.display="none"
}
}