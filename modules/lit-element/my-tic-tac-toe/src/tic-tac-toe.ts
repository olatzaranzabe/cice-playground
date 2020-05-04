import { customElement, LitElement } from 'lit-element'
import { html } from 'lit-html'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  startNewGame = () => {
    console.log('hi')
  }
  render() {
    return html`<h1><app-button @click="${this.startNewGame}">Start game</app-button></h1>`
  }
}
