import React, { useState } from 'react';
import "../App.css"

interface Props {
    text: string;
    maxLength: number;
}

const TruncateText: React.FC<Props> = ({ text, maxLength }) => {
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    return <p>{truncatedText}</p>;
};

const CopyableLink: React.FC<{ label: string; url: string }> = ({ label, url }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        // Logic to copy the URL to the clipboard
        navigator.clipboard.writeText(url);
        setIsCopied(true);
    };

    return (
        <div className="result">
            <div className="url-container">
                <TruncateText text={label} maxLength={30} />

                <div className="results">
                    <p className="url-text">{url}</p>
                    <button onClick={handleCopyClick} className={!isCopied ? 'copied' : 'copy-btn'}>
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CopyableLink;
