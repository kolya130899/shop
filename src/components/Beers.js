import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { BeersItemsQuantityControl } from "./BeersItemsQuantityControl";
import { BeersPagesControl } from "./BeersPagesControl";
import { BeersTable } from "./BeersTable";

const URL = process.env.REACT_APP_API_URL;

const fetchData = async () => {
  return await axios
    .get(`${URL}`)
    .then(res => {
      const { data } = res;
      return data;
    })
    .catch(err => console.error(err));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, page: state.page + 1 };
    case "decrease":
      return { ...state, page: state.page - 1 };
    case "2":
      return { ...state, perPage: 2 };
    case "5":
      return { ...state, perPage: 5 };
    case "10":
      return { ...state, perPage: 10 };
    case "15":
      return { ...state, perPage: 15 };
    case "25":
      return { ...state, perPage: 25 };
    default:
      return state;
  }
};

export const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [paginationState, dispatch] = useReducer(reducer, {
    page: 1,
    perPage: 15,
  });

  const lastPageIndex = Math.ceil(beers.length / paginationState.perPage);
  const lastElementIndex = paginationState.page * paginationState.perPage;
  const firstElementIndex = Math.abs(
    paginationState.perPage - lastElementIndex
  );
  const pageItems = beers.slice(firstElementIndex, lastElementIndex);

  useEffect(() => {
    fetchData().then(data => {
      setBeers(data);
    });
  }, []);

  return (
    <div className="beers block">
      <h2 className="beers__title page-title">Beers</h2>

      <BeersTable beers={pageItems} perPage={paginationState.perPage} />

      <BeersPagesControl
        currentPage={paginationState.page}
        {...{
          lastPageIndex,
          dispatch,
        }}
      />
      <BeersItemsQuantityControl {...{ dispatch }} />
    </div>
  );
};
