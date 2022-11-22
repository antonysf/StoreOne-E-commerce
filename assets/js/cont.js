// Lembra da data alvo como exemplo
var dataCountdownISO = "Jan 20, 2023 12:00:00"

// função contador segundos
function Segundos() {
  dataCountdownISO = new Date(Date.now() + (101950 * 1000)).toISOString()
};
Segundos()

// define a data que estamos em contagem regressiva
var countDownDate = new Date(dataCountdownISO).getTime();

// atualiza a contagem a cada segundo
var x = setInterval(function () {

  // data e hora de hoje
  var now = new Date().getTime();

  // encontra a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;

  // calculos de tempo para dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // monstra o resultado no id dday"
  document.getElementById("dday").innerHTML = days + " : " + hours + " : " +
    minutes + " : " + seconds + "";

  // definição da contagem regressiva 
  if (distance < 1000) {
    // redefini o contador e continua a funcionar novamente :)
    Segundos()
    countDownDate = new Date(dataCountdownISO).getTime()
  }
}, 1000);