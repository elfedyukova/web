import axios from 'axios'

export const apiGetUserData = async (number) => {
  try {
    const response = await axios.get(`http://localhost:4000/number?number=${number}`);
    console.log(response);
    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiGetUserRole = async (number) => {
  try {
    const response = await axios.get(`http://localhost:4000/number/${number}/role`);
    console.log(response);
    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiGetUser = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/rent`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}
export const apiPasswordExpire = async (number) => {
  try {
    const response = await axios.get(`http://localhost:4000/unexpire/${number}`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}