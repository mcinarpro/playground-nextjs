import { useMemo, useState } from "react";

import { Card, Grid, Input, Row, Text } from "@nextui-org/react";

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
  const [filter, setFilter] = useState("");

  const filteredPokemon = useMemo(
    () => pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase())),
    [filter, pokemon]
  );

  return (
    <>
      <Input placeholder="Next UI" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Grid.Container gap={2} justify="flex-start">
        {filteredPokemon.slice(0, 20).map((p) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={p.id}>
            <Card
              hoverable
              clickable
              // onClick={onClick}
            >
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{p.name}</Text>
                  <Text>#{p.id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
