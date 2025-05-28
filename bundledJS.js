(()=>{function $n(o,e,t,i,r){let s,n;if(o==="id")s=document.getElementById(`${e}`);else if(o==="class")n=Array.from(document.querySelectorAll(`.${e}`)),n.forEach(a=>{a.classList[t](`${i}`)});else{console.log("selector error");return}}var B1={threshold:.4},Jn=new IntersectionObserver((o,e)=>{o.forEach(t=>{if(t.isIntersecting)t.isIntersecting&&t.target.classList.remove("fadeup");else return})},B1);var R0=document.querySelector(".canvas"),Qn=!0,Kn={frame:0},Zn=R0.getContext("2d"),P1=80,eo=[],z1=o=>`/src/components/images/animation/${o}.png`,A1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let o=0;o<P1;o++){let e=new Image;e.src=z1(o),eo.push(e)}},O1=o=>{Zn.clearRect(0,0,R0.width,R0.height),Zn.drawImage(eo[o],0,0,R0.width,R0.height)};function D1(o,e){let t=o,i=o,r=2e3,s=e-o,n=performance.now();function a(){let l=performance.now()-n,c=Math.min(l/r,1);c=1-Math.pow(1-c,3),t=Math.round(o+c*s),t!==i&&(i=t,O1(i)),c<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}var wt=o=>{console.log("updateAnimationFrame",o),Qn&&(A1(),Qn=!1),typeof o=="number"&&(D1(Kn.frame,o),Kn.frame=o)};var to=null;var R1=o=>{let e=Math.floor(o*100/25)*25;if(console.log(e,"new map"),o<.025?wt(0):o>.025&&o<.24?wt(19):o>.24&&o<.49?wt(39):o>.5&&o<.75?wt(59):o>.75&&wt(79),e===to||e===100)return;to=e,console.log(e,"is map adjuster");let t=document.querySelector(".web__grid--right");if(!t){console.warn("Element '.web__grid--right' not found.");return}t.style.transform=`translateX(-${e}%)`,console.log(t.style)};function io({elementId:o="websiteGridPresentation",parentID:e="sc__websites",onProgress:t=n=>{},scrollOffsetVh:i=10,enterThreshold:r=[.6,.98],stillnessDelay:s=1500}={}){console.log("Website scroll tracking initialized.");let n=document.getElementById(o),a=document.getElementById(e);if(!n||!a){console.warn(`Required element(s) not found: ${n?e:o}`);return}a.addEventListener("scroll",()=>{l()});function l(){let c=a.scrollTop,d=n.offsetTop,f=n.offsetHeight,g=a.clientHeight,u=c-d,m=f-g,_=Math.max(0,Math.min(u,m))/m;console.log(_),t(_),R1(_)}}var ro=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var so=o=>{console.log("we are live in submitter about to to predef");let e=document.getElementById("contactForm"),t="service_9l2h8gg",i="template_36awvk9",r=document.getElementById("formMessage").value;emailjs.sendForm(t,i,e,"oYymItkIoREaVvBlM").then(s=>{console.log("SUCCESS!",s.status,s.text)}).catch(s=>{console.error(s.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${r}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),ro()};var b3=document.getElementById("contactForm"),x3=document.getElementById("formName"),k3=document.getElementById("formEmail"),T3=document.getElementById("formMessage"),bs=!1,xs=!1,ks=!1,u0;function Ts(){console.log("GOIGM FOR ALL"),bs&&xs&&ks?(console.log("all fields pass!"),so()):(console.log("field failure"),console.log(bs,xs,ks))}function F1(o){return u0=/^[a-z a-z]+$/gi,u0.test(o)?(console.log("name pass"),bs=!0,Ts(),!0):(console.log("fail name"),!1)}function N1(o){return u0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,u0.test(o)?(console.log("email pass"),xs=!0,Ts(),!0):(console.log("not a valid email"),!1)}function q1(o){return u0=/.{8}/,u0.test(o)?(console.log("message pass"),ks=!0,Ts(),!0):(console.log("fail"),!1)}var br=()=>{console.log("validating?"),F1(document.getElementById("formName").value),N1(document.getElementById("formEmail").value),q1(document.getElementById("formMessage").value)};var Ni=[{header:"Presence Auditing",description:'<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Presence Auditing</div><div class="description"><p>Determining and reviewing where you are is a great first step in growing your online presences<br /><br /> we can get started by:</p> <ul><li class="fadeRight"> Branding consistency review</li><li class="fadeRight sec">SEO & UX audit</li><li class="fadeRight thi">Competitor analysis</li></ul></div></div></div></div>',slug:"auditicon",image:"src/components/images/marketingicons/assess.webp"},{header:"Strategy",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Strategy</div><div class="description"><p>   Need to figure out the most efficient way to
                                    reach your audience and grow your business?
                                
                                    <br /> <br />    We do this by:</p>  <ul>
                                    <li class="fadeRight">
                                      Clarifying target audience
                                    </li>
                                    <li class="fadeRight sec">
                                      Competitor analysis
                                    </li>
                                    <li class="fadeRight thi">
                                      Social media and promotional planning
                                    </li>
                                  </ul></div></div></div></div>`,slug:"straticon",image:"src/components/images/marketingicons/strategy.webp"},{header:"Optimization",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Optimizing</div><div class="description">  <p>
                                    Streamline your efforts to catch the eye of
                                    your audience.<br /><br /> Meaning...
                                  </p>
                                  <ul>
                                    <li class="fadeRight">SEO formatting</li>
                                    <li class="fadeRight sec">
                                      Market research and Linking
                                    </li>
                                    <li class="fadeRight thi">
                                  Business Verification
                                    </li>
                                  </ul></div></div></div></div>`,slug:"optiicon",image:"src/components/images/marketingicons/optimize.webp"},{header:"Topic Authority",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Authority Building</div><div class="description"> <p>
                                    People work with those they trust. Let's establish your presence as someone worth working with..
                                       <br />       <br />
                                  <ul>
                                    <li class="fadeRight">
                                      SEO oriented content
                                    </li>
                                    <li class="fadeRight sec">
                                      Resource generation
                                    </li>
                                    <li class="fadeRight thi">
                                      Cross platform consistency
                                    </li>
                                  </ul>  </p></div></div></div></div>`,slug:"authicon",image:"src/components/images/marketingicons/authorize.webp"},{header:"Implementation",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Implement & Action</div><div class="description"> <p>Got a plan ready to go and just need extra hands <br /><br /> We can also handle...</p>
                                  <ul>
                                    <li class="fadeRight">
                                      Blog & article creation
                                    </li>
                                    <li class="fadeRight sec">
                                      Email & automation setup and campaigns
                                    </li>
                                    <li class="fadeRight thi">
                                      Industry research and connection
                                    </li>
                                  </div></div></div></div>`,slug:"implicon",image:"src/components/images/marketingicons/implement.webp"}];var no=[`left: 35%;
transform: scale(1);
filter: blur(0px);
z-index: 80;
`,`left: calc(100% - 24vw);
transform: scale(.6);
filter: blur(4px);
z-index: 70;
`,`left: 55.5%;
transform: scale(.3);
filter: blur(6px);
z-index: 50;
`,`left: 10%;
transform: scale(.3);
filter: blur(6px);
z-index: 50;
`,`
left: 0%;
transform: scale(.6);
filter: blur(4px);
z-index: 70;
`],F0=["mc1","mc2","mc3","mc4","mc5"],E3=document.getElementById("msParagraph"),oo=document.querySelector(".ms__icons"),Wt=0;var Ss;function H1(){return window.innerWidth<=768}H1()?console.log("User is on a mobile device"):console.log("User is on a desktop");var V1=o=>{oo.querySelector(".risen")&&(Ss=oo.querySelector(".risen"),console.log(Ss,"should be risen var"),Ss.classList.remove("risen")),document.querySelector(`#${o}`).classList.add("risen")},Y1=document.getElementById("msArrowLeft"),xr=4,X1=document.getElementById("msArrowRight"),kr=2,W1=o=>{console.log("in arrow"),console.log(o),xr=o-1,o===0&&(xr=4),kr=o+1,o===4&&(kr=0),Wt<0&&(Wt=Ni.length-1),console.log(xr,kr),Y1.style.backgroundImage=`url(/${Ni[xr].image})`,X1.style.backgroundImage=`url(/${Ni[kr].image})`},G1=o=>{console.log("moving",o),o.forEach((e,t)=>{console.log(e,t),console.log(`${no[t]}`),document.getElementById(`${e}`).style=`${no[t]}`})},ao=o=>{if(o==="left"){Wt--,Wt<0&&(Wt=Ni.length-1);let e=F0.pop();F0.unshift(e)}if(o==="right"){Wt++,Wt===Ni.length&&(Wt=0);let e=F0.shift();F0.push(e)}V1(Ni[Wt].slug),W1(Wt),G1(F0)},lo=o=>{console.log("marketing controller live",o),o.classList.contains("arrowLeft")&&(console.log("Left!"),ao("left")),o.classList.contains("arrowRight")&&(console.log("Right!"),ao("right"))};var O=document.querySelector("#sc__hello");var N0=!1,si=()=>{if(window.innerWidth<=768){N0=!N0,console.log(N0),N0?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):N0||(document.getElementById("mobileBack").innerHTML="");return}},Tr=o=>{if(console.log("new",o.target),o==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(o==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),O=document.querySelector("#sc__hello"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(e=>{e.tagName&&e.tagName==="DIV"&&e.classList.add("hit")});return}if(o.target.classList.contains("arrow")&&lo(o.target),o.target.classList.contains("nav--link")||o.target.classList.contains("cta")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let e=document.querySelectorAll(".hit");e.length>0&&e.forEach(t=>{t.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(t=>{t.classList.add("blur"),t.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(t=>{t.classList.contains("fadeup")||t.classList.add("fadeup")})}switch(o.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"submit":console.log("submitting in the new controller"),o.preventDefault(),br();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"thisisbrian":window.open("https://www.youtube.com/watch?v=5khekERvC1c","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
        <div class="project-display-header">
        <div
          class="project-thumbnail-container ptcTop"
          id="port-port"
        ></div>
        <div class="project-thumbnail-container ptcBottom"></div>
        <div class="project-title">
          <h2>Portfolio</h2>
          <div class="made-with-div">
            <h4>Made with...</h4>
            <br />
            <div class="icons-for-grid">
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>HTML5</title>
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                  />
                </svg>
              </div>
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CSS3</title>
                  <path
                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                  />
                </svg>
              </div>
              <div class="made-with-icon">
                <svg
                  width="30px"
                  height="30px"
                  role="img"
                  viewBox=" 0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>JavaScript</title>
                  <path
                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="porfolio-link-container">
            <button class="link" id="portgithub">
              <svg
                width="30px"
                height="30px"
                role="img"
                viewBox=" 0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              Code
            </button>
          </div>
        </div>
      </div>
      <div class="port-blurb">
        <p>
          When I was thinking about how to present my material moving
          forwards, I wanted to make sure I could present something
          clean and professional while still capturing my personality. I
          feel I have met this goal so far, and look forward to adding
          to shareable work. This site was coded in HTML, CSS, and
          Javascript.
        </p>
      </div>`;break;case"port-fugativa":codingProjectDisplay.innerHTML=`
        <div class="project-display-header">
                  <div
                    class="project-thumbnail-container ptcTop"
                    id="port-fugativa"
                  ></div>
                  <div class="project-thumbnail-container ptcBottom"></div>
  
                  <div class="project-title">
                    <h2>Mobile Menu</h2>
  
                    <div class="made-with-div">
                      <h4>Made with...</h4>
                      <br />
                      <div class="icons-for-grid">
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>HTML5</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>CSS3</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>JavaScript</title>
                            <path
                              d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="porfolio-link-container">
                      <button class="link" id="fugagithub">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                        Code</button
                      ><button class="link" id="fuganetlify">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify</title>
                          <path
                            d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                          />
                        </svg>
                        Live
                      </button>
                    </div>
                  </div>
                </div>
                <div class="port-blurb">
                  <p>
                    This purpose of building this site was built to find a free,
                    no-app, easy way to provide a restraurant's updated menu to
                    it's costumers. Post Covid-19, a lot of restraurants returned
                    with digital menus, however I noticed that a lot of them
                    featured pdfs, which made changes really annoying for
                    waitstaff to keep up with. And assuming with that most belts
                    were being tighted in the hospitality business, I wanted to
                    build a site that dynamically builds and updates it's menu
                    with reload items, prices, and descriptions. This is only
                    using a template I built and data from Google Sheets. This
                    would enable a manager to update the price on the spreadsheet
                    from their phone and have it immediately affect how it is
                    displayed in the menu. This site was built with HTML, CSS, and
                    Vanilla Javascript as well as an API for Google Sheets. I used
                    a real menu and information from a restaurant I like in
                    Lisbon.
                  </p>
                </div>
        `;break;case"port-masha":codingProjectDisplay.innerHTML=`
        <div class="project-display-header">
                  <div
                    class="project-thumbnail-container ptcTop"
                    id="port-masha"
                  ></div>
                  <div class="project-thumbnail-container ptcBottom"></div>
  
                  <div class="project-title">
                    <h2>Masha!</h2>
  
                    <div class="made-with-div">
                      <h4>Made with...</h4>
                      <br />
                      <div class="icons-for-grid">
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>React</title>
                            <path
                              d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>CSS3</title>
                            <path
                              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                            />
                          </svg>
                        </div>
                        <div class="made-with-icon">
                          <svg
                            width="30px"
                            height="30px"
                            role="img"
                            viewBox=" 0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Framer</title>
                            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="porfolio-link-container">
                      <button class="link" id="mashagithub">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                        Code
                      </button>
                      <button class="link" id="mashanetlify">
                        <svg
                          id="mashanetlify"
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Netlify</title>
                          <path
                            d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                          />
                        </svg>
                        Live
                      </button>
                    </div>
                  </div>
                </div>
                <div class="port-blurb">
                  <p>
                    This site was made for Masha Kiseleva, a young, motivated, and
                    aspiring model who lives in Lisbon, Portugal and London, UK.
                    As this site is meant to serve not only as part of my
                    portfolio, but also as a starting point and first draft of her
                    professional modeling website, it was created with a focus on
                    aesthetic. It was coded from scratch in React with CSS and
                    also incorporats Framer's Motion api to help give the site's
                    introduction a more eye catching entrance.
                  </p>
                </div>
        
        `;break;case"m--hi":O=document.querySelector("#sc__hello"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--marketing":O=document.querySelector("#sc__marketing"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--web":O=document.querySelector("#sc__websites"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--video":O=document.querySelector("#sc__video"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--nerd":O=document.querySelector("#sc__nerd"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")});let t=[...document.getElementsByTagName("li")],i=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{t.forEach(r=>{r.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--reference":O=document.querySelector("#sc__reference"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"m--contact":O=document.querySelector("#sc__contact"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break;case"cta":O=document.querySelector("#sc__contact"),O.classList.remove("blur"),O.classList.add("front__and-center"),O.scrollTo({top:0,left:0,behavior:"instant"}),O.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),si();break}o.target.classList.contains("marketing__mobileCard")&&console.log("should pull up swiper??")};function ni(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function _o(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},f0={duration:.5,overwrite:!1,delay:0},Xs,Fe,le,Mt=1e8,re=1/Mt,zs=Math.PI*2,U1=zs/4,j1=0,vo=Math.sqrt,$1=Math.cos,J1=Math.sin,Ee=function(e){return typeof e=="string"},ge=function(e){return typeof e=="function"},ai=function(e){return typeof e=="number"},Ar=function(e){return typeof e>"u"},jt=function(e){return typeof e=="object"},ft=function(e){return e!==!1},Ws=function(){return typeof window<"u"},Sr=function(e){return ge(e)||Ee(e)},wo=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},We=Array.isArray,As=/(?:-?\.?\d|\.)+/gi,Gs=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Us=/[+-]=-?[.\d]+/,yo=/[^,'"\[\]\s]+/gi,Q1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Gt,Os,js,bt={},Mr={},bo,xo=function(e){return(Mr=g0(e,bt))&&Ge},Or=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},W0=function(e,t){return!t&&console.warn(e)},ko=function(e,t){return e&&(bt[e]=t)&&Mr&&(Mr[e]=t)||bt},G0=function(){return 0},K1={suppressEvents:!0,isStart:!0,kill:!1},Cr={suppressEvents:!0,kill:!1},Z1={suppressEvents:!0},$s={},xi=[],Ds={},To,ut={},Ls={},co=30,Lr=[],Js="",Qs=function(e){var t=e[0],i,r;if(jt(t)||ge(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Lr.length;r--&&!Lr[r].targetTest(t););i=Lr[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new en(e[r],i)))||e.splice(r,1);return e},ki=function(e){return e._gsap||Qs(It(e))[0]._gsap},Ks=function(e,t,i){return(i=e[t])&&ge(i)?e[t]():Ar(i)&&e.getAttribute&&e.getAttribute(t)||i},tt=function(e,t){return(e=e.split(",")).forEach(t)||e},me=function(e){return Math.round(e*1e5)/1e5||0},Te=function(e){return Math.round(e*1e7)/1e7||0},Xi=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},el=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ir=function(){var e=xi.length,t=xi.slice(0),i,r;for(Ds={},xi.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},So=function(e,t,i,r){xi.length&&!Fe&&Ir(),e.render(t,i,r||Fe&&t<0&&(e._initted||e._startAt)),xi.length&&!Fe&&Ir()},Co=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yo).length<2?t:Ee(e)?e.trim():e},Lo=function(e){return e},xt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},tl=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},g0=function(e,t){for(var i in t)e[i]=t[i];return e},uo=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=jt(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},Br=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},V0=function(e){var t=e.parent||de,i=e.keyframes?tl(We(e.keyframes)):xt;if(ft(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},il=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Eo=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=e[r],a;if(s)for(a=t[s];n&&n[s]>a;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=n,t.parent=t._dp=e,t},Dr=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,n=t._next;s?s._next=n:e[i]===t&&(e[i]=n),n?n._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},rl=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rs=function(e,t,i,r){return e._startAt&&(Fe?e._startAt.revert(Cr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},sl=function o(e){return!e||e._ts&&o(e.parent)},ho=function(e){return e._repeat?m0(e._tTime,e=e.duration()+e._rDelay)*e:0},m0=function(e,t){var i=Math.floor(e=Te(e/t));return e&&i===e?i-1:i},Pr=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rr=function(e){return e._end=Te(e._start+(e._tDur/Math.abs(e._ts||e._rts||re)||0))},Fr=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Te(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rr(e),i._dirty||qi(i,e)),e},Mo=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Pr(e.rawTime(),t),(!t._dur||$0(0,t.totalDuration(),i)-t._tTime>re)&&t.render(i,!0)),qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-re}},Ut=function(e,t,i,r){return t.parent&&Ti(t),t._start=Te((ai(i)?i:i||e!==de?Et(e,i,t):e._time)+t._delay),t._end=Te(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Eo(e,t,"_first","_last",e._sort?"_start":0),Fs(t)||(e._recent=t),r||Mo(e,t),e._ts<0&&Fr(e,e._tTime),e},Io=function(e,t){return(bt.ScrollTrigger||Or("scrollTrigger",t))&&bt.ScrollTrigger.create(t,e)},Bo=function(e,t,i,r,s){if(sn(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Fe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&To!==ht.frame)return xi.push(e),e._lazy=[s,r],1},nl=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Fs=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ol=function(e,t,i,r){var s=e.ratio,n=t<0||!t&&(!e._start&&nl(e)&&!(!e._initted&&Fs(e))||(e._ts<0||e._dp._ts<0)&&!Fs(e))?0:1,a=e._rDelay,l=0,c,d,f;if(a&&e._repeat&&(l=$0(0,e._tDur,t),d=m0(l,a),e._yoyo&&d&1&&(n=1-n),d!==m0(e._tTime,a)&&(s=1-n,e.vars.repeatRefresh&&e._initted&&e.invalidate())),n!==s||Fe||r||e._zTime===re||!t&&e._zTime){if(!e._initted&&Bo(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?re:0),i||(i=t&&!f),e.ratio=n,e._from&&(n=1-n),e._time=0,e._tTime=l,c=e._pt;c;)c.r(n,c.d),c=c._next;t<0&&Rs(e,t,i,!0),e._onUpdate&&!i&&yt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===n&&(n&&Ti(e,1),!i&&!Fe&&(yt(e,n?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},al=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},p0=function(e,t,i,r){var s=e._repeat,n=Te(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=n/e._dur),e._dur=n,e._tDur=s?s<0?1e10:Te(n*(s+1)+e._rDelay*s):n,a>0&&!r&&Fr(e,e._tTime=e._tDur*a),e.parent&&Rr(e),i||qi(e.parent,e),e},fo=function(e){return e instanceof Re?qi(e):p0(e,e._dur)},ll={_start:0,endTime:G0,totalDuration:G0},Et=function o(e,t,i){var r=e.labels,s=e._recent||ll,n=e.duration()>=Mt?s.endTime(!1):e._dur,a,l,c;return Ee(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=n),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(We(i)?i[0]:i).totalDuration()),a>1?o(e,t.substr(0,a-1),i)+l:n+l)):t==null?n:+t},Y0=function(e,t,i){var r=ai(t[1]),s=(r?2:1)+(e<2?0:1),n=t[s],a,l;if(r&&(n.duration=t[1]),n.parent=i,e){for(a=n,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ft(l.vars.inherit)&&l.parent;n.immediateRender=ft(a.immediateRender),e<2?n.runBackwards=1:n.startAt=t[s-1]}return new be(t[0],n,t[s+1])},Si=function(e,t){return e||e===0?t(e):t},$0=function(e,t,i){return i<e?e:i>t?t:i},Ne=function(e,t){return!Ee(e)||!(t=Q1.exec(e))?"":t[1]},cl=function(e,t,i){return Si(i,function(r){return $0(e,t,r)})},Ns=[].slice,Po=function(e,t){return e&&jt(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jt(e[0]))&&!e.nodeType&&e!==Gt},dl=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ee(r)&&!t||Po(r,1)?(s=i).push.apply(s,It(r)):i.push(r)})||i},It=function(e,t,i){return le&&!t&&le.selector?le.selector(e):Ee(e)&&!i&&(Os||!_0())?Ns.call((t||js).querySelectorAll(e),0):We(e)?dl(e,i):Po(e)?Ns.call(e,0):e?[e]:[]},qs=function(e){return e=It(e)[0]||W0("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return It(t,i.querySelectorAll?i:i===e?W0("Invalid scope")||js.createElement("div"):e)}},zo=function(e){return e.sort(function(){return .5-Math.random()})},Ao=function(e){if(ge(e))return e;var t=jt(e)?e:{each:e},i=Hi(t.ease),r=t.from||0,s=parseFloat(t.base)||0,n={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,d=r,f=r;return Ee(r)?d=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(d=r[0],f=r[1]),function(g,u,m){var h=(m||t).length,_=n[h],x,b,T,w,k,C,y,E,S;if(!_){if(S=t.grid==="auto"?0:(t.grid||[1,Mt])[1],!S){for(y=-Mt;y<(y=m[S++].getBoundingClientRect().left)&&S<h;);S<h&&S--}for(_=n[h]=[],x=l?Math.min(S,h)*d-.5:r%S,b=S===Mt?0:l?h*f/S-.5:r/S|0,y=0,E=Mt,C=0;C<h;C++)T=C%S-x,w=b-(C/S|0),_[C]=k=c?Math.abs(c==="y"?w:T):vo(T*T+w*w),k>y&&(y=k),k<E&&(E=k);r==="random"&&zo(_),_.max=y-E,_.min=E,_.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(S>h?h-1:c?c==="y"?h/S:S:Math.max(S,h/S))||0)*(r==="edges"?-1:1),_.b=h<0?s-h:s,_.u=Ne(t.amount||t.each)||0,i=i&&h<0?Yo(i):i}return h=(_[g]-_.min)/_.max||0,Te(_.b+(i?i(h):h)*_.v)+_.u}},Hs=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Te(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ai(i)?0:Ne(i))}},Oo=function(e,t){var i=We(e),r,s;return!i&&jt(e)&&(r=i=e.radius||Mt,e.values?(e=It(e.values),(s=!ai(e[0]))&&(r*=r)):e=Hs(e.increment)),Si(t,i?ge(e)?function(n){return s=e(n),Math.abs(s-n)<=r?s:n}:function(n){for(var a=parseFloat(s?n.x:n),l=parseFloat(s?n.y:0),c=Mt,d=0,f=e.length,g,u;f--;)s?(g=e[f].x-a,u=e[f].y-l,g=g*g+u*u):g=Math.abs(e[f]-a),g<c&&(c=g,d=f);return d=!r||c<=r?e[d]:n,s||d===n||ai(n)?d:d+Ne(n)}:Hs(e))},Do=function(e,t,i,r){return Si(We(e)?!t:i===!0?!!(i=0):!r,function(){return We(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},ul=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,n){return n(s)},r)}},hl=function(e,t){return function(i){return e(parseFloat(i))+(t||Ne(i))}},fl=function(e,t,i){return Fo(e,t,0,1,i)},Ro=function(e,t,i){return Si(i,function(r){return e[~~t(r)]})},gl=function o(e,t,i){var r=t-e;return We(e)?Ro(e,o(0,e.length),t):Si(i,function(s){return(r+(s-e)%r)%r+e})},ml=function o(e,t,i){var r=t-e,s=r*2;return We(e)?Ro(e,o(0,e.length-1),t):Si(i,function(n){return n=(s+(n-e)%s)%s||0,e+(n>r?s-n:n)})},v0=function(e){for(var t=0,i="",r,s,n,a;~(r=e.indexOf("random(",t));)n=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,n-r-7).match(a?yo:As),i+=e.substr(t,r-t)+Do(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=n+1;return i+e.substr(t,e.length-t)},Fo=function(e,t,i,r,s){var n=t-e,a=r-i;return Si(s,function(l){return i+((l-e)/n*a||0)})},pl=function o(e,t,i,r){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var n=Ee(e),a={},l,c,d,f,g;if(i===!0&&(r=1)&&(i=null),n)e={p:e},t={p:t};else if(We(e)&&!We(t)){for(d=[],f=e.length,g=f-2,c=1;c<f;c++)d.push(o(e[c-1],e[c]));f--,s=function(m){m*=f;var h=Math.min(g,~~m);return d[h](m-h)},i=t}else r||(e=g0(We(e)?[]:{},e));if(!d){for(l in t)tn.call(a,e,l,"get",t[l]);s=function(m){return an(m,a)||(n?e.p:e)}}}return Si(i,s)},go=function(e,t,i){var r=e.labels,s=Mt,n,a,l;for(n in r)a=r[n]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=n,s=a);return l},yt=function(e,t,i){var r=e.vars,s=r[t],n=le,a=e._ctx,l,c,d;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&xi.length&&Ir(),a&&(le=a),d=l?s.apply(c,l):s.call(c),le=n,d},q0=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Fe),e.progress()<1&&yt(e,"onInterrupt"),e},h0,No=[],qo=function(e){if(e)if(e=!e.name&&e.default||e,Ws()||e.headless){var t=e.name,i=ge(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:G0,render:an,add:tn,kill:Pl,modifier:Bl,rawVars:0},n={targetTest:0,get:0,getSetter:Nr,aliases:{},register:0};if(_0(),e!==r){if(ut[t])return;xt(r,xt(Br(e,s),n)),g0(r.prototype,g0(s,Br(e,n))),ut[r.prop=t]=r,e.targetTest&&(Lr.push(r),$s[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ko(t,r),e.register&&e.register(Ge,r,it)}else No.push(e)},ie=255,H0={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},Es=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ie+.5|0},Ho=function(e,t,i){var r=e?ai(e)?[e>>16,e>>8&ie,e&ie]:0:H0.black,s,n,a,l,c,d,f,g,u,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),H0[e])r=H0[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),n=e.charAt(2),a=e.charAt(3),e="#"+s+s+n+n+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ie,e&ie]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(As),!t)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,n=d<=.5?d*(c+1):d+c-d*c,s=d*2-n,r.length>3&&(r[3]*=1),r[0]=Es(l+1/3,s,n),r[1]=Es(l,s,n),r[2]=Es(l-1/3,s,n);else if(~e.indexOf("="))return r=e.match(Gs),i&&r.length<4&&(r[3]=1),r}else r=e.match(As)||H0.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/ie,n=r[1]/ie,a=r[2]/ie,f=Math.max(s,n,a),g=Math.min(s,n,a),d=(f+g)/2,f===g?l=c=0:(u=f-g,c=d>.5?u/(2-f-g):u/(f+g),l=f===s?(n-a)/u+(n<a?6:0):f===n?(a-s)/u+2:(s-n)/u+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},Vo=function(e){var t=[],i=[],r=-1;return e.split(oi).forEach(function(s){var n=s.match(Yi)||[];t.push.apply(t,n),i.push(r+=n.length+1)}),t.c=i,t},mo=function(e,t,i){var r="",s=(e+r).match(oi),n=t?"hsla(":"rgba(",a=0,l,c,d,f;if(!s)return e;if(s=s.map(function(g){return(g=Ho(g,t,1))&&n+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(d=Vo(e),l=i.c,l.join(r)!==d.c.join(r)))for(c=e.replace(oi,"1").split(Yi),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||n+"0,0,0,0)":(d.length?d:s.length?s:i).shift());if(!c)for(c=e.split(oi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},oi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in H0)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),_l=/hsl[a]?\(/,Zs=function(e){var t=e.join(" "),i;if(oi.lastIndex=0,oi.test(t))return i=_l.test(t),e[1]=mo(e[1],i),e[0]=mo(e[0],i,Vo(e[1])),!0},U0,ht=function(){var o=Date.now,e=500,t=33,i=o(),r=i,s=1e3/240,n=s,a=[],l,c,d,f,g,u,m=function h(_){var x=o()-r,b=_===!0,T,w,k,C;if((x>e||x<0)&&(i+=x-t),r+=x,k=r-i,T=k-n,(T>0||b)&&(C=++f.frame,g=k-f.time*1e3,f.time=k=k/1e3,n+=T+(T>=s?4:s-T),w=1),b||(l=c(h)),w)for(u=0;u<a.length;u++)a[u](k,g,C,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return g/(1e3/(_||60))},wake:function(){bo&&(!Os&&Ws()&&(Gt=Os=window,js=Gt.document||{},bt.gsap=Ge,(Gt.gsapVersions||(Gt.gsapVersions=[])).push(Ge.version),xo(Mr||Gt.GreenSockGlobals||!Gt.gsap&&Gt||{}),No.forEach(qo)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(_){return setTimeout(_,n-f.time*1e3+1|0)},U0=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),U0=0,c=G0},lagSmoothing:function(_,x){e=_||1/0,t=Math.min(x||33,e)},fps:function(_){s=1e3/(_||240),n=f.time*1e3+s},add:function(_,x,b){var T=x?function(w,k,C,y){_(w,k,C,y),f.remove(T)}:_;return f.remove(_),a[b?"unshift":"push"](T),_0(),T},remove:function(_,x){~(x=a.indexOf(_))&&a.splice(x,1)&&u>=x&&u--},_listeners:a},f}(),_0=function(){return!U0&&ht.wake()},$={},vl=/^[\d.\-M][\d.\-,\s]/,wl=/["']/g,yl=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,n=i.length,a,l,c;s<n;s++)l=i[s],a=s!==n-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(wl,"").trim():+c,r=l.substr(a+1).trim();return t},bl=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},xl=function(e){var t=(e+"").split("("),i=$[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yl(t[1])]:bl(e).split(",").map(Co)):$._CE&&vl.test(e)?$._CE("",e):i},Yo=function(e){return function(t){return 1-e(1-t)}},Xo=function o(e,t){for(var i=e._first,r;i;)i instanceof Re?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Hi=function(e,t){return e&&(ge(e)?e:$[e]||xl(e))||t},Wi=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},n;return tt(e,function(a){$[a]=bt[a]=s,$[n=a.toLowerCase()]=i;for(var l in s)$[n+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$[a+"."+l]=s[l]}),s},Wo=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ms=function o(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),n=s/zs*(Math.asin(1/r)||0),a=function(d){return d===1?1:r*Math.pow(2,-10*d)*J1((d-n)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Wo(a);return s=zs/s,l.config=function(c,d){return o(e,c,d)},l},Is=function o(e,t){t===void 0&&(t=1.70158);var i=function(n){return n?--n*n*((t+1)*n+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Wo(i);return r.config=function(s){return o(e,s)},r};tt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Wi(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$.Linear.easeNone=$.none=$.Linear.easeIn;Wi("Elastic",Ms("in"),Ms("out"),Ms());(function(o,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?o*a*a:a<i?o*Math.pow(a-1.5/e,2)+.75:a<r?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Wi("Bounce",function(n){return 1-s(1-n)},s)})(7.5625,2.75);Wi("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Wi("Circ",function(o){return-(vo(1-o*o)-1)});Wi("Sine",function(o){return o===1?1:-$1(o*U1)+1});Wi("Back",Is("in"),Is("out"),Is());$.SteppedEase=$.steps=bt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,n=1-re;return function(a){return((r*$0(0,n,a)|0)+s)*i}}};f0.ease=$["quad.out"];tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Js+=o+","+o+"Params,"});var en=function(e,t){this.id=j1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ks,this.set=t?t.getSetter:Nr},j0=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,p0(this,+t.duration,1,1),this.data=t.data,le&&(this._ctx=le,le.data.push(this)),U0||ht.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,p0(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(_0(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fr(this,i),!s._dp||s.parent||Mo(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ut(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),So(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ho(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ho(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?m0(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Pr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-re?0:this._rts,this.totalTime($0(-Math.abs(this._delay),this._tDur,s),r!==!1),Rr(this),rl(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ut(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ft(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pr(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Z1);var r=Fe;return Fe=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Fe=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,fo(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,fo(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Et(this,i),ft(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ft(r)),this._dur||(this._zTime=-re),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-re:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-re)},e.eventCallback=function(i,r,s){var n=this.vars;return arguments.length>1?(r?(n[i]=r,s&&(n[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete n[i],this):n[i]},e.then=function(i){var r=this;return new Promise(function(s){var n=ge(i)?i:Lo,a=function(){var c=r.then;r.then=null,ge(n)&&(n=n(r))&&(n.then||n===r)&&(r.then=c),s(n),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){q0(this)},o}();xt(j0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Re=function(o){_o(e,o);function e(i,r){var s;return i===void 0&&(i={}),s=o.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ft(i.sortChildren),de&&Ut(i.parent||de,ni(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Io(ni(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,n){return Y0(0,arguments,this),this},t.from=function(r,s,n){return Y0(1,arguments,this),this},t.fromTo=function(r,s,n,a){return Y0(2,arguments,this),this},t.set=function(r,s,n){return s.duration=0,s.parent=this,V0(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new be(r,s,Et(this,n),1),this},t.call=function(r,s,n){return Ut(this,be.delayedCall(0,r,s),n)},t.staggerTo=function(r,s,n,a,l,c,d){return n.duration=s,n.stagger=n.stagger||a,n.onComplete=c,n.onCompleteParams=d,n.parent=this,new be(r,n,Et(this,l)),this},t.staggerFrom=function(r,s,n,a,l,c,d){return n.runBackwards=1,V0(n).immediateRender=ft(n.immediateRender),this.staggerTo(r,s,n,a,l,c,d)},t.staggerFromTo=function(r,s,n,a,l,c,d,f){return a.startAt=n,V0(a).immediateRender=ft(a.immediateRender),this.staggerTo(r,s,a,l,c,d,f)},t.render=function(r,s,n){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:Te(r),f=this._zTime<0!=r<0&&(this._initted||!c),g,u,m,h,_,x,b,T,w,k,C,y;if(this!==de&&d>l&&r>=0&&(d=l),d!==this._tTime||n||f){if(a!==this._time&&c&&(d+=this._time-a,r+=this._time-a),g=d,w=this._start,T=this._ts,x=!T,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,n);if(g=Te(d%_),d===l?(h=this._repeat,g=c):(k=Te(d/_),h=~~k,h&&h===k&&(g=c,h--),g>c&&(g=c)),k=m0(this._tTime,_),!a&&this._tTime&&k!==h&&this._tTime-k*_-this._dur<=0&&(k=h),C&&h&1&&(g=c-g,y=1),h!==k&&!this._lock){var E=C&&k&1,S=E===(C&&h&1);if(h<k&&(E=!E),a=E?0:d%c?c:d,this._lock=1,this.render(a||(y?0:Te(h*_)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&yt(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Xo(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=al(this,Te(a),Te(g)),b&&(d-=g-(g=b._start))),this._tTime=d,this._time=g,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&g&&!s&&!h&&(yt(this,"onStart"),this._tTime!==d))return this;if(g>=a&&r>=0)for(u=this._first;u;){if(m=u._next,(u._act||g>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,s,n);if(u.render(u._ts>0?(g-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(g-u._start)*u._ts,s,n),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=-re);break}}u=m}else{u=this._last;for(var L=r<0?r:g;u;){if(m=u._prev,(u._act||L<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,s,n);if(u.render(u._ts>0?(L-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(L-u._start)*u._ts,s,n||Fe&&(u._initted||u._startAt)),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=L?-re:re);break}}u=m}}if(b&&!s&&(this.pause(),b.render(g>=a?0:-re)._zTime=g>=a?1:-1,this._ts))return this._start=w,Rr(this),this.render(r,s,n);this._onUpdate&&!s&&yt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&a)&&(w===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ti(this,1),!s&&!(r<0&&!a)&&(d||a||!l)&&(yt(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var n=this;if(ai(s)||(s=Et(this,s,r)),!(r instanceof j0)){if(We(r))return r.forEach(function(a){return n.add(a,s)}),this;if(Ee(r))return this.addLabel(r,s);if(ge(r))r=be.delayedCall(0,r);else return this}return this!==r?Ut(this,r,s):this},t.getChildren=function(r,s,n,a){r===void 0&&(r=!0),s===void 0&&(s=!0),n===void 0&&(n=!0),a===void 0&&(a=-Mt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof be?s&&l.push(c):(n&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,n)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),n=s.length;n--;)if(s[n].vars.id===r)return s[n]},t.remove=function(r){return Ee(r)?this.removeLabel(r):ge(r)?this.killTweensOf(r):(r.parent===this&&Dr(this,r),r===this._recent&&(this._recent=this._last),qi(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(ht.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Et(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,n){var a=be.delayedCall(0,s||G0,n);return a.data="isPause",this._hasPause=1,Ut(this,a,Et(this,r))},t.removePause=function(r){var s=this._first;for(r=Et(this,r);s;)s._start===r&&s.data==="isPause"&&Ti(s),s=s._next},t.killTweensOf=function(r,s,n){for(var a=this.getTweensOf(r,n),l=a.length;l--;)bi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var n=[],a=It(r),l=this._first,c=ai(s),d;l;)l instanceof be?el(l._targets,a)&&(c?(!bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&n.push(l):(d=l.getTweensOf(a,s)).length&&n.push.apply(n,d),l=l._next;return n},t.tweenTo=function(r,s){s=s||{};var n=this,a=Et(n,r),l=s,c=l.startAt,d=l.onStart,f=l.onStartParams,g=l.immediateRender,u,m=be.to(n,xt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:n._time))/n.timeScale())||re,onStart:function(){if(n.pause(),!u){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:n._time))/n.timeScale());m._dur!==_&&p0(m,_,0,1).render(m._time,!0,!0),u=1}d&&d.apply(m,f||[])}},s));return g?m.render(0):m},t.tweenFromTo=function(r,s,n){return this.tweenTo(s,xt({startAt:{time:Et(this,r)}},n))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),go(this,Et(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),go(this,Et(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},t.shiftChildren=function(r,s,n){n===void 0&&(n=0);for(var a=this._first,l=this.labels,c;a;)a._start>=n&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=n&&(l[c]+=r);return qi(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,n;s;)n=s._next,this.remove(s),s=n;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qi(this)},t.totalDuration=function(r){var s=0,n=this,a=n._last,l=Mt,c,d,f;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-r:r));if(n._dirty){for(f=n.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>l&&n._sort&&a._ts&&!n._lock?(n._lock=1,Ut(n,a,d-a._delay,1)._lock=0):l=d,d<0&&a._ts&&(s-=d,(!f&&!n._dp||f&&f.smoothChildTiming)&&(n._start+=d/n._ts,n._time-=d,n._tTime-=d),n.shiftChildren(-d,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;p0(n,n===de&&n._time>s?n._time:s,1,1),n._dirty=0}return n._tDur},e.updateRoot=function(r){if(de._ts&&(So(de,Pr(r,de)),To=ht.frame),ht.frame>=co){co+=gt.autoSleep||120;var s=de._first;if((!s||!s._ts)&&gt.autoSleep&&ht._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ht.sleep()}}},e}(j0);xt(Re.prototype,{_lock:0,_hasPause:0,_forcing:0});var kl=function(e,t,i,r,s,n,a){var l=new it(this._pt,e,t,0,1,on,null,s),c=0,d=0,f,g,u,m,h,_,x,b;for(l.b=i,l.e=r,i+="",r+="",(x=~r.indexOf("random("))&&(r=v0(r)),n&&(b=[i,r],n(b,e,t),i=b[0],r=b[1]),g=i.match(Cs)||[];f=Cs.exec(r);)m=f[0],h=r.substring(c,f.index),u?u=(u+1)%5:h.substr(-5)==="rgba("&&(u=1),m!==g[d++]&&(_=parseFloat(g[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:_,c:m.charAt(1)==="="?Xi(_,m)-_:parseFloat(m)-_,m:u&&u<4?Math.round:0},c=Cs.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Us.test(r)||x)&&(l.e=0),this._pt=l,l},tn=function(e,t,i,r,s,n,a,l,c,d){ge(r)&&(r=r(s||0,e,n));var f=e[t],g=i!=="get"?i:ge(f)?c?e[t.indexOf("set")||!ge(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=ge(f)?c?El:jo:nn,m;if(Ee(r)&&(~r.indexOf("random(")&&(r=v0(r)),r.charAt(1)==="="&&(m=Xi(g,r)+(Ne(g)||0),(m||m===0)&&(r=m))),!d||g!==r||Vs)return!isNaN(g*r)&&r!==""?(m=new it(this._pt,e,t,+g||0,r-(g||0),typeof f=="boolean"?Il:$o,0,u),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(t in e)&&Or(t,r),kl.call(this,e,t,g,r,u,l||gt.stringFilter,c))},Tl=function(e,t,i,r,s){if(ge(e)&&(e=X0(e,s,t,i,r)),!jt(e)||e.style&&e.nodeType||We(e)||wo(e))return Ee(e)?X0(e,s,t,i,r):e;var n={},a;for(a in e)n[a]=X0(e[a],s,t,i,r);return n},rn=function(e,t,i,r,s,n){var a,l,c,d;if(ut[e]&&(a=new ut[e]).init(s,a.rawVars?t[e]:Tl(t[e],r,s,n,i),i,r,n)!==!1&&(i._pt=l=new it(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==h0))for(c=i._ptLookup[i._targets.indexOf(s)],d=a._props.length;d--;)c[a._props[d]]=l;return a},bi,Vs,sn=function o(e,t,i){var r=e.vars,s=r.ease,n=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,f=r.yoyoEase,g=r.keyframes,u=r.autoRevert,m=e._dur,h=e._startAt,_=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:_,T=e._overwrite==="auto"&&!Xs,w=e.timeline,k,C,y,E,S,L,D,M,G,X,J,U,A;if(w&&(!g||!s)&&(s="none"),e._ease=Hi(s,f0.ease),e._yEase=f?Yo(Hi(f===!0?s:f,f0.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(M=_[0]?ki(_[0]).harness:0,U=M&&r[M.prop],k=Br(r,$s),h&&(h._zTime<0&&h.progress(1),t<0&&d&&a&&!u?h.render(-1,!0):h.revert(d&&m?Cr:K1),h._lazy=0),n){if(Ti(e._startAt=be.set(_,xt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!h&&ft(l),startAt:null,delay:0,onUpdate:c&&function(){return yt(e,"onUpdate")},stagger:0},n))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Fe||!a&&!u)&&e._startAt.revert(Cr),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&m&&!h){if(t&&(a=!1),y=xt({overwrite:!1,data:"isFromStart",lazy:a&&!h&&ft(l),immediateRender:a,stagger:0,parent:x},k),U&&(y[M.prop]=U),Ti(e._startAt=be.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Fe?e._startAt.revert(Cr):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,re,re);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ft(l)||l&&!m,C=0;C<_.length;C++){if(S=_[C],D=S._gsap||Qs(_)[C]._gsap,e._ptLookup[C]=X={},Ds[D.id]&&xi.length&&Ir(),J=b===_?C:b.indexOf(S),M&&(G=new M).init(S,U||k,e,J,b)!==!1&&(e._pt=E=new it(e._pt,S,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(K){X[K]=E}),G.priority&&(L=1)),!M||U)for(y in k)ut[y]&&(G=rn(y,k,e,J,S,b))?G.priority&&(L=1):X[y]=E=tn.call(e,S,y,"get",k[y],J,b,0,r.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),T&&e._pt&&(bi=e,de.killTweensOf(S,X,e.globalTime(t)),A=!e.parent,bi=0),e._pt&&l&&(Ds[D.id]=1)}L&&ln(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!A,g&&t<=0&&w.render(Mt,!0,!0)},Sl=function(e,t,i,r,s,n,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,g,u;if(!c)for(c=e._ptCache[t]=[],g=e._ptLookup,u=e._targets.length;u--;){if(d=g[u][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Vs=1,e.vars[t]="+=0",sn(e,a),Vs=0,l?W0(t+" not eligible for reset"):1;c.push(d)}for(u=c.length;u--;)f=c[u],d=f._pt||f,d.s=(r||r===0)&&!s?r:d.s+(r||0)+n*d.c,d.c=i-d.s,f.e&&(f.e=me(i)+Ne(f.e)),f.b&&(f.b=d.s+Ne(f.b))},Cl=function(e,t){var i=e[0]?ki(e[0]).harness:0,r=i&&i.aliases,s,n,a,l;if(!r)return t;s=g0({},t);for(n in r)if(n in s)for(l=r[n].split(","),a=l.length;a--;)s[l[a]]=s[n];return s},Ll=function(e,t,i,r){var s=t.ease||r||"power1.inOut",n,a;if(We(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(n in t)a=i[n]||(i[n]=[]),n==="ease"||a.push({t:parseFloat(e),v:t[n],e:s})},X0=function(e,t,i,r,s){return ge(e)?e.call(t,i,r,s):Ee(e)&&~e.indexOf("random(")?v0(e):e},Go=Js+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Uo={};tt(Go+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Uo[o]=1});var be=function(o){_o(e,o);function e(i,r,s,n){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=o.call(this,n?r:V0(r))||this;var l=a.vars,c=l.duration,d=l.delay,f=l.immediateRender,g=l.stagger,u=l.overwrite,m=l.keyframes,h=l.defaults,_=l.scrollTrigger,x=l.yoyoEase,b=r.parent||de,T=(We(i)||wo(i)?ai(i[0]):"length"in r)?[i]:It(i),w,k,C,y,E,S,L,D;if(a._targets=T.length?Qs(T):W0("GSAP target "+i+" not found. https://gsap.com",!gt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||g||Sr(c)||Sr(d)){if(r=a.vars,w=a.timeline=new Re({data:"nested",defaults:h||{},targets:b&&b.data==="nested"?b.vars.targets:T}),w.kill(),w.parent=w._dp=ni(a),w._start=0,g||Sr(c)||Sr(d)){if(y=T.length,L=g&&Ao(g),jt(g))for(E in g)~Go.indexOf(E)&&(D||(D={}),D[E]=g[E]);for(k=0;k<y;k++)C=Br(r,Uo),C.stagger=0,x&&(C.yoyoEase=x),D&&g0(C,D),S=T[k],C.duration=+X0(c,ni(a),k,S,T),C.delay=(+X0(d,ni(a),k,S,T)||0)-a._delay,!g&&y===1&&C.delay&&(a._delay=d=C.delay,a._start+=d,C.delay=0),w.to(S,C,L?L(k,S,T):0),w._ease=$.none;w.duration()?c=d=0:a.timeline=0}else if(m){V0(xt(w.vars.defaults,{ease:"none"})),w._ease=Hi(m.ease||r.ease||"none");var M=0,G,X,J;if(We(m))m.forEach(function(U){return w.to(T,U,">")}),w.duration();else{C={};for(E in m)E==="ease"||E==="easeEach"||Ll(E,m[E],C,m.easeEach);for(E in C)for(G=C[E].sort(function(U,A){return U.t-A.t}),M=0,k=0;k<G.length;k++)X=G[k],J={ease:X.e,duration:(X.t-(k?G[k-1].t:0))/100*c},J[E]=X.v,w.to(T,J,M),M+=J.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return u===!0&&!Xs&&(bi=ni(a),de.killTweensOf(T),bi=0),Ut(b,ni(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!m&&a._start===Te(b._time)&&ft(f)&&sl(ni(a))&&b.data!=="nested")&&(a._tTime=-re,a.render(Math.max(0,-d)||0)),_&&Io(ni(a),_),a}var t=e.prototype;return t.render=function(r,s,n){var a=this._time,l=this._tDur,c=this._dur,d=r<0,f=r>l-re&&!d?l:r<re?0:r,g,u,m,h,_,x,b,T,w;if(!c)ol(this,r,s,n);else if(f!==this._tTime||!r||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(g=f,T=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+r,s,n);if(g=Te(f%h),f===l?(m=this._repeat,g=c):(_=Te(f/h),m=~~_,m&&m===_?(g=c,m--):g>c&&(g=c)),x=this._yoyo&&m&1,x&&(w=this._yEase,g=c-g),_=m0(this._tTime,h),g===a&&!n&&this._initted&&m===_)return this._tTime=f,this;m!==_&&(T&&this._yEase&&Xo(T,x),this.vars.repeatRefresh&&!x&&!this._lock&&g!==h&&this._initted&&(this._lock=n=1,this.render(Te(h*m),!0).invalidate()._lock=0))}if(!this._initted){if(Bo(this,d?r:g,n,s,f))return this._tTime=0,this;if(a!==this._time&&!(n&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,s,n)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(w||this._ease)(g/c),this._from&&(this.ratio=b=1-b),g&&!a&&!s&&!m&&(yt(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;T&&T.render(r<0?r:T._dur*T._ease(g/this._dur),s,n)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&Rs(this,r,s,n),yt(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&yt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Rs(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ti(this,1),!s&&!(d&&!a)&&(f||a||x)&&(yt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,n,a,l){U0||ht.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||sn(this,c),d=this._ease(c/this._dur),Sl(this,r,s,n,a,d,c,l)?this.resetTo(r,s,n,a,1):(Fr(this,0),this.parent||Eo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?q0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,bi&&bi.vars.overwrite!==!0)._first||q0(this),this.parent&&n!==this.timeline.totalDuration()&&p0(this,this._dur*this.timeline._tDur/n,0,1),this}var a=this._targets,l=r?It(r):a,c=this._ptLookup,d=this._pt,f,g,u,m,h,_,x;if((!s||s==="all")&&il(a,l))return s==="all"&&(this._pt=0),q0(this);for(f=this._op=this._op||[],s!=="all"&&(Ee(s)&&(h={},tt(s,function(b){return h[b]=1}),s=h),s=Cl(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){g=c[x],s==="all"?(f[x]=s,m=g,u={}):(u=f[x]=f[x]||{},m=s);for(h in m)_=g&&g[h],_&&((!("kill"in _.d)||_.d.kill(h)===!0)&&Dr(this,_,"_pt"),delete g[h]),u!=="all"&&(u[h]=1)}return this._initted&&!this._pt&&d&&q0(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Y0(1,arguments)},e.delayedCall=function(r,s,n,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:a})},e.fromTo=function(r,s,n){return Y0(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,n){return de.killTweensOf(r,s,n)},e}(j0);xt(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tt("staggerTo,staggerFrom,staggerFromTo",function(o){be[o]=function(){var e=new Re,t=Ns.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var nn=function(e,t,i){return e[t]=i},jo=function(e,t,i){return e[t](i)},El=function(e,t,i,r){return e[t](r.fp,i)},Ml=function(e,t,i){return e.setAttribute(t,i)},Nr=function(e,t){return ge(e[t])?jo:Ar(e[t])&&e.setAttribute?Ml:nn},$o=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Il=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},on=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},an=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Bl=function(e,t,i,r){for(var s=this._pt,n;s;)n=s._next,s.p===r&&s.modifier(e,t,i),s=n},Pl=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Dr(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zl=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},ln=function(e){for(var t=e._pt,i,r,s,n;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:n)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:n=t,t=i}e._pt=s},it=function(){function o(t,i,r,s,n,a,l,c,d){this.t=i,this.s=s,this.c=n,this.p=r,this.r=a||$o,this.d=l||this,this.set=c||nn,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zl,this.m=i,this.mt=s,this.tween=r},o}();tt(Js+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return $s[o]=1});bt.TweenMax=bt.TweenLite=be;bt.TimelineLite=bt.TimelineMax=Re;de=new Re({sortChildren:!1,defaults:f0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=Zs;var Vi=[],Er={},Al=[],po=0,Ol=0,Bs=function(e){return(Er[e]||Al).map(function(t){return t()})},Ys=function(){var e=Date.now(),t=[];e-po>2&&(Bs("matchMediaInit"),Vi.forEach(function(i){var r=i.queries,s=i.conditions,n,a,l,c;for(a in r)n=Gt.matchMedia(r[a]).matches,n&&(l=1),n!==s[a]&&(s[a]=n,c=1);c&&(i.revert(),l&&t.push(i))}),Bs("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),po=e,Bs("matchMedia"))},Jo=function(){function o(t,i){this.selector=i&&qs(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Ol++,t&&this.add(t)}var e=o.prototype;return e.add=function(i,r,s){ge(i)&&(s=r,r=i,i=ge);var n=this,a=function(){var c=le,d=n.selector,f;return c&&c!==n&&c.data.push(n),s&&(n.selector=qs(s)),le=n,f=r.apply(n,arguments),ge(f)&&n._r.push(f),le=c,n.selector=d,n.isReverted=!1,f};return n.last=a,i===ge?a(n,function(l){return n.add(null,l)}):i?n[i]=a:a},e.ignore=function(i){var r=le;le=null,i(this),le=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof o?i.push.apply(i,r.getTweens()):r instanceof be&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return a.splice(a.indexOf(d),1)}));for(a.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Re?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(i);s._r.forEach(function(d){return d(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var n=Vi.length;n--;)Vi[n].id===this.id&&Vi.splice(n,1)},e.revert=function(i){this.kill(i||{})},o}(),Dl=function(){function o(t){this.contexts=[],this.scope=t,le&&le.data.push(this)}var e=o.prototype;return e.add=function(i,r,s){jt(i)||(i={matches:i});var n=new Jo(0,s||this.scope),a=n.conditions={},l,c,d;le&&!n.selector&&(n.selector=le.selector),this.contexts.push(n),r=n.add("onMatch",r),n.queries=i;for(c in i)c==="all"?d=1:(l=Gt.matchMedia(i[c]),l&&(Vi.indexOf(n)<0&&Vi.push(n),(a[c]=l.matches)&&(d=1),l.addListener?l.addListener(Ys):l.addEventListener("change",Ys)));return d&&r(n,function(f){return n.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},o}(),zr={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return qo(r)})},timeline:function(e){return new Re(e)},getTweensOf:function(e,t){return de.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ee(e)&&(e=It(e)[0]);var s=ki(e||{}).get,n=i?Lo:Co;return i==="native"&&(i=""),e&&(t?n((ut[t]&&ut[t].get||s)(e,t,i,r)):function(a,l,c){return n((ut[a]&&ut[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=It(e),e.length>1){var r=e.map(function(d){return Ge.quickSetter(d,t,i)}),s=r.length;return function(d){for(var f=s;f--;)r[f](d)}}e=e[0]||{};var n=ut[t],a=ki(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=n?function(d){var f=new n;h0._pt=0,f.init(e,i?d+i:d,h0,0,[e]),f.render(1,f),h0._pt&&an(1,h0)}:a.set(e,l);return n?c:function(d){return c(e,l,i?d+i:d,a,1)}},quickTo:function(e,t,i){var r,s=Ge.to(e,xt((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),n=function(l,c,d){return s.resetTo(t,l,c,d)};return n.tween=s,n},isTweening:function(e){return de.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hi(e.ease,f0.ease)),uo(f0,e||{})},config:function(e){return uo(gt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,n=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ut[a]&&!bt[a]&&W0(t+" effect requires "+a+" plugin.")}),Ls[t]=function(a,l,c){return i(It(a),xt(l||{},s),c)},n&&(Re.prototype[t]=function(a,l,c){return this.add(Ls[t](a,jt(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$[e]=Hi(t)},parseEase:function(e,t){return arguments.length?Hi(e,t):$},getById:function(e){return de.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Re(e),r,s;for(i.smoothChildTiming=ft(e.smoothChildTiming),de.remove(i),i._dp=0,i._time=i._tTime=de._time,r=de._first;r;)s=r._next,(t||!(!r._dur&&r instanceof be&&r.vars.onComplete===r._targets[0]))&&Ut(i,r,r._start-r._delay),r=s;return Ut(de,i,0),i},context:function(e,t){return e?new Jo(e,t):le},matchMedia:function(e){return new Dl(e)},matchMediaRefresh:function(){return Vi.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ys()},addEventListener:function(e,t){var i=Er[e]||(Er[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Er[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:gl,wrapYoyo:ml,distribute:Ao,random:Do,snap:Oo,normalize:fl,getUnit:Ne,clamp:cl,splitColor:Ho,toArray:It,selector:qs,mapRange:Fo,pipe:ul,unitize:hl,interpolate:pl,shuffle:zo},install:xo,effects:Ls,ticker:ht,updateRoot:Re.updateRoot,plugins:ut,globalTimeline:de,core:{PropTween:it,globals:ko,Tween:be,Timeline:Re,Animation:j0,getCache:ki,_removeLinkedListItem:Dr,reverting:function(){return Fe},context:function(e){return e&&le&&(le.data.push(e),e._ctx=le),le},suppressOverwrites:function(e){return Xs=e}}};tt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return zr[o]=be[o]});ht.add(Re.updateRoot);h0=zr.to({},{duration:0});var Rl=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Fl=function(e,t){var i=e._targets,r,s,n;for(r in t)for(s=i.length;s--;)n=e._ptLookup[s][r],n&&(n=n.d)&&(n._pt&&(n=Rl(n,r)),n&&n.modifier&&n.modifier(t[r],e,i[s],r))},Ps=function(e,t){return{name:e,rawVars:1,init:function(r,s,n){n._onInit=function(a){var l,c;if(Ee(s)&&(l={},tt(s,function(d){return l[d]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Fl(a,s)}}}},Ge=zr.registerPlugin({name:"attr",init:function(e,t,i,r,s){var n,a,l;this.tween=i;for(n in t)l=e.getAttribute(n)||"",a=this.add(e,"setAttribute",(l||0)+"",t[n],r,s,0,0,n),a.op=n,a.b=l,this._props.push(n)},render:function(e,t){for(var i=t._pt;i;)Fe?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ps("roundProps",Hs),Ps("modifiers"),Ps("snap",Oo))||zr;be.version=Re.version=Ge.version="3.12.7";bo=1;Ws()&&_0();var Nl=$.Power0,ql=$.Power1,Hl=$.Power2,Vl=$.Power3,Yl=$.Power4,Xl=$.Linear,Wl=$.Quad,Gl=$.Cubic,Ul=$.Quart,jl=$.Quint,$l=$.Strong,Jl=$.Elastic,Ql=$.Back,Kl=$.SteppedEase,Zl=$.Bounce,ec=$.Sine,tc=$.Expo,ic=$.Circ;var Qo,Ci,y0,gn,$i,rc,Ko,mn,sc=function(){return typeof window<"u"},ci={},ji=180/Math.PI,b0=Math.PI/180,w0=Math.atan2,Zo=1e8,pn=/([A-Z])/g,nc=/(left|right|width|margin|padding|x)/i,oc=/[\s,\(]\S/,$t={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ac=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lc=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cc=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},aa=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},la=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dc=function(e,t,i){return e.style[t]=i},uc=function(e,t,i){return e.style.setProperty(t,i)},hc=function(e,t,i){return e._gsap[t]=i},fc=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},gc=function(e,t,i,r,s){var n=e._gsap;n.scaleX=n.scaleY=i,n.renderTransform(s,n)},mc=function(e,t,i,r,s){var n=e._gsap;n[t]=i,n.renderTransform(s,n)},ue="transform",mt=ue+"Origin",pc=function o(e,t){var i=this,r=this.target,s=r.style,n=r._gsap;if(e in ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$t[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=li(r,a)}):this.tfm[e]=n.x?n[e]:li(r,e),e===mt&&(this.tfm.zOrigin=n.zOrigin);else return $t.transform.split(",").forEach(function(a){return o.call(i,a,t)});if(this.props.indexOf(ue)>=0)return;n.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mt,t,"")),e=ue}(s||t)&&this.props.push(e,t,s[e])},ca=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_c=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,n;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(pn,"-$1").toLowerCase());if(this.tfm){for(n in this.tfm)r[n]=this.tfm[n];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mn(),(!s||!s.isStart)&&!i[ue]&&(ca(i),r.zOrigin&&i[mt]&&(i[mt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},da=function(e,t){var i={target:e,props:[],revert:_c,save:pc};return e._gsap||Ge.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},ua,un=function(e,t){var i=Ci.createElementNS?Ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ci.createElement(e);return i&&i.style?i:Ci.createElement(e)},Jt=function o(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(pn,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&o(e,x0(t)||t,1)||""},ea="O,Moz,ms,Ms,Webkit".split(","),x0=function(e,t,i){var r=t||$i,s=r.style,n=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);n--&&!(ea[n]+e in s););return n<0?null:(n===3?"ms":n>=0?ea[n]:"")+e},hn=function(){sc()&&window.document&&(Qo=window,Ci=Qo.document,y0=Ci.documentElement,$i=un("div")||{style:{}},rc=un("div"),ue=x0(ue),mt=ue+"Origin",$i.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ua=!!x0("perspective"),mn=Ge.core.reverting,gn=1)},ta=function(e){var t=e.ownerSVGElement,i=un("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),y0.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),y0.removeChild(i),s},ia=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ha=function(e){var t,i;try{t=e.getBBox()}catch{t=ta(e),i=1}return t&&(t.width||t.height)||i||(t=ta(e)),t&&!t.width&&!t.x&&!t.y?{x:+ia(e,["x","cx","x1"])||0,y:+ia(e,["y","cy","y1"])||0,width:0,height:0}:t},fa=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ha(e))},Ji=function(e,t){if(t){var i=e.style,r;t in ci&&t!==mt&&(t=ue),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(pn,"-$1").toLowerCase())):i.removeAttribute(t)}},Li=function(e,t,i,r,s,n){var a=new it(e._pt,t,i,0,1,n?la:aa);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},ra={deg:1,rad:1,turn:1},vc={grid:1,flex:1},Ei=function o(e,t,i,r){var s=parseFloat(i)||0,n=(i+"").trim().substr((s+"").length)||"px",a=$i.style,l=nc.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,g=r==="px",u=r==="%",m,h,_,x;if(r===n||!s||ra[r]||ra[n])return s;if(n!=="px"&&!g&&(s=o(e,t,i,"px")),x=e.getCTM&&fa(e),(u||n==="%")&&(ci[t]||~t.indexOf("adius")))return m=x?e.getBBox()[l?"width":"height"]:e[d],me(u?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(g?n:r),h=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Ci||!h.appendChild)&&(h=Ci.body),_=h._gsap,_&&u&&_.width&&l&&_.time===ht.time&&!_.uncache)return me(s/_.width*f);if(u&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+r,m=e[d],b?e.style[t]=b:Ji(e,t)}else(u||n==="%")&&!vc[Jt(h,"display")]&&(a.position=Jt(e,"position")),h===e&&(a.position="static"),h.appendChild($i),m=$i[d],h.removeChild($i),a.position="absolute";return l&&u&&(_=ki(h),_.time=ht.time,_.width=h[d]),me(g?m*s/f:m&&s?f/m*s:0)},li=function(e,t,i,r){var s;return gn||hn(),t in $t&&t!=="transform"&&(t=$t[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=K0(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hr(Jt(e,mt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=qr[t]&&qr[t](e,t,i)||Jt(e,t)||Ks(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ei(e,t,s,i)+i:s},wc=function(e,t,i,r){if(!i||i==="none"){var s=x0(t,e,1),n=s&&Jt(e,s,1);n&&n!==i?(t=s,i=n):t==="borderColor"&&(i=Jt(e,"borderTopColor"))}var a=new it(this._pt,e.style,t,0,1,on),l=0,c=0,d,f,g,u,m,h,_,x,b,T,w,k;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(h=e.style[t],e.style[t]=r,r=Jt(e,t)||r,h?e.style[t]=h:Ji(e,t)),d=[i,r],Zs(d),i=d[0],r=d[1],g=i.match(Yi)||[],k=r.match(Yi)||[],k.length){for(;f=Yi.exec(r);)_=f[0],b=r.substring(l,f.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),_!==(h=g[c++]||"")&&(u=parseFloat(h)||0,w=h.substr((u+"").length),_.charAt(1)==="="&&(_=Xi(u,_)+w),x=parseFloat(_),T=_.substr((x+"").length),l=Yi.lastIndex-T.length,T||(T=T||gt.units[t]||w,l===r.length&&(r+=T,a.e+=T)),w!==T&&(u=Ei(e,t,h,T)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:u,c:x-u,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?la:aa;return Us.test(r)&&(a.e=0),this._pt=a,a},sa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yc=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=sa[i]||i,t[1]=sa[r]||r,t.join(" ")},bc=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,n=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ci[a]&&(l=1,a=a==="transformOrigin"?mt:ue),Ji(i,a);l&&(Ji(i,ue),n&&(n.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",K0(i,1),n.uncache=1,ca(r)))}},qr={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var n=e._pt=new it(e._pt,t,i,0,0,bc);return n.u=r,n.pr=-10,n.tween=s,e._props.push(i),1}}},Q0=[1,0,0,1,0,0],ga={},ma=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},na=function(e){var t=Jt(e,ue);return ma(t)?Q0:t.substr(7).match(Gs).map(me)},_n=function(e,t){var i=e._gsap||ki(e),r=e.style,s=na(e),n,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Q0:s):(s===Q0&&!e.offsetParent&&e!==y0&&!i.svg&&(l=r.display,r.display="block",n=e.parentNode,(!n||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,y0.appendChild(e)),s=na(e),l?r.display=l:Ji(e,"display"),c&&(a?n.insertBefore(e,a):n?n.appendChild(e):y0.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fn=function(e,t,i,r,s,n){var a=e._gsap,l=s||_n(e,!0),c=a.xOrigin||0,d=a.yOrigin||0,f=a.xOffset||0,g=a.yOffset||0,u=l[0],m=l[1],h=l[2],_=l[3],x=l[4],b=l[5],T=t.split(" "),w=parseFloat(T[0])||0,k=parseFloat(T[1])||0,C,y,E,S;i?l!==Q0&&(y=u*_-m*h)&&(E=w*(_/y)+k*(-h/y)+(h*b-_*x)/y,S=w*(-m/y)+k*(u/y)-(u*b-m*x)/y,w=E,k=S):(C=ha(e),w=C.x+(~T[0].indexOf("%")?w/100*C.width:w),k=C.y+(~(T[1]||T[0]).indexOf("%")?k/100*C.height:k)),r||r!==!1&&a.smooth?(x=w-c,b=k-d,a.xOffset=f+(x*u+b*h)-x,a.yOffset=g+(x*m+b*_)-b):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=k,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[mt]="0px 0px",n&&(Li(n,a,"xOrigin",c,w),Li(n,a,"yOrigin",d,k),Li(n,a,"xOffset",f,a.xOffset),Li(n,a,"yOffset",g,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},K0=function(e,t){var i=e._gsap||new en(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,n="px",a="deg",l=getComputedStyle(e),c=Jt(e,mt)||"0",d,f,g,u,m,h,_,x,b,T,w,k,C,y,E,S,L,D,M,G,X,J,U,A,K,ne,p,oe,Qe,At,he,Ae;return d=f=g=h=_=x=b=T=w=0,u=m=1,i.svg=!!(e.getCTM&&fa(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),r.scale=r.rotate=r.translate="none"),y=_n(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",A=""):A=!t&&e.getAttribute("data-svg-origin"),fn(e,A||c,!!A||i.originIsAbsolute,i.smooth!==!1,y)),k=i.xOrigin||0,C=i.yOrigin||0,y!==Q0&&(D=y[0],M=y[1],G=y[2],X=y[3],d=J=y[4],f=U=y[5],y.length===6?(u=Math.sqrt(D*D+M*M),m=Math.sqrt(X*X+G*G),h=D||M?w0(M,D)*ji:0,b=G||X?w0(G,X)*ji+h:0,b&&(m*=Math.abs(Math.cos(b*b0))),i.svg&&(d-=k-(k*D+C*G),f-=C-(k*M+C*X))):(Ae=y[6],At=y[7],p=y[8],oe=y[9],Qe=y[10],he=y[11],d=y[12],f=y[13],g=y[14],E=w0(Ae,Qe),_=E*ji,E&&(S=Math.cos(-E),L=Math.sin(-E),A=J*S+p*L,K=U*S+oe*L,ne=Ae*S+Qe*L,p=J*-L+p*S,oe=U*-L+oe*S,Qe=Ae*-L+Qe*S,he=At*-L+he*S,J=A,U=K,Ae=ne),E=w0(-G,Qe),x=E*ji,E&&(S=Math.cos(-E),L=Math.sin(-E),A=D*S-p*L,K=M*S-oe*L,ne=G*S-Qe*L,he=X*L+he*S,D=A,M=K,G=ne),E=w0(M,D),h=E*ji,E&&(S=Math.cos(E),L=Math.sin(E),A=D*S+M*L,K=J*S+U*L,M=M*S-D*L,U=U*S-J*L,D=A,J=K),_&&Math.abs(_)+Math.abs(h)>359.9&&(_=h=0,x=180-x),u=me(Math.sqrt(D*D+M*M+G*G)),m=me(Math.sqrt(U*U+Ae*Ae)),E=w0(J,U),b=Math.abs(E)>2e-4?E*ji:0,w=he?1/(he<0?-he:he):0),i.svg&&(A=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ma(Jt(e,ue)),A&&e.setAttribute("transform",A))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(u*=-1,b+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+n,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+n,i.z=g+n,i.scaleX=me(u),i.scaleY=me(m),i.rotation=me(h)+a,i.rotationX=me(_)+a,i.rotationY=me(x)+a,i.skewX=b+a,i.skewY=T+a,i.transformPerspective=w+n,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[mt]=Hr(c)),i.xOffset=i.yOffset=0,i.force3D=gt.force3D,i.renderTransform=i.svg?kc:ua?pa:xc,i.uncache=0,i},Hr=function(e){return(e=e.split(" "))[0]+" "+e[1]},cn=function(e,t,i){var r=Ne(t);return me(parseFloat(t)+parseFloat(Ei(e,"x",i+"px",r)))+r},xc=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pa(e,t)},Gi="0deg",J0="0px",Ui=") ",pa=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,n=i.x,a=i.y,l=i.z,c=i.rotation,d=i.rotationY,f=i.rotationX,g=i.skewX,u=i.skewY,m=i.scaleX,h=i.scaleY,_=i.transformPerspective,x=i.force3D,b=i.target,T=i.zOrigin,w="",k=x==="auto"&&e&&e!==1||x===!0;if(T&&(f!==Gi||d!==Gi)){var C=parseFloat(d)*b0,y=Math.sin(C),E=Math.cos(C),S;C=parseFloat(f)*b0,S=Math.cos(C),n=cn(b,n,y*S*-T),a=cn(b,a,-Math.sin(C)*-T),l=cn(b,l,E*S*-T+T)}_!==J0&&(w+="perspective("+_+Ui),(r||s)&&(w+="translate("+r+"%, "+s+"%) "),(k||n!==J0||a!==J0||l!==J0)&&(w+=l!==J0||k?"translate3d("+n+", "+a+", "+l+") ":"translate("+n+", "+a+Ui),c!==Gi&&(w+="rotate("+c+Ui),d!==Gi&&(w+="rotateY("+d+Ui),f!==Gi&&(w+="rotateX("+f+Ui),(g!==Gi||u!==Gi)&&(w+="skew("+g+", "+u+Ui),(m!==1||h!==1)&&(w+="scale("+m+", "+h+Ui),b.style[ue]=w||"translate(0, 0)"},kc=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,n=i.x,a=i.y,l=i.rotation,c=i.skewX,d=i.skewY,f=i.scaleX,g=i.scaleY,u=i.target,m=i.xOrigin,h=i.yOrigin,_=i.xOffset,x=i.yOffset,b=i.forceCSS,T=parseFloat(n),w=parseFloat(a),k,C,y,E,S;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=b0,c*=b0,k=Math.cos(l)*f,C=Math.sin(l)*f,y=Math.sin(l-c)*-g,E=Math.cos(l-c)*g,c&&(d*=b0,S=Math.tan(c-d),S=Math.sqrt(1+S*S),y*=S,E*=S,d&&(S=Math.tan(d),S=Math.sqrt(1+S*S),k*=S,C*=S)),k=me(k),C=me(C),y=me(y),E=me(E)):(k=f,E=g,C=y=0),(T&&!~(n+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(T=Ei(u,"x",n,"px"),w=Ei(u,"y",a,"px")),(m||h||_||x)&&(T=me(T+m-(m*k+h*y)+_),w=me(w+h-(m*C+h*E)+x)),(r||s)&&(S=u.getBBox(),T=me(T+r/100*S.width),w=me(w+s/100*S.height)),S="matrix("+k+","+C+","+y+","+E+","+T+","+w+")",u.setAttribute("transform",S),b&&(u.style[ue]=S)},Tc=function(e,t,i,r,s){var n=360,a=Ee(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ji:1),c=l-r,d=r+c+"deg",f,g;return a&&(f=s.split("_")[1],f==="short"&&(c%=n,c!==c%(n/2)&&(c+=c<0?n:-n)),f==="cw"&&c<0?c=(c+n*Zo)%n-~~(c/n)*n:f==="ccw"&&c>0&&(c=(c-n*Zo)%n-~~(c/n)*n)),e._pt=g=new it(e._pt,t,i,r,c,ac),g.e=d,g.u="deg",e._props.push(i),g},oa=function(e,t){for(var i in t)e[i]=t[i];return e},Sc=function(e,t,i){var r=oa({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",n=i.style,a,l,c,d,f,g,u,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),n[ue]=t,a=K0(i,1),Ji(i,ue),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ue],n[ue]=t,a=K0(i,1),n[ue]=c);for(l in ci)c=r[l],d=a[l],c!==d&&s.indexOf(l)<0&&(u=Ne(c),m=Ne(d),f=u!==m?Ei(i,l,c,m):parseFloat(c),g=parseFloat(d),e._pt=new it(e._pt,a,l,f,g-f,dn),e._pt.u=m||0,e._props.push(l));oa(a,r)};tt("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",r="Bottom",s="Left",n=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?o+a:"border"+a+o});qr[e>1?"border"+o:o]=function(a,l,c,d,f){var g,u;if(arguments.length<4)return g=n.map(function(m){return li(a,m,c)}),u=g.join(" "),u.split(g[0]).length===5?g[0]:u;g=(d+"").split(" "),u={},n.forEach(function(m,h){return u[m]=g[h]=g[h]||g[(h-1)/2|0]}),a.init(l,u,f)}});var vn={name:"css",register:hn,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var n=this._props,a=e.style,l=i.vars.startAt,c,d,f,g,u,m,h,_,x,b,T,w,k,C,y,E;gn||hn(),this.styles=this.styles||da(e),E=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(d=t[h],!(ut[h]&&rn(h,t,i,r,e,s)))){if(u=typeof d,m=qr[h],u==="function"&&(d=d.call(i,r,e,s),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=v0(d)),m)m(this,e,h,d,i)&&(y=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",oi.lastIndex=0,oi.test(c)||(_=Ne(c),x=Ne(d)),x?_!==x&&(c=Ei(e,h,c,x)+x):_&&(d+=_),this.add(a,"setProperty",c,d,r,s,0,0,h),n.push(h),E.push(h,0,a[h]);else if(u!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(i,r,e,s):l[h],Ee(c)&&~c.indexOf("random(")&&(c=v0(c)),Ne(c+"")||c==="auto"||(c+=gt.units[h]||Ne(li(e,h))||""),(c+"").charAt(1)==="="&&(c=li(e,h))):c=li(e,h),g=parseFloat(c),b=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),f=parseFloat(d),h in $t&&(h==="autoAlpha"&&(g===1&&li(e,"visibility")==="hidden"&&f&&(g=0),E.push("visibility",0,a.visibility),Li(this,a,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=$t[h],~h.indexOf(",")&&(h=h.split(",")[0]))),T=h in ci,T){if(this.styles.save(h),w||(k=e._gsap,k.renderTransform&&!t.parseTransform||K0(e,t.parseTransform),C=t.smoothOrigin!==!1&&k.smooth,w=this._pt=new it(this._pt,a,ue,0,1,k.renderTransform,k,0,-1),w.dep=1),h==="scale")this._pt=new it(this._pt,k,"scaleY",k.scaleY,(b?Xi(k.scaleY,b+f):f)-k.scaleY||0,dn),this._pt.u=0,n.push("scaleY",h),h+="X";else if(h==="transformOrigin"){E.push(mt,0,a[mt]),d=yc(d),k.svg?fn(e,d,0,C,0,this):(x=parseFloat(d.split(" ")[2])||0,x!==k.zOrigin&&Li(this,k,"zOrigin",k.zOrigin,x),Li(this,a,h,Hr(c),Hr(d)));continue}else if(h==="svgOrigin"){fn(e,d,1,C,0,this);continue}else if(h in ga){Tc(this,k,h,g,b?Xi(g,b+d):d);continue}else if(h==="smoothOrigin"){Li(this,k,"smooth",k.smooth,d);continue}else if(h==="force3D"){k[h]=d;continue}else if(h==="transform"){Sc(this,d,e);continue}}else h in a||(h=x0(h)||h);if(T||(f||f===0)&&(g||g===0)&&!oc.test(d)&&h in a)_=(c+"").substr((g+"").length),f||(f=0),x=Ne(d)||(h in gt.units?gt.units[h]:_),_!==x&&(g=Ei(e,h,c,x)),this._pt=new it(this._pt,T?k:a,h,g,(b?Xi(g,b+f):f)-g,!T&&(x==="px"||h==="zIndex")&&t.autoRound!==!1?cc:dn),this._pt.u=x||0,_!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=lc);else if(h in a)wc.call(this,e,h,c,b?b+d:d);else if(h in e)this.add(e,h,c||e[h],b?b+d:d,r,s);else if(h!=="parseTransform"){Or(h,d);continue}T||(h in a?E.push(h,0,a[h]):typeof e[h]=="function"?E.push(h,2,e[h]()):E.push(h,1,c||e[h])),n.push(h)}}y&&ln(this)},render:function(e,t){if(t.tween._time||!mn())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:li,aliases:$t,getSetter:function(e,t,i){var r=$t[t];return r&&r.indexOf(",")<0&&(t=r),t in ci&&t!==mt&&(e._gsap.x||li(e,"x"))?i&&Ko===i?t==="scale"?fc:hc:(Ko=i||{})&&(t==="scale"?gc:mc):e.style&&!Ar(e.style[t])?dc:~t.indexOf("-")?uc:Nr(e,t)},core:{_removeProperty:Ji,_getMatrix:_n}};Ge.utils.checkPrefix=x0;Ge.core.getStyleSaver=da;(function(o,e,t,i){var r=tt(o+","+e+","+t,function(s){ci[s]=1});tt(e,function(s){gt.units[s]="deg",ga[s]=1}),$t[r[13]]=o+","+e,tt(i,function(s){var n=s.split(":");$t[n[1]]=r[n[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){gt.units[o]="px"});Ge.registerPlugin(vn);var Mi=Ge.registerPlugin(vn)||Ge,q3=Mi.core.Tween;function _a(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}function Cc(o,e,t){return e&&_a(o.prototype,e),t&&_a(o,t),o}var qe,Xr,Lc,kt,Ii,Bi,T0,wa,Qi,er,ya,di,qt,ba,xa=function(){return qe||typeof window<"u"&&(qe=window.gsap)&&qe.registerPlugin&&qe},ka=1,k0=[],H=[],Ht=[],tr=Date.now,wn=function(e,t){return t},Ec=function(){var e=er.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,H),r.push.apply(r,Ht),H=i,Ht=r,wn=function(n,a){return t[n](a)}},hi=function(e,t){return~Ht.indexOf(e)&&Ht[Ht.indexOf(e)+1][t]},ir=function(e){return!!~ya.indexOf(e)},st=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},rt=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Vr="scrollLeft",Yr="scrollTop",yn=function(){return di&&di.isPressed||H.cache++},Wr=function(e,t){var i=function r(s){if(s||s===0){ka&&(kt.history.scrollRestoration="manual");var n=di&&di.isPressed;s=r.v=Math.round(s)||(di&&di.iOS?1:0),e(s),r.cacheID=H.cache,n&&wn("ss",s)}else(t||H.cache!==r.cacheID||wn("ref"))&&(r.cacheID=H.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Ue={s:Vr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wr(function(o){return arguments.length?kt.scrollTo(o,Se.sc()):kt.pageXOffset||Ii[Vr]||Bi[Vr]||T0[Vr]||0})},Se={s:Yr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ue,sc:Wr(function(o){return arguments.length?kt.scrollTo(Ue.sc(),o):kt.pageYOffset||Ii[Yr]||Bi[Yr]||T0[Yr]||0})},nt=function(e,t){return(t&&t._ctx&&t._ctx.selector||qe.utils.toArray)(e)[0]||(typeof e=="string"&&qe.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ui=function(e,t){var i=t.s,r=t.sc;ir(e)&&(e=Ii.scrollingElement||Bi);var s=H.indexOf(e),n=r===Se.sc?1:2;!~s&&(s=H.push(e)-1),H[s+n]||st(e,"scroll",yn);var a=H[s+n],l=a||(H[s+n]=Wr(hi(e,i),!0)||(ir(e)?r:Wr(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=qe.getProperty(e,"scrollBehavior")==="smooth"),l},Gr=function(e,t,i){var r=e,s=e,n=tr(),a=n,l=t||50,c=Math.max(500,l*3),d=function(m,h){var _=tr();h||_-n>l?(s=r,r=m,a=n,n=_):i?r+=m:r=s+(m-s)/(_-a)*(n-a)},f=function(){s=r=i?0:r,a=n=0},g=function(m){var h=a,_=s,x=tr();return(m||m===0)&&m!==r&&d(m),n===a||x-a>c?0:(r+(i?_:-_))/((i?x:n)-h)*1e3};return{update:d,reset:f,getVelocity:g}},Z0=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},va=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Ta=function(){er=qe.core.globals().ScrollTrigger,er&&er.core&&Ec()},Sa=function(e){return qe=e||xa(),!Xr&&qe&&typeof document<"u"&&document.body&&(kt=window,Ii=document,Bi=Ii.documentElement,T0=Ii.body,ya=[kt,Ii,Bi,T0],Lc=qe.utils.clamp,ba=qe.core.context||function(){},Qi="onpointerenter"in T0?"pointer":"mouse",wa=pe.isTouch=kt.matchMedia&&kt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qt=pe.eventTypes=("ontouchstart"in Bi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ka=0},500),Ta(),Xr=1),Xr};Ue.op=Se;H.cache=0;var pe=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(i){Xr||Sa(qe)||console.warn("Please gsap.registerPlugin(Observer)"),er||Ta();var r=i.tolerance,s=i.dragMinimum,n=i.type,a=i.target,l=i.lineHeight,c=i.debounce,d=i.preventDefault,f=i.onStop,g=i.onStopDelay,u=i.ignore,m=i.wheelSpeed,h=i.event,_=i.onDragStart,x=i.onDragEnd,b=i.onDrag,T=i.onPress,w=i.onRelease,k=i.onRight,C=i.onLeft,y=i.onUp,E=i.onDown,S=i.onChangeX,L=i.onChangeY,D=i.onChange,M=i.onToggleX,G=i.onToggleY,X=i.onHover,J=i.onHoverEnd,U=i.onMove,A=i.ignoreCheck,K=i.isNormalizer,ne=i.onGestureStart,p=i.onGestureEnd,oe=i.onWheel,Qe=i.onEnable,At=i.onDisable,he=i.onClick,Ae=i.scrollSpeed,Ke=i.capture,xe=i.allowClicks,Ze=i.lockAxis,He=i.onLockAxis;this.target=a=nt(a)||Bi,this.vars=i,u&&(u=qe.utils.toArray(u)),r=r||1e-9,s=s||0,m=m||1,Ae=Ae||1,n=n||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kt.getComputedStyle(T0).lineHeight)||22);var pi,et,ct,Q,_e,dt,pt,v=this,_t=0,Zt=0,_i=i.passive||!d&&i.passive!==!1,ve=ui(a,Ue),ei=ui(a,Se),vi=ve(),Ai=ei(),Ie=~n.indexOf("touch")&&!~n.indexOf("pointer")&&qt[0]==="pointerdown",wi=ir(a),we=a.ownerDocument||Ii,Ot=[0,0,0],Lt=[0,0,0],ti=0,P0=function(){return ti=tr()},ke=function(z,Z){return(v.event=z)&&u&&~u.indexOf(z.target)||Z&&Ie&&z.pointerType!=="touch"||A&&A(z,Z)},vr=function(){v._vx.reset(),v._vy.reset(),et.pause(),f&&f(v)},ii=function(){var z=v.deltaX=va(Ot),Z=v.deltaY=va(Lt),I=Math.abs(z)>=r,R=Math.abs(Z)>=r;D&&(I||R)&&D(v,z,Z,Ot,Lt),I&&(k&&v.deltaX>0&&k(v),C&&v.deltaX<0&&C(v),S&&S(v),M&&v.deltaX<0!=_t<0&&M(v),_t=v.deltaX,Ot[0]=Ot[1]=Ot[2]=0),R&&(E&&v.deltaY>0&&E(v),y&&v.deltaY<0&&y(v),L&&L(v),G&&v.deltaY<0!=Zt<0&&G(v),Zt=v.deltaY,Lt[0]=Lt[1]=Lt[2]=0),(Q||ct)&&(U&&U(v),ct&&(_&&ct===1&&_(v),b&&b(v),ct=0),Q=!1),dt&&!(dt=!1)&&He&&He(v),_e&&(oe(v),_e=!1),pi=0},l0=function(z,Z,I){Ot[I]+=z,Lt[I]+=Z,v._vx.update(z),v._vy.update(Z),c?pi||(pi=requestAnimationFrame(ii)):ii()},c0=function(z,Z){Ze&&!pt&&(v.axis=pt=Math.abs(z)>Math.abs(Z)?"x":"y",dt=!0),pt!=="y"&&(Ot[2]+=z,v._vx.update(z,!0)),pt!=="x"&&(Lt[2]+=Z,v._vy.update(Z,!0)),c?pi||(pi=requestAnimationFrame(ii)):ii()},yi=function(z){if(!ke(z,1)){z=Z0(z,d);var Z=z.clientX,I=z.clientY,R=Z-v.x,P=I-v.y,F=v.isDragging;v.x=Z,v.y=I,(F||(R||P)&&(Math.abs(v.startX-Z)>=s||Math.abs(v.startY-I)>=s))&&(ct=F?2:1,F||(v.isDragging=!0),c0(R,P))}},Oi=v.onPress=function(N){ke(N,1)||N&&N.button||(v.axis=pt=null,et.pause(),v.isPressed=!0,N=Z0(N),_t=Zt=0,v.startX=v.x=N.clientX,v.startY=v.y=N.clientY,v._vx.reset(),v._vy.reset(),st(K?a:we,qt[1],yi,_i,!0),v.deltaX=v.deltaY=0,T&&T(v))},W=v.onRelease=function(N){if(!ke(N,1)){rt(K?a:we,qt[1],yi,!0);var z=!isNaN(v.y-v.startY),Z=v.isDragging,I=Z&&(Math.abs(v.x-v.startX)>3||Math.abs(v.y-v.startY)>3),R=Z0(N);!I&&z&&(v._vx.reset(),v._vy.reset(),d&&xe&&qe.delayedCall(.08,function(){if(tr()-ti>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(we.createEvent){var P=we.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,kt,1,R.screenX,R.screenY,R.clientX,R.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(P)}}})),v.isDragging=v.isGesturing=v.isPressed=!1,f&&Z&&!K&&et.restart(!0),ct&&ii(),x&&Z&&x(v),w&&w(v,I)}},Di=function(z){return z.touches&&z.touches.length>1&&(v.isGesturing=!0)&&ne(z,v.isDragging)},Dt=function(){return(v.isGesturing=!1)||p(v)},Rt=function(z){if(!ke(z)){var Z=ve(),I=ei();l0((Z-vi)*Ae,(I-Ai)*Ae,1),vi=Z,Ai=I,f&&et.restart(!0)}},Ft=function(z){if(!ke(z)){z=Z0(z,d),oe&&(_e=!0);var Z=(z.deltaMode===1?l:z.deltaMode===2?kt.innerHeight:1)*m;l0(z.deltaX*Z,z.deltaY*Z,0),f&&!K&&et.restart(!0)}},Ri=function(z){if(!ke(z)){var Z=z.clientX,I=z.clientY,R=Z-v.x,P=I-v.y;v.x=Z,v.y=I,Q=!0,f&&et.restart(!0),(R||P)&&c0(R,P)}},d0=function(z){v.event=z,X(v)},ri=function(z){v.event=z,J(v)},z0=function(z){return ke(z)||Z0(z,d)&&he(v)};et=v._dc=qe.delayedCall(g||.25,vr).pause(),v.deltaX=v.deltaY=0,v._vx=Gr(0,50,!0),v._vy=Gr(0,50,!0),v.scrollX=ve,v.scrollY=ei,v.isDragging=v.isGesturing=v.isPressed=!1,ba(this),v.enable=function(N){return v.isEnabled||(st(wi?we:a,"scroll",yn),n.indexOf("scroll")>=0&&st(wi?we:a,"scroll",Rt,_i,Ke),n.indexOf("wheel")>=0&&st(a,"wheel",Ft,_i,Ke),(n.indexOf("touch")>=0&&wa||n.indexOf("pointer")>=0)&&(st(a,qt[0],Oi,_i,Ke),st(we,qt[2],W),st(we,qt[3],W),xe&&st(a,"click",P0,!0,!0),he&&st(a,"click",z0),ne&&st(we,"gesturestart",Di),p&&st(we,"gestureend",Dt),X&&st(a,Qi+"enter",d0),J&&st(a,Qi+"leave",ri),U&&st(a,Qi+"move",Ri)),v.isEnabled=!0,v.isDragging=v.isGesturing=v.isPressed=Q=ct=!1,v._vx.reset(),v._vy.reset(),vi=ve(),Ai=ei(),N&&N.type&&Oi(N),Qe&&Qe(v)),v},v.disable=function(){v.isEnabled&&(k0.filter(function(N){return N!==v&&ir(N.target)}).length||rt(wi?we:a,"scroll",yn),v.isPressed&&(v._vx.reset(),v._vy.reset(),rt(K?a:we,qt[1],yi,!0)),rt(wi?we:a,"scroll",Rt,Ke),rt(a,"wheel",Ft,Ke),rt(a,qt[0],Oi,Ke),rt(we,qt[2],W),rt(we,qt[3],W),rt(a,"click",P0,!0),rt(a,"click",z0),rt(we,"gesturestart",Di),rt(we,"gestureend",Dt),rt(a,Qi+"enter",d0),rt(a,Qi+"leave",ri),rt(a,Qi+"move",Ri),v.isEnabled=v.isPressed=v.isDragging=!1,At&&At(v))},v.kill=v.revert=function(){v.disable();var N=k0.indexOf(v);N>=0&&k0.splice(N,1),di===v&&(di=0)},k0.push(v),K&&ir(a)&&(di=v),v.enable(h)},Cc(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();pe.version="3.12.7";pe.create=function(o){return new pe(o)};pe.register=Sa;pe.getAll=function(){return k0.slice()};pe.getById=function(o){return k0.filter(function(e){return e.vars.id===o})[0]};xa()&&qe.registerPlugin(pe);var B,L0,Y,se,Ct,ee,On,ls,mr,cr,sr,Ur,je,hs,En,at,Ca,La,E0,Ya,bn,Xa,ot,Mn,Wa,Ga,Pi,In,Dn,M0,Rn,cs,Bn,xn,jr=1,$e=Date.now,kn=$e(),zt=0,nr=0,Ea=function(e,t,i){var r=St(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ma=function(e,t){return t&&(!St(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Mc=function o(){return nr&&requestAnimationFrame(o)},Ia=function(){return hs=1},Ba=function(){return hs=0},Qt=function(e){return e},or=function(e){return Math.round(e*1e5)/1e5||0},Ua=function(){return typeof window<"u"},ja=function(){return B||Ua()&&(B=window.gsap)&&B.registerPlugin&&B},r0=function(e){return!!~On.indexOf(e)},$a=function(e){return(e==="Height"?Rn:Y["inner"+e])||Ct["client"+e]||ee["client"+e]},Ja=function(e){return hi(e,"getBoundingClientRect")||(r0(e)?function(){return as.width=Y.innerWidth,as.height=Rn,as}:function(){return fi(e)})},Ic=function(e,t,i){var r=i.d,s=i.d2,n=i.a;return(n=hi(e,"getBoundingClientRect"))?function(){return n()[r]}:function(){return(t?$a(s):e["client"+s])||0}},Bc=function(e,t){return!t||~Ht.indexOf(e)?Ja(e):function(){return as}},Kt=function(e,t){var i=t.s,r=t.d2,s=t.d,n=t.a;return Math.max(0,(i="scroll"+r)&&(n=hi(e,i))?n()-Ja(e)()[s]:r0(e)?(Ct[i]||ee[i])-$a(r):e[i]-e["offset"+r])},$r=function(e,t){for(var i=0;i<E0.length;i+=3)(!t||~t.indexOf(E0[i+1]))&&e(E0[i],E0[i+1],E0[i+2])},St=function(e){return typeof e=="string"},Je=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},Ki=function(e){return typeof e=="object"},rr=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Tn=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},S0=Math.abs,Qa="left",Ka="top",Fn="right",Nn="bottom",e0="width",t0="height",dr="Right",ur="Left",hr="Top",fr="Bottom",Ce="padding",Bt="margin",B0="Width",qn="Height",Me="px",Pt=function(e){return Y.getComputedStyle(e)},Pc=function(e){var t=Pt(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Pa=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fi=function(e,t){var i=t&&Pt(e)[En]!=="matrix(1, 0, 0, 1, 0, 0)"&&B.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},ds=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Za=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},zc=function(e){return function(t){return B.utils.snap(Za(e),t)}},Hn=function(e){var t=B.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,n){n===void 0&&(n=.001);var a;if(!s)return t(r);if(s>0){for(r-=n,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=n;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,n){n===void 0&&(n=.001);var a=t(r);return!s||Math.abs(a-r)<n||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Ac=function(e){return function(t,i){return Hn(Za(e))(t,i.direction)}},Jr=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},ze=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Pe=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Qr=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},za={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kr={toggleActions:"play",anticipatePin:0},us={top:0,left:0,center:.5,bottom:1,right:1},rs=function(e,t){if(St(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in us?us[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zr=function(e,t,i,r,s,n,a,l){var c=s.startColor,d=s.endColor,f=s.fontSize,g=s.indent,u=s.fontWeight,m=se.createElement("div"),h=r0(i)||hi(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,x=h?ee:i,b=e.indexOf("start")!==-1,T=b?c:d,w="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||l)&&h?"fixed;":"absolute;"),(_||l||!h)&&(w+=(r===Se?Fn:Nn)+":"+(n+parseFloat(g))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=w,m.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(m,x.children[0]):x.appendChild(m),m._offset=m["offset"+r.op.d2],ss(m,0,r,b),m},ss=function(e,t,i,r){var s={display:"block"},n=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+n+B0]=1,s["border"+a+B0]=0,s[i.p]=t+"px",B.set(e,s)},V=[],Pn={},pr,Aa=function(){return $e()-zt>34&&(pr||(pr=requestAnimationFrame(gi)))},C0=function(){(!ot||!ot.isPressed||ot.startX>ee.clientWidth)&&(H.cache++,ot?pr||(pr=requestAnimationFrame(gi)):gi(),zt||n0("scrollStart"),zt=$e())},Sn=function(){Ga=Y.innerWidth,Wa=Y.innerHeight},lr=function(e){H.cache++,(e===!0||!je&&!Xa&&!se.fullscreenElement&&!se.webkitFullscreenElement&&(!Mn||Ga!==Y.innerWidth||Math.abs(Y.innerHeight-Wa)>Y.innerHeight*.25))&&ls.restart(!0)},s0={},Oc=[],e1=function o(){return Pe(q,"scrollEnd",o)||Zi(!0)},n0=function(e){return s0[e]&&s0[e].map(function(t){return t()})||Oc},Tt=[],t1=function(e){for(var t=0;t<Tt.length;t+=5)(!e||Tt[t+4]&&Tt[t+4].query===e)&&(Tt[t].style.cssText=Tt[t+1],Tt[t].getBBox&&Tt[t].setAttribute("transform",Tt[t+2]||""),Tt[t+3].uncache=1)},Vn=function(e,t){var i;for(at=0;at<V.length;at++)i=V[at],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));cs=!0,t&&t1(t),t||n0("revert")},i1=function(e,t){H.cache++,(t||!lt)&&H.forEach(function(i){return Je(i)&&i.cacheID++&&(i.rec=0)}),St(e)&&(Y.history.scrollRestoration=Dn=e)},lt,i0=0,Oa,Dc=function(){if(Oa!==i0){var e=Oa=i0;requestAnimationFrame(function(){return e===i0&&Zi(!0)})}},r1=function(){ee.appendChild(M0),Rn=!ot&&M0.offsetHeight||Y.innerHeight,ee.removeChild(M0)},Da=function(e){return mr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zi=function(e,t){if(Ct=se.documentElement,ee=se.body,On=[Y,se,Ct,ee],zt&&!e&&!cs){ze(q,"scrollEnd",e1);return}r1(),lt=q.isRefreshing=!0,H.forEach(function(r){return Je(r)&&++r.cacheID&&(r.rec=r())});var i=n0("refreshInit");Ya&&q.sort(),t||Vn(),H.forEach(function(r){Je(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),V.slice(0).forEach(function(r){return r.refresh()}),cs=!1,V.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",n=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-n),r.refresh()}}),Bn=1,Da(!0),V.forEach(function(r){var s=Kt(r.scroller,r._dir),n=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(n||a)&&r.setPositions(a?s-1:r.start,n?Math.max(a?s:r.start+1,s):r.end,!0)}),Da(!1),Bn=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),H.forEach(function(r){Je(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),i1(Dn,1),ls.pause(),i0++,lt=2,gi(2),V.forEach(function(r){return Je(r.vars.onRefresh)&&r.vars.onRefresh(r)}),lt=q.isRefreshing=!1,n0("refresh")},zn=0,ns=1,gr,gi=function(e){if(e===2||!lt&&!cs){q.isUpdating=!0,gr&&gr.update(0);var t=V.length,i=$e(),r=i-kn>=50,s=t&&V[0].scroll();if(ns=zn>s?-1:1,lt||(zn=s),r&&(zt&&!hs&&i-zt>200&&(zt=0,n0("scrollEnd")),sr=kn,kn=i),ns<0){for(at=t;at-- >0;)V[at]&&V[at].update(0,r);ns=1}else for(at=0;at<t;at++)V[at]&&V[at].update(0,r);q.isUpdating=!1}pr=0},An=[Qa,Ka,Nn,Fn,Bt+fr,Bt+dr,Bt+hr,Bt+ur,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],os=An.concat([e0,t0,"boxSizing","max"+B0,"max"+qn,"position",Bt,Ce,Ce+hr,Ce+dr,Ce+fr,Ce+ur]),Rc=function(e,t,i){I0(i);var r=e._gsap;if(r.spacerIsNative)I0(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Cn=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=An.length,n=t.style,a=e.style,l;s--;)l=An[s],n[l]=i[l];n.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(n.display="inline-block"),a[Nn]=a[Fn]="auto",n.flexBasis=i.flexBasis||"auto",n.overflow="visible",n.boxSizing="border-box",n[e0]=ds(e,Ue)+Me,n[t0]=ds(e,Se)+Me,n[Ce]=a[Bt]=a[Ka]=a[Qa]="0",I0(r),a[e0]=a["max"+B0]=i[e0],a[t0]=a["max"+qn]=i[t0],a[Ce]=i[Ce],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Fc=/([A-Z])/g,I0=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,n;for((e.t._gsap||B.core.getCache(e.t)).uncache=1;r<i;r+=2)n=e[r+1],s=e[r],n?t[s]=n:t[s]&&t.removeProperty(s.replace(Fc,"-$1").toLowerCase())}},es=function(e){for(var t=os.length,i=e.style,r=[],s=0;s<t;s++)r.push(os[s],i[os[s]]);return r.t=e,r},Nc=function(e,t,i){for(var r=[],s=e.length,n=i?8:0,a;n<s;n+=2)a=e[n],r.push(a,a in t?t[a]:e[n+1]);return r.t=e.t,r},as={left:0,top:0},Ra=function(e,t,i,r,s,n,a,l,c,d,f,g,u,m){Je(e)&&(e=e(l)),St(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?rs("0"+e.substr(3),i):0));var h=u?u.time():0,_,x,b;if(u&&u.seek(0),isNaN(e)||(e=+e),ar(e))u&&(e=B.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),a&&ss(a,i,r,!0);else{Je(t)&&(t=t(l));var T=(e||"0").split(" "),w,k,C,y;b=nt(t,l)||ee,w=fi(b)||{},(!w||!w.left&&!w.top)&&Pt(b).display==="none"&&(y=b.style.display,b.style.display="block",w=fi(b),y?b.style.display=y:b.style.removeProperty("display")),k=rs(T[0],w[r.d]),C=rs(T[1]||"0",i),e=w[r.p]-c[r.p]-d+k+s-C,a&&ss(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(m&&(l[m]=e||-.001,e<0&&(e=0)),n){var E=e+i,S=n._isStart;_="scroll"+r.d2,ss(n,E,r,S&&E>20||!S&&(f?Math.max(ee[_],Ct[_]):n.parentNode[_])<=E+1),f&&(c=fi(a),f&&(n.style[r.op.p]=c[r.op.p]-r.op.m-n._offset+Me))}return u&&b&&(_=fi(b),u.seek(g),x=fi(b),u._caScrollDist=_[r.p]-x[r.p],e=e/u._caScrollDist*g),u&&u.seek(h),u?e:Math.round(e)},qc=/(webkit|moz|length|cssText|inset)/i,Fa=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,n,a;if(t===ee){e._stOrig=s.cssText,a=Pt(e);for(n in a)!+n&&!qc.test(n)&&a[n]&&typeof s[n]=="string"&&n!=="0"&&(s[n]=a[n]);s.top=i,s.left=r}else s.cssText=e._stOrig;B.core.getCache(e).uncache=1,t.appendChild(e)}},s1=function(e,t,i){var r=t,s=r;return function(n){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(n=a,i&&i()),s=r,r=Math.round(n),r}},ts=function(e,t,i){var r={};r[t.p]="+="+i,B.set(e,r)},Na=function(e,t){var i=ui(e,t),r="_scroll"+t.p2,s=function n(a,l,c,d,f){var g=n.tween,u=l.onComplete,m={};c=c||i();var h=s1(i,c,function(){g.kill(),n.tween=0});return f=d&&f||0,d=d||a-c,g&&g.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return h(c+d*g.ratio+f*g.ratio*g.ratio)},l.onUpdate=function(){H.cache++,n.tween&&gi()},l.onComplete=function(){n.tween=0,u&&u.call(g)},g=n.tween=B.to(e,l),g};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ze(e,"wheel",i.wheelHandler),q.isTouch&&ze(e,"touchmove",i.wheelHandler),s},q=function(){function o(t,i){L0||o.register(B)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),In(this),this.init(t,i)}var e=o.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nr){this.update=this.refresh=this.kill=Qt;return}i=Pa(St(i)||ar(i)||i.nodeType?{trigger:i}:i,Kr);var s=i,n=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,d=s.onRefresh,f=s.scrub,g=s.trigger,u=s.pin,m=s.pinSpacing,h=s.invalidateOnRefresh,_=s.anticipatePin,x=s.onScrubComplete,b=s.onSnapComplete,T=s.once,w=s.snap,k=s.pinReparent,C=s.pinSpacer,y=s.containerAnimation,E=s.fastScrollEnd,S=s.preventOverlaps,L=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ue:Se,D=!f&&f!==0,M=nt(i.scroller||Y),G=B.core.getCache(M),X=r0(M),J=("pinType"in i?i.pinType:hi(M,"pinType")||X&&"fixed")==="fixed",U=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],A=D&&i.toggleActions.split(" "),K="markers"in i?i.markers:Kr.markers,ne=X?0:parseFloat(Pt(M)["border"+L.p2+B0])||0,p=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(p)},Qe=Ic(M,X,L),At=Bc(M,X),he=0,Ae=0,Ke=0,xe=ui(M,L),Ze,He,pi,et,ct,Q,_e,dt,pt,v,_t,Zt,_i,ve,ei,vi,Ai,Ie,wi,we,Ot,Lt,ti,P0,ke,vr,ii,l0,c0,yi,Oi,W,Di,Dt,Rt,Ft,Ri,d0,ri;if(p._startClamp=p._endClamp=!1,p._dir=L,_*=45,p.scroller=M,p.scroll=y?y.time.bind(y):xe,et=xe(),p.vars=i,r=r||i.animation,"refreshPriority"in i&&(Ya=1,i.refreshPriority===-9999&&(gr=p)),G.tweenScroll=G.tweenScroll||{top:Na(M,Se),left:Na(M,Ue)},p.tweenTo=Ze=G.tweenScroll[L.p],p.scrubDuration=function(I){Di=ar(I)&&I,Di?W?W.duration(I):W=B.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Di,paused:!0,onComplete:function(){return x&&x(p)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!p.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),p.animation=r.pause(),r.scrollTrigger=p,p.scrubDuration(f),yi=0,l||(l=r.vars.id)),w&&((!Ki(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ee.style&&B.set(X?[ee,Ct]:M,{scrollBehavior:"auto"}),H.forEach(function(I){return Je(I)&&I.target===(X?se.scrollingElement||Ct:M)&&(I.smooth=!1)}),pi=Je(w.snapTo)?w.snapTo:w.snapTo==="labels"?zc(r):w.snapTo==="labelsDirectional"?Ac(r):w.directional!==!1?function(I,R){return Hn(w.snapTo)(I,$e()-Ae<500?0:R.direction)}:B.utils.snap(w.snapTo),Dt=w.duration||{min:.1,max:2},Dt=Ki(Dt)?cr(Dt.min,Dt.max):cr(Dt,Dt),Rt=B.delayedCall(w.delay||Di/2||.1,function(){var I=xe(),R=$e()-Ae<500,P=Ze.tween;if((R||Math.abs(p.getVelocity())<10)&&!P&&!hs&&he!==I){var F=(I-Q)/ve,Be=r&&!D?r.totalProgress():F,j=R?0:(Be-Oi)/($e()-sr)*1e3||0,ye=B.utils.clamp(-F,1-F,S0(j/2)*j/.185),Ve=F+(w.inertia===!1?0:ye),fe,ae,te=w,Nt=te.onStart,ce=te.onInterrupt,vt=te.onComplete;if(fe=pi(Ve,p),ar(fe)||(fe=Ve),ae=Math.max(0,Math.round(Q+fe*ve)),I<=_e&&I>=Q&&ae!==I){if(P&&!P._initted&&P.data<=S0(ae-I))return;w.inertia===!1&&(ye=fe-F),Ze(ae,{duration:Dt(S0(Math.max(S0(Ve-Be),S0(fe-Be))*.185/j/.05||0)),ease:w.ease||"power3",data:S0(ae-I),onInterrupt:function(){return Rt.restart(!0)&&ce&&ce(p)},onComplete:function(){p.update(),he=xe(),r&&!D&&(W?W.resetTo("totalProgress",fe,r._tTime/r._tDur):r.progress(fe)),yi=Oi=r&&!D?r.totalProgress():p.progress,b&&b(p),vt&&vt(p)}},I,ye*ve,ae-I-ye*ve),Nt&&Nt(p,Ze.tween)}}else p.isActive&&he!==I&&Rt.restart(!0)}).pause()),l&&(Pn[l]=p),g=p.trigger=nt(g||u!==!0&&u),ri=g&&g._gsap&&g._gsap.stRevert,ri&&(ri=ri(p)),u=u===!0?g:nt(u),St(a)&&(a={targets:g,className:a}),u&&(m===!1||m===Bt||(m=!m&&u.parentNode&&u.parentNode.style&&Pt(u.parentNode).display==="flex"?!1:Ce),p.pin=u,He=B.core.getCache(u),He.spacer?ei=He.pinState:(C&&(C=nt(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),He.spacerIsNative=!!C,C&&(He.spacerState=es(C))),He.spacer=Ie=C||se.createElement("div"),Ie.classList.add("pin-spacer"),l&&Ie.classList.add("pin-spacer-"+l),He.pinState=ei=es(u)),i.force3D!==!1&&B.set(u,{force3D:!0}),p.spacer=Ie=He.spacer,c0=Pt(u),P0=c0[m+L.os2],we=B.getProperty(u),Ot=B.quickSetter(u,L.a,Me),Cn(u,Ie,c0),Ai=es(u)),K){Zt=Ki(K)?Pa(K,za):za,v=Zr("scroller-start",l,M,L,Zt,0),_t=Zr("scroller-end",l,M,L,Zt,0,v),wi=v["offset"+L.op.d2];var z0=nt(hi(M,"content")||M);dt=this.markerStart=Zr("start",l,z0,L,Zt,wi,0,y),pt=this.markerEnd=Zr("end",l,z0,L,Zt,wi,0,y),y&&(d0=B.quickSetter([dt,pt],L.a,Me)),!J&&!(Ht.length&&hi(M,"fixedMarkers")===!0)&&(Pc(X?ee:M),B.set([v,_t],{force3D:!0}),vr=B.quickSetter(v,L.a,Me),l0=B.quickSetter(_t,L.a,Me))}if(y){var N=y.vars.onUpdate,z=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){p.update(0,0,1),N&&N.apply(y,z||[])})}if(p.previous=function(){return V[V.indexOf(p)-1]},p.next=function(){return V[V.indexOf(p)+1]},p.revert=function(I,R){if(!R)return p.kill(!0);var P=I!==!1||!p.enabled,F=je;P!==p.isReverted&&(P&&(Ft=Math.max(xe(),p.scroll.rec||0),Ke=p.progress,Ri=r&&r.progress()),dt&&[dt,pt,v,_t].forEach(function(Be){return Be.style.display=P?"none":"block"}),P&&(je=p,p.update(P)),u&&(!k||!p.isActive)&&(P?Rc(u,Ie,ei):Cn(u,Ie,Pt(u),ke)),P||p.update(P),je=F,p.isReverted=P)},p.refresh=function(I,R,P,F){if(!((je||!p.enabled)&&!R)){if(u&&I&&zt){ze(o,"scrollEnd",e1);return}!lt&&oe&&oe(p),je=p,Ze.tween&&!P&&(Ze.tween.kill(),Ze.tween=0),W&&W.pause(),h&&r&&r.revert({kill:!1}).invalidate(),p.isReverted||p.revert(!0,!0),p._subPinOffset=!1;var Be=Qe(),j=At(),ye=y?y.duration():Kt(M,L),Ve=ve<=.01,fe=0,ae=F||0,te=Ki(P)?P.end:i.end,Nt=i.endTrigger||g,ce=Ki(P)?P.start:i.start||(i.start===0||!g?0:u?"0 0":"0 100%"),vt=p.pinnedContainer=i.pinnedContainer&&nt(i.pinnedContainer,p),Vt=g&&Math.max(0,V.indexOf(p))||0,Oe=Vt,De,Ye,Fi,wr,Xe,Le,Yt,ys,jn,A0,Xt,O0,yr;for(K&&Ki(P)&&(O0=B.getProperty(v,L.p),yr=B.getProperty(_t,L.p));Oe-- >0;)Le=V[Oe],Le.end||Le.refresh(0,1)||(je=p),Yt=Le.pin,Yt&&(Yt===g||Yt===u||Yt===vt)&&!Le.isReverted&&(A0||(A0=[]),A0.unshift(Le),Le.revert(!0,!0)),Le!==V[Oe]&&(Vt--,Oe--);for(Je(ce)&&(ce=ce(p)),ce=Ea(ce,"start",p),Q=Ra(ce,g,Be,L,xe(),dt,v,p,j,ne,J,ye,y,p._startClamp&&"_startClamp")||(u?-.001:0),Je(te)&&(te=te(p)),St(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(St(ce)?ce.split(" ")[0]:"")+te:(fe=rs(te.substr(2),Be),te=St(ce)?ce:(y?B.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,Q):Q)+fe,Nt=g)),te=Ea(te,"end",p),_e=Math.max(Q,Ra(te||(Nt?"100% 0":ye),Nt,Be,L,xe()+fe,pt,_t,p,j,ne,J,ye,y,p._endClamp&&"_endClamp"))||-.001,fe=0,Oe=Vt;Oe--;)Le=V[Oe],Yt=Le.pin,Yt&&Le.start-Le._pinPush<=Q&&!y&&Le.end>0&&(De=Le.end-(p._startClamp?Math.max(0,Le.start):Le.start),(Yt===g&&Le.start-Le._pinPush<Q||Yt===vt)&&isNaN(ce)&&(fe+=De*(1-Le.progress)),Yt===u&&(ae+=De));if(Q+=fe,_e+=fe,p._startClamp&&(p._startClamp+=fe),p._endClamp&&!lt&&(p._endClamp=_e||-.001,_e=Math.min(_e,Kt(M,L))),ve=_e-Q||(Q-=.01)&&.001,Ve&&(Ke=B.utils.clamp(0,1,B.utils.normalize(Q,_e,Ft))),p._pinPush=ae,dt&&fe&&(De={},De[L.a]="+="+fe,vt&&(De[L.p]="-="+xe()),B.set([dt,pt],De)),u&&!(Bn&&p.end>=Kt(M,L)))De=Pt(u),wr=L===Se,Fi=xe(),Lt=parseFloat(we(L.a))+ae,!ye&&_e>1&&(Xt=(X?se.scrollingElement||Ct:M).style,Xt={style:Xt,value:Xt["overflow"+L.a.toUpperCase()]},X&&Pt(ee)["overflow"+L.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+L.a.toUpperCase()]="scroll")),Cn(u,Ie,De),Ai=es(u),Ye=fi(u,!0),ys=J&&ui(M,wr?Ue:Se)(),m?(ke=[m+L.os2,ve+ae+Me],ke.t=Ie,Oe=m===Ce?ds(u,L)+ve+ae:0,Oe&&(ke.push(L.d,Oe+Me),Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=Oe+Me)),I0(ke),vt&&V.forEach(function(D0){D0.pin===vt&&D0.vars.pinSpacing!==!1&&(D0._subPinOffset=!0)}),J&&xe(Ft)):(Oe=ds(u,L),Oe&&Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=Oe+Me)),J&&(Xe={top:Ye.top+(wr?Fi-Q:ys)+Me,left:Ye.left+(wr?ys:Fi-Q)+Me,boxSizing:"border-box",position:"fixed"},Xe[e0]=Xe["max"+B0]=Math.ceil(Ye.width)+Me,Xe[t0]=Xe["max"+qn]=Math.ceil(Ye.height)+Me,Xe[Bt]=Xe[Bt+hr]=Xe[Bt+dr]=Xe[Bt+fr]=Xe[Bt+ur]="0",Xe[Ce]=De[Ce],Xe[Ce+hr]=De[Ce+hr],Xe[Ce+dr]=De[Ce+dr],Xe[Ce+fr]=De[Ce+fr],Xe[Ce+ur]=De[Ce+ur],vi=Nc(ei,Xe,k),lt&&xe(0)),r?(jn=r._initted,bn(1),r.render(r.duration(),!0,!0),ti=we(L.a)-Lt+ve+ae,ii=Math.abs(ve-ti)>1,J&&ii&&vi.splice(vi.length-2,2),r.render(0,!0,!0),jn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),bn(0)):ti=ve,Xt&&(Xt.value?Xt.style["overflow"+L.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+L.a));else if(g&&xe()&&!y)for(Ye=g.parentNode;Ye&&Ye!==ee;)Ye._pinOffset&&(Q-=Ye._pinOffset,_e-=Ye._pinOffset),Ye=Ye.parentNode;A0&&A0.forEach(function(D0){return D0.revert(!1,!0)}),p.start=Q,p.end=_e,et=ct=lt?Ft:xe(),!y&&!lt&&(et<Ft&&xe(Ft),p.scroll.rec=0),p.revert(!1,!0),Ae=$e(),Rt&&(he=-1,Rt.restart(!0)),je=0,r&&D&&(r._initted||Ri)&&r.progress()!==Ri&&r.progress(Ri||0,!0).render(r.time(),!0,!0),(Ve||Ke!==p.progress||y||h||r&&!r._initted)&&(r&&!D&&r.totalProgress(y&&Q<-.001&&!Ke?B.utils.normalize(Q,_e,0):Ke,!0),p.progress=Ve||(et-Q)/ve===Ke?0:Ke),u&&m&&(Ie._pinOffset=Math.round(p.progress*ti)),W&&W.invalidate(),isNaN(O0)||(O0-=B.getProperty(v,L.p),yr-=B.getProperty(_t,L.p),ts(v,L,O0),ts(dt,L,O0-(F||0)),ts(_t,L,yr),ts(pt,L,yr-(F||0))),Ve&&!lt&&p.update(),d&&!lt&&!_i&&(_i=!0,d(p),_i=!1)}},p.getVelocity=function(){return(xe()-ct)/($e()-sr)*1e3||0},p.endAnimation=function(){rr(p.callbackAnimation),r&&(W?W.progress(1):r.paused()?D||rr(r,p.direction<0,1):rr(r,r.reversed()))},p.labelToScroll=function(I){return r&&r.labels&&(Q||p.refresh()||Q)+r.labels[I]/r.duration()*ve||0},p.getTrailing=function(I){var R=V.indexOf(p),P=p.direction>0?V.slice(0,R).reverse():V.slice(R+1);return(St(I)?P.filter(function(F){return F.vars.preventOverlaps===I}):P).filter(function(F){return p.direction>0?F.end<=Q:F.start>=_e})},p.update=function(I,R,P){if(!(y&&!P&&!I)){var F=lt===!0?Ft:p.scroll(),Be=I?0:(F-Q)/ve,j=Be<0?0:Be>1?1:Be||0,ye=p.progress,Ve,fe,ae,te,Nt,ce,vt,Vt;if(R&&(ct=et,et=y?xe():F,w&&(Oi=yi,yi=r&&!D?r.totalProgress():j)),_&&u&&!je&&!jr&&zt&&(!j&&Q<F+(F-ct)/($e()-sr)*_?j=1e-4:j===1&&_e>F+(F-ct)/($e()-sr)*_&&(j=.9999)),j!==ye&&p.enabled){if(Ve=p.isActive=!!j&&j<1,fe=!!ye&&ye<1,ce=Ve!==fe,Nt=ce||!!j!=!!ye,p.direction=j>ye?1:-1,p.progress=j,Nt&&!je&&(ae=j&&!ye?0:j===1?1:ye===1?2:3,D&&(te=!ce&&A[ae+1]!=="none"&&A[ae+1]||A[ae],Vt=r&&(te==="complete"||te==="reset"||te in r))),S&&(ce||Vt)&&(Vt||f||!r)&&(Je(S)?S(p):p.getTrailing(S).forEach(function(Fi){return Fi.endAnimation()})),D||(W&&!je&&!jr?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",j,r._tTime/r._tDur):(W.vars.totalProgress=j,W.invalidate().restart())):r&&r.totalProgress(j,!!(je&&(Ae||I)))),u){if(I&&m&&(Ie.style[m+L.os2]=P0),!J)Ot(or(Lt+ti*j));else if(Nt){if(vt=!I&&j>ye&&_e+1>F&&F+1>=Kt(M,L),k)if(!I&&(Ve||vt)){var Oe=fi(u,!0),De=F-Q;Fa(u,ee,Oe.top+(L===Se?De:0)+Me,Oe.left+(L===Se?0:De)+Me)}else Fa(u,Ie);I0(Ve||vt?vi:Ai),ii&&j<1&&Ve||Ot(Lt+(j===1&&!vt?ti:0))}}w&&!Ze.tween&&!je&&!jr&&Rt.restart(!0),a&&(ce||T&&j&&(j<1||!xn))&&mr(a.targets).forEach(function(Fi){return Fi.classList[Ve||T?"add":"remove"](a.className)}),n&&!D&&!I&&n(p),Nt&&!je?(D&&(Vt&&(te==="complete"?r.pause().totalProgress(1):te==="reset"?r.restart(!0).pause():te==="restart"?r.restart(!0):r[te]()),n&&n(p)),(ce||!xn)&&(c&&ce&&Tn(p,c),U[ae]&&Tn(p,U[ae]),T&&(j===1?p.kill(!1,1):U[ae]=0),ce||(ae=j===1?1:3,U[ae]&&Tn(p,U[ae]))),E&&!Ve&&Math.abs(p.getVelocity())>(ar(E)?E:2500)&&(rr(p.callbackAnimation),W?W.progress(1):rr(r,te==="reverse"?1:!j,1))):D&&n&&!je&&n(p)}if(l0){var Ye=y?F/y.duration()*(y._caScrollDist||0):F;vr(Ye+(v._isFlipped?1:0)),l0(Ye)}d0&&d0(-F/y.duration()*(y._caScrollDist||0))}},p.enable=function(I,R){p.enabled||(p.enabled=!0,ze(M,"resize",lr),X||ze(M,"scroll",C0),oe&&ze(o,"refreshInit",oe),I!==!1&&(p.progress=Ke=0,et=ct=he=xe()),R!==!1&&p.refresh())},p.getTween=function(I){return I&&Ze?Ze.tween:W},p.setPositions=function(I,R,P,F){if(y){var Be=y.scrollTrigger,j=y.duration(),ye=Be.end-Be.start;I=Be.start+ye*I/j,R=Be.start+ye*R/j}p.refresh(!1,!1,{start:Ma(I,P&&!!p._startClamp),end:Ma(R,P&&!!p._endClamp)},F),p.update()},p.adjustPinSpacing=function(I){if(ke&&I){var R=ke.indexOf(L.d)+1;ke[R]=parseFloat(ke[R])+I+Me,ke[1]=parseFloat(ke[1])+I+Me,I0(ke)}},p.disable=function(I,R){if(p.enabled&&(I!==!1&&p.revert(!0,!0),p.enabled=p.isActive=!1,R||W&&W.pause(),Ft=0,He&&(He.uncache=1),oe&&Pe(o,"refreshInit",oe),Rt&&(Rt.pause(),Ze.tween&&Ze.tween.kill()&&(Ze.tween=0)),!X)){for(var P=V.length;P--;)if(V[P].scroller===M&&V[P]!==p)return;Pe(M,"resize",lr),X||Pe(M,"scroll",C0)}},p.kill=function(I,R){p.disable(I,R),W&&!R&&W.kill(),l&&delete Pn[l];var P=V.indexOf(p);P>=0&&V.splice(P,1),P===at&&ns>0&&at--,P=0,V.forEach(function(F){return F.scroller===p.scroller&&(P=1)}),P||lt||(p.scroll.rec=0),r&&(r.scrollTrigger=null,I&&r.revert({kill:!1}),R||r.kill()),dt&&[dt,pt,v,_t].forEach(function(F){return F.parentNode&&F.parentNode.removeChild(F)}),gr===p&&(gr=0),u&&(He&&(He.uncache=1),P=0,V.forEach(function(F){return F.pin===u&&P++}),P||(He.spacer=0)),i.onKill&&i.onKill(p)},V.push(p),p.enable(!1,!1),ri&&ri(p),r&&r.add&&!ve){var Z=p.update;p.update=function(){p.update=Z,H.cache++,Q||_e||p.refresh()},B.delayedCall(.01,p.update),ve=.01,Q=_e=0}else p.refresh();u&&Dc()},o.register=function(i){return L0||(B=i||ja(),Ua()&&window.document&&o.enable(),L0=nr),L0},o.defaults=function(i){if(i)for(var r in i)Kr[r]=i[r];return Kr},o.disable=function(i,r){nr=0,V.forEach(function(n){return n[r?"kill":"disable"](i)}),Pe(Y,"wheel",C0),Pe(se,"scroll",C0),clearInterval(Ur),Pe(se,"touchcancel",Qt),Pe(ee,"touchstart",Qt),Jr(Pe,se,"pointerdown,touchstart,mousedown",Ia),Jr(Pe,se,"pointerup,touchend,mouseup",Ba),ls.kill(),$r(Pe);for(var s=0;s<H.length;s+=3)Qr(Pe,H[s],H[s+1]),Qr(Pe,H[s],H[s+2])},o.enable=function(){if(Y=window,se=document,Ct=se.documentElement,ee=se.body,B&&(mr=B.utils.toArray,cr=B.utils.clamp,In=B.core.context||Qt,bn=B.core.suppressOverwrites||Qt,Dn=Y.history.scrollRestoration||"auto",zn=Y.pageYOffset||0,B.core.globals("ScrollTrigger",o),ee)){nr=1,M0=document.createElement("div"),M0.style.height="100vh",M0.style.position="absolute",r1(),Mc(),pe.register(B),o.isTouch=pe.isTouch,Pi=pe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mn=pe.isTouch===1,ze(Y,"wheel",C0),On=[Y,se,Ct,ee],B.matchMedia?(o.matchMedia=function(c){var d=B.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},B.addEventListener("matchMediaInit",function(){return Vn()}),B.addEventListener("matchMediaRevert",function(){return t1()}),B.addEventListener("matchMedia",function(){Zi(0,1),n0("matchMedia")}),B.matchMedia().add("(orientation: portrait)",function(){return Sn(),Sn})):console.warn("Requires GSAP 3.11.0 or later"),Sn(),ze(se,"scroll",C0);var i=ee.hasAttribute("style"),r=ee.style,s=r.borderTopStyle,n=B.core.Animation.prototype,a,l;for(n.revert||Object.defineProperty(n,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=fi(ee),Se.m=Math.round(a.top+Se.sc())||0,Ue.m=Math.round(a.left+Ue.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(ee.setAttribute("style",""),ee.removeAttribute("style")),Ur=setInterval(Aa,250),B.delayedCall(.5,function(){return jr=0}),ze(se,"touchcancel",Qt),ze(ee,"touchstart",Qt),Jr(ze,se,"pointerdown,touchstart,mousedown",Ia),Jr(ze,se,"pointerup,touchend,mouseup",Ba),En=B.utils.checkPrefix("transform"),os.push(En),L0=$e(),ls=B.delayedCall(.2,Zi).pause(),E0=[se,"visibilitychange",function(){var c=Y.innerWidth,d=Y.innerHeight;se.hidden?(Ca=c,La=d):(Ca!==c||La!==d)&&lr()},se,"DOMContentLoaded",Zi,Y,"load",Zi,Y,"resize",lr],$r(ze),V.forEach(function(c){return c.enable(0,1)}),l=0;l<H.length;l+=3)Qr(Pe,H[l],H[l+1]),Qr(Pe,H[l],H[l+2])}},o.config=function(i){"limitCallbacks"in i&&(xn=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ur)||(Ur=r)&&setInterval(Aa,r),"ignoreMobileResize"in i&&(Mn=o.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&($r(Pe)||$r(ze,i.autoRefreshEvents||"none"),Xa=(i.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(i,r){var s=nt(i),n=H.indexOf(s),a=r0(s);~n&&H.splice(n,a?6:2),r&&(a?Ht.unshift(Y,r,ee,r,Ct,r):Ht.unshift(s,r))},o.clearMatchMedia=function(i){V.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},o.isInViewport=function(i,r,s){var n=(St(i)?nt(i):i).getBoundingClientRect(),a=n[s?e0:t0]*r||0;return s?n.right-a>0&&n.left+a<Y.innerWidth:n.bottom-a>0&&n.top+a<Y.innerHeight},o.positionInViewport=function(i,r,s){St(i)&&(i=nt(i));var n=i.getBoundingClientRect(),a=n[s?e0:t0],l=r==null?a/2:r in us?us[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(n.left+l)/Y.innerWidth:(n.top+l)/Y.innerHeight},o.killAll=function(i){if(V.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=s0.killAll||[];s0={},r.forEach(function(s){return s()})}},o}();q.version="3.12.7";q.saveStyles=function(o){return o?mr(o).forEach(function(e){if(e&&e.style){var t=Tt.indexOf(e);t>=0&&Tt.splice(t,5),Tt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),B.core.getCache(e),In())}}):Tt};q.revert=function(o,e){return Vn(!o,e)};q.create=function(o,e){return new q(o,e)};q.refresh=function(o){return o?lr(!0):(L0||q.register())&&Zi(!0)};q.update=function(o){return++H.cache&&gi(o===!0?2:0)};q.clearScrollMemory=i1;q.maxScroll=function(o,e){return Kt(o,e?Ue:Se)};q.getScrollFunc=function(o,e){return ui(nt(o),e?Ue:Se)};q.getById=function(o){return Pn[o]};q.getAll=function(){return V.filter(function(o){return o.vars.id!=="ScrollSmoother"})};q.isScrolling=function(){return!!zt};q.snapDirectional=Hn;q.addEventListener=function(o,e){var t=s0[o]||(s0[o]=[]);~t.indexOf(e)||t.push(e)};q.removeEventListener=function(o,e){var t=s0[o],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};q.batch=function(o,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,n=function(c,d){var f=[],g=[],u=B.delayedCall(r,function(){d(f,g),f=[],g=[]}).pause();return function(m){f.length||u.restart(!0),f.push(m.trigger),g.push(m),s<=f.length&&u.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Je(e[a])&&a!=="onRefreshInit"?n(a,e[a]):e[a];return Je(s)&&(s=s(),ze(q,"refresh",function(){return s=e.batchMax()})),mr(o).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(q.create(c))}),t};var qa=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ln=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(pe.isTouch?" pinch-zoom":""):"none",e===Ct&&o(ee,t)},is={auto:1,scroll:1},Hc=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,n=s._gsap||B.core.getCache(s),a=$e(),l;if(!n._isScrollT||a-n._isScrollT>2e3){for(;s&&s!==ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(is[(l=Pt(s)).overflowY]||is[l.overflowX]));)s=s.parentNode;n._isScroll=s&&s!==i&&!r0(s)&&(is[(l=Pt(s)).overflowY]||is[l.overflowX]),n._isScrollT=a}(n._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},n1=function(e,t,i,r){return pe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Hc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&ze(se,pe.eventTypes[0],Va,!1,!0)},onDisable:function(){return Pe(se,pe.eventTypes[0],Va,!0)}})},Vc=/(input|label|select|textarea)/i,Ha,Va=function(e){var t=Vc.test(e.target.tagName);(t||Ha)&&(e._gsapAllow=!0,Ha=t)},Yc=function(e){Ki(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,n=t.onRelease,a,l,c=nt(e.target)||Ct,d=B.core.globals().ScrollSmoother,f=d&&d.get(),g=Pi&&(e.content&&nt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=ui(c,Se),m=ui(c,Ue),h=1,_=(pe.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,x=0,b=Je(r)?function(){return r(a)}:function(){return r||2.8},T,w,k=n1(c,e.type,!0,s),C=function(){return w=!1},y=Qt,E=Qt,S=function(){l=Kt(c,Se),E=cr(Pi?1:0,l),i&&(y=cr(0,Kt(c,Ue))),T=i0},L=function(){g._gsap.y=or(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(w){requestAnimationFrame(C);var K=or(a.deltaY/2),ne=E(u.v-K);if(g&&ne!==u.v+u.offset){u.offset=ne-u.v;var p=or((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+p+", 0, 1)",g._gsap.y=p+"px",u.cacheID=H.cache,gi()}return!0}u.offset&&L(),w=!0},M,G,X,J,U=function(){S(),M.isActive()&&M.vars.scrollY>l&&(u()>l?M.progress(1)&&u(l):M.resetTo("scrollY",l))};return g&&B.set(g,{y:"+=0"}),e.ignoreCheck=function(A){return Pi&&A.type==="touchmove"&&D(A)||h>1.05&&A.type!=="touchstart"||a.isGesturing||A.touches&&A.touches.length>1},e.onPress=function(){w=!1;var A=h;h=or((Y.visualViewport&&Y.visualViewport.scale||1)/_),M.pause(),A!==h&&Ln(c,h>1.01?!0:i?!1:"x"),G=m(),X=u(),S(),T=i0},e.onRelease=e.onGestureStart=function(A,K){if(u.offset&&L(),!K)J.restart(!0);else{H.cache++;var ne=b(),p,oe;i&&(p=m(),oe=p+ne*.05*-A.velocityX/.227,ne*=qa(m,p,oe,Kt(c,Ue)),M.vars.scrollX=y(oe)),p=u(),oe=p+ne*.05*-A.velocityY/.227,ne*=qa(u,p,oe,Kt(c,Se)),M.vars.scrollY=E(oe),M.invalidate().duration(ne).play(.01),(Pi&&M.vars.scrollY>=l||p>=l-1)&&B.to({},{onUpdate:U,duration:ne})}n&&n(A)},e.onWheel=function(){M._ts&&M.pause(),$e()-x>1e3&&(T=0,x=$e())},e.onChange=function(A,K,ne,p,oe){if(i0!==T&&S(),K&&i&&m(y(p[2]===K?G+(A.startX-A.x):m()+K-p[1])),ne){u.offset&&L();var Qe=oe[2]===ne,At=Qe?X+A.startY-A.y:u()+ne-oe[1],he=E(At);Qe&&At!==he&&(X+=he-At),u(he)}(ne||K)&&gi()},e.onEnable=function(){Ln(c,i?!1:"x"),q.addEventListener("refresh",U),ze(Y,"resize",U),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),k.enable()},e.onDisable=function(){Ln(c,!0),Pe(Y,"resize",U),q.removeEventListener("refresh",U),k.kill()},e.lockAxis=e.lockAxis!==!1,a=new pe(e),a.iOS=Pi,Pi&&!u()&&u(1),Pi&&B.ticker.add(Qt),J=a._dc,M=B.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:s1(u,u(),function(){return M.pause()})},onUpdate:gi,onComplete:J.vars.onComplete}),a};q.sort=function(o){if(Je(o))return V.sort(o);var e=Y.pageYOffset||0;return q.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Y.innerHeight}),V.sort(o||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};q.observe=function(o){return new pe(o)};q.normalizeScroll=function(o){if(typeof o>"u")return ot;if(o===!0&&ot)return ot.enable();if(o===!1){ot&&ot.kill(),ot=o;return}var e=o instanceof pe?o:Yc(o);return ot&&ot.target===e.target&&ot.kill(),r0(e.target)&&(ot=e),e};q.core={_getVelocityProp:Gr,_inputObserver:n1,_scrollers:H,_proxies:Ht,bridge:{ss:function(){zt||n0("scrollStart"),zt=$e()},ref:function(){return je}}};ja()&&B.registerPlugin(q);var Xc={threshold:.7},o1=Array.from(document.querySelectorAll(".out-of-question")),a1=document.getElementById("intro-grid-one"),l1=document.getElementById("intro-grid-two"),Wc=document.querySelector(".tiny-boy"),Gc=document.querySelectorAll(".sad-child"),fs=new IntersectionObserver((o,e)=>{o.forEach(t=>{if(console.log(t.target.classlist),t.isIntersecting)t.isIntersecting&&o1.forEach((i,r)=>{r===0&&setTimeout(()=>{i.classList.remove("out-of-question")},500),r===1&&(setTimeout(()=>{i.classList.remove("out-of-question")},1e3),setTimeout(()=>{i.classList.add("upn-out-of-question")},1750)),r===2&&(setTimeout(()=>{i.classList.remove("out-of-question")},1750),setTimeout(()=>{i.classList.add("upn-out-of-question")},2500),setTimeout(()=>{o1[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{a1.classList.add("get-up"),l1.classList.add("get-down")},3500),setTimeout(()=>{a1.remove(),l1.remove(),Wc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Gc.forEach(s=>{s.classList.remove("sad-child")})},4500),setTimeout(()=>{$n("class","balloon-ball","add","in-wind")},5e3))});else return})},Xc);var c1=document.getElementById("brianSecondPageBox"),Uc=document.getElementById("brianSecondChair"),jc={threshold:.4},gs=new IntersectionObserver((o,e)=>{o.forEach(t=>{if(console.log(t.target.classlist),t.isIntersecting)t.isIntersecting&&(c1.classList.remove("unseen"),Uc.classList.add("slide-chair-in"),c1.classList.add("brianUp"));else return})},jc);var $c={threshold:.7},K3=Array.from(document.querySelectorAll("iframe")),Z3=document.querySelector(".marketing--pitch-box"),ms=new IntersectionObserver((o,e)=>{o.forEach(t=>{if(console.log("func"),t.isIntersecting)t.isIntersecting&&console.log("here");else return})},$c);var Jc={threshold:.6},id=document.getElementById("websiteVideo"),rd=new IntersectionObserver((o,e)=>{o.forEach(t=>{if(console.log(t.target.classlist),t.isIntersecting){if(t.isIntersecting)switch(wt("load"),console.log(t.target," io"),t.target.scrollIntoView({behavior:"smooth",block:"end"}),t.target.id){case"gridHeader":wt(0);break;case"wpp__concept":wt(19);break;case"wpp__copy":wt(39);break;case"wpp__design":wt(59);break;case"wpp__creation":wt(79);break}}else return})},Jc);var zi=document.getElementById("homeMonitor"),ld=document.getElementById("mob_fl_arrow"),cd=document.querySelector(".back--drop");var dd=document.querySelectorAll("iframe"),d1=o=>{if(o==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(o.target),o.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{zi.innerHTML=`
      <div class="hm--title">
      <h1 class="words-header long--title">Time To Up Your Web Presence?</h1>
    </div>
    <div class="hm--display">
      <h3 class="handy under">
        <i>
          Unsure of how to make your mark on the internet? Let's talk
          about...
        </i>
      </h3>

      <ol>
        <h2>Websites!</h2>
        <li>
          Designing and building your unique and engaging space on the
          internet!
        </li>
        <li>
          Managing your website content keeping your online presence
          current and crisp!
        </li>

        <li>Consulting on improvements including SEO and bounce rate!</li>

        <li>
          Wix, SquareSpace, and WordPress customization & content
          management!
        </li>
        <h2>Multimedia</h2>
        <li>Video Editing</li>
        <li>Motion Graphics</li>
        <li>Photo Animation</li>
        <h2>Marketing Assistance</h2>
        <li>Email Campaigns</li>
        <li>Asset Design</li>
        <li>Social Media</li>
        <!-- <li></li> -->
      </ol>
      <p id="words-para" class="h ind">
        Whether you are an individual, business, or organization, I would
        love to connect about freelance and contract work
        <br />
        <!-- <span class="cta"></span> -->
      </p>


      <h2 class="header">
      Little behind in updating this site but check back soon
    </h2>
    <p>In the meantime, some recent works</p>
    <div class="most--recent-work">
      <div class="webshell">
        <div class="header"><h2>Most Recent Website</h2></div>
        <div class="description">
          I had the pleasure of working with Big Fish Initiative helping
          them with playful motion graphic informative videos, setting
          up a custom CMS, and building there website. This site has a
          couple finishing tweeks being worked out, but you can see it
          live here <br /><br />
          <a href="https://www.bigfishinitiate.com"
            >Big Fish Initiative</a
          >
        </div>
      </div>
      <div class="videoshell">
        <div class="header"><h2>Most Recent Video</h2></div>
        <div class="description">
          I do a lot of work with consulting companies and public
          serving programs. This video was provided to reach the
          client's specific goals using appropriate stock footage and
          subtle animations to keep viewers engaged while still
          maintaining a professional informative message inside of
          program specific brand imagery. You can see it here<br /><br />
          <a href="https://youtu.be/pmd0TpZkMr4">PCG EIHub Project</a>
        </div>
      </div>
    </div>

      <div id="cta" class="cta">Let's Connect!</div>
    </div>
      
      `},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":zi.innerHTML=`
      <div id="m--balloon" class="balloon">
      <!-- sad-child -->
      <div id="m--ball" class="balloon-ball back"></div>
      <div class="balloon-string"></div>
    </div>
    <div class="hm--title">
      <h1 class="words-header">Websites!</h1>
    </div>
    <div class="hm--display">
      <div class="web--ex-container">
        <ul id="web--ex-list">
          <li class="grid2 trans--target transition--cover faded--down">
            <div class="linkOutTo" id="winter"></div>
            <div>
              <h2 class="words-header">
                Winterboy - Motion Based Artist
              </h2>
              <p class="h">
                Working with Winterboy Art I designed a way to use his art
                to capture visitor's attention with a landing page that
                has animated elements made his paintings to make a truly
                personalized touch.
              </p>
            </div>
          </li>

          <li class="grid2 trans--target transition--cover faded--down">
            <div class="linkOutTo" id="mookies"></div>
            <div>
              <h2 class="words-header">
                Mookies - Introduce your shop playfully
              </h2>
              <p class="h">
                We wanted to create a welcoming vibe for Mookies Cafe. I
                did that by having a playful intro and tucking subtle
                details about the site to let it keep that small town
                vibe.
              </p>
            </div>
          </li>
          <li class="grid2 trans--target transition--cover faded--down">
            <div class="linkOutTo" id="masha"></div>
            <div>
              <h2 class="words-header">Masha - Proper Introductions</h2>
              <p class="h">
                I wanted to create a site to bring heads to a stop with
                elegant animation intros to a this model's portfolio site.
              </p>
            </div>
          </li>
          <li class="grid2 trans--target transition--cover faded--down">
            <div class="linkOutTo" id="fugi"></div>
            <div>
              <h2 class="words-header">
                Restaurant - Spreed Sheet Mobile Menu
              </h2>
              <p class="h">
                Does your restaurant, cafe, or bar want a web based menu
                system you can update on a google spreadsheet from your
                phone? This is what it could look like.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
      
      
      
      
      
      
      
      
      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},5);break;case"m--video":zi.innerHTML=`
      <div class="back--drop offset--up trans-target transition--cover">   </div>
      <div id="m--balloon" class="balloon">
      <!-- sad-child -->
      <div id="m--ball" class="balloon-ball back"></div>
      <div class="balloon-string"></div>
    </div>
    <div class="hm--title">
      <h1 class="words-header white">Video</h1>
    </div>
    <div class="hm--display">
      <div class="movie--theater trans-target transition--cover offset--left">
      <div class="movie--theater-screen trans-target transition--cover">
        <div id="rotary" class="movie--screen offset--up"><h4>Camp Rotary</h4></div>
        <div id="ghost" class="movie--screen offset--up">
          <h4>Ghost // Machine</h4>
        </div>
        <div id="chets" class="movie--screen  offset--up"><h4>Chet's Video</h4></div>
      </div>  </div>
      <div class="theater--crowd-container    trans-target transition--cover">
      <div class="theater--crowd offset--down"></div>
    </div></div>
   
      
      
      `,setTimeout(()=>{document.querySelector(".movie--theater-screen").classList.add("glow"),document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":zi.innerHTML=`
      <div class="marketing--shell">
            <div class="tuckedBack">
              <h1>MARKETING</h1>
            </div>
            <div class="marketing--presenter">
            <iframe  src="https://www.youtube.com/embed/Jz5nWid1cDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="marketing--pitch-box ">
                <div class="marketing--blurb">
                <div id="cta" class="mcta">Let's Connect!</div>
                  <p>
                    Having a great product and killer website is just the start
                    of your journey. I can help you tackle the next steps
                    toward solidifying your presence, and pushing it
                    forward.
                  </p>
                </div>
                <div class="marketing--show-box">
                  <div class="marketing--show-pic">
         
                  </div>
                  <div class="marketing--show-blurb">
                    Promotional<br />
                    &<br />Educational <br />Video Creation
                  </div>
                  <div class="marketing--show-pic"></div>
                  <div class="marketing--show-blurb">
                    Motion Graphics<br />&<br />Photo Animation
                  </div>
                  <div class="marketing--show-pic"></div>
                  <div class="marketing--show-blurb">Email Campaigns</div>
                  <div class="marketing--show-pic"></div>
                  <div class="marketing--show-blurb">Google Ads</div>
                </div>
              </div>
            </div>
          </div>
          <div id="m--balloon" class="balloon">
            <!-- sad-child -->
            <div id="m--ball" class="balloon-ball back"></div>
            <div class="balloon-string"></div>
          </div>
      `;let t=document.querySelector(".marketing--pitch-box");setTimeout(()=>{t.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":zi.innerHTML=`
      <div class="hm--title">
            <h1 class="words-header">Code Time</h1>
          </div>
          <div class="hm--display">
            <div class="skill--grid">
              <div class="flex">
                <h2 class="words-header ind transition--cover offset--left">I use...</h2>
                <ul id="listed_skills_front" class="list-header two--col">
                  <li id="li1" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>HTML5</title>
                          <path
                            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                          />
                        </svg>
                        <span class="li-skills">HTML </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">HTML</span>
                      </div>
                    </div>
                  </li>
                  <li id="li2" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>CSS3</title>
                          <path
                            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                          />
                        </svg>
                        <span class="li-skills">CSS </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">CSS3 + SASS</span>
                      </div>
                    </div>
                  </li>
                  <li id="li3" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>JavaScript</title>
                          <path
                            d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                          />
                        </svg>
                        <span class="li-skills">JavaScript</span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">JavaScript</span>
                      </div>
                    </div>
                  </li>
                  <li id="li4" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>React</title>
                          <path
                            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                          />
                        </svg>
                        <span class="li-skills">React </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">React</span>
                      </div>
                    </div>
                  </li>
                  <li id="li5" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Framer</title>
                          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                        </svg>
                        <span class="li-skills">Framer</span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Framer</span>
                      </div>
                    </div>
                  </li>
                  <li id="li6" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Jest</title>
                          <path
                            d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z"
                          />
                        </svg>
                        <span class="li-skills">Jest </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Jest</span>
                      </div>
                    </div>
                  </li>
                  <li id="li7" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>
                        <span class="li-skills">Git </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Git</span>
                      </div>
                    </div>
                  </li>

                  <li id="li8" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>MongoDB</title>
                          <path
                            d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
                          />
                        </svg>
                        <span class="li-skills">MongoDB</span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">MongoDB</span>
                      </div>
                    </div>
                  </li>
                  <li id="li9" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Node.js</title>
                          <path
                            d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                          />
                        </svg>
                        <span class="li-skills">Node.JS </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Node.JS</span>
                      </div>
                    </div>
                  </li>
                  <li id="li10" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Adobe Premiere Pro</title>
                          <path
                            d="M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z"
                          />
                        </svg>
                        <span class="li-skills">Premiere Pro </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Premiere Pro</span>
                      </div>
                    </div>
                  </li>
                  <li id="li11" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          fill="#FFFFFF"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="30px"
                          height="30px"
                        >
                          <path
                            d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 25 8 C 21.183495 8 18 10.939777 18 14.615234 C 18 18.40915 21.300216 22.194994 24.357422 24.763672 A 1.0001 1.0001 0 0 0 25.642578 24.763672 C 28.698868 22.19593 32 18.409362 32 14.615234 C 32 10.940374 28.815494 8.0011534 25 8 z M 25 10 C 27.800506 10.000847 30 12.100094 30 14.615234 C 30 16.902228 27.563489 20.162933 25 22.525391 C 22.435823 20.162286 20 16.902422 20 14.615234 C 20 12.098692 22.198505 10 25 10 z M 15.529297 24.955078 C 13.967084 24.991799 12.487855 25.300701 11.244141 26.011719 C 8.0309297 27.849869 7.0623819 32.089846 8.9921875 35.400391 C 10.923199 38.711026 15.095023 39.993422 18.308594 38.15625 L 18.308594 38.158203 C 21.625327 36.263271 23.280003 31.500238 23.984375 27.560547 A 1.0001 1.0001 0 0 0 23.337891 26.443359 C 21.440822 25.761039 19.247881 25.178372 17.113281 25.003906 C 16.579631 24.96029 16.050035 24.942838 15.529297 24.955078 z M 34.472656 24.957031 C 33.952099 24.944915 33.422279 24.962278 32.888672 25.005859 C 30.754244 25.180184 28.559676 25.761047 26.662109 26.443359 A 1.0001 1.0001 0 0 0 26.015625 27.560547 C 26.719975 31.499071 28.373942 36.262337 31.691406 38.158203 C 34.905004 39.994206 39.076802 38.711026 41.007812 35.400391 C 42.938764 32.089858 41.970339 27.848733 38.755859 26.011719 C 37.512244 25.30121 36.034327 24.993381 34.472656 24.957031 z M 15.578125 27.046875 C 16.024017 27.041269 16.487212 27.057741 16.960938 27.09375 C 18.542946 27.214001 20.186744 27.646556 21.720703 28.121094 C 20.947787 31.52708 19.327253 35.271075 17.316406 36.419922 C 15.103977 37.684749 12.137691 36.821943 10.720703 34.392578 C 9.3045088 31.963123 10.025492 29.011943 12.238281 27.746094 L 12.238281 27.748047 C 13.060817 27.277813 14.24045 27.063693 15.578125 27.046875 z M 34.421875 27.048828 C 35.760058 27.065188 36.941037 27.278056 37.763672 27.748047 C 39.977192 29.013032 40.696345 31.96311 39.279297 34.392578 C 37.862309 36.821943 34.895996 37.685872 32.683594 36.421875 C 30.671641 35.272084 29.052106 31.528299 28.279297 28.123047 C 29.813549 27.64855 31.45712 27.215863 33.039062 27.095703 C 33.512768 27.059722 33.975814 27.043375 34.421875 27.048828 z"
                          />
                        </svg>

                        <span class="li-skills">Resolve </span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Resolve</span>
                      </div>
                    </div>
                  </li>
                  <li id="li12" class="list-fixer">
                    <div class="skill-div">
                      <div class="skill-div-left">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox="
                  0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Ableton Live</title>
                          <path
                            d="M0 6.4v11.2h1.6V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0v11.2H8V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0V8H24V6.4zm0 3.2v1.6H24V9.6zm0 3.2v1.6H24v-1.6zm0 3.2v1.6H24V16z"
                          />
                        </svg>
                        <span class="li-skills"> Ableton</span>
                      </div>
                      <div class="skill-div-right">
                        <span class="li-skills-out">Ableton</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class=" words-header ind transition--cover offset--left delayedh2 ind">to make...</h2>
                <div class="code--grid trans-target transition--cover offset--upS">
                  <div class="code--grid-left">
                    <div id="codingProjectDisplay" class="project-display">
                      <div class="project-display-header">
                        <div
                          class="project-thumbnail-container ptcTop"
                          id="port-port"
                        ></div>
                        <div
                          class="project-thumbnail-container ptcBottom"
                        ></div>
                        <div class="project-title">
                          <h2>Portfolio</h2>
                          <div class="made-with-div">
                            <h4>Made with...</h4>
                            <br />
                            <div class="icons-for-grid">
                              <div class="made-with-icon">
                                <svg
                                  width="30px"
                                  height="30px"
                                  role="img"
                                  viewBox=" 0 0 25 25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>HTML5</title>
                                  <path
                                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                                  />
                                </svg>
                              </div>
                              <div class="made-with-icon">
                                <svg
                                  width="30px"
                                  height="30px"
                                  role="img"
                                  viewBox=" 0 0 25 25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>CSS3</title>
                                  <path
                                    d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                                  />
                                </svg>
                              </div>
                              <div class="made-with-icon">
                                <svg
                                  width="30px"
                                  height="30px"
                                  role="img"
                                  viewBox=" 0 0 25 25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>JavaScript</title>
                                  <path
                                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="porfolio-link-container">
                            <button class="link" id="portgithub">
                              <svg
                                width="30px"
                                height="30px"
                                role="img"
                                viewBox=" 0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>GitHub</title>
                                <path
                                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                />
                              </svg>
                              Code
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="port-blurb">
                        <p>
                          When I was thinking about how to present my material
                          moving forwards, I wanted to make sure I could present
                          something clean and professional while still capturing
                          my personality. I feel I have met this goal so far,
                          and look forward to adding to shareable work. This
                          site was coded in HTML, CSS, and Javascript.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="code--grid-right">
                    <div id="port-port" class="portfolioGridBox transition--cover offset--upS"></div>
                    <div id="port-fugativa" class="portfolioGridBox transition--cover offset--upS"></div>
                    <div id="port-masha" class="portfolioGridBox transition--cover offset--upS"></div>
                    <div class="portfolioGridBox transition--cover offset--upS">
                      more <br />
                      coming
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="m--balloon" class="balloon">
            <!-- sad-child -->
            <div id="m--ball" class="balloon-ball back"></div>
            <div class="balloon-string"></div>
          </div>
      `;let r=[...document.getElementsByTagName("li")],s=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{r.forEach(l=>{l.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":zi.innerHTML=`
      <div class="hm--title">
      <h1 class="words-header">Reference</h1>
    </div>
    <div class="hm--display">
      <div class="ref--container">
        <!-- <h1 id="words-header" class="words-header">Reference</h1> -->

        <div class="payboxes">
          <p id="words-para" class="handy">Need to toss me some bucks?</p>
          <div id="paypal" class="paybox paypal"></div>
          <div id="venmo" class="paybox venmo"></div>
        </div>  
      </div>
    </div>

      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--contact":zi.innerHTML=`
      <div class="hm--title">
            <h1 class="words-header">Contact</h1>
          </div>
          <div class="hm--display">
            <div class="ref--container">
              <!-- <h1 id="words-header" class="words-header">Reference</h1> -->

              <p id="words-para" class="handy">Need to get in touch?</p>
              <form id="contactForm">
                <!-- name -->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="formName"
                    placeholder="enter your name"
                  />
                </div>

                <!-- email -->
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="formEmail"
                    placeholder="enter your email"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="formMessage"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="submit"
                  class="btn btn-primary"
                ></button>
              </form>
            </div>
            <div class="ref--linkbox">
              <div class="business--card trans-target transition--cover">
                <div class="card--deets">
                  Find Strout.Co <br />
                  & <br />
                  Brian Strout on...
                </div>
              </div>

              <div class="linksInRow">
                <div id="linkig" class="licon icon--ig offset--down trans-target transition--cover">
                  <svg
                  
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>    <div id="linkfb" class=" licon icon--fb offset--down trans-target transition--cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    ></path>
                  </svg>
                </div>
                <div id="linkyt" class=" licon icon--yt offset--down trans-target transition--cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-youtube"
                  >
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                    ></path>
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    ></polygon>
                  </svg>
                </div>
                <div id="linkgh" class=" licon icon--fb offset--down trans-target transition--cover">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="80" height="80">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div id="m--balloon" class="balloon">
            <!-- sad-child -->
            <div id="m--ball" class="balloon-ball back"></div>
            <div class="balloon-string"></div>
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":zi.innerHTML=`
      <div class="hm--title">
            <h1 class="words-header">Contact</h1>
          </div>
          <div class="hm--display">
            <div class="ref--container">
              <!-- <h1 id="words-header" class="words-header">Reference</h1> -->

              <p id="words-para" class="handy">Need to get in touch?</p>
              <form id="contactForm">
                <!-- name -->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="formName"
                    placeholder="enter your name"
                  />
                </div>

                <!-- email -->
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="formEmail"
                    placeholder="enter your email"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="formMessage"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="submit"
                  class="btn btn-primary"
                ></button>
              </form>
            </div>
            <div class="ref--linkbox">
              <div class="business--card trans-target transition--cover">
                <div class="card--deets">
                  Find Strout.Co <br />
                  & <br />
                  Brian Strout on...
                </div>
              </div>

              <div class="linksInRow">
                <div id="linkig" class="licon icon--ig offset--down trans-target transition--cover">
                  <svg
                  
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>    <div id="linkfb" class=" licon icon--fb offset--down trans-target transition--cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    ></path>
                  </svg>
                </div>
                <div id="linkyt" class=" licon icon--yt offset--down trans-target transition--cover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-youtube"
                  >
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                    ></path>
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    ></polygon>
                  </svg>
                </div>
                <div id="linkgh" class=" licon icon--fb offset--down trans-target transition--cover">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="80" height="80">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div id="m--balloon" class="balloon">
            <!-- sad-child -->
            <div id="m--ball" class="balloon-ball back"></div>
            <div class="balloon-string"></div>
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250);break;case"port-port":codingProjectDisplay.innerHTML=`
      <div class="project-display-header">
      <div
        class="project-thumbnail-container ptcTop"
        id="port-port"
      ></div>
      <div class="project-thumbnail-container ptcBottom"></div>
      <div class="project-title">
        <h2>Portfolio</h2>
        <div class="made-with-div">
          <h4>Made with...</h4>
          <br />
          <div class="icons-for-grid">
            <div class="made-with-icon">
              <svg
                width="30px"
                height="30px"
                role="img"
                viewBox=" 0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>HTML5</title>
                <path
                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                />
              </svg>
            </div>
            <div class="made-with-icon">
              <svg
                width="30px"
                height="30px"
                role="img"
                viewBox=" 0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>CSS3</title>
                <path
                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                />
              </svg>
            </div>
            <div class="made-with-icon">
              <svg
                width="30px"
                height="30px"
                role="img"
                viewBox=" 0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>JavaScript</title>
                <path
                  d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="porfolio-link-container">
          <button class="link" id="portgithub">
            <svg
              width="30px"
              height="30px"
              role="img"
              viewBox=" 0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            Code
          </button>
        </div>
      </div>
    </div>
    <div class="port-blurb">
      <p>
        When I was thinking about how to present my material moving
        forwards, I wanted to make sure I could present something
        clean and professional while still capturing my personality. I
        feel I have met this goal so far, and look forward to adding
        to shareable work. This site was coded in HTML, CSS, and
        Javascript.
      </p>
    </div>`;break;case"port-fugativa":codingProjectDisplay.innerHTML=`
      <div class="project-display-header">
                <div
                  class="project-thumbnail-container ptcTop"
                  id="port-fugativa"
                ></div>
                <div class="project-thumbnail-container ptcBottom"></div>

                <div class="project-title">
                  <h2>Mobile Menu</h2>

                  <div class="made-with-div">
                    <h4>Made with...</h4>
                    <br />
                    <div class="icons-for-grid">
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>HTML5</title>
                          <path
                            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                          />
                        </svg>
                      </div>
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>CSS3</title>
                          <path
                            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                          />
                        </svg>
                      </div>
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>JavaScript</title>
                          <path
                            d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="porfolio-link-container">
                    <button class="link" id="fugagithub">
                      <svg
                        width="30px"
                        height="30px"
                        role="img"
                        viewBox=" 0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                      </svg>
                      Code</button
                    ><button class="link" id="fuganetlify">
                      <svg
                        width="30px"
                        height="30px"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Netlify</title>
                        <path
                          d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                        />
                      </svg>
                      Live
                    </button>
                  </div>
                </div>
              </div>
              <div class="port-blurb">
                <p>
                  This purpose of building this site was built to find a free,
                  no-app, easy way to provide a restraurant's updated menu to
                  it's costumers. Post Covid-19, a lot of restraurants returned
                  with digital menus, however I noticed that a lot of them
                  featured pdfs, which made changes really annoying for
                  waitstaff to keep up with. And assuming with that most belts
                  were being tighted in the hospitality business, I wanted to
                  build a site that dynamically builds and updates it's menu
                  with reload items, prices, and descriptions. This is only
                  using a template I built and data from Google Sheets. This
                  would enable a manager to update the price on the spreadsheet
                  from their phone and have it immediately affect how it is
                  displayed in the menu. This site was built with HTML, CSS, and
                  Vanilla Javascript as well as an API for Google Sheets. I used
                  a real menu and information from a restaurant I like in
                  Lisbon.
                </p>
              </div>
      `;break;case"port-masha":codingProjectDisplay.innerHTML=`
      <div class="project-display-header">
                <div
                  class="project-thumbnail-container ptcTop"
                  id="port-masha"
                ></div>
                <div class="project-thumbnail-container ptcBottom"></div>

                <div class="project-title">
                  <h2>Masha!</h2>

                  <div class="made-with-div">
                    <h4>Made with...</h4>
                    <br />
                    <div class="icons-for-grid">
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>React</title>
                          <path
                            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                          />
                        </svg>
                      </div>
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>CSS3</title>
                          <path
                            d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                          />
                        </svg>
                      </div>
                      <div class="made-with-icon">
                        <svg
                          width="30px"
                          height="30px"
                          role="img"
                          viewBox=" 0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Framer</title>
                          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="porfolio-link-container">
                    <button class="link" id="mashagithub">
                      <svg
                        width="30px"
                        height="30px"
                        role="img"
                        viewBox=" 0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                      </svg>
                      Code
                    </button>
                    <button class="link" id="mashanetlify">
                      <svg
                        id="mashanetlify"
                        width="30px"
                        height="30px"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Netlify</title>
                        <path
                          d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"
                        />
                      </svg>
                      Live
                    </button>
                  </div>
                </div>
              </div>
              <div class="port-blurb">
                <p>
                  This site was made for Masha Kiseleva, a young, motivated, and
                  aspiring model who lives in Lisbon, Portugal and London, UK.
                  As this site is meant to serve not only as part of my
                  portfolio, but also as a starting point and first draft of her
                  professional modeling website, it was created with a focus on
                  aesthetic. It was coded from scratch in React with CSS and
                  also incorporats Framer's Motion api to help give the site's
                  introduction a more eye catching entrance.
                </p>
              </div>
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":o.preventDefault(),br();break;case"mob_fl_arrow":console.log("arrow clicked");let n=document.getElementById("fl_ex_list"),a=n.firstElementChild;n.appendChild(a),console.log(a);break}};var u1=()=>{console.log("lazy loading engaged")};Mi.registerPlugin(q);var ps="src/components/images/falling1.png",h1="src/components/images/falling2.png",_s="src/components/images/falling5.png",Yn="src/components/images/falling4.png",f1="src/components/images/falling6.png",Qc="src/components/images/panic1.png",g1="src/components/images/panic4.png",Kc="src/components/images/panic3.png",Zc=document.getElementById("image"),Xn=0,Wn=[ps,h1,ps,f1,_s,Yn,_s,Yn,ps,_s,Yn,_s,f1,ps,h1],e2=[Qc,g1,Kc,g1];function t2(){++Xn>=Wn.length&&(Xn=0),Zc.src=Wn[Xn]}var Cd=document.getElementById("brianSecondPage"),Ld=document.getElementById("brianSecondPageBox"),Ed=document.getElementById("switchFree"),Md=document.getElementById("switchPort"),Id=document.getElementById("freelancePresenter"),Bd=document.getElementById("backCloud"),Pd=document.querySelector(".switchwrap"),i2=document.querySelector(".homeWrap"),r2=document.querySelectorAll("#target"),zd=document.getElementById("launch"),Ad=document.getElementById("clear"),s2=!1,n2=document.getElementById("top-target"),o2=document.getElementById("hi"),a2=document.getElementById("hiBox"),l2=document.getElementById("iam"),c2=document.getElementById("iamBox"),d2=document.getElementById("brianBox"),u2=document.getElementById("strout"),h2=document.getElementById("stroutBox"),f2=document.getElementById("title"),g2=document.getElementById("titleBox"),m2=document.querySelectorAll(".first-letters"),p2=document.getElementById("first-n"),m1=document.getElementById("fallingShell"),_2=document.getElementById("wrapper"),v2=document.getElementById("moodring"),w2=document.querySelectorAll(".cloudsForward"),y2=document.querySelectorAll(".cloudsBackwards"),p1=[...w2],_1=[...y2],Od=document.getElementById("remainder"),Dd=document.getElementById("c1"),Rd=document.getElementById("c2"),Fd=document.getElementById("c3"),Nd=document.getElementById("c4"),qd=document.getElementById("c5"),Hd=document.getElementById("c6"),Vd=document.getElementById("c7"),Yd=document.getElementById("c8"),Xd=document.getElementById("c9"),Wd=document.getElementById("c10"),Gd=document.getElementById("c11"),b2=document.getElementById("sun"),x2=document.getElementById("moon"),Ud=document.getElementById("target"),jd=document.getElementById("switchPort"),$d=document.getElementById("brianSecondChair"),Jd=document.getElementById("brianBlurbP"),Qd=document.getElementById("listOfSkills"),k2=document.querySelectorAll(".shrunk"),Kd=[...k2],Zd=document.getElementById("listed_skills_media"),T2=document.getElementsByTagName("li"),eu=[...T2],tu=document.getElementById("absolute-cloud"),iu=document.getElementById("copy-gmail"),ru=document.getElementById("brianlinkedin"),su=document.getElementById("briangithub"),nu=document.getElementById("resume-link"),ou=document.querySelectorAll("iframe"),au=document.getElementById("fallingSecond"),lu=document.getElementById("castle"),S2=document.querySelectorAll("#introToServices"),C2=Array.from(document.querySelectorAll(".nav--link")),v1=()=>{r2.forEach(r=>{gs.observe(r)}),S2.forEach(r=>{fs.observe(r)}),ms,setInterval(t2,200);let o=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),v2.addEventListener("click",()=>{_2.classList.toggle("dark"),b2.classList.toggle("sunset"),x2.classList.toggle("sunset")});let e=()=>{p1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),_1.forEach(r=>{r.classList.add("clouds-movement-background")})},t=()=>{m1.classList.add("falling"),setTimeout(()=>{s2=!0},3500)};window.addEventListener("load",()=>{n2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{o2.classList.remove("translatedHi"),l2.classList.remove("translatedIam"),[...m2].forEach(s=>{s.classList.add("first-name-falling-in")}),u2.classList.remove("translatedStrout"),f2.classList.remove("translatedTitle"),setTimeout(()=>{e()},2e3),setTimeout(()=>{t()},3500)},1e3),setTimeout(()=>{i()},7500)}),p2.addEventListener("transitionend",function(){});let i=()=>{a2.classList.add("up-and-out"),c2.classList.add("up-and-out"),d2.classList.add("up-and-out"),h2.classList.add("up-and-out"),g2.classList.add("up-and-out"),setTimeout(()=>{Wn=e2},2e3),setTimeout(()=>{o.style.overflow="visible",m1.classList.add("down-and-out"),p1.forEach(r=>{r.classList.add("unseen")}),_1.forEach(r=>{r.classList.add("unseen")})},2500),setTimeout(()=>{i2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{document.getElementById("nav--menu").classList.add("introd"),C2.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),Tr("andgo"),u1()},6500)}};Mi.registerPlugin(q);var vs="src/components/images/falling1.png",w1="src/components/images/falling2.png",ws="src/components/images/falling5.png",Gn="src/components/images/falling4.png",y1="src/components/images/falling6.png",L2="src/components/images/panic1.png",b1="src/components/images/panic4.png",E2="src/components/images/panic3.png",xu=document.getElementById("image");var M2=[vs,w1,vs,y1,ws,Gn,ws,Gn,vs,ws,Gn,ws,y1,vs,w1],I2=[L2,b1,E2,b1];function B2(){}var ku=document.getElementById("brianSecondPage"),Tu=document.getElementById("brianSecondPageBox"),Su=document.getElementById("switchFree"),Cu=document.getElementById("switchPort"),Lu=document.getElementById("freelancePresenter"),Eu=document.getElementById("backCloud"),Mu=document.querySelector(".switchwrap"),P2=document.querySelector(".homeWrap"),z2=document.querySelectorAll("#target"),Iu=document.getElementById("launch"),Bu=document.getElementById("clear"),A2=!1,O2=document.getElementById("top-target"),D2=document.getElementById("hi"),R2=document.getElementById("hiBox"),F2=document.getElementById("iam"),N2=document.getElementById("iamBox"),q2=document.getElementById("brianBox"),H2=document.getElementById("strout"),V2=document.getElementById("stroutBox"),Y2=document.getElementById("title"),X2=document.getElementById("titleBox"),W2=document.querySelectorAll(".first-letters"),G2=document.getElementById("first-n"),x1=document.getElementById("fallingShell"),U2=document.getElementById("wrapper"),j2=document.getElementById("moodring"),$2=document.querySelectorAll(".cloudsForward"),J2=document.querySelectorAll(".cloudsBackwards"),k1=[...$2],T1=[...J2],Pu=document.getElementById("remainder"),zu=document.getElementById("c1"),Au=document.getElementById("c2"),Ou=document.getElementById("c3"),Du=document.getElementById("c4"),Ru=document.getElementById("c5"),Fu=document.getElementById("c6"),Nu=document.getElementById("c7"),qu=document.getElementById("c8"),Hu=document.getElementById("c9"),Vu=document.getElementById("c10"),Yu=document.getElementById("c11"),Q2=document.getElementById("sun"),K2=document.getElementById("moon"),Xu=document.getElementById("target"),Wu=document.getElementById("switchPort"),Gu=document.getElementById("brianSecondChair"),Uu=document.getElementById("brianBlurbP"),ju=document.getElementById("listOfSkills"),Z2=document.querySelectorAll(".shrunk"),$u=[...Z2],Ju=document.getElementById("listed_skills_media"),e3=document.getElementsByTagName("li"),Qu=[...e3],Ku=document.getElementById("absolute-cloud"),Zu=document.getElementById("copy-gmail"),e5=document.getElementById("brianlinkedin"),t5=document.getElementById("briangithub"),i5=document.getElementById("resume-link"),r5=document.querySelectorAll("iframe"),s5=document.getElementById("fallingSecond"),n5=document.getElementById("castle"),t3=document.querySelectorAll("#introToServices"),i3=Array.from(document.querySelectorAll(".nav--link")),S1=()=>{console.log("in development, skipping animation"),z2.forEach(r=>{gs.observe(r)}),t3.forEach(r=>{fs.observe(r)}),ms,setInterval(B2,200);let o=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),j2.addEventListener("click",()=>{U2.classList.toggle("dark"),Q2.classList.toggle("sunset"),K2.classList.toggle("sunset")});let e=()=>{k1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),T1.forEach(r=>{r.classList.add("clouds-movement-background")})},t=()=>{x1.classList.add("falling"),setTimeout(()=>{A2=!0},0)};window.addEventListener("load",()=>{O2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{D2.classList.remove("translatedHi"),F2.classList.remove("translatedIam"),[...W2].forEach(s=>{s.classList.add("first-name-falling-in")}),H2.classList.remove("translatedStrout"),Y2.classList.remove("translatedTitle"),setTimeout(()=>{e()},0),setTimeout(()=>{t()},0)},0),setTimeout(()=>{i()},0)}),G2.addEventListener("transitionend",function(){});let i=()=>{R2.classList.add("up-and-out"),N2.classList.add("up-and-out"),q2.classList.add("up-and-out"),V2.classList.add("up-and-out"),X2.classList.add("up-and-out"),setTimeout(()=>{M2=I2},0),setTimeout(()=>{o.style.overflow="visible",x1.classList.add("down-and-out"),k1.forEach(r=>{r.classList.add("unseen")}),T1.forEach(r=>{r.classList.add("unseen")})},0),setTimeout(()=>{P2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{i3.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),d1("intro")},0)}};var o0=document.getElementById("deckOfMarketingCards"),a5=o0.querySelectorAll(".marketing__mobileCard"),Un=0,_r=!1,mi=null;function C1(o){if(console.log("moving"),!_r||!mi)return;let t=o.touches[0].clientX-Un;mi.style.transform=`translateX(${t}px) rotate(${t/20}deg)`}function L1(o){console.log("touch start sensed"),!_r&&(mi=o0.firstElementChild,Un=o.touches[0].clientX,_r=!0)}function E1(o){if(console.log("touch end sensed"),!_r||!mi)return;let t=o.changedTouches[0].clientX-Un,i=window.innerWidth*.3;if(Math.abs(t)>i){let r=t>0?1:-1;mi.style.transition="transform 0.3s ease-out",mi.style.transform=`translateX(${r*100}vw) rotate(${r*20}deg)`,setTimeout(()=>{r3(mi)},300)}else mi.style.transition="transform 0.2s ease-out",mi.style.transform="translateX(0) rotate(0)";_r=!1}function r3(o){o.style.transition="none",o.style.transform="translateX(0) rotate(0)",o0.appendChild(o)}var s3={threshold:Array.from({length:101},(o,e)=>e/100)},M1=new IntersectionObserver((o,e)=>{o.forEach(t=>{console.log(t.target.classlist);let i=t.intersectionRatio;if(t.isIntersecting){if(t.isIntersecting){if(i<.4||i>.9)return;let r=(i-.5)/(.9-.5),s=t.target.querySelector("#leftCurtain"),n=t.target.querySelector("#rightCurtain");if(s&&n){let a=40+50*r;s.style.right=`${a}%`,n.style.left=`${a}%`}}}else return})},s3);Mi.registerPlugin(q);var n3=!1;n3?S1():v1();function I1(){return window.innerWidth<=768}var w5=I1();I1&&(console.log("index has registered mobile we be launching listeners"),o0.addEventListener("touchstart",L1),o0.addEventListener("touchmove",C1),o0.addEventListener("touchend",E1));document.addEventListener("click",(o,e)=>{Tr(o),console.log("click")});var y5=document.getElementById("portgithub"),b5=document.getElementById("mashagithub"),x5=document.getElementById("mashanetlify"),k5=document.getElementById("fugagithub"),T5=document.getElementById("fuganetlify");wrapper.addEventListener("click",o=>{if(!(o.target.nodeName==="BUTTON"))return;switch(o.target.id){case"portgithub":a0("github.com/BrianStrout/Portfolio");break;case"mashagithub":a0("github.com/BrianStrout/masha");break;case"mashanetlify":a0("mashaoflisbon.netlify.app/");break;case"fugagithub":a0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":a0("lafugitiva.netlify.app/");break;case"rotaryyoutube":a0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":a0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var a0=o=>{window.open(`https://${o}`,"_blank")};var o3=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){o3=!0}}))}catch{}var a3=document.querySelectorAll(".fademe");a3.forEach(o=>{Jn.observe(o)});var l3=document.querySelector("#movieTheater");M1.observe(l3);io({elementId:"websiteGridPresentation",onProgress:o=>{}});var c3=Mi.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});c3.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
