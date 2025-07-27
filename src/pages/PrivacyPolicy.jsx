import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => (
    <main className="privacy-policy-plain">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="privacy-policy-date">Last updated: July 27, 2025</p>
        <p className="privacy-policy-intro">
            Welcome to <b>DailyBuzz</b>. We value your trust and are committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights as a user of our news platform.
        </p>
        <h2>1. What We Collect</h2>
        <ul>
            <li><b>No Account Needed:</b> You can browse all news and features without creating an account or providing personal details.</li>
            <li><b>Basic Analytics:</b> We use privacy-friendly analytics to understand which topics are popular and improve your experience. This data is anonymous and never sold or shared.</li>
            <li><b>Cookies:</b> We use only essential cookies for site functionality and to remember your preferences. You can disable cookies in your browser at any time.</li>
        </ul>
        <h2>2. How We Use Your Data</h2>
        <ul>
            <li>To deliver the latest news, trending topics, and personalized content.</li>
            <li>To monitor site health, prevent abuse, and improve our features.</li>
            <li>To ensure a safe, secure, and enjoyable browsing experience for all users.</li>
        </ul>
        <h2>3. Third-Party Services</h2>
        <p>
            We fetch news from <b>NewsAPI.org</b> and display images from various sources. We do not share your personal data with any third party. External links may lead to other sites; please review their privacy policies.
        </p>
        <h2>4. Data Security</h2>
        <p>
            We use industry-standard security practices to protect your information. However, please remember that no website can guarantee 100% security.
        </p>
        <h2>5. Children’s Privacy</h2>
        <p>
            DailyBuzz is designed for a general audience and is not intended for children under 13. We do not knowingly collect information from children.
        </p>
        <h2>6. Your Rights</h2>
        <ul>
            <li>You can clear cookies and site data at any time via your browser settings.</li>
            <li>If you have questions about your privacy, you can contact us directly.</li>
        </ul>
        <h2>7. Changes to This Policy</h2>
        <p>
            We may update this policy as our site evolves. Any changes will be posted here with a new "Last updated" date.
        </p>
        <h2>8. Contact Us</h2>
        <p>
            For any privacy-related questions or requests, email us at <a href="mailto:ayushbm84@gmail.com" className="privacy-policy-contact">ayushbm84@gmail.com</a>.
        </p>
        <p className="privacy-policy-thankyou">
            Thank you for choosing <b>DailyBuzz</b> as your trusted news source.
        </p>
    </main>
);

export default PrivacyPolicy;
