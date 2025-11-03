import { readContentFile } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer';

export default function CraftsPage() {
  const rawContent = readContentFile('crafts/index.md');
  const htmlContent = renderMarkdown(rawContent);

  return (
    <main className="max-w-2xl mx-auto px-4 pb-8">
      <MarkdownRenderer content={htmlContent} />
    </main>
  );
}

