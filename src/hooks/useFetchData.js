import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = url => {
  const [data, setData] = useState([]);

  const getData = async () => {
    return await axios.get(url).then(res => {
      let { data } = res;
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  });

  return data;
};
