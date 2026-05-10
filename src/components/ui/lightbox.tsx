import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(0,0,0,0.75)",
        cursor: "zoom-out",
        padding: 24,
      }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: 16,
          boxShadow: "0 0 60px rgba(43,107,255,0.5), 0 0 120px rgba(43,107,255,0.2)",
          border: "2px solid rgba(43,107,255,0.4)",
          cursor: "default",
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          borderRadius: 8,
          padding: "6px 14px",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        ✕ Fermer
      </button>
    </div>
  );
}
