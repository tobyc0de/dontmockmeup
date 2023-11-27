var eyeBall1 = document.querySelector("#eyeBall1");
var eyeBall2 = document.querySelector("#eyeBall2");

document.onmousemove = (event) => {
  var x1 = (event.clientX * 100) / window.innerWidth + "%";
  var y1 = (event.clientY * 100) / window.innerHeight + "%";
  var x2 = (event.clientX * 100) / window.innerWidth + "%";
  var y2 = (event.clientY * 100) / window.innerHeight + "%";
  eyeBall1.style.transition = "0s";
  eyeBall1.style.left = x1;
  eyeBall1.style.top = y1;
  eyeBall2.style.transition = "0s";
  eyeBall2.style.left = x2;
  eyeBall2.style.top = y2;
};

document.onmouseout = (event) => {
  eyeBall1.style.transition = "0.7s";
  eyeBall1.style.left = "50%";
  eyeBall1.style.top = "50%";
  eyeBall2.style.transition = "0.7s";
  eyeBall2.style.left = "50%";
  eyeBall2.style.top = "50%";
};

var hand = document.querySelector("#hand");

document.onclick = (event) => {
  var xhand = (event.clientX * 100) / window.innerWidth - 20 + "vw";
  var yhand = (event.clientY * 100) / window.innerHeight - 10 + "vh";
  eyeBall1.style.transition = "3s";
  hand.style.display = "inherit";
  hand.style.left = xhand;
  hand.style.top = yhand;
};
