"use client";
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
                <h1 className="text-3xl font-bold mb-2">Contact Kyra Plutinum Imports</h1>
                <div className="mb-6 text-gray-300 space-y-2">
                    <p>
                        📧 Email:
                        <a
                            href="mailto:kyracustoms.info@gmail.com"
                            className="text-blue-400 hover:underline ml-2"
                        >
                            kyracustoms.info@gmail.com
                        </a>
                    </p>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.867010450461!2d36.78584552202732!3d-1.251211439166246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17d4ab1a10d7%3A0xcba7eac3ccda679e!2sKYRA%20PLATINUM%20IMPORTS!5e0!3m2!1sen!2ske!4v1769063852124!5m2!1sen!2ske"
                        height="450" 
                        className="border-none w-full" 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <p>📍 Location: Spring Valley, Westlands-Nairobi, Kenya</p>
                </div>
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
