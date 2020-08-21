import styled, {css} from 'styled-components'



import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter
} from '../../style/Icons';



export const Container = styled.div``;

export const Topside = styled.div``;

export const Logo = styled.div``;

export const MenuButton = styled.div``;

const iconsCss = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconsCss}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCss}
`;

export const EmailIcon = styled(Email)`
  ${iconsCss}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsCss}
`;

export const ProfileIcon = styled(Person)`
  ${iconsCss}
`;
