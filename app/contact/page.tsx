import {
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import ContactForm from "../components/Contact/contactForm";

export default function page() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-start  sm:px-10 px-5 gap-10 h-full md:pt-32 pt-16">
      <div className="flex flex-col justify-start items-center gap-5 bg-secondary p-6 rounded-3xl">
        <div>
          <h1 className="text-4xl text-center font-semibold tracking-wider">
            Contactez-nous
          </h1>
          <p className="text-muted-foreground text-lg text-center tracking-wider">
            Vous avez une question ou une demande de devis ? N&apos;hésitez pas
            à nous contacter !
          </p>
        </div>
        <ul className="flex flex-col  gap-5">
          <ul className="bg-background p-5 space-y-4 rounded-3xl">
            <li className="">
              <h3>Téléphone :</h3>
              <p className="text-muted-foreground">01 41 95 75 69</p>
            </li>
            <li className="">
              <h3>Email :</h3>
              <p className="text-muted-foreground">f.leroux@frewinglas.com</p>
            </li>
          </ul>
          <li className="bg-background p-5 flex items-center justify-center gap-4 flex-col rounded-3xl">
            <h3>Suivez-nous :</h3>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/frewinglas/"
                target="_blank"
              >
                <IconBrandFacebookFilled className="text-muted-foreground" />
              </a>
              <a href="https://www.facebook.com/frewinglas" target="_blank">
                <IconBrandLinkedinFilled className="text-muted-foreground" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
}
