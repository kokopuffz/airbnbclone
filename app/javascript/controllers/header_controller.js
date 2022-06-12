import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"

export default class extends Controller {
  static targets = ['openUserMenu'];
  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
    // this.element.textContent = "Hello World!"
    // console.log('enter: ', enter);
    // console.log('leave: ', leave);
    // console.log('toggle: ', toggle);
  }
  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'));
  }
}
