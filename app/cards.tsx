import Card from "./card";
import Item from "./item";
const items1 = ["2 utilisateurs", "Ventes Illimitees", "-", "-", "-"];
const items2 = ["1 utilisateurs", "50K de ventes", "Google Sheet", "-", "-"];
const items3 = [
  "3 utilisateurs",
  "Ventes Illimitees",
  "Google Sheet",
  "commande par Whatsapp",
  "Roles et permissions Custom",
];

const Cards = () => {
  return (
    <div className="flex w-full max-w-sm flex-col py-16 px-10 gap-4 items-center md:flex-row md:max-w-6xl ">
      <Card
        title="Execom"
        price="17"
        hearder="Pour les inscrits jusqu'au 31 Mars 2025"
      >
        {items3.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Card>
      <Card title="Youcan" price="27">
        {items2.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Card>
      <Card title="Shopify" price="32">
        {items1.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Card>
    </div>
  );
};

export default Cards;
