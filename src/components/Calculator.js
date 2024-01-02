import classes from "../css-modules/Calculator.module.css";
import Buttonbox from "./Buttonbox";
import Display from "./Display";
import CalcContextProvider from "../contexts/CalcContext";
 
function Calculator() {
  return (
    <div className={classes.calc_body}>
      <CalcContextProvider>
        <Display />
        <Buttonbox />
      </CalcContextProvider>
    </div>
  );
}

export default Calculator;
