import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    maxWidth: '786px',
    margin: '0 auto',
    paddingRight: '14px',
  },
  content: {
    padding: '2px 0 0 13px',

    [`@media (max-width: 900px)`]: {
      paddingLeft: 0,
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
}));
