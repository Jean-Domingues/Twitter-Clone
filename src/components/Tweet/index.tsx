import React from 'react';

import {
  Container,
  Retweeted,
  SharedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <SharedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>playstation_br</strong>
            <span>@playstation_BR</span>
            <Dot />
            <time>17 de ago</time>
          </Header>

          <Description>The last of us part ||</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              64
            </Status>

            <Status>
              <RetweetIcon />
              40
            </Status>

            <Status>
              <LikeIcon />
              1200
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
