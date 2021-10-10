import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {changeValue, showResult} from '../action/index';
import ChildNum from './ChildNum';


const GameboardDiv = styled.div`

    margin-top: 3rem;
    display: grid;
    grid-template-columns: 6rem 6rem 6rem;
    grid-template-rows: 6rem 6rem 6rem;
    justify-content: center;

`;

const ResultStyle = styled.div`

    font-size: 3rem;
    display: grid;
    justify-content: center;
    margin-top: 1rem;

`;

let btndirect=function(data,key){
    const array:Number[]=[-3,-1,1,3];
    const array1:Number[]=[-3,-1,3];
    const array2:Number[]=[-3,1,3];
    if(key==2 || key==5){
        for(let i in array1){
            let dx=key+array1[i];
            if(dx<0 ||dx>8)continue;
            if(data[dx]==0)return dx;
        }
    }
    else if(key==3 || key==6){
        for(let i in array2){
            let dx=key+array2[i];
            if(dx<0 ||dx>8)continue;
            if(data[dx]==0)return dx;
        }
    }
    else{
        for(let i in array){
            let dx=key+array[i];
            if(dx<0 ||dx>8)continue;
            if(data[dx]==0)return dx;
        }
    }
    return 9;
}

let findans = function (data) {
    if (data[0] == 1 && data[1] == 2 && data[2] == 3 && data[3] == 4 && data[4] == 5 && data[5] == 6 && data[6] == 7 && data[7] == 8 && data[8] == 0)return 1;

};

const ParentNum=(state)=>{
    
    const dispatch = useDispatch();
    let states = useSelector(state => state);
    
    let num0:Number=states.Num[0];
    let num1:Number=states.Num[1];
    let num2:Number=states.Num[2];
    let num3:Number=states.Num[3];
    let num4:Number=states.Num[4];
    let num5:Number=states.Num[5];
    let num6:Number=states.Num[6];
    let num7:Number=states.Num[7];
    let num8:Number=states.Num[8];
    let data:Number[]=[num0,num1,num2,num3,num4,num5,num6,num7,num8];

    const onClicked=(e)=>{   

        let value:Number=parseInt(e.target.value);
        let index:any = data.indexOf(value);
        let z:any = data.indexOf(0);
        //위아래좌우
        let zero:Number = btndirect(data, index);

        if (value != 0) {
            if (zero < 9) {
                document.getElementById(String(z)).innerHTML = String(value);
                e.target.innerHTML = 0;
                dispatch(changeValue(index,z));
                [data[z], data[index]] = [data[index], 0];
                if (findans(data) == 1) dispatch(showResult("정답"));
                console.log(data);
            }
        }
    }   

    const mapping = data.map((i,index)=>{  
        return <ChildNum key ={index} i={i} index={index} onClicked={onClicked}/>
    })

    return (
        <React.Fragment>
          <GameboardDiv>
            {mapping}
          </GameboardDiv>
          <ResultStyle>{states.result}</ResultStyle>
        </React.Fragment>
      );

}

export default ParentNum;