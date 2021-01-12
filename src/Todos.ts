import {LitElement, html, css, customElement, property} from "lit-element";
import { Todo } from "./models/types";
import { ITodo } from "./models/interfaces";
import todoStore from "./store/todo";

@customElement('todos-list')
class TodosList extends LitElement {
    
    static styles = css`
        :host {
            display: flex
    `;

    todos = []

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        todoStore.subscribe(tds => {
            this.todos = tds;
            this.requestUpdate();
        });
    }
    
    render() {
        return html`
            <h3>Todos:</h3>
            <ul>
            ${
                this.todos.map(
                    (todo) => 
                        html`<li>${todo.task}</li>`
                )
            }
            </ul>
        `;
        
    }
}