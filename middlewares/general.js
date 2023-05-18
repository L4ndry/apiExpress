exports.time = (req, res, next) => {
  let date = Date(Date.now());
  console.log("Current time:", date.toString());
  next();
};
exports.apiKeyAuth = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (key !== "supersegreta") {
    res.status(401).send("Unothorised");
    return;
  } else {
    next();
  }
};
