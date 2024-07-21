import { sendVerificationEmail } from "@/helpers/resend";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const userRouter = createTRPCRouter({
  // login
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;

      const user = await ctx.db.user.findUnique({
        where: {
          email,
          password,
        },
      });
      if (user) {
        const tokenData = { id: user.id, email: user.email, name: user.name };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!);

        return { user, token };
      } else {
        return null;
      }
    }),
  // signup
  signup: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), password: z.string() }),
    )
    .mutation(async ({ input, ctx }) => {
      const { name, email, password } = input;
      const verifyCode = Math.floor(Math.random() * 100000000).toString();

      const user = await ctx.db.user.create({
        data: { name, email, password, verifyCode },
      });

      sendVerificationEmail(name, email, verifyCode);
      return user;
    }),
  // verify
  verify: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        verifyCode: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { verifyCode, userId } = input;

      const user = await ctx.db.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (verifyCode == user?.verifyCode) {
        const updateUser = await ctx.db.user.update({
          where: {
            id: userId,
          },
          data: {
            isVerified: true,
          },
        });
        console.log("User Verified");
        return updateUser;
      } else {
        throw new Error("wrong OTP");
      }
    }),
  //Get all categories
  getCategories: publicProcedure
    .input(z.number())
    .query(async ({ input, ctx }) => {
      const pageNumber = input;
      const categories = await ctx.db.category.findMany({
        take: 6,
        skip: 6 * (pageNumber - 1),
      });

      return categories;
    }),
  // Select Category
  toggleCategory: publicProcedure
    .input(
      z.object({
        userID: z.string(),
        categoryID: z.string(),
        checked: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { userID, categoryID, checked } = input;
      if (checked) {
        const user = await ctx.db.user.update({
          where: { id: userID },
          data: {
            categories: {
              connect: {
                id: categoryID,
              },
            },
          },
        });
        return user;
      } else {
        const user = await ctx.db.user.update({
          where: { id: userID },
          data: {
            categories: {
              disconnect: {
                id: categoryID,
              },
            },
          },
        });
        return user;
      }
    }),
  // Get selected categories
  getUserCategories: publicProcedure
    .input(z.object({ userID: z.string() }))
    .query(async ({ input, ctx }) => {
      const { userID } = input;

      const user = await ctx.db.user.findUnique({
        where: { id: userID },
        include: { categories: true },
      });

      return user?.categories || [];
    }),
});
