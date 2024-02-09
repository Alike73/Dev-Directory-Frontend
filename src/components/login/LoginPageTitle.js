import React, { useState, useEffect } from 'react';

const LoginPageTitle = () => {

    const finalWord = "Dev Hub";
    const letters = "ABCDEFG";
    const [text, setText] = useState(finalWord.replace(/[A-M]/g, () => letters[Math.floor(Math.random() * 7)]));

    useEffect(() => {
        let interval = null;
        let iteration = 0;

        interval = setInterval(() => {
        setText(prevText => prevText
            .split("")
            .map((_, index) => {
            if(index < iteration) {
                return finalWord[index];
            }
            return letters[Math.floor(Math.random() * 7)];
            })
            .join(""));

        if(iteration >= finalWord.length){ 
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
        }, 130);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="fw-bold m-0 p-3">
            { text }
        </h1>
    )
};

export default LoginPageTitle;