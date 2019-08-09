import React from 'react';

class Form2Information extends React.Component {
  render() {
    let nameValueArray = [];

    for (let i = 0; i < this.props.numCategories; i++) {
      nameValueArray.push(<NameValueField key={i}/>);
    }

    return (
      <div className="information__form2">
        <h2>Enter the name of the first Category, followed by a comma and space, and finally the value of the Category:</h2>
        {nameValueArray}
      </div>
    )
  }
}
class NameValueField extends React.Component {
  render() {
    return(
      <>
        <div className="information__id">
          <label htmlFor="chartID">ID, value: </label>
          <input type="text" name="chartID" id="chartID" required></input>
        </div>
      </>
    )
  }
}
export default Form2Information;