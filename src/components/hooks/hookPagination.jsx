import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(480 / 20);

  function next() {
    setPage((page) => Math.min(page + 1, maxPage));
  }

  function prev() {
    setPage((page) => Math.max(page - 1, 1));
  }
  
  return {
    next,
    prev,
    page,
    maxPage
  };

};
