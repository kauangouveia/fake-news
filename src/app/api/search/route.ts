import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";
import path from "path";
import fs from "fs";

// Função para converter datas serial do Excel para formato legível (DD/MM/AAAA)
function formatExcelDate(serial: number): string {
  if (isNaN(serial) || serial <= 0) {
    return ""; // Se o número de série não for válido, retorna uma string vazia
  }

  const excelEpoch = new Date(1900, 0, 1); // Data base do Excel (1º de janeiro de 1900)
  const date = new Date(
    excelEpoch.getTime() + (serial - 1) * 24 * 60 * 60 * 1000
  ); // Ajusta dias

  // Verifica se a data resultante é válida
  if (isNaN(date.getTime())) {
    return ""; // Se a data não for válida, retorna uma string vazia
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam em 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Função para corrigir barras duplas nas URLs
function formatUrl(url: string): string {
  return url.replace(/\/\//g, "/");
}

export async function GET(req: NextRequest) {
  try {
    const { search, limit = 12 } = Object.fromEntries(
      new URL(req.url).searchParams
    );

    // Validar o limite
    const parsedLimit = parseInt(limit as string, 10);
    if (isNaN(parsedLimit) || parsedLimit <= 0) {
      return NextResponse.json(
        { error: "Invalid limit value" },
        { status: 400 }
      );
    }

    if (!search) {
      return NextResponse.json(
        { error: "No search query provided." },
        { status: 400 }
      );
    }

    // Caminho do arquivo
    const filePath = path.resolve(
      process.cwd(),
      "public",
      "data",
      "Teste.xlsx"
    );
    console.log("Caminho do arquivo:", filePath);

    // Verificar se o arquivo existe
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado:", filePath);
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 404 }
      );
    }

    // Ler o arquivo usando buffer
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = xlsx.read(fileBuffer, { type: "buffer" });
    console.log("Planilha carregada com sucesso!");

    // Ler a primeira planilha
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log("Dados da planilha:", sheetData);

    // Dividir a string de busca em palavras
    const searchTerms = search.toLowerCase().split(/\s+/);

    // Filtrar os dados com base nas palavras
    const results = sheetData
      .filter((row: any) => {
        const title = row.Titulos?.toLowerCase() || "";
        // Verifica se todas as palavras estão no título
        return searchTerms.every((term) => title.includes(term));
      })
      .map((row: any) => {
        // Formatar datas no formato Excel para DD/MM/AAAA
        if (row.Data) {
          row.Data = formatExcelDate(Number(row.Data));
        }

        // Corrigir a URL
        if (row.Link) {
          row.Link = formatUrl(row.Link); // Aplica a correção de barras duplas na URL
        }

        return row;
      });

    console.log("Resultados da busca:", results);

    // Verificar se não há resultados
    if (results.length === 0) {
      return NextResponse.json(
        { error: "Nenhum resultado encontrado." },
        { status: 404 }
      );
    }

    // Paginando os resultados
    const paginatedResults = results.slice(0, parsedLimit);

    return NextResponse.json({ results: paginatedResults });
  } catch (error) {
    console.error("Erro inesperado na API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
