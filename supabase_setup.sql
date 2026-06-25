create table if not exists wine_notes (
  id text primary key,
  user_id uuid references auth.users not null default auth.uid(),
  created_at_ts bigint default 0,
  wine_name text default '',
  vintage text default '',
  producer text default '',
  country text default '',
  grape text default '',
  wine_type text default '',
  drink_date text default '',
  price text default '',
  shop text default '',
  taste_look text default '',
  taste_aroma text default '',
  taste_flavor text default '',
  taste_memo text default '',
  rating numeric(3,1) default 0,
  want_again text default 'はい',
  is_fav boolean default false,
  photo text default '',
  ai_comment text default '',
  updated_at timestamptz default now()
);

alter table wine_notes enable row level security;

create policy "Users can manage their own wine notes"
  on wine_notes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
