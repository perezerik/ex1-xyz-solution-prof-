import Categorie from './Categorie';
import './ListeCategories.scss';
import lesCategories from './data/categories.json';

function ListeCategories() {
  console.log("La variable avec le contenu du fichier JSON", lesCategories);
  

  return (
    <ul className="ListeCategories">
      {
        lesCategories.map(
          function(cat) {
            return <Categorie {...cat} />
          }
        )
      }
    </ul>
  );
}

export default ListeCategories;