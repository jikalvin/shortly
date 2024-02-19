import React, { useEffect, useState } from "react";
import shortenUrl from "../api/shortenURL";
import { useAppContext } from "../store/AppContext";

interface SavedUrl {
    original: string;
    shortened: string;
}

const Form: React.FC = () => {
    const { addSavedUrl } = useAppContext();
    const [originalUrl, setOriginalUrl] = useState<string>('');
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await shortenUrl(originalUrl);
            setShortenedUrl(response.shrtlnk);

            const newSavedUrl: SavedUrl = {
                original: originalUrl,
                shortened: response.shrtlnk,
            };

            addSavedUrl(newSavedUrl);

            console.log("Response: ", response);
            alert(`Shortened URL is ${shortenedUrl}`);
        } catch (error) {
            console.error('Error shortening URL:', error);
        } finally {
            setLoading(false);
        }

        console.log(shortenedUrl)
    };

    return (
        <form className="section-2" onSubmit={handleSubmit}>
            <div className="url-input-block">
                <input
                    type="text"
                    className="url-input"
                    placeholder="Shorten a link here..."
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />
                <em className="error-msg"></em>
            </div>
            <button type="submit" className="url-button cyan-btn" disabled={loading}>
                {loading ? 'Loading...' : 'Shorten It!'}
            </button>
        </form>
    );
};

export default Form;
