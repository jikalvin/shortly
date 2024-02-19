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
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const check = isUrl(originalUrl)
            if(!check){
                setError(true);
                setMessage('Invalide url provided');
                return;
            }
            if(originalUrl === ''){
                setError(true);
                setMessage('The input field is empty');
                return;
            }
            const response = await shortenUrl(originalUrl);
            setShortenedUrl(response.shrtlnk);

            const newSavedUrl: SavedUrl = {
                original: originalUrl,
                shortened: response.shrtlnk,
            };

            addSavedUrl(newSavedUrl);

            console.log("Response: ", response);
        } catch (error) {
            console.error('Error shortening URL:', error);
        } finally {
            setLoading(false);
        }

        function isUrl(input: string): boolean {
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
            return urlRegex.test(input);
        }

        console.log(shortenedUrl)
    };

    return (
        <form className="section-2" onSubmit={handleSubmit}>
            <div className="url-input-block">
                <input
                    type="text"
                    className={`url-input ${error && 'border-red'}`}
                    placeholder="Shorten a link here..."
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />
                <em className={`error-msg ${message && 'shown'}`}>{message != '' && message}</em>
            </div>
            <button type="submit" className={`url-button cyan-btn`} disabled={loading}>
                {loading ? 'Loading...' : 'Shorten It!'}
            </button>
        </form>
    );
};

export default Form;
