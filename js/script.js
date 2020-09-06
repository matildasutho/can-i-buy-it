type="text/javascript"
      // place your images in this array
      var random_images_array = [
        "a_window.png",
        "an_idea.png",
        "mars_bar.png",
        "tesla.png",
        "cat_tissue.png",
        "empty_wallet.png",
        "uranium.png",
        "tiny_fridge.png",
        "funghi.png",
        "canary.png",
      ];

      function getRandomImage(imgAr) {
        var num = Math.floor(Math.random() * imgAr.length);

        // Instead of constructing the <img> element as a string and writing to the document,
        // you can alternatively create an element like this and then just set the `src` attribute.
        var imageElement = document.createElement("img");
        // I've simplified the path logic here a little bit
        var imagePath = "images/" + imgAr[num];
        imageElement.src = imagePath;

        // This image container was created because there needs to be an 'anchor' in the body to add the images
        // into, and also for keeping track of any previously rendered images
        var imageContainer = document.getElementById("imageContainer");
        if (imageContainer.firstChild) {
          // This will remove the previously inserted image, if there is one. When this function is first run,
          // the image container will be empty
          imageContainer.removeChild(imageContainer.firstChild);
        }
        imageContainer.appendChild(imageElement);
      }

      // Rather than having to write `<script>` elements at the end of the document in order to access elements from the DOM,
      // you can setup event listeners like this, which will be invoked when the DOM is loaded. This means that functions like
      // document.getElementById('buy') can function correctly, because the DOM has loaded so you know that the Buy button is available.
      document.addEventListener("DOMContentLoaded", function () {
        // This will render the image on the page load
        getRandomImage(random_images_array);

        // Now we attach an event listener to the button, so that when it's clicked it fires the `getRandomImage` function again
        var button = document.getElementById("buy");

        // Not sure if you have used anonymous functions before but this is a nice way to define the callback function for the click event,
        // making sure that getRandomImage is fired with `random_images_array` as its argument.
        button.onclick = function () {
          getRandomImage(random_images_array);
        };

        /**
         * button.onclick = getRandomImage
         * You could write it like this, but it won't work because the function needs that array argument passed to it. To get it to work,
         * you could remove the argument from that function entirely and just 'bake' the image array into the variables inside of the function,
         * although the way you have it now is great because the function can be reused really easily with any array of image paths.
         */
      });