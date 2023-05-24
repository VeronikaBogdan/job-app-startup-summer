import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  control: {
    '&[data-active]': {
      '&:hover': {
        backgroundColor: theme.colors.blue[2],
      },
    },

    [`@media (max-width: 500px)`]: {
      fontSize: '13px',
      minWidth: '5px',
      height: '30px',
    },
  },
  root: {
    justifyContent: 'center',
    marginTop: '29px',

    [`@media (max-width: 500px)`]: {
      marginTop: '10px',
      gap: '5px',
    },
  },
}));
