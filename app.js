// Menu
const menu = document.getElementById("menu");
const mainLayout = document.querySelector(".main-layout");

const openMenuBtn = document.querySelector(".menu-opener");
const closeMenuBtn = document.querySelector(".close-menu");

const openMenu = () => {
    mainLayout.classList.add("active");
    document.body.style.overflow = "hidden";
    menu.style.left = "0";
};

const closeMenu = () => {
    mainLayout.classList.remove("active");
    document.body.style.overflow = "auto";
    menu.style.left = "-300px";
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

// Graph
const userData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Website Users',
    data:      [ Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500),
      Math.floor(Math.random() * 500)],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

const userGraph = document.getElementById('userGraph').getContext('2d');
new Chart(userGraph, {
  type: 'line',
  data: userData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: -5     ,
        bottom: 30,
      }
    }
  }
});
