//creating a template 
const templateCell_$PLUGIN_ID = document.createElement("template");
//adding styles and tags inside the template tags innerHTML
templateCell_$PLUGIN_ID.innerHTML = `
    <style>
        #container-image-url{
            margin: 0;
            padding: 0 12px;
        }
    </style>

    <div id="container">
        <p id="container-image-url"></p>
    </div>
`;

class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement{
//smiliar to previours editor view class constructor except the child 
    //that is getting appended to the nodoe
    constructor() {
//to use HTMLElemement Properties (Specifically shadowDOM)
      super();
  
      this.shadow = this.attachShadow({ mode: "open" });
      //attach our Modal UI to shadow dom
        this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true));
// //initalize config class for getting values of the cell can be commented and it will still work
//         this.config = new OuterbasePluginConfig_$PLUGIN_ID(
//           JSON.parse(this.getAttribute("configuration"))
//         );
    }
  
    connectedCallback() {
      const containerImageUrl = this.shadow.getElementById("container-image-url");
//assign value as innerHTML or as innerTextContent
      containerImageUrl.innerHTML = this.getAttribute("cellValue");
  
      if (containerImageUrl) {
//IMPORTANT on click event trigger a callCustomEvent property
        containerImageUrl.addEventListener("click", () => {
          this.callCustomEvent({
            action: "onedit",
            value: containerImageUrl.innerText,
          });
        });
      }
    }
//IMPORTANT property to create the custom event and dispatch it.
    callCustomEvent(data) {
      const event = new CustomEvent("custom-change", {
        detail: data,
        bubbles: true,
        composed: true,
      });
  
      this.dispatchEvent(event);
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
      //initalize config class for getting values of the cell cam be removed 
    //   this.config = new OuterbasePluginConfig_$PLUGIN_ID(
    //     JSON.parse(this.getAttribute("configuration")),
    //   );
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
  
  class OuterbasePluginConfig_$PLUGIN_ID {
    constructor(object) {}
  
    connectedCallback() {}
  }

  //IMPORTANT TO LET THE DOCUMENT KNOW ABOUT CUSTOMELEMENTS 
  window.customElements.define(
    "outerbase-plugin-cell-$PLUGIN_ID",
    OuterbasePluginCell_$PLUGIN_ID
  );
  window.customElements.define(
    "outerbase-plugin-editor-$PLUGIN_ID",
    OuterbasePluginEditor_$PLUGIN_ID
  );
  