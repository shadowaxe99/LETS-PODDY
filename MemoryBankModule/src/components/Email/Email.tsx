import React from 'react';

interface EmailProps {
  recipient: string;
  subject: string;
  body: string;
}

const Email: React.FC<EmailProps> = ({ recipient, subject, body }) => {
  const sendEmail = () => {
    // Logic to send email
    console.log(`Sending email to ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
  };

  return (
    <div>
      <h2>Email</h2>
      <p>Recipient: {recipient}</p>
      <p>Subject: {subject}</p>
      <p>Body: {body}</p>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default Email;