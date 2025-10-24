const STORAGE_KEY = 'bookhaven_library';

export const getSavedBooks = () => {
  const books = localStorage.getItem(STORAGE_KEY);
  return books ? JSON.parse(books) : [];
};

export const saveBook = (book) => {
  const currentBooks = getSavedBooks();
  const isAlreadySaved = currentBooks.some((b) => b.key === book.key);

  if (!isAlreadySaved) {
    const updatedBooks = [...currentBooks, book];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
  }
};

export const removeBook = (bookKey) => {
  const currentBooks = getSavedBooks();
  const updatedBooks = currentBooks.filter((b) => b.key !== bookKey);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
};

export const clearLibrary = () => {
  localStorage.removeItem(STORAGE_KEY);
};

