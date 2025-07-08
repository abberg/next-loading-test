interface University {
  name: string;
  country: string;
  web_pages: string[];
  domains: string[];
}

interface FetchDataResponse {
  universities: University[];
  count: number;
  country: string;
}

export const fetchData = async (): Promise<FetchDataResponse> => {
  const response = await fetch('http://universities.hipolabs.com/search?country=United+States');
  const universities = await response.json();
  
  return {
    universities,
    count: universities.length,
    country: 'United States'
  };
}