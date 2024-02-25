import React, { useEffect, useState } from 'react';
import Markdown from 'marked-react';
import filePath from '../../assets/QnA-css/CSS-Questions.md';

const CssQnAList = ( { markdown }) => {

    // const [text, setText] = useState('')

    // useEffect(() => {
    //     fetch(markdown)
    //     .then((response) => response.text())
    //     .then((md) => {
    //         setText(md)
    //     })
    // }, [markdown])

    return (
        <div className="col-md-8 col-lg-10 mx-auto p-3 markdown_wrapper">
            <Markdown>
                { markdown }
            </Markdown>
        </div>
    )
};

export default CssQnAList;