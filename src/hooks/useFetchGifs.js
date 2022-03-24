import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (offset, category) => {
  const [state, setState] = useState({
    data: [],
    totalData: 0,
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGifs(offset, category).then(({ listGifs, totalGifs }) => {
        setState({
          data: listGifs,
          totalData: totalGifs,
          loading: false,
        });
      });
    }, 2000);
  }, [offset, category]);

  return state;
};
