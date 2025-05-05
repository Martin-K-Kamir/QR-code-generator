const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

const showSpinner = () => {
    document.querySelector("#spinner").classList.remove("hidden");
};

const hideSpinner = () => {
    document.querySelector("#spinner").classList.add("hidden");
};

const clearUI = () => {
    qr.innerHTML = "";
    document.querySelector("#save-link")?.remove();
};

const createSaveButton = saveUrl => {
    const link = document.createElement("a");
    link.id = "save-link";
    link.classList =
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
    link.href = saveUrl;
    link.download = "qrcode";
    link.innerText = "Save QR Code";

    document.querySelector("#generated").appendChild(link);
};

const genereateQRCode = (url, size) => {
    const qrcode = new QRCode(qr, {
        text: url,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
};

const onGenerateSubmit = e => {
    e.preventDefault();

    const url = document.querySelector("#url").value;
    const size = document.querySelector("#size").value;

    if (url === "") {
        alert("Please enter a URL");
        return;
    }

    clearUI();

    genereateQRCode(url, size);
    const saveUrl = qr.querySelector("img").src;
    createSaveButton(saveUrl);
};

form.addEventListener("submit", onGenerateSubmit);
