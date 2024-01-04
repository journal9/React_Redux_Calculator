import { useDispatch } from "react-redux";
import { calActions } from "../store/calcStore";

function Button({value}){
    const dispatch = useDispatch()

    function getBtnClass(value){
        let classMap={
            '=':'equals',
            '+':'oper',
            '-':'oper',
            'x':'oper',
            '/':'oper',
            '.':'oper',
            '<--':'back',
            'C':'refresh',
        }
        if (classMap[value]){
            return classMap[value]
        }
        else{
            return 'digit'
        }
    }

    const handleBtnClick=()=>{ 
       const methodMap={
        'C':dispatch(calActions.reset()),
        '+':dispatch(calActions.sign(value)),
        '-':dispatch(calActions.sign(value)),
        'x':dispatch(calActions.sign(value)),
        '/':dispatch(calActions.sign(value)),
        '.':dispatch(calActions.point()),
        '<--':dispatch(calActions.back()),
        '=':dispatch(calActions.equals())
       }
       if(methodMap[value]) {
        return methodMap[value]
      } else {
        return dispatch(calActions.numberClick(value))
      }
    }

    return(
        <button className={`${getBtnClass(value)} btn`} onClick={handleBtnClick} value={value}>{value}</button>
    );
}

export default Button;








// const {calc,setCalc}=useContext(CalcContext);

// function getBtnClass(value){
//     let classMap={
//         '=':'equals',
//         '+':'oper',
//         '-':'oper',
//         'x':'oper',
//         '/':'oper',
//         '.':'oper',
//         '<--':'back',
//         'C':'refresh',
//     }
//     if (classMap[value]){
//         return classMap[value]
//     }
//     else{
//         return 'digit'
//     }

// }
// const handleNumClick=()=>{
//     let inp_num = value.toString()
//     let numValue;
//     if(inp_num==='0' && calc.res===0 && calc.num===0){
//         numValue='0';
//     }
//     else{
//         numValue=Number(calc.num + inp_num)
//         setCalc({
//             ...calc,
//             num:numValue
//     })
//     }

// }

// const resetBtn=()=>{
//     setCalc({ sign: '', num: 0, res: 0 })
// }

// const signBtn=()=>{
//     setCalc({
//         num:0,
//         res:!calc.res && calc.num? calc.num:calc.res,
//         sign:value
//     })
// }

// const pointBtn=()=>{
//     setCalc({
//         ...calc,
//         num: calc.num.toString().includes('.') ? calc.num : calc.num + value
//     })
// }

// const calcBtn = () => {
//     if(calc.res!==0 && calc.num!==0){
//         let MathOp=(a,b,sign)=>{
//             console.log(calc)
//             let calMath={
//                 '+':(a,b)=>a+b,
//                 '-':(a,b)=>a-b,
//                 'x':(a,b)=>a*b,
//                 '/':(a,b)=>a/b
//             }
//             return calMath[sign](a,b)
//         }
//         setCalc({
//             res:MathOp(calc.res,calc.num,calc.sign),
//             num:0,
//             sign:''
//         })
// }}

// const backBtn=()=>{
//     let number = calc.num.toString();
//     setCalc({
//         ...calc,
//         num:Number(number.substring(0,number.length-1))
//     })
// }

// const handleBtnClick=()=>{ 
//    const methodMap={
//     'C':resetBtn,
//     '+':signBtn,
//     '-':signBtn,
//     'x':signBtn,
//     '/':signBtn,
//     '.':pointBtn,
//     '<--':backBtn,
//     '=':calcBtn
//    }
//    if(methodMap[value]) {
//     return methodMap[value]()
//   } else {
//     return handleNumClick()
//   }
// }