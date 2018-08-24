window.onload=function () {
    let SmallBox=document.querySelector(".contentSmallBox");
    let ButtonLeft=document.querySelector(".ButtonLeft");
    let ButtonRight=document.querySelector(".ButtonRight");
    let imgBox=document.querySelectorAll(".imgBox");
    let Jump=document.querySelectorAll(".JumpBox div");
    console.log(Jump);

    let now=next=0;


    function move() {
        next++;
        if (next==imgBox.length){
            next=0;
        }
        imgBox[next].style.left="296px";
        animate(imgBox[now],{left:-296});
        animate(imgBox[next],{left:0});
        Jump[now].className="";
        Jump[next].className="hot";
        now=next;

    }
    function moveL() {
        next--;
        if (next<0){
            next=imgBox.length-1;
        }
        imgBox[next].style.left="-296px";
        animate(imgBox[now],{left:296});
        animate(imgBox[next],{left:0});
        Jump[now].className="";
        Jump[next].className="hot";
        now=next;

    }
    let t=setInterval(move,2000);
    SmallBox.onmouseenter=function () {
        clearInterval(t);
    };
    SmallBox.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    ButtonRight.onclick=function () {
        move();
    }
    ButtonLeft.onclick=function () {
        moveL();
    }

    for(let i=0;i<imgBox.length;i++){
        Jump[i].onclick=function () {
            if (now==i){
                return;
            }else if(now<i){
                imgBox[i].style.left="296px";
                animate(imgBox[now],{left:-296});
                animate(imgBox[i],{left:0});
                Jump[now].className="";
                Jump[i].className="hot";
            }else {
                imgBox[i].style.left="-296px";
                animate(imgBox[now],{left:296});
                animate(imgBox[i],{left:0});
                Jump[now].className="";
                Jump[i].className="hot";
            }
            next=now=i;
        }
    }

}