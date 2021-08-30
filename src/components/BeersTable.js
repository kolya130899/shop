export const BeersTable = props => {
  return (
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
        {props.beers.map(beer => (
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
  );
};
