import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <li>
      <Link to="/Contato">Contato</Link>
      <Link to="/">Sobre</Link>
    </li>
  );
}
