import React, { Component } from 'react'

export default class Skeleton extends Component {
  render() {
    return (
      <div>
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </div>
    );
  }
}


// how to redirect to another component after login in reactjs  class component