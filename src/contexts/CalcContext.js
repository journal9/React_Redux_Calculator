import { createContext, useState } from "react";

export const CalcContext = createContext();
function CalcContextProvider({children}) {
    const [calc, setCalc] = useState({
      num: 0,
      res: 0,
      oper: "",
    });
    const calProvided = {calc, setCalc};
    return (
        <CalcContext.Provider value={calProvided}>
            {children}
        </CalcContext.Provider>
    );
  }

  export default CalcContextProvider;