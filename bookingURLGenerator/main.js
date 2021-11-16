class Booking {
  //Selecting Booking Form Tags
  locationURL = document.querySelector("#location");
  arrivalURL = document.querySelector("#start");
  departureURL = document.querySelector("#end");
  guestsURL = document.querySelector("#guests");
  submitURL = document.querySelector("#submit");

  #today = new Date();
  #dd = this.#today.getDate();
  #mm = this.#today.getMonth() + 1;
  #yyyy = this.#today.getFullYear();

  constructor() {}

  setMinDate() {
    if (this.#dd < 10) {
      this.#dd = "0" + this.#dd;
    }

    if (this.#mm < 10) {
      this.#mm = "0" + this.#mm;
    }

    let start = this.#yyyy + "-" + this.#mm + "-" + this.#dd;
    this.arrivalURL.setAttribute("min", start);
  }
}

let booking = new Booking();
booking.setMinDate();




class BookingURLGenerator extends Booking {
  constructor() {
    //Inherit
    super();
  }

  getSearchParameters() {
    let searchParameters = {
      adult: this.guestsURL.value,
      arrive: this.arrivalURL.value,
      chain: "5154", //Default
      child: "0", //Default
      currency: "USD", //Default
      depart: this.departureURL.value,
      hotel: this.checkHotelParam(this.locationURL),
      level: "hotel", //Default
      locale: "en-US", //Default
      shell:  this.checkShellTemplate(this.locationURL),
      start: "availresults",
      template:  this.checkShellTemplate(this.locationURL), 
    }
    return searchParameters;
  }

  checkHotelParam(location) {
    return location.value === "Tbilisi" ? "62567" 
    : location.value === "Kazbegi" ? "60688" 
    : location.value === "Kokhta" ? "8963" 
    : "NaN";
  }

  checkShellTemplate(location) {
    return location.value === "Tbilisi" ? "SBE_Tbilisi_V1" 
    : location.value === "Kazbegi" ? "SBE_Kazbegi_V1" 
    : location.value === "Kokhta" ? "SBE_Kokhta_V1" 
    : "NaN";
  }

  generateLink() {
    //Define URL
    let bookingURL = new URL("https://be.synxis.com/");

    //Create Parameter Chain
    let searchParams = new URLSearchParams(this.getSearchParameters());

    //Add URL search parameter to Synxis booking URL origin
    bookingURL.search = searchParams.toString();

    //return synxis href
    return bookingURL.href;
  }
}

let bookingUrlGenerator = new BookingURLGenerator();
bookingUrlGenerator.submitURL.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = bookingUrlGenerator.generateLink();
});
