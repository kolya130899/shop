import axios from "axios";
import { useEffect, useState, useReducer } from "react";

const fetchData = async (page, perPage) => {
  return await axios
    .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
    .then(res => {
      const { data } = res; //get results directly from object data res.data
      return data;
    })
    .catch(err => console.error(err));
};

const getDataKeys = obj => {
  let keys = [];

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== "object") {
      keys.push(key);
    }
  });

  return keys;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, page: state.page + 1 };
    case "decrease":
      return { ...state, page: state.page - 1 };
    case "10":
      return { ...state, perPage: 10 };
    case "15":
      return { ...state, perPage: 15 };
    case "20":
      return { ...state, perPage: 20 };
    case "25":
      return { ...state, perPage: 25 };
    default:
      throw new Error("There is no action of this type!");
  }
};

export const Beers = () => {
  const [initialData, setInitialData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [paginationState, dispatch] = useReducer(reducer, {
    page: 1,
    perPage: 15,
  });

  useEffect(() => {
    fetchData(paginationState.page, paginationState.perPage).then(data => {
      setInitialData(data);

      setKeys(getDataKeys(data[0]));
    });
  }, [paginationState]);

  return (
    <div className="beers block">
      <h2 className="beers__title page-title">Beers</h2>
      <table className="beers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tag</th>
            <th>First brewed</th>
            <th>ABV</th>
            <th>IBU</th>
            <th>FG</th>
            <th>OG</th>
            <th>EBC</th>
            <th>SRM</th>
            <th>PH</th>
            <th>Attenuation</th>
            <th>Contributed</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map(beer => (
            <tr key={beer.id}>
              <th>{beer.id}</th>
              <td>{beer.name}</td>
              <td>{beer.tagline}</td>
              <td>{beer.first_brewed}</td>
              <td>{beer.abv}</td>
              <td>{beer.ibu}</td>
              <td>{beer.target_fg}</td>
              <td>{beer.target_og}</td>
              <td>{beer.ebc}</td>
              <td>{beer.srm}</td>
              <td>{beer.ph}</td>
              <td>{beer.attenuation_level}</td>
              <td>{beer.contributed_by}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="beers-buttons">
        <button
          id="decrease"
          onClick={() =>
            paginationState.page > 1 ? dispatch({ type: "decrease" }) : ""
          }>
          {paginationState.page > 0 ? paginationState.page - 1 : 0}
        </button>
        <span>{paginationState.page}</span>

        <button id="increace" onClick={() => dispatch({ type: "increase" })}>
          {paginationState.page + 1}
        </button>
      </div>

      <div className="beers-pages">
        <button onClick={() => dispatch({ type: "10" })}>10</button>
        <button onClick={() => dispatch({ type: "15" })}>15</button>
        <button onClick={() => dispatch({ type: "20" })}>20</button>
        <button onClick={() => dispatch({ type: "25" })}>25</button>
      </div>
    </div>
  );
};
