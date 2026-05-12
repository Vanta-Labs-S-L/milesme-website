import type { Metadata } from "next";
import Link from "next/link";
import { NavNew } from "@/components/NavNew";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Support — MilesMe",
  description: "Get help with MilesMe. Contact our support team or find answers to common questions.",
};

const faqs = [
  {
    question: "How do I generate a route?",
    answer:
      "Open the MilesMe app, set your starting location, choose your preferred distance and activity type, then tap Generate. MilesMe will create a loop route tailored to your preferences.",
  },
  {
    question: "Can I save and revisit routes?",
    answer:
      "Yes. After generating a route, tap the bookmark icon to save it. You can access all saved routes from the Routes tab in the app.",
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer:
      "Subscriptions are managed through Apple or Google. On iOS, go to Settings → Apple ID → Subscriptions and select MilesMe. On Android, open the Google Play Store → Menu → Subscriptions.",
  },
  {
    question: "The app is not tracking my location correctly. What should I do?",
    answer:
      "Make sure location permissions are set to 'Always' or 'While Using the App' in your device settings. If the issue persists, try closing and reopening the app or restarting your device.",
  },
  {
    question: "How do I delete my account?",
    answer: null,
    linkLabel: "Submit an account deletion request",
    linkHref: "/legal/delete-account",
  },
  {
    question: "I forgot my password. How do I reset it?",
    answer:
      "On the login screen, tap 'Forgot password?' and enter your email address. You'll receive a reset link within a few minutes. Check your spam folder if you don't see it.",
  },
];

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <NavNew forceScrolled />

      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M12 15L7 10L12 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>Support</h1>
          <p className={styles.subtitle}>
            We&apos;re here to help. Reach out directly or browse the answers below.
          </p>
        </header>

        {/* ===== CONTACT OPTIONS ===== */}
        <section className={styles.section} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactGrid}>
            <a href="mailto:support@milesme.app" className={styles.contactCard}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>App Support</p>
                <p className={styles.contactValue}>support@milesme.app</p>
                <p className={styles.contactNote}>
                  Questions about the app, routes, account issues, or bugs
                </p>
              </div>
            </a>

            <a href="mailto:hello@milesme.app" className={styles.contactCard}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>General Enquiries</p>
                <p className={styles.contactValue}>hello@milesme.app</p>
                <p className={styles.contactNote}>
                  Feedback, partnerships, or anything else
                </p>
              </div>
            </a>

            <a href="mailto:privacy@milesme.app" className={styles.contactCard}>
              <div className={styles.contactIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Privacy Requests</p>
                <p className={styles.contactValue}>privacy@milesme.app</p>
                <p className={styles.contactNote}>
                  Data access, correction, or deletion requests
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className={styles.section} aria-labelledby="faq-heading">
          <h2 id="faq-heading" className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <dl className={styles.faqList}>
            {faqs.map(({ question, answer, linkLabel, linkHref }) => (
              <div key={question} className={styles.faqItem}>
                <dt className={styles.faqQuestion}>{question}</dt>
                <dd className={styles.faqAnswer}>
                  {answer ?? (
                    <>
                      <Link href={linkHref!}>{linkLabel}</Link> using the form on our account
                      deletion page. We&apos;ll process your request in line with our Privacy Policy.
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ===== USEFUL LINKS ===== */}
        <section className={styles.section} aria-labelledby="links-heading">
          <h2 id="links-heading" className={styles.sectionTitle}>Useful Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/legal#privacy-policy" className={styles.usefulLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal#terms-of-service" className={styles.usefulLink}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/delete-account" className={styles.usefulLink}>
                Delete Account
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
