import { useState, useCallback } from "react";

export function useLightbox() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const openLightbox = useCallback((src: string) => {
    setLightboxSrc(src);
  }, []);
  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
  }, []);
  return { lightboxSrc, openLightbox, closeLightbox };
}
