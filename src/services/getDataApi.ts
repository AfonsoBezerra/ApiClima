import axios from 'axios';

export const getDataApi = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
