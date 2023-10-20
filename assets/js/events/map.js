// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  // Request needed libraries.
  const { Map, InfoWindow  } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: {lat:53.30053303017035, lng: -6.196864053179169},
    mapId: "DEMO_MAP_ID",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "a",
    disableAutoPan: true,
  });

  const markers = [
    {
      content: `
      <div>
        <h4>Halloween takeover</h4>
        <p>Get ready for a lit Halloween Takeover on October 30th, 2023 at 9:00 PM, this is gonna be one for the history books.</p>
        <a href="https://www.eventbrite.com/e/halloween-takeover-tickets-733686515117?aff=ebdssbdestsearch" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat:  53.351184, lng: -6.409191},
    },
    {
      content: `
      <div>
        <h4>Fitzsimons Halloween Party</h4>
        <p>Fitzsimons Temple Bar's Dublin Halloween Party 2023. Sat, 28 Oct 10.00 pm</p>
        <a href="https://www.eventbrite.com/e/fitzsimons-halloween-party-tickets-728255480747?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat:  53.367777663838154, lng: -6.255915566851044},
    }
  ]

  markers.forEach(pin => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: pin.position
    });
    marker.addListener("gmp-click", () => {
      infoWindow.setContent(pin.content);
      infoWindow.open(map, marker);
    });
  });

}

initMap();
