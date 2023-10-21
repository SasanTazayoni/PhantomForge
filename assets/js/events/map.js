// Initialize and add the map
let map;

async function initMap() {
  const { Map, InfoWindow  } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: {lat:53.30053303017035, lng: -6.196864053179169},
    mapId: "DEMO_MAP_ID",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
   
  // Array of markers
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
    },
    {
      content: `
      <div>
        <h4>Halloween Activity Day</h4>
        <p>Join our Halloween Activity Day with fun, hands-on Halloween activities! Fri, 3 Nov 2023 09:00 PM</p>
        <a href="https://www.eventbrite.com/e/halloween-activity-day-tickets-414586989847?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat: 53.344686, lng: -6.266939 },
    },
    {
      content: `
      <div>
        <h4>O'Reilly's | Halloween Night Fancy Dress Ball | Tues 31st October</h4>
        <p>Dublin's Wildest Halloween Night Fancy Dress Ball is back at O'Reillys' with €1/€2/€3 Drinks, Party DJs, Massive Prizes for best dressed. Tue, 31 Oct 2023 22:30 - Wed, 1 Nov 2023 02:30 GMT</p>
        <a href="https://www.eventbrite.com/e/oreillys-halloween-night-fancy-dress-ball-tues-31st-october-tickets-731847765367?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat:53.349625, lng: -6.251866 },
    },
    {
      content: `
      <div>
        <h4>Halloween Midterm Camp</h4>
        <p>Join us this bank October Midterm for a week long Halloween Kids camp- Or drop in for one day. Mon, 30 Oct 2023 10:00 - Fri, 3 Nov 2023 13:00 GMT.</p>
        <a href="https://www.eventbrite.com/e/halloween-midterm-camp-tickets-727650140157?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat: 53.208599, lng: -6.132067 },
    },
    {
      content: `
      <div>
        <h4>Halloween Mask-Making at Killruddery</h4>
        <p>Pop-up paper construction and collage workshop for children. Saturday, October 28 · 10am - 5pm IST</p>
        <a href="https://www.eventbrite.com/e/halloween-mask-making-at-killruddery-tickets-735498966207?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat: 53.180356, lng: -6.103193 },
    },
    {
      content: `
      <div>
        <h4>McGowans - Cash Prize for the best dressed</h4>
        <p>The Biggest Halloween Party in Dublin.Tue, 31 Oct 2023 21:00 - Wed, 1 Nov 2023 02:30 GMT</p>
        <a href="https://www.eventbrite.com/e/halloween-night-at-mcgowans-cash-prize-for-the-best-dressed-tickets-738939948277?aff=ebdssbdestsearch" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat:  53.356588, lng: -6.273832},
    },
    {
      content: `
      <div>
        <h4>Halloween Party 2023!</h4>
        <p>Bring your kids to have a good time in our Halloween Party! Sat, 28 Oct 2023 15:00 - 18:00 IST</p>
        <a href="https://www.eventbrite.com/e/halloween-activity-day-tickets-414586989847?aff=ebdssbdestsearch&keep_tld=1" target="_blank">Buy Tickets</a>
      </div>
    `,
      position: {lat:53.349696, lng: -6.245413 },
    },
  ]

  // Creates instance of each marker in the array
  markers.forEach(pin => {
    const pumpkin = document.createElement("img");
    pumpkin.style.width = '50px';
    pumpkin.style.height = '50px';
    pumpkin.src= 'assets/img/map/pumpkin.png'
    const marker = new AdvancedMarkerElement({
      map: map,
      position: pin.position,
      content: pumpkin
    });
    marker.addListener("gmp-click", () => {
      infoWindow.setContent(pin.content);
      infoWindow.open(map, marker);
    });
  });
}
initMap();
