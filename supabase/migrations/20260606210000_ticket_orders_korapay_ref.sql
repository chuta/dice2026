-- Link static payment-link charges to DICE ticket orders

alter table public.ticket_orders
  add column if not exists korapay_payment_reference text;

create unique index if not exists ticket_orders_korapay_payment_reference_key
  on public.ticket_orders (korapay_payment_reference)
  where korapay_payment_reference is not null;

create index if not exists ticket_orders_pending_match_idx
  on public.ticket_orders (status, amount_ngn, customer_email, created_at desc)
  where status = 'pending';
