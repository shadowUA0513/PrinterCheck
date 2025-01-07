import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function Check() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button onClick={() => reactToPrintFn()}>check</button>
      <div ref={contentRef}>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          aspernatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          aspernatur!
        </p>
      </div>
    </div>
  );
}

export default Check;
