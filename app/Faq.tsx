"use client";
import { Plus } from "lucide-react";
import React, { createContext, useContext, useState } from "react";

type AccordianItemsProps = {
  value: number;
  question: string;
  answer: string;
};

type AccordianContextType = {
  selected: number | null;
  setSelected: (index: number | null) => void;
};

type Items = {
  question: string;
  answer: string;
};

const AccordianContext = createContext<AccordianContextType | null>(null);

const useAccordianContext = () => {
  const context = useContext(AccordianContext);
  if (!context) {
    throw new Error("useAccordian must be used within a Accordian");
  }
  return context;
};

const AccordianProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <AccordianContext.Provider value={{ selected, setSelected }}>
      <ul>{children}</ul>
    </AccordianContext.Provider>
  );
};

const AccordianItem = ({ value, question, answer }: AccordianItemsProps) => {
  const { selected, setSelected } = useAccordianContext();
  const open = selected === value;
  return (
    <li className="border-b my-8 ">
      <button
        className="flex justify-end gap-3 font-inter  text-card-foreground "
        onClick={() => setSelected(open ? null : value)}
      >
        <Plus className={`transition-transform ${open ? "rotate-45" : ""}`} />
        {question}
      </button>
      {open && (
        <div
          className={` my-4 pl-9 text-card-foreground-secondary transition-all duration-400 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          <div>{answer}</div>
        </div>
      )}
    </li>
  );
};

const faqsItems: Items[] = [
  {
    question: "Pixel FaceBook",
    answer:
      "Bien sur , tout est disponible. Generer votre pixel et collez simplement le script dans votre interface admin.",
  },
  {
    question: "$17 pour toujours",
    answer:
      "Uniquement pour les inscrits avant la date de fermeture le 31 Mars 2025. Apres ca seras 25/mois",
  },

  {
    question: "le lancement est pour quand?",
    answer: " le lancement officiel est pour le 30 Avril 2025",
  },
];

const FaqPage = () => {
  return (
    <div className="w-full flex flex-col px-6 mb-16 md:max-w-6xl">
      <p className="mx-auto text-card-foreground-secondary text-6xl font-inter mb-16">
        FAQ
      </p>
      <div className="w-full bg-card-background border border-card-border rounded-2xl px-6 shadow-xl">
        <AccordianProvider>
          {faqsItems.map((item: Items, index: number) => (
            <AccordianItem
              key={index}
              value={index}
              question={item.question}
              answer={item.answer}
            ></AccordianItem>
          ))}
        </AccordianProvider>
      </div>
    </div>
  );
};

export default FaqPage;
