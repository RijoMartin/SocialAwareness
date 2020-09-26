import React, { Component } from 'react';
import './Poly14.css';
import Poly14Props from './Poly14Props'
import Poly14State from './Poly14State'
class Poly14 extends Component<Poly14Props, Poly14State> {
  constructor(props: Poly14Props) {
    super(props);
    this.state = {
      showHomePage: true,
    }
  }


  render() {
    return (
      <div className="ViewPort">
        <img src="RapeCulture.png" alt="Rape Culture" id="img1"></img>

      </div>

    );

  }
}
export default Poly14;