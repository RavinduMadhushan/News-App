const url =
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=24e378c993ac4704b6cdd4f1ba3ebbab";

const urlSport =
  "https://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=24e378c993ac4704b6cdd4f1ba3ebbab";

const urlLocal =
  "https://newsapi.org/v2/top-headlines?country=au&apiKey=24e378c993ac4704b6cdd4f1ba3ebbab";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

export async function getSportsNews() {
  let result = await fetch(urlSport).then(response => response.json());
  return result.articles;
}

export async function getLocalNews() {
  let result = await fetch(urlLocal).then(response => response.json());
  return result.articles;
}
