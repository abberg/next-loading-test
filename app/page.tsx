import {fetchData} from './fetchData';

export default async function Home() {
  const response = await fetchData();
  console.log(response)
  return (
    <div className="min-h-screen grid place-items-center">
      Hello World, {response.data.description}
    </div>
  );
}
