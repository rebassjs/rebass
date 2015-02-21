
// Input text fuzzy match a la Typeahead

// To do:
// - [ ] regex match
// - [ ] handle key events
//   - [x] up/down to select
//   - [x] return to complete
//   - [x] esc to cancel autocomplete
//   - [ ] tab to complete
// - [ ] prop for max number of matches to show in menu list
// - [ ] Overlay for exiting with mouseclick
// - [ ] Sort by rank

var React = require('react');
var fuzzy = require('fuzzy');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      minScore: 0,
      //maxResults: 32,
      classes: {
        input: 'field-light',
        menu: 'bg-white border rounded',
        menuItem: 'block button button-nav-light',
      }
    }
  },

  getInitialState: function() {
    return {
      value: this.props.value,
      options: [],
      matches: [],
      selectedMatch: 0,
    }
  },


  findMatches: function(string) {
    var self = this;
    var results = fuzzy.filter(string, this.props.options);
    var matches = [];
    //results.sort(function(a, b) {
    //  return b.score - a.score;
    //});
    //results.map(function(result) {
    //  if (result.score > self.props.minScore) {
    //    matches.push(result.string);
    //  }
    //});
    this.setState({ matches: results });
  },

  clearMatches: function() {
    this.setState({ matches: [] }, function() {
      this.refs.input.getDOMNode().focus();
    });
  },

  completeWord: function(word) {
    var $input = this.refs.input.getDOMNode();
    this.setState({
      value: word,
      matches: [],
      selectedMatch: 0,
    }, function() {
      this.props.onChange(this.state.value);
      $input.focus();
    });
  },

  handleChange: function(e) {
    var self = this;
    var value = e.target.value;
    this.setState({ value: value }, function() {
      self.findMatches(value);
      self.props.onChange(value);
    });
  },

  selectNextMatch: function() {
    var index = this.state.selectedMatch;
    if (index < this.state.matches.length - 1) {
      index++;
    }
    this.setState({ selectedMatch: index });
    return index;
  },

  selectPreviousMatch: function() {
    var index = this.state.selectedMatch;
    if (index > 0) {
      index--;
    }
    this.setState({ selectedMatch: index });
    return index;
  },

  handleKeyDown: function(e) {
    var $input = this.refs.input.getDOMNode();
    var $menu = this.refs.menu.getDOMNode();
    var $links = $menu.querySelectorAll('a');
    var index = this.state.selectedMatch;
    var $link = $links.item(index);
    var windowYPosition = window.pageYOffset;
    //console.log(e.which);
    switch (e.which) {
      // Return
      case 13:
        if (this.state.matches.length && (index < 1) ) {
          e.preventDefault();
          var value = this.state.matches[0].string;
          //console.log('return key ', value);
          this.completeWord(value);
        }
        break;
      // Esc
      case 27:
        this.clearMatches();
        $input.focus();
        window.scrollTo(0, windowYPosition);
        break;
      // Down
      case 40:
        e.preventDefault();
        var index = this.selectNextMatch();
        $link = $links.item(index);
        $link.focus();
        window.scrollTo(0, windowYPosition);
        break;
      // Up
      case 38:
        e.preventDefault();
        var index = this.selectPreviousMatch();
        $link = $links.item(index);
        $link.focus();
        window.scrollTo(0, windowYPosition);
        break;
    }
  },

  renderItem: function(match, i) {
    var self = this;
    var key = 'match-' + i;
    var handleClick = function(e) {
      self.completeWord(e.target.innerText);
    };
    var isActive = (self.state.selectedMatch == i);
    var menuItemClass = this.props.classes.menuItem;
    if (isActive) {
      menuItemClass += ' white bg-blue';
    }
    console.log(match);
    return (
      React.createElement("a", {href: "#!", 
        key: key, 
        ref: match.string, 
        onKeyDown: this.handleKeyDown, 
        className: menuItemClass, 
        onClick: handleClick}, 
        match.string
      )
    );
  },

  render: function() {
    var self = this;
    var containerStyle = {
      position: 'relative',
      zIndex: 1,
    };
    var menuStyle = {
      display: this.state.matches.length ? '' : 'none',
      position: 'absolute',
      left: 0,
      right: 0,
      maxHeight: '12rem',
      overflowY: 'auto',
    };

    return (
      React.createElement("div", {className: "", style: containerStyle}, 
        React.createElement("input", React.__spread({
          type: "text"}, 
          this.props, 
          {className: this.props.classes.input, 
          ref: "input", 
          value: this.state.value, 
          onChange: this.handleChange, 
          onKeyDown: this.handleKeyDown})
          ), 
        React.createElement("div", {ref: "menu", 
          className: this.props.classes.menu, 
          onKeyDown: this.handleKeyDown, 
          style: menuStyle}, 
          this.state.matches.map(this.renderItem)
        )
      )
    )
  }

});

