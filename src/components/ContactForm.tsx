"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg animate-fade-in">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded bg-primary text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-600 text-center mt-2">{success}</p>}
          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
} 