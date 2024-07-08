// components/login-form.mjs
import { LitElement, html, css } from 'lit';

class LoginForm extends LitElement {
  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      width: 200px;
      margin: auto;
    }

    input {
      margin: 5px 0;
      padding: 10px;
      font-size: 1em;
    }

    button {
      padding: 10px;
      font-size: 1em;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <form action=\"/auth/login\" method=\"POST\">
        <input type=\"text\" name=\"username\" placeholder=\"Username\" required>
        <input type=\"password\" name=\"password\" placeholder=\"Password\" required>
        <button type=\"submit\">Login</button>
      </form>
    `;
  }
}

customElements.define('login-form', LoginForm);
