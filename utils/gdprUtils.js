const checkGDPRCompliance = (user) => {
  // Check if user has given consent for GDPR
  if (user.gdprConsent) {
    return true;
  } else {
    return false;
  }
};

const checkCCPACompliance = (user) => {
  // Check if user is located in California
  if (user.location === 'California') {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  checkGDPRCompliance,
  checkCCPACompliance
};