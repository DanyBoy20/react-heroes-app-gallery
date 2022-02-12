import useForm from "../../hooks/useForm"; 
import queryString from "query-string";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

export const SearchScreen = () => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  /* console.log(q); */
  const navigate = useNavigate();

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

  const handleSearch = (e ) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);    
    
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5"> 
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={ handleSearch }>
            <input 
              type="text" 
              name="searchText" 
              value={ searchText } 
              placeholder="Find your hero" 
              autoComplete="off"
              className="form-control" 
              onChange={ handleInputChange } 
            />
            <button 
              type="submit" 
              className="form-control btn btn-outline-primary mt-3"
            >
              Search ...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            ( q === '') 
            && <div className="alert alert-info">
                Search a hero
              </div>
          }
          {
            ( q !== '' && heroesFiltered.length === 0) 
            && <div className="alert alert-danger">
                There is no hero with {q}
              </div>
          }
          {
            heroesFiltered.map( hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>

    </div>
  );
};

