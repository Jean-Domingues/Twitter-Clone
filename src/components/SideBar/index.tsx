import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus facilis
          corporis nisi necessitatibus asperiores itaque, earum illum cumque laboriosam
          porro at id officiis dolorem rem ullam inventore! Iusto odit officiis tempora
          inventore qui nostrum consequuntur quam dolores fugiat, corporis possimus
          repudiandae praesentium facilis adipisci similique molestiae totam tenetur!
          Deleniti aut quae officia id neque accusantium provident accusamus repellat
          animi debitis fuga dolorum, quaerat assumenda ipsum cumque eligendi iure
          dignissimos odio omnis dicta nisi! Quod excepturi quos est, natus rerum
          cupiditate. Repellat quisquam, rerum molestias dolore voluptatum iusto
          recusandae nesciunt!
        </p>
      </Body>
    </Container>
  );
};

export default SideBar;
