import axios from 'axios';

export async function sendEmail(to: string, subject: string, body: string): Promise<void> {
  try {
    const response = await axios.post('/api/sendEmail', {
      to,
      subject,
      body,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}