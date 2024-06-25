// JavaScript Document

//Assigining element id's to variables for Images 1 through 5
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

//Assiging p element id to a variable imagecaption
let imageCaption = document.getElementById("caption");

//Assinging the large image element id to a variable lrgImg
let lrgImg = document.getElementById("largeImage");

//Function for changing img tags for display
function changeImg(){
    var imgSrc = this.getAttribute("src");
    var imgCaption = this.getAttribute("alt");
    lrgImg.setAttribute("src", imgSrc);
    imageCaption.innerHTML = imgCaption;
};

//Function to display image caption
function showCaption(){
    var imgCaption = this.getAttribute("alt");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newDiv");
    newDiv.innerHTML = imgCaption;
    this.after(newDiv);
};

//Function to remove caption
function hideCaption(){
    var newDiv = document.querySelector(".newDiv")
    newDiv.remove();
};

//Function to add border to selected image
function addBorder(){
    for (i = 1; i < 6; i++){
        var currentImg = document.getElementById("img" + i);
        currentImg.setAttribute("class", "thumb");
    }
    this.setAttribute("class", "active-image");
};

//A for loop that calls functions using event listeners "click" and "mouseover"
for (i= 1; i < 6; i++){
    var currentImg = document.getElementById("img" + i);
    currentImg.addEventListener("click", changeImg);
    currentImg.addEventListener("click", addBorder);
    currentImg.addEventListener("mouseover", showCaption);
    currentImg.addEventListener("mouseout", hideCaption);
}
