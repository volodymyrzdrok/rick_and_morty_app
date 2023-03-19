import logo from 'assets/images/logo.webp';
import s from './Logo.module.scss';
const Logo = () => {
  return (
    <div className={s.logoContainer}>
      <img className={s.logo} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
