const hellow = require("express");
const yup = hellow();

yup.get("/", (req, res) => {
  res.send(`hellow wold!!!!!!!!!!!!!!!!!!!`);
});

yup.listen(1110);
console.log("got it");
