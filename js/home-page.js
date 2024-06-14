const toggle = document.querySelector("#toggle");
const container = document.querySelector(".container");

toggle.onclick = function(){
    container.classList.toggle('active');
}