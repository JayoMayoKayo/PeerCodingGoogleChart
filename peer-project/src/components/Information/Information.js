import React from 'react';
import ReactDom from 'react-dom';
import './Information.scss';

class Information extends React.Component {
  state = {
    formStatus: 1
  }
  nameAndCategoriesNext = (event) => {
    event.preventDefault();
    console.log({
      title: event.target["chart-title"].value
    });
    this.setState({
      formStatus: 2
    });
  }
  render() {
    let formToRender;
    switch(this.state.formStatus) {
      case 1:
        formToRender = (
          <div className="information__form1">
            <div className="information__name">
              <label for="chart-title">Enter the Name of the Chart:</label>
              <input type="text" name="chart-title" id="chart-title" required></input>
            </div>
            <div className="information__categories">
              <label for="chart-categories">Enter the Number of Categories:</label>
              <input type="text" name="chart-categories" id="chart-categories" required></input>    
            </div>
          </div>
        );
        break;
      case 2:
        formToRender = (
          <div className="information__form2">
            <p>this is form 2</p>
          </div>
        );
        break;
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