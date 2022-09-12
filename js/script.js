(function () {


    $('#btn-read-barcode').on('click', function (e) {
        readBarcode();
    });

    async function readBarcode() {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 500,
                height: 500
            },
            audio: false
        });
        const videoEl = document.querySelector("#barcode");
        videoEl.srcObject = stream;
        await videoEl.play();

        const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
        window.setInterval(async () => {
            console.log("realizou leitura");
            const barcodes = await barcodeDetector.detect(videoEl);
            if (barcodes.length <= 0) return;
            alert(barcodes.map(barcode => barcode.rawValue));
        }, 1000)

    }

})();