export default function LegalMentions() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-secondary text-white shadow-md rounded-2xl md:mt-28">
      <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le site <span className="font-medium">Frewinglas</span> est édité par
          :
          <br />
          <strong>Frewinglas</strong>
          <br />
          Adresse : ZAC DE LA FORGE 1 RUE DES CHAMPS DE BLE 77680 ROISSY-EN-BRIE
          <br />
          Email :{" "}
          <a
            href="mailto:cf.leroux@frewinglas.com"
            className="text-blue-400 hover:underline"
          >
            f.leroux@frewinglas.com
          </a>
          <br />
          Téléphone :{" "}
          <a
            href="tel:+33 01 41 95 75 69"
            className="text-blue-400 hover:underline"
          >
            01 41 95 75 69
          </a>
          <br />
          Numéro SIRET : 85235258200021
          <br />
          Capital social : 7 500,00 €
          <br />
          Forme juridique : SAS, société par actions simplifiée
          <br />
          Directeur de la publication : Lelandais Jean
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold  mb-2">Hébergement</h2>
        <p className="">
          Le site est hébergé par :<br />
          <strong>Hostinger</strong>
          <br />
          Adresse : Hostinger International Ltd., 61 Lordou Vironos Street, 6023
          Larnaca, Chypre
          <br />
          Téléphone :{" "}
          <a
            href="tel:+35724030194"
            className="text-blue-600  dark:text-blue-400-400  hover:underline"
          >
            +357 24 03 0194
          </a>
          <br />
          Site web :{" "}
          <a
            href="https://www.hostinger.com"
            className="text-blue-600 hover:underline"
          >
            https://www.hostinger.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site{" "}
          <span className="font-medium">Frewinglas</span> (textes, images,
          vidéos, logos, etc.) sont protégés par les lois en vigueur sur la
          propriété intellectuelle. Toute reproduction, distribution,
          modification ou utilisation sans autorisation préalable est
          strictement interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Données personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification
          et de suppression de vos données personnelles. Pour exercer ce droit,
          veuillez nous contacter à l&apos;adresse suivante :{" "}
          <a
            href="mailto:f.leroux@frewinglas.com"
            className="text-blue-400 hover:underline"
          >
            f.leroux@frewinglas.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p>
          Le site <span className="font-medium">Frewinglas</span> utilise des
          cookies pour améliorer votre expérience utilisateur. Vous pouvez
          configurer votre navigateur pour refuser les cookies ou pour être
          averti avant leur installation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
        <p>
          L&apos;éditeur ne peut être tenu responsable en cas de dommages
          directs ou indirects résultant de l&apos;utilisation du site ou de
          l&apos;impossibilité de son utilisation.
        </p>
      </section>
    </div>
  );
}
