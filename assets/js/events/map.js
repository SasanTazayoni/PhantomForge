// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: {lat:53.30053303017035, lng: -6.196864053179169},
    mapId: "DEMO_MAP_ID",
  });
  
const markers = [
    {lat: 53.30053303017035, lng: -6.196864053179169},
    {lat:  53.367777663838154, lng: -6.255915566851044}
  ]
  for(let i = 0; i < markers.length; i++) {
    new AdvancedMarkerElement({
        map: map,
        position: markers[i],
      });
  }


}

initMap();