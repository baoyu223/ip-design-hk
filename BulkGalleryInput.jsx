import React, { useRef, useState } from "react";
import { PatchEvent, set, useClient } from "sanity";

const makeKey = () => Math.random().toString(36).slice(2, 12);

export default function BulkGalleryInput(props) {
  const { renderDefault, value = [], onChange } = props;
  const client = useClient({ apiVersion: "2024-01-01" });
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const onFiles = async (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/"));
    event.target.value = "";
    if (!files.length) return;

    setUploading(true);
    setMessage(`正在上傳 ${files.length} 張圖片...`);

    try {
      const uploaded = [];
      for (const file of files) {
        const asset = await client.assets.upload("image", file, { filename: file.name });
        uploaded.push({
          _key: makeKey(),
          _type: "image",
          asset: {
            _type: "reference",
            _ref: asset._id,
          },
        });
      }

      onChange(PatchEvent.from(set([...(value || []), ...uploaded])));
      setMessage(`已加入 ${uploaded.length} 張圖片，可在下方拖動排序或補充圖片說明。`);
    } catch (error) {
      console.error(error);
      setMessage("圖片上傳失敗，請檢查網絡後再試。");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: 14,
        border: "1px solid #cad1dc",
        borderRadius: 8,
        background: "#f7f9fc",
      }}>
        <div style={{ display: "grid", gap: 5 }}>
          <strong style={{ fontSize: 14 }}>批量上傳細節圖</strong>
          <span style={{ fontSize: 13, color: "#5d6675" }}>一次選擇多張圖片，上傳後會自動追加到下方列表。</span>
          {message && <span style={{ fontSize: 13, color: "#2f5fbd" }}>{message}</span>}
        </div>
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          style={{
            border: 0,
            borderRadius: 6,
            padding: "9px 13px",
            background: uploading ? "#9aa6b7" : "#2276fc",
            color: "#fff",
            cursor: uploading ? "default" : "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {uploading ? "上傳中..." : "選擇多張圖片"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={onFiles}
          style={{ display: "none" }}
        />
      </div>
      {renderDefault(props)}
    </div>
  );
}
