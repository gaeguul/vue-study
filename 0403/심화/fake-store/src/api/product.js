import axios from 'axios';

const BASEURL = '/api/products';

export const get = async (target, params) => {
  try {
    const response = await axios.get(`${BASEURL}/${target}`, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (target, product) => {
  try {
    const response = await axios.post(`${BASEURL}/${target}`, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const put = async (target, product) => {
  try {
    const response = await axios.put(`${BASEURL}/${target}`, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (target, params) => {
  try {
    const response = await axios.delete(`${BASEURL}/${target}`, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
