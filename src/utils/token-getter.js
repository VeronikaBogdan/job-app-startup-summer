export const getTokenFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
};
