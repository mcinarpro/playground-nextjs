import { Card, Grid, Row, Text } from "@nextui-org/react";

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
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemon.slice(0, 20).map((p) => (
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
  );
}
