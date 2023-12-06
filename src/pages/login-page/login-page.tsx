import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, SixCities } from '../../const.ts';
import { FormEvent, useEffect, useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.tsx';
import { loginAction } from '../../store/api-actions.ts';
import { getAuthStatus, getUserDataLoadingStatus, getUserPostError } from '../../store/user/selectors.ts';

export default function LoginPage(): JSX.Element {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hasError = useAppSelector(getUserPostError);
  const isLoading = useAppSelector(getUserDataLoadingStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      dispatch(loginAction({
        email: email,
        password: password,
      }))
        .then(() => {
          if(!hasError && isLoading) {
            setEmail('');
            setPassword('');
          }
        });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities: Login or Register</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit} action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" onChange={handleEmailChange} value={email} type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" onChange={handlePasswordChange} value={password} type="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{2,}" title="Contains one letter and one digit" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{SixCities.Amsterdam}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
