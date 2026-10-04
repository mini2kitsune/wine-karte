"use client";

import { useState } from "react";
import { LIKERT_OPTIONS, type LikertValue } from "@/lib/wine";
import StarRating from "./StarRating";
import { HeartIcon, NeutralFace, SadFace } from "./icons";

function LikertIcon({ option }: { option: LikertValue }) {
  const cls = "h-[11px] w-[11px]";
  if (option === "はい") return <HeartIcon className={cls} fill="currentColor" />;
  if (option === "どちらでも") return <NeutralFace className={cls} />;
  return <SadFace className={cls} />;
}

export default function EvaluationCard({
  rating,
  initialAnswer = "はい",
  initialFavorite = true,
}: {
  rating: number;
  initialAnswer?: LikertValue;
  initialFavorite?: boolean;
}) {
  const [answer, setAnswer] = useState<LikertValue>(initialAnswer);
  const [favorite, setFavorite] = useState(initialFavorite);

  return (
    <section className="mt-3.5 px-4">
      <div className="flex items-center gap-2.5">
        {/* Evaluation card */}
        <div className="flex flex-1 items-center gap-1 rounded-[22px] border border-hair bg-white px-2.5 py-3.5 shadow-card">
          {/* Total rating */}
          <div className="flex w-[66px] shrink-0 flex-col items-center">
            <div className="mb-1.5 whitespace-nowrap text-[12px] text-ink-mute">総合評価</div>
            <StarRating value={rating} />
            <div className="mt-1 font-pf text-[18px] font-semibold text-[#3a1118]">
              {rating.toFixed(1)}{" "}
              <span className="text-[12px] font-normal text-ink-mute">/ 5.0</span>
            </div>
          </div>

          <div className="my-1.5 self-stretch border-l border-dashed border-[#D8C9A8]" />

          {/* Drink again? */}
          <div className="flex min-w-0 flex-1 flex-col items-center">
            <div className="mb-1.5 whitespace-nowrap text-[12px] text-ink-mute">また飲みたい？</div>
            <div className="flex flex-nowrap justify-center gap-1">
              {LIKERT_OPTIONS.map((opt) => {
                const active = answer === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswer(opt)}
                    className={[
                      "flex items-center gap-1 whitespace-nowrap rounded-full border py-1.5 pl-1 pr-1.5 text-[10.5px] transition-colors",
                      active
                        ? "border-bordeaux bg-bordeaux text-white"
                        : "border-hair bg-white text-ink-soft",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-4 w-4 items-center justify-center rounded-full border",
                        active ? "border-transparent bg-white/15" : "border-hair",
                      ].join(" ")}
                    >
                      <LikertIcon option={opt} />
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Favorite bookmark */}
        <button
          type="button"
          aria-pressed={favorite}
          onClick={() => setFavorite((v) => !v)}
          className={[
            "fav-notch flex h-[96px] w-[52px] shrink-0 flex-col items-center justify-start gap-2 self-center rounded-t-[8px] pt-3.5 text-white shadow-fav transition-[filter]",
            favorite ? "fav-grad" : "fav-grad opacity-70",
          ].join(" ")}
        >
          <HeartIcon
            className="h-[22px] w-[22px]"
            fill={favorite ? "currentColor" : "none"}
            stroke="#fff"
            strokeWidth={2}
          />
          <span className="text-[10px] tracking-[2px]" style={{ writingMode: "vertical-rl" }}>
            お気に入り
          </span>
        </button>
      </div>
    </section>
  );
}
