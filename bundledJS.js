(()=>{function Jn(a,t,i,r,s){let n,o;if(a==="id")n=document.getElementById(`${t}`);else if(a==="class")o=Array.from(document.querySelectorAll(`.${t}`)),o.forEach(l=>{l.classList[i](`${r}`)});else{console.log("selector error");return}}var Pl={threshold:.4},Kn=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(i.isIntersecting)i.isIntersecting&&i.target.classList.remove("fadeup");else return})},Pl);var Fr=document.querySelector(".canvas"),Qn=!0,Zn={frame:0},eo=Fr.getContext("2d"),zl=80,to=[],Al=a=>`/src/components/images/animation/${a}.png`,Ol=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let a=0;a<zl;a++){let t=new Image;t.src=Al(a),to.push(t)}},Dl=a=>{eo.clearRect(0,0,Fr.width,Fr.height),eo.drawImage(to[a],0,0,Fr.width,Fr.height)};function Rl(a,t){let i=a,r=a,s=2e3,n=t-a,o=performance.now();function l(){let c=performance.now()-o,d=Math.min(c/s,1);d=1-Math.pow(1-d,3),i=Math.round(a+d*n),i!==r&&(r=i,Dl(r)),d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}var yt=a=>{console.log("updateAnimationFrame",a),Qn&&(Ol(),Qn=!1),typeof a=="number"&&(Rl(Zn.frame,a),Zn.frame=a)};var io=null;var Fl=a=>{let t=Math.floor(a*100/25)*25;if(console.log(t,"new map"),a<.025?yt(0):a>.025&&a<.24?yt(19):a>.24&&a<.49?yt(39):a>.5&&a<.75?yt(59):a>.75&&yt(79),t===io||t===100)return;io=t,console.log(t,"is map adjuster");let i=document.querySelector(".web__grid--right");if(!i){console.warn("Element '.web__grid--right' not found.");return}i.style.transform=`translateX(-${t}%)`,console.log(i.style)};function ro({elementId:a="websiteGridPresentation",parentID:t="sc__websites",onProgress:i=o=>{},scrollOffsetVh:r=10,enterThreshold:s=[.6,.98],stillnessDelay:n=1500}={}){console.log("Website scroll tracking initialized.");let o=document.getElementById(a),l=document.getElementById(t);if(!o||!l){console.warn(`Required element(s) not found: ${o?t:a}`);return}l.addEventListener("scroll",()=>{c()});function c(){let d=l.scrollTop,u=o.offsetTop,g=o.offsetHeight,m=l.clientHeight,h=d-u,p=g-m,v=Math.max(0,Math.min(h,p))/p;console.log(v),i(v),Fl(v)}}var so=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var no=a=>{console.log("we are live in submitter about to to predef");let t=document.getElementById("contactForm"),i="service_9l2h8gg",r="template_36awvk9",s=document.getElementById("formMessage").value;emailjs.sendForm(i,r,t,"oYymItkIoREaVvBlM").then(n=>{console.log("SUCCESS!",n.status,n.text)}).catch(n=>{console.error(n.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${s}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),so()};var xd=document.getElementById("contactForm"),kd=document.getElementById("formName"),Td=document.getElementById("formEmail"),Sd=document.getElementById("formMessage"),xs=!1,ks=!1,Ts=!1,hr;function Ss(){console.log("GOIGM FOR ALL"),xs&&ks&&Ts?(console.log("all fields pass!"),no()):(console.log("field failure"),console.log(xs,ks,Ts))}function Nl(a){return hr=/^[a-z a-z]+$/gi,hr.test(a)?(console.log("name pass"),xs=!0,Ss(),!0):(console.log("fail name"),!1)}function ql(a){return hr=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,hr.test(a)?(console.log("email pass"),ks=!0,Ss(),!0):(console.log("not a valid email"),!1)}function Hl(a){return hr=/.{8}/,hr.test(a)?(console.log("message pass"),Ts=!0,Ss(),!0):(console.log("fail"),!1)}var x0=()=>{console.log("validating?"),Nl(document.getElementById("formName").value),ql(document.getElementById("formEmail").value),Hl(document.getElementById("formMessage").value)};var qi=[{header:"Presence Auditing",description:'<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Presence Auditing</div><div class="description"><p>Determining and reviewing where you are is a great first step in growing your online presences<br /><br /> we can get started by:</p> <ul><li class="fadeRight"> Branding consistency review</li><li class="fadeRight sec">SEO & UX audit</li><li class="fadeRight thi">Competitor analysis</li></ul></div></div></div></div>',slug:"auditicon",image:"src/components/images/marketingicons/assess.webp"},{header:"Strategy",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Strategy</div><div class="description"><p>   Need to figure out the most efficient way to
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
                                  </div></div></div></div>`,slug:"implicon",image:"src/components/images/marketingicons/implement.webp"}];var oo=[`left: 35%;
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
`],Nr=["mc1","mc2","mc3","mc4","mc5"],Md=document.getElementById("msParagraph"),ao=document.querySelector(".ms__icons"),Gt=0;var Cs;function Vl(){return window.innerWidth<=768}Vl()?console.log("User is on a mobile device"):console.log("User is on a desktop");var Yl=a=>{ao.querySelector(".risen")&&(Cs=ao.querySelector(".risen"),console.log(Cs,"should be risen var"),Cs.classList.remove("risen")),document.querySelector(`#${a}`).classList.add("risen")},Xl=document.getElementById("msArrowLeft"),k0=4,Wl=document.getElementById("msArrowRight"),T0=2,Gl=a=>{console.log("in arrow"),console.log(a),k0=a-1,a===0&&(k0=4),T0=a+1,a===4&&(T0=0),Gt<0&&(Gt=qi.length-1),console.log(k0,T0),Xl.style.backgroundImage=`url(/${qi[k0].image})`,Wl.style.backgroundImage=`url(/${qi[T0].image})`},Ul=a=>{console.log("moving",a),a.forEach((t,i)=>{console.log(t,i),console.log(`${oo[i]}`),document.getElementById(`${t}`).style=`${oo[i]}`})},lo=a=>{if(a==="left"){Gt--,Gt<0&&(Gt=qi.length-1);let t=Nr.pop();Nr.unshift(t)}if(a==="right"){Gt++,Gt===qi.length&&(Gt=0);let t=Nr.shift();Nr.push(t)}Yl(qi[Gt].slug),Gl(Gt),Ul(Nr)},co=a=>{console.log("marketing controller live",a),a.classList.contains("arrowLeft")&&(console.log("Left!"),lo("left")),a.classList.contains("arrowRight")&&(console.log("Right!"),lo("right"))};var D=document.querySelector("#sc__hello");var qr=!1,ni=()=>{if(window.innerWidth<=768){qr=!qr,console.log(qr),qr?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):qr||(document.getElementById("mobileBack").innerHTML="");return}},S0=a=>{if(console.log("new",a.target),a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(a==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),D=document.querySelector("#sc__hello"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(t=>{t.tagName&&t.tagName==="DIV"&&t.classList.add("hit")});return}if(a.target.classList.contains("arrow")&&co(a.target),a.target.classList.contains("nav--link")||a.target.classList.contains("cta")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let t=document.querySelectorAll(".hit");t.length>0&&t.forEach(i=>{i.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(i=>{i.classList.add("blur"),i.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(i=>{i.classList.contains("fadeup")||i.classList.add("fadeup")})}switch(a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"submit":console.log("submitting in the new controller"),a.preventDefault(),x0();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"thisisbrian":window.open("https://www.youtube.com/watch?v=5khekERvC1c","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":D=document.querySelector("#sc__hello"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--marketing":D=document.querySelector("#sc__marketing"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--web":D=document.querySelector("#sc__websites"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--video":D=document.querySelector("#sc__video"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--nerd":D=document.querySelector("#sc__nerd"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")});let i=[...document.getElementsByTagName("li")],r=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{i.forEach(s=>{s.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(s=>{s.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--reference":D=document.querySelector("#sc__reference"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"m--contact":D=document.querySelector("#sc__contact"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(s=>{s.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break;case"cta":D=document.querySelector("#sc__contact"),D.classList.remove("blur"),D.classList.add("front__and-center"),D.scrollTo({top:0,left:0,behavior:"instant"}),D.childNodes.forEach(s=>{s.tagName&&s.tagName==="DIV"&&s.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(s=>{s.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),ni();break}a.target.classList.contains("marketing__mobileCard")&&console.log("should pull up swiper??")};function oi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function vo(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gr={duration:.5,overwrite:!1,delay:0},Ws,Ne,ce,It=1e8,se=1/It,As=Math.PI*2,jl=As/4,$l=0,wo=Math.sqrt,Jl=Math.cos,Kl=Math.sin,Me=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},li=function(t){return typeof t=="number"},O0=function(t){return typeof t>"u"},$t=function(t){return typeof t=="object"},gt=function(t){return t!==!1},Gs=function(){return typeof window<"u"},C0=function(t){return me(t)||Me(t)},yo=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Os=/(?:-?\.?\d|\.)+/gi,Us=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ls=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,js=/[+-]=-?[.\d]+/,bo=/[^,'"\[\]\s]+/gi,Ql=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Ut,Ds,$s,xt={},I0={},xo,ko=function(t){return(I0=mr(t,xt))&&Ue},D0=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Gr=function(t,i){return!i&&console.warn(t)},To=function(t,i){return t&&(xt[t]=i)&&I0&&(I0[t]=i)||xt},Ur=function(){return 0},Zl={suppressEvents:!0,isStart:!0,kill:!1},L0={suppressEvents:!0,kill:!1},e1={suppressEvents:!0},Js={},ki=[],Rs={},So,ht={},Es={},uo=30,E0=[],Ks="",Qs=function(t){var i=t[0],r,s;if($t(i)||me(i)||(t=[t]),!(r=(i._gsap||{}).harness)){for(s=E0.length;s--&&!E0[s].targetTest(i););r=E0[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new tn(t[s],r)))||t.splice(s,1);return t},Ti=function(t){return t._gsap||Qs(Bt(t))[0]._gsap},Zs=function(t,i,r){return(r=t[i])&&me(r)?t[i]():O0(r)&&t.getAttribute&&t.getAttribute(i)||r},it=function(t,i){return(t=t.split(",")).forEach(i)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wi=function(t,i){var r=i.charAt(0),s=parseFloat(i.substr(2));return t=parseFloat(t),r==="+"?t+s:r==="-"?t-s:r==="*"?t*s:t/s},t1=function(t,i){for(var r=i.length,s=0;t.indexOf(i[s])<0&&++s<r;);return s<r},B0=function(){var t=ki.length,i=ki.slice(0),r,s;for(Rs={},ki.length=0,r=0;r<t;r++)s=i[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Co=function(t,i,r,s){ki.length&&!Ne&&B0(),t.render(i,r,s||Ne&&i<0&&(t._initted||t._startAt)),ki.length&&!Ne&&B0()},Lo=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(bo).length<2?i:Me(t)?t.trim():t},Eo=function(t){return t},kt=function(t,i){for(var r in i)r in t||(t[r]=i[r]);return t},i1=function(t){return function(i,r){for(var s in r)s in i||s==="duration"&&t||s==="ease"||(i[s]=r[s])}},mr=function(t,i){for(var r in i)t[r]=i[r];return t},ho=function a(t,i){for(var r in i)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=$t(i[r])?a(t[r]||(t[r]={}),i[r]):i[r]);return t},P0=function(t,i){var r={},s;for(s in t)s in i||(r[s]=t[s]);return r},Yr=function(t){var i=t.parent||ue,r=t.keyframes?i1(Ge(t.keyframes)):kt;if(gt(t.inherit))for(;i;)r(t,i.vars.defaults),i=i.parent||i._dp;return t},r1=function(t,i){for(var r=t.length,s=r===i.length;s&&r--&&t[r]===i[r];);return r<0},Mo=function(t,i,r,s,n){r===void 0&&(r="_first"),s===void 0&&(s="_last");var o=t[s],l;if(n)for(l=i[n];o&&o[n]>l;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=t[r],t[r]=i),i._next?i._next._prev=i:t[s]=i,i._prev=o,i.parent=i._dp=t,i},R0=function(t,i,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var n=i._prev,o=i._next;n?n._next=o:t[r]===i&&(t[r]=o),o?o._prev=n:t[s]===i&&(t[s]=n),i._next=i._prev=i.parent=null},Si=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},s1=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},Fs=function(t,i,r,s){return t._startAt&&(Ne?t._startAt.revert(L0):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,s))},n1=function a(t){return!t||t._ts&&a(t.parent)},fo=function(t){return t._repeat?pr(t._tTime,t=t.duration()+t._rDelay)*t:0},pr=function(t,i){var r=Math.floor(t=Se(t/i));return t&&r===t?r-1:r},z0=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},F0=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||se)||0))},N0=function(t,i){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=Se(r._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),F0(t),r._dirty||Hi(r,t)),t},Io=function(t,i){var r;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(r=z0(t.rawTime(),i),(!i._dur||Jr(0,i.totalDuration(),r)-i._tTime>se)&&i.render(r,!0)),Hi(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-se}},jt=function(t,i,r,s){return i.parent&&Si(i),i._start=Se((li(r)?r:r||t!==ue?Mt(t,r,i):t._time)+i._delay),i._end=Se(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Mo(t,i,"_first","_last",t._sort?"_start":0),Ns(i)||(t._recent=i),s||Io(t,i),t._ts<0&&N0(t,t._tTime),t},Bo=function(t,i){return(xt.ScrollTrigger||D0("scrollTrigger",i))&&xt.ScrollTrigger.create(i,t)},Po=function(t,i,r,s,n){if(nn(t,i,n),!t._initted)return 1;if(!r&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&So!==ft.frame)return ki.push(t),t._lazy=[n,s],1},o1=function a(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},Ns=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},a1=function(t,i,r,s){var n=t.ratio,o=i<0||!i&&(!t._start&&o1(t)&&!(!t._initted&&Ns(t))||(t._ts<0||t._dp._ts<0)&&!Ns(t))?0:1,l=t._rDelay,c=0,d,u,g;if(l&&t._repeat&&(c=Jr(0,t._tDur,i),u=pr(c,l),t._yoyo&&u&1&&(o=1-o),u!==pr(t._tTime,l)&&(n=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==n||Ne||s||t._zTime===se||!i&&t._zTime){if(!t._initted&&Po(t,i,s,r,c))return;for(g=t._zTime,t._zTime=i||(r?se:0),r||(r=i&&!g),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,d=t._pt;d;)d.r(o,d.d),d=d._next;i<0&&Fs(t,i,r,!0),t._onUpdate&&!r&&bt(t,"onUpdate"),c&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===o&&(o&&Si(t,1),!r&&!Ne&&(bt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},l1=function(t,i,r){var s;if(r>i)for(s=t._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=t._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},_r=function(t,i,r,s){var n=t._repeat,o=Se(i)||0,l=t._tTime/t._tDur;return l&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=n?n<0?1e10:Se(o*(n+1)+t._rDelay*n):o,l>0&&!s&&N0(t,t._tTime=t._tDur*l),t.parent&&F0(t),r||Hi(t.parent,t),t},go=function(t){return t instanceof Fe?Hi(t):_r(t,t._dur)},c1={_start:0,endTime:Ur,totalDuration:Ur},Mt=function a(t,i,r){var s=t.labels,n=t._recent||c1,o=t.duration()>=It?n.endTime(!1):t._dur,l,c,d;return Me(i)&&(isNaN(i)||i in s)?(c=i.charAt(0),d=i.substr(-1)==="%",l=i.indexOf("="),c==="<"||c===">"?(l>=0&&(i=i.replace(/=/,"")),(c==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(i.substr(1))||0)*(d?(l<0?n:r).totalDuration()/100:1)):l<0?(i in s||(s[i]=o),s[i]):(c=parseFloat(i.charAt(l-1)+i.substr(l+1)),d&&r&&(c=c/100*(Ge(r)?r[0]:r).totalDuration()),l>1?a(t,i.substr(0,l-1),r)+c:o+c)):i==null?o:+i},Xr=function(t,i,r){var s=li(i[1]),n=(s?2:1)+(t<2?0:1),o=i[n],l,c;if(s&&(o.duration=i[1]),o.parent=r,t){for(l=o,c=r;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=gt(c.vars.inherit)&&c.parent;o.immediateRender=gt(l.immediateRender),t<2?o.runBackwards=1:o.startAt=i[n-1]}return new xe(i[0],o,i[n+1])},Ci=function(t,i){return t||t===0?i(t):i},Jr=function(t,i,r){return r<t?t:r>i?i:r},qe=function(t,i){return!Me(t)||!(i=Ql.exec(t))?"":i[1]},d1=function(t,i,r){return Ci(r,function(s){return Jr(t,i,s)})},qs=[].slice,zo=function(t,i){return t&&$t(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&$t(t[0]))&&!t.nodeType&&t!==Ut},u1=function(t,i,r){return r===void 0&&(r=[]),t.forEach(function(s){var n;return Me(s)&&!i||zo(s,1)?(n=r).push.apply(n,Bt(s)):r.push(s)})||r},Bt=function(t,i,r){return ce&&!i&&ce.selector?ce.selector(t):Me(t)&&!r&&(Ds||!vr())?qs.call((i||$s).querySelectorAll(t),0):Ge(t)?u1(t,r):zo(t)?qs.call(t,0):t?[t]:[]},Hs=function(t){return t=Bt(t)[0]||Gr("Invalid scope")||{},function(i){var r=t.current||t.nativeElement||t;return Bt(i,r.querySelectorAll?r:r===t?Gr("Invalid scope")||$s.createElement("div"):t)}},Ao=function(t){return t.sort(function(){return .5-Math.random()})},Oo=function(t){if(me(t))return t;var i=$t(t)?t:{each:t},r=Vi(i.ease),s=i.from||0,n=parseFloat(i.base)||0,o={},l=s>0&&s<1,c=isNaN(s)||l,d=i.axis,u=s,g=s;return Me(s)?u=g={center:.5,edges:.5,end:1}[s]||0:!l&&c&&(u=s[0],g=s[1]),function(m,h,p){var f=(p||i).length,v=o[f],k,x,S,y,T,L,b,M,C;if(!v){if(C=i.grid==="auto"?0:(i.grid||[1,It])[1],!C){for(b=-It;b<(b=p[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(v=o[f]=[],k=c?Math.min(C,f)*u-.5:s%C,x=C===It?0:c?f*g/C-.5:s/C|0,b=0,M=It,L=0;L<f;L++)S=L%C-k,y=x-(L/C|0),v[L]=T=d?Math.abs(d==="y"?y:S):wo(S*S+y*y),T>b&&(b=T),T<M&&(M=T);s==="random"&&Ao(v),v.max=b-M,v.min=M,v.v=f=(parseFloat(i.amount)||parseFloat(i.each)*(C>f?f-1:d?d==="y"?f/C:C:Math.max(C,f/C))||0)*(s==="edges"?-1:1),v.b=f<0?n-f:n,v.u=qe(i.amount||i.each)||0,r=r&&f<0?Xo(r):r}return f=(v[m]-v.min)/v.max||0,Se(v.b+(r?r(f):f)*v.v)+v.u}},Vs=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var s=Se(Math.round(parseFloat(r)/t)*t*i);return(s-s%1)/i+(li(r)?0:qe(r))}},Do=function(t,i){var r=Ge(t),s,n;return!r&&$t(t)&&(s=r=t.radius||It,t.values?(t=Bt(t.values),(n=!li(t[0]))&&(s*=s)):t=Vs(t.increment)),Ci(i,r?me(t)?function(o){return n=t(o),Math.abs(n-o)<=s?n:o}:function(o){for(var l=parseFloat(n?o.x:o),c=parseFloat(n?o.y:0),d=It,u=0,g=t.length,m,h;g--;)n?(m=t[g].x-l,h=t[g].y-c,m=m*m+h*h):m=Math.abs(t[g]-l),m<d&&(d=m,u=g);return u=!s||d<=s?t[u]:o,n||u===o||li(o)?u:u+qe(o)}:Vs(t))},Ro=function(t,i,r,s){return Ci(Ge(t)?!i:r===!0?!!(r=0):!s,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(i-t+r*.99))/r)*r*s)/s})},h1=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return function(s){return i.reduce(function(n,o){return o(n)},s)}},f1=function(t,i){return function(r){return t(parseFloat(r))+(i||qe(r))}},g1=function(t,i,r){return No(t,i,0,1,r)},Fo=function(t,i,r){return Ci(r,function(s){return t[~~i(s)]})},m1=function a(t,i,r){var s=i-t;return Ge(t)?Fo(t,a(0,t.length),i):Ci(r,function(n){return(s+(n-t)%s)%s+t})},p1=function a(t,i,r){var s=i-t,n=s*2;return Ge(t)?Fo(t,a(0,t.length-1),i):Ci(r,function(o){return o=(n+(o-t)%n)%n||0,t+(o>s?n-o:o)})},wr=function(t){for(var i=0,r="",s,n,o,l;~(s=t.indexOf("random(",i));)o=t.indexOf(")",s),l=t.charAt(s+7)==="[",n=t.substr(s+7,o-s-7).match(l?bo:Os),r+=t.substr(i,s-i)+Ro(l?n:+n[0],l?0:+n[1],+n[2]||1e-5),i=o+1;return r+t.substr(i,t.length-i)},No=function(t,i,r,s,n){var o=i-t,l=s-r;return Ci(n,function(c){return r+((c-t)/o*l||0)})},_1=function a(t,i,r,s){var n=isNaN(t+i)?0:function(h){return(1-h)*t+h*i};if(!n){var o=Me(t),l={},c,d,u,g,m;if(r===!0&&(s=1)&&(r=null),o)t={p:t},i={p:i};else if(Ge(t)&&!Ge(i)){for(u=[],g=t.length,m=g-2,d=1;d<g;d++)u.push(a(t[d-1],t[d]));g--,n=function(p){p*=g;var f=Math.min(m,~~p);return u[f](p-f)},r=i}else s||(t=mr(Ge(t)?[]:{},t));if(!u){for(c in i)rn.call(l,t,c,"get",i[c]);n=function(p){return ln(p,l)||(o?t.p:t)}}}return Ci(r,n)},mo=function(t,i,r){var s=t.labels,n=It,o,l,c;for(o in s)l=s[o]-i,l<0==!!r&&l&&n>(l=Math.abs(l))&&(c=o,n=l);return c},bt=function(t,i,r){var s=t.vars,n=s[i],o=ce,l=t._ctx,c,d,u;if(n)return c=s[i+"Params"],d=s.callbackScope||t,r&&ki.length&&B0(),l&&(ce=l),u=c?n.apply(d,c):n.call(d),ce=o,u},Hr=function(t){return Si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&bt(t,"onInterrupt"),t},fr,qo=[],Ho=function(t){if(t)if(t=!t.name&&t.default||t,Gs()||t.headless){var i=t.name,r=me(t),s=i&&!r&&t.init?function(){this._props=[]}:t,n={init:Ur,render:ln,add:rn,kill:z1,modifier:P1,rawVars:0},o={targetTest:0,get:0,getSetter:q0,aliases:{},register:0};if(vr(),t!==s){if(ht[i])return;kt(s,kt(P0(t,n),o)),mr(s.prototype,mr(n,P0(t,o))),ht[s.prop=i]=s,t.targetTest&&(E0.push(s),Js[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}To(i,s),t.register&&t.register(Ue,s,rt)}else qo.push(t)},re=255,Vr={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Ms=function(t,i,r){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(r-i)*t*6:t<.5?r:t*3<2?i+(r-i)*(2/3-t)*6:i)*re+.5|0},Vo=function(t,i,r){var s=t?li(t)?[t>>16,t>>8&re,t&re]:0:Vr.black,n,o,l,c,d,u,g,m,h,p;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vr[t])s=Vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),o=t.charAt(2),l=t.charAt(3),t="#"+n+n+o+o+l+l+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&re,s&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(s=p=t.match(Os),!i)c=+s[0]%360/360,d=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(d+1):u+d-u*d,n=u*2-o,s.length>3&&(s[3]*=1),s[0]=Ms(c+1/3,n,o),s[1]=Ms(c,n,o),s[2]=Ms(c-1/3,n,o);else if(~t.indexOf("="))return s=t.match(Us),r&&s.length<4&&(s[3]=1),s}else s=t.match(Os)||Vr.transparent;s=s.map(Number)}return i&&!p&&(n=s[0]/re,o=s[1]/re,l=s[2]/re,g=Math.max(n,o,l),m=Math.min(n,o,l),u=(g+m)/2,g===m?c=d=0:(h=g-m,d=u>.5?h/(2-g-m):h/(g+m),c=g===n?(o-l)/h+(o<l?6:0):g===o?(l-n)/h+2:(n-o)/h+4,c*=60),s[0]=~~(c+.5),s[1]=~~(d*100+.5),s[2]=~~(u*100+.5)),r&&s.length<4&&(s[3]=1),s},Yo=function(t){var i=[],r=[],s=-1;return t.split(ai).forEach(function(n){var o=n.match(Xi)||[];i.push.apply(i,o),r.push(s+=o.length+1)}),i.c=r,i},po=function(t,i,r){var s="",n=(t+s).match(ai),o=i?"hsla(":"rgba(",l=0,c,d,u,g;if(!n)return t;if(n=n.map(function(m){return(m=Vo(m,i,1))&&o+(i?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),r&&(u=Yo(t),c=r.c,c.join(s)!==u.c.join(s)))for(d=t.replace(ai,"1").split(Xi),g=d.length-1;l<g;l++)s+=d[l]+(~c.indexOf(l)?n.shift()||o+"0,0,0,0)":(u.length?u:n.length?n:r).shift());if(!d)for(d=t.split(ai),g=d.length-1;l<g;l++)s+=d[l]+n[l];return s+d[g]},ai=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vr)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),v1=/hsl[a]?\(/,en=function(t){var i=t.join(" "),r;if(ai.lastIndex=0,ai.test(i))return r=v1.test(i),t[1]=po(t[1],r),t[0]=po(t[0],r,Yo(t[1])),!0},jr,ft=function(){var a=Date.now,t=500,i=33,r=a(),s=r,n=1e3/240,o=n,l=[],c,d,u,g,m,h,p=function f(v){var k=a()-s,x=v===!0,S,y,T,L;if((k>t||k<0)&&(r+=k-i),s+=k,T=s-r,S=T-o,(S>0||x)&&(L=++g.frame,m=T-g.time*1e3,g.time=T=T/1e3,o+=S+(S>=n?4:n-S),y=1),x||(c=d(f)),y)for(h=0;h<l.length;h++)l[h](T,m,L,v)};return g={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(v){return m/(1e3/(v||60))},wake:function(){xo&&(!Ds&&Gs()&&(Ut=Ds=window,$s=Ut.document||{},xt.gsap=Ue,(Ut.gsapVersions||(Ut.gsapVersions=[])).push(Ue.version),ko(I0||Ut.GreenSockGlobals||!Ut.gsap&&Ut||{}),qo.forEach(Ho)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&g.sleep(),d=u||function(v){return setTimeout(v,o-g.time*1e3+1|0)},jr=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),jr=0,d=Ur},lagSmoothing:function(v,k){t=v||1/0,i=Math.min(k||33,t)},fps:function(v){n=1e3/(v||240),o=g.time*1e3+n},add:function(v,k,x){var S=k?function(y,T,L,b){v(y,T,L,b),g.remove(S)}:v;return g.remove(v),l[x?"unshift":"push"](S),vr(),S},remove:function(v,k){~(k=l.indexOf(v))&&l.splice(k,1)&&h>=k&&h--},_listeners:l},g}(),vr=function(){return!jr&&ft.wake()},J={},w1=/^[\d.\-M][\d.\-,\s]/,y1=/["']/g,b1=function(t){for(var i={},r=t.substr(1,t.length-3).split(":"),s=r[0],n=1,o=r.length,l,c,d;n<o;n++)c=r[n],l=n!==o-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),i[s]=isNaN(d)?d.replace(y1,"").trim():+d,s=c.substr(l+1).trim();return i},x1=function(t){var i=t.indexOf("(")+1,r=t.indexOf(")"),s=t.indexOf("(",i);return t.substring(i,~s&&s<r?t.indexOf(")",r+1):r)},k1=function(t){var i=(t+"").split("("),r=J[i[0]];return r&&i.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[b1(i[1])]:x1(t).split(",").map(Lo)):J._CE&&w1.test(t)?J._CE("",t):r},Xo=function(t){return function(i){return 1-t(1-i)}},Wo=function a(t,i){for(var r=t._first,s;r;)r instanceof Fe?a(r,i):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==i&&(r.timeline?a(r.timeline,i):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=i)),r=r._next},Vi=function(t,i){return t&&(me(t)?t:J[t]||k1(t))||i},Gi=function(t,i,r,s){r===void 0&&(r=function(c){return 1-i(1-c)}),s===void 0&&(s=function(c){return c<.5?i(c*2)/2:1-i((1-c)*2)/2});var n={easeIn:i,easeOut:r,easeInOut:s},o;return it(t,function(l){J[l]=xt[l]=n,J[o=l.toLowerCase()]=r;for(var c in n)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[l+"."+c]=n[c]}),n},Go=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},Is=function a(t,i,r){var s=i>=1?i:1,n=(r||(t?.3:.45))/(i<1?i:1),o=n/As*(Math.asin(1/s)||0),l=function(u){return u===1?1:s*Math.pow(2,-10*u)*Kl((u-o)*n)+1},c=t==="out"?l:t==="in"?function(d){return 1-l(1-d)}:Go(l);return n=As/n,c.config=function(d,u){return a(t,d,u)},c},Bs=function a(t,i){i===void 0&&(i=1.70158);var r=function(o){return o?--o*o*((i+1)*o+i)+1:0},s=t==="out"?r:t==="in"?function(n){return 1-r(1-n)}:Go(r);return s.config=function(n){return a(t,n)},s};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var i=t<5?t+1:t;Gi(a+",Power"+(i-1),t?function(r){return Math.pow(r,i)}:function(r){return r},function(r){return 1-Math.pow(1-r,i)},function(r){return r<.5?Math.pow(r*2,i)/2:1-Math.pow((1-r)*2,i)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Gi("Elastic",Is("in"),Is("out"),Is());(function(a,t){var i=1/t,r=2*i,s=2.5*i,n=function(l){return l<i?a*l*l:l<r?a*Math.pow(l-1.5/t,2)+.75:l<s?a*(l-=2.25/t)*l+.9375:a*Math.pow(l-2.625/t,2)+.984375};Gi("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);Gi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Gi("Circ",function(a){return-(wo(1-a*a)-1)});Gi("Sine",function(a){return a===1?1:-Jl(a*jl)+1});Gi("Back",Bs("in"),Bs("out"),Bs());J.SteppedEase=J.steps=xt.SteppedEase={config:function(t,i){t===void 0&&(t=1);var r=1/t,s=t+(i?0:1),n=i?1:0,o=1-se;return function(l){return((s*Jr(0,o,l)|0)+n)*r}}};gr.ease=J["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ks+=a+","+a+"Params,"});var tn=function(t,i){this.id=$l++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:Zs,this.set=i?i.getSetter:q0},$r=function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,_r(this,+i.duration,1,1),this.data=i.data,ce&&(this._ctx=ce,ce.data.push(this)),jr||ft.wake()}var t=a.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,_r(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,s){if(vr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(N0(this,r),!n._dp||n.parent||Io(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&jt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===se||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Co(this,r,s)),this},t.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+fo(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},t.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+fo(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,s){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*n,s):this._repeat?pr(this._tTime,n)+1:1},t.timeScale=function(r,s){if(!arguments.length)return this._rts===-se?0:this._rts;if(this._rts===r)return this;var n=this.parent&&this._ts?z0(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-se?0:this._rts,this.totalTime(Jr(-Math.abs(this._delay),this._tDur,n),s!==!1),F0(this),s1(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==se&&(this._tTime-=se)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&jt(s,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(gt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?z0(s.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=e1);var s=Ne;return Ne=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Ne=s,this},t.globalTime=function(r){for(var s=this,n=arguments.length?r:s.rawTime();s;)n=s._start+n/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(r):n},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,go(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,go(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,s){return this.totalTime(Mt(this,r),gt(s))},t.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,gt(s)),this._dur||(this._zTime=-se),this},t.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},t.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-se,this},t.isActive=function(){var r=this.parent||this._dp,s=this._start,n;return!!(!r||this._ts&&this._initted&&r.isActive()&&(n=r.rawTime(!0))>=s&&n<this.endTime(!0)-se)},t.eventCallback=function(r,s,n){var o=this.vars;return arguments.length>1?(s?(o[r]=s,n&&(o[r+"Params"]=n),r==="onUpdate"&&(this._onUpdate=s)):delete o[r],this):o[r]},t.then=function(r){var s=this;return new Promise(function(n){var o=me(r)?r:Eo,l=function(){var d=s.then;s.then=null,me(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=d),n(o),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Hr(this)},a}();kt($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-se,_prom:0,_ps:!1,_rts:1});var Fe=function(a){vo(t,a);function t(r,s){var n;return r===void 0&&(r={}),n=a.call(this,r)||this,n.labels={},n.smoothChildTiming=!!r.smoothChildTiming,n.autoRemoveChildren=!!r.autoRemoveChildren,n._sort=gt(r.sortChildren),ue&&jt(r.parent||ue,oi(n),s),r.reversed&&n.reverse(),r.paused&&n.paused(!0),r.scrollTrigger&&Bo(oi(n),r.scrollTrigger),n}var i=t.prototype;return i.to=function(s,n,o){return Xr(0,arguments,this),this},i.from=function(s,n,o){return Xr(1,arguments,this),this},i.fromTo=function(s,n,o,l){return Xr(2,arguments,this),this},i.set=function(s,n,o){return n.duration=0,n.parent=this,Yr(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new xe(s,n,Mt(this,o),1),this},i.call=function(s,n,o){return jt(this,xe.delayedCall(0,s,n),o)},i.staggerTo=function(s,n,o,l,c,d,u){return o.duration=n,o.stagger=o.stagger||l,o.onComplete=d,o.onCompleteParams=u,o.parent=this,new xe(s,o,Mt(this,c)),this},i.staggerFrom=function(s,n,o,l,c,d,u){return o.runBackwards=1,Yr(o).immediateRender=gt(o.immediateRender),this.staggerTo(s,n,o,l,c,d,u)},i.staggerFromTo=function(s,n,o,l,c,d,u,g){return l.startAt=o,Yr(l).immediateRender=gt(l.immediateRender),this.staggerTo(s,n,l,c,d,u,g)},i.render=function(s,n,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=s<=0?0:Se(s),g=this._zTime<0!=s<0&&(this._initted||!d),m,h,p,f,v,k,x,S,y,T,L,b;if(this!==ue&&u>c&&s>=0&&(u=c),u!==this._tTime||o||g){if(l!==this._time&&d&&(u+=this._time-l,s+=this._time-l),m=u,y=this._start,S=this._ts,k=!S,g&&(d||(l=this._zTime),(s||!n)&&(this._zTime=s)),this._repeat){if(L=this._yoyo,v=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(v*100+s,n,o);if(m=Se(u%v),u===c?(f=this._repeat,m=d):(T=Se(u/v),f=~~T,f&&f===T&&(m=d,f--),m>d&&(m=d)),T=pr(this._tTime,v),!l&&this._tTime&&T!==f&&this._tTime-T*v-this._dur<=0&&(T=f),L&&f&1&&(m=d-m,b=1),f!==T&&!this._lock){var M=L&&T&1,C=M===(L&&f&1);if(f<T&&(M=!M),l=M?0:u%d?d:u,this._lock=1,this.render(l||(b?0:Se(f*v)),n,!d)._lock=0,this._tTime=u,!n&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),l&&l!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=M?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Wo(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=l1(this,Se(l),Se(m)),x&&(u-=m-(m=x._start))),this._tTime=u,this._time=m,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,l=0),!l&&m&&!n&&!f&&(bt(this,"onStart"),this._tTime!==u))return this;if(m>=l&&s>=0)for(h=this._first;h;){if(p=h._next,(h._act||m>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(s,n,o);if(h.render(h._ts>0?(m-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(m-h._start)*h._ts,n,o),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=-se);break}}h=p}else{h=this._last;for(var E=s<0?s:m;h;){if(p=h._prev,(h._act||E<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(s,n,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,n,o||Ne&&(h._initted||h._startAt)),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=E?-se:se);break}}h=p}}if(x&&!n&&(this.pause(),x.render(m>=l?0:-se)._zTime=m>=l?1:-1,this._ts))return this._start=y,F0(this),this.render(s,n,o);this._onUpdate&&!n&&bt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!n&&!(s<0&&!l)&&(u||l||!c)&&(bt(this,u===c&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,n){var o=this;if(li(n)||(n=Mt(this,n,s)),!(s instanceof $r)){if(Ge(s))return s.forEach(function(l){return o.add(l,n)}),this;if(Me(s))return this.addLabel(s,n);if(me(s))s=xe.delayedCall(0,s);else return this}return this!==s?jt(this,s,n):this},i.getChildren=function(s,n,o,l){s===void 0&&(s=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),l===void 0&&(l=-It);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof xe?n&&c.push(d):(o&&c.push(d),s&&c.push.apply(c,d.getChildren(!0,n,o)))),d=d._next;return c},i.getById=function(s){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===s)return n[o]},i.remove=function(s){return Me(s)?this.removeLabel(s):me(s)?this.killTweensOf(s):(s.parent===this&&R0(this,s),s===this._recent&&(this._recent=this._last),Hi(this))},i.totalTime=function(s,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(ft.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,n),this._forcing=0,this):this._tTime},i.addLabel=function(s,n){return this.labels[s]=Mt(this,n),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,n,o){var l=xe.delayedCall(0,n||Ur,o);return l.data="isPause",this._hasPause=1,jt(this,l,Mt(this,s))},i.removePause=function(s){var n=this._first;for(s=Mt(this,s);n;)n._start===s&&n.data==="isPause"&&Si(n),n=n._next},i.killTweensOf=function(s,n,o){for(var l=this.getTweensOf(s,o),c=l.length;c--;)xi!==l[c]&&l[c].kill(s,n);return this},i.getTweensOf=function(s,n){for(var o=[],l=Bt(s),c=this._first,d=li(n),u;c;)c instanceof xe?t1(c._targets,l)&&(d?(!xi||c._initted&&c._ts)&&c.globalTime(0)<=n&&c.globalTime(c.totalDuration())>n:!n||c.isActive())&&o.push(c):(u=c.getTweensOf(l,n)).length&&o.push.apply(o,u),c=c._next;return o},i.tweenTo=function(s,n){n=n||{};var o=this,l=Mt(o,s),c=n,d=c.startAt,u=c.onStart,g=c.onStartParams,m=c.immediateRender,h,p=xe.to(o,kt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:n.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale())||se,onStart:function(){if(o.pause(),!h){var v=n.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale());p._dur!==v&&_r(p,v,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,g||[])}},n));return m?p.render(0):p},i.tweenFromTo=function(s,n,o){return this.tweenTo(n,kt({startAt:{time:Mt(this,s)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),mo(this,Mt(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),mo(this,Mt(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+se)},i.shiftChildren=function(s,n,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,d;l;)l._start>=o&&(l._start+=s,l._end+=s),l=l._next;if(n)for(d in c)c[d]>=o&&(c[d]+=s);return Hi(this)},i.invalidate=function(s){var n=this._first;for(this._lock=0;n;)n.invalidate(s),n=n._next;return a.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Hi(this)},i.totalDuration=function(s){var n=0,o=this,l=o._last,c=It,d,u,g;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(g=o.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,jt(o,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(n-=u,(!g&&!o._dp||g&&g.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),l._end>n&&l._ts&&(n=l._end),l=d;_r(o,o===ue&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(ue._ts&&(Co(ue,z0(s,ue)),So=ft.frame),ft.frame>=uo){uo+=mt.autoSleep||120;var n=ue._first;if((!n||!n._ts)&&mt.autoSleep&&ft._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ft.sleep()}}},t}($r);kt(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var T1=function(t,i,r,s,n,o,l){var c=new rt(this._pt,t,i,0,1,an,null,n),d=0,u=0,g,m,h,p,f,v,k,x;for(c.b=r,c.e=s,r+="",s+="",(k=~s.indexOf("random("))&&(s=wr(s)),o&&(x=[r,s],o(x,t,i),r=x[0],s=x[1]),m=r.match(Ls)||[];g=Ls.exec(s);)p=g[0],f=s.substring(d,g.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),p!==m[u++]&&(v=parseFloat(m[u-1])||0,c._pt={_next:c._pt,p:f||u===1?f:",",s:v,c:p.charAt(1)==="="?Wi(v,p)-v:parseFloat(p)-v,m:h&&h<4?Math.round:0},d=Ls.lastIndex);return c.c=d<s.length?s.substring(d,s.length):"",c.fp=l,(js.test(s)||k)&&(c.e=0),this._pt=c,c},rn=function(t,i,r,s,n,o,l,c,d,u){me(s)&&(s=s(n||0,t,o));var g=t[i],m=r!=="get"?r:me(g)?d?t[i.indexOf("set")||!me(t["get"+i.substr(3)])?i:"get"+i.substr(3)](d):t[i]():g,h=me(g)?d?M1:$o:on,p;if(Me(s)&&(~s.indexOf("random(")&&(s=wr(s)),s.charAt(1)==="="&&(p=Wi(m,s)+(qe(m)||0),(p||p===0)&&(s=p))),!u||m!==s||Ys)return!isNaN(m*s)&&s!==""?(p=new rt(this._pt,t,i,+m||0,s-(m||0),typeof g=="boolean"?B1:Jo,0,h),d&&(p.fp=d),l&&p.modifier(l,this,t),this._pt=p):(!g&&!(i in t)&&D0(i,s),T1.call(this,t,i,m,s,h,c||mt.stringFilter,d))},S1=function(t,i,r,s,n){if(me(t)&&(t=Wr(t,n,i,r,s)),!$t(t)||t.style&&t.nodeType||Ge(t)||yo(t))return Me(t)?Wr(t,n,i,r,s):t;var o={},l;for(l in t)o[l]=Wr(t[l],n,i,r,s);return o},sn=function(t,i,r,s,n,o){var l,c,d,u;if(ht[t]&&(l=new ht[t]).init(n,l.rawVars?i[t]:S1(i[t],s,n,o,r),r,s,o)!==!1&&(r._pt=c=new rt(r._pt,n,t,0,1,l.render,l,0,l.priority),r!==fr))for(d=r._ptLookup[r._targets.indexOf(n)],u=l._props.length;u--;)d[l._props[u]]=c;return l},xi,Ys,nn=function a(t,i,r){var s=t.vars,n=s.ease,o=s.startAt,l=s.immediateRender,c=s.lazy,d=s.onUpdate,u=s.runBackwards,g=s.yoyoEase,m=s.keyframes,h=s.autoRevert,p=t._dur,f=t._startAt,v=t._targets,k=t.parent,x=k&&k.data==="nested"?k.vars.targets:v,S=t._overwrite==="auto"&&!Ws,y=t.timeline,T,L,b,M,C,E,R,I,U,W,K,j,O;if(y&&(!m||!n)&&(n="none"),t._ease=Vi(n,gr.ease),t._yEase=g?Xo(Vi(g===!0?n:g,gr.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!y&&!!s.runBackwards,!y||m&&!s.stagger){if(I=v[0]?Ti(v[0]).harness:0,j=I&&s[I.prop],T=P0(s,Js),f&&(f._zTime<0&&f.progress(1),i<0&&u&&l&&!h?f.render(-1,!0):f.revert(u&&p?L0:Zl),f._lazy=0),o){if(Si(t._startAt=xe.set(v,kt({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!f&&gt(c),startAt:null,delay:0,onUpdate:d&&function(){return bt(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Ne||!l&&!h)&&t._startAt.revert(L0),l&&p&&i<=0&&r<=0){i&&(t._zTime=i);return}}else if(u&&p&&!f){if(i&&(l=!1),b=kt({overwrite:!1,data:"isFromStart",lazy:l&&!f&&gt(c),immediateRender:l,stagger:0,parent:k},T),j&&(b[I.prop]=j),Si(t._startAt=xe.set(v,b)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Ne?t._startAt.revert(L0):t._startAt.render(-1,!0)),t._zTime=i,!l)a(t._startAt,se,se);else if(!i)return}for(t._pt=t._ptCache=0,c=p&&gt(c)||c&&!p,L=0;L<v.length;L++){if(C=v[L],R=C._gsap||Qs(v)[L]._gsap,t._ptLookup[L]=W={},Rs[R.id]&&ki.length&&B0(),K=x===v?L:x.indexOf(C),I&&(U=new I).init(C,j||T,t,K,x)!==!1&&(t._pt=M=new rt(t._pt,C,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Z){W[Z]=M}),U.priority&&(E=1)),!I||j)for(b in T)ht[b]&&(U=sn(b,T,t,K,C,x))?U.priority&&(E=1):W[b]=M=rn.call(t,C,b,"get",T[b],K,x,0,s.stringFilter);t._op&&t._op[L]&&t.kill(C,t._op[L]),S&&t._pt&&(xi=t,ue.killTweensOf(C,W,t.globalTime(i)),O=!t.parent,xi=0),t._pt&&c&&(Rs[R.id]=1)}E&&cn(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!O,m&&i<=0&&y.render(It,!0,!0)},C1=function(t,i,r,s,n,o,l,c){var d=(t._pt&&t._ptCache||(t._ptCache={}))[i],u,g,m,h;if(!d)for(d=t._ptCache[i]=[],m=t._ptLookup,h=t._targets.length;h--;){if(u=m[h][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return Ys=1,t.vars[i]="+=0",nn(t,l),Ys=0,c?Gr(i+" not eligible for reset"):1;d.push(u)}for(h=d.length;h--;)g=d[h],u=g._pt||g,u.s=(s||s===0)&&!n?s:u.s+(s||0)+o*u.c,u.c=r-u.s,g.e&&(g.e=pe(r)+qe(g.e)),g.b&&(g.b=u.s+qe(g.b))},L1=function(t,i){var r=t[0]?Ti(t[0]).harness:0,s=r&&r.aliases,n,o,l,c;if(!s)return i;n=mr({},i);for(o in s)if(o in n)for(c=s[o].split(","),l=c.length;l--;)n[c[l]]=n[o];return n},E1=function(t,i,r,s){var n=i.ease||s||"power1.inOut",o,l;if(Ge(i))l=r[t]||(r[t]=[]),i.forEach(function(c,d){return l.push({t:d/(i.length-1)*100,v:c,e:n})});else for(o in i)l=r[o]||(r[o]=[]),o==="ease"||l.push({t:parseFloat(t),v:i[o],e:n})},Wr=function(t,i,r,s,n){return me(t)?t.call(i,r,s,n):Me(t)&&~t.indexOf("random(")?wr(t):t},Uo=Ks+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jo={};it(Uo+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return jo[a]=1});var xe=function(a){vo(t,a);function t(r,s,n,o){var l;typeof s=="number"&&(n.duration=s,s=n,n=null),l=a.call(this,o?s:Yr(s))||this;var c=l.vars,d=c.duration,u=c.delay,g=c.immediateRender,m=c.stagger,h=c.overwrite,p=c.keyframes,f=c.defaults,v=c.scrollTrigger,k=c.yoyoEase,x=s.parent||ue,S=(Ge(r)||yo(r)?li(r[0]):"length"in s)?[r]:Bt(r),y,T,L,b,M,C,E,R;if(l._targets=S.length?Qs(S):Gr("GSAP target "+r+" not found. https://gsap.com",!mt.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,p||m||C0(d)||C0(u)){if(s=l.vars,y=l.timeline=new Fe({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=oi(l),y._start=0,m||C0(d)||C0(u)){if(b=S.length,E=m&&Oo(m),$t(m))for(M in m)~Uo.indexOf(M)&&(R||(R={}),R[M]=m[M]);for(T=0;T<b;T++)L=P0(s,jo),L.stagger=0,k&&(L.yoyoEase=k),R&&mr(L,R),C=S[T],L.duration=+Wr(d,oi(l),T,C,S),L.delay=(+Wr(u,oi(l),T,C,S)||0)-l._delay,!m&&b===1&&L.delay&&(l._delay=u=L.delay,l._start+=u,L.delay=0),y.to(C,L,E?E(T,C,S):0),y._ease=J.none;y.duration()?d=u=0:l.timeline=0}else if(p){Yr(kt(y.vars.defaults,{ease:"none"})),y._ease=Vi(p.ease||s.ease||"none");var I=0,U,W,K;if(Ge(p))p.forEach(function(j){return y.to(S,j,">")}),y.duration();else{L={};for(M in p)M==="ease"||M==="easeEach"||E1(M,p[M],L,p.easeEach);for(M in L)for(U=L[M].sort(function(j,O){return j.t-O.t}),I=0,T=0;T<U.length;T++)W=U[T],K={ease:W.e,duration:(W.t-(T?U[T-1].t:0))/100*d},K[M]=W.v,y.to(S,K,I),I+=K.duration;y.duration()<d&&y.to({},{duration:d-y.duration()})}}d||l.duration(d=y.duration())}else l.timeline=0;return h===!0&&!Ws&&(xi=oi(l),ue.killTweensOf(S),xi=0),jt(x,oi(l),n),s.reversed&&l.reverse(),s.paused&&l.paused(!0),(g||!d&&!p&&l._start===Se(x._time)&&gt(g)&&n1(oi(l))&&x.data!=="nested")&&(l._tTime=-se,l.render(Math.max(0,-u)||0)),v&&Bo(oi(l),v),l}var i=t.prototype;return i.render=function(s,n,o){var l=this._time,c=this._tDur,d=this._dur,u=s<0,g=s>c-se&&!u?c:s<se?0:s,m,h,p,f,v,k,x,S,y;if(!d)a1(this,s,n,o);else if(g!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(m=g,S=this.timeline,this._repeat){if(f=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+s,n,o);if(m=Se(g%f),g===c?(p=this._repeat,m=d):(v=Se(g/f),p=~~v,p&&p===v?(m=d,p--):m>d&&(m=d)),k=this._yoyo&&p&1,k&&(y=this._yEase,m=d-m),v=pr(this._tTime,f),m===l&&!o&&this._initted&&p===v)return this._tTime=g,this;p!==v&&(S&&this._yEase&&Wo(S,k),this.vars.repeatRefresh&&!k&&!this._lock&&m!==f&&this._initted&&(this._lock=o=1,this.render(Se(f*p),!0).invalidate()._lock=0))}if(!this._initted){if(Po(this,u?s:m,o,n,g))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&p!==v))return this;if(d!==this._dur)return this.render(s,n,o)}if(this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(m/d),this._from&&(this.ratio=x=1-x),m&&!l&&!n&&!p&&(bt(this,"onStart"),this._tTime!==g))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;S&&S.render(s<0?s:S._dur*S._ease(m/this._dur),n,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!n&&(u&&Fs(this,s,n,o),bt(this,"onUpdate")),this._repeat&&p!==v&&this.vars.onRepeat&&!n&&this.parent&&bt(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(u&&!this._onUpdate&&Fs(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Si(this,1),!n&&!(u&&!l)&&(g||l||k)&&(bt(this,g===c?"onComplete":"onReverseComplete",!0),this._prom&&!(g<c&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},i.resetTo=function(s,n,o,l,c){jr||ft.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nn(this,d),u=this._ease(d/this._dur),C1(this,s,n,o,l,u,d,c)?this.resetTo(s,n,o,l,1):(N0(this,0),this.parent||Mo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,n){if(n===void 0&&(n="all"),!s&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Hr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,n,xi&&xi.vars.overwrite!==!0)._first||Hr(this),this.parent&&o!==this.timeline.totalDuration()&&_r(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=s?Bt(s):l,d=this._ptLookup,u=this._pt,g,m,h,p,f,v,k;if((!n||n==="all")&&r1(l,c))return n==="all"&&(this._pt=0),Hr(this);for(g=this._op=this._op||[],n!=="all"&&(Me(n)&&(f={},it(n,function(x){return f[x]=1}),n=f),n=L1(l,n)),k=l.length;k--;)if(~c.indexOf(l[k])){m=d[k],n==="all"?(g[k]=n,p=m,h={}):(h=g[k]=g[k]||{},p=n);for(f in p)v=m&&m[f],v&&((!("kill"in v.d)||v.d.kill(f)===!0)&&R0(this,v,"_pt"),delete m[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&Hr(this),this},t.to=function(s,n){return new t(s,n,arguments[2])},t.from=function(s,n){return Xr(1,arguments)},t.delayedCall=function(s,n,o,l){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},t.fromTo=function(s,n,o){return Xr(2,arguments)},t.set=function(s,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(s,n)},t.killTweensOf=function(s,n,o){return ue.killTweensOf(s,n,o)},t}($r);kt(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(a){xe[a]=function(){var t=new Fe,i=qs.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,i)}});var on=function(t,i,r){return t[i]=r},$o=function(t,i,r){return t[i](r)},M1=function(t,i,r,s){return t[i](s.fp,r)},I1=function(t,i,r){return t.setAttribute(i,r)},q0=function(t,i){return me(t[i])?$o:O0(t[i])&&t.setAttribute?I1:on},Jo=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},B1=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},an=function(t,i){var r=i._pt,s="";if(!t&&i.b)s=i.b;else if(t===1&&i.e)s=i.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+s,r=r._next;s+=i.c}i.set(i.t,i.p,s,i)},ln=function(t,i){for(var r=i._pt;r;)r.r(t,r.d),r=r._next},P1=function(t,i,r,s){for(var n=this._pt,o;n;)o=n._next,n.p===s&&n.modifier(t,i,r),n=o},z1=function(t){for(var i=this._pt,r,s;i;)s=i._next,i.p===t&&!i.op||i.op===t?R0(this,i,"_pt"):i.dep||(r=1),i=s;return!r},A1=function(t,i,r,s){s.mSet(t,i,s.m.call(s.tween,r,s.mt),s)},cn=function(t){for(var i=t._pt,r,s,n,o;i;){for(r=i._next,s=n;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:o)?i._prev._next=i:n=i,(i._next=s)?s._prev=i:o=i,i=r}t._pt=n},rt=function(){function a(i,r,s,n,o,l,c,d,u){this.t=r,this.s=n,this.c=o,this.p=s,this.r=l||Jo,this.d=c||this,this.set=d||on,this.pr=u||0,this._next=i,i&&(i._prev=this)}var t=a.prototype;return t.modifier=function(r,s,n){this.mSet=this.mSet||this.set,this.set=A1,this.m=r,this.mt=n,this.tween=s},a}();it(Ks+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Js[a]=1});xt.TweenMax=xt.TweenLite=xe;xt.TimelineLite=xt.TimelineMax=Fe;ue=new Fe({sortChildren:!1,defaults:gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=en;var Yi=[],M0={},O1=[],_o=0,D1=0,Ps=function(t){return(M0[t]||O1).map(function(i){return i()})},Xs=function(){var t=Date.now(),i=[];t-_o>2&&(Ps("matchMediaInit"),Yi.forEach(function(r){var s=r.queries,n=r.conditions,o,l,c,d;for(l in s)o=Ut.matchMedia(s[l]).matches,o&&(c=1),o!==n[l]&&(n[l]=o,d=1);d&&(r.revert(),c&&i.push(r))}),Ps("matchMediaRevert"),i.forEach(function(r){return r.onMatch(r,function(s){return r.add(null,s)})}),_o=t,Ps("matchMedia"))},Ko=function(){function a(i,r){this.selector=r&&Hs(r),this.data=[],this._r=[],this.isReverted=!1,this.id=D1++,i&&this.add(i)}var t=a.prototype;return t.add=function(r,s,n){me(r)&&(n=s,s=r,r=me);var o=this,l=function(){var d=ce,u=o.selector,g;return d&&d!==o&&d.data.push(o),n&&(o.selector=Hs(n)),ce=o,g=s.apply(o,arguments),me(g)&&o._r.push(g),ce=d,o.selector=u,o.isReverted=!1,g};return o.last=l,r===me?l(o,function(c){return o.add(null,c)}):r?o[r]=l:l},t.ignore=function(r){var s=ce;ce=null,r(this),ce=s},t.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof a?r.push.apply(r,s.getTweens()):s instanceof xe&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,s){var n=this;if(r?function(){for(var l=n.getTweens(),c=n.data.length,d;c--;)d=n.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,g){return g.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),c=n.data.length;c--;)d=n.data[c],d instanceof Fe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof xe)&&d.revert&&d.revert(r);n._r.forEach(function(u){return u(r,n)}),n.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),s)for(var o=Yi.length;o--;)Yi[o].id===this.id&&Yi.splice(o,1)},t.revert=function(r){this.kill(r||{})},a}(),R1=function(){function a(i){this.contexts=[],this.scope=i,ce&&ce.data.push(this)}var t=a.prototype;return t.add=function(r,s,n){$t(r)||(r={matches:r});var o=new Ko(0,n||this.scope),l=o.conditions={},c,d,u;ce&&!o.selector&&(o.selector=ce.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=r;for(d in r)d==="all"?u=1:(c=Ut.matchMedia(r[d]),c&&(Yi.indexOf(o)<0&&Yi.push(o),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(Xs):c.addEventListener("change",Xs)));return u&&s(o,function(g){return o.add(null,g)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},a}(),A0={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];i.forEach(function(s){return Ho(s)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,i){return ue.getTweensOf(t,i)},getProperty:function(t,i,r,s){Me(t)&&(t=Bt(t)[0]);var n=Ti(t||{}).get,o=r?Eo:Lo;return r==="native"&&(r=""),t&&(i?o((ht[i]&&ht[i].get||n)(t,i,r,s)):function(l,c,d){return o((ht[l]&&ht[l].get||n)(t,l,c,d))})},quickSetter:function(t,i,r){if(t=Bt(t),t.length>1){var s=t.map(function(u){return Ue.quickSetter(u,i,r)}),n=s.length;return function(u){for(var g=n;g--;)s[g](u)}}t=t[0]||{};var o=ht[i],l=Ti(t),c=l.harness&&(l.harness.aliases||{})[i]||i,d=o?function(u){var g=new o;fr._pt=0,g.init(t,r?u+r:u,fr,0,[t]),g.render(1,g),fr._pt&&ln(1,fr)}:l.set(t,c);return o?d:function(u){return d(t,c,r?u+r:u,l,1)}},quickTo:function(t,i,r){var s,n=Ue.to(t,kt((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),r||{})),o=function(c,d,u){return n.resetTo(i,c,d,u)};return o.tween=n,o},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,gr.ease)),ho(gr,t||{})},config:function(t){return ho(mt,t||{})},registerEffect:function(t){var i=t.name,r=t.effect,s=t.plugins,n=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(l){return l&&!ht[l]&&!xt[l]&&Gr(i+" effect requires "+l+" plugin.")}),Es[i]=function(l,c,d){return r(Bt(l),kt(c||{},n),d)},o&&(Fe.prototype[i]=function(l,c,d){return this.add(Es[i](l,$t(c)?c:(d=c)&&{},this),d)})},registerEase:function(t,i){J[t]=Vi(i)},parseEase:function(t,i){return arguments.length?Vi(t,i):J},getById:function(t){return ue.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var r=new Fe(t),s,n;for(r.smoothChildTiming=gt(t.smoothChildTiming),ue.remove(r),r._dp=0,r._time=r._tTime=ue._time,s=ue._first;s;)n=s._next,(i||!(!s._dur&&s instanceof xe&&s.vars.onComplete===s._targets[0]))&&jt(r,s,s._start-s._delay),s=n;return jt(ue,r,0),r},context:function(t,i){return t?new Ko(t,i):ce},matchMedia:function(t){return new R1(t)},matchMediaRefresh:function(){return Yi.forEach(function(t){var i=t.conditions,r,s;for(s in i)i[s]&&(i[s]=!1,r=1);r&&t.revert()})||Xs()},addEventListener:function(t,i){var r=M0[t]||(M0[t]=[]);~r.indexOf(i)||r.push(i)},removeEventListener:function(t,i){var r=M0[t],s=r&&r.indexOf(i);s>=0&&r.splice(s,1)},utils:{wrap:m1,wrapYoyo:p1,distribute:Oo,random:Ro,snap:Do,normalize:g1,getUnit:qe,clamp:d1,splitColor:Vo,toArray:Bt,selector:Hs,mapRange:No,pipe:h1,unitize:f1,interpolate:_1,shuffle:Ao},install:ko,effects:Es,ticker:ft,updateRoot:Fe.updateRoot,plugins:ht,globalTimeline:ue,core:{PropTween:rt,globals:To,Tween:xe,Timeline:Fe,Animation:$r,getCache:Ti,_removeLinkedListItem:R0,reverting:function(){return Ne},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Ws=t}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return A0[a]=xe[a]});ft.add(Fe.updateRoot);fr=A0.to({},{duration:0});var F1=function(t,i){for(var r=t._pt;r&&r.p!==i&&r.op!==i&&r.fp!==i;)r=r._next;return r},N1=function(t,i){var r=t._targets,s,n,o;for(s in i)for(n=r.length;n--;)o=t._ptLookup[n][s],o&&(o=o.d)&&(o._pt&&(o=F1(o,s)),o&&o.modifier&&o.modifier(i[s],t,r[n],s))},zs=function(t,i){return{name:t,rawVars:1,init:function(s,n,o){o._onInit=function(l){var c,d;if(Me(n)&&(c={},it(n,function(u){return c[u]=1}),n=c),i){c={};for(d in n)c[d]=i(n[d]);n=c}N1(l,n)}}}},Ue=A0.registerPlugin({name:"attr",init:function(t,i,r,s,n){var o,l,c;this.tween=r;for(o in i)c=t.getAttribute(o)||"",l=this.add(t,"setAttribute",(c||0)+"",i[o],s,n,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(t,i){for(var r=i._pt;r;)Ne?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,i){for(var r=i.length;r--;)this.add(t,r,t[r]||0,i[r],0,0,0,0,0,1)}},zs("roundProps",Vs),zs("modifiers"),zs("snap",Do))||A0;xe.version=Fe.version=Ue.version="3.12.7";xo=1;Gs()&&vr();var q1=J.Power0,H1=J.Power1,V1=J.Power2,Y1=J.Power3,X1=J.Power4,W1=J.Linear,G1=J.Quad,U1=J.Cubic,j1=J.Quart,$1=J.Quint,J1=J.Strong,K1=J.Elastic,Q1=J.Back,Z1=J.SteppedEase,ec=J.Bounce,tc=J.Sine,ic=J.Expo,rc=J.Circ;var Qo,Li,br,mn,Ji,sc,Zo,pn,nc=function(){return typeof window<"u"},di={},$i=180/Math.PI,xr=Math.PI/180,yr=Math.atan2,ea=1e8,_n=/([A-Z])/g,oc=/(left|right|width|margin|padding|x)/i,ac=/[\s,\(]\S/,Jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},un=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},lc=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},cc=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},dc=function(t,i){var r=i.s+i.c*t;i.set(i.t,i.p,~~(r+(r<0?-.5:.5))+i.u,i)},la=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},ca=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},uc=function(t,i,r){return t.style[i]=r},hc=function(t,i,r){return t.style.setProperty(i,r)},fc=function(t,i,r){return t._gsap[i]=r},gc=function(t,i,r){return t._gsap.scaleX=t._gsap.scaleY=r},mc=function(t,i,r,s,n){var o=t._gsap;o.scaleX=o.scaleY=r,o.renderTransform(n,o)},pc=function(t,i,r,s,n){var o=t._gsap;o[i]=r,o.renderTransform(n,o)},he="transform",pt=he+"Origin",_c=function a(t,i){var r=this,s=this.target,n=s.style,o=s._gsap;if(t in di&&n){if(this.tfm=this.tfm||{},t!=="transform")t=Jt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(l){return r.tfm[l]=ci(s,l)}):this.tfm[t]=o.x?o[t]:ci(s,t),t===pt&&(this.tfm.zOrigin=o.zOrigin);else return Jt.transform.split(",").forEach(function(l){return a.call(r,l,i)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pt,i,"")),t=he}(n||i)&&this.props.push(t,i,n[t])},da=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},vc=function(){var t=this.props,i=this.target,r=i.style,s=i._gsap,n,o;for(n=0;n<t.length;n+=3)t[n+1]?t[n+1]===2?i[t[n]](t[n+2]):i[t[n]]=t[n+2]:t[n+2]?r[t[n]]=t[n+2]:r.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(_n,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),n=pn(),(!n||!n.isStart)&&!r[he]&&(da(r),s.zOrigin&&r[pt]&&(r[pt]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},ua=function(t,i){var r={target:t,props:[],revert:vc,save:_c};return t._gsap||Ue.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(s){return r.save(s)}),r},ha,hn=function(t,i){var r=Li.createElementNS?Li.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Li.createElement(t);return r&&r.style?r:Li.createElement(t)},Kt=function a(t,i,r){var s=getComputedStyle(t);return s[i]||s.getPropertyValue(i.replace(_n,"-$1").toLowerCase())||s.getPropertyValue(i)||!r&&a(t,kr(i)||i,1)||""},ta="O,Moz,ms,Ms,Webkit".split(","),kr=function(t,i,r){var s=i||Ji,n=s.style,o=5;if(t in n&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ta[o]+t in n););return o<0?null:(o===3?"ms":o>=0?ta[o]:"")+t},fn=function(){nc()&&window.document&&(Qo=window,Li=Qo.document,br=Li.documentElement,Ji=hn("div")||{style:{}},sc=hn("div"),he=kr(he),pt=he+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ha=!!kr("perspective"),pn=Ue.core.reverting,mn=1)},ia=function(t){var i=t.ownerSVGElement,r=hn("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),n;s.style.display="block",r.appendChild(s),br.appendChild(r);try{n=s.getBBox()}catch{}return r.removeChild(s),br.removeChild(r),n},ra=function(t,i){for(var r=i.length;r--;)if(t.hasAttribute(i[r]))return t.getAttribute(i[r])},fa=function(t){var i,r;try{i=t.getBBox()}catch{i=ia(t),r=1}return i&&(i.width||i.height)||r||(i=ia(t)),i&&!i.width&&!i.x&&!i.y?{x:+ra(t,["x","cx","x1"])||0,y:+ra(t,["y","cy","y1"])||0,width:0,height:0}:i},ga=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fa(t))},Ki=function(t,i){if(i){var r=t.style,s;i in di&&i!==pt&&(i=he),r.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),r.removeProperty(s==="--"?i:i.replace(_n,"-$1").toLowerCase())):r.removeAttribute(i)}},Ei=function(t,i,r,s,n,o){var l=new rt(t._pt,i,r,0,1,o?ca:la);return t._pt=l,l.b=s,l.e=n,t._props.push(r),l},sa={deg:1,rad:1,turn:1},wc={grid:1,flex:1},Mi=function a(t,i,r,s){var n=parseFloat(r)||0,o=(r+"").trim().substr((n+"").length)||"px",l=Ji.style,c=oc.test(i),d=t.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),g=100,m=s==="px",h=s==="%",p,f,v,k;if(s===o||!n||sa[s]||sa[o])return n;if(o!=="px"&&!m&&(n=a(t,i,r,"px")),k=t.getCTM&&ga(t),(h||o==="%")&&(di[i]||~i.indexOf("adius")))return p=k?t.getBBox()[c?"width":"height"]:t[u],pe(h?n/p*g:n/100*p);if(l[c?"width":"height"]=g+(m?o:s),f=s!=="rem"&&~i.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,k&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Li||!f.appendChild)&&(f=Li.body),v=f._gsap,v&&h&&v.width&&c&&v.time===ft.time&&!v.uncache)return pe(n/v.width*g);if(h&&(i==="height"||i==="width")){var x=t.style[i];t.style[i]=g+s,p=t[u],x?t.style[i]=x:Ki(t,i)}else(h||o==="%")&&!wc[Kt(f,"display")]&&(l.position=Kt(t,"position")),f===t&&(l.position="static"),f.appendChild(Ji),p=Ji[u],f.removeChild(Ji),l.position="absolute";return c&&h&&(v=Ti(f),v.time=ft.time,v.width=f[u]),pe(m?p*n/g:p&&n?g/p*n:0)},ci=function(t,i,r,s){var n;return mn||fn(),i in Jt&&i!=="transform"&&(i=Jt[i],~i.indexOf(",")&&(i=i.split(",")[0])),di[i]&&i!=="transform"?(n=Zr(t,s),n=i!=="transformOrigin"?n[i]:n.svg?n.origin:V0(Kt(t,pt))+" "+n.zOrigin+"px"):(n=t.style[i],(!n||n==="auto"||s||~(n+"").indexOf("calc("))&&(n=H0[i]&&H0[i](t,i,r)||Kt(t,i)||Zs(t,i)||(i==="opacity"?1:0))),r&&!~(n+"").trim().indexOf(" ")?Mi(t,i,n,r)+r:n},yc=function(t,i,r,s){if(!r||r==="none"){var n=kr(i,t,1),o=n&&Kt(t,n,1);o&&o!==r?(i=n,r=o):i==="borderColor"&&(r=Kt(t,"borderTopColor"))}var l=new rt(this._pt,t.style,i,0,1,an),c=0,d=0,u,g,m,h,p,f,v,k,x,S,y,T;if(l.b=r,l.e=s,r+="",s+="",s==="auto"&&(f=t.style[i],t.style[i]=s,s=Kt(t,i)||s,f?t.style[i]=f:Ki(t,i)),u=[r,s],en(u),r=u[0],s=u[1],m=r.match(Xi)||[],T=s.match(Xi)||[],T.length){for(;g=Xi.exec(s);)v=g[0],x=s.substring(c,g.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),v!==(f=m[d++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),v.charAt(1)==="="&&(v=Wi(h,v)+y),k=parseFloat(v),S=v.substr((k+"").length),c=Xi.lastIndex-S.length,S||(S=S||mt.units[i]||y,c===s.length&&(s+=S,l.e+=S)),y!==S&&(h=Mi(t,i,f,S)||0),l._pt={_next:l._pt,p:x||d===1?x:",",s:h,c:k-h,m:p&&p<4||i==="zIndex"?Math.round:0});l.c=c<s.length?s.substring(c,s.length):""}else l.r=i==="display"&&s==="none"?ca:la;return js.test(s)&&(l.e=0),this._pt=l,l},na={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bc=function(t){var i=t.split(" "),r=i[0],s=i[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(t=r,r=s,s=t),i[0]=na[r]||r,i[1]=na[s]||s,i.join(" ")},xc=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var r=i.t,s=r.style,n=i.u,o=r._gsap,l,c,d;if(n==="all"||n===!0)s.cssText="",c=1;else for(n=n.split(","),d=n.length;--d>-1;)l=n[d],di[l]&&(c=1,l=l==="transformOrigin"?pt:he),Ki(r,l);c&&(Ki(r,he),o&&(o.svg&&r.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Zr(r,1),o.uncache=1,da(s)))}},H0={clearProps:function(t,i,r,s,n){if(n.data!=="isFromStart"){var o=t._pt=new rt(t._pt,i,r,0,0,xc);return o.u=s,o.pr=-10,o.tween=n,t._props.push(r),1}}},Qr=[1,0,0,1,0,0],ma={},pa=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},oa=function(t){var i=Kt(t,he);return pa(i)?Qr:i.substr(7).match(Us).map(pe)},vn=function(t,i){var r=t._gsap||Ti(t),s=t.style,n=oa(t),o,l,c,d;return r.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,n=[c.a,c.b,c.c,c.d,c.e,c.f],n.join(",")==="1,0,0,1,0,0"?Qr:n):(n===Qr&&!t.offsetParent&&t!==br&&!r.svg&&(c=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,l=t.nextElementSibling,br.appendChild(t)),n=oa(t),c?s.display=c:Ki(t,"display"),d&&(l?o.insertBefore(t,l):o?o.appendChild(t):br.removeChild(t))),i&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},gn=function(t,i,r,s,n,o){var l=t._gsap,c=n||vn(t,!0),d=l.xOrigin||0,u=l.yOrigin||0,g=l.xOffset||0,m=l.yOffset||0,h=c[0],p=c[1],f=c[2],v=c[3],k=c[4],x=c[5],S=i.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,L,b,M,C;r?c!==Qr&&(b=h*v-p*f)&&(M=y*(v/b)+T*(-f/b)+(f*x-v*k)/b,C=y*(-p/b)+T*(h/b)-(h*x-p*k)/b,y=M,T=C):(L=fa(t),y=L.x+(~S[0].indexOf("%")?y/100*L.width:y),T=L.y+(~(S[1]||S[0]).indexOf("%")?T/100*L.height:T)),s||s!==!1&&l.smooth?(k=y-d,x=T-u,l.xOffset=g+(k*h+x*f)-k,l.yOffset=m+(k*p+x*v)-x):l.xOffset=l.yOffset=0,l.xOrigin=y,l.yOrigin=T,l.smooth=!!s,l.origin=i,l.originIsAbsolute=!!r,t.style[pt]="0px 0px",o&&(Ei(o,l,"xOrigin",d,y),Ei(o,l,"yOrigin",u,T),Ei(o,l,"xOffset",g,l.xOffset),Ei(o,l,"yOffset",m,l.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Zr=function(t,i){var r=t._gsap||new tn(t);if("x"in r&&!i&&!r.uncache)return r;var s=t.style,n=r.scaleX<0,o="px",l="deg",c=getComputedStyle(t),d=Kt(t,pt)||"0",u,g,m,h,p,f,v,k,x,S,y,T,L,b,M,C,E,R,I,U,W,K,j,O,Z,oe,_,ae,Qe,Ot,fe,Oe;return u=g=m=f=v=k=x=S=y=0,h=p=1,r.svg=!!(t.getCTM&&ga(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(s[he]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[he]!=="none"?c[he]:"")),s.scale=s.rotate=s.translate="none"),b=vn(t,r.svg),r.svg&&(r.uncache?(Z=t.getBBox(),d=r.xOrigin-Z.x+"px "+(r.yOrigin-Z.y)+"px",O=""):O=!i&&t.getAttribute("data-svg-origin"),gn(t,O||d,!!O||r.originIsAbsolute,r.smooth!==!1,b)),T=r.xOrigin||0,L=r.yOrigin||0,b!==Qr&&(R=b[0],I=b[1],U=b[2],W=b[3],u=K=b[4],g=j=b[5],b.length===6?(h=Math.sqrt(R*R+I*I),p=Math.sqrt(W*W+U*U),f=R||I?yr(I,R)*$i:0,x=U||W?yr(U,W)*$i+f:0,x&&(p*=Math.abs(Math.cos(x*xr))),r.svg&&(u-=T-(T*R+L*U),g-=L-(T*I+L*W))):(Oe=b[6],Ot=b[7],_=b[8],ae=b[9],Qe=b[10],fe=b[11],u=b[12],g=b[13],m=b[14],M=yr(Oe,Qe),v=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=K*C+_*E,Z=j*C+ae*E,oe=Oe*C+Qe*E,_=K*-E+_*C,ae=j*-E+ae*C,Qe=Oe*-E+Qe*C,fe=Ot*-E+fe*C,K=O,j=Z,Oe=oe),M=yr(-U,Qe),k=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=R*C-_*E,Z=I*C-ae*E,oe=U*C-Qe*E,fe=W*E+fe*C,R=O,I=Z,U=oe),M=yr(I,R),f=M*$i,M&&(C=Math.cos(M),E=Math.sin(M),O=R*C+I*E,Z=K*C+j*E,I=I*C-R*E,j=j*C-K*E,R=O,K=Z),v&&Math.abs(v)+Math.abs(f)>359.9&&(v=f=0,k=180-k),h=pe(Math.sqrt(R*R+I*I+U*U)),p=pe(Math.sqrt(j*j+Oe*Oe)),M=yr(K,j),x=Math.abs(M)>2e-4?M*$i:0,y=fe?1/(fe<0?-fe:fe):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!pa(Kt(t,he)),O&&t.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(n?(h*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),i=i||r.uncache,r.x=u-((r.xPercent=u&&(!i&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+o,r.y=g-((r.yPercent=g&&(!i&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+o,r.z=m+o,r.scaleX=pe(h),r.scaleY=pe(p),r.rotation=pe(f)+l,r.rotationX=pe(v)+l,r.rotationY=pe(k)+l,r.skewX=x+l,r.skewY=S+l,r.transformPerspective=y+o,(r.zOrigin=parseFloat(d.split(" ")[2])||!i&&r.zOrigin||0)&&(s[pt]=V0(d)),r.xOffset=r.yOffset=0,r.force3D=mt.force3D,r.renderTransform=r.svg?Tc:ha?_a:kc,r.uncache=0,r},V0=function(t){return(t=t.split(" "))[0]+" "+t[1]},dn=function(t,i,r){var s=qe(i);return pe(parseFloat(i)+parseFloat(Mi(t,"x",r+"px",s)))+s},kc=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,_a(t,i)},Ui="0deg",Kr="0px",ji=") ",_a=function(t,i){var r=i||this,s=r.xPercent,n=r.yPercent,o=r.x,l=r.y,c=r.z,d=r.rotation,u=r.rotationY,g=r.rotationX,m=r.skewX,h=r.skewY,p=r.scaleX,f=r.scaleY,v=r.transformPerspective,k=r.force3D,x=r.target,S=r.zOrigin,y="",T=k==="auto"&&t&&t!==1||k===!0;if(S&&(g!==Ui||u!==Ui)){var L=parseFloat(u)*xr,b=Math.sin(L),M=Math.cos(L),C;L=parseFloat(g)*xr,C=Math.cos(L),o=dn(x,o,b*C*-S),l=dn(x,l,-Math.sin(L)*-S),c=dn(x,c,M*C*-S+S)}v!==Kr&&(y+="perspective("+v+ji),(s||n)&&(y+="translate("+s+"%, "+n+"%) "),(T||o!==Kr||l!==Kr||c!==Kr)&&(y+=c!==Kr||T?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+ji),d!==Ui&&(y+="rotate("+d+ji),u!==Ui&&(y+="rotateY("+u+ji),g!==Ui&&(y+="rotateX("+g+ji),(m!==Ui||h!==Ui)&&(y+="skew("+m+", "+h+ji),(p!==1||f!==1)&&(y+="scale("+p+", "+f+ji),x.style[he]=y||"translate(0, 0)"},Tc=function(t,i){var r=i||this,s=r.xPercent,n=r.yPercent,o=r.x,l=r.y,c=r.rotation,d=r.skewX,u=r.skewY,g=r.scaleX,m=r.scaleY,h=r.target,p=r.xOrigin,f=r.yOrigin,v=r.xOffset,k=r.yOffset,x=r.forceCSS,S=parseFloat(o),y=parseFloat(l),T,L,b,M,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=xr,d*=xr,T=Math.cos(c)*g,L=Math.sin(c)*g,b=Math.sin(c-d)*-m,M=Math.cos(c-d)*m,d&&(u*=xr,C=Math.tan(d-u),C=Math.sqrt(1+C*C),b*=C,M*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),T*=C,L*=C)),T=pe(T),L=pe(L),b=pe(b),M=pe(M)):(T=g,M=m,L=b=0),(S&&!~(o+"").indexOf("px")||y&&!~(l+"").indexOf("px"))&&(S=Mi(h,"x",o,"px"),y=Mi(h,"y",l,"px")),(p||f||v||k)&&(S=pe(S+p-(p*T+f*b)+v),y=pe(y+f-(p*L+f*M)+k)),(s||n)&&(C=h.getBBox(),S=pe(S+s/100*C.width),y=pe(y+n/100*C.height)),C="matrix("+T+","+L+","+b+","+M+","+S+","+y+")",h.setAttribute("transform",C),x&&(h.style[he]=C)},Sc=function(t,i,r,s,n){var o=360,l=Me(n),c=parseFloat(n)*(l&&~n.indexOf("rad")?$i:1),d=c-s,u=s+d+"deg",g,m;return l&&(g=n.split("_")[1],g==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),g==="cw"&&d<0?d=(d+o*ea)%o-~~(d/o)*o:g==="ccw"&&d>0&&(d=(d-o*ea)%o-~~(d/o)*o)),t._pt=m=new rt(t._pt,i,r,s,d,lc),m.e=u,m.u="deg",t._props.push(r),m},aa=function(t,i){for(var r in i)t[r]=i[r];return t},Cc=function(t,i,r){var s=aa({},r._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=r.style,l,c,d,u,g,m,h,p;s.svg?(d=r.getAttribute("transform"),r.setAttribute("transform",""),o[he]=i,l=Zr(r,1),Ki(r,he),r.setAttribute("transform",d)):(d=getComputedStyle(r)[he],o[he]=i,l=Zr(r,1),o[he]=d);for(c in di)d=s[c],u=l[c],d!==u&&n.indexOf(c)<0&&(h=qe(d),p=qe(u),g=h!==p?Mi(r,c,d,p):parseFloat(d),m=parseFloat(u),t._pt=new rt(t._pt,l,c,g,m-g,un),t._pt.u=p||0,t._props.push(c));aa(l,s)};it("padding,margin,Width,Radius",function(a,t){var i="Top",r="Right",s="Bottom",n="Left",o=(t<3?[i,r,s,n]:[i+n,i+r,s+r,s+n]).map(function(l){return t<2?a+l:"border"+l+a});H0[t>1?"border"+a:a]=function(l,c,d,u,g){var m,h;if(arguments.length<4)return m=o.map(function(p){return ci(l,p,d)}),h=m.join(" "),h.split(m[0]).length===5?m[0]:h;m=(u+"").split(" "),h={},o.forEach(function(p,f){return h[p]=m[f]=m[f]||m[(f-1)/2|0]}),l.init(c,h,g)}});var wn={name:"css",register:fn,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,r,s,n){var o=this._props,l=t.style,c=r.vars.startAt,d,u,g,m,h,p,f,v,k,x,S,y,T,L,b,M;mn||fn(),this.styles=this.styles||ua(t),M=this.styles.props,this.tween=r;for(f in i)if(f!=="autoRound"&&(u=i[f],!(ht[f]&&sn(f,i,r,s,t,n)))){if(h=typeof u,p=H0[f],h==="function"&&(u=u.call(r,s,t,n),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=wr(u)),p)p(this,t,f,u,r)&&(b=1);else if(f.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",ai.lastIndex=0,ai.test(d)||(v=qe(d),k=qe(u)),k?v!==k&&(d=Mi(t,f,d,k)+k):v&&(u+=v),this.add(l,"setProperty",d,u,s,n,0,0,f),o.push(f),M.push(f,0,l[f]);else if(h!=="undefined"){if(c&&f in c?(d=typeof c[f]=="function"?c[f].call(r,s,t,n):c[f],Me(d)&&~d.indexOf("random(")&&(d=wr(d)),qe(d+"")||d==="auto"||(d+=mt.units[f]||qe(ci(t,f))||""),(d+"").charAt(1)==="="&&(d=ci(t,f))):d=ci(t,f),m=parseFloat(d),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),g=parseFloat(u),f in Jt&&(f==="autoAlpha"&&(m===1&&ci(t,"visibility")==="hidden"&&g&&(m=0),M.push("visibility",0,l.visibility),Ei(this,l,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),f!=="scale"&&f!=="transform"&&(f=Jt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),S=f in di,S){if(this.styles.save(f),y||(T=t._gsap,T.renderTransform&&!i.parseTransform||Zr(t,i.parseTransform),L=i.smoothOrigin!==!1&&T.smooth,y=this._pt=new rt(this._pt,l,he,0,1,T.renderTransform,T,0,-1),y.dep=1),f==="scale")this._pt=new rt(this._pt,T,"scaleY",T.scaleY,(x?Wi(T.scaleY,x+g):g)-T.scaleY||0,un),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){M.push(pt,0,l[pt]),u=bc(u),T.svg?gn(t,u,0,L,0,this):(k=parseFloat(u.split(" ")[2])||0,k!==T.zOrigin&&Ei(this,T,"zOrigin",T.zOrigin,k),Ei(this,l,f,V0(d),V0(u)));continue}else if(f==="svgOrigin"){gn(t,u,1,L,0,this);continue}else if(f in ma){Sc(this,T,f,m,x?Wi(m,x+u):u);continue}else if(f==="smoothOrigin"){Ei(this,T,"smooth",T.smooth,u);continue}else if(f==="force3D"){T[f]=u;continue}else if(f==="transform"){Cc(this,u,t);continue}}else f in l||(f=kr(f)||f);if(S||(g||g===0)&&(m||m===0)&&!ac.test(u)&&f in l)v=(d+"").substr((m+"").length),g||(g=0),k=qe(u)||(f in mt.units?mt.units[f]:v),v!==k&&(m=Mi(t,f,d,k)),this._pt=new rt(this._pt,S?T:l,f,m,(x?Wi(m,x+g):g)-m,!S&&(k==="px"||f==="zIndex")&&i.autoRound!==!1?dc:un),this._pt.u=k||0,v!==k&&k!=="%"&&(this._pt.b=d,this._pt.r=cc);else if(f in l)yc.call(this,t,f,d,x?x+u:u);else if(f in t)this.add(t,f,d||t[f],x?x+u:u,s,n);else if(f!=="parseTransform"){D0(f,u);continue}S||(f in l?M.push(f,0,l[f]):typeof t[f]=="function"?M.push(f,2,t[f]()):M.push(f,1,d||t[f])),o.push(f)}}b&&cn(this)},render:function(t,i){if(i.tween._time||!pn())for(var r=i._pt;r;)r.r(t,r.d),r=r._next;else i.styles.revert()},get:ci,aliases:Jt,getSetter:function(t,i,r){var s=Jt[i];return s&&s.indexOf(",")<0&&(i=s),i in di&&i!==pt&&(t._gsap.x||ci(t,"x"))?r&&Zo===r?i==="scale"?gc:fc:(Zo=r||{})&&(i==="scale"?mc:pc):t.style&&!O0(t.style[i])?uc:~i.indexOf("-")?hc:q0(t,i)},core:{_removeProperty:Ki,_getMatrix:vn}};Ue.utils.checkPrefix=kr;Ue.core.getStyleSaver=ua;(function(a,t,i,r){var s=it(a+","+t+","+i,function(n){di[n]=1});it(t,function(n){mt.units[n]="deg",ma[n]=1}),Jt[s[13]]=a+","+t,it(r,function(n){var o=n.split(":");Jt[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){mt.units[a]="px"});Ue.registerPlugin(wn);var Ii=Ue.registerPlugin(wn)||Ue,Hd=Ii.core.Tween;function va(a,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function Lc(a,t,i){return t&&va(a.prototype,t),i&&va(a,i),a}var He,W0,Ec,Tt,Bi,Pi,Sr,ya,Qi,t0,ba,ui,Ht,xa,ka=function(){return He||typeof window<"u"&&(He=window.gsap)&&He.registerPlugin&&He},Ta=1,Tr=[],V=[],Vt=[],i0=Date.now,yn=function(t,i){return i},Mc=function(){var t=t0.core,i=t.bridge||{},r=t._scrollers,s=t._proxies;r.push.apply(r,V),s.push.apply(s,Vt),V=r,Vt=s,yn=function(o,l){return i[o](l)}},fi=function(t,i){return~Vt.indexOf(t)&&Vt[Vt.indexOf(t)+1][i]},r0=function(t){return!!~ba.indexOf(t)},nt=function(t,i,r,s,n){return t.addEventListener(i,r,{passive:s!==!1,capture:!!n})},st=function(t,i,r,s){return t.removeEventListener(i,r,!!s)},Y0="scrollLeft",X0="scrollTop",bn=function(){return ui&&ui.isPressed||V.cache++},G0=function(t,i){var r=function s(n){if(n||n===0){Ta&&(Tt.history.scrollRestoration="manual");var o=ui&&ui.isPressed;n=s.v=Math.round(n)||(ui&&ui.iOS?1:0),t(n),s.cacheID=V.cache,o&&yn("ss",n)}else(i||V.cache!==s.cacheID||yn("ref"))&&(s.cacheID=V.cache,s.v=t());return s.v+s.offset};return r.offset=0,t&&r},je={s:Y0,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G0(function(a){return arguments.length?Tt.scrollTo(a,Ce.sc()):Tt.pageXOffset||Bi[Y0]||Pi[Y0]||Sr[Y0]||0})},Ce={s:X0,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:je,sc:G0(function(a){return arguments.length?Tt.scrollTo(je.sc(),a):Tt.pageYOffset||Bi[X0]||Pi[X0]||Sr[X0]||0})},ot=function(t,i){return(i&&i._ctx&&i._ctx.selector||He.utils.toArray)(t)[0]||(typeof t=="string"&&He.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},hi=function(t,i){var r=i.s,s=i.sc;r0(t)&&(t=Bi.scrollingElement||Pi);var n=V.indexOf(t),o=s===Ce.sc?1:2;!~n&&(n=V.push(t)-1),V[n+o]||nt(t,"scroll",bn);var l=V[n+o],c=l||(V[n+o]=G0(fi(t,r),!0)||(r0(t)?s:G0(function(d){return arguments.length?t[r]=d:t[r]})));return c.target=t,l||(c.smooth=He.getProperty(t,"scrollBehavior")==="smooth"),c},U0=function(t,i,r){var s=t,n=t,o=i0(),l=o,c=i||50,d=Math.max(500,c*3),u=function(p,f){var v=i0();f||v-o>c?(n=s,s=p,l=o,o=v):r?s+=p:s=n+(p-n)/(v-l)*(o-l)},g=function(){n=s=r?0:s,l=o=0},m=function(p){var f=l,v=n,k=i0();return(p||p===0)&&p!==s&&u(p),o===l||k-l>d?0:(s+(r?v:-v))/((r?k:o)-f)*1e3};return{update:u,reset:g,getVelocity:m}},e0=function(t,i){return i&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wa=function(t){var i=Math.max.apply(Math,t),r=Math.min.apply(Math,t);return Math.abs(i)>=Math.abs(r)?i:r},Sa=function(){t0=He.core.globals().ScrollTrigger,t0&&t0.core&&Mc()},Ca=function(t){return He=t||ka(),!W0&&He&&typeof document<"u"&&document.body&&(Tt=window,Bi=document,Pi=Bi.documentElement,Sr=Bi.body,ba=[Tt,Bi,Pi,Sr],Ec=He.utils.clamp,xa=He.core.context||function(){},Qi="onpointerenter"in Sr?"pointer":"mouse",ya=_e.isTouch=Tt.matchMedia&&Tt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ht=_e.eventTypes=("ontouchstart"in Pi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ta=0},500),Sa(),W0=1),W0};je.op=Ce;V.cache=0;var _e=function(){function a(i){this.init(i)}var t=a.prototype;return t.init=function(r){W0||Ca(He)||console.warn("Please gsap.registerPlugin(Observer)"),t0||Sa();var s=r.tolerance,n=r.dragMinimum,o=r.type,l=r.target,c=r.lineHeight,d=r.debounce,u=r.preventDefault,g=r.onStop,m=r.onStopDelay,h=r.ignore,p=r.wheelSpeed,f=r.event,v=r.onDragStart,k=r.onDragEnd,x=r.onDrag,S=r.onPress,y=r.onRelease,T=r.onRight,L=r.onLeft,b=r.onUp,M=r.onDown,C=r.onChangeX,E=r.onChangeY,R=r.onChange,I=r.onToggleX,U=r.onToggleY,W=r.onHover,K=r.onHoverEnd,j=r.onMove,O=r.ignoreCheck,Z=r.isNormalizer,oe=r.onGestureStart,_=r.onGestureEnd,ae=r.onWheel,Qe=r.onEnable,Ot=r.onDisable,fe=r.onClick,Oe=r.scrollSpeed,Ze=r.capture,ke=r.allowClicks,et=r.lockAxis,Ve=r.onLockAxis;this.target=l=ot(l)||Pi,this.vars=r,h&&(h=He.utils.toArray(h)),s=s||1e-9,n=n||0,p=p||1,Oe=Oe||1,o=o||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(Tt.getComputedStyle(Sr).lineHeight)||22);var _i,tt,dt,Q,ve,ut,_t,w=this,vt=0,ei=0,vi=r.passive||!u&&r.passive!==!1,we=hi(l,je),ti=hi(l,Ce),wi=we(),Oi=ti(),Be=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ht[0]==="pointerdown",yi=r0(l),ye=l.ownerDocument||Bi,Dt=[0,0,0],Et=[0,0,0],ii=0,zr=function(){return ii=i0()},Te=function(A,ee){return(w.event=A)&&h&&~h.indexOf(A.target)||ee&&Be&&A.pointerType!=="touch"||O&&O(A,ee)},w0=function(){w._vx.reset(),w._vy.reset(),tt.pause(),g&&g(w)},ri=function(){var A=w.deltaX=wa(Dt),ee=w.deltaY=wa(Et),B=Math.abs(A)>=s,F=Math.abs(ee)>=s;R&&(B||F)&&R(w,A,ee,Dt,Et),B&&(T&&w.deltaX>0&&T(w),L&&w.deltaX<0&&L(w),C&&C(w),I&&w.deltaX<0!=vt<0&&I(w),vt=w.deltaX,Dt[0]=Dt[1]=Dt[2]=0),F&&(M&&w.deltaY>0&&M(w),b&&w.deltaY<0&&b(w),E&&E(w),U&&w.deltaY<0!=ei<0&&U(w),ei=w.deltaY,Et[0]=Et[1]=Et[2]=0),(Q||dt)&&(j&&j(w),dt&&(v&&dt===1&&v(w),x&&x(w),dt=0),Q=!1),ut&&!(ut=!1)&&Ve&&Ve(w),ve&&(ae(w),ve=!1),_i=0},cr=function(A,ee,B){Dt[B]+=A,Et[B]+=ee,w._vx.update(A),w._vy.update(ee),d?_i||(_i=requestAnimationFrame(ri)):ri()},dr=function(A,ee){et&&!_t&&(w.axis=_t=Math.abs(A)>Math.abs(ee)?"x":"y",ut=!0),_t!=="y"&&(Dt[2]+=A,w._vx.update(A,!0)),_t!=="x"&&(Et[2]+=ee,w._vy.update(ee,!0)),d?_i||(_i=requestAnimationFrame(ri)):ri()},bi=function(A){if(!Te(A,1)){A=e0(A,u);var ee=A.clientX,B=A.clientY,F=ee-w.x,z=B-w.y,N=w.isDragging;w.x=ee,w.y=B,(N||(F||z)&&(Math.abs(w.startX-ee)>=n||Math.abs(w.startY-B)>=n))&&(dt=N?2:1,N||(w.isDragging=!0),dr(F,z))}},Di=w.onPress=function(q){Te(q,1)||q&&q.button||(w.axis=_t=null,tt.pause(),w.isPressed=!0,q=e0(q),vt=ei=0,w.startX=w.x=q.clientX,w.startY=w.y=q.clientY,w._vx.reset(),w._vy.reset(),nt(Z?l:ye,Ht[1],bi,vi,!0),w.deltaX=w.deltaY=0,S&&S(w))},G=w.onRelease=function(q){if(!Te(q,1)){st(Z?l:ye,Ht[1],bi,!0);var A=!isNaN(w.y-w.startY),ee=w.isDragging,B=ee&&(Math.abs(w.x-w.startX)>3||Math.abs(w.y-w.startY)>3),F=e0(q);!B&&A&&(w._vx.reset(),w._vy.reset(),u&&ke&&He.delayedCall(.08,function(){if(i0()-ii>300&&!q.defaultPrevented){if(q.target.click)q.target.click();else if(ye.createEvent){var z=ye.createEvent("MouseEvents");z.initMouseEvent("click",!0,!0,Tt,1,F.screenX,F.screenY,F.clientX,F.clientY,!1,!1,!1,!1,0,null),q.target.dispatchEvent(z)}}})),w.isDragging=w.isGesturing=w.isPressed=!1,g&&ee&&!Z&&tt.restart(!0),dt&&ri(),k&&ee&&k(w),y&&y(w,B)}},Ri=function(A){return A.touches&&A.touches.length>1&&(w.isGesturing=!0)&&oe(A,w.isDragging)},Rt=function(){return(w.isGesturing=!1)||_(w)},Ft=function(A){if(!Te(A)){var ee=we(),B=ti();cr((ee-wi)*Oe,(B-Oi)*Oe,1),wi=ee,Oi=B,g&&tt.restart(!0)}},Nt=function(A){if(!Te(A)){A=e0(A,u),ae&&(ve=!0);var ee=(A.deltaMode===1?c:A.deltaMode===2?Tt.innerHeight:1)*p;cr(A.deltaX*ee,A.deltaY*ee,0),g&&!Z&&tt.restart(!0)}},Fi=function(A){if(!Te(A)){var ee=A.clientX,B=A.clientY,F=ee-w.x,z=B-w.y;w.x=ee,w.y=B,Q=!0,g&&tt.restart(!0),(F||z)&&dr(F,z)}},ur=function(A){w.event=A,W(w)},si=function(A){w.event=A,K(w)},Ar=function(A){return Te(A)||e0(A,u)&&fe(w)};tt=w._dc=He.delayedCall(m||.25,w0).pause(),w.deltaX=w.deltaY=0,w._vx=U0(0,50,!0),w._vy=U0(0,50,!0),w.scrollX=we,w.scrollY=ti,w.isDragging=w.isGesturing=w.isPressed=!1,xa(this),w.enable=function(q){return w.isEnabled||(nt(yi?ye:l,"scroll",bn),o.indexOf("scroll")>=0&&nt(yi?ye:l,"scroll",Ft,vi,Ze),o.indexOf("wheel")>=0&&nt(l,"wheel",Nt,vi,Ze),(o.indexOf("touch")>=0&&ya||o.indexOf("pointer")>=0)&&(nt(l,Ht[0],Di,vi,Ze),nt(ye,Ht[2],G),nt(ye,Ht[3],G),ke&&nt(l,"click",zr,!0,!0),fe&&nt(l,"click",Ar),oe&&nt(ye,"gesturestart",Ri),_&&nt(ye,"gestureend",Rt),W&&nt(l,Qi+"enter",ur),K&&nt(l,Qi+"leave",si),j&&nt(l,Qi+"move",Fi)),w.isEnabled=!0,w.isDragging=w.isGesturing=w.isPressed=Q=dt=!1,w._vx.reset(),w._vy.reset(),wi=we(),Oi=ti(),q&&q.type&&Di(q),Qe&&Qe(w)),w},w.disable=function(){w.isEnabled&&(Tr.filter(function(q){return q!==w&&r0(q.target)}).length||st(yi?ye:l,"scroll",bn),w.isPressed&&(w._vx.reset(),w._vy.reset(),st(Z?l:ye,Ht[1],bi,!0)),st(yi?ye:l,"scroll",Ft,Ze),st(l,"wheel",Nt,Ze),st(l,Ht[0],Di,Ze),st(ye,Ht[2],G),st(ye,Ht[3],G),st(l,"click",zr,!0),st(l,"click",Ar),st(ye,"gesturestart",Ri),st(ye,"gestureend",Rt),st(l,Qi+"enter",ur),st(l,Qi+"leave",si),st(l,Qi+"move",Fi),w.isEnabled=w.isPressed=w.isDragging=!1,Ot&&Ot(w))},w.kill=w.revert=function(){w.disable();var q=Tr.indexOf(w);q>=0&&Tr.splice(q,1),ui===w&&(ui=0)},Tr.push(w),Z&&r0(l)&&(ui=w),w.enable(f)},Lc(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();_e.version="3.12.7";_e.create=function(a){return new _e(a)};_e.register=Ca;_e.getAll=function(){return Tr.slice()};_e.getById=function(a){return Tr.filter(function(t){return t.vars.id===a})[0]};ka()&&He.registerPlugin(_e);var P,Er,X,ne,Lt,te,Dn,cs,p0,d0,n0,j0,$e,fs,Mn,lt,La,Ea,Mr,Xa,xn,Wa,at,In,Ga,Ua,zi,Bn,Rn,Ir,Fn,ds,Pn,kn,$0=1,Je=Date.now,Tn=Je(),At=0,o0=0,Ma=function(t,i,r){var s=Ct(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return r["_"+i+"Clamp"]=s,s?t.substr(6,t.length-7):t},Ia=function(t,i){return i&&(!Ct(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Ic=function a(){return o0&&requestAnimationFrame(a)},Ba=function(){return fs=1},Pa=function(){return fs=0},Qt=function(t){return t},a0=function(t){return Math.round(t*1e5)/1e5||0},ja=function(){return typeof window<"u"},$a=function(){return P||ja()&&(P=window.gsap)&&P.registerPlugin&&P},sr=function(t){return!!~Dn.indexOf(t)},Ja=function(t){return(t==="Height"?Fn:X["inner"+t])||Lt["client"+t]||te["client"+t]},Ka=function(t){return fi(t,"getBoundingClientRect")||(sr(t)?function(){return ls.width=X.innerWidth,ls.height=Fn,ls}:function(){return gi(t)})},Bc=function(t,i,r){var s=r.d,n=r.d2,o=r.a;return(o=fi(t,"getBoundingClientRect"))?function(){return o()[s]}:function(){return(i?Ja(n):t["client"+n])||0}},Pc=function(t,i){return!i||~Vt.indexOf(t)?Ka(t):function(){return ls}},Zt=function(t,i){var r=i.s,s=i.d2,n=i.d,o=i.a;return Math.max(0,(r="scroll"+s)&&(o=fi(t,r))?o()-Ka(t)()[n]:sr(t)?(Lt[r]||te[r])-Ja(s):t[r]-t["offset"+s])},J0=function(t,i){for(var r=0;r<Mr.length;r+=3)(!i||~i.indexOf(Mr[r+1]))&&t(Mr[r],Mr[r+1],Mr[r+2])},Ct=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},l0=function(t){return typeof t=="number"},Zi=function(t){return typeof t=="object"},s0=function(t,i,r){return t&&t.progress(i?0:1)&&r&&t.pause()},Sn=function(t,i){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return i(t)}):i(t);r&&r.totalTime&&(t.callbackAnimation=r)}},Cr=Math.abs,Qa="left",Za="top",Nn="right",qn="bottom",tr="width",ir="height",u0="Right",h0="Left",f0="Top",g0="Bottom",Le="padding",Pt="margin",Pr="Width",Hn="Height",Ie="px",zt=function(t){return X.getComputedStyle(t)},zc=function(t){var i=zt(t).position;t.style.position=i==="absolute"||i==="fixed"?i:"relative"},za=function(t,i){for(var r in i)r in t||(t[r]=i[r]);return t},gi=function(t,i){var r=i&&zt(t)[Mn]!=="matrix(1, 0, 0, 1, 0, 0)"&&P.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect();return r&&r.progress(0).kill(),s},us=function(t,i){var r=i.d2;return t["offset"+r]||t["client"+r]||0},el=function(t){var i=[],r=t.labels,s=t.duration(),n;for(n in r)i.push(r[n]/s);return i},Ac=function(t){return function(i){return P.utils.snap(el(t),i)}},Vn=function(t){var i=P.utils.snap(t),r=Array.isArray(t)&&t.slice(0).sort(function(s,n){return s-n});return r?function(s,n,o){o===void 0&&(o=.001);var l;if(!n)return i(s);if(n>0){for(s-=o,l=0;l<r.length;l++)if(r[l]>=s)return r[l];return r[l-1]}else for(l=r.length,s+=o;l--;)if(r[l]<=s)return r[l];return r[0]}:function(s,n,o){o===void 0&&(o=.001);var l=i(s);return!n||Math.abs(l-s)<o||l-s<0==n<0?l:i(n<0?s-t:s+t)}},Oc=function(t){return function(i,r){return Vn(el(t))(i,r.direction)}},K0=function(t,i,r,s){return r.split(",").forEach(function(n){return t(i,n,s)})},Ae=function(t,i,r,s,n){return t.addEventListener(i,r,{passive:!s,capture:!!n})},ze=function(t,i,r,s){return t.removeEventListener(i,r,!!s)},Q0=function(t,i,r){r=r&&r.wheelHandler,r&&(t(i,"wheel",r),t(i,"touchmove",r))},Aa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Z0={toggleActions:"play",anticipatePin:0},hs={top:0,left:0,center:.5,bottom:1,right:1},ss=function(t,i){if(Ct(t)){var r=t.indexOf("="),s=~r?+(t.charAt(r-1)+1)*parseFloat(t.substr(r+1)):0;~r&&(t.indexOf("%")>r&&(s*=i/100),t=t.substr(0,r-1)),t=s+(t in hs?hs[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0)}return t},es=function(t,i,r,s,n,o,l,c){var d=n.startColor,u=n.endColor,g=n.fontSize,m=n.indent,h=n.fontWeight,p=ne.createElement("div"),f=sr(r)||fi(r,"pinType")==="fixed",v=t.indexOf("scroller")!==-1,k=f?te:r,x=t.indexOf("start")!==-1,S=x?d:u,y="border-color:"+S+";font-size:"+g+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((v||c)&&f?"fixed;":"absolute;"),(v||c||!f)&&(y+=(s===Ce?Nn:qn)+":"+(o+parseFloat(m))+"px;"),l&&(y+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(i?" marker-"+i:"")),p.style.cssText=y,p.innerText=i||i===0?t+"-"+i:t,k.children[0]?k.insertBefore(p,k.children[0]):k.appendChild(p),p._offset=p["offset"+s.op.d2],ns(p,0,s,x),p},ns=function(t,i,r,s){var n={display:"block"},o=r[s?"os2":"p2"],l=r[s?"p2":"os2"];t._isFlipped=s,n[r.a+"Percent"]=s?-100:0,n[r.a]=s?"1px":0,n["border"+o+Pr]=1,n["border"+l+Pr]=0,n[r.p]=i+"px",P.set(t,n)},Y=[],zn={},_0,Oa=function(){return Je()-At>34&&(_0||(_0=requestAnimationFrame(mi)))},Lr=function(){(!at||!at.isPressed||at.startX>te.clientWidth)&&(V.cache++,at?_0||(_0=requestAnimationFrame(mi)):mi(),At||or("scrollStart"),At=Je())},Cn=function(){Ua=X.innerWidth,Ga=X.innerHeight},c0=function(t){V.cache++,(t===!0||!$e&&!Wa&&!ne.fullscreenElement&&!ne.webkitFullscreenElement&&(!In||Ua!==X.innerWidth||Math.abs(X.innerHeight-Ga)>X.innerHeight*.25))&&cs.restart(!0)},nr={},Dc=[],tl=function a(){return ze(H,"scrollEnd",a)||er(!0)},or=function(t){return nr[t]&&nr[t].map(function(i){return i()})||Dc},St=[],il=function(t){for(var i=0;i<St.length;i+=5)(!t||St[i+4]&&St[i+4].query===t)&&(St[i].style.cssText=St[i+1],St[i].getBBox&&St[i].setAttribute("transform",St[i+2]||""),St[i+3].uncache=1)},Yn=function(t,i){var r;for(lt=0;lt<Y.length;lt++)r=Y[lt],r&&(!i||r._ctx===i)&&(t?r.kill(1):r.revert(!0,!0));ds=!0,i&&il(i),i||or("revert")},rl=function(t,i){V.cache++,(i||!ct)&&V.forEach(function(r){return Ke(r)&&r.cacheID++&&(r.rec=0)}),Ct(t)&&(X.history.scrollRestoration=Rn=t)},ct,rr=0,Da,Rc=function(){if(Da!==rr){var t=Da=rr;requestAnimationFrame(function(){return t===rr&&er(!0)})}},sl=function(){te.appendChild(Ir),Fn=!at&&Ir.offsetHeight||X.innerHeight,te.removeChild(Ir)},Ra=function(t){return p0(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=t?"none":"block"})},er=function(t,i){if(Lt=ne.documentElement,te=ne.body,Dn=[X,ne,Lt,te],At&&!t&&!ds){Ae(H,"scrollEnd",tl);return}sl(),ct=H.isRefreshing=!0,V.forEach(function(s){return Ke(s)&&++s.cacheID&&(s.rec=s())});var r=or("refreshInit");Xa&&H.sort(),i||Yn(),V.forEach(function(s){Ke(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),Y.slice(0).forEach(function(s){return s.refresh()}),ds=!1,Y.forEach(function(s){if(s._subPinOffset&&s.pin){var n=s.vars.horizontal?"offsetWidth":"offsetHeight",o=s.pin[n];s.revert(!0,1),s.adjustPinSpacing(s.pin[n]-o),s.refresh()}}),Pn=1,Ra(!0),Y.forEach(function(s){var n=Zt(s.scroller,s._dir),o=s.vars.end==="max"||s._endClamp&&s.end>n,l=s._startClamp&&s.start>=n;(o||l)&&s.setPositions(l?n-1:s.start,o?Math.max(l?n:s.start+1,n):s.end,!0)}),Ra(!1),Pn=0,r.forEach(function(s){return s&&s.render&&s.render(-1)}),V.forEach(function(s){Ke(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),rl(Rn,1),cs.pause(),rr++,ct=2,mi(2),Y.forEach(function(s){return Ke(s.vars.onRefresh)&&s.vars.onRefresh(s)}),ct=H.isRefreshing=!1,or("refresh")},An=0,os=1,m0,mi=function(t){if(t===2||!ct&&!ds){H.isUpdating=!0,m0&&m0.update(0);var i=Y.length,r=Je(),s=r-Tn>=50,n=i&&Y[0].scroll();if(os=An>n?-1:1,ct||(An=n),s&&(At&&!fs&&r-At>200&&(At=0,or("scrollEnd")),n0=Tn,Tn=r),os<0){for(lt=i;lt-- >0;)Y[lt]&&Y[lt].update(0,s);os=1}else for(lt=0;lt<i;lt++)Y[lt]&&Y[lt].update(0,s);H.isUpdating=!1}_0=0},On=[Qa,Za,qn,Nn,Pt+g0,Pt+u0,Pt+f0,Pt+h0,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],as=On.concat([tr,ir,"boxSizing","max"+Pr,"max"+Hn,"position",Pt,Le,Le+f0,Le+u0,Le+g0,Le+h0]),Fc=function(t,i,r){Br(r);var s=t._gsap;if(s.spacerIsNative)Br(s.spacerState);else if(t._gsap.swappedIn){var n=i.parentNode;n&&(n.insertBefore(t,i),n.removeChild(i))}t._gsap.swappedIn=!1},Ln=function(t,i,r,s){if(!t._gsap.swappedIn){for(var n=On.length,o=i.style,l=t.style,c;n--;)c=On[n],o[c]=r[c];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),l[qn]=l[Nn]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[tr]=us(t,je)+Ie,o[ir]=us(t,Ce)+Ie,o[Le]=l[Pt]=l[Za]=l[Qa]="0",Br(s),l[tr]=l["max"+Pr]=r[tr],l[ir]=l["max"+Hn]=r[ir],l[Le]=r[Le],t.parentNode!==i&&(t.parentNode.insertBefore(i,t),i.appendChild(t)),t._gsap.swappedIn=!0}},Nc=/([A-Z])/g,Br=function(t){if(t){var i=t.t.style,r=t.length,s=0,n,o;for((t.t._gsap||P.core.getCache(t.t)).uncache=1;s<r;s+=2)o=t[s+1],n=t[s],o?i[n]=o:i[n]&&i.removeProperty(n.replace(Nc,"-$1").toLowerCase())}},ts=function(t){for(var i=as.length,r=t.style,s=[],n=0;n<i;n++)s.push(as[n],r[as[n]]);return s.t=t,s},qc=function(t,i,r){for(var s=[],n=t.length,o=r?8:0,l;o<n;o+=2)l=t[o],s.push(l,l in i?i[l]:t[o+1]);return s.t=t.t,s},ls={left:0,top:0},Fa=function(t,i,r,s,n,o,l,c,d,u,g,m,h,p){Ke(t)&&(t=t(c)),Ct(t)&&t.substr(0,3)==="max"&&(t=m+(t.charAt(4)==="="?ss("0"+t.substr(3),r):0));var f=h?h.time():0,v,k,x;if(h&&h.seek(0),isNaN(t)||(t=+t),l0(t))h&&(t=P.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,m,t)),l&&ns(l,r,s,!0);else{Ke(i)&&(i=i(c));var S=(t||"0").split(" "),y,T,L,b;x=ot(i,c)||te,y=gi(x)||{},(!y||!y.left&&!y.top)&&zt(x).display==="none"&&(b=x.style.display,x.style.display="block",y=gi(x),b?x.style.display=b:x.style.removeProperty("display")),T=ss(S[0],y[s.d]),L=ss(S[1]||"0",r),t=y[s.p]-d[s.p]-u+T+n-L,l&&ns(l,L,s,r-L<20||l._isStart&&L>20),r-=r-L}if(p&&(c[p]=t||-.001,t<0&&(t=0)),o){var M=t+r,C=o._isStart;v="scroll"+s.d2,ns(o,M,s,C&&M>20||!C&&(g?Math.max(te[v],Lt[v]):o.parentNode[v])<=M+1),g&&(d=gi(l),g&&(o.style[s.op.p]=d[s.op.p]-s.op.m-o._offset+Ie))}return h&&x&&(v=gi(x),h.seek(m),k=gi(x),h._caScrollDist=v[s.p]-k[s.p],t=t/h._caScrollDist*m),h&&h.seek(f),h?t:Math.round(t)},Hc=/(webkit|moz|length|cssText|inset)/i,Na=function(t,i,r,s){if(t.parentNode!==i){var n=t.style,o,l;if(i===te){t._stOrig=n.cssText,l=zt(t);for(o in l)!+o&&!Hc.test(o)&&l[o]&&typeof n[o]=="string"&&o!=="0"&&(n[o]=l[o]);n.top=r,n.left=s}else n.cssText=t._stOrig;P.core.getCache(t).uncache=1,i.appendChild(t)}},nl=function(t,i,r){var s=i,n=s;return function(o){var l=Math.round(t());return l!==s&&l!==n&&Math.abs(l-s)>3&&Math.abs(l-n)>3&&(o=l,r&&r()),n=s,s=Math.round(o),s}},is=function(t,i,r){var s={};s[i.p]="+="+r,P.set(t,s)},qa=function(t,i){var r=hi(t,i),s="_scroll"+i.p2,n=function o(l,c,d,u,g){var m=o.tween,h=c.onComplete,p={};d=d||r();var f=nl(r,d,function(){m.kill(),o.tween=0});return g=u&&g||0,u=u||l-d,m&&m.kill(),c[s]=l,c.inherit=!1,c.modifiers=p,p[s]=function(){return f(d+u*m.ratio+g*m.ratio*m.ratio)},c.onUpdate=function(){V.cache++,o.tween&&mi()},c.onComplete=function(){o.tween=0,h&&h.call(m)},m=o.tween=P.to(t,c),m};return t[s]=r,r.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Ae(t,"wheel",r.wheelHandler),H.isTouch&&Ae(t,"touchmove",r.wheelHandler),n},H=function(){function a(i,r){Er||a.register(P)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bn(this),this.init(i,r)}var t=a.prototype;return t.init=function(r,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!o0){this.update=this.refresh=this.kill=Qt;return}r=za(Ct(r)||l0(r)||r.nodeType?{trigger:r}:r,Z0);var n=r,o=n.onUpdate,l=n.toggleClass,c=n.id,d=n.onToggle,u=n.onRefresh,g=n.scrub,m=n.trigger,h=n.pin,p=n.pinSpacing,f=n.invalidateOnRefresh,v=n.anticipatePin,k=n.onScrubComplete,x=n.onSnapComplete,S=n.once,y=n.snap,T=n.pinReparent,L=n.pinSpacer,b=n.containerAnimation,M=n.fastScrollEnd,C=n.preventOverlaps,E=r.horizontal||r.containerAnimation&&r.horizontal!==!1?je:Ce,R=!g&&g!==0,I=ot(r.scroller||X),U=P.core.getCache(I),W=sr(I),K=("pinType"in r?r.pinType:fi(I,"pinType")||W&&"fixed")==="fixed",j=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],O=R&&r.toggleActions.split(" "),Z="markers"in r?r.markers:Z0.markers,oe=W?0:parseFloat(zt(I)["border"+E.p2+Pr])||0,_=this,ae=r.onRefreshInit&&function(){return r.onRefreshInit(_)},Qe=Bc(I,W,E),Ot=Pc(I,W),fe=0,Oe=0,Ze=0,ke=hi(I,E),et,Ve,_i,tt,dt,Q,ve,ut,_t,w,vt,ei,vi,we,ti,wi,Oi,Be,yi,ye,Dt,Et,ii,zr,Te,w0,ri,cr,dr,bi,Di,G,Ri,Rt,Ft,Nt,Fi,ur,si;if(_._startClamp=_._endClamp=!1,_._dir=E,v*=45,_.scroller=I,_.scroll=b?b.time.bind(b):ke,tt=ke(),_.vars=r,s=s||r.animation,"refreshPriority"in r&&(Xa=1,r.refreshPriority===-9999&&(m0=_)),U.tweenScroll=U.tweenScroll||{top:qa(I,Ce),left:qa(I,je)},_.tweenTo=et=U.tweenScroll[E.p],_.scrubDuration=function(B){Ri=l0(B)&&B,Ri?G?G.duration(B):G=P.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ri,paused:!0,onComplete:function(){return k&&k(_)}}):(G&&G.progress(1).kill(),G=0)},s&&(s.vars.lazy=!1,s._initted&&!_.isReverted||s.vars.immediateRender!==!1&&r.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),_.animation=s.pause(),s.scrollTrigger=_,_.scrubDuration(g),bi=0,c||(c=s.vars.id)),y&&((!Zi(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in te.style&&P.set(W?[te,Lt]:I,{scrollBehavior:"auto"}),V.forEach(function(B){return Ke(B)&&B.target===(W?ne.scrollingElement||Lt:I)&&(B.smooth=!1)}),_i=Ke(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ac(s):y.snapTo==="labelsDirectional"?Oc(s):y.directional!==!1?function(B,F){return Vn(y.snapTo)(B,Je()-Oe<500?0:F.direction)}:P.utils.snap(y.snapTo),Rt=y.duration||{min:.1,max:2},Rt=Zi(Rt)?d0(Rt.min,Rt.max):d0(Rt,Rt),Ft=P.delayedCall(y.delay||Ri/2||.1,function(){var B=ke(),F=Je()-Oe<500,z=et.tween;if((F||Math.abs(_.getVelocity())<10)&&!z&&!fs&&fe!==B){var N=(B-Q)/we,Pe=s&&!R?s.totalProgress():N,$=F?0:(Pe-Di)/(Je()-n0)*1e3||0,be=P.utils.clamp(-N,1-N,Cr($/2)*$/.185),Ye=N+(y.inertia===!1?0:be),ge,le,ie=y,qt=ie.onStart,de=ie.onInterrupt,wt=ie.onComplete;if(ge=_i(Ye,_),l0(ge)||(ge=Ye),le=Math.max(0,Math.round(Q+ge*we)),B<=ve&&B>=Q&&le!==B){if(z&&!z._initted&&z.data<=Cr(le-B))return;y.inertia===!1&&(be=ge-N),et(le,{duration:Rt(Cr(Math.max(Cr(Ye-Pe),Cr(ge-Pe))*.185/$/.05||0)),ease:y.ease||"power3",data:Cr(le-B),onInterrupt:function(){return Ft.restart(!0)&&de&&de(_)},onComplete:function(){_.update(),fe=ke(),s&&!R&&(G?G.resetTo("totalProgress",ge,s._tTime/s._tDur):s.progress(ge)),bi=Di=s&&!R?s.totalProgress():_.progress,x&&x(_),wt&&wt(_)}},B,be*we,le-B-be*we),qt&&qt(_,et.tween)}}else _.isActive&&fe!==B&&Ft.restart(!0)}).pause()),c&&(zn[c]=_),m=_.trigger=ot(m||h!==!0&&h),si=m&&m._gsap&&m._gsap.stRevert,si&&(si=si(_)),h=h===!0?m:ot(h),Ct(l)&&(l={targets:m,className:l}),h&&(p===!1||p===Pt||(p=!p&&h.parentNode&&h.parentNode.style&&zt(h.parentNode).display==="flex"?!1:Le),_.pin=h,Ve=P.core.getCache(h),Ve.spacer?ti=Ve.pinState:(L&&(L=ot(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Ve.spacerIsNative=!!L,L&&(Ve.spacerState=ts(L))),Ve.spacer=Be=L||ne.createElement("div"),Be.classList.add("pin-spacer"),c&&Be.classList.add("pin-spacer-"+c),Ve.pinState=ti=ts(h)),r.force3D!==!1&&P.set(h,{force3D:!0}),_.spacer=Be=Ve.spacer,dr=zt(h),zr=dr[p+E.os2],ye=P.getProperty(h),Dt=P.quickSetter(h,E.a,Ie),Ln(h,Be,dr),Oi=ts(h)),Z){ei=Zi(Z)?za(Z,Aa):Aa,w=es("scroller-start",c,I,E,ei,0),vt=es("scroller-end",c,I,E,ei,0,w),yi=w["offset"+E.op.d2];var Ar=ot(fi(I,"content")||I);ut=this.markerStart=es("start",c,Ar,E,ei,yi,0,b),_t=this.markerEnd=es("end",c,Ar,E,ei,yi,0,b),b&&(ur=P.quickSetter([ut,_t],E.a,Ie)),!K&&!(Vt.length&&fi(I,"fixedMarkers")===!0)&&(zc(W?te:I),P.set([w,vt],{force3D:!0}),w0=P.quickSetter(w,E.a,Ie),cr=P.quickSetter(vt,E.a,Ie))}if(b){var q=b.vars.onUpdate,A=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){_.update(0,0,1),q&&q.apply(b,A||[])})}if(_.previous=function(){return Y[Y.indexOf(_)-1]},_.next=function(){return Y[Y.indexOf(_)+1]},_.revert=function(B,F){if(!F)return _.kill(!0);var z=B!==!1||!_.enabled,N=$e;z!==_.isReverted&&(z&&(Nt=Math.max(ke(),_.scroll.rec||0),Ze=_.progress,Fi=s&&s.progress()),ut&&[ut,_t,w,vt].forEach(function(Pe){return Pe.style.display=z?"none":"block"}),z&&($e=_,_.update(z)),h&&(!T||!_.isActive)&&(z?Fc(h,Be,ti):Ln(h,Be,zt(h),Te)),z||_.update(z),$e=N,_.isReverted=z)},_.refresh=function(B,F,z,N){if(!(($e||!_.enabled)&&!F)){if(h&&B&&At){Ae(a,"scrollEnd",tl);return}!ct&&ae&&ae(_),$e=_,et.tween&&!z&&(et.tween.kill(),et.tween=0),G&&G.pause(),f&&s&&s.revert({kill:!1}).invalidate(),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var Pe=Qe(),$=Ot(),be=b?b.duration():Zt(I,E),Ye=we<=.01,ge=0,le=N||0,ie=Zi(z)?z.end:r.end,qt=r.endTrigger||m,de=Zi(z)?z.start:r.start||(r.start===0||!m?0:h?"0 0":"0 100%"),wt=_.pinnedContainer=r.pinnedContainer&&ot(r.pinnedContainer,_),Yt=m&&Math.max(0,Y.indexOf(_))||0,De=Yt,Re,Xe,Ni,y0,We,Ee,Xt,bs,$n,Or,Wt,Dr,b0;for(Z&&Zi(z)&&(Dr=P.getProperty(w,E.p),b0=P.getProperty(vt,E.p));De-- >0;)Ee=Y[De],Ee.end||Ee.refresh(0,1)||($e=_),Xt=Ee.pin,Xt&&(Xt===m||Xt===h||Xt===wt)&&!Ee.isReverted&&(Or||(Or=[]),Or.unshift(Ee),Ee.revert(!0,!0)),Ee!==Y[De]&&(Yt--,De--);for(Ke(de)&&(de=de(_)),de=Ma(de,"start",_),Q=Fa(de,m,Pe,E,ke(),ut,w,_,$,oe,K,be,b,_._startClamp&&"_startClamp")||(h?-.001:0),Ke(ie)&&(ie=ie(_)),Ct(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(Ct(de)?de.split(" ")[0]:"")+ie:(ge=ss(ie.substr(2),Pe),ie=Ct(de)?de:(b?P.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Q):Q)+ge,qt=m)),ie=Ma(ie,"end",_),ve=Math.max(Q,Fa(ie||(qt?"100% 0":be),qt,Pe,E,ke()+ge,_t,vt,_,$,oe,K,be,b,_._endClamp&&"_endClamp"))||-.001,ge=0,De=Yt;De--;)Ee=Y[De],Xt=Ee.pin,Xt&&Ee.start-Ee._pinPush<=Q&&!b&&Ee.end>0&&(Re=Ee.end-(_._startClamp?Math.max(0,Ee.start):Ee.start),(Xt===m&&Ee.start-Ee._pinPush<Q||Xt===wt)&&isNaN(de)&&(ge+=Re*(1-Ee.progress)),Xt===h&&(le+=Re));if(Q+=ge,ve+=ge,_._startClamp&&(_._startClamp+=ge),_._endClamp&&!ct&&(_._endClamp=ve||-.001,ve=Math.min(ve,Zt(I,E))),we=ve-Q||(Q-=.01)&&.001,Ye&&(Ze=P.utils.clamp(0,1,P.utils.normalize(Q,ve,Nt))),_._pinPush=le,ut&&ge&&(Re={},Re[E.a]="+="+ge,wt&&(Re[E.p]="-="+ke()),P.set([ut,_t],Re)),h&&!(Pn&&_.end>=Zt(I,E)))Re=zt(h),y0=E===Ce,Ni=ke(),Et=parseFloat(ye(E.a))+le,!be&&ve>1&&(Wt=(W?ne.scrollingElement||Lt:I).style,Wt={style:Wt,value:Wt["overflow"+E.a.toUpperCase()]},W&&zt(te)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+E.a.toUpperCase()]="scroll")),Ln(h,Be,Re),Oi=ts(h),Xe=gi(h,!0),bs=K&&hi(I,y0?je:Ce)(),p?(Te=[p+E.os2,we+le+Ie],Te.t=Be,De=p===Le?us(h,E)+we+le:0,De&&(Te.push(E.d,De+Ie),Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=De+Ie)),Br(Te),wt&&Y.forEach(function(Rr){Rr.pin===wt&&Rr.vars.pinSpacing!==!1&&(Rr._subPinOffset=!0)}),K&&ke(Nt)):(De=us(h,E),De&&Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=De+Ie)),K&&(We={top:Xe.top+(y0?Ni-Q:bs)+Ie,left:Xe.left+(y0?bs:Ni-Q)+Ie,boxSizing:"border-box",position:"fixed"},We[tr]=We["max"+Pr]=Math.ceil(Xe.width)+Ie,We[ir]=We["max"+Hn]=Math.ceil(Xe.height)+Ie,We[Pt]=We[Pt+f0]=We[Pt+u0]=We[Pt+g0]=We[Pt+h0]="0",We[Le]=Re[Le],We[Le+f0]=Re[Le+f0],We[Le+u0]=Re[Le+u0],We[Le+g0]=Re[Le+g0],We[Le+h0]=Re[Le+h0],wi=qc(ti,We,T),ct&&ke(0)),s?($n=s._initted,xn(1),s.render(s.duration(),!0,!0),ii=ye(E.a)-Et+we+le,ri=Math.abs(we-ii)>1,K&&ri&&wi.splice(wi.length-2,2),s.render(0,!0,!0),$n||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),xn(0)):ii=we,Wt&&(Wt.value?Wt.style["overflow"+E.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+E.a));else if(m&&ke()&&!b)for(Xe=m.parentNode;Xe&&Xe!==te;)Xe._pinOffset&&(Q-=Xe._pinOffset,ve-=Xe._pinOffset),Xe=Xe.parentNode;Or&&Or.forEach(function(Rr){return Rr.revert(!1,!0)}),_.start=Q,_.end=ve,tt=dt=ct?Nt:ke(),!b&&!ct&&(tt<Nt&&ke(Nt),_.scroll.rec=0),_.revert(!1,!0),Oe=Je(),Ft&&(fe=-1,Ft.restart(!0)),$e=0,s&&R&&(s._initted||Fi)&&s.progress()!==Fi&&s.progress(Fi||0,!0).render(s.time(),!0,!0),(Ye||Ze!==_.progress||b||f||s&&!s._initted)&&(s&&!R&&s.totalProgress(b&&Q<-.001&&!Ze?P.utils.normalize(Q,ve,0):Ze,!0),_.progress=Ye||(tt-Q)/we===Ze?0:Ze),h&&p&&(Be._pinOffset=Math.round(_.progress*ii)),G&&G.invalidate(),isNaN(Dr)||(Dr-=P.getProperty(w,E.p),b0-=P.getProperty(vt,E.p),is(w,E,Dr),is(ut,E,Dr-(N||0)),is(vt,E,b0),is(_t,E,b0-(N||0))),Ye&&!ct&&_.update(),u&&!ct&&!vi&&(vi=!0,u(_),vi=!1)}},_.getVelocity=function(){return(ke()-dt)/(Je()-n0)*1e3||0},_.endAnimation=function(){s0(_.callbackAnimation),s&&(G?G.progress(1):s.paused()?R||s0(s,_.direction<0,1):s0(s,s.reversed()))},_.labelToScroll=function(B){return s&&s.labels&&(Q||_.refresh()||Q)+s.labels[B]/s.duration()*we||0},_.getTrailing=function(B){var F=Y.indexOf(_),z=_.direction>0?Y.slice(0,F).reverse():Y.slice(F+1);return(Ct(B)?z.filter(function(N){return N.vars.preventOverlaps===B}):z).filter(function(N){return _.direction>0?N.end<=Q:N.start>=ve})},_.update=function(B,F,z){if(!(b&&!z&&!B)){var N=ct===!0?Nt:_.scroll(),Pe=B?0:(N-Q)/we,$=Pe<0?0:Pe>1?1:Pe||0,be=_.progress,Ye,ge,le,ie,qt,de,wt,Yt;if(F&&(dt=tt,tt=b?ke():N,y&&(Di=bi,bi=s&&!R?s.totalProgress():$)),v&&h&&!$e&&!$0&&At&&(!$&&Q<N+(N-dt)/(Je()-n0)*v?$=1e-4:$===1&&ve>N+(N-dt)/(Je()-n0)*v&&($=.9999)),$!==be&&_.enabled){if(Ye=_.isActive=!!$&&$<1,ge=!!be&&be<1,de=Ye!==ge,qt=de||!!$!=!!be,_.direction=$>be?1:-1,_.progress=$,qt&&!$e&&(le=$&&!be?0:$===1?1:be===1?2:3,R&&(ie=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Yt=s&&(ie==="complete"||ie==="reset"||ie in s))),C&&(de||Yt)&&(Yt||g||!s)&&(Ke(C)?C(_):_.getTrailing(C).forEach(function(Ni){return Ni.endAnimation()})),R||(G&&!$e&&!$0?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",$,s._tTime/s._tDur):(G.vars.totalProgress=$,G.invalidate().restart())):s&&s.totalProgress($,!!($e&&(Oe||B)))),h){if(B&&p&&(Be.style[p+E.os2]=zr),!K)Dt(a0(Et+ii*$));else if(qt){if(wt=!B&&$>be&&ve+1>N&&N+1>=Zt(I,E),T)if(!B&&(Ye||wt)){var De=gi(h,!0),Re=N-Q;Na(h,te,De.top+(E===Ce?Re:0)+Ie,De.left+(E===Ce?0:Re)+Ie)}else Na(h,Be);Br(Ye||wt?wi:Oi),ri&&$<1&&Ye||Dt(Et+($===1&&!wt?ii:0))}}y&&!et.tween&&!$e&&!$0&&Ft.restart(!0),l&&(de||S&&$&&($<1||!kn))&&p0(l.targets).forEach(function(Ni){return Ni.classList[Ye||S?"add":"remove"](l.className)}),o&&!R&&!B&&o(_),qt&&!$e?(R&&(Yt&&(ie==="complete"?s.pause().totalProgress(1):ie==="reset"?s.restart(!0).pause():ie==="restart"?s.restart(!0):s[ie]()),o&&o(_)),(de||!kn)&&(d&&de&&Sn(_,d),j[le]&&Sn(_,j[le]),S&&($===1?_.kill(!1,1):j[le]=0),de||(le=$===1?1:3,j[le]&&Sn(_,j[le]))),M&&!Ye&&Math.abs(_.getVelocity())>(l0(M)?M:2500)&&(s0(_.callbackAnimation),G?G.progress(1):s0(s,ie==="reverse"?1:!$,1))):R&&o&&!$e&&o(_)}if(cr){var Xe=b?N/b.duration()*(b._caScrollDist||0):N;w0(Xe+(w._isFlipped?1:0)),cr(Xe)}ur&&ur(-N/b.duration()*(b._caScrollDist||0))}},_.enable=function(B,F){_.enabled||(_.enabled=!0,Ae(I,"resize",c0),W||Ae(I,"scroll",Lr),ae&&Ae(a,"refreshInit",ae),B!==!1&&(_.progress=Ze=0,tt=dt=fe=ke()),F!==!1&&_.refresh())},_.getTween=function(B){return B&&et?et.tween:G},_.setPositions=function(B,F,z,N){if(b){var Pe=b.scrollTrigger,$=b.duration(),be=Pe.end-Pe.start;B=Pe.start+be*B/$,F=Pe.start+be*F/$}_.refresh(!1,!1,{start:Ia(B,z&&!!_._startClamp),end:Ia(F,z&&!!_._endClamp)},N),_.update()},_.adjustPinSpacing=function(B){if(Te&&B){var F=Te.indexOf(E.d)+1;Te[F]=parseFloat(Te[F])+B+Ie,Te[1]=parseFloat(Te[1])+B+Ie,Br(Te)}},_.disable=function(B,F){if(_.enabled&&(B!==!1&&_.revert(!0,!0),_.enabled=_.isActive=!1,F||G&&G.pause(),Nt=0,Ve&&(Ve.uncache=1),ae&&ze(a,"refreshInit",ae),Ft&&(Ft.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!W)){for(var z=Y.length;z--;)if(Y[z].scroller===I&&Y[z]!==_)return;ze(I,"resize",c0),W||ze(I,"scroll",Lr)}},_.kill=function(B,F){_.disable(B,F),G&&!F&&G.kill(),c&&delete zn[c];var z=Y.indexOf(_);z>=0&&Y.splice(z,1),z===lt&&os>0&&lt--,z=0,Y.forEach(function(N){return N.scroller===_.scroller&&(z=1)}),z||ct||(_.scroll.rec=0),s&&(s.scrollTrigger=null,B&&s.revert({kill:!1}),F||s.kill()),ut&&[ut,_t,w,vt].forEach(function(N){return N.parentNode&&N.parentNode.removeChild(N)}),m0===_&&(m0=0),h&&(Ve&&(Ve.uncache=1),z=0,Y.forEach(function(N){return N.pin===h&&z++}),z||(Ve.spacer=0)),r.onKill&&r.onKill(_)},Y.push(_),_.enable(!1,!1),si&&si(_),s&&s.add&&!we){var ee=_.update;_.update=function(){_.update=ee,V.cache++,Q||ve||_.refresh()},P.delayedCall(.01,_.update),we=.01,Q=ve=0}else _.refresh();h&&Rc()},a.register=function(r){return Er||(P=r||$a(),ja()&&window.document&&a.enable(),Er=o0),Er},a.defaults=function(r){if(r)for(var s in r)Z0[s]=r[s];return Z0},a.disable=function(r,s){o0=0,Y.forEach(function(o){return o[s?"kill":"disable"](r)}),ze(X,"wheel",Lr),ze(ne,"scroll",Lr),clearInterval(j0),ze(ne,"touchcancel",Qt),ze(te,"touchstart",Qt),K0(ze,ne,"pointerdown,touchstart,mousedown",Ba),K0(ze,ne,"pointerup,touchend,mouseup",Pa),cs.kill(),J0(ze);for(var n=0;n<V.length;n+=3)Q0(ze,V[n],V[n+1]),Q0(ze,V[n],V[n+2])},a.enable=function(){if(X=window,ne=document,Lt=ne.documentElement,te=ne.body,P&&(p0=P.utils.toArray,d0=P.utils.clamp,Bn=P.core.context||Qt,xn=P.core.suppressOverwrites||Qt,Rn=X.history.scrollRestoration||"auto",An=X.pageYOffset||0,P.core.globals("ScrollTrigger",a),te)){o0=1,Ir=document.createElement("div"),Ir.style.height="100vh",Ir.style.position="absolute",sl(),Ic(),_e.register(P),a.isTouch=_e.isTouch,zi=_e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),In=_e.isTouch===1,Ae(X,"wheel",Lr),Dn=[X,ne,Lt,te],P.matchMedia?(a.matchMedia=function(d){var u=P.matchMedia(),g;for(g in d)u.add(g,d[g]);return u},P.addEventListener("matchMediaInit",function(){return Yn()}),P.addEventListener("matchMediaRevert",function(){return il()}),P.addEventListener("matchMedia",function(){er(0,1),or("matchMedia")}),P.matchMedia().add("(orientation: portrait)",function(){return Cn(),Cn})):console.warn("Requires GSAP 3.11.0 or later"),Cn(),Ae(ne,"scroll",Lr);var r=te.hasAttribute("style"),s=te.style,n=s.borderTopStyle,o=P.core.Animation.prototype,l,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",l=gi(te),Ce.m=Math.round(l.top+Ce.sc())||0,je.m=Math.round(l.left+je.sc())||0,n?s.borderTopStyle=n:s.removeProperty("border-top-style"),r||(te.setAttribute("style",""),te.removeAttribute("style")),j0=setInterval(Oa,250),P.delayedCall(.5,function(){return $0=0}),Ae(ne,"touchcancel",Qt),Ae(te,"touchstart",Qt),K0(Ae,ne,"pointerdown,touchstart,mousedown",Ba),K0(Ae,ne,"pointerup,touchend,mouseup",Pa),Mn=P.utils.checkPrefix("transform"),as.push(Mn),Er=Je(),cs=P.delayedCall(.2,er).pause(),Mr=[ne,"visibilitychange",function(){var d=X.innerWidth,u=X.innerHeight;ne.hidden?(La=d,Ea=u):(La!==d||Ea!==u)&&c0()},ne,"DOMContentLoaded",er,X,"load",er,X,"resize",c0],J0(Ae),Y.forEach(function(d){return d.enable(0,1)}),c=0;c<V.length;c+=3)Q0(ze,V[c],V[c+1]),Q0(ze,V[c],V[c+2])}},a.config=function(r){"limitCallbacks"in r&&(kn=!!r.limitCallbacks);var s=r.syncInterval;s&&clearInterval(j0)||(j0=s)&&setInterval(Oa,s),"ignoreMobileResize"in r&&(In=a.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(J0(ze)||J0(Ae,r.autoRefreshEvents||"none"),Wa=(r.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(r,s){var n=ot(r),o=V.indexOf(n),l=sr(n);~o&&V.splice(o,l?6:2),s&&(l?Vt.unshift(X,s,te,s,Lt,s):Vt.unshift(n,s))},a.clearMatchMedia=function(r){Y.forEach(function(s){return s._ctx&&s._ctx.query===r&&s._ctx.kill(!0,!0)})},a.isInViewport=function(r,s,n){var o=(Ct(r)?ot(r):r).getBoundingClientRect(),l=o[n?tr:ir]*s||0;return n?o.right-l>0&&o.left+l<X.innerWidth:o.bottom-l>0&&o.top+l<X.innerHeight},a.positionInViewport=function(r,s,n){Ct(r)&&(r=ot(r));var o=r.getBoundingClientRect(),l=o[n?tr:ir],c=s==null?l/2:s in hs?hs[s]*l:~s.indexOf("%")?parseFloat(s)*l/100:parseFloat(s)||0;return n?(o.left+c)/X.innerWidth:(o.top+c)/X.innerHeight},a.killAll=function(r){if(Y.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),r!==!0){var s=nr.killAll||[];nr={},s.forEach(function(n){return n()})}},a}();H.version="3.12.7";H.saveStyles=function(a){return a?p0(a).forEach(function(t){if(t&&t.style){var i=St.indexOf(t);i>=0&&St.splice(i,5),St.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),P.core.getCache(t),Bn())}}):St};H.revert=function(a,t){return Yn(!a,t)};H.create=function(a,t){return new H(a,t)};H.refresh=function(a){return a?c0(!0):(Er||H.register())&&er(!0)};H.update=function(a){return++V.cache&&mi(a===!0?2:0)};H.clearScrollMemory=rl;H.maxScroll=function(a,t){return Zt(a,t?je:Ce)};H.getScrollFunc=function(a,t){return hi(ot(a),t?je:Ce)};H.getById=function(a){return zn[a]};H.getAll=function(){return Y.filter(function(a){return a.vars.id!=="ScrollSmoother"})};H.isScrolling=function(){return!!At};H.snapDirectional=Vn;H.addEventListener=function(a,t){var i=nr[a]||(nr[a]=[]);~i.indexOf(t)||i.push(t)};H.removeEventListener=function(a,t){var i=nr[a],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)};H.batch=function(a,t){var i=[],r={},s=t.interval||.016,n=t.batchMax||1e9,o=function(d,u){var g=[],m=[],h=P.delayedCall(s,function(){u(g,m),g=[],m=[]}).pause();return function(p){g.length||h.restart(!0),g.push(p.trigger),m.push(p),n<=g.length&&h.progress(1)}},l;for(l in t)r[l]=l.substr(0,2)==="on"&&Ke(t[l])&&l!=="onRefreshInit"?o(l,t[l]):t[l];return Ke(n)&&(n=n(),Ae(H,"refresh",function(){return n=t.batchMax()})),p0(a).forEach(function(c){var d={};for(l in r)d[l]=r[l];d.trigger=c,i.push(H.create(d))}),i};var Ha=function(t,i,r,s){return i>s?t(s):i<0&&t(0),r>s?(s-i)/(r-i):r<0?i/(i-r):1},En=function a(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+(_e.isTouch?" pinch-zoom":""):"none",t===Lt&&a(te,i)},rs={auto:1,scroll:1},Vc=function(t){var i=t.event,r=t.target,s=t.axis,n=(i.changedTouches?i.changedTouches[0]:i).target,o=n._gsap||P.core.getCache(n),l=Je(),c;if(!o._isScrollT||l-o._isScrollT>2e3){for(;n&&n!==te&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(rs[(c=zt(n)).overflowY]||rs[c.overflowX]));)n=n.parentNode;o._isScroll=n&&n!==r&&!sr(n)&&(rs[(c=zt(n)).overflowY]||rs[c.overflowX]),o._isScrollT=l}(o._isScroll||s==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},ol=function(t,i,r,s){return _e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:s=s&&Vc,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return r&&Ae(ne,_e.eventTypes[0],Ya,!1,!0)},onDisable:function(){return ze(ne,_e.eventTypes[0],Ya,!0)}})},Yc=/(input|label|select|textarea)/i,Va,Ya=function(t){var i=Yc.test(t.target.tagName);(i||Va)&&(t._gsapAllow=!0,Va=i)},Xc=function(t){Zi(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var i=t,r=i.normalizeScrollX,s=i.momentum,n=i.allowNestedScroll,o=i.onRelease,l,c,d=ot(t.target)||Lt,u=P.core.globals().ScrollSmoother,g=u&&u.get(),m=zi&&(t.content&&ot(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),h=hi(d,Ce),p=hi(d,je),f=1,v=(_e.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,k=0,x=Ke(s)?function(){return s(l)}:function(){return s||2.8},S,y,T=ol(d,t.type,!0,n),L=function(){return y=!1},b=Qt,M=Qt,C=function(){c=Zt(d,Ce),M=d0(zi?1:0,c),r&&(b=d0(0,Zt(d,je))),S=rr},E=function(){m._gsap.y=a0(parseFloat(m._gsap.y)+h.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},R=function(){if(y){requestAnimationFrame(L);var Z=a0(l.deltaY/2),oe=M(h.v-Z);if(m&&oe!==h.v+h.offset){h.offset=oe-h.v;var _=a0((parseFloat(m&&m._gsap.y)||0)-h.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",m._gsap.y=_+"px",h.cacheID=V.cache,mi()}return!0}h.offset&&E(),y=!0},I,U,W,K,j=function(){C(),I.isActive()&&I.vars.scrollY>c&&(h()>c?I.progress(1)&&h(c):I.resetTo("scrollY",c))};return m&&P.set(m,{y:"+=0"}),t.ignoreCheck=function(O){return zi&&O.type==="touchmove"&&R(O)||f>1.05&&O.type!=="touchstart"||l.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=f;f=a0((X.visualViewport&&X.visualViewport.scale||1)/v),I.pause(),O!==f&&En(d,f>1.01?!0:r?!1:"x"),U=p(),W=h(),C(),S=rr},t.onRelease=t.onGestureStart=function(O,Z){if(h.offset&&E(),!Z)K.restart(!0);else{V.cache++;var oe=x(),_,ae;r&&(_=p(),ae=_+oe*.05*-O.velocityX/.227,oe*=Ha(p,_,ae,Zt(d,je)),I.vars.scrollX=b(ae)),_=h(),ae=_+oe*.05*-O.velocityY/.227,oe*=Ha(h,_,ae,Zt(d,Ce)),I.vars.scrollY=M(ae),I.invalidate().duration(oe).play(.01),(zi&&I.vars.scrollY>=c||_>=c-1)&&P.to({},{onUpdate:j,duration:oe})}o&&o(O)},t.onWheel=function(){I._ts&&I.pause(),Je()-k>1e3&&(S=0,k=Je())},t.onChange=function(O,Z,oe,_,ae){if(rr!==S&&C(),Z&&r&&p(b(_[2]===Z?U+(O.startX-O.x):p()+Z-_[1])),oe){h.offset&&E();var Qe=ae[2]===oe,Ot=Qe?W+O.startY-O.y:h()+oe-ae[1],fe=M(Ot);Qe&&Ot!==fe&&(W+=fe-Ot),h(fe)}(oe||Z)&&mi()},t.onEnable=function(){En(d,r?!1:"x"),H.addEventListener("refresh",j),Ae(X,"resize",j),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){En(d,!0),ze(X,"resize",j),H.removeEventListener("refresh",j),T.kill()},t.lockAxis=t.lockAxis!==!1,l=new _e(t),l.iOS=zi,zi&&!h()&&h(1),zi&&P.ticker.add(Qt),K=l._dc,I=P.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nl(h,h(),function(){return I.pause()})},onUpdate:mi,onComplete:K.vars.onComplete}),l};H.sort=function(a){if(Ke(a))return Y.sort(a);var t=X.pageYOffset||0;return H.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+X.innerHeight}),Y.sort(a||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};H.observe=function(a){return new _e(a)};H.normalizeScroll=function(a){if(typeof a>"u")return at;if(a===!0&&at)return at.enable();if(a===!1){at&&at.kill(),at=a;return}var t=a instanceof _e?a:Xc(a);return at&&at.target===t.target&&at.kill(),sr(t.target)&&(at=t),t};H.core={_getVelocityProp:U0,_inputObserver:ol,_scrollers:V,_proxies:Vt,bridge:{ss:function(){At||or("scrollStart"),At=Je()},ref:function(){return $e}}};$a()&&P.registerPlugin(H);var Wc={threshold:.7},al=Array.from(document.querySelectorAll(".out-of-question")),ll=document.getElementById("intro-grid-one"),cl=document.getElementById("intro-grid-two"),Gc=document.querySelector(".tiny-boy"),Uc=document.querySelectorAll(".sad-child"),gs=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&al.forEach((r,s)=>{s===0&&setTimeout(()=>{r.classList.remove("out-of-question")},500),s===1&&(setTimeout(()=>{r.classList.remove("out-of-question")},1e3),setTimeout(()=>{r.classList.add("upn-out-of-question")},1750)),s===2&&(setTimeout(()=>{r.classList.remove("out-of-question")},1750),setTimeout(()=>{r.classList.add("upn-out-of-question")},2500),setTimeout(()=>{al[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{ll.classList.add("get-up"),cl.classList.add("get-down")},3500),setTimeout(()=>{ll.remove(),cl.remove(),Gc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Uc.forEach(n=>{n.classList.remove("sad-child")})},4500),setTimeout(()=>{Jn("class","balloon-ball","add","in-wind")},5e3))});else return})},Wc);var dl=document.getElementById("brianSecondPageBox"),jc=document.getElementById("brianSecondChair"),$c={threshold:.4},ms=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&(dl.classList.remove("unseen"),jc.classList.add("slide-chair-in"),dl.classList.add("brianUp"));else return})},$c);var Jc={threshold:.7},Zd=Array.from(document.querySelectorAll("iframe")),e3=document.querySelector(".marketing--pitch-box"),ps=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log("func"),i.isIntersecting)i.isIntersecting&&console.log("here");else return})},Jc);var Kc={threshold:.6},r3=document.getElementById("websiteVideo"),s3=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting){if(i.isIntersecting)switch(yt("load"),console.log(i.target," io"),i.target.scrollIntoView({behavior:"smooth",block:"end"}),i.target.id){case"gridHeader":yt(0);break;case"wpp__concept":yt(19);break;case"wpp__copy":yt(39);break;case"wpp__design":yt(59);break;case"wpp__creation":yt(79);break}}else return})},Kc);var Ai=document.getElementById("homeMonitor"),c3=document.getElementById("mob_fl_arrow"),d3=document.querySelector(".back--drop");var u3=document.querySelectorAll("iframe"),ul=a=>{if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(a.target),a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Ai.innerHTML=`
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
      
      `},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":Ai.innerHTML=`
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
      
      
      
      
      
      
      
      
      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},5);break;case"m--video":Ai.innerHTML=`
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
   
      
      
      `,setTimeout(()=>{document.querySelector(".movie--theater-screen").classList.add("glow"),document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":Ai.innerHTML=`
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
      `;let i=document.querySelector(".marketing--pitch-box");setTimeout(()=>{i.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":Ai.innerHTML=`
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
      `;let s=[...document.getElementsByTagName("li")],n=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{s.forEach(c=>{c.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":Ai.innerHTML=`
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

      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--contact":Ai.innerHTML=`
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
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":Ai.innerHTML=`
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
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250);break;case"port-port":codingProjectDisplay.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":a.preventDefault(),x0();break;case"mob_fl_arrow":console.log("arrow clicked");let o=document.getElementById("fl_ex_list"),l=o.firstElementChild;o.appendChild(l),console.log(l);break}};var hl=()=>{console.log("lazy loading engaged")};Ii.registerPlugin(H);var _s="src/components/images/falling1.png",fl="src/components/images/falling2.png",vs="src/components/images/falling5.png",Xn="src/components/images/falling4.png",gl="src/components/images/falling6.png",Qc="src/components/images/panic1.png",ml="src/components/images/panic4.png",Zc="src/components/images/panic3.png",e2=document.getElementById("image"),Wn=0,Gn=[_s,fl,_s,gl,vs,Xn,vs,Xn,_s,vs,Xn,vs,gl,_s,fl],t2=[Qc,ml,Zc,ml];function i2(){++Wn>=Gn.length&&(Wn=0),e2.src=Gn[Wn]}var L3=document.getElementById("brianSecondPage"),E3=document.getElementById("brianSecondPageBox"),M3=document.getElementById("switchFree"),I3=document.getElementById("switchPort"),B3=document.getElementById("freelancePresenter"),P3=document.getElementById("backCloud"),z3=document.querySelector(".switchwrap"),r2=document.querySelector(".homeWrap"),s2=document.querySelectorAll("#target"),A3=document.getElementById("launch"),O3=document.getElementById("clear"),n2=!1,o2=document.getElementById("top-target"),a2=document.getElementById("hi"),l2=document.getElementById("hiBox"),c2=document.getElementById("iam"),d2=document.getElementById("iamBox"),u2=document.getElementById("brianBox"),h2=document.getElementById("strout"),f2=document.getElementById("stroutBox"),g2=document.getElementById("title"),m2=document.getElementById("titleBox"),p2=document.querySelectorAll(".first-letters"),_2=document.getElementById("first-n"),pl=document.getElementById("fallingShell"),v2=document.getElementById("wrapper"),w2=document.getElementById("moodring"),y2=document.querySelectorAll(".cloudsForward"),b2=document.querySelectorAll(".cloudsBackwards"),_l=[...y2],vl=[...b2],D3=document.getElementById("remainder"),R3=document.getElementById("c1"),F3=document.getElementById("c2"),N3=document.getElementById("c3"),q3=document.getElementById("c4"),H3=document.getElementById("c5"),V3=document.getElementById("c6"),Y3=document.getElementById("c7"),X3=document.getElementById("c8"),W3=document.getElementById("c9"),G3=document.getElementById("c10"),U3=document.getElementById("c11"),x2=document.getElementById("sun"),k2=document.getElementById("moon"),j3=document.getElementById("target"),$3=document.getElementById("switchPort"),J3=document.getElementById("brianSecondChair"),K3=document.getElementById("brianBlurbP"),Q3=document.getElementById("listOfSkills"),T2=document.querySelectorAll(".shrunk"),Z3=[...T2],eu=document.getElementById("listed_skills_media"),S2=document.getElementsByTagName("li"),tu=[...S2],iu=document.getElementById("absolute-cloud"),ru=document.getElementById("copy-gmail"),su=document.getElementById("brianlinkedin"),nu=document.getElementById("briangithub"),ou=document.getElementById("resume-link"),au=document.querySelectorAll("iframe"),lu=document.getElementById("fallingSecond"),cu=document.getElementById("castle"),C2=document.querySelectorAll("#introToServices"),L2=Array.from(document.querySelectorAll(".nav--link")),wl=()=>{s2.forEach(s=>{ms.observe(s)}),C2.forEach(s=>{gs.observe(s)}),ps,setInterval(i2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),w2.addEventListener("click",()=>{v2.classList.toggle("dark"),x2.classList.toggle("sunset"),k2.classList.toggle("sunset")});let t=()=>{_l.forEach(s=>{s.classList.add("clouds-movement-foreground")}),vl.forEach(s=>{s.classList.add("clouds-movement-background")})},i=()=>{pl.classList.add("falling"),setTimeout(()=>{n2=!0},3500)};window.addEventListener("load",()=>{o2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{a2.classList.remove("translatedHi"),c2.classList.remove("translatedIam"),[...p2].forEach(n=>{n.classList.add("first-name-falling-in")}),h2.classList.remove("translatedStrout"),g2.classList.remove("translatedTitle"),setTimeout(()=>{t()},2e3),setTimeout(()=>{i()},3500)},1e3),setTimeout(()=>{r()},7500)}),_2.addEventListener("transitionend",function(){});let r=()=>{l2.classList.add("up-and-out"),d2.classList.add("up-and-out"),u2.classList.add("up-and-out"),f2.classList.add("up-and-out"),m2.classList.add("up-and-out"),setTimeout(()=>{Gn=t2},2e3),setTimeout(()=>{a.style.overflow="visible",pl.classList.add("down-and-out"),_l.forEach(s=>{s.classList.add("unseen")}),vl.forEach(s=>{s.classList.add("unseen")})},2500),setTimeout(()=>{r2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{document.getElementById("nav--menu").classList.add("introd"),L2.forEach(s=>{s.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),S0("andgo"),hl()},6500)}};Ii.registerPlugin(H);var ws="src/components/images/falling1.png",yl="src/components/images/falling2.png",ys="src/components/images/falling5.png",Un="src/components/images/falling4.png",bl="src/components/images/falling6.png",E2="src/components/images/panic1.png",xl="src/components/images/panic4.png",M2="src/components/images/panic3.png",ku=document.getElementById("image");var I2=[ws,yl,ws,bl,ys,Un,ys,Un,ws,ys,Un,ys,bl,ws,yl],B2=[E2,xl,M2,xl];function P2(){}var Tu=document.getElementById("brianSecondPage"),Su=document.getElementById("brianSecondPageBox"),Cu=document.getElementById("switchFree"),Lu=document.getElementById("switchPort"),Eu=document.getElementById("freelancePresenter"),Mu=document.getElementById("backCloud"),Iu=document.querySelector(".switchwrap"),z2=document.querySelector(".homeWrap"),A2=document.querySelectorAll("#target"),Bu=document.getElementById("launch"),Pu=document.getElementById("clear"),O2=!1,D2=document.getElementById("top-target"),R2=document.getElementById("hi"),F2=document.getElementById("hiBox"),N2=document.getElementById("iam"),q2=document.getElementById("iamBox"),H2=document.getElementById("brianBox"),V2=document.getElementById("strout"),Y2=document.getElementById("stroutBox"),X2=document.getElementById("title"),W2=document.getElementById("titleBox"),G2=document.querySelectorAll(".first-letters"),U2=document.getElementById("first-n"),kl=document.getElementById("fallingShell"),j2=document.getElementById("wrapper"),$2=document.getElementById("moodring"),J2=document.querySelectorAll(".cloudsForward"),K2=document.querySelectorAll(".cloudsBackwards"),Tl=[...J2],Sl=[...K2],zu=document.getElementById("remainder"),Au=document.getElementById("c1"),Ou=document.getElementById("c2"),Du=document.getElementById("c3"),Ru=document.getElementById("c4"),Fu=document.getElementById("c5"),Nu=document.getElementById("c6"),qu=document.getElementById("c7"),Hu=document.getElementById("c8"),Vu=document.getElementById("c9"),Yu=document.getElementById("c10"),Xu=document.getElementById("c11"),Q2=document.getElementById("sun"),Z2=document.getElementById("moon"),Wu=document.getElementById("target"),Gu=document.getElementById("switchPort"),Uu=document.getElementById("brianSecondChair"),ju=document.getElementById("brianBlurbP"),$u=document.getElementById("listOfSkills"),ed=document.querySelectorAll(".shrunk"),Ju=[...ed],Ku=document.getElementById("listed_skills_media"),td=document.getElementsByTagName("li"),Qu=[...td],Zu=document.getElementById("absolute-cloud"),e5=document.getElementById("copy-gmail"),t5=document.getElementById("brianlinkedin"),i5=document.getElementById("briangithub"),r5=document.getElementById("resume-link"),s5=document.querySelectorAll("iframe"),n5=document.getElementById("fallingSecond"),o5=document.getElementById("castle"),id=document.querySelectorAll("#introToServices"),rd=Array.from(document.querySelectorAll(".nav--link")),Cl=()=>{console.log("in development, skipping animation"),A2.forEach(s=>{ms.observe(s)}),id.forEach(s=>{gs.observe(s)}),ps,setInterval(P2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),$2.addEventListener("click",()=>{j2.classList.toggle("dark"),Q2.classList.toggle("sunset"),Z2.classList.toggle("sunset")});let t=()=>{Tl.forEach(s=>{s.classList.add("clouds-movement-foreground")}),Sl.forEach(s=>{s.classList.add("clouds-movement-background")})},i=()=>{kl.classList.add("falling"),setTimeout(()=>{O2=!0},0)};window.addEventListener("load",()=>{D2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{R2.classList.remove("translatedHi"),N2.classList.remove("translatedIam"),[...G2].forEach(n=>{n.classList.add("first-name-falling-in")}),V2.classList.remove("translatedStrout"),X2.classList.remove("translatedTitle"),setTimeout(()=>{t()},0),setTimeout(()=>{i()},0)},0),setTimeout(()=>{r()},0)}),U2.addEventListener("transitionend",function(){});let r=()=>{F2.classList.add("up-and-out"),q2.classList.add("up-and-out"),H2.classList.add("up-and-out"),Y2.classList.add("up-and-out"),W2.classList.add("up-and-out"),setTimeout(()=>{I2=B2},0),setTimeout(()=>{a.style.overflow="visible",kl.classList.add("down-and-out"),Tl.forEach(s=>{s.classList.add("unseen")}),Sl.forEach(s=>{s.classList.add("unseen")})},0),setTimeout(()=>{z2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{rd.forEach(s=>{s.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),ul("intro")},0)}};var ar=document.getElementById("deckOfMarketingCards"),l5=ar.querySelectorAll(".marketing__mobileCard"),jn=0,v0=!1,pi=null;function Ll(a){if(console.log("moving"),!v0||!pi)return;let i=a.touches[0].clientX-jn;pi.style.transform=`translateX(${i}px) rotate(${i/20}deg)`}function El(a){console.log("touch start sensed"),!v0&&(pi=ar.firstElementChild,jn=a.touches[0].clientX,v0=!0)}function Ml(a){if(console.log("touch end sensed"),!v0||!pi)return;let i=a.changedTouches[0].clientX-jn,r=window.innerWidth*.3;if(Math.abs(i)>r){let s=i>0?1:-1;pi.style.transition="transform 0.3s ease-out",pi.style.transform=`translateX(${s*100}vw) rotate(${s*20}deg)`,setTimeout(()=>{sd(pi)},300)}else pi.style.transition="transform 0.2s ease-out",pi.style.transform="translateX(0) rotate(0)";v0=!1}function sd(a){a.style.transition="none",a.style.transform="translateX(0) rotate(0)",ar.appendChild(a)}var nd={threshold:Array.from({length:101},(a,t)=>t/100)},Il=new IntersectionObserver((a,t)=>{a.forEach(i=>{console.log(i.target.classlist);let r=i.intersectionRatio;if(i.isIntersecting){if(i.isIntersecting){if(r<.4||r>.9)return;let s=(r-.5)/(.9-.5),n=i.target.querySelector("#leftCurtain"),o=i.target.querySelector("#rightCurtain");if(n&&o){let l=40+50*s;n.style.right=`${l}%`,o.style.left=`${l}%`}}}else return})},nd);Ii.registerPlugin(H);var od=!1;od?Cl():wl();function Bl(){return window.innerWidth<=768}var y5=Bl();Bl&&(console.log("index has registered mobile we be launching listeners"),ar.addEventListener("touchstart",El),ar.addEventListener("touchmove",Ll),ar.addEventListener("touchend",Ml));document.addEventListener("click",(a,t)=>{S0(a),console.log("click")});var b5=document.getElementById("portgithub"),x5=document.getElementById("mashagithub"),k5=document.getElementById("mashanetlify"),T5=document.getElementById("fugagithub"),S5=document.getElementById("fuganetlify");wrapper.addEventListener("click",a=>{if(!(a.target.nodeName==="BUTTON"))return;switch(a.target.id){case"portgithub":lr("github.com/BrianStrout/Portfolio");break;case"mashagithub":lr("github.com/BrianStrout/masha");break;case"mashanetlify":lr("mashaoflisbon.netlify.app/");break;case"fugagithub":lr("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":lr("lafugitiva.netlify.app/");break;case"rotaryyoutube":lr("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":lr("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var lr=a=>{window.open(`https://${a}`,"_blank")};var ad=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ad=!0}}))}catch{}var C5="onwheel"in document.createElement("div")?"wheel":"mousewheel";var ld=document.querySelectorAll(".fademe");ld.forEach(a=>{Kn.observe(a)});var cd=document.querySelector("#movieTheater");Il.observe(cd);ro({elementId:"websiteGridPresentation",onProgress:a=>{}});var dd=Ii.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});dd.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
