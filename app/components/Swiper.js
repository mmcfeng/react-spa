import React,{Component} from 'react'

export default class Swiper extends Component{
	constructor(props) {
    super(props);
    console.log('exampleComponent mounted');
  }

  componentDidMount() {
       console.log('exampleComponent mounted');
  }
	render(){
		return (
			<section className="component content">
				<div className="swiper-container" data-space-between='10'>
			    <div className="swiper-wrapper">
			      <div className="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="" /></div>
			      <div className="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i4/TB10rkPGVXXXXXGapXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="" /></div>
			      <div className="swiper-slide"><img src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1kQI3HpXXXXbSXFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg" alt="" /></div>
			    </div>
			    <div className="swiper-pagination"></div>
			  </div>
			</section>
		)
	}
}