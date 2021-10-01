import React, { useEffect } from 'react';
import axios from '../../services/axios';
import { CenterHome } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  useEffect(() => {
    async function getDate() {
      try {
        const response = await axios.get('/alunos');
        console.log(response.data);
      } catch {
        console.log('erro');
      }
    }
    getDate();
  }, []);
  return (
    <Container>
      <CenterHome>
        <p>CONTEUDOs</p>
      </CenterHome>
    </Container>
  );
}
