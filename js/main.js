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
pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
  pdfDoc = pdfDoc_;
  console.log(pdfDoc);

  document.querySelector("#page-count").textContent = pdfDoc.numPages;

  renderPage(pageNum);
});
