document.addEventListener("DOMContentLoaded", function(event) {
  var g1 = new JustGage({
    id: "H4",
    title: "Max is 50.",
    value: 0,
    min: 0,
    max: 50,
    decimals: 2,
    gaugeWidthScale: 0.6
  });

  var temp = firebase
    .database()
    .ref()
    .child("sensor/Current");
  temp.on("value", function(snap) {
    g1.refresh(parseFloat(snap.val()));
  });
});
