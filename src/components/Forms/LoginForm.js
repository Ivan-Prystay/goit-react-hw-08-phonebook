import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled, InputStyled, Submit } from './Forms.styled';

export const LoginForm = () => {
  const dispath = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispath(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}  autoComplete="off">
      <label>
        Email <br />
        <InputStyled type="email" name="email" />
      </label>
      <label>
        Password
        <br />
        <InputStyled type="password" name="password" />
      </label>
      <Submit type="submit">Log In</Submit>
    </FormStyled>
  );
};
