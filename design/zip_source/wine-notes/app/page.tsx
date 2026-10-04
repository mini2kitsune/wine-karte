import { sampleWine } from "@/lib/wine";
import AppHeader from "@/components/AppHeader";
import WineInfoCard from "@/components/WineInfoCard";
import EvaluationCard from "@/components/EvaluationCard";
import TastingList from "@/components/TastingList";
import ActionButtons from "@/components/ActionButtons";
import AISommelier from "@/components/AISommelier";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  const wine = sampleWine;

  return (
    <main className="stage flex min-h-screen items-start justify-center px-4 pb-12 pt-7">
      {/* Phone frame */}
      <div
        className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[42px] bg-ivory"
        style={{
          boxShadow:
            "0 40px 90px rgba(0,0,0,.55), 0 0 0 10px #0e0709, 0 0 0 12px #2a1a1d",
        }}
      >
        <AppHeader />
        <WineInfoCard wine={wine} />
        <EvaluationCard
          rating={wine.rating}
          initialAnswer="はい"
          initialFavorite={wine.favorite}
        />
        <TastingList notes={wine.tasting} />
        <ActionButtons />
        <AISommelier comment={wine.aiComment} tags={wine.aiTags} />
        <FooterNav />
        <div className="h-4" />
      </div>
    </main>
  );
}
