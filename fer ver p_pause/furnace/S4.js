document.addEventListener("DOMContentLoaded", function(event) {
  var g1 = new JustGage({
    id: "S4",
    title: "Max is 1200.",
    value: 0,
    min: 0,
    max: 1200,
    decimals: 2,
    gaugeWidthScale: 0.6
  });

  var temp = firebase
    .database()
    .ref()
    .child("sensor/tem");
  temp.on("value", function(snap) {
    g1.refresh(parseFloat(snap.val()));
  });
});
