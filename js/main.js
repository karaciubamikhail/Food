//Блок на главной

let tabsBtn = document.querySelectorAll(".tabs_input");
let tabs = document.querySelectorAll(".famale-img");
let tabl = document.querySelectorAll(".labl")
let tab = document.querySelector(".tab1")


tabsBtn.forEach((input, index) => {
    input.addEventListener('change', () => {
        tabs.forEach((item)=>{
        item.classList.remove('famale-img__active');
        });
        tabl.forEach((lab)=>{
            lab.classList.remove('active');
        });
        tabs[index].classList.add('famale-img__active');
        tabl[index].classList.add('active')
    });
});


let button=document.querySelector(".burger_img");
let burgermenu = document.querySelector(".elem");
let burger = document.querySelector(".header_listburg");
let item = document.querySelector(".header_list_item");
let img = document.querySelector(".img_cont");
if (button) {
  button.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    burgermenu.classList.toggle("active");
    button.classList.toggle("active");
    burger.classList.toggle("active");
    img.classList.toggle("active");
    item.classList.toggle("active");
    burger.setAttribute("aria-expanded", true);
    item.setAttribute("aria-hidden", false);
    if(burger == document.querySelector(".header_listburg.active")){
      burgermenu.setAttribute("aria-expanded", true);
      burger.setAttribute("aria-hidden", false);
      item.style.maxHeight = item.scrollHeight + "px";
    }else
    burgermenu.setAttribute("aria-expanded", false);
    burger.setAttribute("aria-hidden", true);
    item.style.maxHeight = null;
  });
}
