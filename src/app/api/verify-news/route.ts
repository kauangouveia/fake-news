import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { titleOrUrl }: { titleOrUrl: string } = await req.json();

  // Verifique se o título ou URL é válido
  if (!titleOrUrl || typeof titleOrUrl !== "string") {
    return NextResponse.json(
      { error: "O título ou URL fornecido é inválido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "Você é um especialista em checagem de fatos que verifica a veracidade de notícias.",
          },
          {
            role: "user",
            content: `Por favor, verifique a veracidade da seguinte notícia ou título: "${titleOrUrl}". Baseie-se nas informações disponíveis e forneça uma análise sobre sua confiabilidade e possíveis indícios de falsidade. Retorne um texto breve`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${data.error.message}`);
    }

    const analysis = data.choices[0].message.content;
    const isFalse =
      analysis.toLowerCase().includes("falsa") ||
      analysis.toLowerCase().includes("fake");
    const status = isFalse ? "FALSA" : "VERDADEIRA";

    return NextResponse.json({
      title: titleOrUrl,
      analysis: analysis,
      status: status,
    });

  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
