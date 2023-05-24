import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  content: {
    width: '100%',
    marginBottom: '44px',
  },
  vacancyRichText: {
    padding: '23px 20px 19px 22px',
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.grey[3]}`,
    borderRadius: '12px',
    maxWidth: '773px',
    width: '100%',
    alignSelf: 'center',
    marginLeft: '-14px',
    marginTop: '2px',

    'p > b': {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '20px',
    },
    'ul, ol': {
      paddingLeft: '26px',
    },
    'ul li, ol li': {
      listStyle: 'initial',
      marginTop: '0',
    },
    p: {
      marginBottom: '14px',
      fontWeight: '700',
    },

    [`@media (max-width: 768px)`]: {
      margin: 0,

      'ul, ol': {
        paddingLeft: '18px',
      },
    },
  },
}));
