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

export const apiP2Penable = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/p2p/enable`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiP2Pdisable = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/p2p/disable`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiPrioritetAdd = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/priority-package/add`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiPrioritetClear = async (number) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/priority-package/clear`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiBalanceDelete = async (number, currencyId) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/balance/delete?currencyId=${currencyId}`);

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiTerminalPinCodeSet = async (number, pinCode) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/terminal/pin-code/set`, { pinCode });

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}

export const apiTerminalPinCodeSetLastDate = async (number, date) => {
  try {
    const response = await axios.post(`http://localhost:4000/account/${number}/mobile/pin-code/last-sms-date/set`, { date });

    return response.data
  } catch (error) {

    if (error.response) {

      throw error.response.data;
    }
  }
}