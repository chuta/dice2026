-- DICE 2026 form submissions (contact + newsletter)

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) <= 254),
  company text check (company is null or char_length(company) <= 200),
  subject text not null check (char_length(subject) between 1 and 100),
  message text not null check (char_length(message) between 10 and 5000),
  source_path text check (source_path is null or char_length(source_path) <= 500),
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) <= 254),
  source_path text check (source_path is null or char_length(source_path) <= 500),
  created_at timestamptz not null default now(),
  constraint newsletter_subscribers_email_key unique (email)
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists newsletter_subscribers_created_at_idx
  on public.newsletter_subscribers (created_at desc);

alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- No public policies: inserts go through Next.js API routes using the service role key.
