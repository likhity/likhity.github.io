function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  var color = [x, y, z];

  var numLessThan127 = 0;

  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
  document.getElementById("color-rgb").innerHTML = x + ", " + y + ", " + z;
  document.getElementById("color-hex").innerHTML = rgbToHex(x, y, z);

  for (var i = 0; i < 3; i++) {
    if (color[i] < 127) {
      numLessThan127++;
    }
  }

  if (numLessThan127 > 1) {
    document.getElementById("color-rgb").style.color = "white";
    document.getElementById("color-hex").style.color = "white";
    document.querySelector(".myH1").style.color = "white";
    document.querySelectorAll(".color-type").forEach((element) => {
      element.style.color = "white";
    });
  } else {
    document.getElementById("color-rgb").style.color = "black";
    document.getElementById("color-hex").style.color = "black";
    document.querySelector(".myH1").style.color = "black";
    document.querySelectorAll(".color-type").forEach((element) => {
      element.style.color = "black";
    });
  }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase()
  );
}

function copyRgb() {
  selectText("color-rgb");
  document.execCommand("copy");
}

function copyHex() {
  selectText("color-hex");
  document.execCommand("copy");
}

function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}
