import React from 'react';
import Scrollchor from 'react-scrollchor';
import anime from 'animejs';
require('../scss/Header.scss');

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-inner">
          <ul className="nav-links inline">
              <li><Scrollchor to="#about">About</Scrollchor></li>
            <a href="">
              <li><Scrollchor to="#speakers">Speakers</Scrollchor></li>
            </a>
            <a href="">
              <li><Scrollchor to="#schedule">Schedule</Scrollchor></li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
            <a href="">
              <li>Sponsors</li>
            </a>
          </ul>

        </div>
      </div>
    )
  }
}

class LogoSVG extends React.Component {
  render() {
    return (
      <svg width="261px" height="276px" viewBox="0 0 261 276" version="1.1">
          <title>Founder's School Logo</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>

            <g id="logo">
              <g id="founders">
                <path d="M261,54.7683425 L261,126.220119 L40.6935484,147.106599 L40.6935484,75.6548223 L261,54.7683425 Z" id="Rectangle-2" fill="#C44C60"></path>
                <path d="M71.9504032,110.542016 L71.9504032,106.163843 L60.6193548,107.282664 L60.6193548,102.379111 L72.1959677,101.236043 L72.1959677,96.8578705 L55.6379032,98.492804 L55.6379032,121.854733 L60.6193548,121.362867 L60.6193548,111.660837 L71.9504032,110.542016 Z M86.7895161,95.031633 C79.7032258,95.7313291 74.546371,101.284169 74.546371,108.32427 C74.546371,115.364372 79.7032258,119.898842 86.7895161,119.199146 C93.8407258,118.502913 98.9975806,112.950074 98.9975806,105.909972 C98.9975806,98.8698707 93.8407258,94.3354007 86.7895161,95.031633 Z M86.7895161,99.4448309 C91.1044355,99.0187783 93.8758065,102.037521 93.8758065,106.415693 C93.8758065,110.75884 91.1044355,114.359895 86.7895161,114.785948 C82.4395161,115.215464 79.6681452,112.161696 79.6681452,107.818549 C79.6681452,103.440377 82.4395161,99.8743474 86.7895161,99.4448309 Z M123.624194,91.7798778 L118.5375,92.2821349 L118.5375,106.152186 C118.5375,109.409546 116.678226,111.834754 113.064919,112.19153 C109.451613,112.548306 107.557258,110.493729 107.557258,107.236368 L107.557258,93.3663176 L102.505645,93.8651108 L102.505645,107.875263 C102.505645,113.654451 105.943548,117.307888 113.064919,116.604728 C120.18629,115.901568 123.624194,111.569218 123.624194,105.79003 L123.624194,91.7798778 Z M144.216532,89.7466024 L144.216532,104.422237 L133.376613,90.8169297 L128.254839,91.3226507 L128.254839,114.68458 L133.23629,114.192714 L133.23629,98.9566734 L144.391935,113.091212 L149.197984,112.616666 L149.197984,89.2547369 L144.216532,89.7466024 Z M163.054839,87.8865192 L153.828629,88.7975097 L153.828629,112.159439 L163.089919,111.244984 C170.386694,110.524505 175.473387,105.398898 175.473387,98.3237708 C175.473387,91.3186947 170.386694,87.1625762 163.054839,87.8865192 Z M158.810081,92.6838167 L163.089919,92.2612279 C167.860887,91.7901454 170.386694,94.7280584 170.386694,98.8260279 C170.386694,102.818921 167.685484,106.413048 163.054839,106.870276 L158.810081,107.2894 L158.810081,92.6838167 Z M183.997984,104.802362 L183.997984,99.4785039 L195.329032,98.3596828 L195.329032,93.9815102 L183.997984,95.1003313 L183.997984,90.196778 L195.574597,89.05371 L195.574597,84.6755374 L179.016532,86.310471 L179.016532,109.6724 L195.574597,108.037466 L195.574597,103.659294 L183.997984,104.802362 Z M218.306855,89.9614245 C218.306855,85.6182773 215.289919,82.7288581 210.41371,83.2103322 L199.468548,84.291051 L199.468548,107.65298 L204.45,107.161114 L204.45,98.8600991 L208.098387,98.4998595 L212.693952,106.347111 L218.447177,105.779041 L213.15,97.4056347 C215.675806,96.5608066 218.306855,94.0593941 218.306855,89.9614245 Z M204.45,88.177358 L209.712097,87.6577816 C211.676613,87.4638065 213.185081,88.5057242 213.185081,90.4321201 C213.185081,92.4285668 211.676613,93.768375 209.712097,93.9623502 L204.45,94.4819265 L204.45,88.177358 Z M221.113306,84.5706116 C221.113306,86.076703 222.165726,86.9885237 223.49879,86.8568977 C223.779435,86.829187 224.060081,86.7664509 224.165323,86.6860086 C223.884677,87.974633 222.586694,89.5738612 221.464113,90.2801356 L223.393548,91.6657664 C225.568548,89.9098914 227.006855,87.4211734 227.006855,84.7942699 C227.006855,82.5176201 225.533468,81.3671624 223.884677,81.529963 C222.37621,81.6789082 221.113306,83.0645202 221.113306,84.5706116 Z M235.005242,87.1567981 C235.005242,85.7557829 236.197984,84.7273523 238.302823,84.5195218 C240.688306,84.2839805 243.214113,84.8401676 245.108468,86.4043892 L247.879839,82.4180553 C245.564516,80.5101207 242.477419,79.6941266 238.758871,80.0612939 C233.25121,80.6051171 229.883468,84.159981 229.883468,88.0477982 C229.883468,96.8391688 243.354435,92.6719976 243.354435,96.7349417 C243.354435,98.1009316 242.056452,99.454982 239.285081,99.7286256 C236.057661,100.047299 233.496774,98.8290936 231.847984,97.2756505 L229.111694,101.433647 C231.321774,103.422024 234.549194,104.609442 239.074597,104.162607 C245.354032,103.542579 248.441129,100.015426 248.441129,95.7423293 C248.441129,87.0210095 235.005242,90.8344631 235.005242,87.1567981 Z" id="FOUNDER’S" fill="#FFFFFF"></path>
              </g>
              <g id="first">
                <path d="M101.032258,50.3362491 L54.7258065,55.0239077 L54.7258065,18.6978109 L101.032258,14.0101523 L101.032258,50.3362491 Z" id="Rectangle-2-Copy-3" fill="#0D7FA6"></path>
              </g>
              <g id="school">
                <path d="M242.758065,131.695431 L242.758065,203.147208 L22.4516129,224.033688 L22.4516129,152.581911 L242.758065,131.695431 Z" id="Rectangle-2-Copy" fill="#0D7FA6"></path>
                <path d="M83.1762097,185.90133 C83.1762097,177.18001 69.7403226,180.850463 69.7403226,177.172798 C69.7403226,175.771783 70.9330645,174.756047 73.0379032,174.570619 C75.4233871,174.360467 77.9491935,174.943536 79.8435484,176.52792 L82.6149194,172.571082 C80.2995968,170.638505 77.2125,169.789654 73.4939516,170.117245 C67.9862903,170.602449 64.6185484,174.121469 64.6185484,178.009286 C64.6185484,186.800657 78.0895161,182.77686 78.0895161,186.839804 C78.0895161,188.205794 76.7915323,189.546029 74.0201613,189.790177 C70.7927419,190.0745 68.2318548,188.829039 66.5830645,187.258047 L63.8467742,191.386922 C66.0568548,193.398821 69.2842742,194.620589 73.8096774,194.221918 C80.0891129,193.668723 83.1762097,190.174426 83.1762097,185.90133 Z M107.627419,185.49854 L103.347581,183.80908 C102.365323,185.786984 100.260484,187.478503 97.875,187.688655 C93.5951613,188.065693 90.5080645,185.080294 90.5080645,180.667096 C90.5080645,176.253898 93.5951613,172.724576 97.875,172.347539 C100.260484,172.137387 102.365323,173.45805 103.347581,175.262887 L107.627419,172.784326 C105.978629,169.987447 102.996774,167.483132 97.875,167.934341 C90.8237903,168.555526 85.3862903,173.903077 85.3862903,181.118305 C85.3862903,188.298508 90.8237903,192.723038 97.875,192.101853 C102.996774,191.650644 105.978629,188.550898 107.627419,185.49854 Z M131.657661,165.343495 L126.641129,165.785432 L126.641129,174.962082 L115.590726,175.935581 L115.590726,166.758931 L110.609274,167.197778 L110.609274,190.559707 L115.590726,190.12086 L115.590726,180.278728 L126.641129,179.305229 L126.641129,189.147361 L131.657661,188.705424 L131.657661,165.343495 Z M159.581855,174.581956 C159.581855,167.541854 154.425,162.952499 147.37379,163.573684 C140.2875,164.197959 135.130645,169.695914 135.130645,176.736015 C135.130645,183.776117 140.2875,188.365472 147.37379,187.741197 C154.425,187.120012 159.581855,181.622057 159.581855,174.581956 Z M140.252419,176.284806 C140.252419,171.906634 143.02379,168.3701 147.37379,167.986882 C151.68871,167.606754 154.460081,170.654992 154.460081,175.033165 C154.460081,179.376312 151.68871,182.94787 147.37379,183.327999 C143.02379,183.711217 140.252419,180.627953 140.252419,176.284806 Z M186.418548,172.217744 C186.418548,165.177643 181.261694,160.588287 174.210484,161.209472 C167.124194,161.833748 161.967339,167.331702 161.967339,174.371804 C161.967339,181.411905 167.124194,186.00126 174.210484,185.376985 C181.261694,184.7558 186.418548,179.257846 186.418548,172.217744 Z M167.089113,173.920595 C167.089113,169.542422 169.860484,166.005889 174.210484,165.62267 C178.525403,165.242542 181.296774,168.290781 181.296774,172.668953 C181.296774,177.0121 178.525403,180.583659 174.210484,180.963787 C169.860484,181.347006 167.089113,178.263742 167.089113,173.920595 Z M204.625403,177.899068 L194.732661,178.770581 L194.732661,159.786825 L189.716129,160.228763 L189.716129,183.590691 L204.625403,182.277241 L204.625403,177.899068 Z" id="SCHOOL" fill="#FFFFFF"></path>
              </g>
              <g id="second">
                <path d="M152.951613,56.4249229 L152.951613,20.0988261 L242.758065,10.8051393 L242.758065,47.1312361 L152.951613,56.4249229 Z" id="Rectangle-2-Copy-4" fill="#0D7FA6"></path>
              </g>
              <g id="third">
                <path d="M87,36.3260968 L40.6935484,41.0137554 L40.6935484,4.68765858 L87,0 L87,36.3260968 Z" id="Rectangle-2-Copy-2" fill="#C44C60"></path>
              </g>
              <g id="fourth">
                <path d="M46.3064516,238.94686 L0,244.160964 L0,203.755283 L46.3064516,198.54118 L46.3064516,238.94686 Z" id="Rectangle-2-Copy-5" fill="#C44C60"></path>
              </g>
              <g id="fifth">
                <path d="M261,256.868428 L220.306452,261.450519 L220.306452,225.942497 L261,221.360406 L261,256.868428 Z" id="Rectangle-2-Copy-6" fill="#C44C60"></path>
              </g>
              <g id="sixth">
                <path d="M246.967742,270.87858 L206.274194,275.460671 L206.274194,239.952649 L246.967742,235.370558 L246.967742,270.87858 Z" id="Rectangle-2-Copy-7" fill="#0D7FA6"></path>
              </g>

          </g>
      </svg>


    )
  }
}

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimated: false
    };
  }

  componentDidMount() {
    let timeline = anime.timeline();

    timeline
      .add({
        targets: 'header.header-wrapper',
        translateX: [-window.innerWidth, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 600
      })
      .add({
        targets: 'div.nav',
        translateY: [-75, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 400,
        offset: '-=400'
      })
      .add({
        targets: ['g#first', 'g#second', 'g#third', 'g#fourth', 'g#fifth', 'g#sixth', 'g#founders', 'g#school'],
        translateX: [ -265, 0 ],
        translateY: [30, 0],
        opacity: [0, 1],
        offset: '-=400',
        elasticity: 100,
        delay: function(el, i, l) {
          return i * 100;
        },
        easing: 'easeInOutQuad',
        duration: 800,
        complete: () => {
          // pulse
        }
      })
      .add({
        targets: ['div.description > .anime-group'],
        translateX: [15, 0],
        opacity: [0, 1],
        delay: function(el, i, l) {
          return i * 200;
        },
        easing: 'easeInOutQuad',
        duration: 1000,
        offset: '-=400'
      });

  }

  render() {
    return (
      <div className="logo">
        <LogoSVG/>
      </div>
      // <object className="logo" data="./assets/logo.svg" type="image/svg+xml">
      //   <img src="./assets/logo.svg" />
      // </object>
    )
  }
}

class HeaderWrapper extends React.Component {
  render() {
    return (
      <header className="header-wrapper" style={{backgroundImage: 'url(\'./assets/vladspeaking.jpg\')'}}>
        <Navbar />
        <Title />
      </header>
    )
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className="description-wrapper">
        <div className="description">
          <h1 className="anime-group">Tech Meets <span>Entrepreneurship</span></h1>
          <p className="anime-group">SoCal’s Largest University Entrepreneurship Conference</p>
          <h3 className="anime-group"><i className="fa fa-calendar-check-o"></i>&nbsp;MAY 7, 9AM - 7PM</h3>
          <button className="anime-group">Apply</button> <button className="anime-group">Sponsor</button>
        </div>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="title-wrapper">
        <Logo />
        <Description />
      </div>
    )
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper />
    )
  }
}
