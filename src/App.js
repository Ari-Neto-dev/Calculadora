import React, { useState } from "react";

//criando as funções
export default function App() {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  //COMPONENTES
  //criando elementos
  // elemento  tela linha de operações e outra resultados
  const Tela = (valor, resultado) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{resultado}</span>
      </div>
    );
  };

  //criando o botao

  const Botao = (label, onClick) => {
    return (
      <button style={cssBotao} onClick={onClick}>
        {label}
      </button>
    );
  };

  //FUNÇÕES
  //fazer aparecer o número na tela

  const addDigitoTela = (digito) => {
    if (
      (digito === "+" || digito === "-" || digito === "*" || digito === "/") &&
      operado
    ) {
      console.log("+-*/");
      setOperado(false);
      setValorTela(resultado + digito);
      return;
    }
    if (operado) {
      setValorTela(digito);
      setOperado(false);
      return;
    }
    const valorDigitadoTela = valorTela + digito;
    setValorTela(valorDigitadoTela);
  };

  //limpar memória
  const limparMemoria = () => {
    setOperado(false);
    setValorTela("");
    setResultado(0);
    setAcumulador(0);
    return;
  };

  //operação
  const Operacao = (oper) => {
    if (oper == "backSpace") {
      let variavelTela = valorTela;
      variavelTela = variavelTela.substring(0, variavelTela.length - 1);
      setValorTela(variavelTela);
      setOperado(false);
      return;
    }
    //operações críticas
    //usar eval para fazer o cálculo
    try {
      const resultado = eval(valorTela); //aqui é feito o cálculo que esta na tela
      setAcumulador(resultado);
      setResultado(resultado);
      setOperado(true);
    } catch {
      setResultado("ERRO");
    }
  };

  //ESTILOS
  const cssConteiner = {
    display: "flex",
    justifyContente: "flexStart",
    alignItems: "center",
    flexDirection: "column",
    width: 300,
    border: "1px solid #000",
  };

  const cssBotoes = {
    flexDirection: "row",
    flexWrap: "wrap",
  }

  const cssTela = {
    display: "flex",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContente: "center",
    alignItems: "flex-start",
    backgroundColor: "#444",
    flexDirection: "column",
    width: 260,
  };

  const cssTelaOperacao = {
    fontSize: 25,
    color: "#fff",
    height: 20,
  };

  const cssTelaResultado = {
    fontSize: 50,
    color: "#fff",
  };

  const cssBotao = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#000",
    textAlign: "center",
    outline: "none",
  }

  return (
    <>
      <div style={cssConteiner}>
        <h3>Calculadora Matemática</h3>
        {Tela(valorTela, resultado)}
        <div style={cssBotoes}>
          {Botao('AC',limparMemoria)}
          {Botao('(',()=>addDigitoTela('('))}
          {Botao(')',()=>addDigitoTela(')'))}
          {Botao('/',()=>addDigitoTela('/'))}
          {Botao('7',()=>addDigitoTela('7'))}
          {Botao('8',()=>addDigitoTela('8'))}
          {Botao('9',()=>addDigitoTela('9'))}
          {Botao('*',()=>addDigitoTela('*'))}
          {Botao('4',()=>addDigitoTela('4'))}
          {Botao('5',()=>addDigitoTela('5'))}
          {Botao('6',()=>addDigitoTela('6'))}
          {Botao('-',()=>addDigitoTela('-'))}
          {Botao('3',()=>addDigitoTela('3'))}
          {Botao('2',()=>addDigitoTela('2'))}
          {Botao('1',()=>addDigitoTela('1'))}
          {Botao('+',()=>addDigitoTela('+'))}
          {Botao('0',()=>addDigitoTela('0'))}
          {Botao('.',()=>addDigitoTela('.'))}
          {Botao('<-',()=>Operacao('backSpace'))}
          {Botao('=',()=>Operacao('='))}



        </div>
      </div>
    </>
  );
}

// export default App;
