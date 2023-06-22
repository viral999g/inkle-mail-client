export function getRequest(url) {
  return fetch(url);
}

export function getJson(res) {
  return res.json();
}
