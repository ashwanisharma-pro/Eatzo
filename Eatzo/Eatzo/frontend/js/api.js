const API_BASE_URL = "http://localhost:5000/api";

const API = {
  async get(endpoint) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      return await res.json();
    } catch (error) {
      console.error("GET API Error:", error.message);
      return null;
    }
  },

  async post(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error("Failed to send data");
      return await res.json();
    } catch (error) {
      console.error("POST API Error:", error.message);
      return null;
    }
  },

  async put(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error("Failed to update data");
      return await res.json();
    } catch (error) {
      console.error("PUT API Error:", error.message);
      return null;
    }
  },

  async delete(endpoint) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE"
      });

      if (!res.ok) throw new Error("Failed to delete data");
      return await res.json();
    } catch (error) {
      console.error("DELETE API Error:", error.message);
      return null;
    }
  }
};