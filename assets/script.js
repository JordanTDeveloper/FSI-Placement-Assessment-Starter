// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jordan Tellez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total=0
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const minusGb=document.querySelector('#minus-gb')
// Code to update name display
credit.textContent = `Created by ${yourName}`

let qtyGb=document.querySelector('#qty-gb')


// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
gb++
total++
qtyGb.innerHTML=`${gb}`
console.log(total);

qtyTotal.innerHTML=`${total}`
})

minusGb.addEventListener('click', function() {
    if(gb<=0){
        qtyGb.innerHTML=0
    }else {
    gb--
    total--
    qtyGb.innerHTML=`${gb}`
    qtyTotal.innerHTML=`${total}`
    }
    })
    

    let minusCCBtn=document.querySelector('#minus-cc')
    let addCCBtn=document.querySelector('#add-cc')
    let qtyCc=document.querySelector('#qty-cc')
    addCCBtn.addEventListener('click', function() {
        cc++
        total++
        qtyCc.innerHTML=`${cc}`
        qtyTotal.innerHTML=`${total}`
        })

        minusCCBtn.addEventListener('click', function() {
            if(cc<=0){
                qtyCc.innerHTML=0
            }else {
            cc--
            total--
            qtyCc.innerHTML=`${cc}`
            qtyTotal.innerHTML=`${total}`
            }
            })
            

            let minusSugar=document.querySelector('#minus-sugar')
            let addSugar=document.querySelector('#add-sugar')
            let qtySugar=document.querySelector('#qty-sugar')

            addSugar.addEventListener('click', function() {
                sugar++
                total++
                qtySugar.innerHTML=`${sugar}`
                qtyTotal.innerHTML=`${total}`

                })
        
                minusSugar.addEventListener('click', function() {
                    if(sugar<=0){
                        qtySugar.innerHTML=0
                    }else {
                    sugar--
                    total--
                    qtySugar.innerHTML=`${sugar}`
                    qtyTotal.innerHTML=`${total}`
                    }
                    })

                  
                    
                    let qtyTotal=document.querySelector('#qty-total')
                    
