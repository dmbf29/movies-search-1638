import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["list"];

  connect() {
    console.log(this.listTarget);
  }

  update(event) {
    const input = event.currentTarget;
    const url = `/movies?query=${input.value}`;
    console.log(url);
    fetch(url, { headers: { Accept: "text/plain" } })
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        this.listTarget.innerHTML = data;
      });
  }
}
