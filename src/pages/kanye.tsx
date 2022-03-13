import { NextPage } from "next";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getKanyeQuote, kanyeQuoteSelector } from "../features/kanye";

const KanyePage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector);

  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </div>
  );
};

export default KanyePage;