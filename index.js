document.location.href = "#tab_01"

const tabsBtn = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        // console.log("click")
        tabsBtn.forEach(function(item){
            item.classList.remove('active')
        });

        currentBtn.classList.add('active');

        
    });

});


const firstBtnOfList = document.querySelector('#desktop-btn-tab1')
// let counter = 0;
let amountOfli = 0



firstBtnOfList.addEventListener('click', function(){
        console.log("work")
        // counter++;
        
        console.log(amountOfli)
        const firstDesktopInput = document.querySelector('.first-desktop-input')
        const ol = document.querySelector('.first-desktop-ol')
        const li = document.createElement('li')
        
        if(firstDesktopInput.value == ""){
            return 
        }
    
        else if(amountOfli < 4){
            amountOfli++;
            ol.appendChild(li);
            li.textContent = firstDesktopInput.value;
        }
})



const secondBtnOfList = document.querySelector('#desktop-btn-tab2')

// let counter2 = 0;
let amountOfli2 = 0

secondBtnOfList.addEventListener('click', function(){
    console.log("work")
    // counter2++;
    // amountOfli2++;
    console.log(amountOfli2)
    const secondDesktopInput = document.querySelector('#second-desktop-input')
    const ol2 = document.querySelector('#second-desktop-ol')
    const li2 = document.createElement('li')
    
    if(secondDesktopInput.value == ""){
        return 
    }

    else if(amountOfli2 < 4){
        amountOfli2++;
        ol2.appendChild(li2);
        li2.textContent = secondDesktopInput.value;
    }
})


const firstBtnMobile = document.querySelector('#first-btn-mobile');

let amountOfli3 = 0;

firstBtnMobile.addEventListener('click', function (){

    const thirdDesktopInput = document.querySelector('#first-mobile-input');
    const ol3 = document.querySelector('#third-desktop-ol')
    const li3 = document.createElement('li')

    if(thirdDesktopInput.value == ""){
        return 
    }

    else if(amountOfli3 < 4){
        amountOfli3++;
        ol3.appendChild(li3);
        li3.textContent = thirdDesktopInput.value;
    }

})

const secondBtnMobile = document.querySelector('#second-btn-mobile');

let amountOfli4 = 0;

secondBtnMobile.addEventListener('click', function (){

    const fourthDesktopInput = document.querySelector('#second-mobile-input');
    const ol4 = document.querySelector('#fourth-desktop-ol')
    const li4 = document.createElement('li')

    if(fourthDesktopInput.value == ""){
        return 
    }

    else if(amountOfli4 < 4){
        amountOfli4++;
        ol4.appendChild(li4);
        li4.textContent = fourthDesktopInput.value;
    }

})








//-------------------------------------MOBILE -----SECTOR-------------------------------









const mountinBike = document.querySelector('.mountin-bike')
const womanBike = document.querySelector('.woman-bike')

const input = document.querySelector('#hide-list-01')
const label01 = document.querySelector('#label01')
const img01 = document.querySelector('#img01')
let changer01 = false

input.addEventListener('click', function (){
    
    if(changer01 == false){
        label01.style.color = "#3922C5"
        img02.src = "./fi-rr-angle-small-up.svg"
        changer01 = true
    }
    else{
        label01.style.color = "#0C0C0C"
        img01.src = "./fi-rr-angle-small-down.svg"
        changer01 = false
    }
    
            
});



const input02 = document.querySelector("#hide-list-02")
const label02 = document.querySelector("#label02")
const img02 = document.querySelector("#img02")
let changer02 = false

input02.addEventListener('click', () =>{
    
    if(changer02 == false){
        label02.style.color = "#3922C5"
        img02.src = "./fi-rr-angle-small-up.svg"
        changer02 = true
    }
    else{
        label02.style.color = "#0C0C0C"
        img02.src = "./fi-rr-angle-small-down.svg"
        changer02 = false
    }
    

})



