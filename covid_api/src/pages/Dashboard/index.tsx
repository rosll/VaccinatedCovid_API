import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import { Title, Form, Countries } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Title>Dados de vacinas da COVID-19</Title>

    <Form>
      <input placeholder="Insira o nome de um país" />
      <button type="submit">Procurar</button>
    </Form>

    <Countries>
      <a href="teste">
        <div>
          <strong>Brazil</strong>
          <p>Capital: Brasília</p>
          <p>Continente: South America</p>
          <p>Última atualização: 2021/04/11</p>
        </div>
        <FiChevronsDown size={23} />
      </a>
      <a href="teste">
        <div>
          <strong>Brazil</strong>
          <p>Capital: Brasília</p>
          <p>Continente: South America</p>
          <p>Última atualização: 2021/04/11</p>
        </div>
        <FiChevronsDown size={23} />
      </a>
      <a href="teste">
        <div>
          <strong>Brazil</strong>
          <p>Capital: Brasília</p>
          <p>Continente: South America</p>
          <p>Última atualização: 2021/04/11</p>
        </div>
        <FiChevronsDown size={23} />
      </a>
    </Countries>
  </>
);
export default Dashboard;
