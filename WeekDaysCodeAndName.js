export const WeekDaysCode = (day) => {
  switch (day) {
    case "یکشنبه":
      return 0;
    case "دوشنبه":
      return 1;
    case "سه شنبه":
      return 2;
    case "چهارشنبه":
      return 3;
    case "پنج شنبه":
      return 4;
    case "جمعه":
      return 5;
    case "شنبه":
      return 6;
    default:
      return -1;
  }
};

export const WeekDaysName = (code) => {
  switch (code) {
    case 0:
      return "یکشنبه";
    case 1:
      return "دوشنبه";
    case 2:
      return "سه\u200cشنبه";
    case 3:
      return "چهارشنبه";
    case 4:
      return "پنج\u200cشنبه";
    case 5:
      return "جمعه";
    case 6:
      return "شنبه";
    default:
      return "روز هفته";
  }
};
