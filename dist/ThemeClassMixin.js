
// Theme mixin

module.exports = {

  getThemeClasses: function() {

    var theme = this.props.theme;
    var classes = {};
    classes.main = '';

    switch (theme) {
      case 'light-gray':
        classes.main = 'bg-light-gray';
        break;
      case 'yellow':
        classes.main = 'bg-yellow';
        break;
      case 'blue':
        classes.main = 'white bg-blue';
        break;
      case 'green':
        classes.main = 'white bg-green';
        break;
      case 'red':
        classes.main = 'white bg-red';
        break;
      case 'dark-gray':
        classes.main = 'white bg-dark-gray';
        break;
      default:
        classes.main = 'bg-lighter-gray';
        break;
    }

    return classes;

  }

};


