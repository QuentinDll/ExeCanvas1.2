var draw = document.getElementById('canvas');
var drawpx = draw.getContext('2d');

// toit
drawpx.fillStyle = '#D7823E';
drawpx.moveTo(50, 50);
drawpx.lineTo(0, 100);
drawpx.lineTo(100, 100);
drawpx.fill();

// wall
drawpx.beginPath();
drawpx.rect(0, 100, 100, 100);
drawpx.fillStyle = '#A1D8E6';
drawpx.fill();

// window
drawpx.beginPath();
drawpx.rect(10, 110, 20, 20);
drawpx.fillStyle = '#C9C9C9';
drawpx.fill();

drawpx.beginPath();
drawpx.rect(70, 110, 20, 20);
drawpx.fillStyle = '#C9C9C9';
drawpx.fill();

// door
drawpx.beginPath();
drawpx.rect(38, 160, 25, 40);
drawpx.fillStyle = '#C9C9C9';
drawpx.fill();
