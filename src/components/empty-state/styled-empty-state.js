import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    marginTop: '82px',
    paddingRight: '13px',
    alignItems: 'center',
    textAlign: 'center',
  },
  message: {
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '29px',
  },
  button: {
    maxWidth: '100%',
    width: '164px',
    height: '42px',
    letterSpacing: '0px',
    borderRadius: '8px',
    backgroundColor: theme.colors.blue[5],
    color: theme.colors.blue[0],

    '&:hover': {
      backgroundColor: theme.colors.blue[4],
    },
  },
}));
