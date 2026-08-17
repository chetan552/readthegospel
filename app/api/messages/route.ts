import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type StoredMessage = {
  name: string;
  email: string;
  message: string;
  date: string;
};

const FILE = path.join(process.cwd(), "data", "messages.json");

export async function POST(request: Request) {
  let body: Partial<StoredMessage>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name and a message." },
      { status: 400 }
    );
  }
  if (message.length > 5000 || name.length > 120 || email.length > 120) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const entry: StoredMessage = {
    name,
    email,
    message,
    date: new Date().toISOString(),
  };

  let messages: StoredMessage[] = [];
  try {
    const existing = JSON.parse(await readFile(FILE, "utf8"));
    if (Array.isArray(existing)) messages = existing;
  } catch {
    // No file yet — start a fresh list.
  }

  messages.push(entry);
  await mkdir(path.dirname(FILE), { recursive: true });
  await writeFile(FILE, JSON.stringify(messages, null, 2), "utf8");

  return NextResponse.json({ ok: true });
}
