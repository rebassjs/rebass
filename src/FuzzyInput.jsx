
// Input text fuzzy match a la Typeahead

// To do:
// - [ ] regex match
// - [ ] handle key events
//   - [x] up/down to select
//   - [x] return to complete
//   - [x] esc to cancel autocomplete
//   - [ ] tab to complete
// - [ ] prop for max number of matches to show in menu list

var React = require('react');
var fuzzy = require('fuzzy');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      minScore: 0,
      maxResults: 32,
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

  fuzzyMatch: function(string) {
    var self = this;
    var results = fuzzy.filter(string, this.props.options);
    var matches = [];
    results.map(function(result) {
      if (result.score > self.props.minScore) {
        matches.push(result.string);
      }
    });
    this.setState({ matches: matches });
    return matches;
  },

  // Combine into a single function
  findMatches: function(string) {
    this.fuzzyMatch(this.state.value);
    //this.setState({ matches: matches });
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
    console.log(e.which);
    switch (e.which) {
      // Return
      case 13:
        if (this.state.matches.length && (index < 1) ) {
          e.preventDefault();
          var value = this.state.matches[0];
          console.log('return key ', value);
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

  render: function() {
    var self = this;
    var renderItems = function(val, i) {
      var key = 'match-' + i;
      var handleClick = function(e) {
        self.completeWord(e.target.innerText);
      };
      var isActive = (self.state.selectedMatch == i);
      var linkClass = 'list-group-item ';
      if (isActive) {
        linkClass += 'active';
      }
      //var linkStyle = {
      //  display: 'block',
      //  lineHeight: '2',
      //  padding: '0 5px',
      //  backgroundColor: isActive ? 'blue' : '',
      //  color: isActive ? 'white' : '',
      //};
      return (
        <a href="#!"
          key={key}
          ref={val}
          onKeyDown={this.handleKeyDown}
          className={linkClass}
          onClick={handleClick}>
          {val}
        </a>
      );
    };

    var containerStyle = {
      position: 'relative',
      zIndex: 1,
    };
    var inputStyle = {
    };
    var menuStyle = {
      display: this.state.matches.length ? '' : 'none',
      position: 'absolute',
      left: 0,
      right: 0,
      //backgroundColor: 'white',
      //border: '1px solid #ccc',
      //borderRadius: '3px'
    };

    return (
      <div className="" style={containerStyle}>
        <input
          {...this.props}
          className="form-control"
          style={inputStyle}
          ref="input"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          />
        <div ref="menu"
          className="list-group"
          onKeyDown={this.handleKeyDown}
          style={menuStyle}>
          {this.state.matches.map(renderItems)}
        </div>
      </div>
    )
  }

});

