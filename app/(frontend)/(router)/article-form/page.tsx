"use client";

import { useState } from "react";
import uploadFile from "@/app/(backend)/libs/uploadFile";

const labelCategories = [
  "Fintech", "Technology", "Blockchain", "AI", "Customer Service", "Security",
  "Sustainability", "Innovation", "Digital Transformation", "Startups", "Healthcare",
  "Art", "Ethics", "5G", "IoT", "Quantum", "Energy", "Voice", "Cloud", "Edge",
  "Smart City", "Education", "Wearable", "Automotive", "Metaverse", "Policy"
];

export default function ArticleUploader() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [authorInput, setAuthorInput] = useState("");
  const [labels, setLabels] = useState<string[]>([]);
  const [publicationDate, setPublicationDate] = useState("");

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [contentUrl, setContentUrl] = useState<string | null>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [illustrationUrl, setIllustrationUrl] = useState<string | null>(null);

  const [isUploadingPDF, setIsUploadingPDF] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);


  // handle UPLOAD PDF
  const handlePDFUpload = async () => {
    if (!pdfFile || !pdfFile.type.startsWith("application/pdf")) {
      alert("Please select a valid PDF file.");
      return;
    }
    setIsUploadingPDF(true);
    try {
      const url = await uploadFile(pdfFile, "products/");
      setContentUrl(url);
    } catch (err) {
      alert("Failed to upload PDF");
    } finally {
      setIsUploadingPDF(false);
    }
  };

//Handle UPLOAD IMAGE
  const handleImageUpload = async () => {
    if (!imageFile || !imageFile.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }
    setIsUploadingImage(true);
    try {
      const url = await uploadFile(imageFile,"graphics/");
      setIllustrationUrl(url);
    } catch (err) {
      alert("Failed to upload image");
    } finally {
      setIsUploadingImage(false);
    }
  };

// Handle Submit
  const handleSubmit = async () => {
    if (!title || !summary || !contentUrl || !illustrationUrl || !authors.length || !labels.length) {
      alert("Please fill all required fields.");
      return;
    }
    const body = {
      title,
      summary,
      content_url: contentUrl,
      illustration_url: illustrationUrl,
      authors,
      labels,
      publicationDate: publicationDate ? new Date(publicationDate) : new Date()
    };

    try {
      const res = await fetch("/api/v1/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) throw new Error("Failed to save article");
      alert("✅ Article created successfully!");
    } catch (err) {
      alert("❌ Failed to submit article");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required rows={3} />

      <input
        placeholder="Authors (comma separated)"
        value={authorInput}
        onChange={(e) => {
          setAuthorInput(e.target.value);
          setAuthors(e.target.value.split(",").map(a => a.trim()).filter(Boolean));
        }}
      />

      <label>Labels (hold Ctrl or Cmd to select multiple):</label>
      <select multiple value={labels} onChange={(e) => {
        const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setLabels(selected);
      }}>
        {labelCategories.map(label => (
          <option key={label} value={label}>{label}</option>
        ))}
      </select>

      <label>Publication Date:</label>
      <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />

      {/* Upload PDF */}
      <label>Upload Content PDF:</label>
      <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} />
      <button onClick={handlePDFUpload} disabled={isUploadingPDF || !pdfFile}>
        {isUploadingPDF ? "Uploading PDF..." : "Upload PDF"}
      </button>
      {contentUrl && (
        <div>
          <p>✅ Uploaded PDF:</p>
          <iframe src={contentUrl} width="100%" height="400px" title="PDF Preview"></iframe>
        </div>
      )}

      {/* Upload Image */}
      <label>Upload Illustration Image:</label>
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
      <button onClick={handleImageUpload} disabled={isUploadingImage || !imageFile}>
        {isUploadingImage ? "Uploading Image..." : "Upload Image"}
      </button>
      {illustrationUrl && (
        <div>
          <p>✅ Uploaded Image:</p>
          <img src={illustrationUrl} alt="Preview" style={{ maxWidth: "100%", maxHeight: "300px" }} />
        </div>
      )}

      <button onClick={handleSubmit} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Submit Article
      </button>
    </div>
  );
}
