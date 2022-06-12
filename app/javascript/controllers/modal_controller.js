import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"

export default class extends Controller {
  static targets = ["openUserMenu"]
  connect() {
    console.log('hello, we are inside the modal controller')
  }

}
