export async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
}
