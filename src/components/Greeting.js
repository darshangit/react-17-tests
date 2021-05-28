import { useState } from "react";
import Async from "./Async";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output> Good to see you!</Output>}
      {changeText && <Output>Changed</Output>}

      <button onClick={changeTextHandler}>Change Text!</button>
      <Async></Async>
    </div>
  );
};

export default Greeting;
