import type { Wine } from "@/lib/wine";
import { WineGlassIcon } from "./icons";

export default function AISommelier({
  comment,
  tags,
}: {
  comment: Wine["aiComment"];
  tags: string[];
}) {
  return (
    <section className="mt-3.5 px-4">
      <div className="ai-grad flex flex-col gap-3 rounded-[22px] border border-[#EAD9B4] p-4 shadow-card">
        {/* Title + comment span full width */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bordeaux font-pf text-[12px] font-bold tracking-[.5px] text-gold shadow-[0_2px_6px_rgba(90,14,26,.3)]">
              AI
            </span>
            <span className="font-jp text-[17px] font-bold leading-[1.3] text-[#2c1116]">
              AIソムリエからのひとこと
            </span>
            <WineGlassIcon className="ml-auto h-5 w-5 shrink-0 text-gold" />
          </div>
          <p className="text-[13px] leading-[1.85] text-ink">
            {comment.intro}
            <span className="font-semibold text-bordeaux-soft">{comment.highlight}</span>
            {comment.rest}
          </p>
        </div>

        {/* Cat + tags share the bottom row */}
        <div className="flex items-end gap-3">
          <div className="w-[88px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/cat_full.png"
              alt="猫ソムリエ ピノ"
              className="block w-full"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-wrap content-end gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap rounded-full border border-[#E0CFA6] bg-white/60 px-3 py-1.5 text-[11.5px] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
