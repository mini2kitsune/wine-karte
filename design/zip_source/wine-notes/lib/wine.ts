/**
 * Domain types + sample data for a single Wine Note.
 * Replace `sampleWine` with data from your API / DB.
 */

export type SealKey = "look" | "aroma" | "taste" | "memo";

export interface TastingNote {
  seal: SealKey;
  /** Allow an explicit line break in the label (e.g. ひと / ことメモ). */
  label: string[];
  hint: string;
  /** Body text; "\n" renders as a line break. */
  body: string;
}

export interface MetaRow {
  label: string;
  value: string;
  icon?: "calendar" | "price" | "cart";
}

export interface Wine {
  name: string;
  vintage: string;
  photo: string;
  types: { label: string; icon: "red" | "flag-fr" | "grape" }[];
  meta: MetaRow[];
  rating: number; // 0–5, .5 steps
  favorite: boolean;
  aiComment: { intro: string; highlight: string; rest: string };
  aiTags: string[];
  tasting: TastingNote[];
}

export const SEAL_SRC: Record<SealKey, string> = {
  look: "/assets/seal_look.png",
  aroma: "/assets/seal_aroma.png",
  taste: "/assets/seal_taste.png",
  memo: "/assets/seal_memo.png",
};

export const sampleWine: Wine = {
  name: "Château Margaux",
  vintage: "2018",
  photo: "/assets/wine_photo.png",
  types: [
    { label: "赤ワイン", icon: "red" },
    { label: "フランス / ボルドー", icon: "flag-fr" },
    { label: "カベルネ・S 他", icon: "grape" },
  ],
  meta: [
    { label: "生産者", value: "Château Margaux" },
    { label: "ヴィンテージ", value: "2018" },
    { label: "飲んだ日", value: "2024 / 05 / 20 (月) 20:30", icon: "calendar" },
    { label: "購入価格", value: "¥45,000", icon: "price" },
    { label: "購入場所", value: "○○ワインショップ", icon: "cart" },
  ],
  rating: 4.5,
  favorite: true,
  aiComment: {
    intro: "香りの表現がとても素敵です。特に",
    highlight: "「杉やバニラ」",
    rest:
      "というニュアンスは、このワインの樽熟による特徴をよく捉えていますね。力強さとエレガンスが共存する、素晴らしい一本を楽しまれたようです 🍷",
  },
  aiTags: ["カシス系果実", "樽のニュアンス", "バランスが良い", "長い余韻"],
  tasting: [
    {
      seal: "look",
      label: ["見た目"],
      hint: "色合い・濃淡・透明感・粘性 など",
      body: "深いガーネット。エッジにわずかに紫。粘性はやや強め。",
    },
    {
      seal: "aroma",
      label: ["香り"],
      hint: "第一印象・香りの特徴 など",
      body: "カシス、ブラックチェリー、杉、バニラ、スミレのニュアンス。",
    },
    {
      seal: "taste",
      label: ["味わい"],
      hint: "甘辛・酸味・渋み・アルコール・余韻 など",
      body: "しっかりしたタンニンと豊かな果実味。\n酸味のバランスがよく、長い余韻が心地よい。",
    },
    {
      seal: "memo",
      label: ["ひと", "ことメモ"],
      hint: "ペアリング・シーンなど自由にメモ",
      body: "牛ステーキと合わせたら最高！\n特別な日にまた飲みたい一本。",
    },
  ],
};

export const LIKERT_OPTIONS = ["はい", "どちらでも", "いいえ"] as const;
export type LikertValue = (typeof LIKERT_OPTIONS)[number];
