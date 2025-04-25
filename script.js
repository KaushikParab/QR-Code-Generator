// const URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const input = document.querySelector(".inp");
const button = document.querySelector(".btn");
const QR = document.querySelector(".qr");

const process = () => {
    let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    QR.src = URL;
    QR.style.visibility = "visible";
    document.getElementById('downloadLink').href = URL;
};
let x=input.value;
console.log(x);
button.addEventListener("click", process);

