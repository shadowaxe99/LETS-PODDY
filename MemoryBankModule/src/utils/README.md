# Utility Functions

This folder contains utility functions used in the application.

## emailService.ts


import { sendEmail } from 'email-api';

export const sendNotificationEmail = (recipient: string, subject: string, message: string) => {
  const email = {
    recipient,
    subject,
    message,
  };

  sendEmail(email);
};

