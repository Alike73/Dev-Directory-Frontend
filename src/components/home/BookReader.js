import { useEffect, useRef } from 'react';

const BookReader = () => {

    const containerRef = useRef(null);
	
	const myPdfDocument = 'http://tinyurl.com/2d8vafel'

	useEffect(() => {
		const container = containerRef.current;
		let PSPDFKit;

		(async function () {
		PSPDFKit = await import('pspdfkit');
		PSPDFKit.unload(container);

		PSPDFKit.load({
			container,
			document: myPdfDocument,
			baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
		});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

    return (
        <div
		ref={containerRef}
		style={{ width: '100%', height: '100%' }}
		/>
    )
};

export default BookReader;