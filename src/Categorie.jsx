import './Categorie.scss';

function Categorie({nom, couleur}) {
  return (
    <li className="Categorie" style={{backgroundColor: couleur}}>{nom}</li>
  );
}

export default Categorie;