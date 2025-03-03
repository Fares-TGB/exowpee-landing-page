"use client";
import Carousell from "./carousell";
import Icone from "./icone";

const Header = () => {
  return (
    <div className=" flex flex-col items-center  ">
      <h2 className="text-[27px] font-alata ">JUSQU'AU 31 MARS 2025</h2>

      <Icone />

      <div className="flex flex-col items-center px-10">
        <h2 className="text-3xl font-alata  tracking-wide"> Le Futur #1 En</h2>
        <h2 className="text-3xl font-alata tracking-wide">
          E-commerce Afrique.
        </h2>

        <p className="pt-5 pb-10   max-w-md text-sm inline-flex text-center font-alata text-foreground-secondary md:max-w-lg">
          Execom est la plateforme e-commerce dérivée de Exowpee, un système
          complet de gestion commerciale pour les petites, moyennes et grandes
          entreprises
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="  text-sm inline-flex text-center font-alata text-foreground-secondary">
          Partenaire Officiel
        </p>
        <Carousell />
      </div>

      <div className=" flex flex-col items-center  pt-16 ">
        <h2 className="text-[24px] font-alata  tracking-wide">
          Allons Droit Au But!
        </h2>
        <p className="pt-5 max-w-md inline-flex text-center font-alata text-foreground-secondary px-16 md:max-w-lg">
          On cree pour les e-commercants africains. Laissez tomber Shopify,
          laissez tomber Youcan. Comparons!
        </p>
      </div>
    </div>
  );
};

export default Header;
