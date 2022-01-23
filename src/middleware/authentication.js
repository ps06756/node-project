const jwt = require('jsonwebtoken');
const SECRETKEY = 'asfsdfdffeewrrer';

function checkIfAuthenticated(req, res, next) {
  const tokenString = req.headers['authorization'];
  if (typeof tokenString !== 'undefined' && tokenString !== null) {
    const actualToken = tokenString.split(' ')[1];
    if (typeof actualToken !== 'undefined' && actualToken != null) {
      let data = jwt.verify(actualToken, SECRETKEY);
      req.user = data;
      next();
      // verify here
      
    }
    else {
      res.status(401).send('Please login before accessing the API');
    }
  }
  else {
    res.status(401).send('Please login before accessing the API');
  }
}

module.exports = {
  checkIfAuthenticated
};

// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBzMDYiLCJpYXQiOjE2NDI4MjkwNjJ9.0QcnQl0aZaDm9Fccut5V2wTte6l1-0mKh5EogSbABcU
