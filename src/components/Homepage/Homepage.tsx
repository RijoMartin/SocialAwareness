import React, { Component } from 'react';
import  './Homepage.css';
import HomePageProps from './HomePageProps'
import HomePageState from './HomePageState'
import Poly14 from '../Sections/Poly14'
class Homepage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      showHomePage: true,
    }
  }

changePageState = () =>{
  this.setState({
    showHomePage:false,
  })
}

  render() {
    return (
<div>
      {this.state.showHomePage && (
      <div className="App">
        <svg width="1256" height="600"
          xmlns="http://www.w3.org/2000/svg">

          <polygon points="160,30 90,90 30,90"  id="poly1">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 70 70"
              to="360 160 170"
              dur="60s"
              repeatCount="indefinite" />
          </polygon> 

           <polygon points="160,130 230,160 130,220" className="polygonMain" id="poly2" 
          onClick={() => { console.log("it works!") }}>
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 170 270"
              to="0 160 170"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

         <polygon points="100,330 220,390 130,370" className="polygonMain" id="poly3"
          >
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 170 330"
              to="360 160 270"
              dur="60s"
              repeatCount="indefinite" />
             
          </polygon>   

           <polygon points="260,430 223,495 130,510" className="polygonMain" id="poly4" 
          onClick={() => { console.log("it works!") }}>
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 260,430"
              to="360 130,610"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>   

          <polygon points="290,30 290,50 230,100"  id="poly5">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 290 30"
              to="0 230 170"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="390,230 350,250 290,230"  id="poly6">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 400 240"
              to="360 250 230"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="370,370 320,390 300,330"  id="poly7">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 400 240"
              to="360 250 230"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="420,470 390,490 410,430"  id="poly8">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 420 470"
              to="0 410 380"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="370,570 320,560 300,530"  id="poly9">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 470 570"
              to="360 300 530"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="570,70 520,40 500,60"  id="poly10">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 570 10"
              to="0 500 60"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

        <polygon points="370,170 420,140 400,160"  id="poly11">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 370 200"
              to="360 400 160"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

           <polygon points="470,120 520,140 500,160"  id="poly12">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 570 150"
              to="0 500 160"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

           <polygon points="650,40 620,10 620,70"  id="poly13">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 650 40"
              to="360 620 170"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="650,150 580,210 600,170"  id="poly14"
           onClick={this.changePageState}>
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 650 150"
              to="0 600 170"
              dur="30s"
              repeatCount="1" />
              <animate
              attributeName="fill"
              values="#D8D5D5;transparent"
              begin="10s"
              dur="2s"
              calcMode="discrete"
              repeatCount="indefinite"
            />
          </polygon>

          <polygon points="800,550 810,510 890,570"  id="poly15">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 850 550"
              to="360 890 510"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

         <polygon points="750,150 780,210 700,170"  id="poly16">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 750 150"
              to="0 710 150"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>
          

           <polygon points="750,70 780,30 700,70"  id="poly17">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 750 50"
              to="360 710 180"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="920,200 980,230 900,270"  id="poly18">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 920 200"
              to="0 900 180"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

         <polygon points="750,350 760,310 700,370"  id="poly19">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 750 350"
              to="360 700 360"
              dur="60s"
              repeatCount="indefinite1" />
          </polygon>

          <polygon points="850,350 860,310 800,270"  id="poly20">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 850 350"
              to="0 800 270"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="750,410 760,510 730,470"  id="poly21">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 750 410"
              to="360 730 450"
              dur="60s"
              repeatCount="indefinite1" />
          </polygon>

         <polygon points="950,50 980,130 930,170"  id="poly22">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 920 100"
              to="0 900 200"
              dur="60s"
              repeatCount="indefinite1" />
          </polygon>

          <polygon points="940,350 960,310 980,450"  id="poly23">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 950 350"
              to="0 980 470"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="1240,450 1160,440 1080,500"  id="poly24">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 1240 450"
              to="0 1080 420"
              dur="60s"
              repeatCount="indefinite" />
          </polygon>

          <polygon points="1210,350 1090,310 1080,350"  id="poly25">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 1210 350"
              to="360 1080 380"
              dur="60s"
              repeatCount="1" />
          </polygon>

          <polygon points="1110,50 1110,190 1155,70"  id="poly26">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 1110 50"
              to="0 1155 40"
              dur="60s"
              repeatCount="indefinite" />
          </polygon> 

        </svg>
      </div>)}
      {!this.state.showHomePage && (

        <Poly14/>
      )}
      </div>
      
    );
  }
}
export default Homepage;