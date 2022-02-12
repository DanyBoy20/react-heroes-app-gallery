import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroeId } = useParams();
  /* const hero = getHeroById(heroeId); */
  /* console.log(hero); */

  // si el [heroeId] cambia, se ejecuta otra vez getHeroById. 
  // si hacemos link en un heroe, regresmos a la lista y volvemos a hacer link a ese mismo heroe
  // no se ejecuta getHeroById, por que useMemo sabe que estamos linkeando al mismo hero 
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  // si el heroe no existe, navegar a "/"
  if(!hero){
    return <Navigate to="/" />
  }

  const handleReturn = () => {
    navigate(-1);
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`../assets/heroes/${ heroeId }.jpg`}
          alt={ superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> { alter_ego }
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> { publisher }
          </li>
          <li className="list-group-item">
            <strong>First appearance:</strong> { first_appearance }
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{ characters }</p>
        <button 
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>

      </div>
      
    </div>
  );
};


