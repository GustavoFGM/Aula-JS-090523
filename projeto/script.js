//RETORNANDO HORAS

let horas = new Date()

document.write(horas.getHours());
document.write("<br><br>")

//RETORNANDO MINUTOS

let minute = new Date()

document.write(minute.getMinutes());
document.write("<br><br>")

//RETORNANDO OS SEGUNDOS

let segundos = new Date()

document.write(segundos.getSeconds());
document.write("<br><br>")

//ALTERANDO DATA

let horas1 = new Date()

horas1.setHours(horas1.getHours()+3);
document.write(horas1.getHours());
document.write("<br><br>")

//ALTERANDO MINUTOS

let minutos1 = new Date()

minutos1.setMinutes(minutos1.getMinutes()+3);
document.write(minutos1.getMinutes());
document.write("<br><br>")

//ALTERANDO SEGUNDOS

let segundos1 = new Date()

segundos1.setSeconds(segundos1.getSeconds()+3);
document.write(segundos1.getSeconds());
document.write("<br><br>")

//UTILIAZNDO O SET TIME OUT

function BemVindo(){
    alert("ola seja bem vindo")
}
setTimeout(BemVindo, 1000)