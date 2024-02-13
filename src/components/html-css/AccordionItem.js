import AccordionImage from "./AccordionImage";
import EditDeleteQnABtn from "./EditDeleteQnABtn";


const AccordionItem = ({ question, answer, collapseId }) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${ collapseId }`} 
                    aria-expanded="false" 
                    aria-controls={ collapseId }
                >
                    { question }
                </button>
            </h2>
            <div 
                id={ collapseId } 
                className="accordion-collapse collapse" 
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <p>{ answer }</p>
                    <AccordionImage />
                    <EditDeleteQnABtn />
                </div>
            </div>
        </div>
    )
};

export default AccordionItem;