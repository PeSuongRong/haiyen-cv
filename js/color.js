//change color text
const listCssColor = document.querySelectorAll(".link");
const listCssColorLength = listCssColor.length;
function changeColor(color){
    for(let i=0; i<listCssColorLength;i++){
        let getColor = listCssColor[i].getAttribute("css");
        if(getColor === color){
            listCssColor[i].removeAttribute("disabled");
        }else{
            listCssColor[i].disabled = true;
        }
    }
}

//toggle box setting color
const closeSettingColor = document.querySelector(".close-setting-color");
const boxColor = document.querySelector(".sec-change-color");
closeSettingColor.addEventListener("click",function(){  
    boxColor.classList.toggle("open");
});

//change color body
function changeBody(color){
    if(color === "black"){
        document.querySelector(".wrapper").classList.add("dark");
    }else{
        document.querySelector(".wrapper").classList.remove("dark")
    }
}