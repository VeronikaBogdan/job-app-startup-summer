export const colors = {
  grey: ['#FFFFFF', '#F7F7F8', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134'],
  blue: ['#3B7CD3', '#5E96FC', '#92C1FF', '#B7D6FF', '#C9E0FF', '#DEECFF', '#5E96FC'],
};

export const theme = {
  fontFamily: 'Inter, sans-serif',
  colors,
  primaryColor: 'blue',
  globalStyles: (theme) => ({
    body: {
      height: '100%',
      backgroundColor: theme.colors.grey[1],
    },
  }),
};
