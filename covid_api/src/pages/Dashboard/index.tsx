import React, { useState, FormEvent } from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Countries, Error } from './styles';
import api from '../../services/api';

interface Country {
  All: {
    country: string;
    capital_city: string;
    continent: string;
    updated: string;
    abbreviation: string;
  };
}

const Dashboard: React.FC = () => {
  const [newCountry, setNewCountry] = useState('');
  const [formError, setFormError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

  async function AddCountry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newCountry) {
      setFormError('Insira o nome de um país');
      return;
    }

    try {
      const response = await api.get<Country>(`vaccines?country=${newCountry}`);

      const country = response.data;

      setCountries([country]);
      setNewCountry('');
      setFormError('');
    } catch (err) {
      setFormError(
        'Ocorreu um erro na busca deste país. Escreve em Inglês o nome de algum país',
      );
    }
  }

  return (
    <>
      <Title>Dados de vacinas COVID-19</Title>

      <Form hasError={!!formError} onSubmit={AddCountry}>
        <input
          value={newCountry}
          onChange={event => setNewCountry(event.target.value)}
          placeholder="Insira o nome de um país (Exemplo: Netherlands; Canada; Brazil.)"
        />
        <button type="submit">Procurar</button>
      </Form>

      {formError && <Error>{formError}</Error>}

      <Countries>
        {countries.map(country => (
          <Link
            key={country.All.country}
            to={`/details/${country.All.country}`}
          >
            <div>
              <strong>{country.All.country} </strong>
              <strong>{country.All.abbreviation}</strong>
              <p>Capital: {country.All.capital_city}</p>
              <p>Continente: {country.All.continent}</p>
            </div>
            <FiChevronsDown size={23} />
          </Link>
        ))}
      </Countries>
    </>
  );
};
export default Dashboard;
