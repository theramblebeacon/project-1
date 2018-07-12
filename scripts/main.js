var myImage = document.querySelector ('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/crestovernight.jpg') {
      myImage.setAttribute ('src','images/crestovernight-3.jpg');
    } else {
      myImage.setAttribute ('src','images/crestovernight.jpg');
    }
}