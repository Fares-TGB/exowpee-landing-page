"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitDetails } from "./action/actions";

export const schema = z.object({
  name: z.string().min(6, "Le nom doit avoir au moins 6 caractères"),
  email: z.string().email("Email invalide"),
  number: z
    .string()
    .min(8, "il faut minimum 8 chiffre sans l`identifiant du pays ")
    .max(10, "il faut maximum 10 chiffre sans l`identifiant du pays "),
  country: z.string(),
  comment: z
    .string()
    .min(
      10,
      "😅 peut etre c'est vous le plus grand ecommercant de demain ,mettez un commentaire plus exigeant"
    )
    .optional(),
});

type FormulaireData = z.infer<typeof schema>;

const Formulaire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormulaireData) => {
    const result = await submitDetails(data);
    if (result.success) {
      alert("Votre Formulaire a ete bien soummis ");
      reset();
    } else {
      alert("le formulaire n'a pas ete soumis");
    }
  };

  return (
    <div className=" w-full max-w-sm  flex flex-col items-center  px-6  md:max-w-[600px]">
      <h1 className="mx-auto text-[42px] font-alata mb-10">
        Rejoins la liste🚀
      </h1>

      <div className="w-full px-6  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <div>
            <label
              htmlFor="name"
              className="font-inter text-xs text-card-foreground-secondary"
            >
              Nom & Prenoms :
            </label>
            <input
              id="name"
              placeholder="Jane Smith"
              {...register("name")}
              className="border  w-full rounded-lg font-inter shadow-md bg-new-input text-sm my-2 p-2"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-inter text-xs text-card-foreground-secondary"
            >
              Email :
            </label>
            <input
              id="email"
              placeholder="jane@gmail.com"
              {...register("email")}
              className="border  w-full rounded-lg font-inter shadow-md bg-new-input text-sm my-2 p-2"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="number"
              className="font-inter text-xs text-card-foreground-secondary"
            >
              Numero :
            </label>
            <input
              id="number"
              type="number"
              placeholder="64273648"
              {...register("number")}
              className="border  w-full rounded-lg font-inter shadow-md bg-new-input text-sm my-2 p-2"
            />
            {errors.number && (
              <p className="text-red-500">{errors.number.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="font-inter text-xs text-card-foreground-secondary"
            >
              Pays:
            </label>
            <select
              id="country"
              {...register("country")}
              className="border  w-full rounded-lg font-inter shadow-md bg-new-input text-sm my-2 p-2"
            >
              <option value="Benin">Benin🇧🇯</option>
              <option value="Togo">Togo🇹🇬</option>
              <option value="Cote d'Ivoire">Cote d&apos;Ivoire🇨🇮</option>
            </select>
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="comment"
              className="font-inter text-xs text-card-foreground-secondary"
            >
              Remarques:
            </label>
            <textarea
              id="comment"
              {...register("comment")}
              className="border  w-full rounded-lg font-inter shadow-md bg-new-input text-left text-sm my-2 p-2 min-h-48"
            />
            {errors.comment && (
              <p className="text-red-500">{errors.comment.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
