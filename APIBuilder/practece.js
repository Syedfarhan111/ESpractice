const Don = require("express");
const iam = Don();

iam.get("/", (req, res) => {
  res.json({ data: ["hellow  i am anthone gonssalwis mai dunya ma akela hu"] });
});

iam.listen(313);

console.log("successfully");



