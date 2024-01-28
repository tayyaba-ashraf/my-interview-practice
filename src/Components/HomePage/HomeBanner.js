import React from 'react';
import './HomeBannerStyle.css';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <>
      <div className="container" style={{ width: '80%' ,height:'100%'}}>
        <div className="FirstSection">
          <div className="FirstSectionDescription">
            <h1>Master the interview & land a job worth loving.</h1>
            <p>
              Simulate realistic interviews for over 120 different job positions and level up your skills in no time.
            </p>
            <a href={"https://myinterviewpractice.com/pricing/#table"} className="LearnMoreButton">
              Learn More
            </a>
          </div>
          <div className="FirstSectionImage">
            <img
              className="lozad"
              data-src="/images/hmBannerImg.webp"
              alt=""
              src="/images/hmBannerImg.webp"
              data-loaded="true"
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginLeft:'120px',marginTop:'20px', maxWidth: '950px'} }>
          <div className="SeconedSection">
            <div className="SeconedSectionImage">
              <img
                className="lozad"
                data-src="/images/rdHmSecImg.webp"
                alt=""
                src="/images/rdHmSecImg.webp"
                data-loaded="true"
              />
              <img
                className="lozad"
                data-src="/images/rdHmSecImgMobile.webp"
                alt=""
                style={{ display: 'none' }}
              />
            </div>
            <div className="SeconedSectionDescription">
              <h3>Take Mock Interviews On Your Own</h3>
              <p>Take unlimited interviews and master your skills from anywhere.
                No awkward meetups required.</p>
            </div>
            
          </div>
          
      </div>
        
      <div className="container" style={{ marginLeft:'170px', marginTop:'20px',maxWidth: '950px'}}>
          <div className="ThirdSection">
            <div className="ThirdSectionDescription">
               <h3>Practice for the Pressure</h3>
               <p>We use your built-in camera to recreate the pressure of actual interviews so you can gain realistic experience and feel prepared for anything.</p>
            </div>
            <div className="ThirdSectionImage">
               <img className="lozad" data-src="/images/rdHmSecTwoImg.webp" alt=""
                src="/images/rdHmSecTwoImg.webp" data-loaded="true" />
            </div>
           </div>
      </div>

      <div className="container" style={{ maxWidth: '950px' ,marginTop:'20px'}}>
        <div className="FourthSection" style={{ justifyContent: 'flex-start' }}>
             <div className="FourthSectionImage">
               <img className="lozad" data-src="/images/rdHmSecThreeImg.webp" 
               alt="" src="/images/rdHmSecThreeImg.webp" data-loaded="true" />
             </div>
             <div className="FourthSectionDescription">
               <h3 className="tpBar">Review Your Recorded Responses</h3>
               <p>Your responses are automatically recorded, so you can watch them after your interview and know exactly how you came across.</p>
               <a href="https://myinterviewpractice.com/register-one/" className="LearnMoreButton">Get Started</a>
             </div>
           </div>
      </div>
      <div className="container" style={{ Width: '990px' ,marginTop:'20px'}}>
        <div className='FifthSection'>
         <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="FifthSection1">
              <img className="lozad" data-src="/images/build-interview-confidence.svg" alt=""
                src="/images/build-interview-confidence.svg" data-loaded="true" />
              <h3>Build interview confidence.</h3>
              <p>We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="FifthSection2">
              <img className="lozad" data-src="/images/get-hired-faster.svg" alt=""
                src="/images/get-hired-faster.svg" data-loaded="true" />
              <h3>Get hired faster.</h3>
              <p>Our simulator is optimized to help you master your interview skills in the most efficient way possible, so you can be prepared to ace the interview in no time.</p>
            </div>
          </div>
         </div>
         <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="FifthSection3">
            <img className="lozad" data-src="/images/earn-more.svg" alt=""
                src="/images/earn-more.svg" data-loaded="true" />
              <h3>Accelerate your career & earn more.</h3>
              <p>Master the skill of interviewing by practicing it just 
               like you practice your trade and give your career a boost.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="FifthSection4">
            <img className="lozad" data-src="/images/land-the-job.svg" alt=""
                src="/images/land-the-job.svg" data-loaded="true" />
              <h3>Land the job you've been dreaming of.</h3>
              <p>Gain realistic interview experience and master 
                the skills you need to wow your employers and beat out the competition.</p>
            </div>
          </div>
         </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '950px' ,marginTop:'20px',border:'2px solid black'}}>
        <h5>Sixth section</h5>
        <div className='trainingVideoSection'>
          <div className="row">

            <div className="col-md-8 col-sm-7 col-12 videoDisplay">
                
             <div id="video-wrapper" className="video-wrapper">
               {/* <div id="video-loader" className="video-loading-block" style={{ display: 'block' ,backgroundColor:"red" }}>
                 <div className="newLoader">
                   <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" 
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                      
                   </svg>
                 </div>
               </div> */}

                
               {/* <div className="video-playback-animation" id="video-playback-animation">
                <svg className="playback-icons">
                  <use className="hidden" href="#play-icon"></use>
                  <use href="#pause"></use>
                </svg>
              </div> */}


             </div>
             
                    
            </div> 
          </div>
        </div>

      </div>

      <div className="container" style={{ width: '930px', height:'500px' ,marginTop:'20px'}}>
       <div className='careerAdvisorSection'>
       <div className="careerAdvisorSectionContent">
         <h4>For Career Advisors</h4>
         <h3>Mock Interviews They Can Take on Their Own</h3>
         <p>Provide simulated interviews they can conduct on their own. No need to schedule, commute, or meet in person.</p>
         <a href="https://myinterviewpractice.com/enterprise/" class="LearnMoreButton">Learn More</a>
       </div>
       <div className="careerAdvisorSectionImage">
         <img className="lozad" src="/images/career-advisor.webp" alt="" />
       </div>
       </div>
       
       
      </div>
      <div className="container" style={{ width: '990px', height:'400px' ,marginTop:'20px'}}>
       <div className="threeServicesBlockSection">
         <div className="row">
           <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="buildInterview">
                <div className="svgWrapper">
                  <svg width="102px" height="110px" viewBox="0 0 102 110" version="1.1" 
                  xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink">
                     <g id="Build" transform="translate(-9.000000, -5.000000)">
                        <circle id="BG-Circle" fill="#FFFFFF" fill-rule="nonzero" cx="58.0776" cy="66.0896" r="48.906"></circle>
                          <path d="M44.5901842,5 L44.598,5.076 L110.9304,16.7815093 L110.9304,29.5388 L84.504,29.538 L84.504,38.9768 L80.7288,38.9768 L80.728,29.538 L46.751,29.538 L46.7510385,113.677337 C44.8166646,113.218652 42.9267545,112.645078 41.0889132,111.96422 L41.089,109.658 L31.651,100.448 L31.6512092,107.248145 C29.6598754,105.966935 27.7675568,104.545155 25.9882732,102.996825 L25.988,29.538 L9,29.5388 L9,17.6416807 L27.9625211,5 L44.5901842,5 Z M41.089,86.193 L31.8826,95.3996 L41.089,104.384 L41.089,86.193 Z M31.65,72.087 L31.651,90.292 L40.6926,81.2496 L31.65,72.087 Z M41.088,57.69 L31.8576,66.9216 L41.089,76.276 L41.088,57.69 Z M31.65,44.477 L31.65,61.789 L40.3066,53.1326 L31.65,44.477 Z M41.088,31.704 L32.6256,40.1136 L41.088,48.576 L41.088,31.704 Z M37.912,29.538 L31.65,29.538 L31.65,35.76 L37.912,29.538 Z M27.429,12.159 L14.6626,20.6716 L14.6626,23.8756 L26.257,23.875 L27.429,12.159 Z M87.379,18.375 L81.78,23.875 L105.2676,23.8756 L105.2676,21.5316 L87.379,18.375 Z M39.4756,10.6626 L33.2696,10.6626 L31.947,23.875 L40.823,23.875 L39.4756,10.6626 Z M59.461,13.448 L48.967,23.875 L69.994,23.875 L59.735,13.497 L59.461,13.448 Z M66.165,14.631 L75.301,23.875 L76.393,23.875 L82.812,17.569 L66.165,14.631 Z M45.195,10.931 L46.248,21.256 L54.913,12.646 L45.195,10.931 Z" id="Gray" fill="#D4DCE6" fill-rule="nonzero"></path>
                          <path d="M109.0428,86.1668 L56.19,86.1668 C55.05744,86.1668 54.3024,85.41176 54.3024,84.2792 L54.3024,44.6396 C54.3024,43.50704 55.05744,42.752 56.19,42.752 L109.0428,42.752 C110.17536,42.752 110.9304,43.50704 110.9304,44.6396 L110.9304,84.2792 C110.9304,85.41176 110.17536,86.1668 109.0428,86.1668 Z" id="Color" className="bColorFill" fill="#e7303e"></path>
                          <path d="M110.9304,44.6396 C110.9304,43.50704 110.17536,42.752 109.0428,42.752 L56.19,42.752 C55.05744,42.752 54.3024,43.50704 54.3024,44.6396 L54.3024,54.0776 L110.9304,54.0776 L110.9304,44.6396 Z" id="Dark" fill="#000F38" fill-rule="nonzero"></path>
                          <path d="M81.29508,75.3124594 C82.3375727,75.3124594 83.18268,76.1575667 83.18268,77.2000594 C83.18268,78.2425521 82.3375727,79.0876594 81.29508,79.0876594 C80.2525873,79.0876594 79.40748,78.2425521 79.40748,77.2000594 C79.40748,76.1575667 80.2525873,75.3124594 81.29508,75.3124594 Z M82.5449311,59.8269866 L82.775503,59.8664699 L82.8854502,59.8904984 C85.0718294,60.4370932 86.9212062,62.28647 87.4875041,64.5604706 C88.1353681,67.7997909 86.3058749,70.7577581 83.4289702,71.7507238 L83.1826,71.8286 L83.18268,73.4248594 L79.40748,73.4248594 L79.40748,68.3283394 L81.29508,68.3283394 C82.9611394,68.3283394 84.1132518,66.9390275 83.805319,65.3884697 C83.6099016,64.6068002 82.900484,63.8607418 82.125556,63.5987843 L82.0156,63.5666 L81.8943709,63.5471679 C80.2384573,63.3248185 78.9371097,64.339645 78.8462685,65.7196653 L78.8412,65.8744594 L75.066,65.8744594 C75.066,62.0249123 78.5575185,59.2089434 82.5449311,59.8269866 Z M63.7404001,46.5272 L63.7404001,50.3024 L59.9652,50.3024 L59.9652,46.5272 L63.7404001,46.5272 Z M71.2908004,46.5272 L71.2908004,50.3024 L67.5156003,50.3024 L67.5156003,46.5272 L71.2908004,46.5272 Z M78.8412,46.5272 L78.8412,50.3024 L75.0660005,50.3024 L75.0660005,46.5272 L78.8412,46.5272 Z" id="White" fill="#FFFFFF" fill-rule="nonzero"></path>
                      </g>
                  </svg>
                </div>
                <h3>Build interviews.</h3>
                <p>Using your own questions.</p>
              </div>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-12">
           <div className="buildInterview">
                <div className="svgWrapper">
                  <svg width="98px" height="107px" viewBox="0 0 98 107" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Train" transform="translate(-11.000000, -8.000000)">
                      <circle id="BG-Circle" fill="#FFFFFF" fill-rule="nonzero" cx="59.906" cy="66.0585918" r="48.906"></circle>
                      <path d="M94.5374492,100.5906 C85.6833066,109.47008 73.4363093,114.964592 59.906,114.964592 C46.3756907,114.964592 34.1286934,109.47008 25.2745508,100.5906 L94.5374492,100.5906 Z" id="Shelf" fill="#C7D0DB"></path>
                      <path d="M39.3044539,17.1753267 L39.3044539,100.589176 L25.2727576,100.589176 C23.8250417,99.136793 22.4680457,97.5942831 21.2109923,95.9704947 L21.2124874,17.1753267 L39.3044539,17.1753267 Z" id="Book" fill="#D4DCE6" fill-rule="nonzero"></path>
                      <path d="M65.6604004,8 L82.8617677,98.8516685 L72.858041,100.720116 L55.6566737,9.86844784 L65.6604004,8 Z M39.3044539,41.7902847 L39.3044539,55.3592596 L21.2124874,55.3592596 L21.2124874,41.7902847 L39.3044539,41.7902847 Z" id="Dark" fill="#000F38" fill-rule="nonzero"></path>
                      <path d="M59.6579162,32.7443015 L59.6579162,100.589176 L39.3044539,100.589176 L39.3044539,32.7443015 L59.6579162,32.7443015 Z M86.2064296,37.43487 L107.569183,77.0620701 C106.106962,83.4217282 103.40465,89.3077591 99.73045,94.4519611 L72.8696199,44.6245044 L86.2064296,37.43487 Z M55.4014418,52.8312465 L43.5609282,52.8312465 L43.5609282,57.8872727 L55.4014418,57.8872727 L55.4014418,52.8312465 Z M55.4014418,41.5237675 L43.5609282,41.5237675 L43.5609282,46.5797936 L55.4014418,46.5797936 L55.4014418,41.5237675 Z" id="Color" className="bColorFill" fill="#e7303e"></path>
                      <rect id="Color-2" fill="#000f38" fill-rule="nonzero" transform="translate(91.403517, 57.698291) rotate(-28.328309) translate(-91.403517, -57.698291) " x="86.3153996" y="52.6101738" width="10.1762339" height="10.1762339"></rect>
                    </g>
                  </svg>
                </div>
                <h3>Level up your skills.</h3>
                <p>With our exclusive interview training program.</p>
              </div>
           </div> 
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="buildInterview">
                <div className="svgWrapper">
                  <svg width="103px" height="110px" viewBox="0 0 103 110" version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink">
                    <g id="Share" transform="translate(-8.000000, -5.000000)">
                      <circle id="BG-Circle" fill="#FFFFFF" fill-rule="nonzero" cx="58.906" cy="65.906" r="48.906"></circle>
                      <path d="M95.638944,93.274168 L22.35128,93.274168 L22.35128,52.915568 C22.35128,50.9637896 23.9481896,49.36688 25.899968,49.36688 L92.090256,49.36688 C94.0420344,49.36688 95.638944,50.9637896 95.638944,52.915568 L95.638944,93.274168 Z" id="Path" fill="#D4DCE6" fill-rule="nonzero"></path>
                      <path d="M70.4356,105 L70.4360853,113.445014 C66.7388756,114.338552 62.8777277,114.812 58.906,114.812 C55.1566646,114.812 51.5058722,114.390088 47.9985104,113.591151 L48,105 L70.4356,105 Z" id="Color-2" fill="#000f38" fill-rule="nonzero"></path>
                      <path d="M95.638944,92.168088 L95.6398794,98.1934566 C93.313094,100.83859 90.7051203,103.230361 87.8626819,105.322046 L29.9493181,105.322046 C27.1790527,103.283471 24.6314964,100.959857 22.3499035,98.3944553 L22.35128,92.168088 L95.638944,92.168088 Z M96.0668573,33 C103.803629,33 110.133715,39.3300858 110.133715,47.0668573 C110.133715,54.8036288 103.803629,61.1337146 96.0668573,61.1337146 C88.3300858,61.1337146 82,54.8036288 82,47.0668573 C82,39.3300858 88.3300858,33 96.0668573,33 Z M22.0668573,33 C29.8036288,33 36.1337146,39.3300858 36.1337146,47.0668573 C36.1337146,54.8036288 29.8036288,61.1337146 22.0668573,61.1337146 C14.3300858,61.1337146 8,54.8036288 8,47.0668573 C8,39.3300858 14.3300858,33 22.0668573,33 Z M59.0668573,5 C66.8036288,5 73.1337146,11.3300858 73.1337146,19.0668573 C73.1337146,26.8036288 66.8036288,33.1337146 59.0668573,33.1337146 C51.3300858,33.1337146 45,26.8036288 45,19.0668573 C45,11.3300858 51.3300858,5 59.0668573,5 Z" id="Color" className="bColorFill" fill="#e7303e"></path>
                      <path d="M96.0668573,40.0334286 C98.6564942,40.0334286 100.75581,42.1327442 100.75581,44.7223811 C100.75581,47.312018 98.6564942,49.4113335 96.0668573,49.4113335 C93.4772204,49.4113335 91.3779049,47.312018 91.3779049,44.7223811 C91.3779049,42.1327442 93.4772204,40.0334286 96.0668573,40.0334286 Z M22.0668573,40.0334286 C24.6564942,40.0334286 26.7558097,42.1327442 26.7558097,44.7223811 C26.7558097,47.312018 24.6564942,49.4113335 22.0668573,49.4113335 C19.4772204,49.4113335 17.3779049,47.312018 17.3779049,44.7223811 C17.3779049,42.1327442 19.4772204,40.0334286 22.0668573,40.0334286 Z M59.0668573,12.0334286 C61.6564942,12.0334286 63.7558097,14.1327442 63.7558097,16.7223811 C63.7558097,19.312018 61.6564942,21.4113335 59.0668573,21.4113335 C56.4772204,21.4113335 54.3779049,19.312018 54.3779049,16.7223811 C54.3779049,14.1327442 56.4772204,12.0334286 59.0668573,12.0334286 Z" id="White" fill="#FFFFFF" fill-rule="nonzero"></path>
                      <path d="M46,74 C47.1045695,74 48,74.8954305 48,76 C48,77.1045695 47.1045695,78 46,78 C44.8954305,78 44,77.1045695 44,76 C44,74.8954305 44.8954305,74 46,74 Z M72,74 C73.1045695,74 74,74.8954305 74,76 C74,77.1045695 73.1045695,78 72,78 C70.8954305,78 70,77.1045695 70,76 C70,74.8954305 70.8954305,74 72,74 Z M59,63 C60.1045695,63 61,63.8954305 61,65 C61,66.1045695 60.1045695,67 59,67 C57.8954305,67 57,66.1045695 57,65 C57,63.8954305 57.8954305,63 59,63 Z M96.0668573,52.6936002 C100.521362,52.6936002 104.272524,54.1002859 105.210315,57.8514479 C102.865838,59.9614765 99.5835716,61.1337146 96.0668573,61.1337146 C92.550143,61.1337146 89.2678763,59.9614765 86.9234,57.8514479 C87.8611905,54.1002859 91.6123525,52.6936002 96.0668573,52.6936002 Z M22.0668573,52.6936002 C26.5213621,52.6936002 30.272524,54.1002859 31.2103145,57.8514479 C28.8658383,59.9614765 25.5835716,61.1337146 22.0668573,61.1337146 C18.550143,61.1337146 15.2678763,59.9614765 12.9234,57.8514479 C13.8611905,54.1002859 17.6123525,52.6936002 22.0668573,52.6936002 Z M59.0668573,24.6936002 C63.5213621,24.6936002 67.272524,26.1002859 68.2103145,29.8514479 C65.8658383,31.9614765 62.5835716,33.1337146 59.0668573,33.1337146 C55.550143,33.1337146 52.2678763,31.9614765 49.9234,29.8514479 C50.8611905,26.1002859 54.6123525,24.6936002 59.0668573,24.6936002 Z" id="Dark" fill="#000F38"></path>
                    </g>
                  </svg>
                </div>
                <h3>Share practices.</h3>
                <p>Get feedback from anyone.</p>
              </div>
            </div>
           
          </div>



        </div>
      </div>
      <div className="container" style={{ width: '100%', height: '450px', marginTop: '20px' }}>
        <div className="PartnerSection">
          <h3>Our Partners</h3>
          <div className="PartnerSectionInner">
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/1298673194_Purple_Briefcase_New.png"
               alt="" src="/images/1298673194_Purple_Briefcase_New.png" 
               data-loaded="true"/>
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/1436189708_Thrive_NEW.png"
               alt="" src="/images/1436189708_Thrive_NEW.png" 
               data-loaded="true" />
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/439754066_CLA@3x.png" 
              alt="" src="/images/439754066_CLA@3x.png" 
              data-loaded="true" />
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/2131522772_Webster.png"
               alt="" src="/images/2131522772_Webster.png"
                data-loaded="true" />
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/1242852_Keystone_Partners.png"
               alt="" src="/images/1242852_Keystone_Partners.png" 
               data-loaded="true" />
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/1612811386_Impact_Group.png"
               alt="" src="/images/1612811386_Impact_Group.png" 
               data-loaded="true" />
            </div>
            <div className="PartnerSectionInnerImgWrapper">
              <img className="lozad" data-src="/images/1611120946_Dalton_State.png"
               alt="" src="/images/1611120946_Dalton_State.png"
                data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/uploads/1439771648_Bluedrop_ISM.png"
               alt="" src="/images/1439771648_Bluedrop_ISM.png" 
               data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/214864716_Bravanti.png" 
              alt="" src="/images/214864716_Bravanti.png"
               data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/801730179_Culver_Stockton.png"
               alt="" src="/images/801730179_Culver_Stockton.png"
                data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/845716508_ECA.png"
               alt="" src="/images/845716508_ECA.png"
                data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/6155817_Fontbonne_University.png"
               alt="" src="/images/6155817_Fontbonne_University.png"
                data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/755284551_Georgian_College.png"
               alt="" src="/images/755284551_Georgian_College.png" 
               data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="h/images/2085869067_Mohawk_College.png"
               alt="" src="/images/2085869067_Mohawk_College.png"
                data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/1046015911_Podium_Education.png"
               alt="" src="/images/1046015911_Podium_Education.png" 
               data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/585413004_Reinhardt_University.png" 
              alt="" src="/images/585413004_Reinhardt_University.png" 
              data-loaded="true" />
            </div>
            <div class="PartnerSectionInnerImgWrapper">
              <img class="lozad" data-src="/images/2006207951_Seneca_College.png" 
              alt="" src="/images/2006207951_Seneca_College.png" 
              data-loaded="true" />
            </div>


          </div>
        </div>

      </div>
    
      {/* <div className="container" style={{ width: '890px',paddingTop: '90px', height: '600px', marginTop: '20px' ,border:'2px solid red' }}>
      <h2>Mock Interviews for Over<br></br> 120 Different Job Titles </h2>
       <div className='jobSection'>
          <div id="accounting" className="accounting accounting-home">
            <h3 className="click-accounting-tab" data-tab-id="1">
              <div className="accountingImg">
                <img className="lozad" data-src="/images/1954363356_accountant.svg" 
                alt="Accounting Icon" src="/images/1954363356_accountant.svg"
                 data-loaded="true" />
              </div>
              <span className="accountingSpan">Accounting</span>
            </h3>
          </div> 
          <div className="accounting-content acro aid_1">
            <div className="accounting-content-Inner">
              <h4>Accounting Job Titles</h4>
              <ul>
                <li><a href="https://myinterviewpractice.com/industries-details/accounting/accountant-interview-preparation/">Accountant</a></li>
                <li><a href="https://myinterviewpractice.com/industries-details/accounting/auditor-interview-preparation/">Auditor</a></li>
                <li><a href="https://myinterviewpractice.com/industries-details/accounting/bookkeeper-interview-preparation/">Bookkeeper</a></li>
                <li><a href="https://myinterviewpractice.com/industries-details/accounting/tax-accountant-interview-preparation/">Tax Accountant</a></li>
                <li><a href="https://myinterviewpractice.com/industries-details/accounting/treasurer-interview-preparation/">Treasurer</a></li>
              </ul>
            </div>
          </div>
          <h3 class="click-Administrative-tab" data-tab-id="2">
            <div class="AdministrativeImg">
              <img class="lozad" data-src="https://myinterviewpractice.com/uploads/1940843750_calendar.svg" 
              alt="Administration Icon" src="https://myinterviewpractice.com/uploads/1940843750_calendar.svg"
               data-loaded="true" />
            </div>
            <span class="posNm">Administrative Support</span>
          </h3>
       </div>
      </div> */}
      

    
    </>

    
  );
};

export default HomeBanner;
