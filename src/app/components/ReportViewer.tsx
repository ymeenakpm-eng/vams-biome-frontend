import React, { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
}

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

export const ReportViewer: React.FC<ReportViewerProps> = ({
  sampleId,
  baseUrl = "http://localhost:8000",
}) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${baseUrl}/results/${sampleId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as ApiResponse;
        setData(json);
      } catch (e: any) {
        setError(e.message || "Failed to load results");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [sampleId, baseUrl]);

  const handleDownloadPdf = async () => {
    if (!reportRef.current) return;
    const element = reportRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`${sampleId}_gut_report.pdf`);
  };

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
        }}
      >
        <header style={{ borderBottom: "2px solid #333", marginBottom: 16 }}>
          <h1 style={{ margin: 0 }}>Gut Microbiome Report</h1>
          <p style={{ margin: "4px 0" }}>Sample ID: {results.sample_id}</p>
          <p style={{ margin: "4px 0" }}>Body site: {results.body_site}</p>
          <p style={{ margin: "4px 0" }}>
            Overall assessment:{" "}
            <span style={badgeStyle(results.overall_assessment)}>
              {results.overall_assessment}
            </span>
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
};