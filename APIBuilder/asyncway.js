const asyncway = () => {
  setTimeout(() => {
    console.log("first call ....");
  }, 2000);

  console.log("Second call....");
};

asyncway();
