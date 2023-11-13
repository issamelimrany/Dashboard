// Menu
const menu = document.getElementById("menu");
const mainLayout = document.querySelector(".main-layout");

const openMenuBtn = document.querySelector(".menu-opener");
const closeMenuBtn = document.querySelector(".close-menu");

const openMenu = () => {
    mainLayout.classList.add("active");
    document.body.style.overflow = "hidden"
    menu.style.left = "0";
}

const closeMenu = () => {
    mainLayout.classList.remove("active");
    document.body.style.overflow = "auto"
    menu.style.left = "-300px";
}

openMenuBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);
      

function updateValues(element, month) {
        
        const desktopValue = Math.floor(Math.random() * 100);
        const tabletValue = Math.floor(Math.random() * 100);
        const mobileValue = Math.floor(Math.random() * 100);
    
        document.getElementById('desktop-percent').textContent = desktopValue + '%';
        document.getElementById('desktop-bar').style.width = desktopValue + '%';
    
        document.getElementById('tablet-percent').textContent = tabletValue + '%';
        document.getElementById('tablet-bar').style.width = tabletValue + '%';
    
        document.getElementById('mobile-percent').textContent = mobileValue + '%';
        document.getElementById('mobile-bar').style.width = mobileValue + '%';
  
        const months = document.querySelectorAll('.select-month');
        months.forEach(m => m.classList.remove('active'));

        element.classList.add('active');

        
      }
