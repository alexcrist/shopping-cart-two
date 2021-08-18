const API_BASE = 'http://localhost:1337';

const api = {
  getInventory: async () => {
    const rawData = await fetch(`${API_BASE}/products`);
    const data = await rawData.json();
    return data;
  }
};

export default api;