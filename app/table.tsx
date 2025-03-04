const Table = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 py-16 md:max-w-6xl">
      <h2 className="text-[24px] font-alata tracking-wide mb-10">
        Comparaison Détaillée
      </h2>

      <div className="w-full overflow-x-auto bg-card-background border border-card-border rounded-2xl px-6 shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-card-border">
              <th className="p-4 text-left font-alata"></th>
              <th className="p-4 text-left font-alata text-blue-500">Execom</th>
              <th className="p-4 text-left font-alata">Youcan</th>
              <th className="p-4 text-left font-alata">Shopify</th>
            </tr>
          </thead>
          <tbody className="font-inter text-sm text-card-foreground-secondary">
            <tr className="border-b border-card-border">
              <td className="p-4">Nombres d&apos;utilisateurs</td>
              <td className="p-4 text-blue-500">3 utilisateurs</td>
              <td className="p-4">1 utilisateurs</td>
              <td className="p-4">2 utilisateurs</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-4">Nombres de ventes</td>
              <td className="p-4 text-blue-500">Ventes Illimitees</td>
              <td className="p-4">50K de ventes</td>
              <td className="p-4">Ventes Illimitees</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-4">Google Sheet</td>
              <td className="p-4 text-blue-500">Oui</td>
              <td className="p-4">Oui</td>
              <td className="p-4">Non</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-4">Commande par WhatsApp</td>
              <td className="p-4 text-blue-500">Oui</td>
              <td className="p-4">Non</td>
              <td className="p-4">Non</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-4">Roles et Permissions Custom</td>
              <td className="p-4 text-blue-500">Oui</td>
              <td className="p-4">Non</td>
              <td className="p-4">Non</td>
            </tr>
            <tr className="border-b border-card-border">
              <td className="p-4">Prix</td>
              <td className="p-4 text-blue-500">$17 (best value so far)</td>
              <td className="p-4">$27</td>
              <td className="p-4">$32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
