import { useSelector } from "react-redux";
import classess from "../css-modules/Display.module.css";

function Display() {
  const calValue  = useSelector((store) => ({
    res: store.res,
    num: store.num,
  }));
  console.log(calValue)

  return (
    <div className={classess.display_screen}>
      {calValue.num ? calValue.num : calValue.res}
    </div>
  );
}

export default Display;
