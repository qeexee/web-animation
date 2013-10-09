var length = 9;
var size= 48;
var boxes = {};

function init() {
  for (var i = 0; i < length * length; ++i) {
    var id = "box" + i;
    var div = "<div class=\"box\" id=\"" + id + "\" />";
    document.getElementById("container").innerHTML += div;
    boxes[i] = document.getElementById(id);
  }
  centered();
}

function elipse() {
  var xOffset = (winW() - size) / 2;
  var yOffset = (winH() - size)  / 2;
  var count = length * length;
  var pi2 = Math.PI * 2;
  var radius = Math.min(winW(), winH()) * 0.4;
  for (var i in boxes) {
    var id = "box" + i;
    var ele = document.getElementById(id);
    ele.style.left = Math.cos(i / count * pi2) * radius + xOffset + "px";
    ele.style.top = Math.sin(i / count * pi2) * radius + yOffset + "px";
  }
}

function figure8() {
  var xOffset = (winW() - size) / 2;
  var yOffset = (winH() - size) / 2;
  var count = length * length;
  var pi2 = Math.PI * 2;
  var radius = Math.min(winW(), winH()) * 0.4;
  for (var i in boxes) {
    var id = "box" + i;
    var ele = document.getElementById(id);
    ele.style.left = Math.sin(i / count * pi2) * radius + xOffset + "px";;
    ele.style.top = Math.sin(i * 2 / count * pi2) * radius + yOffset + "px";
  }
}

function random() {
  var xOffset = winW() * 0.1 - size / 2;
  var yOffset = winH() * 0.1 - size / 2;
  var xRegion = winW() * 0.8;
  var yRegion = winH() * 0.8;
  for (var i in boxes) {
    var id = "box" + i;
    var ele = document.getElementById(id);
    ele.style.left = Math.random() * xRegion + xOffset + "px";
    ele.style.top = Math.random() * yRegion + yOffset + "px";
  }
}

function tiled() {
  var xOffset = (winW() - length * size - size) / 2;
  var yOffset = (winH() - length * size - size) / 2;
  for (var i in boxes) {
    var id = "box" + i;
    var ele = document.getElementById(id);
    ele.style.left = (i % length) * size + xOffset + "px";
    ele.style.top = parseInt(i / length) * size + yOffset + "px";
  }
}

function centered() {
  for (var i in boxes) {
    var id = "box" + i;
    var ele = document.getElementById(id);
    ele.style.left = (winW() - size) / 2 + "px";
    ele.style.top = (winH() - size) / 2 + "px";
  }
}

function winW() {
  return window.innerWidth ||
         document.documentElement.clientWidth ||
         document.getElementsByTagName('body')[0].clientWidth;
}

function winH() {
  return window.innerHeight ||
         document.documentElement.clientHeight ||
         document.getElementsByTagName('body')[0].clientHeight;
}
