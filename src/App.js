import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import userImage from './USER.png';

function App() {
  const utilisateur = {
    nom: 'Emma',
    photo: userImage,
  };

  const courses1 = ['Pain', 'Lait', 'Œufs'];
  const courses2 = ['Ananas', 'Bananes', 'Kiwi'];

  return (
    <div className="app">
      <div className="card">
        <HelloWorld />
      </div>

      <div className="card">
        <div className="greeting">
          <Greeting prenom="Hiba" />
        </div>
        <div className="greeting">
          <Greeting prenom="Ali" />
        </div>
      </div>

      <div className="card profile-box">
        <h2 className="section-title">Profil utilisateur</h2>
        <Profil utilisateur={utilisateur} taille={150} />
      </div>

      <div className="card">
        <h2 className="section-title">Liste des voitures</h2>
        <div className="voiture-item">
          <Voiture marque="Range Rover" modele="Velar" couleur="Noire" />
        </div>
        <div className="voiture-item">
          <Voiture marque="Mercedes" modele="Classe E" couleur="Rouge" />
        </div>
        <div className="voiture-item">
          <Voiture marque="Audi" modele="A6" couleur="Bleue" />
        </div>
      </div>

      <div className="card list-box">
        <h2 className="section-title">Liste de courses 1</h2>
        <ListeCourses elements={courses1} />
      </div>

      <div className="card list-box">
        <h2 className="section-title">Liste de courses 2</h2>
        <ListeCourses elements={courses2} />
      </div>
    </div>
  );
}

export default App;