"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function ContactUsForm() {
  const [msg, setMsg] = useState("");
  return (
    <>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setMsg("Thank you for contacting us we will reply very soon");
        }}
      >
        <div className="space-y-0.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900/80 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-darkColor hoverEffect"
        >
          Send Message
        </button>
      </form>
      <div className="mt-2 text-sm text-green-600">
        <p>{msg && msg}</p>
      </div>
    </>
  );
}

export default ContactUsForm;
