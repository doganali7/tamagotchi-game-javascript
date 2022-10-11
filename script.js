var hunger = 100;
var hygiene = 100;
var sleep = 100;
var fun = 100;
var social = 100;

function Loop(time = 2) {
  var total = hunger + hygiene + sleep + fun + social;

  if (hunger <= 0 || hygiene <= 0 || sleep <= 0 || fun <= 0 || social <= 0) {
    document.getElementById("pet").src = "img/tamagochi8.png";
    document.getElementById("pet").innerHTML = "fasa fiso biseyler";
  } else if (total > 400) {
    document.getElementById("pet").src = "img/tamagochi.png";
  } else if (total > 300) {
    document.getElementById("pet").src = "img/tamagochi3.png";
  } else if (total > 200) {
    document.getElementById("pet").src = "img/tamagochi5.png";
  } else if (total > 100) {
    document.getElementById("pet").src = "img/tamagochi6.png";
  } else if (total > 50) {
    document.getElementById("pet").src = "img/tamagochi7.png";
  }
  hunger = hunger - parseInt(time);
  hygiene = hygiene - parseInt(time);
  sleep = sleep - parseInt(time);
  fun = fun - parseInt(time);
  social = social - parseInt(time);

  document.getElementById("hunger").innerHTML = hunger + "%";
  document.getElementById("hygiene").innerHTML = hygiene + "%";
  document.getElementById("sleep").innerHTML = sleep + "%";
  document.getElementById("fun").innerHTML = fun + "%";
  document.getElementById("social").innerHTML = social + "%";
}

function Start() {
  var temporizador = setInterval(Loop, 1000);
}

function Eat() {
  hunger = 100;
  document.getElementById("hunger").innerHTML = hunger + "%";
  document.getElementById("hunger").style.width = hunger + "px";
}

function Bath() {
  hygiene = 100;
  document.getElementById("hygiene").innerHTML = hygiene + "%";
  document.getElementById("hygiene").style.width = hygiene + "px";
}

function Sleep() {
  sleep = 100;
  document.getElementById("sleep").innerHTML = sleep + "%";
  document.getElementById("sleep").style.width = sleep + "px";
}

function Play() {
  fun = 100;
  document.getElementById("fun").innerHTML = fun + "%";
  document.getElementById("fun").style.width = fun + "px";
}

function Talk() {
  social = 100;
  document.getElementById("social").innerHTML = social + "%";
  document.getElementById("social").style.width = social + "px";
}

Start();
