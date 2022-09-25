import { Component } from "react"
export default class NavBar extends Component {
    render() {
        return <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="d-flex w-50 order-0">
          <a class="navbar-brand mr-1" href="#">Bootstrap 4</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="navbar-collapse collapse justify-content-center order-2"
          id="collapsingNavbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Link <span class="sr-only">Home</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="//codeply.com">Codeply</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
        <span
          class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"
        ></span>
      </nav>
    }
}