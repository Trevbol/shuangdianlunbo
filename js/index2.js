window.onload=function () {
    let Box=document.querySelector(".contentSmallBox");
    let imgBox=document.querySelectorAll(".imgBox");
    let ButtonLeft=document.querySelector(".ButtonLeft");
    let ButtonRight=document.querySelector(".ButtonRight");
    let JumpBox=document.querySelectorAll(".JumpBox div");
    console.log(imgBox,Box,ButtonLeft,ButtonRight,JumpBox);
    let now=next=0;
    let t=setInterval(move,3000);
    function move() {
        next++;
        if(next==imgBox.length){
            next=0
        }
        imgBox[next].style.left="296px";
        animate(imgBox[now],{left:-296});
        animate(imgBox[next],{left: 0});
        JumpBox[now].className="";
        JumpBox[next].className="hot";
        now=next;
    }
    function moveL() {
        next--;
        if(next<0){
            next=imgBox.length-1;
        }
        imgBox[next].style.left="-296px";
        animate(imgBox[now],{left:296});
        animate(imgBox[next],{left: 0});
        JumpBox[now].className="";
        JumpBox[next].className="hot";
        now=next;
    }
    ButtonLeft.onclick=function () {
        moveL();
    };
    ButtonRight.onclick=function () {
        move();
    };
    Box.onmouseenter=function () {
        clearInterval(t);
    };
    Box.onmouseleave=function () {
        t=setInterval(move,3000);
    };

    for(let i=0;i<imgBox.length;i++) {
        JumpBox[i].onclick = function () {
            if (now == i) {
                return;
            } else if (now < i) {
                imgBox[i].style.left = "296px";
                animate(imgBox[now], {left: -296});
                animate(imgBox[i], {left: 0});
                JumpBox[now].className = "";
                JumpBox[i].className = "hot";
            } else {
                imgBox[i].style.left = "-296px";
                animate(imgBox[now], {left: 296});
                animate(imgBox[i], {left: 0});
                JumpBox[now].className = "";
                JumpBox[i].className = "hot";
            }
            next = now = i;
        }
    }
}