"use client";
<div className="mb-6 text-gray-300 space-y-2">
  <p>
    📧 Email:
    <a
      href="mailto:info@kyraimports.com"
      className="text-blue-400 hover:underline ml-2"
    >
      info@kyraimports.com
    </a>
  </p>

  <p>📍 Location: Nairobi, Kenya</p>
</div>




import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call (we'll replace this later)
    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-zinc-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Contact Kyra Imports</h1>
        <p className="text-gray-400 mb-6">
          Have a question or want to import a vehicle? Reach out to us.
        </p>

        {success && (
          <p className="mb-4 text-green-400">
            Your message has been sent successfully.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
