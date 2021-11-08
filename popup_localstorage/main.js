//localStorage Popup

let hfpopupBtn = document.querySelector(".hf_popup-close");
let hfPopupContainer = document.querySelector(".hf_popup--bd_and_grab--container");

class HFPopup {
  constructor(container, closeBtn) {
    this.btn = closeBtn;
    this.container = container;
  }

  launch() {
    window.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("popupState") != "displayed") {
        this.closeBtn();
        this.showBtn();
      }
    });
  }

  showBtn() {
    this.container.style.opacity = "1";
    this.container.style.visibility = "visible";
  }

  closeBtn() {
    this.btn.addEventListener("click", () => {
      this.container.style.display = "none";
      localStorage.setItem("popupState", "displayed");
    });
  }
}

let hfPopup = new HFPopup(hfPopupContainer, hfpopupBtn);
hfPopup.launch();
