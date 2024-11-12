import { Box, Container, Main, Section } from "@/components/craft";
import Image from "next/image";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <h1>Welcome to Craft</h1>
          <p>Build responsive layouts with ease.</p>
          <Box cols={{ sm: 1, md: 2 }} gap={4}>
            <div>Feature 1</div>
            <div>Feature 2</div>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
