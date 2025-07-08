
interface FetchDataResponse {
  status: number
}

export const fetchData = async (): Promise<FetchDataResponse> => {
  const response = await fetch('https://fakeresponder.com/?sleep=3000');
  const data = await response.json();
  
  return {
    status: data.params.status
  };
}