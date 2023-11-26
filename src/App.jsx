import { useState } from "react";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function calculaImc(p, a) {
    p = peso;
    a = altura;
    const result = (p/(a*a)).toFixed(1);

    if(result > 0 && result < 18.5){
      return `IMC: ${result}, baixo peso`;
    }else if(result < 24.9){
      return `IMC: ${result}, peso normal`;
    }else if(result < 29.9){
      return `IMC: ${result}, sobrepeso`;
    }else if(result < 34.9){
      return `IMC: ${result}, obesidade grau I`;
    }else if(result < 39.9){
      return `IMC: ${result}, obesidade grau II`;
    }else if(result >= 40 && result < 90){
      return `IMC: ${result}, obesidade grau III`;
    }else {
      return 'Insira Valores Válidos'
    }
  }


  return (
    <>
      <input onKeyUp={(e) => setPeso(e.target.value)} type="number" placeholder="Digite o PESO" />
      <input onKeyUp={(e) => setAltura(e.target.value)} type="number" placeholder="Digete a ALTURA" />
      {calculaImc()}
    </>
  )
}

export default App
