import { createContext, ReactNode, useMemo, useState } from 'react';
import { AlertColor } from '@/shared';

const ALERT_TIME = 5000;

const initialState = {
  text: '',
  type: '',
};

type AlertContextType = {
  text: string;
  type: string;
  setAlert: (alertText: string, alertType: AlertColor) => void;
};

export const AlertContext = createContext({
  ...initialState,
} as AlertContextType);

export const AlertProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const [text, setText] = useState('');
  const [type, setType] = useState<AlertColor>('warning');

  const setAlert = (alertText: string, alertType: AlertColor): void => {
    setText(alertText);
    setType(alertType);

    setTimeout(() => {
      setText('');
      setType('warning');
    }, ALERT_TIME);
  };

  return useMemo(
    () => (
      <AlertContext.Provider
        value={{
          text,
          type,
          setAlert,
        }}
      >
        {children}
      </AlertContext.Provider>
    ),
    [text, type]
  );
};
