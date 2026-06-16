import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(40),
  service: z.string().max(120).optional(),
  projectType: z.string().max(120).optional(),
  referral: z.string().max(120).optional(),
  message: z.string().trim().min(10).max(2000),
});

export type ContactPayload = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: ContactPayload) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    void data;
    // TODO: Connect to email, CRM, or Lovable Cloud database after approval.
    return { ok: true, message: "Quote request received" };
  });
