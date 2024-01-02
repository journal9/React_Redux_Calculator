import classess from '../css-modules/Display.module.css';
import { useContext } from 'react';
import { CalcContext } from '../contexts/CalcContext';

function Display(){
    const { calc } =useContext(CalcContext);

    return(
        <div className={classess.display_screen}>{calc.num ? calc.num : calc.res}</div>
    )
}

export default Display;