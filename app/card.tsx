import React from "react";

type CardProps = {
  hearder?: string;
  title: string;
  price: string;
  children: React.ReactNode;
};

const Card = ({ title, price, children, hearder }: CardProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-card-background border border-card-border shadow-lg rounded-2xl p-8">
      {hearder && (
        <h1 className="mr-auto text-black text-sm font-alata">{hearder}</h1>
      )}
      <h1 className="mr-auto text-card-foreground-secondary font-alata">
        {title}
      </h1>
      <div className=" font-inter mr-auto text-6xl text-card-foreground">
        ${price}
        <span className=" font-inter mx-1 text-sm text-card-foreground-secondary">
          /mois
        </span>
      </div>
      <div className="flex flex-col mr-auto gap-2 my-2">{children}</div>
    </div>
  );
};

export default Card;
