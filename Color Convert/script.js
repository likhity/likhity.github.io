
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
      
function rgbToHex(r, g, b) {
    return "#" + (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

function changeHex() {
    var rgbInput = document.getElementById('rgb-input');
    var hexInput = document.getElementById('hex-input');

    var matches = rgbInput.value.match(/\d+/g);
    hexInput.value = rgbToHex(parseInt(matches[0]), parseInt(matches[1]), parseInt(matches[2]));

    document.body.style.background = "rgb(" + matches[0] + ","+matches[1]+","+matches[2]+")";

    var x = parseInt(matches[0]);
    var y = parseInt(matches[1]);
    var z = parseInt(matches[2]);

    var color = [x,y,z];

    var numLessThan127 = 0;

    if (document.getElementById('auto-copy').checked == true) {
        hexInput.select();
        document.execCommand("copy");
        document.getElementById('copy-text').innerHTML = "Copied: " + hexInput.value;
    }

    for (var i = 0; i < 3; i++) {
        if (color[i] < 127) {
            numLessThan127++;
        }
    }

    if (numLessThan127 > 1) {
        document.body.style.color = "white";
    }
    else {
        document.body.style.color = "black";
    }
}

function changeRgb() {
    var rgbInput = document.getElementById('rgb-input');
    var hexInput = document.getElementById('hex-input');

    rgbInput.value = hexToRgb(hexInput.value).r + ", " + hexToRgb(hexInput.value).g + ", " + hexToRgb(hexInput.value).b;
    document.body.style.background = "rgb(" + hexToRgb(hexInput.value).r + ","+hexToRgb(hexInput.value).g+","+hexToRgb(hexInput.value).b+")";

    var x = hexToRgb(hexInput.value).r;
    var y = hexToRgb(hexInput.value).g;
    var z = hexToRgb(hexInput.value).b;

    var color = [x,y,z];

    var numLessThan127 = 0;

    if (document.getElementById('auto-copy').checked == true) {
        rgbInput.select();
        document.execCommand("copy");
        document.getElementById('copy-text').innerHTML = "Copied: " + rgbInput.value;
    }

    for (var i = 0; i < 3; i++) {
        if (color[i] < 127) {
            numLessThan127++;
        }
    }

    if (numLessThan127 > 1) {
        document.body.style.color = "white";
    }
    else {
        document.body.style.color = "black";
    }
}

function copyRgb() {
    var rgbInput = document.getElementById('rgb-input');

    rgbInput.select();
        document.execCommand("copy");
        document.getElementById('copy-text').innerHTML = "Copied: " + rgbInput.value;
}


function copyHex() {
    var hexInput = document.getElementById('hex-input');

    hexInput.select();
    document.execCommand("copy");
    document.getElementById('copy-text').innerHTML = "Copied: " + hexInput.value;
}