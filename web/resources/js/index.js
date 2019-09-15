var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var multiImages = document.getElementById("multi-images");
var circles = document.getElementById("multi-circles").getElementsByTagName("li");
var box=document.getElementById("box");
var currentIndex = 0;
var preIndex = 0;
var timer=null;

arrowLeft.addEventListener("click", preMove);
arrowRight.addEventListener("click", nextMove);
for (i=0;i<circles.length;i++ )
//for (let i = 0; i < circles.length; i++)
{
    circles[i].setAttribute("id", i);
    circles[i].addEventListener("mouseenter", overCircle);
}
timer=setInterval(nextMove,2000);
box.addEventListener("mouseover",function() {
    clearInterval(timer);
    arrowLeft.style.display="block";
    arrowRight.style.display="block";
});
box.addEventListener("mouseout",function() {
    timer=setInterval(nextMove,2000);
    arrowLeft.style.display="none";
    arrowRight.style.display="none";
});
changeCircleColor(preIndex, currentIndex);



function overCircle() {
    preIndex = currentIndex;
    currentIndex = parseInt(this.id);
    // multiImages.style.transition="1.5s";
    changeCircleColor(preIndex, currentIndex);
    moveImage();
}

function changeCircleColor(preIndex, currentIndex) {
    circles[preIndex].style.backgroundColor = "rgb(240, 240, 240)";
    circles[currentIndex].style.backgroundColor = "rgb(245, 40, 40)";
}

function preMove() {
    preIndex = currentIndex;
    if (currentIndex != 0) {
        currentIndex--;
        // multiImages.style.transition="1s";
    }
    else {
        currentIndex = 4;
        // multiImages.style.transition="0.5s";
    }
    changeCircleColor(preIndex, currentIndex);
    moveImage();
}

function nextMove() {
    preIndex = currentIndex;
    if (currentIndex != 4) {
        currentIndex++;
        // multiImages.style.transition="1s";
    }
    else {
        currentIndex = 0;
        // multiImages.style.transition="0.5s";
    }
    changeCircleColor(preIndex, currentIndex);
    moveImage();
}

function moveImage() {
    multiImages.style.left = -currentIndex * 1000 + "px";
}