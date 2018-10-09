import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img width="50" src="primary-green.svg" alt="The MoviesDb icon" />
            </td>
            <td width="8" />
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Header;
