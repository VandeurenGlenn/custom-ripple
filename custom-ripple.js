import {define} from '../backed/src/utils.js';
import RenderMixin from '../custom-renderer-mixin/src/render-mixin.js';

export default define(class CustomRipple extends RenderMixin(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
  }
	/**
	 * Runs the ripple
	 */
	run() {
		this.classList.add('run');
		setTimeout(() => {
			this.classList.remove('run');
		}, 160);
	}

  get template() {
    return html`
    <style>
      :host {
        background: rgba(0,0,0,0.12);
        position: absolute;
        opacity: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--custom-ripple-radius, 50%);
        outline: none;
        transition: transform cubic-bezier(0.22, 0.61, 0.36, 1) 600ms;
        transform: translate3d(0,0,0);
      }
      :host(.run) {
        opacity: 1;
        top: 0;
        left: 0;
        transition: transform cubic-bezier(0, 0, 0.2, 1) 400ms;
        transform: translate3d(0,0,0);
      }
    </style>
    `;
  }
});
