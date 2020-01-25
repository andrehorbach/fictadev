function changeBtnColor(y) {
  y.classList.toggle("change");
  window.alert("working!");
}

function stext() {
  var x = document.getElementById("smb1");
  var y = document.getElementById("smb2");
  var z = document.getElementById("smb3");
  x.classList.toggle("btncolor");
  y.classList.toggle("btncolor");
  z.classList.toggle("btncolor");
}

function ntext() {
  var x = document.getElementById("smb1");
  var y = document.getElementById("smb2");
  var z = document.getElementById("smb3");
  x.classList.toggle("btncolor2");
  y.classList.toggle("btncolor2");
  z.classList.toggle("btncolor2");
}
function changeBtnColor(x) {}

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$("smbbar1").mouseenter(function() {
  window.alert("hover!");
});
//function changeBtn(x) {
//x.classList.toggle("change");
//}
