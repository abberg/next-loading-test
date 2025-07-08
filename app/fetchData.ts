
interface FetchDataResponse {
  status: number
}

export const fetchData = async (): Promise<FetchDataResponse> => {
  const response = await fetch('https://fakeresponder.com/?sleep=5000');
  const data = await response.json();
  console.log(data)
  return {
    status: data.params.status
  };
}