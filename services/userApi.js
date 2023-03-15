import { DOMAIN } from "@/utils/setting/config";
import axios from "axios";

export const updateUser = async (id, params, accessToken) => {
  try {
    await axios.patch(`${DOMAIN}/users/${id}`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (err) {
    console.log(err.data);
  }
};

export const getUser = async (id) => {
  try {
    const res = await axios.get(`${DOMAIN}/users/${id}`);
    console.log({ res });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
