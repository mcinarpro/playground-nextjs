import React from "react";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export async function getServerSideProps() {
  const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`);
  return {
    props: {
      pokemon: await res.json(),
    },
  };
}

export default function Pokemon({ pokemon }: { pokemon: Pokemon[] }) {
  return <div>{JSON.stringify(pokemon)}</div>;
}
