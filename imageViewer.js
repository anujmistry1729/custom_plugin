class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {
  constructor() {
    super();
  }
}

const templateEditor_$PLUGIN_ID= document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<div class="modal-overlay">
    <div class="modal">
        <img id="modal-image" alt="Image" class="modal-image">
        <input type="url" id="url-input" class="url-input" placeholder="Don't tell anyone its AI generated ;)">
        <button id="save-button"   class="save-button">Save URL</button>
    </div>
</div>
`

class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {
    constructor() {
      //to use HTMLElemement Properties (Specifically shadowDOM)
      super();
  
      this.shadow = this.attachShadow({ mode: "open" });
      //attach our Modal UI to shadow dom
      this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true));
      //initalize config class for getting values of the cell
      this.config = new OuterbasePluginConfig_$PLUGIN_ID(
        JSON.parse(this.getAttribute("configuration")),
      );
    }
  
    connectedCallback() {
      var modalImage = this.shadow.getElementById("modal-image");
      var urlInputEl = this.shadow.getElementById("url-input");
      //add source and values to image and input tag if we get the element
      if (modalImage && urlInputEl) {
        modalImage.src = this.getAttribute("cellValue");
        urlInputEl.value = this.getAttribute("cellValue");
      }
    }
  }
  
  