"use client";

import { useState, useEffect } from "react";
import uploadFile from "@/app/(backend)/libs/uploadFile";
import deleteFile from "@/app/(backend)/libs/deleteFile";

const labelCategories = [
  "Fintech", "Technology", "Blockchain", "AI", "Customer Service", "Security",
  "Sustainability", "Innovation", "Digital Transformation", "Startups", "Healthcare",
  "Art", "Ethics", "5G", "IoT", "Quantum", "Energy", "Voice", "Cloud", "Edge",
  "Smart City", "Education", "Wearable", "Automotive", "Metaverse", "Policy"
];

export default function ArticleUploader() {
  // Form states
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

  // Article list state
  const [articles, setArticles] = useState<any[]>([]); // articles is used to get the list of articles from the backend and return in the List 
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch articles on mount
  useEffect(() => {fetchArticles()}, []);

  const fetchArticles = async () => {
    const res = await fetch("/api/v1/article");
    if (!res.ok) {
      console.error("Failed to fetch articles", res.status, res.statusText);
      setArticles([]);
      return;
    }

    const text = await res.text();
    const data = text ? JSON.parse(text) : [];
    setArticles(data);
};

  // handle UPLOAD PDF
  const handlePDFUpload = async () => {
    if (!pdfFile || !pdfFile.type.startsWith("application/pdf")) {
      alert("Please select a valid PDF file.");
      return;
    }
    setIsUploadingPDF(true);
    try {
      // If editing an existing article, delete the old PDF
      if (editingId && contentUrl) {
      await deleteFile(getS3KeyFromUrl(contentUrl));
    }
      const url = await uploadFile(pdfFile, "article/products/");
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
      // If editing an existing article, delete the old image
      if (editingId && illustrationUrl) {
      await deleteFile(getS3KeyFromUrl(illustrationUrl));
    }
      const url = await uploadFile(imageFile,"article/graphics/");
      setIllustrationUrl(url);
    } catch (err) {
      alert("Failed to upload image");
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Handle Submit (Create or Update)
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
      let res; 
      if (editingId) {
        // Call the PUT API to update
        res = await fetch(`/api/v1/article/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      } else {
        // Call the POST API to create
        res = await fetch("/api/v1/article", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      }
      if (!res.ok) throw new Error("Failed to save article");
      alert(editingId ? "✅ Article updated!" : "✅ Article created!");
      fetchArticles();
      resetForm();
    } catch (err) {
      alert("❌ Failed to submit article");
      console.error(err);
    }
  };

 // get key from url
function getS3KeyFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const path = u.pathname.startsWith("/") ? u.pathname.slice(1) : u.pathname;
    return decodeURIComponent(path);
  } catch (err) {
    console.error("Invalid URL:", err);
    return "";
  }
}

  const handleDelete = async (articleId: string, contentUrl?: string, illustrationUrl?: string) => {
  if (!confirm("Are you sure you want to delete this article?")) return;

  try {
    // Xoá file trên S3 nếu có
    if (contentUrl) {
      await deleteFile(getS3KeyFromUrl(contentUrl));
    }
    if (illustrationUrl) {
      await deleteFile(getS3KeyFromUrl(illustrationUrl));
    }
    // Xoá bài viết trong database
    const res = await fetch(`/api/v1/article/${articleId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete article");
    // Nếu xoá thành công → cập nhật state để bỏ bài khỏi list
    setArticles(prev => prev.filter(article => article._id !== articleId));
    alert("🗑️ Deleted!");
  } catch (err) {
    console.error(err);
    alert("❌ Failed to delete");
  }
};


  // Edit article
  const handleEdit = (article: any) => {
    setEditingId(article._id); // Set the Editting ID to let handleSubmit know it's an update or create new article
    setTitle(article.title);
    setSummary(article.summary);
    setAuthors(article.authors);
    setAuthorInput(article.authors.join(", "));
    setLabels(article.labels);
    setPublicationDate(article.publicationDate?.slice(0,10) || "");
    setContentUrl(article.content_url);
    setIllustrationUrl(article.illustration_url);

  };

  // Reset form
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setSummary("");
    setAuthors([]);
    setAuthorInput("");
    setLabels([]);
    setPublicationDate("");
    setPdfFile(null);
    setContentUrl(null);
    setImageFile(null);
    setIllustrationUrl(null);
  };

return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>{editingId ? "Edit Article" : "Create Article"}</h2>
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
          <iframe src={contentUrl} width="100%" height="200px" title="PDF Preview"></iframe>
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
          <img src={illustrationUrl} alt="Preview" style={{ maxWidth: "100%", maxHeight: "200px" }} />
        </div>
      )}

      <button onClick={handleSubmit} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        {editingId ? "Update Article" : "Submit Article"}
      </button>
      {/* Article List */}
      <h2 style={{ marginTop: "2rem" }}>Article List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {articles.map(article => (
          <li key={article._id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "1rem" }}>
            <strong>{article.title}</strong>
            <div>{article.summary}</div>
            <div>Authors: {article.authors?.join(", ")}</div>
            <div>Labels: {article.labels?.join(", ")}</div>
            <div>Publication: {article.publicationDate?.slice(0,10)}</div>
            <button onClick={() => handleEdit(article)} style={{ marginRight: "1rem" }}>Edit</button>
            <button
             onClick={() => {
               handleDelete(article._id, article.content_url, article.illustration_url);
              }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}