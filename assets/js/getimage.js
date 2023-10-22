const urlParams = new URLSearchParams(window.location.search);
const param1Value = urlParams.get("svg");
console.log(param1Value);

        if (param1Value !== null) {
            console.log("param1: " + param1Value);

            // Construct the image URL based on the parameter value
            const imageUrl = `assets/img/${param1Value}.svg`; // Assuming the images are in a folder named "images"

            // Create an image element and set its source
            const textElement = document.createElement("div"); // You can use "p" for a paragraph element if you prefer
            textElement.textContent = '<img src ="https://jewishlewish.github.io/Fullmoon/assets/img/Mewgem.svg">';
            
            // Replace "Your text goes here" with your desired text


            // Append the image to the body or any other element
            document.body.appendChild(textElement);
        }