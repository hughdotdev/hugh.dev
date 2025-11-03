import { readContentFile } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer';

export function PostsEmpty() {
  const content = renderMarkdown(readContentFile('posts/index.md'));
  return <MarkdownRenderer content={content} />;
}

