import { NextResponse } from "next/server";

const submissions = new Map();
const allowedServices = new Set([
  "Website Development",
  "Mobile App Development",
  "Custom Software Development",
  "ERP Development",
  "CRM Development",
  "E-commerce Development",
  "UI/UX Design",
  "API Development",
]);
const submissionWindow = 10 * 60 * 1000;

function getClientKey(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request) {
  const clientKey = getClientKey(request);
  const now = Date.now();
  const lastSubmission = submissions.get(clientKey) || 0;

  if (now - lastSubmission < submissionWindow) {
    return NextResponse.json(
      { error: "Please wait a few minutes before sending another inquiry." },
      { status: 429 },
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const service = typeof data.service === "string" ? data.service.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (data.website || name.length < 2 || name.length > 100 || !/^\S+@\S+\.\S+$/.test(email) || email.length > 254 || phone.length < 7 || phone.length > 30 || !allowedServices.has(service) || message.length < 2 || message.length > 5000) {
    return NextResponse.json({ error: "Please provide valid inquiry details." }, { status: 400 });
  }

  submissions.set(clientKey, now);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch("https://formsubmit.co/ajax/bytrova1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
        _subject: "New Project Inquiry - Bytrova",
        _template: "table",
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Upstream submission failed");
    }

    return NextResponse.json({ success: true });
  } catch {
    submissions.delete(clientKey);
    return NextResponse.json({ error: "Unable to send inquiry right now." }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
