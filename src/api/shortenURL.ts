import axios, { AxiosResponse, AxiosError } from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL || 'https://shrtlnk.dev/api/v2/link';
const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your actual API key

const shortenUrl = async (longUrl: string) => {
  try {
    const response = await axios.post(
      API_URL,
      { url: longUrl },
      { headers: { 'Content-Type': 'application/json', 'api-key': API_KEY } }
    );

    console.log(response);
    return response;

  } catch (error) {
    // Handle errors here, e.g., log them or throw a custom error
    throw new Error('Failed to shorten URL: ' + error);
  }
};


export default shortenUrl;