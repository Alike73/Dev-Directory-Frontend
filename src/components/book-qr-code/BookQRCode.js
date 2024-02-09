import QRCode from "react-qr-code";

const BookQRCode = () => {

    const qrValue = 'https://github.com/Alike73';

    return (
        <div className="book_qr_code_wrapper">
            <QRCode
            size={256}
            className="qr_code"
            value={qrValue}
            viewBox={`0 0 256 256`}
            />
        </div>
    )
};

export default BookQRCode;