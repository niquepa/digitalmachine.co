import React from 'react';

const Slider = props => (
  <div class="tp-banner-container">
    <div class="tp-banner" >
      <ul>
        <!-- SLIDE  01-->
        <li data-transition="slidehorizontal" data-slotamount="7" data-masterspeed="1000"  data-fstransition="fade" data-fsmasterspeed="1000" data-fsslotamount="7">
          
          <!-- LAYER NR. 1 -->
          <div class="tp-caption tp-fade fadeout fullscreenvideo"
               data-x="0"
               data-y="0"
               data-speed="1000"
               data-start="1100"
               data-easing="Power4.easeOut"
               data-endspeed="1500"
               data-endeasing="Power4.easeIn"
               data-autoplay="true"
               data-autoplayonlyfirsttime="false"
               data-nextslideatend="true"
               data-forceCover="1"
               data-dottedoverlay="twoxtwo"
               data-aspectratio="16:9"
               data-forcerewind="on"
               style="z-index: 2">
            
            <video class="video-js vjs-default-skin" preload="none" width="100%" height="100%"
                   poster='img/slide/slides/video-bg.png' data-setup="{}">
              <source src='img/video/video-slide.webm' type='video/webm' />
            </video>
          </div>
          
          <!-- LAYER NR. 2 -->
          <div class="tp-caption large_bold_white tp-fade fadeout tp-resizeme"
               data-x="30"
               data-y="120" data-voffset="0"
               data-speed="500"
               data-start="1000"
               data-easing="Power4.easeOut"
               data-splitin="chars"
               data-splitout="chars"
               data-elementdelay="0.05"
               data-endelementdelay="0.05"
               data-endspeed="300"
               style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;">Design and Development
          </div>
          <!-- LAYER NR. 2 -->
          
          <!-- LAYER NR. 3 -->
          <div class="tp-caption medium_light_white tp-fade fadeout tp-resizeme"
               data-x="30"
               data-y="195" data-voffset="120"
               data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
               data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
               data-speed="500"
               data-start="1800"
               data-easing="Power3.easeInOut"
               data-splitin="words"
               data-splitout="words"
               data-elementdelay="0.12"
               data-endelementdelay="0.12"
               data-endspeed="300"
               style="z-index: 5; max-width: auto; max-height: auto; white-space: nowrap;">Ipad And Android Devices
          </div>
          <!-- LAYER NR. 3 -->
        </li>
        <!-- END SLIDE  01-->
        
        <!-- SLIDE  02-->
        <li data-transition="zoomout" data-slotamount="7" data-masterspeed="1000" >
          <!-- MAIN IMAGE -->
          <img src="img/slide/slides/1.jpg"  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat">
            <!-- LAYERS -->
            
            <!-- LAYER NR. 1 -->
            <div class="tp-caption large_bold_white large_text lft tp-resizeme"
                 data-x="right"
                 data-y="120" data-voffset="0"
                 data-speed="500"
                 data-start="1000"
                 data-easing="Power4.easeOut"
                 data-splitin="chars"
                 data-splitout="chars"
                 data-elementdelay="0.05"
                 data-endelementdelay="0.05"
                 data-endspeed="300"
                 style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;">Font Awesome Icons
            </div>
            <!-- LAYER NR. 1 -->
            
            <!-- LAYER NR. 2 -->
            <div class="tp-caption medium_light_white large_text lft tp-resizeme"
                 data-x="right"
                 data-y="195" data-voffset="120"
                 data-speed="500"
                 data-start="1800"
                 data-easing="Power3.easeInOut"
                 data-splitin="words"
                 data-splitout="words"
                 data-elementdelay="0.12"
                 data-endelementdelay="0.12"
                 data-endspeed="300"
                 style="z-index: 5; max-width: auto; max-height: auto; white-space: nowrap;">Our Most Powerfull Features Ever
            </div>
          <!-- LAYER NR. 2 -->
        
        </li>
        <!-- END SLIDE  02-->
        
        <!-- SLIDE  03-->
        <li data-transition="zoomout" data-slotamount="7" data-masterspeed="1000"  data-saveperformance="off" >
          <!-- MAIN IMAGE -->
          <img src="img/slide/slides/2.jpg"  alt="power-to-creators-slider" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
            <!-- LAYERS -->
            
            <!-- LAYER NR. 1 -->
            <div class="tp-caption large_text lft tp-resizeme"
                 data-x="center" data-hoffset="0"
                 data-y="center" data-voffset="-100"
                 data-speed="500"
                 data-start="500"
                 data-easing="Power2.easeIn"
                 data-splitin="lines"
                 data-splitout="none"
                 data-elementdelay="0.1"
                 data-endelementdelay="0.1"
                 data-endspeed="300"
                 style="z-index: 2; max-width: auto; max-height: auto; white-space: normal;">YOU RELAX, WE CARE FOR YOUR INFORMATION!
            </div>
            
            <!-- LAYER NR. 2 -->
            <div class="tp-caption small_text lft tp-resizeme"
                 data-x="center" data-hoffset="0"
                 data-y="center" data-voffset="-30"
                 data-speed="300"
                 data-start="1100"
                 data-easing="Power2.easeIn"
                 data-splitin="lines"
                 data-splitout="none"
                 data-elementdelay="0.1"
                 data-endelementdelay="0.1"
                 data-endspeed="300"
                 style="z-index: 3; font-size:16px; max-width: auto; max-height: auto; white-space: normal;">WE CARE VERY WELL YOUR INFORMATION, OUR PRIORITY IS TO ENSURE THE SAFETY OF YOUR DATA!
            </div>
            
            <!-- LAYER NR. 3 -->
            <div class="tp-caption style-caption lfb tp-resizeme"
                 data-x="center"
                 data-y="center" data-voffset="30"
                 data-speed="300"
                 data-start="1600"
                 data-easing="Power3.easeInOut"
                 data-splitin="none"
                 data-splitout="none"
                 data-elementdelay="0.1"
                 data-endelementdelay="0.1"
                 data-endspeed="300">
              <a href="#" class="button">
                <span><i class="fa fa-android"></i></span>Android App
              </a>
            </div>
        </li>
        <!-- END SLIDE  03-->
      </ul>
    </div>
  </div>
);

export default Slider;