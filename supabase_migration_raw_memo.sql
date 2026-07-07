-- 📥 メモ取り込みインボックス機能: 原文メモ保存カラムの追加
-- Supabase ダッシュボード → SQL Editor でこのファイルの内容を実行してください
alter table wine_notes add column if not exists raw_memo text default '';
