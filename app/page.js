import { client } from '../sanity/client';
const query = `*[_type == "homepage"][0]{headline}`;
async function getHeadline() {
  const data = await client.fetch(query);
  return data;
}
export default async function HomePage() {
  const data = await getHeadline();
  if (!data) {
    return <main><h1>No headline found. Check Sanity content and API settings.</h1></main>;
  }
  return ( <main><h1>{data.headline}</h1></main> );
}