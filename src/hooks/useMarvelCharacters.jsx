import { useEffect, useState } from "react";
import axios from "axios";

function getUrl() {
  return `${import.meta.env.VITE_MARVEL_API_URL}/characters`;
}

function getUrlParams() {
  return {
    ts: import.meta.env.VITE_MARVEL_API_TIMESTAMP,
    apikey: import.meta.env.VITE_MARVEL_API_KEY,
    hash: import.meta.env.VITE_MARVEL_API_HASH,
  };
}

export function useMarvelCharacters() {
  const [isLoading, toggleLoading] = useState(false);
  const [hasError, toggleError] = useState(false);
  const [error, setError] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = getUrl();
      const params = getUrlParams();

      try {
        toggleLoading(true);
        toggleError(false);
        setError("");
        const response = await axios.get(url, { params });
        console.log({ data: response.data });
        setCharacters(response?.data?.data?.results ?? []);
      } catch (error) {
        toggleError(true);
        setError(error.message);
        console.log(error);
      } finally {
        toggleLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { isLoading, hasError, error, characters };
}
