import React from "react";
import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { PatchEvent, insert, setIfMissing, useClient } from "sanity";

const makeKey = () => Math.random().toString(36).slice(2, 12);

const naturalSort = (a, b) => (
  a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" })
);

export function BulkGalleryInput(props) {
  const client = useClient({ apiVersion: "2024-01-01" });
  const inputRef = React.useRef(null);
  const [uploading, setUploading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const uploadFiles = async (files) => {
    const images = Array.from(files || [])
      .filter((file) => file.type.startsWith("image/"))
      .sort(naturalSort);
    if (!images.length) {
      setMessage("請選擇圖片文件。");
      return;
    }

    setUploading(true);
    setMessage(`正在上傳 ${images.length} 張圖片...`);
    try {
      const items = [];
      for (const file of images) {
        const asset = await client.assets.upload("image", file, { filename: file.name });
        items.push({
          _type: "image",
          _key: makeKey(),
          asset: { _type: "reference", _ref: asset._id },
          caption: file.name.replace(/\.[^.]+$/, ""),
        });
      }
      props.onChange(PatchEvent.from([setIfMissing([]), insert(items, "after", [-1])]));
      setMessage(`已按文件名順序加入 ${items.length} 張圖片，例如 001 → 002 → 010。下方每張圖左側的拖動手柄可手動調整先後。`);
    } catch (error) {
      setMessage("批量上傳未成功，請稍後再試或分批上傳。");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <Stack space={3}>
      <Card padding={3} radius={2} tone="primary" border>
        <Flex align="center" justify="space-between" gap={3}>
          <Stack space={2}>
            <Text size={1} weight="semibold">批量上傳細節圖</Text>
            <Text size={1} muted>可一次選擇多張 PNG / JPG / WebP；系統會按文件名自然排序，例如 001、002、003、010。</Text>
            <Text size={1} muted>上傳後可在下方列表用左側拖動手柄手動調整圖片先後。</Text>
            {message && <Text size={1}>{message}</Text>}
          </Stack>
          <Button
            text={uploading ? "上傳中..." : "一次選擇多張圖片"}
            tone="primary"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
          />
        </Flex>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(event) => uploadFiles(event.target.files)}
        />
      </Card>
      {props.renderDefault(props)}
    </Stack>
  );
}
