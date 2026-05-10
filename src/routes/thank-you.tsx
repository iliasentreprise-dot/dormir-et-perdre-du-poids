import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Lightbox } from "@/components/ui/lightbox";
import { useLightbox } from "@/hooks/use-lightbox";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Bienvenue dans le programme !" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { lightboxSrc, openLightbox, closeLightbox } = useLightbox();

  return (
    <main className="min-h-screen bg-navy text-white flex items-center justify-center px-4 py-16">
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            box-shadow:
              0 0 8px #2b6bff,
              0 0 20px #2b6bff,
              0 0 40px #2b6bff,
              0 0 80px #2b6bff,
              inset 0 0 20px rgba(43,107,255,0.1);
          }
          50% {
            box-shadow:
              0 0 4px #2b6bff,
              0 0 10px #2b6bff,
              0 0 20px #2b6bff,
              0 0 40px #2b6bff,
              inset 0 0 10px rgba(43,107,255,0.05);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
        .neon-cover {
          animation: neon-pulse 2s ease-in-out infinite, float 4s ease-in-out infinite;
          border: 2px solid #2b6bff;
          border-radius: 16px;
        }
        .shimmer-line {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-xl text-center">
        <CheckCircle2 className="h-20 w-20 text-success mx-auto" />
        <h1 className="mt-6 text-4xl sm:text-5xl font-black">
          🎉 Bienvenue dans le programme !
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Vérifiez votre boîte email dans les{" "}
          <span className="text-white font-semibold">2 prochaines minutes</span>.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: 20,
                background: "transparent",
                animation: "neon-pulse 2s ease-in-out infinite",
                border: "1px solid rgba(43,107,255,0.3)",
                pointerEvents: "none",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl" style={{ width: 220 }}>
              <img
                src="/cover.png"
                alt="La Fenêtre Thermogénique Féminine"
                className="neon-cover w-full cursor-zoom-in"
                style={{ display: "block" }}
                onClick={() => openLightbox("/cover.png")}
              />
              <div
                className="shimmer-line absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                style={{ top: 0, left: 0 }}
              />
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Des questions ?{" "}
          <a href="mailto:contact@fenetre-thermogenique.com" className="text-electric underline">
            contact@fenetre-thermogenique.com
          </a>
        </p>
        <Link to="/" className="mt-8 inline-block text-sm text-electric hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </main>
  );
}
