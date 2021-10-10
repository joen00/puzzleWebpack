export const CHANGEVALUE="CHANGEVALUE";
export const SHOWRESULT="SHOWRESULT";
export const START="STRAT";

export const changeValue=(v1:Number,v2:Number)=>({
    type : CHANGEVALUE,
    v1 : v1,
    v2 : v2,
});

export const showResult=(v:any)=>({
    type : SHOWRESULT,
    result:v,
});

export const start=(v1:Number,v2:Number,v3:Number,v4:Number,v5:Number,v6:Number,v7:Number,v8:Number,v9:Number)=>({
    type : START,
    v1:v1,
    v2:v2,
    v3:v3,
    v4:v4,
    v5:v5,
    v6:v6,
    v7:v7,
    v8:v8,
    v9:v9,
});
