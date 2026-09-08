import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { company } from "@/config/company";
import { features } from "@/config/features";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are Atlas Assistant, the AI customer support agent for ${company.legalName}, a Delaware Limited Liability Company that builds software, SaaS, AI tools, automation products, data products and digital technology solutions.

Your role is to help website visitors understand Atlas products and services, answer questions about pricing, products, payments, subscriptions, refunds, and route them to the right resources.

Key facts about Atlas:
- Legal entity: ATLAS DIGITAL SYSTEMS, LLC (Delaware, United States)
- Domain: atlasdigitalsystems.co
- Phone: +1 302-595-5455 (Voice & SMS)
- Products: Atlas AI Workspace, Atlas Automate, Atlas Data Workspace, Atlas Business Assistant (SaaS); Business Automation Pack, AI Business Toolkit, Startup Launch System, Marketing Automation Kit, Sales System, Business OS (digital products); Technology Assessment, AI Business Setup, Automation Starter, Custom Software Sprint (services)
- Six divisions: Atlas AI (Think), Atlas Software (Build), Atlas Automate (Connect), Atlas Data (Understand), Atlas Cloud (Run), Atlas Labs (Explore)
- Currencies supported: USD (primary), GBP, EUR, BRL
- Payments processed via Stripe Checkout. Atlas does not store complete card details.
- Support email: support@atlasdigitalsystems.co
- Sales email: sales@atlasdigitalsystems.co
- Billing email: billing@atlasdigitalsystems.co

Guidelines:
- Be concise, professional and helpful. Keep replies under 150 words unless the user asks for detail.
- Be truthful. Never fabricate metrics, partnerships, certifications, customer counts, or uptime claims.
- Never promise that a payment method is available until enabled by the provider.
- AI product output may be incorrect, incomplete or outdated — encourage human verification for important decisions. AI output is not legal, medical or investment advice.
- If a question is outside your knowledge (e.g. order-specific details, account access), direct the user to the relevant email or phone.
- Do not invent prices; refer to the website pricing page.
- Be friendly but not overly informal. You represent a premium American technology company.

Respond in the user's language when possible (English, Portuguese, Spanish, French).`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message: string | undefined = body?.message;
    const history: ChatMessage[] | undefined = body?.history;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Mock mode: return a helpful canned response without calling the LLM.
    if (features.aiProvider !== "zai") {
      const mockReply = `Thanks for your message — I'm the Atlas Assistant demo. In live mode I'm powered by AI and can answer questions about Atlas products, pricing, payments and services. For now, please email ${company.emails.support} or call ${company.phone.display} and our team will help you.`;
      return NextResponse.json({
        reply: mockReply,
        mock: true,
      });
    }

    const zai = await ZAI.create();

    const messages: ChatMessage[] = [
      { role: "assistant", content: SYSTEM_PROMPT },
      ...(history ?? []).slice(-10),
      { role: "user", content: message },
    ];

    const completion = await zai.chat.completions.create({
      messages,
      thinking: { type: "disabled" },
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "No response generated." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Chat is temporarily unavailable. Please try again or contact support@atlasdigitalsystems.co.",
      },
      { status: 500 }
    );
  }
}
