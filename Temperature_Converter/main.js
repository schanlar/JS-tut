var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

function roundNumber(num){
  /*
  This function rounds a number to the second decimal point
  */
  return Math.round(num*100)/100;
};

function cFK(){
   /*
   Convert celcius to fahrenheit and kelvin
   */

  var cTemp = parseFloat(celciusInput.value); //temperature in celcius
  var fTemp = (cTemp * (9/5)) + 32; //temperature in fahrenheit
  var kTemp = cTemp + 273.15; //temperature in kelvin

  if (cTemp*100 < -27315){

    fahrenheitInput.value = -999999999;
    kelvinInput.value = -999999999;
    alert('Value Error');
    throw 'Value Error';

  }else{

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
  };


};

function fCK(){
   /*
   Convert fahrenheit to celcius and kelvin
   */

  var fTemp = parseFloat(fahrenheitInput.value);
  var cTemp = (fTemp - 32) * (5/9);
  var kTemp = (fTemp + 459.67) * (5/9);

  if (fTemp*100 < -45967){

    celciusInput.value = -999999999;
    kelvinInput.value = -999999999;
    alert('Value Error!');
    throw 'Value Error';

  }else{

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
  };


};

function kCF(){
   /*
   Convert kelvin to celcius and fahrenheit
   */

  var kTemp = parseFloat(kelvinInput.value);
  var cTemp = kTemp - 273.15;
  var fTemp = (kTemp * (9/5)) - 459.67;

  if (kTemp < 0){

    celciusInput.value = -999999999;
    fahrenheitInput.value = -999999999;
    alert('Value Error');
    throw 'Value Error! Negative values are not allowed!';

  }else{
    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
  };
};



function main(){
  celciusInput.addEventListener('input', cFK);
  fahrenheitInput.addEventListener('input', fCK);
  kelvinInput.addEventListener('input', kCF);
};

main();
