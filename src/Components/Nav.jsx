import { Link } from 'react-router-dom';
import { NavStyled } from '../Styles/NavStyled';

export function Nav() {
  return (
    <NavStyled>
      <Link to="/">Home</Link>
      <Link to="/Move">Move</Link>
      <Link to="/Search">Search</Link>
    </NavStyled>
  );
}
