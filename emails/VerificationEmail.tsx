import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  otp: string;
}

export const EmailTemplate = ({ name, email, otp }: EmailTemplateProps) => (
  <div>
    <h3>Welcome, {name}!</h3>
    <p>
      Your 8 digit OTP is :
      <span style={{ fontSize: "20px", fontWeight: "500" }}> {otp}</span>
    </p>
  </div>
);
