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

    // Sample data for the pie chart
    const data = [
        { label: 'First', value: Math.floor(Math.random() * 100) },
        { label: 'Second', value: Math.floor(Math.random() * 100) },
        { label: 'Third', value:   Math.floor(Math.random() * 100)   },
        { label: 'Fourth', value: Math.floor(Math.random() * 100)  },
        { label: 'Fifth', value: Math.floor(Math.random() * 100)  }
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

    // Enhanced color scale
    const color = d3.scaleOrdinal(d3.schemeSet3);

    // Append arcs (pie slices)
    const arcs = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i))
        .each(function(d){ this._current = d; }); // store the initial angles

    // Add transitions for interactivity
    arcs.on('mouseover', function(event, d) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr('d', d3.arc().innerRadius(0).outerRadius(radius * 1.1));
    })
    .on('mouseout', function(event, d) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr('d', arc);
    });

    // Add labels
    arcs.append('text')
        .attr('transform', function(d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('text-anchor', 'middle')
        .text(function(d) { return d.data.label; });

    // Optional: Add tooltips (requires additional CSS for styling)
    arcs.append('title')
        .text(function(d) { return `${d.data.label}: ${d.data.value}`; });
