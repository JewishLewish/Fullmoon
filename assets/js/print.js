const urlParams = new URLSearchParams(window.location.search);
const param1Value = urlParams.get("svg");
console.log(param1Value);

        if (param1Value !== null) {
            console.log("param1: " + param1Value);

            // Construct the image URL based on the parameter value
            const imageUrl = `${param1Value}`; // Assuming the images are in a folder named "images"

            // Create an image element and set its source
            const image = document.createElement("img");
            image.src = imageUrl;

            // Append the image to the body or any other element
            document.body.appendChild(image);
        }