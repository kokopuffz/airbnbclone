import { Controller } from "@hotwired/stimulus"
import { toggle } from "el-transition"

export default class extends Controller {
  static targets = ['openUserMenu', 'userAuthLink'];
  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)
    // this.element.textContent = "Hello World!"
    // console.log('enter: ', enter);
    // console.log('leave: ', leave);
    // console.log('toggle: ', toggle);

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById("modal-trigger").click()
      })
      //link.addEventListener('click', () => {

      // })
    })
  }
  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'));
  }
}
