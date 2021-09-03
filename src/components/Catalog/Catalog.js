import { CatalogItem } from "./CatalogItem";
import { usePagination } from "../../hooks/usePagination";
import { PagesControl } from "../Pagination/PagesControl";
import { ItemsQuantityControl } from "../Pagination/ItemsQuantityControl";
import { useContext } from "react";
import { BeersContext } from "../../App";

export const Catalog = () => {
  const beers = useContext(BeersContext);

  const [pageItems, lastPageIndex, paginationState, dispatch] =
    usePagination(beers);

  return (
    <section className="catalog-section">
      <h2 className="catalog__title page-title">Catalog</h2>
      <div className="catalog">
        {pageItems.map(beer => (
          <CatalogItem {...{ beer }} key={beer.id} />
        ))}
      </div>

      <PagesControl
        currentPage={paginationState.page}
        {...{
          lastPageIndex,
          dispatch,
        }}
      />
      <ItemsQuantityControl {...{ dispatch }} />
    </section>
  );
};
