function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  // console.log("TODO - validate the longitude, latitude values before submitting");
  const form = document.querySelector("form");

  const latValid =
    parseFloat(form.latitude.value) <= 90 &&
    parseFloat(form.latitude.value) >= -90;
  const latLabel = document.querySelector("#latitude-label span");
  const lngValid =
    parseFloat(form.longitude.value) <= 180 &&
    parseFloat(form.longitude.value) >= -180;
  const lngLabel = document.querySelector("#longitude-label span");

  if (!latValid) {
    while (latLabel.hasChildNodes()) latLabel.removeChild(latLabel.firstChild);
    latLabel.appendChild(
      document.createTextNode("* must be a valid Latitude (-90 to 90)")
    );
  }
  if (!lngValid) {
    while (lngLabel.hasChildNodes()) lngLabel.removeChild(lngLabel.firstChild);
    lngLabel.appendChild(
      document.createTextNode("* must be a valid Longitude (-180 to 180)")
    );
  }

  if (latValid && lngValid) return true;
  else return false;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
