"use client";
import type { Spippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { updateSnippet } from "@/app/actions";
import { useState } from "react";

type SnippetEditorProps = {
  snippet: Spippet;
};

export default function SnippetEditor({ snippet }: SnippetEditorProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorDidMount = (value: string = "") => {
    setCode(value);
  };
  const handleSubmit = () => {
    updateSnippet(snippet.id, code);
  };

  return (
    <>
      <Editor
        height="60vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorDidMount}
      />
      <button className="border p2 border-rounded" onClick={handleSubmit}>
        Save
      </button>
    </>
  );
}
