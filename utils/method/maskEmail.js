export const maskEmail = (email) => {
  const [username, domain] = email.split('@');
    // Get the masked username
    const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
    // Reconstruct the masked email address
    const maskedEmail = maskedUsername + '@' + domain;
    return maskedEmail;
}