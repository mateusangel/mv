import { FormStyled } from '../Styles/FormStyled';
import { BiSearch } from 'react-icons/bi';
export function Form() {
  return (
    <FormStyled>
      <input type="text" placeholder="Busque um filme" />
      <button type="submit">
        <BiSearch />
      </button>
    </FormStyled>
  );
}
