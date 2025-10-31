'use client';

import { useEffect, useRef, useCallback } from 'react';
import { 
  parseMagicLinkContent, 
  getDefaultIconUrl, 
  extractDomain,
  createMagicLinkHtml,
  MAGIC_LINK_CLASS,
  TOOLTIP_CLASS,
  TOOLTIP_ELEMENT_CLASS
} from '@/lib/markdown';

interface MarkdownRendererProps {
  content: string;
}

function processMagicLinks(container: HTMLElement) {
  const magicLinks = container.querySelectorAll(`.${MAGIC_LINK_CLASS}`);
  
  magicLinks.forEach((link) => {
    const textContent = link.textContent || '';
    const { text, iconUrl } = parseMagicLinkContent(textContent);
    
    if (text) {
      const href = link.getAttribute('href') || '';
      const domain = extractDomain(href);
      const imageUrl = iconUrl || getDefaultIconUrl(href, domain);
      
      link.innerHTML = createMagicLinkHtml(imageUrl, text);
    }
  });
}

function processTooltipLinks(container: HTMLElement) {
  const normalLinks = container.querySelectorAll('a:not(.magic-link)');
  
  normalLinks.forEach((link) => {
    const title = link.getAttribute('title');
    
    if (title && (title.startsWith('http') || title.startsWith('/'))) {
      link.classList.add(TOOLTIP_CLASS);
      
      const tooltip = document.createElement('span');
      tooltip.className = TOOLTIP_ELEMENT_CLASS;
      tooltip.style.backgroundImage = `url('${title}')`;
      
      link.appendChild(tooltip);
      link.removeAttribute('title');
    }
  });
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const processContent = useCallback(() => {
    if (!containerRef.current) return;
    
    processMagicLinks(containerRef.current);
    processTooltipLinks(containerRef.current);
  }, []);

  useEffect(() => {
    processContent();
  }, [content, processContent]);

  return (
    <div 
      ref={containerRef}
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

