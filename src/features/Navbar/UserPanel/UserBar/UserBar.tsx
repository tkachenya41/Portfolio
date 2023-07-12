import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { type RootState, useAppDispatch } from '~/store/store.types';
import { actions } from '~/store/user/user.slice';

import UserBarStyle from './UserBar.module.scss';

export const UserBar = ({ isOpen }: { isOpen?: boolean }) => {
  const user = useSelector((state: RootState) =>
    state.user.currentUser.status === 'success'
      ? state.user.currentUser.data
      : null
  );
  const dispatch = useAppDispatch();
  return user ? (
    <div
      data-open={isOpen}
      className={UserBarStyle.container}
    >
      <Link
        className={UserBarStyle.link}
        onClick={() => dispatch(actions.logout())}
        to={'/'}
      >
        Log Out
      </Link>
    </div>
  ) : (
    <div
      data-open={isOpen}
      className={UserBarStyle.container}
    >
      <Link
        className={UserBarStyle.link}
        to="/sign-in"
      >
        Sign In
      </Link>
      <Link
        className={UserBarStyle.link}
        to="sign-up"
      >
        Sign Up
      </Link>
    </div>
  );
};
