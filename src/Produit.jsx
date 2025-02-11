import './Produit.scss';
import listeDesCategories from './data/categories.json';

function Produit({nom, avatar, categories, unites, ventes}) {

  return (
    <tr className="Produit">
      <td>
        <img src={"/avatars/"+avatar} alt={nom} />
        {nom}
      </td>
      <td>
        <button>Modifier</button>
      </td>
      <td>
        {
          categories.map(
            cat => <span className="categorie">
                    {
                      listeDesCategories.find(elt => elt.id == cat).nom
                    }
                  </span>
          )
        }
        
      </td>
      <td>
        {unites}
      </td>
      <td>
        {ventes}
      </td>
    </tr>
  );
}

export default Produit;