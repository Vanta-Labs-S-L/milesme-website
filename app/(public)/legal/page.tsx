"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavNew } from "@/components/NavNew";
import styles from "./page.module.css";

const sections = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms-of-service", label: "Terms of Service" },
];

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("privacy-policy");

  useEffect(() => {
    // Set initial active from URL hash
    const hash = window.location.hash.replace("#", "");
    if (hash && sections.some((s) => s.id === hash)) {
      setActiveSection(hash);
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.page}>
      <NavNew forceScrolled />

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <Link href="/" className={styles.backLink}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
            <nav className={styles.sidebarNav}>
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`${styles.sidebarLink} ${activeSection === id ? styles.active : ""}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className={styles.content}>
          {/* ===== PRIVACY POLICY ===== */}
          <section id="privacy-policy" className={styles.section}>
            <h1 className={styles.sectionTitle}>Privacy Policy</h1>
            <p className={styles.effectiveDate}>Effective: February 2025</p>

            <div className={styles.prose}>
              <p>
                MilesMe ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>

              <h2>1. Information We Collect</h2>
              <h3>Information you provide</h3>
              <ul>
                <li><strong>Waitlist sign-up:</strong> When you join our waitlist, we collect your email address.</li>
                <li><strong>Account information:</strong> When our app launches, we may collect your name, email, and preferences to personalise your experience.</li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li><strong>Usage data:</strong> We may collect anonymised data about how you interact with our website, such as pages visited and time spent.</li>
                <li><strong>Device information:</strong> Browser type, operating system, and device type for improving compatibility.</li>
              </ul>

              <h3>Information we do not collect</h3>
              <ul>
                <li><strong>Location data:</strong> MilesMe is designed with privacy-first principles. Your precise location data stays on your device and is never sent to our servers.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To notify you when MilesMe launches</li>
                <li>To improve and personalise the MilesMe experience</li>
                <li>To respond to your enquiries and support requests</li>
                <li>To send important updates about the service (not marketing spam)</li>
              </ul>

              <h2>3. Data Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data with:
              </p>
              <ul>
                <li><strong>Service providers:</strong> Trusted partners who help us operate the service (e.g., email delivery, hosting), bound by strict confidentiality agreements.</li>
                <li><strong>Legal requirements:</strong> If required by law, regulation, or legal process.</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Opt out of communications</li>
              </ul>

              <h2>6. Cookies</h2>
              <p>
                Our website uses minimal, essential cookies to ensure proper functionality. We do not use tracking cookies or third-party advertising cookies.
              </p>

              <h2>7. Children's Privacy</h2>
              <p>
                MilesMe is not directed at children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@milesme.app">hello@milesme.app</a>.
              </p>
            </div>
          </section>

          {/* ===== TERMS OF SERVICE ===== */}
          <section id="terms-of-service" className={styles.section}>
            <h1 className={styles.sectionTitle}>Terms of Service</h1>
            <p className={styles.effectiveDate}>Effective: February 2025</p>

            <div className={styles.prose}>
              <p>
                Welcome to MilesMe. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>

              <h2>1. About MilesMe</h2>
              <p>
                MilesMe is a route discovery platform that helps runners and walkers find loop routes tailored to their distance, terrain, and preferences. Our service is currently in pre-launch and available via waitlist sign-up.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be at least 13 years old to use MilesMe. By using our services, you represent that you meet this requirement.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                When our app launches, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Scrape, crawl, or harvest data from our platform</li>
              </ul>

              <h2>5. Route Information</h2>
              <p>
                Routes provided by MilesMe are for informational purposes only. We do not guarantee the safety, accuracy, or suitability of any route. Always exercise caution and use your own judgement when following any route. Check local conditions, weather, and your own fitness level before heading out.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                All content, design, code, and branding on MilesMe are owned by us or our licensors. You may not copy, modify, or distribute our content without prior written permission.
              </p>

              <h2>7. User Content</h2>
              <p>
                When our platform launches, users may be able to submit route ratings, reviews, and feedback. By submitting content, you grant MilesMe a non-exclusive, worldwide licence to use, display, and distribute that content in connection with our services.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, MilesMe shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including but not limited to personal injury, property damage, or loss of data.
              </p>

              <h2>9. Disclaimer of Warranties</h2>
              <p>
                MilesMe is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or completely secure.
              </p>

              <h2>10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to MilesMe at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
              </p>

              <h2>11. Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time. Continued use of MilesMe after changes constitutes acceptance of the revised Terms. We will notify you of material changes.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
                <a href="mailto:hello@milesme.app">hello@milesme.app</a>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
