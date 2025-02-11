import './TableauProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';

function TableauProduits() {

  return (
    <table className="TableauProduits">
      <thead>
        <tr>
          <th>Produit</th>
          <th></th>
          <th>Catégories</th>
          <th>Unités</th>
          <th>Ventes</th>
        </tr>
      </thead>
      <tbody>
        {
          lesProduits.map(
            prd => <Produit {...prd} />
          )
        }
      </tbody>
    </table>
  );
}

export default TableauProduits;