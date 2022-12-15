const input = document.querySelector("#input");

const size = document.querySelector("#size");

const color = document.querySelector("#color_code");

const bg_color = document.querySelector("#bg_color_code");

const image = document.querySelector("img");

const downloadImg = document.querySelector("a");

let regex = /(([a-f\d]){3,6})/;

let data = "";

let qrSize = "";

let qrColor = "";

let qrBg = "";

input.addEventListener("keyup", (e) => {
  data = e.target.value;
});

size.addEventListener("change", (e) => {
  qrSize = e.target.value;
});

color.addEventListener("keyup", (e) => {
  qrColor = e.target.value;
});

bg_color.addEventListener("keyup", (e) => {
  qrBg = e.target.value;
});

input.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    let data =
      e.target.value === ""
        ? (document.querySelector("small").style.display = "block")
        : (document.querySelector("small").style.display = "none") &&
          encodeURI(e.target.value);

    try {
      let code = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${data}&amp;size=${qrSize}x${qrSize}&color=${qrColor}&bgcolor=${qrBg}`
      ).then((res) => {
        return res;
      });

      image.src =
        e.target.value === ""
          ? "https://api.qrserver.com/v1/create-qr-code/?data=hello%20wolrd&amp;size=200x200&color=fff&bgcolor=00288a"
          : code.url;

      downloadImg.href = code.url;
    } catch (err) {
      console.log(err);
    }
  }
});
