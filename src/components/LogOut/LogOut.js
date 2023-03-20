import LogOutSvg from 'assets/icons/LogOutSvg';

import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser } from 'redux/slice';
import s from './LogOut.module.scss';

const LogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutHendler = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.userContainer}>
      <p className={s.name}> {user.displayName}</p>
      <div className={s.contSignOut}>
        <img className={s.img} src={user.photoURL} alt={user.displayName} />
        <button onClick={logOutHendler} className={s.btnSignUp}>
          <LogOutSvg className={s.svg} />
          <span>sign out</span>
        </button>
      </div>
    </div>
  );
};

export default LogOut;
