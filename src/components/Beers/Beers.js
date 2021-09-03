import { PagesControl } from "../Pagination/PagesControl";
import { ItemsQuantityControl } from "../Pagination/ItemsQuantityControl";
import { BeersTable } from "./BeersTable";
import { usePagination } from "../../hooks/usePagination";
import { useContext } from "react";
import { BeersContext } from "../../App";

export const Beers = props => {
  const beers = useContext(BeersContext);

  const [pageItems, lastPageIndex, paginationState, dispatch] =
    usePagination(beers);

  return (
    <div className="beers block">
      <h2 className="beers__title page-title">Beers</h2>

      <BeersTable
        beers={pageItems}
        perPage={paginationState.perPage}
        sort={props.sortData}
      />

      <PagesControl
        currentPage={paginationState.page}
        {...{
          lastPageIndex,
          dispatch,
        }}
      />
      <ItemsQuantityControl {...{ dispatch }} />
    </div>
  );
};
