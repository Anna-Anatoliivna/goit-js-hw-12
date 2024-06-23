export default function getImages(url) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}
