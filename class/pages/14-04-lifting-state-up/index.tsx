import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/child1";
import Child2 from "../../src/components/units/14-lifting-state-up/child2";

export default function LiftingStatePage() {
  const [count, setCount] = useState(0);

  const CountIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Child1 count={count} CountIncrease={CountIncrease} />
      <div>
        ==================================================================
      </div>
      <Child2 count={count} CountIncrease={CountIncrease} />
    </div>
  );
}
