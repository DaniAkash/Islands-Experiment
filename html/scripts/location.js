import {
  html,
  render,
  Component,
} from "https://unpkg.com/htm@3.1.1/preact/standalone.module.js";

class App extends Component {
  setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        loc: [position.coords.latitude, position.coords.longitude],
      });
    });
  }

  render(props, { loc }) {
    if (!loc) {
      this.setLocation();
    }

    return html`<div class="jumbotron container">
      <h2>Current Location</h2>
      <ul class="">
        <li>latitude: ${loc?.[0]}</li>
        <li>longitude: ${loc?.[1]}</li>
      </ul>
    </div>`;
  }
}

render(html`<${App} name="World" />`, document.querySelector("#app"));
