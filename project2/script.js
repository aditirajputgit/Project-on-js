const img = document.getElementById("img");
const icon = document.getElementById("icon");
const button = document.querySelector(".button");
const like = document.querySelector(".like-icon");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        button.style.backgroundColor = "#0967d2";
        button.style.color = "#ffffff";
        like.style.backgroundColor = "#ffffff";
        like.style.color = "#0967d2";
        isImageLiked = true;
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    } else {
        button.style.backgroundColor = "#9aa5b1";
        button.style.color = "#ffffff";
        like.style.backgroundColor = "#fffff";
        like.style.color = "#9aa5b1";
        isImageLiked = false;
        img.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    }
}