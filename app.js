window.onload = function() {
  //#region click first Next button
  const buttonNext = document.getElementsByTagName("button")[0];
  buttonNext.addEventListener("click", buttonsNextClicked);

  const content = document.getElementById("content");
  const firstStep = document.getElementById("firstStep");
  function buttonsNextClicked() {
    content.style.background = "none";
    firstStep.style.display = "block";
    buttonNext.removeEventListener("click", buttonsNextClicked);
    buttonNext.addEventListener("click", buttonsNextClickedSecondTime);
  }
  //#endregion

  //#region click Cancel button
  const buttonsCancel = document.getElementsByTagName("button")[1];
  buttonsCancel.addEventListener("click", buttonsCancelClicked);
  const wrapper = document.getElementById("wrapper");
  function buttonsCancelClicked() {
    wrapper.style.display = "none";
  }
  //#endregion

  const inputRadio = document.getElementsByTagName("input")[0];
  const buttonsFinish = document.getElementById("finish");
  const wait = document.getElementById("wait");
  const lastText = document.getElementById("lastText");
  function buttonsNextClickedSecondTime() {
    if (inputRadio.checked) {
      firstStep.style.display = "none";
      wait.style.display = "block";

      setTimeout(() => {
        wait.style.display = "";
        buttonNext.style.display = "none";
        buttonsCancel.style.display = "none";
        buttonsFinish.style.display = "block";
        lastText.style.display = "block";
      }, 3000);

      buttonsFinish.addEventListener("click", buttonsCancelClicked);
      buttonNext.removeEventListener("click", buttonsNextClickedSecondTime);
    }
  }
};
