const phone = require('phone');
const validator = require('email-validator');

export const validatePhoneNumber = (phoneNum) => {
  const answer = phone(phoneNum);
  return answer;
};

export const validateEmail = (email) => {
  const answer = validator.validate(email); // true
  return answer;
};

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
};

export const formatBalance = (balance) => {
  if (balance) {
    const formattedBalance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `$ ${formattedBalance}`;
  }
  return '';
};

export const formatCardNumber = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
  return parts.join('.');
};
