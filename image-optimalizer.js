const sharp = require("sharp");
const fs = require("fs");

const path = "./public/assets/images";

function checkFile(file) {
  if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
    const files = fs.readdirSync(`${path}/${file}`);
    files.map((f) => checkFile(`${file}/${f}`));
  } else {
    if (/.+(jpg|jpeg|png)$/.test(`${file}`.toLowerCase())) {
      sharp(`${path}/${file}`)
        .webp({ quality: 75, effort: 6 })
        .withMetadata({
          exif: {
            IFD0: {
              Copyright: "Diecezko.cz",
            },
          },
        })
        .toFile(`${path}/${file}`.replace(/\.(jpg|jpeg|png)$/, ".webp"))
        .then((info) => {
          console.log(info);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
}

const files = fs.readdirSync(path);
files.map((file) => checkFile(file));
