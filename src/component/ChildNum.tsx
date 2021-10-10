import {useSelector} from 'react-redux'
import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';

const TmpButton = styled.button`

    color: black;
    border:none;
    cursor:pointer;
    font-size: 1.5rem;
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;

    ${props => {
        const recvColor = props.color || "rgb(136, 211, 170)";
        if(props.id=="0" || props.id=="1" || props.id=="2"){
            const recvColor = props.color || "#F9F7F4";
            return css`
            background-color: #F9F7F4;
            &:hover {
                background-color: ${lighten(0.015,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;
        }
        if(props.id=="3" || props.id=="4" || props.id=="5"){
            const recvColor = props.color || "#faf1e6";
            return css`
            background-color: #faf1e6;

            &:hover {
                background-color: ${lighten(0.02,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;
        }
        if(props.id=="6" || props.id=="7" || props.id=="8"){
            const recvColor = props.color || "#E8E0D7";
            return css`
            background-color: #E8E0D7;

            &:hover {
                background-color: ${lighten(0.02,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;
        }
        else{
            return css`
            background-color: #e4efe7;

            &:hover {
                background-color: ${lighten(0.1,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;   
        }    
        
          
    }}

`;


const ChildNum =(state)=>{
    return (
        <div>
          <TmpButton onClick={state.onClicked} value={state.i} id={state.index} >{state.i}</TmpButton>
        </div>
      );
}

export default ChildNum;