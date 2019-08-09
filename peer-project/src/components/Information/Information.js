import React from 'react';
import './Information.scss';
import Form1Information from '../Form1Information/Form1Information.js';
import Form2Information from '../Form2Information/Form2Information.js';


class Information extends React.Component {
  state = {
    formStatus: 1,
    title: '',
    numCategories: ''
  }
  nameAndCategoriesNext = (event) => {
    event.preventDefault();
    if(this.state.formStatus === 2) {
      this.setState({
        formStatus: 3
      })
    } else { 
      this.setState({
        formStatus: 2,
        numCategories: event.target.chartCategories.value
      });
    }
  }
  render() {
    let formToRender;
    //console.log(`hello ${this.state.numCategories}`);
    switch(this.state.formStatus) {
      case 1:
        formToRender = (
          <>
            <Form1Information />
          </>
        );
        break;
      case 2:
        formToRender = (
          <>
            <Form2Information numCategories={this.state.numCategories} />
          </>
        );
        break;
      case 3:
        formToRender = (
          <>
            <p>hello</p>
          </>
        );
        break;
      default:
        console.log("dumb");
    }

    return (
      <>
        <div className="chart-form">
          <form className="information" onSubmit={this.nameAndCategoriesNext}>
            {formToRender}
            <button className="next-name-categories" type="submit">Next</button>
          </form>
        </div>
      </>
    )
  }
}
export default Information;