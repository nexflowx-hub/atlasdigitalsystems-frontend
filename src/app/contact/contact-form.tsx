"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const departments = [
  "General",
  "Sales",
  "Support",
  "Billing",
  "Privacy",
  "Security",
  "Developers",
  "Legal",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name (2+ characters)."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  country: z.string().optional(),
  department: z.enum(departments, {
    errorMap: () => ({ message: "Please select a department." }),
  }),
  subject: z.string().min(3, "Please add a subject (3+ characters)."),
  message: z.string().min(20, "Please add more detail (20+ characters)."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept to continue." }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: "",
      department: undefined,
      subject: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    // CONTACT_PROVIDER=mock — no real email is sent.
    // Simulate a brief delay for UX, then confirm receipt.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Your message has been received.", {
      description: "We will respond via email.",
    });
    // Submission details are not stored or transmitted when CONTACT_PROVIDER=mock.
    void data;
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-atlas rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-white">
            Name <span className="text-atlas-cyan">*</span>
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-white">
            Email <span className="text-atlas-cyan">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium text-white">
            Company
          </Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name (optional)"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            {...register("company")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="text-sm font-medium text-white">
            Country
          </Label>
          <Input
            id="country"
            autoComplete="country-name"
            placeholder="Country (optional)"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            {...register("country")}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="department" className="text-sm font-medium text-white">
            Department <span className="text-atlas-cyan">*</span>
          </Label>
          <Controller
            control={control}
            name="department"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(v) =>
                  field.onChange(v as FormValues["department"])
                }
              >
                <SelectTrigger
                  id="department"
                  className="w-full border-atlas-border bg-atlas-void/60 text-white data-[placeholder]:text-atlas-muted/70"
                  aria-invalid={!!errors.department}
                >
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.department && (
            <p className="text-xs text-red-400">{errors.department.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="subject" className="text-sm font-medium text-white">
            Subject <span className="text-atlas-cyan">*</span>
          </Label>
          <Input
            id="subject"
            placeholder="What is this about?"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            aria-invalid={!!errors.subject}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-xs text-red-400">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message" className="text-sm font-medium text-white">
            Message <span className="text-atlas-cyan">*</span>
          </Label>
          <Textarea
            id="message"
            rows={6}
            placeholder="Tell us about your project, question or issue…"
            className="border-atlas-border bg-atlas-void/60 text-white placeholder:text-atlas-muted/70"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <Controller
            control={control}
            name="consent"
            render={({ field }) => (
              <label
                htmlFor="consent"
                className="flex cursor-pointer items-start gap-3"
              >
                <Checkbox
                  id="consent"
                  checked={field.value === true}
                  onCheckedChange={(v) => field.onChange(v as true)}
                  className="mt-0.5"
                />
                <span className="text-xs leading-relaxed text-atlas-muted">
                  I consent to ATLAS DIGITAL SYSTEMS, LLC processing the information above to respond to my inquiry, in accordance with the Privacy Policy. <span className="text-atlas-cyan">*</span>
                </span>
              </label>
            )}
          />
          {errors.consent && (
            <p className="mt-1 text-xs text-red-400">{errors.consent.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-atlas-muted">
          Your message has been received — we will respond via email.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          className="bg-atlas-blue text-white hover:bg-atlas-blue-bright"
        >
          {submitting ? "Sending…" : "Send message"}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
