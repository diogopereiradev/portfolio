'use client';

export function setDocumentScroll(isScrollable: boolean) {
  const body = document.body;
  isScrollable? body.style.overflow = 'auto' : body.style.overflow = 'hidden';
}