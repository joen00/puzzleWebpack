import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {start,showResult} from '../action/index';

const ButtonDiv = styled.div`

    margin-top: 1rem;
    display: grid;
    justify-content: center;

`;

const TmpButton = styled.button`

    color: white;
    background-color: #6E6A66;
    font-size: 1.15rem;
    border-radius: 0.3rem;
    margin-top: 15px;

    ${props => {
        const recvWidth=props.width || "12";
        const recvHeigth=props.height || "3.4";
        const recvColor = props.color || "#6E6A66";

        return css`
            width : ${recvWidth}rem;
            height :  ${recvHeigth}rem;
            background-color: ${recvColor};

            &:hover {
                background-color: ${lighten(0.1,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;

        
            
    
    }}

`;

let getNumbers=function(){
    const t:number[] = [1,2,3,4,5,6,7,8,9];
    const candidate:number[] = [1,2,3,4,5,6,7,8,0];
    const temp:number[] = [];
    let newArr=t.map((i)=>{
        const chosen = candidate.splice(Math.floor(Math.random() * (10-i)), 1)[0];
        temp.push(chosen);
    })
    return temp;
}

let disorder=function(){
    const n=getNumbers();
    let a:number = 0;
    for(let i = 0; i < 8; i += 1) {
        for(let j = i+1; j < 9; j += 1) {
            if(n[i]==0)continue;
            if(n[j]==0)continue;
            if(n[i]>n[j]){
                a=a+1;
            }
        }
    }
    if(a%2==0){
        return n;
    }
    else{
        return disorder();
    }
}

const Button=(state)=>{
    let states = useSelector(state => state);
    const dispatch = useDispatch();
    
    const onClicked=(e)=>{  
        const target1 = document.getElementById('correct');
        target1.disabled = false;
        const target2 = document.getElementById('start');
        target2.disabled = true;

        let randomdata:number[]=disorder();
        dispatch(start(
            randomdata[0],
            randomdata[1],
            randomdata[2],
            randomdata[3],
            randomdata[4],
            randomdata[5],
            randomdata[6],
            randomdata[7],
            randomdata[8],
        ));
        dispatch(showResult(""));

    }   

    const onClickes=(e)=>{   
        const target1 = document.getElementById('correct');
        target1.disabled = true;
        const target2 = document.getElementById('start');
        target2.disabled = false;
        dispatch(start(1,2,3,4,5,6,7,0,8));
        dispatch(showResult(""));
    }  
   
    return (
        <React.Fragment>
            <ButtonDiv>
            <TmpButton id="start" onClick={onClicked}>시작</TmpButton>
            <TmpButton id="correct" onClick={onClickes}>초기화</TmpButton>
            </ButtonDiv>
        </React.Fragment>
      );

}

export default Button;