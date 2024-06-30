maptilersdk.config.apiKey = maptilerApiKey

const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS.PASTEL,
  // center: campground.geometry.coordinates, // starting position [lng, lat]
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
})

new maptilersdk.Marker({ color: "Purple", draggable: true })
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
  )
  .addTo(map)
