const map = L.map('map').setView([40.43335959357837, 49.950714111328125], 11);

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});

let circle = L.circle([40.43335959357837, 49.950714111328125],{
    color:'red',
    radius:800
}).addTo(map);

let circle2 = L.circle([40.46335959357837, 49.950714111328125],{
    color:'red',
    radius:500
}).addTo(map);
let circle3 = L.circle([40.44335959357837, 49.930714111328125],{
    color:'red',
    radius:500
}).addTo(map);
let circle4 = L.circle([40.42335959357837, 49.850714111328125],{
    color:'red',
    radius:500
}).addTo(map);
let circle5 = L.circle([40.38335959357837, 49.930714111328125],{
    color:'red',
    radius:500
}).addTo(map);


CartoDB_DarkMatter.addTo(map);
