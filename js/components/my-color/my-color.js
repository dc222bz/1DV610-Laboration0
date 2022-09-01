/**
 * The my-color web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
    <style>
      #info {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: darkkhaki;
      }
    </style>
    <div id="calculateColor">
        <h1 id="color"></h1>
        <h3 id="info"></h3>
    </div>
   `

customElements.define('my-color',
  /**
   * Represent a color component.
   */
  class extends HTMLElement {
    /**
     * Variable for color of name.
     */
    #color

    /**
     * Variable for color of name.
     */
    #info

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Get elements in the shadow root.
      this.#color = this.shadowRoot.querySelector('#color')
      this.#info = this.shadowRoot.querySelector('#info')
    }

    /**
     * Runs calculateColor once added to the DOM.
     */
    connectedCallback () {
      this.calculateColor()
    }

    /**
     * Calculates the color.
     *
     */
    calculateColor () {
      const name = window.sessionStorage.getItem('my-name')
      let sum = 0
      let yourColorIs = ''
      let infoColor = ''
      for (let i = 0; i < name.length; i++) {
        const char = name.charAt(i)

        if (char === 'a' || char === 'A' || char === 'j' || char === 'J' || char === 's' || char === 'S') {
          sum = sum + 1
        } else if (char === 'b' || char === 'B' || char === 'k' || char === 'K' || char === 't' || char === 'T') {
          sum = sum + 2
        } else if (char === 'c' || char === 'C' || char === 'l' || char === 'L' || char === 'u' || char === 'U') {
          sum = sum + 3
        } else if (char === 'd' || char === 'D' || char === 'm' || char === 'M' || char === 'v' || char === 'V') {
          sum = sum + 4
        } else if (char === 'e' || char === 'E' || char === 'n' || char === 'N' || char === 'w' || char === 'W') {
          sum = sum + 5
        } else if (char === 'f' || char === 'F' || char === 'o' || char === 'O' || char === 'x' || char === 'X') {
          sum = sum + 6
        } else if (char === 'g' || char === 'G' || char === 'p' || char === 'P' || char === 'y' || char === 'Y') {
          sum = sum + 7
        } else if (char === 'h' || char === 'H' || char === 'q' || char === 'Q' || char === 'z' || char === 'Z' || char === 'å' || char === 'Å' || char === 'ä' || char === 'Ä' || char === 'ö' || char === 'Ö') {
          sum = sum + 8
        } else if (char === 'i' || char === 'I' || char === 'r' || char === 'R' || char === 'å' || char === 'Å' || char === 'ä' || char === 'Ä' || char === 'ö' || char === 'Ö') {
          sum = sum + 9
        } else {
          sum = sum + 0
        }
      }

      const sumA = sum / 10
      const sumB = sum % 10
      const sumC = Math.floor(sumA) + sumB
      const sumD = sumC / 10
      const sumE = sumC % 10
      const sumColor = Math.floor(sumD) + sumE

      if (sumColor === 1) {
        yourColorIs = 'red'
        infoColor = 'The red character is a passionate, courageous risk-taker with a dominant character. A flamboyant soul, full of vitality and tenacity. Those with this color frequency should embrace patience with those who go through life at a slower pace. This color personality is often aligned with learning, education and the teaching or training of people.'
        this.#color.style.color = '#FF0000'
      } else if (sumColor === 2) {
        yourColorIs = 'orange'
        infoColor = 'The orange color frequency is playful, exciting and friendly with an incredible sense of humor. These people are quietly confident and possess determination to defeat life’s challenges. They are creative, adore being sociable and generally having a laugh. This color personality is beneficial within an alternative wellness business.'
        this.#color.style.color = '#FF8000'
      } else if (sumColor === 3) {
        yourColorIs = 'yellow'
        infoColor = 'The yellow character is joyous, alluring, bold, hypnotic, clever and creative. Those with this color frequency can also be psychic and love to be appreciated by their community. This personality color offers frivolity, happiness and an eagerness to assist. They also have craving for serenity and sensitivity.'
        this.#color.style.color = '#FFFF00'
      } else if (sumColor === 4) {
        yourColorIs = 'green'
        infoColor = 'The green character is balanced, harmonious and forgiving. This color frequency provides the perfect balance between the physical and mental planes. The green personality is grounded, logical and rarely swayed to do anything not in line with their ethics. They are a loyal friend but can become cautious, suspicious and can be manipulated by other people.'
        this.#color.style.color = '#80FF00'
      } else if (sumColor === 5) {
        yourColorIs = 'blue'
        infoColor = 'The blue character is empathetic, adaptable, idealist, placid, patient and devoted. They adjust to motherhood extremely well. This color personality is modern, tolerant, fun-loving and has an appetite for travelling and communications.'
        this.#color.style.color = '#0000FF'
      } else if (sumColor === 6) {
        yourColorIs = 'indigo'
        infoColor = 'The indigo character is a brilliant old soul who is intuitive, sensitive, impulsive and ambitious with a great zest for life. They transmit an approachable quality and give off a friendly aura. This color personality is cooperative, kind, sociable but can behave a bit erratically occasionally. Beneficial for artists, musicians and for those interested in the occult.'
        this.#color.style.color = '#4B0082'
      } else if (sumColor === 7) {
        yourColorIs = 'violet'
        infoColor = 'The violet color character is an alert and wise spirit. Loving, charitable, nostalgic and creative. Direct and outspoken with a strong desire for enlightenment as well as for cultivating personal independence. This color frequency is honest, analytical and a true leader in their own genius.'
        this.#color.style.color = '#EE82EE'
      } else if (sumColor === 8) {
        yourColorIs = 'magneta'
        infoColor = 'The magenta character is the classic utopian, empathic and merciful.      Those with this color frequency in their charts honor the highest aspects of people so they can make superior teachers. The magenta personality is sensitive, generous, and intuitive. As free-thinkers, these people seldom judge people and are known for their tolerance. It is suggested that they use their creativity or they could become despondent.'
        this.#color.style.color = '#FF00FF'
      } else if (sumColor === 9) {
        yourColorIs = 'gold'
        infoColor = 'The gold character is frank, expressive, creative and autonomous. Their endurance to overcome adversity or resistance in life is admirable. The gold personality also offers a venturous and amorous nature. They should develop some sacred techniques to enhance their wellbeing especially as this influence can manifest as issues in close relationships.'
        this.#color.style.color = '#FFD700'
      }

      this.#color.textContent = name + ' shines with the color: ' + yourColorIs
      this.#info.textContent = infoColor
    }
  }
)
