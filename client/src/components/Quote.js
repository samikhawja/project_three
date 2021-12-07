import React, { useEffect, useState } from 'react';
import axios from "axios";

const myStyle = {
    color: "#6D757D",
};

export default function Quote() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    async function fetchRandomQuote() {
    try {
        const quoteObject = await axios.get("https://api.quotable.io/random?tags=wisdom");
        setQuote(quoteObject.data);
    } catch (error) {
    }
    }

    return (
    <div className="text-center py-6 col-8 offset-2">
        <div className="py-4">
            <div className="py-1">
                <h4>
                    {' '}{quote.content}{' '}
                </h4>
            </div>
            <div className="py-1">
                <h5 style={myStyle}>
                    {quote.author}
                </h5>
            </div>
        </div>
    </div>
    );
}