import React, { Component} from 'react'

const bgImg = {
  backgroundImage: `url(${'https://images.craigslist.org/00I0I_lc2pBi5qCP5_50x50c.jpg'})`
};

export default class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }
  componentWillMount () {
    const allImgs = [
      'https://images.craigslist.org/00I0I_lc2pBi5qCP5_50x50c.jpg',
      'https://images.craigslist.org/00r0r_cVTZJAGeGO8_600x450.jpg',
      'https://images.craigslist.org/00n0n_9y2AA8gJS8P_600x450.jpg',
      'https://images.craigslist.org/01212_8y7exdcjl0M_600x450.jpg',
      'https://images.craigslist.org/00X0X_dRQXeXPqDip_600x450.jpg',
      'https://images.craigslist.org/00R0R_aqCHHdXXDW7_600x450.jpg'
    ]
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }
  loopImages = () => {
    return this.state.allImgs.map((img, i) => {
      return (
          <div key={i}className='thumb-image' style={{
              "backgroundImage": `url('${img}')`
          }}></div>
      )
    })
  }

  //buttons for next & previous
  nextBtn = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }
  prevBtn = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
  }

  render () {
    const { match, location, history } =  this.props
    return (
      <div className='gallery'>
        <div className='slider'>
          <div className='main-image'>
            <div className='arrows left-arrow' onClick={this.prevBtn}>{'<'}</div>
            <div className='arrows right-arrow' onClick={this.nextBtn}>{'>'}</div>
            <div className='image-1' style={{
              "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
            }}></div>
          </div>
        </div>
        <div className='thumbnails'>
          {/* <div className='thumb-image' style={ bgImg }></div> */}
          {this.loopImages()}
        </div>
      </div>
    );
  }
}
