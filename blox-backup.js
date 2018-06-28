import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-backup`
 * Creates a file to download with the given extension and data
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxBackup extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }
  static get properties() {
    return {
      filename: {
        type: String,
        observer: '_start',
      },
      data: {
        type: String,
      },
      suffix: {
        type: String,
      },
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }

  _start(){
    if(this.filename && this.data && this.suffix){
      this._backup(this.filename, this.data, this.suffix)
    }
  }

  _backup(name, data, suffix) {
    const filename = `${name}_${+new Date()}.${suffix}`;
    const popup = window.document.createElement('a');
    popup.target = '_blank';
    popup.href = window.URL.createObjectURL(new Blob([data], {type: 'text/csv'}));
    popup.download = filename;
    document.body.appendChild(popup);
    popup.click();
    document.body.removeChild(popup);
  }

} window.customElements.define('blox-backup', BloxBackup);
