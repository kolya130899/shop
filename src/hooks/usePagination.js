import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, page: state.page + 1 };
    case "decrease":
      return { ...state, page: state.page - 1 };
    case "2":
      return { page: 1, perPage: 2 };
    case "5":
      return { page: 1, perPage: 5 };
    case "10":
      return { page: 1, perPage: 10 };
    case "15":
      return { page: 1, perPage: 15 };
    case "25":
      return { page: 1, perPage: 25 };
    default:
      return state;
  }
};

export const usePagination = data => {
  const [paginationState, dispatch] = useReducer(reducer, {
    page: 1,
    perPage: 15,
  });

  const lastPageIndex = Math.ceil(data.length / paginationState.perPage);
  const lastElementIndex = paginationState.page * paginationState.perPage;
  const firstElementIndex = Math.abs(
    paginationState.perPage - lastElementIndex
  );
  const pageItems = data.slice(firstElementIndex, lastElementIndex);

  return [pageItems, lastPageIndex, paginationState, dispatch];
};
