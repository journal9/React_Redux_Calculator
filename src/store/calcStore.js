import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
    name:"calc",
    initialState:{
        num:0,
        res:0,
        oper:""
    },
    reducers:{
        numberClick:(state,action)=>{
            let inp_num = action.payload.toString()
            let numValue;
            if(inp_num==='0' && state.res===0 && state.num===0){
                numValue='0';
            }
            else{
                numValue=Number(state.num + inp_num)
            state.num = numValue
            }
        },
        sign:(state,action)=>{
            state.num=0;
            state.res=!state.res && state.num? state.num:state.res;
            state.oper=action.payload;
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
                console.log(state)
        }
        }
    }
}
)

export default calcSlice;

export const calActions = calcSlice.actions;