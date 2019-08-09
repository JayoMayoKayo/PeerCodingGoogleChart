import React from 'react';
import ReactDom from 'react-dom';
import './Information.scss';

class Information extends React.Component {
  
  nameAndCategoriesNext(event) {
    event.preventdefault();
    console.log("hello world");
  }
  render() {
    return (
      <>
        <div className="chart-form">
          <form className="information">
            <div className="information__name">
              <label for="chart-title">Enter the Name of the Chart:</label>
              <input type="text" name="chart-title" id="chart-title" required></input>
            </div>
            <div className="information__categories">
              <label for="chart-categories">Enter the Number of Categories:</label>
              <input type="text" name="chart-categories" id="chart-categories" required></input>    
            </div>
            <button className="next-name-categories" type="submit">Next</button>
          </form>
        </div>
      </>
    )
  }
}
export default Information;