const Styles = `body {
    background:  linear-gradient(to right, rgba(62,186,224,1) 0%, rgba(155,207,224,1) 50%, rgba(105,189,219,1) 100%);
    height: 100vh;
    display: grid;
    place-items: center;
    margin: 0;
}

.container{
    display: flex;
    justify-content: center;
    position: relative;
}


.head {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: orange;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: baseline;
}

.head::before{
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    // shadow inside form
    box-shadow: inset -30px -20px 0 3px darkorange;
}

.left, .right{
    background:  white;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left{
    margin-left: -270px;
    margin-top: 30px;
    // z-index: -1;
}

.right{
    margin-left: 30px;
    margin-top: 30px;
}

.left::before, .right::before {
    content: "";
    position: absolute;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    box-shadow: inset -5px -5px 0 3px lightgrey;

}

.left-pupil{
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: black;
    margin-left: 20px;
}

.right-pupil{
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: black;
    margin-left: 20px;
}

.big-dot{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    margin-left: 30px;
    margin-top: 20px;
}

.lil-dot{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    margin-left: 10px;
    margin-top: 50px;
}

.mouth{
    width: 60px;
    height: 60px;
    position: absolute;
    border: 5px solid black;
    border-radius: 50%;
    align-self: center;
    clip-path: circle(50% at 50% 100%);
    margin-left: -110px;
    margin-top: 10px;

}

.topfin{
    width: 200px;
    height: 200px;
    border-radius: 93% 7% 52% 48% / 36% 38% 62% 64% ;
    background: rgb(255, 212, 22);
    position: relative;
    justify-content: center;
    display: flex;
    margin-left: -210px;
    margin-top: -50px;
    z-index: -1;
    animation: topfin 1.5s linear infinite forwards;
}

.topfin::before{
    content: "";
    width: 100px;
    height: 150px;
    position: absolute;
    border-radius: 87% 13% 34% 66% / 47% 61% 39% 53% ;
    background: transparent;
    border-left: 1vmin solid orange;
    margin-left: 10px;
    margin-top: 0px;
    transform: rotate(10deg);
    z-index: 1;
}

.topfin::after{
    content: "";
    width: 60px;
    height: 150px;
    position: absolute;
    border-radius: 87% 13% 34% 66% / 47% 61% 39% 53% ;
    background: transparent;
    border-left: 1vmin solid orange;
    margin-left: 120px;
    margin-top: 0px;
    transform: rotate(20deg);
    z-index: 1
}

@keyframes topfin {
    0%{
        transform: translateY(0px) rotateX(0deg);
        opacity: 1;
    }
    50%{
        transform: translateY(0px) rotateX(25deg);
        opacity: 1;
    }
}


.fin{
    position: absolute;
    width: 110px;
    height: 110px;
    background: rgb(255, 212, 22);
    border-radius: 30% 70% 57% 43% / 0% 47% 53% 100% ;
    margin-left: 170px;
    margin-top: 210px;
    z-index: 1;
    animation: fin 1.25s linear infinite forwards;
}

.fin::before{
    content: "";
    position: absolute;
    width: 90px;
    height: 80px;
    background: transparent;
    border-radius: 0% 100% 0% 100% / 0% 100% 0% 100% ;
    border-right: 1vmin solid orange;
    transform: rotate(5deg);
    margin-left: 5px;
}

.fin::after{
    content: "";
    position: absolute;
    width: 90px;
    height: 80px;
    background: transparent;
    border-radius: 0% 100% 0% 100% / 0% 100% 0% 100% ;
    border-right: 1vmin solid orange;
    transform: rotate(25deg);
    margin-left: -20px;
    margin-top: 15px;
}

@keyframes fin {
    0%{
        transform: translateY(0px) rotateX(0deg);
        opacity: 1;
    }
    50%{
        transform: translateY(0px) rotateX(25deg);
        opacity: 1;
    }
}

.finback{
    position: absolute;
    width: 110px;
    height: 110px;
    background: rgb(255, 212, 22);
    border-radius: 30% 70% 57% 43% / 0% 47% 53% 100% ;
    margin-left: -150px;
    margin-top: 210px;
    z-index: -1;
    animation: finback 1.25s linear infinite forwards;
}

.finback::before{
    content: "";
    position: absolute;
    width: 90px;
    height: 70px;
    background: transparent;
    border-radius: 22% 78% 43% 57% / 0% 81% 19% 100%   ;
    border-right: 1vmin solid orange;
    margin-left: 20px;
    margin-top: 20px;
    transform: rotate(-160deg);
    z-index: -1
}

@keyframes finback {
    0%{
        transform: translateY(0px) rotateX(0deg);
        opacity: 1;
    }
    50%{
        transform: translateY(0px) rotateX(25deg);
        opacity: 1;
    }
}



.tail{
    position: absolute;
    width: 180px;
    height: 180px;
    background: rgb(255, 212, 22);
    border-radius: 90% 10% 0% 100% / 78% 100% 0% 22%;
    margin-right: -410px;
    margin-top: 50px;
    z-index: -1;
    animation: tail 1.5s linear infinite forwards;
}


.tail::before{
    content: "";
    position: absolute;
    width: 180px;
    height: 110px;
    background: transparent;
    border-radius: 90% 10% 0% 100% / 78% 100% 0% 22%;
    border-right: 1vmin solid orange;
    transform: rotate(-100deg);
    margin-right: -400px;
    margin-top: 110px;
    z-index: -1
}

.tail::after{
    content: "";
    position: absolute;
    width: 180px;
    height: 110px;
    background: transparent;
    border-radius: 90% 10% 0% 100% / 78% 100% 0% 22%;
    border-right: 1vmin solid orange;
    transform: rotate(-80deg);
    margin-left: -30px;
    margin-top: 150px;
    z-index: -1
}


@keyframes tail {
    0%{
        transform: translateY(0px) rotateY(0deg);
        opacity: 1;
    }
    50%{
        transform: translateY(0px) rotateY(25deg);
        opacity: 1;
    }
}

.bubble{
    width: 100px;
    height: 100px;
    position: absolute;
    left: -140px;
    top: -50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.712);
    border-width: 10px;
    border-color: rgb(255, 255, 255);
    animation: bubble 1.5s linear infinite forwards;
}

.bubble::before{
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.712);
    border-width: 10px;
    border-color: rgb(255, 255, 255);
    left: -50px;
    top: -50px;
    animation: bubble 1.5s linear infinite forwards;
}

.bubble::after{
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.712);
    border-width: 10px;
    border-color: rgb(255, 255, 255);
    left: 50px;
    top: -100px;
    animation: bubble 1.5s linear infinite forwards;
}


@keyframes bubble {
    0%{
        transform: translateY(0px) rotateY(0deg);
        opacity: 1;
    }
    100%{
        transform: translateY(-100px) rotateY(0deg);
        opacity: 0;
    }
}
  
`;

export default Styles;
