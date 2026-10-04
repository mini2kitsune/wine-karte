# Wine Notes 🍷

「ワインを楽しんだ記録を残す」スマホ向け Web アプリのワインノート詳細画面を、
添付デザイン画像どおりに実装した **Next.js + TypeScript + Tailwind CSS** プロジェクトです。

高級ワインノートの世界観（ボルドー × ゴールド × アイボリー）を、Apple ライクな余白設計で再現しています。

---

## 技術スタック

| 項目 | 採用技術 |
| --- | --- |
| フレームワーク | Next.js 14（App Router） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS 3 |
| フォント | `next/font/google`（Great Vibes / Playfair Display / Noto Serif JP） |
| 構成 | モバイルファースト / PWA マニフェスト同梱 |

> shadcn/ui は依存を増やさずに済むよう、同等の構造を素の Tailwind コンポーネントで実装しています。
> 必要であれば `npx shadcn@latest init` 後に Button / Card 等へ置き換え可能です。

---

## セットアップ

```bash
# 依存をインストール
npm install

# 開発サーバー（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build && npm start
```

---

## ディレクトリ構成

```
wine-notes/
├─ app/
│  ├─ layout.tsx        # フォント読込・<html>・メタ/ビューポート/manifest
│  ├─ page.tsx          # 画面の組み立て（端末フレーム＋各セクション）
│  └─ globals.css       # Tailwind ディレクティブ＋装飾用 CSS（グラデ/栞のノッチ等）
├─ components/
│  ├─ AppHeader.tsx     # ヘッダー（戻る・ブドウエンブレム・Wine Notes ロゴ・メニュー）
│  ├─ WineInfoCard.tsx  # ワイン写真／名称／種類チップ／メタ情報
│  ├─ EvaluationCard.tsx# 総合評価★・また飲みたい？・お気に入り栞（"use client"）
│  ├─ StarRating.tsx    # 0〜5（0.5刻み）の星表示
│  ├─ TastingList.tsx   # 見た目・香り・味わい・ひとことメモ（ワックスシール）
│  ├─ ActionButtons.tsx # コピー／Instagram整形／シェア
│  ├─ AISommelier.tsx   # AIソムリエ「ピノ」からのひとこと＋タグ
│  ├─ FooterNav.tsx     # 前へ／一覧へ／次へ
│  └─ icons.tsx         # インライン SVG アイコン群
├─ lib/
│  └─ wine.ts           # 型定義＋サンプルデータ（API 置き換え用）
└─ public/assets/       # ブランド素材（ピノ／ワックスシール／エンブレム／写真）
```

---

## データ差し替え

画面はすべて `lib/wine.ts` の `sampleWine` を起点にレンダリングします。
API／DB から取得した `Wine` 型のオブジェクトを `app/page.tsx` に渡すだけで実データ表示に切り替わります。

```ts
import type { Wine } from "@/lib/wine";
```

---

## インタラクション

- **また飲みたい？** … はい / どちらでも / いいえ をタップで選択（`EvaluationCard`）
- **お気に入り** … ゴールドの栞をタップでオン/オフ
- 写真変更・編集・コピー等のボタンはハンドラ未接続のプレースホルダ（`onClick` を追加してください）

---

## デザイン再現について

- レイアウト・配色・余白・アイコンは添付デザイン画像に忠実に合わせています。
- 端末幅では 3 つの種類チップ・「また飲みたい？」の 3 択を画像どおり 1 行に収めるため、
  チップ文字サイズ等を実機可読範囲で微調整しています（画像優先）。
- 画像の世界観（高級ワインノート）を崩さないよう、新規 UI の追加は行っていません。

---

## 素材について

`public/assets/` のイラスト（猫ソムリエ・ワックスシール・ブドウエンブレム）と
ワイン写真は、本デザイン用に用意されたブランド素材です。実運用時はライセンスをご確認ください。
