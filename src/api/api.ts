const PROXY = 'https://api.allorigins.win/raw?url=';
const API_URL = 'https://67b404ba392f4aa94fa8f865.mockapi.io/';

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(PROXY + encodeURIComponent(API_URL + url));
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};