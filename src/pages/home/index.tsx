import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image";
import { Container, Hero, Preview } from "./styles";

import previewImage from "../../assets/app-preview.png";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Agenda | Tutor Connect"
        description="Conecte seu calendário e permita que as pessoas marquem tutorias."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Definindo agenda de tutorias
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem
            agendamentos.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  );
}
