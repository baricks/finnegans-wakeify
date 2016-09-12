import React, { Component } from 'react';

var nlp = require('nlp_compromise');
// var rita = require('rita');

var output
var output_new

// convert the text file into a string
// var reader = new FileReader().readAsText ('/joyce.txt', 'UTF-8');
// var joyce = reader.result();

var joyceWords = [
  "riverrun",
  "Eve and Adam",
  "swerve",
  "shore",
  "bend",
  "bay",
  "commodius",
  "vicus",
  "recirculation",
  "Howth Castle",
  "(bababadalgharaghtakamminarronnkonnbronntonner-ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur-nuk!)",
  "Environs",
  "Sir Tristram",
  "violer d'amores",
  "short sea",
  "passen-core",
  "side",
  "scraggy",
  "isthmus",
  "Europe Minor",
  "wielderfight",
  "penisolate",
  "war:",
  "topsawyer",
  "(bababadalgharaghtakamminarronnkonnbronntonner-ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur-nuk!)",
  "rocks",
  "stream",
  "Oconee",
  "themselse",
  "Laurens County",
  "gorgios",
  "doublin",
  "mumper",
  "avoice",
  "afire",
  "bellowsed",
  "mishe mishe",
  "tauftauf",
  "thuartpeatrick",
  "venissoon",
  "kidscad",
  "buttended",
  "old isaac",
  "vanessy",
  "(bababadalgharaghtakamminarronnkonnbronntonner-ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur-nuk!)",
  "sosie sesthers",
  "twone",
  "nathandjoe",
  "peck",
  "pas malt",
  "Jhem or Shen",
  "arclight",
  "rory",
  "end to the regginbrow",
  "ringsome",
  "aquaface.",
  "(bababadalgharaghtakamminarronnkonnbronntonner-ronntuonnthunntrovarrhounawnskawntoohoohoordenenthur-nuk!)"
]



class Formy extends Component {

  constructor( props ) {
    super()
    this.state = {
      value: 'Start typing here...',
    }
  }

  handleClick () {
    this.setState({value: ''});
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit () {

    output = this.state.value;
    output_new = output;
    var tags = nlp.sentence(output).tags();
    // console.log(tags);

    var nounList = [];
    var outputWords = output.split(' ');

    // Add all the nouns from the output to an array

    for (var k = 0; k < output.length; k++) {
      if (tags[k] === "Noun") {
        nounList.push(outputWords[k]);
      }
    }

    // Replace the nouns in the output with Joyce words

    for (var i = 0; i < nounList.length; i++) {
      // var rand = joyceWords[Math.floor(Math.random() * joyceWords.length)];
      output_new = nlp.sentence(output_new).replace(nounList[i], joyceWords[i]).text()
    }

    console.log(output_new)

    // var file = document.getElementById("file").files[0];
    // if ( this.state.value !== '' ) {
    //   output = this.state.value;
    // } else if (this.state.value == '') {
    //   output = FileReader.readAsText(file)
    // }

  }

  render() {

    return (
      <div>
        <textarea
          onClick={this.handleClick.bind(this)}
          onChange={this.handleChange.bind(this)}
          type="text"
          className="box"
          value={this.state.value}
        />
        <br/><br/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>&nbsp;&nbsp;&nbsp;
        <label className="custom-file-upload"> <input type="file"/></label>
        <br/><br/>
        <div>Results:<br/><br/>{output_new}</div>
      </div>
    )
  }
}

export default Formy;
