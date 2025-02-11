import './Entete.scss';

function Entete() {

  return (
    <header className="Entete">
      <div className="nav">
        <h1>xYz</h1>
        <nav>
          <span>ADMIN</span>
        </nav>
      </div>
      <div className="recherche">
        <input type="search" name='recherche' id='recherche' />
      </div>
      <div className="utilisateur">
        <button>Connexion</button>
        <button>Inscription</button>
      </div>
    </header>
  );
}

export default Entete;