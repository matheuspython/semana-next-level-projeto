const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const Lat = document.querySelector('span[data-lat]').dataset.lat
const Lng = document.querySelector('span[data-lng]').dataset.lng


const map = L.map('mapid', options).setView([lat, lng], 15);
//adicionando var com args de latitude longitude e zoom//


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAncor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([lat, lng], { icon })
    .addTo(map)

//imgagem do mapa + popup//

//image gallery//
function selectimage(event) {
    const button = event.currentTarged

    //remover todas as classes ative e so um vai ter//
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((removeActiveClass))

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar imagem clicada //
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar container de imagem//
    imageContainer.src = image.src
        //adicionar a classe .active ao botão clicado//
    button.classList.add('active')
}