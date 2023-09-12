var templateCell_$PLUGIN_ID = document.createElement('template');

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
`

var templateEditor_$PLUGIN_ID = document.createElement('template');
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
.modal{
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.4);
    font-family: 'Inter', 'sans-serif';
    font-size: 16px;
  }
  
  .modal-content{
    height: 80%;
    max-width: 520px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  .modal-content > input{
    width: 50%;
    padding: 8px 16px;
    border: none;
    border-radius: .5rem;
  }
  
  .modal-content >  img{
    width: 100%;
    height: 80%;
    object-fit: contain;
    border-radius: 1rem;
  }
  
  .modal-content > button{
    background: linear-gradient(rgb(248, 248, 248) 0%, rgb(254, 254, 254) 100%);
      box-shadow: rgb(176, 176, 176) 0px -1px 1px 1px inset, rgb(252, 252, 252) 0px 0px 2px 0px inset;
    padding: 6px 16px;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
  }
  
</style>

<!-- Modal -->
<div id="myModal" class="modal">

<!--    Content  -->
<div class="modal-content"> 

    <img id="preview-image" alt="image">
    <input id="image-url" type="url" name="url" id="input-url" placeholder="image url">
    
    <button id="update-url-btn" >Update</button>

  </div>
</div>

`


//empty as we do not require a config 
class OuterbasePluginConfig_$PLUGIN_ID{
    constructor(object){

    }
}

//PluginCell
class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {

    static get ObservedAttributes(){
        return privileges;
    };

    //initialize plugin config with empty values
    config = new OuterbasePluginConfig_$PLUGIN_ID({});

    constructor(){
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true));
    };

    connectedCallback(){
        
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            JSON.parse(this.getAttribute('configuration'))
            );
        
        this.shadow.querySelector('#container-image-url').innerHTML = this.getAttribute('cellValue');

        var containerImageUrl = this.shadow.getElementById("container-image-url");

        if(containerImageUrl){
            containerImageUrl.addEventListener('click',()=>{

                this.callCustomEvent({
                    action: 'onclick',
                    value: containerImageUrl.innerText,
                })
            })
        }

    }

    callCustomEvent(data){
        const event = new CustomEvent('custom-change', {
            detail: data,
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    }
}


window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID);