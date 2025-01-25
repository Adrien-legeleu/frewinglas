"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.email);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("message envoyé");
        toast({
          title: "Votre message a été envoyé avec succès !",
          description:
            "Nous traiterons votre message dans les plus brefs délais.",
        });
        setFormData({
          firstname: "",
          email: "",
          tel: "",
          message: "",
        });
      } else {
        console.log(response);
        toast({
          variant: "destructive",
          title: "une erreur est survenue",
          description:
            "Une erreur est survenue durant l'envoie de votre message",
          action: <ToastAction altText="Try again">Réessayer</ToastAction>,
        });
      }
    } catch (error) {
      console.error("error lors de l'envoie", error);
      toast({
        variant: "destructive",
        title: "une erreur est survenue",
        description: "Une erreur est survenue durant l'envoie de votre message",
        action: <ToastAction altText="Try again">Réessayer</ToastAction>,
      });
    }
  };
  return (
    <div className="max-w-lg w-full mx-auto font-poppins  rounded-3xl p-4 md:p-8 shadow-input  dark:bg-black">
      <form className="" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="firstname">Nom</Label>
          <Input
            required
            id="firstname"
            placeholder="Nom"
            value={formData.firstname}
            type="text"
            onChange={handleChangeValue}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Adresse mail</Label>
          <Input
            required
            value={formData.email}
            id="email"
            placeholder="Votre adresse mail"
            type="email"
            onChange={handleChangeValue}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="tel">Téléphone</Label>
          <Input
            required
            id="tel"
            value={formData.tel}
            placeholder="Votre numéro de téléphone"
            type="tel"
            onChange={handleChangeValue}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Entrez votre message"
            name="message"
            className="h-32"
            id="message"
            onChange={handleChangeValue}
            value={formData.message}
          />
        </LabelInputContainer>

        <Button
          className="w-full p-6 rounded-2xl"
          variant={"secondary"}
          type="submit"
        >
          Envoyer
          <BottomGradient />
        </Button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
