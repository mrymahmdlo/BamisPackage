import { convertNumbers2English } from "./ConvertFatoEnDigits";

const PhoneNumberValidation = (number) => {
  if (number?.length !== 11) {
    return false;
  } else if (
    isNaN(convertNumbers2English(number)) ||
    number.indexOf(" ") !== -1
  ) {
    return false;
  } else if (
    number.charAt(0) + number.charAt(1) !== "09" &&
    number.charAt("۰") + number.charAt(1) !== "۰۹"
  ) {
    return false;
  }
  return true;
};

export default PhoneNumberValidation;
