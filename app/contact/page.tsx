"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Page() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields; humans never see it.
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <section className="page-intro narrow">
        <p className="kicker">Contact</p>
        <h1>Write to us</h1>
        <p>
          Questions about the gospel, feedback about this site, or a testimony of what God
          has done — we would be glad to hear from you.
        </p>
      </section>

      <section className="section">
        <div className="narrow panel">
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required maxLength={120} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" maxLength={120} />
            </div>
            <div className="field" hidden aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required maxLength={5000} />
            </div>
            <div>
              <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
            <p className="form-note">
              Your message is stored privately on this server and is never published.
            </p>
            {status === "success" ? (
              <p className="form-success">
                Thank you — your message has been received. God bless you.
              </p>
            ) : null}
            {status === "error" ? <p className="form-error">{error}</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
