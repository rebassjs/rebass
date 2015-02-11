
module.exports = function(name) {

  var className;

  switch (name) {
    case 'light-gray':
      className = 'bg-light-gray';
      break;
    case 'yellow':
      className = 'bg-yellow';
      break;
    case 'blue':
      className = 'white bg-blue';
      break;
    case 'green':
      className = 'white bg-green';
      break;
    case 'red':
      className = 'white bg-red';
      break;
    case 'dark-gray':
      className = 'white bg-dark-gray';
      break;
    default:
      className = 'bg-light-gray';
      break;
  }

  return className;

};

