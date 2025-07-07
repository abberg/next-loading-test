interface FetchDataResponse {
  message: string;
  timestamp: string;
  data: {
    id: number;
    name: string;
    description: string;
  };
}

export const fetchData = (): Promise<FetchDataResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Data fetched successfully!",
        timestamp: new Date().toISOString(),
        data: {
          id: 1,
          name: "Sample Data",
          description: "This is simulated data from the server"
        }
      });
    }, 5000); // 5 second delay to simulate server response
  });
}