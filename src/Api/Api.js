export async function API({ method = 'GET', isJson = false, body, endpoint, token }) {
  try {
    const headers = {
      ...(isJson && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` })
    };
    const options = {
      method: method,
      headers,
      body: isJson ? JSON.stringify(body) : body
    };

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw data.message;
    }

    return data;
  } catch (error) {
    throw error;
  }
}
