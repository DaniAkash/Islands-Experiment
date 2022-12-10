import {
  html,
  render,
  Component,
} from "https://unpkg.com/htm@3.1.1/preact/standalone.module.js";

class App extends Component {
  setVal(e) {
    this.setState({ val: e.target.value });

    let ans;
    try {
      ans = eval(e.target.value);
    } catch (e) {
      console.error(e);
    }

    this.setState({ ans });

    console.log(ans);
  }

  render(props, { val, ans }) {
    return html`<main>
      <h3>Calculator</h3>
      <form class="">
        <div class="mb-3">
          <label for="exampleEmail" class="form-label"
            >Add your expression here...</label
          ><input
            id="calc"
            name="calculator"
            placeholder="2+2"
            type="text"
            class="form-control"
            value="${val}"
            onKeyUp=${(e) => this.setVal(e)}
            data-com.bitwarden.browser.user-edited="yes"
          />
        </div>
      </form>
      <h2><pre>= ${ans}</pre></h2>
    </main>`;
  }
}

render(html`<${App} name="World" />`, document.querySelector("#app"));
