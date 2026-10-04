# design/ — デザイン検討参考資料

このフォルダは **本番PWAの一部ではない**デザイン検討参考資料です。
本番は親階層の `index.html`（Supabase接続 PWA）。

## 内容

### デザイン検討 HTML
- `wine_notes_design.html` — Claude Design で最初に生成されたデザイン完成形
- `wine_notes_empty_design.html` — 空枠デザイン案（データ無し表示パターン）

### スタイルガイド・参考画像
- `style_guide_full.png` — **デザイン全体像イメージ**（カラーパレット・タイポ・パーツ一覧）
- `wax_seals_4_categories.png` — 4カテゴリ（見た目・香り・味わい・メモ）の蝋シール一覧
- `wine_notes_design_reference.png` — デザイン参考画像
- `decoration_gold_leaf.png` — 金箔装飾素材（本番 `assets/gold_leaf.png` と同じ）
- `icon_wine_glass_gold.png` — ワイングラスアイコン（本番 `assets/wineglass_gold.png` と同じ）

### zip_source/
Claude Design の生出力一式。参考用。
- `wine-notes/` — Next.js プロトタイプソース（v2計画の実装候補として検討されたもの・未採用）
- `screenshots/` — デザイン検討時のスクリーンショット
- `preview.html` / `Wine Notes.html` / `styles.css` — Claude Design 軽量版出力

### archive_from_assets/
元 `../assets/` にあった**本番PWAが参照していない過去の素材画像**を集約（デザイン検討時の中間成果物）。

## 本番PWAとの関係

- 本番PWA（`../index.html`）は `../assets/` 配下の12枚の画像のみ使用（`../sw.js` の `STATIC_ASSETS` 参照）
- このフォルダの内容はPWAキャッシュ対象外・ServiceWorkerは触らない
- GitHub Pages で公開はされるが、PWAからの参照はない
