// api place search
  
let BASE_URL = "https://api.foursquare.com/v3/places/"
  
let API_KEY ="fsq3OToa8CU4sBTwyB1ge3LHG70ioUIp0/2XVmQIoKBlVy0="

async function search(lat,lng,query,radius){

  let response = await axios.get(BASE_URL + "search", {
    "headers":{
      "Authorization": API_KEY,
      "Accept": "application/json",
      
    },
    "params":{
      "query":query,
      "ll":lat+","+lng,
      "radius":radius,
      "limit": 50
  
    }
  });
  
  return response.data;
}

//function to get api details
async function getDetails(fsqId){
  let response = await axios.get(BASE_URL + fsqId,{
    "headers":{
      "Authorization": API_KEY,
      "Accept":"application/json",
    }
  })
  // console.log('getDetails return:'+response);
  return response
}



function createMap(lat, lng) {

    let map = L.map('map');
    map.setView([lat, lng], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(map);

    return map;
}
