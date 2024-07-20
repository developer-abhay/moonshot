import { sendVerificationEmail } from "@/helpers/resend";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

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
        return user;
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
});
