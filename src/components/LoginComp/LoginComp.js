import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from 'services/firebase';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/slice';
import s from './LoginComp.module.scss';
import GoogleSvg from 'assets/icons/GoogleSvg';

const LoginComp = () => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const loginByGoogle = () => {
    const unSub = auth.onAuthStateChanged(_ => {
      signInWithPopup(auth, googleAuthProvider)
        .then(credentials => {
          const { displayName, photoURL } = credentials.user;

          dispatch(logIn({ displayName, photoURL }));
        })
        .catch(err => console.error(err));
    });

    return unSub;
  };

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={loginByGoogle}>
        <GoogleSvg /> google
      </button>
    </div>
  );
};

export default LoginComp;
