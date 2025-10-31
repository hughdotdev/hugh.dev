import MarkdownIt from 'markdown-it';
import { MARKDOWN_CONFIG, MAGIC_LINK_CLASS, MAGIC_LINK_PATTERN } from './constants';

const md = new MarkdownIt(MARKDOWN_CONFIG);

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const hrefIndex = token.attrIndex('href');
  
  if (hrefIndex >= 0) {
    const href = token.attrs![hrefIndex][1];
    const nextToken = tokens[idx + 1];
    const isMagicLink = nextToken?.content?.match(MAGIC_LINK_PATTERN);
    
    if (isMagicLink) {
      token.attrSet('class', MAGIC_LINK_CLASS);
    }
    
    if (href.startsWith('http')) {
      token.attrSet('target', '_blank');
      token.attrSet('rel', 'noopener noreferrer');
    }
  }
  
  return self.renderToken(tokens, idx, options);
};

export function renderMarkdown(content: string): string {
  return md.render(content);
}

