
var React = require('react');

var Rebass = require('../../..');
var Button = Rebass.Button;

var Hero = require('./hero.jsx');
var Footer = require('./footer.jsx');
//var Section = require('./section.jsx');


module.exports = React.createClass({

  render: function() {

    var style = {
      minHeight: '100vh',
    };

    return (
      <div style={style}>
        <Hero {...this.props} />
        <div className="container px2">
          <section id="intro" className="py4">
            <p className="h3 bold">
              Rebass is a library of themeable UI components built with the global core <a href="//basscss.com">Basscss</a> styles.
            </p>
          </section>
          <section id="features" className="sm-flex py4 mxn2">
            <div className="sm-col-4 px2">
              <h2>Reusable Components</h2>
              <p></p>
            </div>
            <div className="sm-col-4 px2">
              <h2>Common Styling API</h2>
              <p></p>
            </div>
            <div className="sm-col-4 px2">
              <h2>Themeable</h2>
              <p></p>
            </div>
          </section>
          <section id="examples-promo" className="py4">
          </section>
          <section id="cta" className="py4">
          </section>
        </div>
        <Footer {...this.props} />
      </div>
    )
  }

});

