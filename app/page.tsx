import { MarkdownRenderer } from "@/components/markdown/markdown-renderer";
import { readContentFile, replaceTemplateVariables } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { getCurrentAge, getTokyoTime } from "@/lib/time";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  const content = renderMarkdown(
    replaceTemplateVariables(readContentFile("index.md"), {
      age: getCurrentAge().toString(),
      time: `<span data-tokyo-time>${getTokyoTime()}</span>`,
    })
  );

  return (
    <main className="max-w-2xl mx-auto px-4 pb-8">
      <Suspense fallback={<div className="animate-pulse h-64" />}>
        <MarkdownRenderer content={content} />
      </Suspense>
    </main>
  );
}
