

const BookTextContent = ({ title, text }) => {

    return (
        <div>
            <h2 className='mb-3'>
                { title }
            </h2>
            <p className="desc">
                { text }
            </p>
        </div>
    )
};

export default BookTextContent;