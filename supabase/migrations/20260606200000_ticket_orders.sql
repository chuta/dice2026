-- DICE 2026 ticket orders (Korapay checkout + webhooks)

create table if not exists public.ticket_orders (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  tier_id text not null check (char_length(tier_id) between 1 and 50),
  tier_name text not null check (char_length(tier_name) between 1 and 120),
  customer_name text not null check (char_length(customer_name) between 2 and 120),
  customer_email text not null check (char_length(customer_email) <= 254),
  full_price_ngn integer not null check (full_price_ngn > 0),
  amount_ngn integer not null check (amount_ngn > 0),
  currency text not null default 'NGN' check (currency = 'NGN'),
  status text not null default 'pending'
    check (status in ('pending', 'success', 'failed')),
  payment_method text,
  fee_ngn numeric,
  paid_at timestamptz,
  notified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ticket_orders_reference_idx
  on public.ticket_orders (reference);

create index if not exists ticket_orders_status_idx
  on public.ticket_orders (status, created_at desc);

create index if not exists ticket_orders_customer_email_idx
  on public.ticket_orders (customer_email);

alter table public.ticket_orders enable row level security;

-- No public policies: reads/writes go through Next.js API routes using the service role key.
