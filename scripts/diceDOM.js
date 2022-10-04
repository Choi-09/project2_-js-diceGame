//랜덤수 
let randNum ;
//사용자가 선택한 수
let userNum ;

// let startGame;

//화면 보기 함수
const dispDom = (diceSectionP, formSectionP, rollingDiceP, resultSectionP, bt1P, bt2P, bt3P) => {
    //DOM 제어 
    document.getElementById("diceSection").style.display = diceSectionP;
    document.getElementById("formSection").style.display = formSectionP;
    document.getElementById("rollingDice").style.display = rollingDiceP;
    document.getElementById("resultSection").style.display = resultSectionP;
    document.getElementById("bt1").style.display = bt1P;
    document.getElementById("bt2").style.display = bt2P;
    document.getElementById("bt3").style.display = bt3P;
}

//시작버튼 클릭 후
const showStart = () => {
    dispDom("none", "block", "none", "none", "none", "block", "none");
}

//주사위 던지기 버튼 클릭 후
const showDice = () => {
    //랜덤수 생성
    randNum = Math.floor(Math.random()*6) + 1 ;
    console.log(`주사위 랜덤수 => ${randNum}`);

    //DOM 제어
    dispDom("none", "none", "block", "none", "none", "none", "block"); 

    //주사위 gif
    let tag = `<img src="./images/ezgif.com-gif-maker.gif">` ;
    document.getElementById("rollingDice").innerHTML = tag;
}   


//확인
const showResult = () => {
    userNum = form1.num.value ;

    //DOM 제어 
    dispDom("block", "none", "none", "block", "block", "none", "none");  

    //주사위 그림
    let tag1 = `<img src="./images/${randNum}.png">` ;
    document.getElementById("diceSection").innerHTML = tag1;

    //ox 그림
    let ox;
    if (randNum == userNum) ox = "o" ;
    else ox = "x" ;

    tag2 = `<img src="./images/${ox}.png">`;

    //이미지 표시
   
    document.getElementById("resultSection").innerHTML = tag2;
    console.log(`사용자 선택 수 확인 => ${userNum}`);
}


//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
document.addEventListener("DOMContentLoaded", () => {
  //주사위 버튼만 보여야 함
    dispDom("none", "none", "none", "none", "block", "none", "none"); 

}); 