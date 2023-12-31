import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowDown } from '~/assets/icons/arrowDown.svg';
import { ReactComponent as ArrowRight } from '~/assets/icons/arrowRight.svg';
import { ReactComponent as User } from '~/assets/icons/user.svg';
import { useOutsideClick } from '~/hooks/UseOutsideClick/UseOutsideClick';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';
import { type RootState } from '~/store/store.types';

import { UserBar } from './UserBar/UserBar';
import userPanelStyle from './UserPanel.module.scss';

export const UserPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state: RootState) =>
    state.user.currentUser.status === 'success'
      ? state.user.currentUser.data
      : null
  );
  const reference = useOutsideClick(() =>
    isOpen ? handleButtonClick() : null
  );
  const handleButtonClick = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };
  return user ? (
    <div className={userPanelStyle.container}>
      <Button
        appearance={ButtonAppearance.Primary}
        text={user.username.slice(0, 1).toUpperCase()}
      ></Button>
      <span className={userPanelStyle.userText}>{user.username}</span>
      <Button
        appearance={ButtonAppearance.Arrow}
        onClick={handleButtonClick}
        icon={isOpen ? <ArrowRight /> : <ArrowDown />}
      ></Button>

      <UserBar
        reference={reference}
        isOpen={isOpen}
      />
    </div>
  ) : (
    <div className={userPanelStyle.container}>
      <Button
        appearance={ButtonAppearance.Primary}
        icon={<User />}
        onClick={() => navigate(`/sign-in`)}
      ></Button>
      <span className={userPanelStyle.userText}></span>
      <Button
        appearance={ButtonAppearance.Arrow}
        onClick={handleButtonClick}
        icon={isOpen ? <ArrowRight /> : <ArrowDown />}
      ></Button>
      <UserBar
        reference={reference}
        isOpen={isOpen}
      />
    </div>
  );
};
