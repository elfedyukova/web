import axios from 'axios'

export const apiGetUserData = async (number) => {
  try {
    const response = await axios.get(`http://localhost:4000/account/${number}`);
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
    //const response = await axios.get(`http://localhost:4000/testpools/accounts/rent`);
    const response = await axios.post(`http://localhost:4000/testpools/accounts/rent?ptpId=845&expireSeconds=1800`,

      {}, {
      headers: {
        "Accept": "application/json",
        "from-client": "Swagger UI"
      }
    }
    )
    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}
export const apiPasswordReset = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/password/${number}/expire`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}
export const apiPasswordExtend = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/password/${number}/unexpire`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiPasswordReturn = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/password/set-default`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}