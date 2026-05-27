import React from "react";
import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { PatchEvent, set, unset, useClient } from "sanity";

export function VideoFileInput(props) {
  const client = useClient({ apiVersion: "2024-01-01" });
  const inputRef = React.useRef(null);
  const [uploading, setUploading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const uploadFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setMessage("請選擇 MP4 / MOV / WebM 視頻文件。");
      return;
    }

    setUploading(true);
    setMessage(`正在上傳：${file.name}`);
    try {
      const asset = await client.assets.upload("file", file, {
        filename: file.name,
        contentType: file.type,
      });
      props.onChange(PatchEvent.from([
        set({
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        }),
      ]));
      setMessage(`已上傳：${file.name}`);
    } catch (error) {
      setMessage("視頻上傳未成功，請壓縮後再試，或換 MP4 格式。");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const hasFile = Boolean(props.value?.asset?._ref);

  return (
    <Stack space={3}>
      <Card padding={3} radius={2} tone="primary" border>
        <Flex align="center" justify="space-between" gap={3}>
          <Stack space={2}>
            <Text size={1} weight="semibold">自定義視頻上傳</Text>
            <Text size={1} muted>避開 Sanity 原生上傳進度錯誤；建議使用 MP4，文件越小越穩定。</Text>
            {hasFile && <Text size={1}>已選擇視頻文件，可重新上傳替換。</Text>}
            {message && <Text size={1}>{message}</Text>}
          </Stack>
          <Flex gap={2}>
            {hasFile && (
              <Button
                text="清除"
                tone="critical"
                mode="ghost"
                disabled={uploading}
                onClick={() => props.onChange(PatchEvent.from([unset()]))}
              />
            )}
            <Button
              text={uploading ? "上傳中..." : hasFile ? "替換視頻" : "選擇視頻"}
              tone="primary"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            />
          </Flex>
        </Flex>
        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/quicktime,video/webm"
          hidden
          onChange={(event) => uploadFile(event.target.files?.[0])}
        />
      </Card>
    </Stack>
  );
}
