"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeEditorProps {
  fileName: string;
  code: string;
  language: string;
}

export default function CodeEditor({
  fileName,
  code,
  language,
}: CodeEditorProps) {
  return (
    <Box
      sx={{
        bgcolor: "#1E1E1E",
        p: 2,
        borderRadius: 1,
        width: "100%",
        overflow: "auto",
      }}>
      <Typography variant="h6" sx={{ color: "#D4D4D4", mb: 2 }}>
        {fileName}
      </Typography>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          fontSize: "1.2rem",
          lineHeight: "1.5",
          margin: 0,
          padding: "1em",
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
        }}
        lineNumberStyle={{
          minWidth: "3em",
          paddingRight: "1em",
          textAlign: "right",
          userSelect: "none",
        }}
        codeTagProps={{
          style: {
            fontSize: "1.2rem",
            lineHeight: "1.8",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          },
        }}>
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
