import { useSelector } from "react-redux";
import classess from "../css-modules/Display.module.css";

function Display() {
  const {res, num}  = useSelector((state) => state.calc );

  return (
    <div className={classess.display_screen}>
      {num ? num : res}
    </div>
  );
}

export default Display;
