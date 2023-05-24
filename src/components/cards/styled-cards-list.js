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
}));
