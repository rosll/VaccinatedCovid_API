import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
import { Header, MoreDetails } from './styles';
import api from '../../services/api';

interface DetailsParams {
  details: string;
}

interface Country {
  All: {
    country: string;
    population: number;
    people_vaccinated: number;
    people_partially_vaccinated: number;
    life_expectancy: string;
    updated: string;
  };
}

const Details: React.FC = () => {
  const [country, setCountry] = useState<Country | null>(null);

  const { params } = useRouteMatch<DetailsParams>();

  useEffect(() => {
    api.get(`vaccines?country=${params.details}`).then(response => {
      setCountry(response.data);
    });
  }, [params.details]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiCornerUpLeft size={20} />
          Voltar
        </Link>
      </Header>

      {country && (
        <MoreDetails>
          <div>
            <strong>{country.All.country}</strong>
            <p>População: {country.All.population}</p>
            <p>Pessoas Vacinadas: {country.All.people_vaccinated}</p>
            <p>
              Pessoas Parcialmente Vacinadas:{' '}
              {country.All.people_partially_vaccinated}
            </p>
            <p>Expectativa de vida no País: {country.All.life_expectancy}</p>
            <p>Última atualização: {country.All.updated}</p>
          </div>
        </MoreDetails>
      )}
    </>
  );
};

export default Details;
