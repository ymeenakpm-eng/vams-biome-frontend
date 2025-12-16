import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import jsPDF from "jspdf";

const categoryColor = (cat: string | null | undefined): string => {
  if (!cat) return "#555";
  const c = cat.toLowerCase();
  if (c.includes("high") || c.includes("poor") || c.includes("pathogen")) return "#d9534f";
  if (c.includes("low") || c.includes("borderline")) return "#f0ad4e";
  if (c.includes("normal") || c.includes("healthy") || c.includes("good")) return "#5cb85c";
  return "#555";
};

const badgeStyle = (text: string) => ({
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: 4,
  backgroundColor: categoryColor(text),
  color: "#fff",
  fontSize: 12,
});

type TaxonScore = {
  taxon_name: string;
  value: number;
  percentile: number | null;
  category: string;
};

type DysbiosisIndex = {
  shannon_diversity: number | null;
  dysbiosis_index: string;
  diversity_category: string;
};

type FbRatio = {
  fb_ratio: number;
  fb_category: string;
  fb_grade: string;
  firmicutes_abundance: number;
  bacteroidetes_abundance: number;
};

type ScfaTaxonContribution = {
  abundance: number;
  weight: number;
  contribution: number;
};

type ScfaIndex = {
  scfa_index: number;
  scfa_category: string;
  scfa_grade: string;
  total_scfa_abundance: number;
  taxa_contributions: Record<string, ScfaTaxonContribution>;
};

type PathogenBurden = {
  total_pathogen_abundance: number;
  burden_category: string;
  details: Record<string, { abundance: number; category: string }>;
};

type Indices = {
  dysbiosis_index: DysbiosisIndex;
  fb_ratio: FbRatio;
  scfa_index: ScfaIndex;
  pathogen_burden: PathogenBurden;
};

type Metadata = {
  reference_dataset: string;
  taxa_scored: number;
  beneficial_taxa_count: number;
  pathogenic_taxa_count: number;
  alpha_diversity_provided: boolean;
};

type DispatcherMetadata = {
  body_site: string;
  scoring_function: string;
  reference_file: string;
  feature_table: string;
  alpha_diversity_provided: boolean;
};

type ResultsPayload = {
  sample_id: string;
  body_site: string;
  taxa_scores: TaxonScore[];
  indices: Indices;
  risk_flags: string[];
  CST: string | null;
  overall_assessment: string;
  metadata: Metadata;
  dispatcher_metadata?: DispatcherMetadata;
};

type ApiResponse = {
  sample_id: string;
  results: ResultsPayload;
};

interface ReportViewerProps {
  sampleId: string;
  baseUrl?: string;
  onLoadingChange?: (loading: boolean) => void;
  refreshKey?: number;
}

export type ReportViewerHandle = {
  downloadPdf: () => Promise<void>;
};

const REPORT_COVER_SRC = "/report-assets/main.png";
const VAMS_BIOME_LOGO_SRC = "/images/logo-vams-biome-v2.png.png";

