import {fetchData} from './fetchData';

export default async function Home() {
  const response = await fetchData();
  console.log(response)
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Universities in {response.country}</h1>
        <p className="text-lg">Found {response.count} universities</p>
        {response.universities.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">First university: {response.universities[0].name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
