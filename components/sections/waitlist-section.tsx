"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  ArrowRight,
  Check,
  Mail,
  Clock,
  Globe,
  TrendingUp,
  Shield,
  BadgePercent,
  Loader2,
  AlertCircle,
} from "lucide-react";
import apiClient from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  whatsappNumber: yup
    .string()
    .required("WhatsApp number is required")
    .min(10, "Please enter a valid phone number"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

type FormData = yup.InferType<typeof schema>;

const features = [
  {
    icon: Globe,
    text: "Send money globally at 0.3% flat fee",
  },
  {
    icon: TrendingUp,
    text: "Treasury management with yield",
  },
  {
    icon: BadgePercent,
    text: "Invoice lending - 80% advance rate",
  },
  {
    icon: Shield,
    text: "FDIC insured & bank-level security",
  },
  {
    icon: Shield,
    text: "Licensed & fully regulated",
  },
];

export default function WaitlistSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsappNumber: "",
      message: "",
    },
  });

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    try {
      await apiClient.post("/contact", {...data, "source": "COMPLYREMIT"});

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setIsError(true);
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist-section"
      className="relative py-16 sm:py-24 overflow-hidden bg-gray-50"
      aria-labelledby="waitlist-heading"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-1.5 text-sm text-gray-600 mb-6" role="status">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Now accepting early access requests
            </div>

            <h2
              id="waitlist-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Get In Touch
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to revolutionize how you handle international payments?
              Join businesses who are saving thousands on cross-border transfers.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10 list-none p-0" role="list" aria-label="Platform benefits">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm font-medium text-gray-900 mb-4">
                Have questions? Reach out directly:
              </p>
              <address className="space-y-3 not-italic">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <a
                    href="mailto:sales@complyremit.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Email sales at sales@complyremit.com"
                  >
                    sales@complyremit.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </address>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Request Early Access
                </h3>
                <p className="text-sm text-gray-600">
                  Fill out the form and we&apos;ll get back to you shortly.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                  aria-label="Early access request form"
                >
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="h-11"
                            autoComplete="name"
                            aria-describedby="fullName-error"
                          />
                        </FormControl>
                        <FormMessage id="fullName-error" />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="h-11"
                            autoComplete="email"
                            aria-describedby="email-error"
                          />
                        </FormControl>
                        <FormMessage id="email-error" />
                      </FormItem>
                    )}
                  />

                  {/* WhatsApp */}
                  <FormField
                    control={form.control}
                    name="whatsappNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            {...field}
                            className="h-11"
                            autoComplete="tel"
                            aria-describedby="whatsapp-error"
                          />
                        </FormControl>
                        <FormMessage id="whatsapp-error" />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Tell us about your needs..."
                            {...field}
                            className="flex min-h-25 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            aria-describedby="message-error"
                          />
                        </FormControl>
                        <FormMessage id="message-error" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full text-base mt-2 bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                    aria-describedby={isSuccess ? "success-message" : isError ? "error-message" : undefined}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Access</span>
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {/* Success Message */}
              {isSuccess && (
                <div
                  id="success-message"
                  className="mt-6 rounded-lg bg-green-50 p-4 text-center"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <Check className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">
                      Request submitted successfully!
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-green-600/80">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {isError && (
                <div
                  id="error-message"
                  className="mt-6 rounded-lg bg-red-50 p-4 text-center"
                  role="alert"
                  aria-live="assertive"
                >
                  <div className="flex items-center justify-center gap-2 text-red-600">
                    <AlertCircle className="h-5 w-5" aria-hidden="true" />
                    <span className="font-medium">Submission failed</span>
                  </div>
                  <p className="mt-1 text-sm text-red-600/80">
                    {errorMessage}
                  </p>
                </div>
              )}

              {/* Note */}
              <p className="mt-6 text-center text-xs text-gray-500">
                By submitting, you agree to our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
