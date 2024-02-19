import React, { useState } from "react";
import api from "../api/api";
import axios from "axios";
import shortenUrl from "../api/shortenURL";

const Form: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState<string>('');
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const baseURL = process.env.REACT_APP_BASE_URL || "";
    const config = {
        headers: {
            'api-key': process.env.REACT_APP_API_KEY,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
    }

    console.log("Variables", baseURL, config);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // const response = await api.post('/link', { url: originalUrl });
            const response  = await shortenUrl(originalUrl)
            setShortenedUrl(response.data);
            console.log("Response: ", response);
            alert(`Shortened url is ${shortenedUrl}`)
        } catch (error) {
            console.error('Error shortening URL:', error);
            alert(`an error occured ${error}`)
        }
    };

    return (
        <form className="section-2" onSubmit={handleSubmit}>
            <div className="url-input-block">
                <input 
                    type="text" 
                    className="url-input" 
                    placeholder="Shorten a link here..."
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />
                <em className="error-msg"></em>
            </div>
            <button type="submit" className="url-button cyan-btn">Shorten It!</button>
        </form>
    );
};

export default Form;
