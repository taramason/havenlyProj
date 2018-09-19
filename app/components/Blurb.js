var React = require('react');
var style = require ('../styles/index.css');


class Blurb extends React.Component {
  render() {
    var text = "This is a small intro blurb that gives you just a bit of insight into Faye’s project. Should you decide to read more, then you scroll down to get the.";
    return (
      <div className={style.BlurbText}>
        <p>{text}</p>
      </div>
    )
  }
};

// ReactDOM.render (
//   <Blurb text= {"This is a small intro blurb that gives you just a bit of insight into Faye’s project. Should you decide to read more, then you scroll down to get the."} />
//
// )
module.exports = Blurb;
