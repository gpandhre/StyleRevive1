


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
let popupView = document.querySelectorAll('.popup-view');
let popupBtn = document.querySelectorAll('.popup-btn');
let closeBtn = document.querySelectorAll('.ri-close-line');
let prodCard1 = document.querySelector('.one');
let prodCard2 = document.querySelector('.two');
let prodCard3 = document.querySelector('.three');
let viewMore = document.querySelector('.view');

let popup = function(popupClick){
    popupView[popupClick].classList.add('active');
    prodCard1.style.opacity='0';
    prodCard2.style.opacity='0';
    prodCard3.style.opacity='0';
    viewMore.style.opacity='0';
};
popupBtn.forEach((popupBtns,i) => {
    popupBtns.addEventListener("click",() => {
        popup(i);
    })
});

closeBtn.forEach((closeBtns)=>{
    closeBtns.addEventListener("click",() => {
        popupView.forEach((popupViews)=>{
            popupViews.classList.remove('active');
            prodCard1.style.opacity='1';
            prodCard2.style.opacity='1';
            prodCard3.style.opacity='1';
            viewMore.style.opacity='1';

        })
    })
})
let resetTimeout;
function submitForm() {
    event.preventDefault();
    const name = document.getElementById('name').value;
   

    if (name) {
        document.querySelector('.form-box').style.display = 'none';
        document.querySelector('.info').style.display='none';
        document.querySelector('.curved-shape').style.display='none';
        document.getElementById('thankYouContainer').style.display = 'flex';
        
        document.getElementById('thankYouMessage').innerText = `Hey ${name}, thank you for Reaching out.`;

        resetTimeout = setTimeout(goBack,10000);
    }
}
 
function goBack() {
    clearTimeout(resetTimeout);
    document.getElementById('formuser').reset();
    document.querySelector('.form-box').style.display = 'flex';
    document.querySelector('.info').style.display='flex';
    document.querySelector('.curved-shape').style.display='flex';
    document.getElementById('thankYouContainer').style.display = 'none';
}
