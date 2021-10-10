import {CHANGEVALUE,SHOWRESULT,START} from "../action/index";

const initState = {
    Num :{
        0:1,
        1:2,
        2:3,
        3:4,
        4:5,
        5:6,
        6:7,
        7:8,
        8:0,
    }, 
    result:"",
}

const reducer = (state = initState,action)=>{ 
    switch(action.type) { 
        case SHOWRESULT:
            return {...state, result:action.result};
        case START:
            state.Num[0]=action.v1;
            state.Num[1]=action.v2;
            state.Num[2]=action.v3;
            state.Num[3]=action.v4;
            state.Num[4]=action.v5;
            state.Num[5]=action.v6;
            state.Num[6]=action.v7;
            state.Num[7]=action.v8;
            state.Num[8]=action.v9;
            return {...state, Num:state.Num};
        case CHANGEVALUE:
            let k=action.v1;
            let t=action.v2;           
            [state.Num[k],state.Num[t]]=[state.Num[t],state.Num[k]];
            return {...state, Num:state.Num};
        default:   
            return state;
    }
}

export default reducer;