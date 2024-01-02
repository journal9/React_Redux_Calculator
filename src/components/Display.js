import { useSelector } from "react-redux";
import classess from "../css-modules/Display.module.css";

function Display() {
  const { calValue } = useSelector((store) => ({
    res: store.res,
    num: store.num,
  }));

  return (
    <div className={classess.display_screen}>
      {num ? num : res}
    </div>
  );
}

export default Display;
