import classes from '../css-modules/Buttonbox.module.css';
import Button from './Button';
import React from 'react';

function Buttonbox(){

    let buttons=[
        'C','/','x','+',
        1,2,3,4,'-',
        5,6,7,8,'.',
        9,0,'<--','='
    ]
    return (
        <div className={classes.button_box}>
            {buttons.map((button,i)=>(
                <Button 
                key={i}
                value={button}/>
            )
            )}
        </div>
    )
}

export default Buttonbox;