import './Appli.scss';
import Entete from './Entete';
import ListeCategories from './ListeCategories';
import TableauProduits from './TableauProduits';

function Appli() {

  return (
    <div className='Appli'>
      <Entete />
      <main>
        <h2>Catalogue</h2>
        <ListeCategories />
        <TableauProduits />
      </main>
    </div>
  )
}

export default Appli;
