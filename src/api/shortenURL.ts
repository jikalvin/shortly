import axios, { AxiosResponse, AxiosError } from 'axios';

interface ShortenUrlRequest {
  url: string;
}

interface ShortenUrlResponse {
  url: string;
  key: string;
  shrtlnk: string;
}

interface ErrorResponse {
  message: string;
}

const API_URL = process.env.REACT_APP_BASE_URL || 'https://shrtlnk.dev/api/v2/link';

const shortenUrl = async (longUrl: string): Promise<ShortenUrlResponse> => {
  const requestData: ShortenUrlRequest = { url: longUrl };

  try {
    const response: AxiosResponse<ShortenUrlResponse> = await axios.post(API_URL, requestData, {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY || '', // Make sure to replace with your API key
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      // Handle specific HTTP errors if needed
      if (axiosError.response?.status === 400 || axiosError.response?.status === 500) {
        console.error('API Error:', axiosError.response.data.message);
        throw new Error('Failed to shorten URL: ' + axiosError.response.data.message);
      }
    }

    // Handle other errors or unexpected scenarios
    console.error('Unexpected Error:', error);
    throw new Error('Failed to shorten URL');
  }
};

export default shortenUrl;
