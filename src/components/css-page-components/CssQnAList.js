import React, { useEffect, useState } from 'react';
import Markdown from 'marked-react';
import filePath from '../../assets/QnA-css/CSS-Questions.md';

const CssQnAList = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        fetch(filePath)
        .then((response) => response.text())
        .then((md) => {
            setText(md)
        })
    }, [])

    return (
        <div className="col-md-7 col-lg-8 mx-auto p-3 markdown_wrapper">
            <Markdown>
                { text }
            </Markdown>
        </div>
    )
};

export default CssQnAList;