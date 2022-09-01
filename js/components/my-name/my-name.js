/**
 * The my-ame web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
    <form onSubmit="return false">
    <input type="text" id="name" placeholder="Enter Ur Name" autofocus>    
    <button id="saveName">Enter</button>
    </form>
`

customElements.define(
  'my-name',
  /**
   * Represent a name component.
   */
  class extends HTMLElement {
    /**
     * "button to store name"
     */
    #button

    /**
     * "textfield for name"
     */
    #name

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      // Get the input, datalist and article elements in the shadow root.
      this.#name = this.shadowRoot.querySelector('#name')
      this.#button = this.shadowRoot.querySelector('#saveName')

      // Adds eventlistener to button with click function
      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        window.sessionStorage.setItem('my-name', this.#name.value)
        this.dispatchEvent(new window.CustomEvent('calculateColor'))
      })
    }
  }
)
