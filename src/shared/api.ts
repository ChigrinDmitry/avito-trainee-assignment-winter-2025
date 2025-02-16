import axios from 'axios';

const API_URL = 'http://localhost:3000/items';

export interface Item {
  id?: number;
  name: string;
  description: string;
  location: string;
  type: 'Недвижимость' | 'Авто' | 'Услуги';
  image?: string;
}

export const getItems = async (params?: any): Promise<Item[]> => {
  const response = await axios.get<Item[]>(API_URL, { params });
  return response.data;
};

export const getItemById = async (id: number): Promise<Item> => {
  const response = await axios.get<Item>(`${API_URL}/${id}`);
  return response.data;
};

export const createItem = async (item: Item): Promise<Item> => {
  const response = await axios.post<Item>(API_URL, item);
  return response.data;
};

export const updateItem = async (id: number, item: Item): Promise<Item> => {
  const response = await axios.put<Item>(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
