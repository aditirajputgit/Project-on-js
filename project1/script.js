let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

const spring = document.querySelector(".spring-button");
const summer = document.querySelector(".summer-button");
const autumn = document.querySelector(".autumn-button");
const winter = document.querySelector(".winter-button");

const img = document.querySelector(".season-image");

spring.addEventListener("click",function(e){
  document.getElementById("selectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
  document.getElementById("mdSelectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
},false);

summer.addEventListener("click",function(e){
    document.getElementById("selectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
  document.getElementById("mdSelectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"
},false);

winter.addEventListener("click",function(e){
    document.getElementById("selectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
  document.getElementById("mdSelectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"
},false);

autumn.addEventListener("click",function(e){
    document.getElementById("selectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
  document.getElementById("mdSelectedImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"
},false);