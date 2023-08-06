import { Form } from '../../Components/Form';
import { Header } from '../../Components/Header';
import { Logo } from '../../Components/Logo';
import { Nav } from '../../Components/Nav';
import GlobalStyled from '../../Styles/Global/GlobalStyled';

export function App() {
  return (
    <>
      <GlobalStyled />
      <Header>
        <Logo />
        <Nav />;
        <Form />
      </Header>
    </>
  );
}
