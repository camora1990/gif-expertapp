import axios from "axios";
import Alerts from "../helpers/Alerts";

export const getGifs = async (offset, category) => {
  const APY_KEY = "OvBCaB7PVunjsBdVVGfAgV1JSemLzy25";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&limit=12&q=`;
  try {
    const { data } = await axios.get(`${url}${category}&offset=${offset}`);

    const listGifs = data.data.map((gif) => ({
      id: gif.id,
      img: gif.images.original.url,
      imageName: gif.title,
      username: gif.username,
    }));

    const totalGifs = data.pagination.total_count;

    return { listGifs, totalGifs };
  } catch (error) {
    if (error.response?.data) {
      Alerts.alertError(error.response.data.message);
    }
    throw new Error("Failed in function getGifs");
  }
};
