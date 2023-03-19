import { useLocalStorage } from 'hooks/useLocalStorage';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from 'services/firebase';
// import { useState } from 'react';

const LoginComp = () => {
  const auth = getAuth(app);
  const [user, setUser] = useLocalStorage('r&m_user', auth.currentUser);
  // const [user, setUser] = useState(auth.currentUser);

  const loginByGoogle = () => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then(credentials => {
          // console.log('credentiols :', credentials);
          setUser(credentials.user);
        })
        .catch(err => console.log(err));
    });

    return unsub;
  };

  const logOut = () => {};

  console.log('user  :', user);

  return (
    <div>
      <button onClick={loginByGoogle}>google</button>
      <button onClick={logOut}>log Out</button>
    </div>
  );
};

export default LoginComp;
