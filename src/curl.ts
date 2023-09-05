const { curly } = require("node-libcurl");

curly.get("http://localhost:3000/").then((res) => {
  console.log(res.data);
});
