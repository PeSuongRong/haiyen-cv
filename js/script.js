
//project filter
"use strict";
const filterObject = document.querySelector('.project-filter');
const buttonFilter = filterObject.children;
const filterLength = buttonFilter.length;
const listOject = document.querySelector(".list-project").children;
const listObjectLength = listOject.length;
for(let i=0; i < filterLength; i++){
    buttonFilter[i].addEventListener("click",function(){
        filterObject.querySelector(".active").classList.remove('active');
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");
        for(let k=0; k<listObjectLength; k++){
            let dataCategory = listOject[k].getAttribute("data-category");
            if(dataFilter === dataCategory){
                listOject[k].classList.remove("hide");
                listOject[k].classList.add('show');
            }else if(dataFilter === "all"){
                listOject[k].classList.remove("hide");
                listOject[k].classList.remove("show");
            }else{
                listOject[k].classList.remove("show");
                listOject[k].classList.add('hide');
            }
        }
    });
};

//lightbox
const closeLightbox = document.querySelector(".lightbox-close");
const lightbox = document.querySelector(".lightbox");
const prevLightbox = document.querySelector(".btn-prev");
const nextLightbox = document.querySelector(".btn-next");
var indexItem = 0;
//close lightbox
closeLightbox.addEventListener("click", function(){
    lightbox.classList.remove("open");
});
// lightbox.addEventListener("click", function(event){
//     if(event.target === closeLightbox || event.target === lightbox){
//         lightbox.classList.remove("open");
//     }
// });
//show lightbox
for( let item = 0; item < listObjectLength; item++){
    listOject[item].addEventListener("click", function(){
        indexItem = item;
        changeImg();
        infoCategory();
        nextItem()
        lightbox.classList.add("open");
    });
}
//chaneg item lightbox
function changeImg(){
    let srcImg = listOject[indexItem].querySelector("img").getAttribute("src");
    lightbox.querySelector("img").src = srcImg;
}
//sum, title category
function infoCategory(){
    let dataCategory = listOject[indexItem].getAttribute("data-category");
    lightbox.querySelector("dd").innerHTML = (indexItem+1)+'/'+listObjectLength;
    lightbox.querySelector("dt").innerHTML = dataCategory;
}

function nextItem(){
    if(indexItem === listObjectLength-1){
        indexItem = 0;
    }else{
        indexItem++;
    }
    changeImg();
    infoCategory();
};
function prevItem(){
    if(indexItem===0){
        indexItem=listObjectLength-1;
    }else{
        indexItem--;
    }
    changeImg();
    infoCategory();
}

//slider main
const listNav = document.querySelector(".nav").children;
const listNavLength = listNav.length;
const listSec = document.querySelectorAll(".sec");
const listSecLength = listSec.length;
for(let i=0; i<listNavLength;i++){
    listNav[i].addEventListener("click", function(){
        let nameSec = listNav[i].querySelector("a").getAttribute("sec");
        for(let index=0; index<listSecLength;index++){
            var idSec = listSec[index].getAttribute("id");
            if(nameSec == idSec){
                document.querySelector(".nav .act").classList.remove("act");
                listNav[i].querySelector("a").classList.add("act");
                document.querySelector(".sec.open").classList.remove("open");
                listSec[index].classList.add("open");
            };
        }
    });
}

//menu left
const menuLeft = document.querySelector(".menu-left");
const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener("click", function(){
    evenToggleMenu();
});
function evenToggleMenu(){
    btnMenu.classList.toggle("close");
    menuLeft.classList.toggle("open");
    for(let index=0; index<listSecLength;index++){
        listSec[index].classList.toggle("pdl");
    };
    for(let i=0; i<listNavLength;i++){
        listNav[i].addEventListener("click", function(){
            btnMenu.classList.remove("close");
            menuLeft.classList.remove("open");
            for(let index=0; index<listSecLength;index++){
                listSec[index].classList.remove("pdl");
            };
        });
    }
    
}
//jquery
$(document).ready(function(){
    $(".nav a[sec='about']").click(function(){
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            },4000);
        });
    });
    setTimeout(function(){
        $('body').removeClass('loader');
        $('.profile').addClass('show');
    },1000);
});
