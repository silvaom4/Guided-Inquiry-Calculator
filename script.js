let btn0 = document.querySelector('.btn-0')
let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')
let btn4 = document.querySelector('.btn-4')
let btn5 = document.querySelector('.btn-5')
let btn6 = document.querySelector('.btn-6')
let btn7 = document.querySelector('.btn-7')
let btn8 = document.querySelector('.btn-8')
let btn9 = document.querySelector('.btn-9')
let btnClear = document.querySelector('.btn-clear')
let btnDivide = document.querySelector('.btn-divide')
let btnMultiply = document.querySelector('.btn-multiply')
let btnSubtract = document.querySelector('.btn-subtract')
let btnAdd = document.querySelector('.btn-add')
let btnEqual = document.querySelector('.btn-equal')
let btnPeriod = document.querySelector('.btn-period')
let displayScreen = document.querySelector('.display-screen')


btn0.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '0'
    

})


btn1.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '1'
    

})


btn2.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '2'
    

})


btn3.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '3'
    

})

btn4.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '4'
    

})

btn5.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '5'
    

})


btn6.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '6'
    

})

btn7.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '7'
})


btn8.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '8'
    

})


btn9.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '9'
    

})

btnDivide.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '/'
    
})
btnMultiply.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '*'
})


btnSubtract.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '-'
})


btnAdd.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '+'
})

btnPeriod.addEventListener('click', function(e) {
    displayScreen.value = displayScreen.value + '.'
})


btnClear.addEventListener('click', function(e) {
    displayScreen.value = ''
})

btnEqual.addEventListener('click', function(e) {
    try {
    displayScreen.value = eval(displayScreen.value)
    }
    catch {
        displayScreen.value = "ERROR! TRY AGAIN!"
    }

})
