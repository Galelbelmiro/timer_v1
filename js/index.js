let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalo 

function iniciar() {
    timer()
    intervalo = setInterval(timer, 1000)
}

function pausar(){
    clearInterval(intervalo)
}

function parar() {
    clearInterval(intervalo)
    segundos = 0;
    minutos = 0;
    document.getElementById('horas').innerText = '00'
    document.getElementById('minutos').innerText = '00'
    document.getElementById('segundos').innerText = '00'
}

function add_zero(num){
    if(num < 10){
       return '0' + num;
    }else{
        return num
    }
}

function timer() {
    segundos++
    if(segundos == 60){
        minutos++
        segundos = 0
    }


    if(minutos == 60){
        horas++
        minutos = 0
    }

    document.getElementById('horas').innerText= add_zero(horas)
    document.getElementById('minutos').innerText= add_zero(minutos)
    document.getElementById('segundos').innerText= add_zero(segundos)
}
