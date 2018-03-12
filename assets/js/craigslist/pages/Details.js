import React, { Component} from 'react'

const bgImg = {
  backgroundImage: `url(${'https://www.mclarenboston.com/galleria_images/329/329_main_l.jpg'})`
};

export default class Details extends Component {
  render () {
    const { match, location, history } =  this.props
    return (
      <div className='details-page'>
        <div className='container'>
          <div className='white-box'>

            <section className='sub-menu'>
              <div className='direction'>
                <a href='#' className='prev'>Prev</a>
                <a href='#' className='next'>Next</a>
              </div>
              <nav className='sub-links'>
                <a href='#'>More Ads by User</a>
                <a href='#'>Print</a>
                <a href='#'>Share</a>
                <a href='#'>Contact Seller</a>
              </nav>
            </section>

            <section className='content-area'>
              <div className='media-column'>
                <div className='gallery'>
                  <div className='slider'>
                    <div className='main-image'>
                      <div className='arrows left-arrow'>{'<'}</div>
                      <div className='arrows right-arrow'>{'>'}</div>
                      <div className='image-1' style={ bgImg }></div>
                    </div>
                  </div>
                  <div className='thumbnails'>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                    <div className='thumb-image' style={ bgImg }></div>
                  </div>
                </div>
              </div>
              <div className='details-column'>
                <div className='date'>Posted: Feb 28th</div>
                <h3 className='title'>Black 2016 BMW</h3>
                <h4 className='price'>4600</h4>
                <div className='more-details'>
                  <div className='info'>
                    <label>win</label>
                    <h5>loream ipsum</h5>
                  </div>
                  <div className='info'>
                    <label>mileage</label>
                    <h5>loream ipsum</h5>
                  </div>
                  <div className='info'>
                    <label>transmission</label>
                    <h5>manual</h5>
                  </div>

                  <div className='info'>
                    <label>win</label>
                    <h5>loream ipsum</h5>
                  </div>
                  <div className='info'>
                    <label>mileage</label>
                    <h5>loream ipsum</h5>
                  </div>
                  <div className='info'>
                    <label>transmission</label>
                    <h5>manual</h5>
                  </div>
                </div>
                <div className='description'>
                  <label>description</label>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad menipsum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad menipsum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.um dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad menipsum.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
