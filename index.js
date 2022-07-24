var btns = document.querySelectorAll(".btn");
var sbtns = document.querySelectorAll(".sbtn");
var dis = document.getElementById("display");
var clearbtn = document.getElementById("clear");
var eqbtn = document.getElementById("eqbtn");

clearbtn.addEventListener("click", () => {
  if (dis.value != "") {
    dis.value = dis.value.slice(0, -1);
  }
});
clear = () => {
  if (dis.value != "") {
    time = new Date();
    time = time.getSeconds();

    interval = setInterval(crte, 500);
    function crte() {
      newt = new Date();
      newt = newt.getSeconds();
      diff = newt - time;
      if (diff == 1) {
        dis.value = "";
        clearbtn.value = "AC";
      }
    }
  }
};

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    dis.value += this.value;
  });

  addvalue = () => {
    interr = setInterval(addvalue2, 500);
    function addvalue2() {
      dis.value += btn.value;
    }
  };
});
sbtns.forEach(function (sbtn) {
  sbtn.addEventListener("click", addsbtn);
  function addsbtn() {
    if (dis.value.match(/[0-9]/)) {
      cndtn = dis.value.slice(-1);
      if (cndtn != "+" && cndtn != "-" && cndtn != "*" && cndtn != ".") {
        dis.value += this.value;
      }
    }
  }
});

evaluate = () => {
  if (dis.value != "") {
    dis.value = eval(dis.value);
  }
};
eqbtn.addEventListener("click", evaluate);
