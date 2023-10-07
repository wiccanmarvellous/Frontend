const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');

const generateQR = () => {
    if (qrText.value.trim().length > 0) {
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrText.value;
    imgBox.classList.add('show-img');
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}