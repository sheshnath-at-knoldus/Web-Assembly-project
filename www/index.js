import * as wasm from "image-manipulator";


const imageInput = document.getElementById("imageInput");
const displayedImage = document.getElementById("outputImage");
const displayedImage2 = document.getElementById("outputImage2");
document.getElementById("downloadButton").style.display = "none";

var uint8Array;


imageInput.addEventListener("change", function(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      displayedImage.src = e.target.result;
       uint8Array = dataUrlToUint8Array(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  }
});

const initial_image= uint8Array;

// Function to convert a Data URL to Uint8Array
function dataUrlToUint8Array(dataUrl) {
  const base64String = dataUrl.split(',')[1];
  const binaryString = window.atob(base64String);
  const length = binaryString.length;
  const uint8Array1 = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    uint8Array1[i] = binaryString.charCodeAt(i);
  }
  return uint8Array1;
}

document.getElementById("greenButton").addEventListener("click", function() {
  if (wasm.green_image_processor && uint8Array) {
     const modifiedArray = wasm.green_image_processor(uint8Array);
     // Convert the modified array to a Data URL
     const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
     // Update the displayedImage.src with the modified Data URL
     displayedImage.src = modifiedDataUrl;
    }
});



document.getElementById("redButton").addEventListener("click", function() {
   if (wasm.red_image_processor && uint8Array) {
      const modifiedArray = wasm.red_image_processor(uint8Array);
      // Convert the modified array to a Data URL
      const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
      // Update the displayedImage.src with the modified Data URL
      displayedImage.src = modifiedDataUrl;
     }
});



document.getElementById("blueButton").addEventListener("click", function() {
    if (wasm.blue_image_processor && uint8Array) {
        const modifiedArray = wasm.blue_image_processor(uint8Array);
        // Convert the modified array to a Data URL
        const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
        // Update the displayedImage.src with the modified Data URL
        displayedImage.src = modifiedDataUrl;
       }
 });


 document.getElementById("increase Button").addEventListener("click", function() {
     if (wasm.blue_image_processor && uint8Array) {
         const modifiedArray = wasm.inc_brightness_image_processor(uint8Array);
         // Convert the modified array to a Data URL
         const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
         // Update the displayedImage.src with the modified Data URL
         displayedImage.src = modifiedDataUrl;
        }
  });



document.getElementById("grayscaleButton").addEventListener("click", function() {
   if (wasm.grayscale_image_processor && uint8Array) {
       const modifiedArray = wasm.grayscale_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});



document.getElementById("flip horizontal Button").addEventListener("click", function() {
   if (wasm.flip_horizontal_image_processor && uint8Array) {
       const modifiedArray = wasm.flip_horizontal_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});



document.getElementById("flip vertical Button").addEventListener("click", function() {
   if (wasm.flip_vertical_image_processor && uint8Array) {
       const modifiedArray = wasm.flip_vertical_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("blur Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.blur_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("oceanic Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.oceanic_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("golden Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.golden_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("seagreen Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.seagreen_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("vintage Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.vintage_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("bluechrome Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.bluechrome_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("pastelpink Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.pastelpink_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("lofi Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.lofi_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("obsidian Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.obsidian_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});


document.getElementById("firenze Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.firenze_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("draw text border Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.draw_text_border_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("dramatic Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.dramatic_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("perfume Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.perfume_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("twenties Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.twenties_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("liquid Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.liquid_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("draw text Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.draw_text_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});


document.getElementById("sharp_image Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.sharpen_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});

document.getElementById("detect_horizontal Button").addEventListener("click", function() {
   if (wasm.blur_image_processor && uint8Array) {
       const modifiedArray = wasm.detect_horizontal_image_processor(uint8Array);
       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
       // Update the displayedImage.src with the modified Data URL
       displayedImage.src = modifiedDataUrl;
      }
});




document.getElementById("Crop Button").addEventListener("click", function() {
   if (wasm.crop_image_processor && uint8Array) {
       const modifiedArray = wasm.crop_image_processor(uint8Array);

       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);

      // Update the displayedImage.src with the modified Data URL
      displayedImage2.src = modifiedDataUrl;
      // Enable the download button
      const downloadButton = document.getElementById("downloadButton");
      downloadButton.href = modifiedDataUrl;
      downloadButton.style.display = "inline";

      }
});




document.getElementById("Resize Button").addEventListener("click", function() {
   if (wasm.resize_image_processor && uint8Array) {
       const modifiedArray = wasm.resize_image_processor(uint8Array);

       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);

      // Update the displayedImage.src with the modified Data URL
      displayedImage2.src = modifiedDataUrl;

      // Enable the download button
      const downloadButton = document.getElementById("downloadButton");
      downloadButton.href = modifiedDataUrl;
      downloadButton.style.display = "inline";

      }
});


document.getElementById("Compress Button").addEventListener("click", function() {
   if (wasm.compress_image_processor && uint8Array) {
       const modifiedArray = wasm.compress_image_processor(uint8Array);

       // Convert the modified array to a Data URL
       const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);

      // Update the displayedImage.src with the modified Data URL
      displayedImage2.src = modifiedDataUrl;

      // Enable the download button
      const downloadButton = document.getElementById("downloadButton");
      downloadButton.href = modifiedDataUrl;
      downloadButton.style.display = "inline";

      }
});




document.getElementById("resetButton").addEventListener("click", function() {
   const modifiedArray = uint8Array;
   // Convert the modified array to a Data URL
   const modifiedDataUrl = uint8ArrayToDataUrl(modifiedArray);
   // Update the displayedImage.src with the modified Data URL
   displayedImage.src = modifiedDataUrl;
});


function uint8ArrayToDataUrl(uint8Array, mimeType = "image/jpeg") {
  const blob = new Blob([uint8Array], { type: mimeType });
  const dataUrl = URL.createObjectURL(blob);
  return dataUrl;
}
