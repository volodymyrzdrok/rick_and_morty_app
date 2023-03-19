import { useLocalStorage } from 'hooks/useLocalStorage';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from 'services/firebase';
import { useEffect } from 'react';

const LoginComp = () => {
  const auth = getAuth(app);
  const [user, setUser] = useLocalStorage('r&m_user', auth.currentUser);

  // useEffect(() => {
  const loginByGoogle = () => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then(credentials => {
          console.log('credentiols :', credentials);
          setUser(credentials.user);
        })
        .catch(err => console.log('err :', err));
    });

    return unsub;
  };
  // }, [auth, setUser]);

  // console.log('auth :', auth);
  console.log('user  :', user);
  // console.log(user ? 'user is' : 'loaddding');

  return (
    <div>
      <button onClick={loginByGoogle}>google</button>
      <button>facebook</button>
    </div>
  );
};

export default LoginComp;
