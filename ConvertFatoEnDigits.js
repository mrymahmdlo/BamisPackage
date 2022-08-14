const persianNumberArr = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
const arabicNumberArr = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];

export const convertNumbers2English = (string) => {
  if (typeof string === "string") {
    let i = 0;
    for (; i < 10; i++) {
      string = string
        .replace(persianNumberArr[i], i)
        .replace(arabicNumberArr[i], i);
    }
  }
  return string;
};
