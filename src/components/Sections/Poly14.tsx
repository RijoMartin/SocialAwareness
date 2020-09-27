import React, { Component } from 'react';
import './Poly14.css';
import Poly14Props from './Poly14Props'
import Poly14State from './Poly14State'
class Poly14 extends Component<Poly14Props, Poly14State> {
  constructor(props: Poly14Props) {
    super(props);
    this.state = {
      showFirstPage: true,
      showStory: false,
    }
  }
  componentDidMount(){
    var elem = document.querySelector('#imgA1');    
      setTimeout(() => {
        if(elem != null)
        elem.setAttribute("style","opacity: 100%;transition: opacity 3s;")
      }, 1000);  
  }

showStoryPage(){
  this.setState({
    showFirstPage:false,
    showStory:true
  })
}
  render() {
    return (
      <div className="ViewPort1">
        {this.state.showFirstPage && (
          <div >
            <div>
            <img src="A11.png" alt="Rape Culture" id="imgA1"></img>
            </div>
            <div>
            <img src="A2.png" alt="Rape Culture" id="imgA2"></img>
            </div>
            <div>
            <img src="she.png" alt="Rape Culture" id="imgA2_1" onClick={() => { this.showStoryPage() }}></img>
            </div>
            <div>
            <img src="A3.png" alt="Rape Culture" id="imgA3"></img>
            </div>
          </div>)
        }
        {this.state.showStory && (
          <div className="ViewPort1">
            <div >
            <div>
            <img src="B1.png" alt="Rape Culture" className="imgB"></img>
            </div>
            <div>
            <img src="B2.png" alt="Rape Culture" className="imgB"></img>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Pgom8LRF8hQ"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            <div>
            <img src="B3.png" alt="Rape Culture"  id="imgB3"></img>
            </div>
            <div>
            <img src="B4.png" alt="Rape Culture" className="imgB"></img>
            </div>
          </div>
          </div>)
        }
      </div>

    );

  }
}
export default Poly14;