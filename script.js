function detectFileType() {
    let fileInput = document.getElementById("fileInput").files[0];
    if (fileInput) {
        let fileType = fileInput.name.split('.').pop();
        document.getElementById("fromFormat").value = fileType.toUpperCase();
    }
}

function convertFile() {
    let fileInput = document.getElementById("fileInput").files[0];
    let fromFormat = document.getElementById("fromFormat").value;
    let toFormat = document.getElementById("toFormat").value;
    let outputDiv = document.getElementById("output");

    if (!fileInput) {
        outputDiv.innerHTML = "<p style='color: red;'>Please select a file.</p>";
        return;
    }

    outputDiv.innerHTML = `<p>Converting <b>${fileInput.name}</b> from <b>${fromFormat}</b> to <b>${toFormat}</b>...</p>`;

    setTimeout(() => {
        outputDiv.innerHTML = `<p style="color: green;">Conversion completed! <a href="#">Download ${fileInput.name.split('.')[0]}.${toFormat}</a></p>`;
    }, 2000);
}
