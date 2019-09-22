let counter = 0;
const getData = () => {
  console.log("Fetching data...", counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 500);
