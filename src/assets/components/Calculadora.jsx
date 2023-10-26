import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


function Calculadora(){
    const ConteinerCalc = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 25vw;
    height: 80vh;
    border-radius: 10px;
    border: 1px solid silver;
    background-color: #000;
    gap: 35px;
    `
    const Visor = styled.div`
    margin-top: 12px;
    padding: 10px;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    text-align:center;
    color: #fff;
    
    `
    const NumerosDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `
    const NumerosLista = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    border: 1px solid;
    `
    const Li = styled.li`
    width: 20%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `
    const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 10%;
    border: none;
    background-color: #424242;
    color: #fff;
    `
    const ButtonLimpar = styled(Button)`
    width:20%;
    height: 10vh;
    font-size: 1.3rem;
    background-color: red;
    `
    const ButtonResultado = styled(ButtonLimpar)`
    background-color: green;
    `
    const ButtonsLR = styled(Visor)`
    height: 10vh;
    gap: 10px;
    border:none;
    margin-bottom: 10px;
    padding: 0px 10px 0 0;
    
    `

    const [numberOne, setNumberOne] = useState(" ");
    const [numberTwo, setNumberTwo] = useState(" ");
    const [operator, setOperator] = useState(" ");
    const [result, setResult] = useState("");
    const [calcText, setCalcText] = useState("Calculadora");

    const getNumber = (e) => {
        if(operator == " "){
        setNumberOne(numberOne + e.target.value);
        setCalcText("");
        setResult("");
        console.log("numero 1" + numberOne)
        }
        else{
            setNumberTwo(numberTwo + e.target.value);
            setResult("");
        }
    }
    const getOperator = (e) =>{
        setCalcText("");
        setOperator(e.target.value);
    }

    function getResult(){

        setResult(Number(numberOne) + Number(numberTwo));
        switch (operator){
            case "-":
                setResult(Number(numberOne) - Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("")
                console.log(result);
                break;
        
            case "+":
                setResult(Number(numberOne) + Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("")
                console.log(result);
                break;
            case "*":
                setResult(Number(numberOne) * Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("")
                console.log(result);
                break;
            case "/":
                setResult(Number(numberOne) / Number(numberTwo));
                setNumberOne("");
                setNumberTwo("");
                setOperator("")
                console.log(result);
                break;
        }
    } 
        const getDelete = () =>{
            setNumberOne(" ");
            setNumberTwo(" ");
            setOperator(" ")
            setResult(" ");
            setCalcText("Calculadora");
        }

    return(

    <>
    
     <ConteinerCalc> 
        <Visor>
        <h2>{calcText}</h2>
            {numberOne}
            {operator}
            {numberTwo}
            {result}
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