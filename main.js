const nav=document.getElementsByClassName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("FixoNoTopo");
    }else{
        nav.classList.remove("FixoNoTopo");
    }
}

feather.replace()

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }