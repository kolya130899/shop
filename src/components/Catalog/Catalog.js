import { CatalogItem } from "./CatalogItem";

export const Catalog = props => {
  const { beers } = props;

  return (
    <section className="catalog-section">
      <h2 className="catalog__title page-title">Catalog</h2>
      <div className="catalog">
        {beers.map(beer => (
          <CatalogItem {...{ beer }} />
        ))}
      </div>
    </section>
  );
};
