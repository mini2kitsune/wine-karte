import { CalendarIcon, ChevronLeft, ChevronRight } from "./icons";

export default function FooterNav() {
  return (
    <nav className="mt-3.5 flex items-center border-t border-hair bg-ivory px-2 py-3.5">
      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-1.5 text-[13px] text-ink-soft"
      >
        <ChevronLeft className="h-4 w-4 text-gold-deep" />
        前のワイン
      </button>
      <div className="h-5 w-px bg-hair" />
      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-1.5 text-[13px] font-semibold text-[#2c1116]"
      >
        <CalendarIcon className="h-4 w-4 text-gold-deep" />
        ワイン一覧に戻る
      </button>
      <div className="h-5 w-px bg-hair" />
      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-1.5 text-[13px] text-ink-soft"
      >
        次のワイン
        <ChevronRight className="h-4 w-4 text-gold-deep" />
      </button>
    </nav>
  );
}
