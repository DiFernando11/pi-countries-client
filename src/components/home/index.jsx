import { useSelector } from "react-redux";
import CountryCard from "../countryCard";
import FormFilter from "../formFilter";
import Pagination from "../pagination";
import giftNotCountries from "../../assets/animaniacs-warner-bros.gif";

import "./index.css";

function Home() {
  //estado locales
  //estados globales
  let countries = useSelector((state) => state.countries);
  let statePage = useSelector((state) => state.statePage);
  const loadingCountries = useSelector((state) => state.loadingCountries);
  console.log(loadingCountries);
  //acciones
  let postsPerPage = 9;
  const lastPostIndex = statePage * postsPerPage; // 9 //18
  const firstPostIndex = lastPostIndex - postsPerPage; //0 // 9
  const currentPosts = countries.slice(firstPostIndex, lastPostIndex);

  return (
    <main className="main">
      <div className="container_main">
        <div className="container_filters">
          <FormFilter />
        </div>
        {currentPosts.length ? (
          <div className="container_cards">
            {currentPosts &&
              currentPosts.map((country) => (
                <CountryCard
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  continent={country.continent}
                  flag={country.flag}
                  translation={country.translation}
                />
              ))}
          </div>
        ) : loadingCountries ? (
          <div className="notExistedCountriesOrActivities">
            <h3>No activities or countries available</h3>
            <img
              className="nohaynada"
              src={giftNotCountries}
              alt="not countries"
            />
          </div>
        ) : (
          <div className="notExistedCountriesOrActivities">
            <h3>LOADING COUNTRIES</h3>
            <img
              src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
            ></img>
          </div>
        )}
      </div>
      <div className="container_pagination">
        <Pagination />
      </div>
    </main>
  );
}

export default Home;
