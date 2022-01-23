function checkIfAuthorized(allowedRoles) {
  return function(req, res, next) {
    let userRole = req.user.role;
    let isAuthorized = false;
    for(let i = 0; i < allowedRoles.length; i++) {
      if (allowedRoles[i] === userRole) {
        isAuthorized = true;
        break;
      }
    }
    if (isAuthorized) {
      next();
    }
    else {
      res.status(403).send('You don\'t have access to this resource');
    }
  }
}

module.exports = {
  checkIfAuthorized
}
