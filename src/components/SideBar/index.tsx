import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Bill gates" nickname="@Bill_Gates" />,
            <FollowSuggestion name="Steve Jobs" nickname="@Steve_Jobs" />,
            <FollowSuggestion name="Mark Zuckberg" nickname="@Zuck" />,
          ]}
        />
        <List title="Talvez você curta" elements={[<h1>Teste</h1>, <h1>Teste</h1>]} />
      </Body>
    </Container>
  );
};

export default SideBar;
