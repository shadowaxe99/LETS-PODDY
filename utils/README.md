# AudioMate GDPR and CCPA Compliance Features

## Overview
This folder contains utility functions related to GDPR and CCPA compliance features in the AudioMate project.

## Files
- `gdprUtils.js`: Contains utility functions for handling GDPR and CCPA compliance requirements.

## Functions

### `sanitizeData(data)`
Sanitizes the provided data by removing any personally identifiable information (PII) to comply with GDPR and CCPA regulations.

**Parameters:**
- `data` (object): The data object to be sanitized.

**Returns:**
- (object) The sanitized data object.

### `anonymizeData(data)`
Anonymizes the provided data by replacing any personally identifiable information (PII) with anonymous identifiers to comply with GDPR and CCPA regulations.

**Parameters:**
- `data` (object): The data object to be anonymized.

**Returns:**
- (object) The anonymized data object.

### `encryptData(data, key)`
Encrypts the provided data using the specified encryption key to ensure data security and compliance with GDPR and CCPA regulations.

**Parameters:**
- `data` (object): The data object to be encrypted.
- `key` (string): The encryption key to be used.

**Returns:**
- (string) The encrypted data.

### `decryptData(data, key)`
Decrypts the provided encrypted data using the specified decryption key to retrieve the original data.

**Parameters:**
- `data` (string): The encrypted data to be decrypted.
- `key` (string): The decryption key to be used.

**Returns:**
- (object) The decrypted data.

### `checkConsent(user)`
Checks if the user has given consent for data processing and storage as per GDPR and CCPA regulations.

**Parameters:**
- `user` (object): The user object containing consent information.

**Returns:**
- (boolean) `true` if the user has given consent, `false` otherwise.