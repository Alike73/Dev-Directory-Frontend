import React, { useState, useEffect } from "react";
import dataHtmlCssAccordion from "../../data/DataHtmlCssAccordion";
import AccordionItem from "./AccordionItem";

const HtmlCssAccordion = () => {

    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        setQuiz(dataHtmlCssAccordion)
    }, [])

    return (
        <div className="accord_section">
            <div className="container">
                <div className="accordion" id="accordionExample">
                    { quiz.map((item) => <AccordionItem 
                        key = { item.id } 
                        question = { item.question }  
                        answer = { item.answer }
                        collapseId = { item.collapseId } 

                    /> )}
                </div>
            </div>
        </div>
    )
};

export default HtmlCssAccordion;