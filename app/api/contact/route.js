import { NextResponse } from "next/server";
import { Resend } from "resend";

const submissions = new Map();
const allowedServices = new Set([
  "Website",
  "Mobile App",
  "Web Application",
  "Custom Software",
  "SaaS Product",
  "Other",
  "School Management Platform",
  "Custom Product Development",
  "Partnership",
  "Website Development",
  "Mobile App Development",
  "Custom Software Development",
  "Maintenance & Support",
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
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const budget = typeof data.budget === "string" ? data.budget.trim() : "";
  const service = typeof data.service === "string" ? data.service.trim() : "";
  const projectDescription = typeof data.message === "string" ? data.message.trim() : "";

  if (
    data.website ||
    name.length < 2 ||
    name.length > 100 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    email.length > 254 ||
    phone.length < 7 ||
    phone.length > 30 ||
    company.length > 160 ||
    budget.length > 40 ||
    !allowedServices.has(service) ||
    projectDescription.length < 2 ||
    projectDescription.length > 5000
  ) {
    return NextResponse.json({ error: "Please provide valid inquiry details." }, { status: 400 });
  }

  submissions.set(clientKey, now);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Bytrova Inquiries <onboarding@resend.dev>",
      to: ["bytrova1@gmail.com"],
      reply_to: email,
      subject: "New Project Inquiry - Bytrova",
      html: `
        <h2>New Project Inquiry</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #ddd">${company || "Not provided"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${service}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Budget</td><td style="padding:8px;border:1px solid #ddd">${budget || "Not provided"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Project Description</td><td style="padding:8px;border:1px solid #ddd">${projectDescription}</td></tr>
        </table>
      `,
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    submissions.delete(clientKey);
    console.error("Contact inquiry delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to send inquiry right now." }, { status: 502 });
  }
}
