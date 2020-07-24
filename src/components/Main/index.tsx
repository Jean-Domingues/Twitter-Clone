import React from 'react';
import { Container, Header, ProfileInfo, BackIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Jean Domigues</strong>
          <span>1200 Tweets</span>
        </ProfileInfo>

        {/* <ProfilePage /> */}

        {/* <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu> */}
      </Header>
    </Container>
  );
};

export default Main;
