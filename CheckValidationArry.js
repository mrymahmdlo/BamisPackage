
export const CheckValidationArry = (obj, validators) => {
  var isValid = "success";

  for (const key of Object.keys(validators)) {
    if (validators[key].type === "Array") {
      const isFilled = !validators[key].mustFill || obj[key].length > 0;
      if (!isFilled) isValid = validators[key].errorMessage;
    } else if (validators[key].mustFill) {
      if (obj[key] === "" || obj[key] === undefined || obj[key] === null) {
        isValid = validators[key].errorMessage;
      }
    }
  }

  return isValid;
};
