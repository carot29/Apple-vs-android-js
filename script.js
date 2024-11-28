// controlling CSS & Attributes from js

// document.getElementById("some-id").style // acceses CSS rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpg"; //changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com"; //changes the hyperlink

// changing an img vs adding a new one
// to add an img where there wasnt one before, you need a container(empty elements like a paragraph)

// document.getElementById("img-cont").innerHTML = "<img src='images/pic.jpg'"; (this adds an image)

// apple vs android
// change the apple vs android image to just android
document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.background = "#a4c93b";
  document.getElementById("link").href = "http://www.android.com/";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("body").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.background = "#b6bcca";
  document.getElementById("link").href = "http://www.apple.com/&$39";
  document.getElementById("html").style.background = "#b6bcca";
  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}
