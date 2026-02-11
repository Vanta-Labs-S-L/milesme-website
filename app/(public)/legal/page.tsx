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
            <p className={styles.effectiveDate}>Effective: February 1st, 2026</p>

            <div className={styles.prose}>
              <p>
                This Privacy Policy (&quot;Policy&quot;) explains how MilesMe collects, uses, shares, and
                protects your personal information, and how you can exercise your privacy rights.
              </p>
              <p>
                MilesMe is operated by Vanta Labs S.L., a company registered in Spain with its registered
                office in Barcelona, Spain (&quot;Vanta Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By using
                MilesMe, you agree to this Policy.
              </p>

              <h2>1. Scope</h2>
              <p>
                This Policy applies to the MilesMe mobile applications, website(s), and related services
                (collectively, the &quot;Services&quot;). It should be read together with our Terms of Service,
                which govern your use of MilesMe. For the purposes of applicable data protection laws,
                Vanta Labs S.L. is the data controller.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>A. Information You Provide</h3>
              <h4>Account Information</h4>
              <ul>
                <li>Name or username</li>
                <li>Email address</li>
                <li>Password (encrypted)</li>
                <li>Country or region</li>
              </ul>

              <h4>Profile &amp; Preferences</h4>
              <ul>
                <li>Activity preferences (e.g. walking, running, cycling)</li>
                <li>Goals (distance, time, calories)</li>
                <li>Optional information such as experience level</li>
              </ul>

              <h4>Support Communications</h4>
              <ul>
                <li>Information you provide when contacting support or submitting feedback</li>
              </ul>

              <h3>B. Information Collected Through Use of the Services</h3>
              <h4>Activity &amp; Route Data</h4>
              <ul>
                <li>Generated routes</li>
                <li>Distance, duration, pace</li>
                <li>Elevation data</li>
                <li>Activity timestamps</li>
                <li>Route preferences you select</li>
              </ul>

              <h4>Location Information</h4>
              <ul>
                <li>
                  Precise location is collected only when required for route generation or navigation.
                  Location permissions can be revoked at any time via your device settings.
                </li>
              </ul>

              <h4>Usage Information</h4>
              <ul>
                <li>App interactions and feature usage</li>
                <li>Crash logs and performance diagnostics</li>
              </ul>

              <h4>Device &amp; Technical Information</h4>
              <ul>
                <li>Device type</li>
                <li>Operating system</li>
                <li>App version</li>
                <li>Anonymous identifiers</li>
              </ul>

              <h3>C. Information from Third Parties</h3>
              <h4>App Store Providers</h4>
              <ul>
                <li>Subscription status (active, cancelled, expired)</li>
                <li>We do not receive full payment card details</li>
              </ul>

              <h4>Connected Services</h4>
              <ul>
                <li>
                  If you connect third-party services (for example, Apple Health), we only access data
                  you explicitly authorise.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>

              <h3>A. To Provide the Services</h3>
              <ul>
                <li>Create and manage your account</li>
                <li>Generate routes tailored to your preferences</li>
                <li>Display maps, elevation, and activity summaries</li>
                <li>Enable navigation and route guidance</li>
              </ul>

              <h3>B. To Improve MilesMe</h3>
              <ul>
                <li>Analyse usage trends</li>
                <li>Fix bugs and improve performance</li>
                <li>Improve route quality and reliability</li>
                <li>Develop new features</li>
              </ul>
              <p>We may use aggregated or de-identified data for analysis and research.</p>

              <h3>C. To Communicate with You</h3>
              <ul>
                <li>Service-related messages</li>
                <li>Support responses</li>
                <li>Important updates about the app</li>
              </ul>
              <p>We do not send third-party advertising emails.</p>

              <h3>D. AI &amp; Automation (Limited Use)</h3>
              <p>MilesMe may use automated systems to:</p>
              <ul>
                <li>Improve route generation quality</li>
                <li>Detect anomalies or errors</li>
                <li>Optimise performance</li>
              </ul>
              <p>We do not use automated decision-making with legal or similarly significant effects.</p>

              <h2>4. How We Share Information</h2>
              <p>We do not sell personal data.</p>
              <p>We may share information only in the following cases:</p>
              <h3>Service Providers</h3>
              <p>
                Trusted providers that help us operate the Services (such as hosting, analytics, mapping,
                and subscriptions). They are contractually required to protect your data.
              </p>
              <h3>Legal Obligations</h3>
              <p>
                When required by law, court order, or where necessary to protect safety, rights, or
                property.
              </p>
              <h3>Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or asset sale, your data may be transferred in
                accordance with this Policy.
              </p>

              <h2>5. Data Retention</h2>
              <p>We retain personal information:</p>
              <ul>
                <li>For as long as your account is active</li>
                <li>As needed to provide the Services</li>
                <li>As required by law</li>
              </ul>
              <p>
                You may delete your account at any time. Residual data may remain temporarily in
                backups.
              </p>

              <h2>6. Your Privacy Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your data</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent</li>
                <li>Request data portability</li>
              </ul>
              <p>
                You can submit an account deletion request through our{" "}
                <Link href="/legal/delete-account">Delete account page</Link> or contact us at{" "}
                <a href="mailto:privacy@milesme.app">privacy@milesme.app</a>.
              </p>

              <h2>7. International Data Transfers</h2>
              <p>
                MilesMe may process data outside your country of residence, including in the United
                States. When required, we rely on Standard Contractual Clauses or other lawful
                safeguards for such transfers.
              </p>

              <h2>8. Children&apos;s Privacy</h2>
              <p>
                MilesMe is not intended for children under 13, and we do not knowingly collect personal
                data from children.
              </p>

              <h2>9. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your data.
                No system is 100% secure, but we work to minimise risks.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. Material changes will be communicated
                through the app or website.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have questions or requests relating to this Policy, you can contact us at:</p>
              <ul>
                <li>
                  General enquiries:{" "}
                  <a href="mailto:hello@milesme.app">hello@milesme.app</a>
                </li>
                <li>
                  Support:{" "}
                  <a href="mailto:support@milesme.app">support@milesme.app</a>
                </li>
                <li>
                  Privacy requests:{" "}
                  <a href="mailto:privacy@milesme.app">privacy@milesme.app</a>
                </li>
                <li>
                  Legal / contact:{" "}
                  <a href="mailto:contact@milesme.app">contact@milesme.app</a>
                </li>
              </ul>
            </div>
          </section>

          {/* ===== TERMS OF SERVICE ===== */}
          <section id="terms-of-service" className={styles.section}>
            <h1 className={styles.sectionTitle}>Terms of Service</h1>
            <p className={styles.effectiveDate}>Effective: February 1st, 2026</p>

            <div className={styles.prose}>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the MilesMe mobile
                applications, websites, software, and related services (collectively, the &quot;Services&quot;).
                MilesMe is operated by Vanta Labs S.L., a company registered in Spain with its registered
                office in Barcelona (&quot;Vanta Labs&quot;, &quot;MilesMe&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using
                the Services, you agree to be bound by these Terms. If you do not agree, do not use the
                Services.
              </p>

              <h2>1. Agreement</h2>
              <p>
                These Terms form a legally binding agreement between you and Vanta Labs S.L. If you
                access or use the Services on behalf of an organisation, you represent that you have
                authority to bind that organisation to these Terms.
              </p>

              <h2>2. Eligibility &amp; Accounts</h2>
              <h3>Age Requirement</h3>
              <p>
                You must be at least 13 years old (or older if required by local law) to use MilesMe. If you
                are under the legal age to enter into a binding contract, you may only use the Services with
                the consent of a parent or legal guardian.
              </p>
              <h3>Account Registration</h3>
              <p>
                To use certain features, you must create an account. You agree to provide accurate and
                current information, maintain only one personal account, keep your login credentials secure,
                and accept responsibility for all activity under your account. We may suspend or terminate
                accounts that violate these Terms.
              </p>

              <h2>3. Services Overview</h2>
              <p>MilesMe provides tools to:</p>
              <ul>
                <li>Generate routes for walking, running, or cycling</li>
                <li>Display maps, elevation, distance, and time estimates</li>
                <li>Record and review activity data</li>
              </ul>
              <p>MilesMe does not guarantee:</p>
              <ul>
                <li>Route safety</li>
                <li>Traffic conditions</li>
                <li>Surface quality</li>
                <li>Weather accuracy</li>
                <li>That routes are suitable for your skill level or health</li>
              </ul>

              <h2>4. Subscriptions &amp; Payments</h2>
              <h3>Free and Paid Features</h3>
              <p>
                Some features are available for free. Other features require a paid subscription. We may
                modify, add, or remove features at any time.
              </p>
              <h3>Billing &amp; Auto-Renewal</h3>
              <p>
                Subscriptions are billed on a recurring basis (for example, monthly or annually) and renew
                automatically unless cancelled at least 24 hours before the end of the billing period.
                Payments are processed through the Apple App Store or Google Play. We do not store full
                payment details.
              </p>
              <h3>Cancellation &amp; Refunds</h3>
              <p>
                You may cancel your subscription at any time via your app store account. Access to paid
                features continues until the end of the current billing period. Refunds are handled by Apple
                or Google in accordance with their policies and applicable law.
              </p>

              <h2>5. Beta &amp; Experimental Features</h2>
              <p>
                Some features may be labelled as beta or experimental. These are provided &quot;as is&quot;, may
                change, and may contain errors. Use of beta or experimental features is at your own risk.
              </p>

              <h2>6. User Content &amp; Data</h2>
              <p>
                You retain ownership of content you create or upload (such as activities or preferences).
                You grant MilesMe a limited, non-exclusive licence to use this content solely to provide and
                improve the Services, in accordance with our Privacy Policy.
              </p>

              <h2>7. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Services for any unlawful purpose</li>
                <li>Interfere with or compromise system integrity or security</li>
                <li>Reverse engineer, scrape, or attempt to extract data from the Services</li>
                <li>Submit false, misleading, or fraudulent information or activities</li>
                <li>Use automated systems or software to access the Services without permission</li>
              </ul>

              <h2>8. Safety Disclaimer</h2>
              <p>
                MilesMe provides planning and visualisation tools only. Outdoor activities carry inherent
                risks, and routes may pass through unsafe or restricted areas or be affected by changing
                conditions. You are solely responsible for your safety, obeying local laws, assessing route
                suitability, and exercising appropriate judgement. MilesMe is not a navigation authority,
                safety service, or emergency service.
              </p>

              <h2>9. Health Disclaimer</h2>
              <p>
                MilesMe does not provide medical advice. Any calorie estimates, pace estimates, or
                performance insights are informational only and should not replace professional medical
                advice. Consult a physician before beginning any new physical activity.
              </p>

              <h2>10. Intellectual Property</h2>
              <p>
                The MilesMe name, logo, software, and design are owned by Vanta Labs S.L. or its
                licensors. You may not copy, modify, distribute, or exploit any part of the Services without
                our prior written permission.
              </p>

              <h2>11. Third-Party Services</h2>
              <p>
                The Services may integrate with third-party platforms (for example, Apple Health or mapping
                providers). We are not responsible for third-party services, their data accuracy, or their
                availability. Your use of third-party services is subject to their own terms and policies.
              </p>

              <h2>12. Termination</h2>
              <p>
                We may suspend or terminate your access to the Services if you violate these Terms, for
                legal or security reasons, or if required by law. You may delete your account at any time.
              </p>

              <h2>13. Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. WE DISCLAIM ALL WARRANTIES,
                EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND ACCURACY. We do not warrant that the Services will be uninterrupted, error-free, or
                completely secure.
              </p>

              <h2>14. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Vanta Labs S.L. shall not be liable for any
                indirect, incidental, special, or consequential damages arising out of or in connection with
                your use of the Services. Our total liability for any claim will not exceed the greater of
                €50 or the amount you paid for the Services in the last 12 months.
              </p>

              <h2>15. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Vanta Labs S.L. from and against any claims,
                liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or
                in connection with your use of the Services, your activities, or your violation of these Terms
                or applicable laws.
              </p>

              <h2>16. Governing Law &amp; Disputes</h2>
              <p>
                For users in the European Union, these Terms are governed by Spanish law and disputes
                shall be resolved by the courts of Spain, without prejudice to mandatory consumer
                protections. For users outside the EU, disputes are governed by Spanish law unless local
                consumer laws require otherwise.
              </p>

              <h2>17. Changes to the Services or Terms</h2>
              <p>
                We may modify the Services or these Terms at any time. If changes are material, we will
                provide notice through the Services or other appropriate means. Continued use of the
                Services after changes take effect constitutes acceptance of the updated Terms.
              </p>

              <h2>18. Contact</h2>
              <p>If you have questions about these Terms, you can contact us at:</p>
              <ul>
                <li>
                  General and legal contact:{" "}
                  <a href="mailto:contact@milesme.app">contact@milesme.app</a>
                </li>
                <li>
                  Support:{" "}
                  <a href="mailto:support@milesme.app">support@milesme.app</a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
