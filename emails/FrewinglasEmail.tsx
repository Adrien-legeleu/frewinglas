import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface IkovalineEmailProps {
  firstName: string;
  email: string;
  tel: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const IkovalineEmail = ({
  firstName,
  email,
  tel,
  message,
}: IkovalineEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Nouveau message de {firstName}</Preview>
      <Body className="bg-white font-sans">
        <Container
          className="mx-auto p-6 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${baseUrl}/static/ikovaline-bg.png")`,
          }}
        >
          <Heading className="text-2xl font-bold mt-12 text-center">
            Nouveau message de {firstName}
          </Heading>
          <Section className="my-6">
            <Text className="text-lg leading-7">
              <strong>Nom :</strong> {firstName}
            </Text>

            <Text className="text-lg leading-7">
              <strong>Email :</strong>{" "}
              <Link
                href={`mailto:${email}`}
                className="text-pink-500 hover:underline"
              >
                {email}
              </Link>
            </Text>
            <Text className="text-lg leading-7">
              <strong>Téléphone :</strong>{" "}
              <Link
                href={`tel:${tel}`}
                className="text-pink-500 hover:underline"
              >
                {tel}
              </Link>
            </Text>
          </Section>

          <Section className="my-6">
            <Text className="text-lg leading-7">
              <strong>Message :</strong>
            </Text>
            <Text className="text-lg leading-7">
              {message ? message : "Aucun message fourni"}
            </Text>
          </Section>

          <Hr className="border-t border-gray-300 mt-12" />

          <Text className="text-gray-500 text-sm text-center">
            Frewinglas Entreprise
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default IkovalineEmail;
