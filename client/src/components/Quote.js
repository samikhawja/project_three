import React, { useEffect, useState } from 'react';
import axios from "axios";

require('dotenv').config();

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
            <h4>
                {' '}{quote.content}{' '}
            </h4>
            <h5 style={myStyle}>
                {quote.author}
            </h5>
        </div>
    </div>
    );
}