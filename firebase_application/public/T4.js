document.addEventListener("DOMContentLoaded", function(event) {

    var g1 = new JustGage({
      id: "T4",
      title: "Max is 250.",
      value: 0,
      min: 0,
      max: 250,
      decimals: 2,
      gaugeWidthScale: 0.6
    });

    var temp = firebase.database().ref().child('sensor/Volt');
    temp.on('value', function(snap){
        g1.refresh(parseFloat (snap.val()));
    });
});