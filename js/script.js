//document.body.style.background  |  retorna a cor do background do elemento todo//
//document.body.style.background = 'red' | o funto recebeu a cor vermelha//
const map = L.map('mapid').setView([51.505, -0.09], 13);
//adicionando var com args de latitude longitude e zoom//


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
//imgagem do mapa + popup//