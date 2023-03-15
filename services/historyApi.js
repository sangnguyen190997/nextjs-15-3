import { DOMAIN } from "@/utils/setting/config";
import axios from "axios";

export const createHistory = async (params, accessToken) => {
  try {
    await axios.post(`${DOMAIN}/history`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getHistoryByUserId = async (id, accessToken) => {
  try {
    const res = await axios.get(`${DOMAIN}/history/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
