"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="container max-w-7xl py-20 mx-auto">
      <h1 className="text-4xl font-bold mb-20 text-center">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-secondary md:w-2/3">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6. h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Email</h3>
                <Link
                  href="mailto:haggarw5@asu.edu"
                  className="text-secondary hover:text-primary-hover"
                >
                  haggarw5@asu.edu
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6. h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Phone</h3>
                <Link
                  href="tel:+16025659205"
                  className="text-secondary hover:text-primary-hover"
                >
                  +1(602) 565-9205
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6. h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Location</h3>
                <p className="text-secondary">San Diego, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md border border-border bg-bg focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 rounded-md border border-border bg-bg focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={4}
                required
                id="message"
                name="message"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-md border border-border bg-bg focus:ring-2 focus:ring-primary focus:border-none"
              />
            </div>

            <button type="submit" className="w-full btn btn-secondary">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-success text-center font-semibold">Message sent successfully</p>
            )}
            {status === "error" && (
              <p className="text-warning text-center font-semibold">
                Failed to send message. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