export const ReportViewer = React.forwardRef<ReportViewerHandle, ReportViewerProps>(
  ({ sampleId, baseUrl = "http://localhost:8000", onLoadingChange, refreshKey }, ref) => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const reportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        if (onLoadingChange) onLoadingChange(true);
        setError(null);
        try {
          const res = await fetch(`${baseUrl}/results/${sampleId}`);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const raw = (await res.json()) as any;

          const normalize = (payload: any): ApiResponse | null => {
            if (payload && typeof payload === "object" && payload.results && typeof payload.results === "object") {
              return payload as ApiResponse;
            }

            const scoring =
              payload && typeof payload === "object" && payload.scoring_result && typeof payload.scoring_result === "object"
                ? payload.scoring_result
                : null;

            const resultsPayload = scoring ?? (payload && typeof payload === "object" ? payload : null);
            if (!resultsPayload || typeof resultsPayload !== "object") return null;

            if (!resultsPayload.indices || !resultsPayload.taxa_scores) return null;

            const sid = String(payload?.sample_id ?? resultsPayload.sample_id ?? sampleId);
            return {
              sample_id: sid,
              results: {
                ...(resultsPayload as any),
                sample_id: String(resultsPayload.sample_id ?? sid),
                body_site: String(resultsPayload.body_site ?? "microbiome"),
                taxa_scores: Array.isArray(resultsPayload.taxa_scores) ? resultsPayload.taxa_scores : [],
                risk_flags: Array.isArray(resultsPayload.risk_flags) ? resultsPayload.risk_flags : [],
              } as ResultsPayload,
            };
          };

          const normalized = normalize(raw);
          if (!normalized?.results) throw new Error("No results returned");
          setData(normalized);
        } catch (e: any) {
          setError(e.message || "Failed to load results");
        } finally {
          setLoading(false);
          if (onLoadingChange) onLoadingChange(false);
        }
      };
      fetchData();
    }, [sampleId, baseUrl, onLoadingChange, refreshKey]);

    const handleDownloadPdf = async () => {
      if (!data?.results) return;
      const results = data.results;

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 12;
      const HEADER_TOP_Y = 6;
      const HEADER_HEIGHT = 24;
      const HEADER_BOTTOM_Y = HEADER_TOP_Y + HEADER_HEIGHT;
      const CONTENT_TOP_Y = HEADER_BOTTOM_Y + 6;
      const CONTENT_BOTTOM_Y = pageHeight - 16;

      let y = CONTENT_TOP_Y;

      const theme = {
        text: "#0f172a",
        subtext: "#334155",
        border: "#cbd5e1",
        muted: "#64748b",
      };

      const arrayBufferToBase64 = (buf: ArrayBuffer) => {
        let binary = "";
        const bytes = new Uint8Array(buf);
        const chunk = 0x8000;
        for (let i = 0; i < bytes.length; i += chunk) {
          binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
        }
        return btoa(binary);
      };

      const loadImageDataUrl = async (srcUrl: string) => {
        const res = await fetch(srcUrl);
        if (!res.ok) return null;
        const buf = await res.arrayBuffer();
        const b64 = arrayBufferToBase64(buf);
        const lower = srcUrl.toLowerCase();
        const ext = lower.endsWith(".png") ? "png" : lower.endsWith(".jpg") || lower.endsWith(".jpeg") ? "jpeg" : "png";
        const fmt: "PNG" | "JPEG" = ext === "png" ? "PNG" : "JPEG";
        const mime = ext === "png" ? "image/png" : "image/jpeg";
        return { dataUrl: `data:${mime};base64,${b64}`, fmt };
      };

      const headerLogo = await loadImageDataUrl(VAMS_BIOME_LOGO_SRC);
      const coverImg = await loadImageDataUrl(REPORT_COVER_SRC);
      const heroImg = await loadImageDataUrl("/report-assets/hero.png");

      const ensureSpace = (needed: number) => {
        if (y + needed <= CONTENT_BOTTOM_Y) return;
        pdf.addPage();
        drawPageHeader();
        y = CONTENT_TOP_Y;
      };

      const safeText = (v: unknown) => {
        if (v == null) return "N/A";
        const s = String(v).trim();
        return s ? s : "N/A";
      };

      const drawKeyValue = (label: string, value: string, x: number, baseY: number) => {
        pdf.setFont("helvetica", "bold");
        pdf.text(`${label}:`, x, baseY);
        const labelW = pdf.getTextWidth(`${label}: `);
        pdf.setFont("helvetica", "normal");
        pdf.text(value, x + labelW, baseY);
      };

      const drawPageHeader = () => {
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, HEADER_BOTTOM_Y + 0.5, "F");

        if (headerLogo) {
          (pdf as any).addImage(headerLogo.dataUrl, headerLogo.fmt, margin, HEADER_TOP_Y + 2, 22, 10);
        }

        pdf.setTextColor(theme.text);
        pdf.text("VAMS Biome Microbiome Report", margin, HEADER_TOP_Y + 4);
        pdf.text(`Sample ID: ${safeText(results.sample_id)}`, margin, HEADER_TOP_Y + 10);
        pdf.text(`Body site: ${safeText(results.body_site)}`, pageWidth / 2, HEADER_TOP_Y + 10);
        pdf.text(`Overall assessment: ${safeText(results.overall_assessment)}`, pageWidth / 2, HEADER_TOP_Y + 16);

        pdf.setDrawColor(theme.border);
        pdf.setLineWidth(0.35);
        pdf.line(margin, HEADER_BOTTOM_Y, pageWidth - margin, HEADER_BOTTOM_Y);
      };

      const drawCover = () => {
        if (!coverImg) return;
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, pageHeight, "F");

        const props =
          typeof (pdf as any).getImageProperties === "function" ? (pdf as any).getImageProperties(coverImg.dataUrl) : null;
        const iw = Number(props?.width);
        const ih = Number(props?.height);
        if (!Number.isFinite(iw) || !Number.isFinite(ih) || iw <= 0 || ih <= 0) {
          (pdf as any).addImage(coverImg.dataUrl, coverImg.fmt, 0, 0, pageWidth, pageHeight);
          return;
        }

        const scale = Math.min(pageWidth / iw, pageHeight / ih);
        const drawW = iw * scale;
        const drawH = ih * scale;
        const drawX = (pageWidth - drawW) / 2;
        const drawY = (pageHeight - drawH) / 2;
        (pdf as any).addImage(coverImg.dataUrl, coverImg.fmt, drawX, drawY, drawW, drawH);
      };

      const startContentPage = () => {
        pdf.addPage();
        drawPageHeader();
        y = CONTENT_TOP_Y;
      };

      const drawSectionTitle = (title: string) => {
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12.5);
        pdf.setTextColor(theme.text);
        pdf.text(title, margin, y);
        y += 6;
      };

      const drawParagraph = (text: string, fontSize = 10.2, lineH = 5) => {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(fontSize);
        pdf.setTextColor(theme.subtext);
        const lines = pdf.splitTextToSize(text, pageWidth - margin * 2);
        pdf.text(lines, margin, y);
        y += lines.length * lineH;
      };

      const drawImageContain = (
        img: { dataUrl: string; fmt: "PNG" | "JPEG" },
        x: number,
        y: number,
        w: number,
        h: number
      ) => {
        const props =
          typeof (pdf as any).getImageProperties === "function" ? (pdf as any).getImageProperties(img.dataUrl) : null;
        const iw = Number(props?.width);
        const ih = Number(props?.height);
        if (!Number.isFinite(iw) || !Number.isFinite(ih) || iw <= 0 || ih <= 0) {
          (pdf as any).addImage(img.dataUrl, img.fmt, x, y, w, h);
          return;
        }
        const scale = Math.min(w / iw, h / ih);
        const drawW = iw * scale;
        const drawH = ih * scale;
        const drawX = x + (w - drawW) / 2;
        const drawY = y + (h - drawH) / 2;
        (pdf as any).addImage(img.dataUrl, img.fmt, drawX, drawY, drawW, drawH);
      };

      const ensureSpaceWith = (needed: number, onNewPage: () => void) => {
        if (y + needed <= CONTENT_BOTTOM_Y) return;
        pdf.addPage();
        drawPageHeader();
        y = CONTENT_TOP_Y;
        onNewPage();
      };

      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(theme.text);

      drawCover();

      const indices = results.indices;
      const flags = Array.isArray(results.risk_flags) ? results.risk_flags : [];
      const taxa = Array.isArray(results.taxa_scores) ? results.taxa_scores : [];

      startContentPage();

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.setTextColor(theme.text);
      pdf.text("Microbiome report", margin, y);
      y += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10.5);
      pdf.setTextColor(theme.subtext);
      pdf.text(`Sample ID: ${safeText(results.sample_id)}`, margin, y);
      pdf.text(`Body site: ${safeText(results.body_site)}`, pageWidth / 2, y);
      y += 8;

      if (heroImg) {
        const heroH = 34;
        pdf.setDrawColor(theme.border);
        pdf.rect(margin, y, pageWidth - margin * 2, heroH, "S");
        drawImageContain(heroImg, margin + 1, y + 1, pageWidth - margin * 2 - 2, heroH - 2);
        y += heroH + 8;
      }

      drawSectionTitle("Executive summary");
      drawParagraph(
        `Overall assessment: ${safeText(results.overall_assessment)}. Community type (CST): ${safeText(results.CST)}. ` +
          `These outputs are wellness-oriented and should be interpreted alongside clinical context.`
      );
      y += 2;
      drawSectionTitle("Risk flags");
      drawParagraph(flags.length ? flags.join(", ") : "No major risk flags detected.");

      startContentPage();
      drawSectionTitle("Indices overview");
      drawParagraph("Index values are compared against a reference cohort.");
      y += 2;

      const idxTableX = margin;
      const idxColW = [70, 45, pageWidth - margin * 2 - (70 + 45)];
      const rowH = 6.6;
      const idxTableW = idxColW.reduce((a, b) => a + b, 0);
      const drawIdxRow = (cells: string[], y0: number, bold: boolean) => {
        pdf.setFont("helvetica", bold ? "bold" : "normal");
        pdf.setFontSize(9.6);
        pdf.setTextColor(bold ? theme.text : theme.subtext);
        let x = idxTableX;
        for (let i = 0; i < cells.length; i += 1) {
          pdf.text(cells[i] ?? "", x + 1.5, y0);
          x += idxColW[i] ?? 0;
        }
      };

      pdf.setDrawColor(theme.border);
      pdf.rect(idxTableX, y, idxTableW, rowH, "S");
      drawIdxRow(["Index", "Value", "Category"], y + 4.6, true);
      y += rowH;

      const idxRows: Array<[string, string, string]> = [
        ["Dysbiosis", safeText(indices?.dysbiosis_index?.dysbiosis_index), safeText(indices?.dysbiosis_index?.diversity_category)],
        ["Shannon", safeText(indices?.dysbiosis_index?.shannon_diversity), safeText(indices?.dysbiosis_index?.diversity_category)],
        ["F/B ratio", safeText(indices?.fb_ratio?.fb_ratio), safeText(indices?.fb_ratio?.fb_category)],
        ["SCFA index", safeText(indices?.scfa_index?.scfa_index), safeText(indices?.scfa_index?.scfa_category)],
        [
          "Pathogen burden",
          safeText(indices?.pathogen_burden?.total_pathogen_abundance),
          safeText(indices?.pathogen_burden?.burden_category),
        ],
      ];

      for (const r of idxRows) {
        ensureSpace(rowH + 2);
        pdf.setDrawColor(theme.border);
        pdf.rect(idxTableX, y, idxTableW, rowH, "S");
        drawIdxRow(r, y + 4.6, false);
        y += rowH;
      }

      startContentPage();
      drawSectionTitle("Index details");
      drawParagraph(`Dysbiosis: ${safeText(indices?.dysbiosis_index?.dysbiosis_index)}.`);
      drawParagraph(`Shannon diversity: ${safeText(indices?.dysbiosis_index?.shannon_diversity)}.`);
      y += 2;
      drawParagraph(
        `Firmicutes/Bacteroidetes ratio: ${safeText(indices?.fb_ratio?.fb_ratio)} (${safeText(indices?.fb_ratio?.fb_category)}).`
      );
      y += 2;
      drawParagraph(`SCFA index: ${safeText(indices?.scfa_index?.scfa_index)} (${safeText(indices?.scfa_index?.scfa_category)}).`);
      y += 4;

      const contrib = indices?.scfa_index?.taxa_contributions;
      if (contrib && typeof contrib === "object") {
        const top = Object.entries(contrib)
          .map(([k, v]) => ({ name: k, contribution: (v as any)?.contribution, abundance: (v as any)?.abundance }))
          .sort((a, b) => Number(b.contribution ?? 0) - Number(a.contribution ?? 0))
          .slice(0, 12);

        if (top.length) {
          drawSectionTitle("Top SCFA contributor taxa");
          const cColW = [95, 35, pageWidth - margin * 2 - (95 + 35)];
          const cW = cColW.reduce((a, b) => a + b, 0);
          const drawCRow = (cells: string[], y0: number, bold: boolean) => {
            pdf.setFont("helvetica", bold ? "bold" : "normal");
            pdf.setFontSize(9.6);
            pdf.setTextColor(bold ? theme.text : theme.subtext);
            let x = margin;
            for (let i = 0; i < cells.length; i += 1) {
              pdf.text(cells[i] ?? "", x + 1.5, y0);
              x += cColW[i] ?? 0;
            }
          };

          pdf.setDrawColor(theme.border);
          pdf.rect(margin, y, cW, rowH, "S");
          drawCRow(["Taxon", "Contribution", "Abundance"], y + 4.6, true);
          y += rowH;

          for (const t of top) {
            ensureSpace(rowH + 2);
            pdf.setDrawColor(theme.border);
            pdf.rect(margin, y, cW, rowH, "S");
            drawCRow([safeText(t.name), safeText(t.contribution), safeText(t.abundance)], y + 4.6, false);
            y += rowH;
          }
        }
      }

      startContentPage();
      drawSectionTitle("Taxa scores");
      drawParagraph(
        "The following table lists taxa scores returned by the analysis engine. Percentiles represent relative positioning vs the reference dataset."
      );
      y += 2;

      const tColW = [80, 22, 28, pageWidth - margin * 2 - (80 + 22 + 28)];
      const tW = tColW.reduce((a, b) => a + b, 0);
      const drawTaxaHeader = () => {
        pdf.setDrawColor(theme.border);
        pdf.rect(margin, y, tW, rowH, "S");
        drawTaxaRow(["Taxon", "Value", "Percentile", "Category"], y + 4.6, true);
        y += rowH;
      };
      const drawTaxaRow = (cells: string[], y0: number, bold: boolean) => {
        pdf.setFont("helvetica", bold ? "bold" : "normal");
        pdf.setFontSize(9.6);
        pdf.setTextColor(bold ? theme.text : theme.subtext);
        let x = margin;
        for (let i = 0; i < cells.length; i += 1) {
          pdf.text(cells[i] ?? "", x + 1.5, y0);
          x += tColW[i] ?? 0;
        }
      };

      drawTaxaHeader();
      for (const t of taxa) {
        ensureSpaceWith(rowH + 2, drawTaxaHeader);
        pdf.setDrawColor(theme.border);
        pdf.rect(margin, y, tW, rowH, "S");
        drawTaxaRow(
          [safeText(t.taxon_name), safeText(t.value), t.percentile == null ? "N/A" : String(t.percentile), safeText(t.category)],
          y + 4.6,
          false
        );
        y += rowH;
      }

      startContentPage();
      drawSectionTitle("Pathogen burden details");
      drawParagraph(
        "This section summarizes the reported pathogen burden. Detection patterns are not diagnostic and should be interpreted with clinical correlation."
      );
      y += 3;
      drawParagraph(`Total pathogen abundance: ${safeText(indices?.pathogen_burden?.total_pathogen_abundance)}.`);
      drawParagraph(`Category: ${safeText(indices?.pathogen_burden?.burden_category)}.`);
      y += 2;

      const pbDetails = indices?.pathogen_burden?.details;
      if (pbDetails && typeof pbDetails === "object") {
        const pColW = [95, 35, pageWidth - margin * 2 - (95 + 35)];
        const pW = pColW.reduce((a, b) => a + b, 0);
        const drawPRow = (cells: string[], y0: number, bold: boolean) => {
          pdf.setFont("helvetica", bold ? "bold" : "normal");
          pdf.setFontSize(9.6);
          pdf.setTextColor(bold ? theme.text : theme.subtext);
          let x = margin;
          for (let i = 0; i < cells.length; i += 1) {
            pdf.text(cells[i] ?? "", x + 1.5, y0);
            x += pColW[i] ?? 0;
          }
        };

        const drawPHeader = () => {
          pdf.setDrawColor(theme.border);
          pdf.rect(margin, y, pW, rowH, "S");
          drawPRow(["Taxon", "Abundance", "Category"], y + 4.6, true);
          y += rowH;
        };

        drawPHeader();
        for (const [name, d] of Object.entries(pbDetails)) {
          ensureSpaceWith(rowH + 2, drawPHeader);
          pdf.setDrawColor(theme.border);
          pdf.rect(margin, y, pW, rowH, "S");
          drawPRow([safeText(name), safeText((d as any)?.abundance), safeText((d as any)?.category)], y + 4.6, false);
          y += rowH;
        }
      } else {
        drawParagraph("No pathogen detail breakdown available.");
      }

      startContentPage();
      drawSectionTitle("Technical metadata");
      drawParagraph(`Reference dataset: ${safeText(results.metadata?.reference_dataset)}`);
      drawParagraph(
        `Taxa scored: ${safeText(results.metadata?.taxa_scored)} (beneficial: ${safeText(results.metadata?.beneficial_taxa_count)}, pathogenic: ${safeText(results.metadata?.pathogenic_taxa_count)})`
      );
      drawParagraph(`Alpha diversity provided: ${results.metadata?.alpha_diversity_provided ? "Yes" : "No"}`);
      y += 6;
      drawSectionTitle("Notes & interpretation");
      drawParagraph(
        "This report is designed for wellness and education. It does not diagnose, treat, cure, or prevent disease. If you have symptoms or concerns, consult a qualified healthcare professional."
      );

      const totalPages = (pdf as any).getNumberOfPages?.() ?? (pdf as any).internal?.getNumberOfPages?.() ?? 1;
      for (let page = 1; page <= totalPages; page += 1) {
        pdf.setPage(page);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(9);
        pdf.setTextColor(theme.muted);
        pdf.text(`${page} / ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: "right" } as any);
      }
      pdf.setPage(totalPages);

      pdf.save(`${sampleId}_microbiome_report.pdf`);
    };

    useImperativeHandle(ref, () => ({ downloadPdf: handleDownloadPdf }));

    if (loading) return <div>Loading report...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data.</div>;

    const { results } = data;
    const { indices } = results;

    return (
      <div className="text-sm text-slate-900">
        <div className="mb-3 flex justify-end">
          <button
            onClick={handleDownloadPdf}
            className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
          >
            Download PDF
          </button>
        </div>

        <div
          ref={reportRef}
          style={{
            padding: 24,
            maxWidth: 800,
            margin: "0 auto",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            flexWrap: "wrap",
          }}
        >
          <header style={{ borderBottom: "2px solid #333", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={VAMS_BIOME_LOGO_SRC} alt="VAMS Biome" style={{ height: 32, width: "auto" }} />
              <h1 style={{ margin: 0 }}>VAMS Biome Microbiome Report</h1>
            </div>
            <p style={{ margin: "6px 0 4px 0" }}>Sample ID: {results.sample_id}</p>
            <p style={{ margin: "4px 0" }}>Body site: {results.body_site}</p>
            <p style={{ margin: "4px 0" }}>
              Overall assessment:{" "}
              <span style={badgeStyle(results.overall_assessment)}>{results.overall_assessment}</span>
            </p>
          </header>

          <section
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 160 }}>
              <h3 style={{ marginBottom: 4 }}>Dysbiosis</h3>
              <p style={{ margin: 0 }}>
                Shannon: {indices.dysbiosis_index.shannon_diversity ?? "N/A"}
              </p>
              <p style={{ margin: 0 }}>
                Status:{" "}
                <span style={badgeStyle(indices.dysbiosis_index.dysbiosis_index)}>
                  {indices.dysbiosis_index.dysbiosis_index}
                </span>
              </p>
            </div>

            <div style={{ flex: 1, minWidth: 160 }}>
              <h3 style={{ marginBottom: 4 }}>F/B Ratio</h3>
              <p style={{ margin: 0 }}>Ratio: {indices.fb_ratio.fb_ratio}</p>
              <p style={{ margin: 0 }}>
                Category:{" "}
                <span style={badgeStyle(indices.fb_ratio.fb_category)}>
                  {indices.fb_ratio.fb_category}
                </span>
              </p>
            </div>

            <div style={{ flex: 1, minWidth: 160 }}>
              <h3 style={{ marginBottom: 4 }}>SCFA Index</h3>
              <p style={{ margin: 0 }}>Index: {indices.scfa_index.scfa_index}</p>
              <p style={{ margin: 0 }}>
                Category:{" "}
                <span style={badgeStyle(indices.scfa_index.scfa_category)}>
                  {indices.scfa_index.scfa_category}
                </span>
              </p>
            </div>

            <div style={{ flex: 1, minWidth: 160 }}>
              <h3 style={{ marginBottom: 4 }}>Pathogen Burden</h3>
              <p style={{ margin: 0 }}>
                Total: {indices.pathogen_burden.total_pathogen_abundance}
              </p>
              <p style={{ margin: 0 }}>
                Category:{" "}
                <span style={badgeStyle(indices.pathogen_burden.burden_category)}>
                  {indices.pathogen_burden.burden_category}
                </span>
              </p>
            </div>
          </section>

          <section style={{ marginBottom: 16 }}>
            <h2>Risk Flags</h2>
            {results.risk_flags.length === 0 ? (
              <p>No major risk flags detected.</p>
            ) : (
              <ul>
                {results.risk_flags.map((flag, i) => (
                  <li key={i}>{flag}</li>
                ))}
              </ul>
            )}
          </section>

          <section style={{ marginBottom: 16 }}>
            <h2>Key Taxa</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 4 }}>
                    Taxon
                  </th>
                  <th style={{ borderBottom: "1px solid #ccc", textAlign: "right", padding: 4 }}>
                    Value
                  </th>
                  <th style={{ borderBottom: "1px solid #ccc", textAlign: "right", padding: 4 }}>
                    Percentile
                  </th>
                  <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 4 }}>
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.taxa_scores.map((taxon) => (
                  <tr key={taxon.taxon_name}>
                    <td style={{ borderBottom: "1px solid #eee", padding: 4 }}>
                      {taxon.taxon_name}
                    </td>
                    <td style={{ borderBottom: "1px solid #eee", padding: 4, textAlign: "right" }}>
                      {taxon.value}
                    </td>
                    <td style={{ borderBottom: "1px solid #eee", padding: 4, textAlign: "right" }}>
                      {taxon.percentile != null ? taxon.percentile : "N/A"}
                    </td>
                    <td style={{ borderBottom: "1px solid #eee", padding: 4 }}>
                      <span style={badgeStyle(taxon.category)}>{taxon.category}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section style={{ fontSize: 12 }}>
            <h2>Technical Metadata</h2>
            <p>Reference dataset: {results.metadata.reference_dataset}</p>
            <p>
              Taxa scored: {results.metadata.taxa_scored} (beneficial:{" "}
              {results.metadata.beneficial_taxa_count}, pathogenic:{" "}
              {results.metadata.pathogenic_taxa_count})
            </p>
            <p>Alpha diversity provided: {results.metadata.alpha_diversity_provided ? "Yes" : "No"}</p>
          </section>
        </div>
      </div>
    );
  }
);