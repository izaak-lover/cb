const globby = require("globby");
const { convertFile } = require("convert-svg-to-png");

(async () => {
  // find all .svg files in the current directory
  const svgFiles = await globby("*.svg");
  console.log(svgFiles);
  for (let i = 0; i < svgFiles.length; i++) {
    const file = svgFiles[i];
    console.log(file);
    const outputFilePath = await convertFile(file);

    console.log(outputFilePath);
  }
  //=> "/path/to/my-image.png"
})();
