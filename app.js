// The menue 
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


/*-------------------------------------------------------------------------------------------------------------------------- */

// the pie chart : 


    // Sample data for the pie chart
    const data = [
        { label: 'First', value: Math.floor(Math.random() * 100) },
        { label: 'Second', value: Math.floor(Math.random() * 100) },
        { label: 'Third', value:   Math.floor(Math.random() * 100)   },
        { label: 'Fourth', value: Math.floor(Math.random() * 100)  }
    ];

    // Define dimensions and radius
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Create SVG container
    const svg = d3.select('#pieChartContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create pie generator
    const pie = d3.pie().value(d => d.value);

    // Create arc generator
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    // colors : 
    const myColors = ['#6374e3', '#24398a', '#7775AF', '#8EE6FF'];

    const color = d3.scaleOrdinal(myColors);

    // Append arcs (pie slices)
    const arcs = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', i => color(i)); // store the initial angles

    // Add transitions for interactivity
    arcs.on('mouseover', function(event, d) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr('d', d3.arc().innerRadius(0).outerRadius(radius * 0.98));
    })
    .on('mouseout', function(event, d) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr('d', arc);
    });

    // labels
    arcs.append('text')
        .attr('transform', function(d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('text-anchor', 'middle')
        .text(function(d) { return d.data.label; });

    arcs.append('title')
        .text(function(d) { return `${d.data.label}: ${d.data.value}`; });

/*-------------------------------------------------------------------------------------------------------------------------- */
// the Graph : 
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
/*-------------------------------------------------------------------------------------------------------------------------- */
// Devices : 

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






/*-------------------------------------------------------------------------------------------------------------------------- */

// dark mode 
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggleButton = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('theme');
        
        // Check for a saved theme in localStorage and apply it
        if (currentTheme) {
          document.body.classList.add(currentTheme);
          themeToggleButton.textContent = currentTheme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
        } else {
          // Set the button text based on system preference
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeToggleButton.textContent = 'Light Mode';
          } else {
            themeToggleButton.textContent = 'Dark Mode';
          }
        }
        
        themeToggleButton.addEventListener('click', () => {
          if (document.body.classList.toggle('dark-mode')) {
            themeToggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark-mode');
          } else {
            themeToggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light-mode');
          }
        });
      });

