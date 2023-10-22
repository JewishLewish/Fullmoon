const urlParams = new URLSearchParams(window.location.search);
const param1Value = urlParams.get("svg");

if (param1Value !== null) {
  // Construct the SVG file path based on the parameter value
  const svgFilePath = `assets/img/${param1Value}.svg`; // Assuming the SVG files are in a folder named "assets/img"

  // Fetch the SVG file
  fetch(svgFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch SVG file: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(svgContent => {
      // Create an <svg> element and set its content to the fetched SVG content
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.innerHTML = svgContent;

      // Append the <svg> element to the body or any other element
      document.body.appendChild(svg);
    })
    .catch(error => {
      console.error(error);
    });
}
