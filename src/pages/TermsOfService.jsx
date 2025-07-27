import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => (
    <main className="terms-service-plain">
        <h1 className="terms-service-title">Terms of Service</h1>
        <p className="terms-service-date">Last updated: July 27, 2025</p>
        <p className="terms-service-intro">
            Welcome to <b>DailyBuzz</b>. By accessing or using our website, you agree to these Terms of Service. Please read them carefully.
        </p>
        <h2>1. Use of the Site</h2>
        <ul>
            <li>DailyBuzz is for personal, non-commercial use only. You may not copy, distribute, or sell any content from this site without permission.</li>
            <li>You agree not to misuse the site, attempt to hack, or disrupt our services.</li>
            <li>We reserve the right to restrict access or remove content at our discretion.</li>
        </ul>
        <h2>2. Content & Copyright</h2>
        <ul>
            <li>All news articles are sourced from <b>NewsAPI.org</b> and credited to their original publishers.</li>
            <li>Images and logos are used for illustrative purposes and belong to their respective owners.</li>
            <li>Do not re-use or re-publish content from DailyBuzz without proper attribution.</li>
        </ul>
        <h2>3. User Conduct</h2>
        <ul>
            <li>Do not post or share offensive, illegal, or harmful content through any part of this site.</li>
            <li>Respect the rights and privacy of other users and content creators.</li>
        </ul>
        <h2>4. Disclaimer</h2>
        <p>
            DailyBuzz provides news for informational purposes only. We do our best to ensure accuracy, but cannot guarantee all information is up-to-date or error-free. Always verify important news with official sources.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
            We are not liable for any damages or losses resulting from your use of DailyBuzz or reliance on its content.
        </p>
        <h2>6. Changes to These Terms</h2>
        <p>
            We may update these Terms of Service as our site evolves. Any changes will be posted here with a new "Last updated" date.
        </p>
        <h2>7. Contact Us</h2>
        <p>
            For questions about these terms, email us at <a href="mailto:ayushbm84@gmail.com" className="terms-service-contact">ayushbm84@gmail.com</a>.
        </p>
        <p className="terms-service-thankyou">
            Thank you for using <b>DailyBuzz</b> and respecting our community guidelines.
        </p>
    </main>
);

export default TermsOfService;
