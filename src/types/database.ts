export interface ContactSubmissionRow {
  id: string;
  name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  source_path: string | null;
  created_at: string;
}

export interface NewsletterSubscriberRow {
  id: string;
  email: string;
  source_path: string | null;
  created_at: string;
}
