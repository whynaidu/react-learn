import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center"}}>
          Made With &#10084;&#65039; by Vedant Naidu
        </Row>
      </div>
    );
  }
}

const updateAarray = await admin.findByIdAndUpdate(
  { _id: "63ce7c7ee0446027f9d6aedd" },
  {
    $push: {
      mywallpapers: "4343434343545677687",
    },
  }
);
updateAarray
  .save()
  .then(() => res.send(updateAarray))

  .catch((err) => res.send(err));