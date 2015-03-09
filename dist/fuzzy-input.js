
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

var FuzzyInput = React.createClass({displayName: "FuzzyInput",

  getDefaultProps: function() {
    return {
      minScore: 0,
      //maxResults: 32,
      classes: {
        input: 'block full-width field-light',
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
    var styles = {
      container: {
        position: 'relative',
        zIndex: 1,
      },
      overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: this.state.matches.length ? '' : 'none',
      },
      input: {
        position: 'relative',
      },
      menu: {
        display: this.state.matches.length ? '' : 'none',
        position: 'absolute',
        left: 0,
        //right: 0,
        minWidth: '12rem',
        maxHeight: '12rem',
        overflowY: 'auto',
      },
    };

    return (
      React.createElement("div", {className: "", style: styles.container}, 
        React.createElement("a", {href: "#!", style: styles.overlay, onClick: this.clearMatches}), 
        React.createElement("input", React.__spread({
          type: "text"}, 
          this.props, 
          {className: this.props.classes.input, 
          style: styles.input, 
          ref: "input", 
          value: this.state.value, 
          onChange: this.handleChange, 
          onKeyDown: this.handleKeyDown})
          ), 
        React.createElement("div", {ref: "menu", 
          className: this.props.classes.menu, 
          onKeyDown: this.handleKeyDown, 
          style: styles.menu}, 
          this.state.matches.map(this.renderItem)
        )
      )
    )
  }

});

module.exports = FuzzyInput;

