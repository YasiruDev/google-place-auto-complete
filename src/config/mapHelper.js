export const mapConfig = () => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.927079, lng: 79.861244 },
    zoom: 8,
  });
  const marker = new window.google.maps.Marker({
    map,
    anchorPoint: new window.google.maps.Point(0, -29),
  });
  return { map, marker };
};

export const autoCompleteConfig = (current) => {
  const autocomplete = new window.google.maps.places.Autocomplete(current, {
    types: ["geocode"],
  });
  return autocomplete;
};
