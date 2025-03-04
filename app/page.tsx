import Cards from "./cards";
import Faq from "./Faq";
import Formulaire from "./Formulaire";
import Header from "./header";
import Table from "./table";
export default function Home() {
  return (
    <div className="min-h-full  bg-[#FFFCF7] pt-10 pb-96 flex flex-col items-center">
      <Header />
      <Cards />
      <Table />
      <Faq />
      <Formulaire />
    </div>
  );
}
