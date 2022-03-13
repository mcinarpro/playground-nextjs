import { useState } from "react";

import Test from "@/components/Test";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { countSelector, decrement, increment, incrementByAmount } from "../features/counter";

import type { NextPage } from "next";
const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(countSelector);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <Test />
      <h2>
        The current number is{" "}
        {count}
      </h2>
      <div>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} type="number" />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by amount</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default Home;
