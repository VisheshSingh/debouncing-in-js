let counter = 0;
const getData = () => {
  console.log("Fetching data...", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);
