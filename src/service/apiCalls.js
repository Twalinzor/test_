const API_URL = "http://localhost:5000";

export async function getDesigns() {
  const response = await fetch(`${API_URL}/designs`);
  const data = await response.json();
  return data;
}

export async function getSetouts() {
  const response = await fetch(`${API_URL}/setouts`);
  const data = await response.json();
  return data;
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
}
