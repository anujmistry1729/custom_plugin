var templateCell_$PLUGIN_ID = document.createElement('template')
templateCell_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px
    }

    #input-image-value{
        width: 18px
    }

    .template-container-btn{
        padding: 8px 16px;
    }
</style>

<div id="template-container">
    <input type="text" id="input-image-value" placeholder="Enter URL...">
    <!-- <button id="image-url" class="template-container-btn">Edit</button> -->
    <button id="view-image" class="template-container-btn">View</button>
</div>
`


var templateEditor_$PLUGIN_ID = document.createElement('template');
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #editor-container{
        max-width: 400px;
    }

    #image {
        background-size: contain;
        background-repeat: no-repeat;
        max-width: 400px;
    }

    #background-image {
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>
<div id="editor-container">
    <div id="background-image">
        <img id="image" style=";" />
    </div>
</div>
`

class OuterbasePluginConfig_$PLUGIN_ID {
    constructor(object) {
        
    }
}

class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        // The shadow DOM is a separate DOM tree that is attached to the element.
        // This allows us to encapsulate our styles and markup. It also prevents
        // styles from the parent page from leaking into our plugin.
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true))
    }

    // This function is called when the UI is made available into the DOM. Put any
    // logic that you want to run when the element is first stood up here, such as
    // event listeners, default values to display, etc.
    connectedCallback() {
        // Parse the configuration object from the `configuration` attribute
        // and store it in the `config` property.
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            JSON.parse(this.getAttribute('configuration'))
        )

        //set value of input tag to cell value using getAttribute('cellValue')
        this.shadow.querySelector('#input-image-value').value = this.getAttribute('cellvalue');

        //get tag/elements from shadow dom
        var imageInput = this.shadow.getElementById('input-image-value');
        var viewImageButton = this.shadow.getElementById('view-image');

        if(imageInput && viewImageButton){
            viewImageButton.addEventListener("click", () => {
                // console.log('onedit')
                // this.setAttribute('onedit', true)
                this.callCustomEvent({
                    action: 'onedit',
                    value: true
                })
            });
        }
        

    }

    callCustomEvent(data){
        console.log(data);
        const event = new CustomEvent('custom-change',{
            detail: data,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event)
    }

    //commented in original
    // render() {
    //     //here goes the UI (HTML and CSS) for rendering
         
    // }
}

// Do NOT change the variable name. Doing so will break the plugin when uploaded
// to Outerbase.
var templateEditor_$PLUGIN_ID = document.createElement('template')
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        max-height: 120px;
        overflow-y: scroll;
    }
</style>

<div id="container">
    <div id="background-image">
        <img id="image"  />
    </div>
</div>
`

// Do NOT change the class name. Doing so will break the plugin when uploaded
// to Outerbase.
class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        // The shadow DOM is a separate DOM tree that is attached to the element.
        // This allows us to encapsulate our styles and markup. It also prevents
        // styles from the parent page from leaking into our plugin.
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true))

        // Parse the configuration object from the `configuration` attribute
        // and store it in the `config` property.
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            JSON.parse(this.getAttribute('configuration'))
        )

        // this.render() Why?
    }

    connectedCallback() {
        var imageView = this.shadow.getElementById("image");
        console.log("Image View Inside conntected call back", imageView)
        if(imageView){
            imageView.src = this.getAttribute('cellvalue')
        }
    }

    // render() {
        
    // }
}

// DO NOT change the name of this variable or the classes defined in this file.
// Changing the name of this variable will cause your plugin to not work properly
// when installed in Outerbase.
window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID)