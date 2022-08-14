const pasteExecCommand = (id) => {
  try {
    let successful = document.execCommand("paste");
    let msg = successful ? "successful" : "unsuccessful";
    console.log(msg);
  } catch (err) {
    console.log("Was not possible to paste te text: ", err);
  }
  navigator.clipboard
    .readText()
    .then((text) => {
      document.getElementById(id).innerHTML = text;
    })
    .catch(() => {
      document.getElementById(id).innerHTML = "خطا در خواندن محتوای کلیپ بورد";
    });
};

const pasteFromClipboard = {
  PasteText: async (id) =>
    (await typeof navigator.clipboard) === "undefined"
      ? pasteExecCommand(id)
      : navigator.clipboard
          .readText()
          .then((text) => {
            document.getElementById(id).innerHTML = text;
          })
          .catch(() => {
            document.getElementById(id).innerHTML =
              "خطا در خواندن محتوای کلیپ بورد";
          }),
};

export default pasteFromClipboard;
