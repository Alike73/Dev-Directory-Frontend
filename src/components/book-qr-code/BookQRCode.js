import QRCode from "react-qr-code";

const BookQRCode = () => {

    const qrValue = 'http://tinyurl.com/2d8vafel';
    // Грокаем алгоритмы, чтобы получить свой URL для книги по ID сокращенная ссылка

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