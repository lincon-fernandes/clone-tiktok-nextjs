import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg"></Icon>
          <Avatar>
            <img src="/images/profile-image.jpg"></img>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}
export default Header;
