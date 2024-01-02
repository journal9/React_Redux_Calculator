import classes from "../css-modules/Calculator.module.css";
import Buttonbox from "./Buttonbox";
import Display from "./Display";
 
function Calculator() {
  return (
    <div className={classes.calc_body}>
        <Display />
        <Buttonbox />
    </div>
  );
}

export default Calculator;
