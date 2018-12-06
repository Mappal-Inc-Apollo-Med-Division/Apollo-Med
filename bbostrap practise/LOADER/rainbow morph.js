/* this works best in chrome */

:root {
  --xcontrol: 15px;
  --ycontrol: 15px;
  --scale: 0.5;
}


.world {
  position: absolute;
  margin: auto;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 350px;
  transform: scale(1.2);
}





.position {
  position:absolute;
  transform:rotate(45deg);
  left:170px;
  top:-80px;
}
.lens span {
  position: absolute;
  top:70px;
  left:75px;
  width: 100px;
  height: 100px;
  background:red;
  border-radius:0 100%;
  transform-origin: bottom right;
  opacity:0.5;
  animation: rainbow 6s linear infinite;
}
.lens span:nth-child(1) {
  animation-delay: -5.8s;
}
.lens span:nth-child(2) {
  transform: rotate(12deg);
  animation-delay: -5.6s;
}
.lens span:nth-child(3) {
  transform: rotate(24deg);
  animation-delay: -5.4s;
}
.lens span:nth-child(4) {
  transform: rotate(36deg);
  animation-delay: -5.2s;
}
.lens span:nth-child(5) {
  transform: rotate(48deg);
  animation-delay: -5s;
}
.lens span:nth-child(6) {
  transform: rotate(60deg);
  animation-delay: -4.8s;
}
.lens span:nth-child(7) {
  transform: rotate(72deg);
  animation-delay: -4.6s;
}
.lens span:nth-child(8) {
  transform: rotate(84deg);
  animation-delay: -4.4s;
}
.lens span:nth-child(9) {
  transform: rotate(96deg);
  animation-delay: -4.2s;
}
.lens span:nth-child(10) {
  transform: rotate(108deg);
  animation-delay: -4s;
}
.lens span:nth-child(11) {
  transform: rotate(120deg);
  animation-delay: -3.8s;
}
.lens span:nth-child(12) {
  transform: rotate(132deg);
  animation-delay: -3.6s;
}
.lens span:nth-child(13) {
  transform: rotate(144deg);
  animation-delay: -3.4s;
}
.lens span:nth-child(14) {
  transform: rotate(156deg);
  animation-delay: -3.2s;
}
.lens span:nth-child(15) {
  transform: rotate(168deg);
  animation-delay: -3s;
}
.lens span:nth-child(16) {
  transform: rotate(180deg);
  animation-delay: -2.8s;
}
.lens span:nth-child(17) {
  transform: rotate(192deg);
  animation-delay: -2.6s;
}
.lens span:nth-child(18) {
  transform: rotate(204deg);
  animation-delay: -2.4s;
}
.lens span:nth-child(19) {
  transform: rotate(216deg);
  animation-delay: -2.2s;
}
.lens span:nth-child(20) {
  transform: rotate(228deg);
  animation-delay: -2s;
}
.lens span:nth-child(21) {
  transform: rotate(240deg);
  animation-delay: -1.8s;
}
.lens span:nth-child(22) {
  transform: rotate(252deg);
  animation-delay: -1.6s;
}
.lens span:nth-child(23) {
  transform: rotate(264deg);
  animation-delay: -1.4s;
}
.lens span:nth-child(24) {
  transform: rotate(276deg);
  animation-delay: -1.2s;
}
.lens span:nth-child(25) {
  transform: rotate(288deg);
  animation-delay: -1s;
}
.lens span:nth-child(26) {
  transform: rotate(300deg);
  animation-delay: -0.8s;
}
.lens span:nth-child(27) {
  transform: rotate(312deg);
  animation-delay: -0.6s;
}
.lens span:nth-child(28) {
  transform: rotate(324deg);
  animation-delay: -0.4s;
}
.lens span:nth-child(29) {
  transform: rotate(336deg);
  animation-delay: -0.2s;
}
.lens span:nth-child(30) {
  transform: rotate(348deg);
  animation-delay: 0s;
}

@keyframes rainbow {
  0%, 100% {
    background:red;
  }
  0% {
    transform:rotate(0deg)translate(0px)translateY(0px) scale(1);
  }
  50% {
    transform:rotate(180deg) translateX(var(--xcontrol)) translateY(var(--ycontrol)) scale(var(--scale));
  }
  100% {
    transform:rotate(360deg)translate(0px)translateY(0px) scale(1);
  }
  20% {
    background:blue;
  }
  40% {
    background:cyan;
  }
  60% {
    background:yellow;
  }
  80% {
    background:orange;
  }
}











