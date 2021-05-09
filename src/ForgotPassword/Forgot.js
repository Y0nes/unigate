import React from 'react';
import 'bootstrap';

const Logo = () => (
  <div className="pa4 tc grow">
    <img
      src="./../favicon.svg"
      className="dib"
      alt="Logo"
    />
  </div>
)

const forgot_password = () => (
    <main className="pa4 black-80">
      <form className="measure center">
      <Logo />
        <fieldset id="forgot_password" className="ba b--transparent ph0 mh0">
          <legend className="tc f4 fw6 ph0 mh0">Forgot Password</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-grey hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
            />
          </div>
          <div className>
            <input
              className="tc mv3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              defaultValue="Forgot password"
            />
          </div>
        </fieldset>
      </form>
    </main>
  )


export default forgot_password;