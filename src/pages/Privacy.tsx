import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At MorningDesk, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Information: This includes your name, email address, phone number, and any other information you provide when you contact us or sign up for our services.</li>
        <li>Usage Data: We may collect information about how you use our website, including your IP address, browser type, and pages visited.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our services.</li>
        <li>To communicate with you, including responding to your inquiries and sending you updates.</li>
        <li>To improve our website and services based on user feedback.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and improve our services. You can choose to accept or decline cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services to help us operate our website and services. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">
        Email: support@morningdesk.in <br />
        Phone: +91 7992402517
      </p>

      <p className="mb-4">
        Thank you for trusting MorningDesk with your personal information.
      </p>
    </div>
  );
};

export default PrivacyPolicy;