import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { ZoomableImage } from "@/components/sales/ZoomableImage";

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
  return (
    <main className="min-h-screen bg-navy text-white flex items-center justify-center px-4 py-16">
      <style>{`
        @keyframes neon-pulse {
          0%, 100% { box-shadow: 0 0 8px #2b6bff, 0 0 20px #2b6bff, 0 0 40px #2b6bff, 0 0 80px #2b6bff; }
          50% { box-shadow: 0 0 4px #2b6bff, 0 0 10px #2b6bff, 0 0 20px #2b6bff, 0 0 40px #2b6bff; }
        }
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 10px rgba(43,107,255,0.8), 0 0 20px rgba(43,107,255,0.4); }
          50% { text-shadow: 0 0 20px rgba(43,107,255,1), 0 0 40px rgba(43,107,255,0.6); }
        }
        .neon-cover { animation: neon-pulse 2s ease-in-out infinite; border: 2px solid #2b6bff; border-radius: 16px; }
        .neon-text { animation: glow-text 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-xl text-center">
        <CheckCircle2 className="h-20 w-20 text-success mx-auto" />
        <h1 className="mt-6 text-4xl sm:text-5xl font-black neon-text">
          🎉 Bienvenue dans le programme !
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Vérifiez votre boîte email dans les{" "}
          <span className="text-white font-semibold">2 prochaines minutes</span>.
        </p>

        <div className="mt-10 flex justify-center">
          <ZoomableImage src="/cover.png" alt="La Fenêtre Thermogénique Féminine" className="relative inline-block">
            <img src="/cover.png" alt="La Fenêtre Thermogénique Féminine" className="neon-cover w-64 sm:w-80" />
          </ZoomableImage>
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
    </main>
  );
}
