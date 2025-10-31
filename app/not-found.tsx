import { readContentFile } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer';

export default function NotFound() {
  const rawContent = readContentFile('404.md');
  const htmlContent = renderMarkdown(rawContent);

  return (
    <main className="max-w-2xl mx-auto px-4 pb-8">
      <MarkdownRenderer content={htmlContent} />
    </main>
  );
}

