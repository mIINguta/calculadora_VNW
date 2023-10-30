import React, {useState} from 'react';
import { ConteinerCalc } from './styles/ConteinerCalc';
import { Visor } from  './styles/Visor';
import { Button, ButtonsLR, ButtonLimpar, ButtonResultado} from './styles/Buttons'
import { NumerosDiv, NumerosLista, Li } from './styles/Numeros';

function Calculadora(){
    const [numberOne, setNumberOne] = useState("");
    const [numberTwo, setNumberTwo] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");
    const [calcText, setCalcText] = useState("Calculadora");

    const getNumber = (e) => {
        setCalcText("");
        if(operator !== "" && numberOne == ""){
            setNumberOne(estadoAtual => operator.concat(numberOne + e.target.value));
            setOperator("");
        }
        else if(operator == "" && numberOne == ""){
            setNumberOne(estadoAtual => numberOne.concat(e.target.value));
        }
        else if(operator == "" && numberOne != ""){
            setNumberOne(estadoAtual => numberOne.concat(e.target.value));
        }
        else{
            setNumberTwo(estadoAtual => numberTwo.concat(e.target.value));
        }
    }
    const getOperator = (e) =>{
        setCalcText("");
        setOperator(e.target.value);
    }
    function getResult(){
        switch (operator){
            case "-":
                setResult(Number(numberOne) - Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("");
                break;
        
            case "+":
                setResult(Number(numberOne) + Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("");
                break;
            case "*":
                setResult(Number(numberOne) * Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("");
                break;
            case "/":
                setResult(Number(numberOne) / Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("");
                break;
        }
    } 
        const getDelete = () =>{
            setNumberOne("");
            setNumberTwo("");
            setOperator("");
            setResult(" ");
            setCalcText("Calculadora");
        }
    return(
    <>
     <ConteinerCalc> 
        <Visor>
        <h2>{calcText}</h2>
            <p className='n1'>{numberOne}</p>
            <p className='op'>{operator}</p>
            <p className='n2'>{numberTwo}</p>
            <p className='rs'>{result}</p>
        </Visor>
        <NumerosDiv>
            <NumerosLista>
                <Li><Button onClick={getNumber} value="7" >7</Button></Li>
                <Li><Button onClick={getNumber} value="8" >8</Button></Li>
                <Li><Button onClick={getNumber} value="9" >9</Button></Li>
                <Li><Button onClick={getOperator} value="-">-</Button></Li>
            </NumerosLista>
            <NumerosLista>
                <Li><Button onClick={getNumber} value="4" >4</Button></Li>
                <Li><Button onClick={getNumber} value="5" >5</Button></Li>
                <Li><Button onClick={getNumber} value="6" >6</Button></Li>
                <Li><Button onClick={getOperator} value="+">+</Button></Li>
            </NumerosLista>
            <NumerosLista>
                <Li><Button onClick={getNumber} value="3" >3</Button></Li>
                <Li><Button onClick={getNumber} value="2" >2</Button></Li>
                <Li><Button onClick={getNumber} value="1" >1</Button></Li>
                <Li><Button onClick={getOperator} value="*">x</Button></Li>
            </NumerosLista>
            <NumerosLista>
                <Li><Button onClick={getNumber} value="0">0</Button></Li>
                <Li><Button onClick={getNumber} value=".">.</Button></Li>
                <Li></Li>
                <Li><Button onClick={getOperator} value="/">/</Button></Li>
            </NumerosLista>
            <ButtonsLR>
            <ButtonLimpar onClick={getDelete}>⌫</ButtonLimpar>
            <ButtonResultado onClick={getResult}> = </ButtonResultado>
            </ButtonsLR>
        </NumerosDiv>
      </ConteinerCalc> 
    </>
    )
}
export default Calculadora