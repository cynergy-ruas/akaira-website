var myCenter = new google.maps.LatLng(13.0183642, 77.5078933);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter
  });

  marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initialize);
