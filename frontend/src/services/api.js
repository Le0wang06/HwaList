const API_URL = 'http://localhost:3001';

export const fetchAllManga = async () => {
  try {
    const response = await fetch(`${API_URL}/manga`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching manga:', error);
    throw error;
  }
};

export const fetchMangaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/manga/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching manga with id ${id}:`, error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const updateManga = async (id, updatedManga) => {
  try {
    const response = await fetch(`${API_URL}/manga/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedManga),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating manga with id ${id}:`, error);
    throw error;
  }
};

export const addManga = async (newManga) => {
  try {
    const response = await fetch(`${API_URL}/manga`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newManga),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding new manga:', error);
    throw error;
  }
};

export const deleteManga = async (id) => {
  try {
    const response = await fetch(`${API_URL}/manga/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true;
  } catch (error) {
    console.error(`Error deleting manga with id ${id}:`, error);
    throw error;
  }
}; 