import React from 'react';

class Form1Information extends React.Component {
  render() {
    return (
      <div className="information__form1">
        <div className="information__name">
          <label htmlFor="chartTitle">Enter the Name of the Chart: </label>
          <input type="text" name="chartTitle" id="chartTitle" required></input>
        </div>
        <div className="information__categories">
          <label htmlFor="chartCategories">Enter the Number of Categories: </label>
          <input type="text" name="chartCategories" id="chartCategories" required></input>    
        </div>
      </div>
    )
  }
}
export default Form1Information;