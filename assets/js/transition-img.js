$(document).ready( function () {

    let imgPath = [
      'assets/images/background-menu1.jpg',
      'assets/images/background-menu2.jpg',
      'assets/images/background-menu3.jpg',
      'assets/images/background-menu4.jpg',
      'assets/images/background-menu5.jpg',
      'assets/images/background-menu6.jpg'
    ];
    let index = 0;
    let maxImage = imgPath.length - 1;

  var timer = setInterval( function() {
    var current = imgPath[index];
    index = ( index === maxImage ) ? 0: ++index;
    $('.background-img').css({
      'background-image': `url(${current})`
    })
  }, 3000);
})