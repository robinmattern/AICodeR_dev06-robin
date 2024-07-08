// components/auth-buttons.mjs
import { LitElement, html, css } from 'lit';

class AuthButtons extends LitElement {
  static styles = css`
    a {
      display: block;
      margin: 10px 0;
      text-decoration: none;
      color: #333;
    }
  `;

  render() {
    return html`
      <a href=\"/auth/google\">Sign up with Google</a>
      <a href=\"/auth/facebook\">Continue with Facebook</a>
      <a href=\"/auth/twitter\">Continue with Twitter</a>
      <a href=\"/auth/apple\">Continue with Apple</a>
      <a href=\"/signup\">Continue with Email</a>
    `;
  }
}

customElements.define('auth-buttons', AuthButtons);
