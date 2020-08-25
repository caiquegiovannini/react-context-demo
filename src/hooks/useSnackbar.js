import { useContext } from 'react';
import {
  SnackbarSetContext,
  SnackbarValueContext,
} from '../context/SnackbarContext';

const useSetSnackbar = () => useContext(SnackbarSetContext);

const useGetSnackbar = () => useContext(SnackbarValueContext);

const useSnackbar = () => {
  const setSnackbar = useContext(SnackbarSetContext);
  const snackbar = useContext(SnackbarValueContext);

  return {
    setSnackbar,
    snackbar,
  };
};

export { useSetSnackbar, useGetSnackbar, useSnackbar };
