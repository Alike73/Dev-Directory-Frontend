

const BookTextContent = ({ text }) => {

    return (
        <div>
            <h2 className='mb-3'>Description</h2>
            <p className="desc">
                { text }
            </p>
        </div>
    )
};

export default BookTextContent;