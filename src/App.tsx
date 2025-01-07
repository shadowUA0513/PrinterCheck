import { useState } from "react";
import "./App.css";
import Check from "./Check";

function App() {
  const [opened, setOpened] = useState<boolean>(false);

  console.log(opened);

  return (
    <>
      <button onClick={() => setOpened((e) => !e)}>btn</button>
      {opened && <Check />}
    </>
  );
}

export default App;
