
module.exports = function(name) {

  var primary,
      secondary,
      borderColor;

  switch(name) {
    case 'black':
      primary = 'white bg-black';
      secondary = 'black';
      borderColor = 'black';
      break;
    case 'blue':
      primary = 'white bg-blue';
      secondary = 'blue';
      borderColor = 'blue';
      break;
    default:
      primary = 'bg-silver';
      secondary = 'bg-white';
      borderColor = 'darken-3';
  }

  return {
    primary: primary,
    secondary: secondary,
    borderColor: borderColor,
  };

};
