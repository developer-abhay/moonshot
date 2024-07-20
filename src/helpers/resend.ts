import { Resend } from "resend";
import { EmailTemplate } from "emails/VerificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  name: string,
  email: string,
  otp: string,
) => {
  try {
    await resend.emails.send({
      from: "abhay@resend.dev",
      to: email,
      subject: "OTP for verification",
      react: EmailTemplate({ name, email, otp }),
    });
    return { success: true, message: "Verification Email sent successfully" };
  } catch (error) {
    console.error("Error Sending verification email");
    return { success: false, message: "Failed to send verification email" };
  }
};
