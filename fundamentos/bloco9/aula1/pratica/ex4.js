const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (onSucess,onError) =>{
    const temperaturamarte =getMarsTemperature();
    const ChanceToErro=Math.floor(Math.random() * 100)
    if(ChanceToErro<=60){
        setTimeout((()=>(onSucess(temperaturamarte))),messageDelay())
    }else{
        setTimeout((()=>(onError('Robot is busy'))),messageDelay())
    }
}

sendMarsTemperature(temperatureInFahrenheit,handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet,handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo








