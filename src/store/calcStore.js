import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num:9,
    res:5,
    oper:"",
}
const calcSlice = createSlice({
    name:'calc',
    initialState,
    reducers:{
        numberClick:(state,action)=>{
            let inp_num = action.payload.toString()
            let numValue;
            if(inp_num==='0' && state.res===0 && state.num===0){
                numValue='0';
            }
            else{
                numValue=Number(state.num + inp_num)
            console.log("state.num",state.num)
            return {
                ...state,
                num: numValue
              };
            }
        },
        sign:(state,action)=>{
            console.log("payload",action.payload)
            console.log("num",state.num)
            state.num=0;
            state.res=!state.res && state.num? state.num:state.res;
            state.oper=action.payload;
            console.log("res",state.res)
        },
        reset:(state)=>{
            state.num=0;
            state.res=0;
            state.oper="";
        },
        back:(state)=>{
            let number  = state.num.toString();
            state.num = Number(number.substring(0,number.length-1));
        },
        point:(state)=>{
            state.num = state.num.toString().includes('.') ? state.num : state.num + '.';
        },
        equals:(state)=>{
            console.log(state.calculator)
            if(state.res!==0 && state.num!==0){
                let MathOp=(a,b,sign)=>{
                    console.log(state)
                    let calMath={
                        '+':(a,b)=>a+b,
                        '-':(a,b)=>a-b,
                        'x':(a,b)=>a*b,
                        '/':(a,b)=>a/b
                    }
                    return calMath[sign](a,b)
                }
                state.res=MathOp(state.res,state.num,state.oper);
                state.num=0;
                state.oper=""
        }
        }
    }
}
)

export default calcSlice.reducer;

export const calActions = calcSlice.actions;