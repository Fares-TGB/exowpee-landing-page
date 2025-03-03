"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { z } from "zod";

const serverSchema = z.object({
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

export async function submitDetails(data: z.infer<typeof serverSchema>) {
  const validateFields = serverSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: validateFields.error?.flatten().fieldErrors };
  }

  try {
    await prisma.post.create({
      data: {
        name: data.name,
        email: data.email,
        number: data.number,
        country: data.country,
        comment: data.comment || "",
      },
    });
    return { success: "enregistré avec succès !" };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return { error: "Email déjà utilisé" };
    }
    return { error: "Failed to create post" };
  }
}
