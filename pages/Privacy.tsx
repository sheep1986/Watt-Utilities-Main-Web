import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl prose prose-blue">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h3>1. Introduction</h3>
        <p>Watt Utilities Ltd ("we", "us", "our") is committed to protecting your privacy. This policy outlines how we collect, use, and share your data when you use our website or brokerage services.</p>
        
        <h3>2. Data We Collect</h3>
        <p>We collect information necessary to provide energy quotes, including:</p>
        <ul>
            <li>Company Name and Registration Number</li>
            <li>Meter Point Administration Numbers (MPAN/MPRN)</li>
            <li>Current energy usage and contract end dates</li>
            <li>Contact details (Name, Email, Phone)</li>
        </ul>

        <h3>3. How We Use Your Data</h3>
        <p>We use your data to:</p>
        <ul>
            <li>Generate comparative quotes from UK energy suppliers.</li>
            <li>Manage the switching process on your behalf.</li>
            <li>Contact you regarding your application or renewal.</li>
        </ul>

        <h3>4. Sharing of Data</h3>
        <p>To provide quotes, we must share your meter details with energy suppliers. We do not sell your data to unrelated third parties for marketing purposes.</p>

        <h3>5. Contact Us</h3>
        <p>If you have any questions about your data, please contact data@wattutilities.co.uk.</p>
      </div>
    </div>
  );
};