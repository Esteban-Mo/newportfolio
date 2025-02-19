import StarryBackground from "@/components/ui/StarryBackground/StarryBackground";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <StarryBackground />
      <div className="relative z-10">
        {/* Contenu principal ici */}
      </div>
    </main>
  );
}
