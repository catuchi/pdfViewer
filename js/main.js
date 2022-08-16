const url = "../docs/pdf995.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector("#pdf-render"),
  ctx = canvas.getContext("2d");

// Render the page
function renderPage(num) {}

// Get Document
pdfJsLib.getDocument(url).promise.then((pdfDoc) => {});
