import React from 'react';
import './Login.css';

const Logo = () => (
  <div className="pa4 tc grow">
    <img
      src="./../favicon.svg"
      className="dib"
      alt="avatar"
    />
  </div>
)

const login = () => (
  <div>
      <main className="pa4 black-80">
    <Logo />
    <form className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0 tc">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            name="email-address"
            id="email-address"
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">
            Password
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer">
          <input type="checkbox" /> Remember me
        </label>
      </fieldset>
      <div className>
        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          defaultValue="Sign in"
        />
      </div>
      <div className="lh-copy mt3">
        <a href="./../ForgotPassword/Forgot.js" className="f6 link dim black db">
          Forgot your password?
        </a>
      </div>
    </form>
  </main>
  </div>
)

export default login;