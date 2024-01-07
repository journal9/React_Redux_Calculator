import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    num:"",
    res:"",
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
                numValue=0;
            }
            else{
                numValue=Number(String(state.num) + String(inp_num))
            console.log("numvalue",numValue)
            state.num=numValue
            }
        },
        sign:(state,action)=>{
            console.log(current(state))
            console.log("payload",action.payload)
            let ress=!state.res && state.num? state.num:state.res;
            return {num:0,res:ress,oper:action.payload}
        },
        reset:()=>{
            return {num:0,res:0,oper:""}
        },
        back:(state)=>{
            let number  = state.num.toString();
            // state.num = Number(number.substring(0,number.length-1));
            return{
                ...state,
                num:Number(number.substring(0,number.length-1))
            }
        },
        point:(state)=>{
            state.num = state.num.toString().includes('.') ? state.num : state.num + '.';
        },
        equals:(state)=>{
            console.log(current(state))
            if(state.res!==0 && state.num!==0){
                let MathOp=(a,b,sign)=>{
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
                // return {num:0,res:ress,oper:""}
        }
        }
    }
}
)

export default calcSlice.reducer;

export const calActions = calcSlice.actions;