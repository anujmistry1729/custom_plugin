var templateCell_$PLUGIN_ID = document.createElement("template");

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

var templateEditor_$PLUGIN_ID = document.createElement("template");
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
.modal {
    width: 400px;
    position: absolute;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.modal-image {
    max-width: 100%;
    height: auto;
    margin: 0 auto 10px auto;
}

.url-input {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.save-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
}

.save-button:hover {
    background-color: #2980b9;
}

.loader {
    animation: spin 1s linear infinite;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -5px;
  }
  
  @keyframes spin {
    0% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    6.25% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    12.5% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    18.75% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    25% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    31.25% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    37.5% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
    43.75% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px #000, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px transparent;
    }
    50% {
      box-shadow: 
        0px -30px transparent, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px #000, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    56.25% {
      box-shadow: 
        0px -30px #000, 
        10px -30px transparent, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px #000, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    62.5% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px transparent, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px #000, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    68.75% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px transparent, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px #000, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    75% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px transparent, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px #000, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    81.25% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px transparent, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px #000, 
        -20px -20px #000,
        -10px -30px #000;
    }
    87.5% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px transparent, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px #000,
        -10px -30px #000;
    }
    93.75% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px transparent, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px #000;
    }
    100% {
      box-shadow: 
        0px -30px #000, 
        10px -30px #000, 
        20px -20px #000, 
        30px -10px #000, 
        30px 0px #000, 
        30px 10px #000, 
        20px 20px #000, 
        10px 30px #000, 
        0px 30px transparent, 
        -10px 30px transparent, 
        -20px 20px transparent, 
        -30px 10px transparent, 
        -30px 0px transparent, 
        -30px -10px transparent, 
        -20px -20px transparent,
        -10px -30px transparent;
    }
  }
  
</style>

<div class="modal-overlay">
    <div class="modal">
        <!-- Loader -->
        <div class="loader" id="loader"></div>
        <img id="modal-image" alt="Image" class="modal-image">
        <input type="url" id="url-input" class="url-input" placeholder="Enter URL">
        <button id="save-button"   class="save-button">Save URL</button>
    </div>
</div>

`;

//empty as we do not require a config
class OuterbasePluginConfig_$PLUGIN_ID {
  constructor(object) {}

  connectedCallback() {}
}

//PluginCell
class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {

  //initialize plugin config with empty values
  config = new OuterbasePluginConfig_$PLUGIN_ID({});

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true));
  }

  connectedCallback() {
   

    var containerImageUrl = this.shadow.getElementById("container-image-url");
    containerImageUrl.innerHTML = this.getAttribute("cellValue");

    if (containerImageUrl) {
    containerImageUrl.addEventListener("click", () => {
            this.callCustomEvent({
            action: "onedit",
          value: containerImageUrl.innerText,
        });
    });
    }
  }

  callCustomEvent(data) {
    const event = new CustomEvent("custom-change", {
      detail: data,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }
}

class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true));

    this.config = new OuterbasePluginConfig_$PLUGIN_ID(
      JSON.parse(this.getAttribute("configuration"))
    );
  }

  connectedCallback() {
    var modalImage = this.shadow.getElementById("modal-image");
    var urlInputEl = this.shadow.getElementById("url-input");
    const loader = this.shadow.getElementById("loader");
    const saveButton = this.shadow.getElementById("save-button");

    modalImage.onload = function(){
        hideLoader()
    }

    if (modalImage && urlInputEl) {
      modalImage.src = this.getAttribute("cellValue");
      urlInputEl.value = this.getAttribute("cellValue");
    }

    // Function to show the loader and hide the image
    function showLoader() {
      loader.style.display = "block";
      modalImage.style.display = "none";
    }

    // Function to hide the loader and show the image
    function hideLoader() {
      loader.style.display = "none";
      modalImage.style.display = "block";
    }

    // Event listener for the "Save URL" button
    saveButton.addEventListener("click", function () {
      const imageUrl = urlInputEl.value;
      showLoader(); // Show the loader before loading the image

      // Load the image
      const img = new Image();
      img.onload = function () {
        modalImage.src = imageUrl;
        console.log("Image loaded")
        hideLoader(); // Hide the loader once the image is loaded
      };
      img.src = imageUrl;
    });
  }
}

window.customElements.define(
  "outerbase-plugin-cell-$PLUGIN_ID",
  OuterbasePluginCell_$PLUGIN_ID
);
window.customElements.define(
  "outerbase-plugin-editor-$PLUGIN_ID",
  OuterbasePluginEditor_$PLUGIN_ID
);
