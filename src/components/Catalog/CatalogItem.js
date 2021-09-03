export const CatalogItem = props => {
  const { beer } = props;

  return (
    <div className="catalog-item">
      <p className="catalog-item__tag">{beer.name}</p>
      <div className="catalog-item__info">
        <img src={beer.image_url} alt="" />
        <div className="goods-charachteristics">
          <ul>
            <li>First brewed - {beer.first_brewed}</li>
            <li>ABV - {beer.abv}</li>
            <li>IBU - {beer.ibu}</li>
            <li>FG - {beer.target_fg}</li>
            <li>OG - {beer.target_og}</li>
            <li>EBC - {beer.ebc}</li>
            <li>SRM - {beer.srm}</li>
            <li>PH - {beer.ph}</li>
            <li>Attenuation - {beer.attenuation_level}</li>
          </ul>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};
