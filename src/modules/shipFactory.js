const shipFactory = (length) => {
  let hits = 0;
  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    return length === hits;
  };

  return {
    length,
    hit,
    isSunk,
  };
};

export default shipFactory;
