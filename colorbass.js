
module.exports = function(name) {

  var primary,
      secondary = name,
      borderColor = name,
      inverse = false;

  switch(name) {
    case 'gray':
    case 'silver':
    case 'white':
    case 'yellow':
    case 'aqua':
    case 'lime':
      primary = 'black bg-' + name;
      break;
    case 'black':
    case 'navy':
    case 'blue':
    case 'teal':
    case 'green':
    case 'olive':
    case 'orange':
    case 'red':
    case 'fuchsia':
    case 'maroon':
    case 'purple':
      primary = 'white bg-' + name;
      inverse = true;
      break;
    default:
      primary = 'bg-silver';
      secondary = 'black';
      borderColor = 'darken-3';
  }

  return {
    primary: primary,
    secondary: secondary,
    borderColor: borderColor,
  };

};
