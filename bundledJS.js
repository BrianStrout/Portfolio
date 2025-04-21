(()=>{function Js(a,t,i,r,n){let s,o;if(a==="id")s=document.getElementById(`${t}`);else if(a==="class")o=Array.from(document.querySelectorAll(`.${t}`)),o.forEach(l=>{l.classList[i](`${r}`)});else{console.log("selector error");return}}var I1={threshold:.4},Ks=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(i.isIntersecting)i.isIntersecting&&i.target.classList.remove("fadeup");else return})},I1);var F0=document.querySelector(".canvas"),Qs=!0,Zs={frame:0},eo=F0.getContext("2d"),P1=80,to=[],z1=a=>`/src/components/images/animation/${a}.png`,A1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let a=0;a<P1;a++){let t=new Image;t.src=z1(a),to.push(t)}},O1=a=>{eo.clearRect(0,0,F0.width,F0.height),eo.drawImage(to[a],0,0,F0.width,F0.height)};function D1(a,t){let i=a,r=a,n=2e3,s=t-a,o=performance.now();function l(){let c=performance.now()-o,d=Math.min(c/n,1);d=1-Math.pow(1-d,3),i=Math.round(a+d*s),i!==r&&(r=i,O1(r)),d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}var yt=a=>{console.log("updateAnimationFrame",a),Qs&&(A1(),Qs=!1),typeof a=="number"&&(D1(Zs.frame,a),Zs.frame=a)};var io=null;var R1=a=>{let t=Math.floor(a*100/25)*25;if(console.log(t,"new map"),a<.025?yt(0):a>.025&&a<.24?yt(19):a>.24&&a<.49?yt(39):a>.5&&a<.75?yt(59):a>.75&&yt(79),t===io||t===100)return;io=t,console.log(t,"is map adjuster");let i=document.querySelector(".web__grid--right");if(!i){console.warn("Element '.web__grid--right' not found.");return}i.style.transform=`translateX(-${t}%)`,console.log(i.style)};function ro({elementId:a="websiteGridPresentation",parentID:t="sc__websites",onProgress:i=o=>{},scrollOffsetVh:r=10,enterThreshold:n=[.6,.98],stillnessDelay:s=1500}={}){console.log("Website scroll tracking initialized.");let o=document.getElementById(a),l=document.getElementById(t);if(!o||!l){console.warn(`Required element(s) not found: ${o?t:a}`);return}l.addEventListener("scroll",()=>{c()});function c(){let d=l.scrollTop,u=o.offsetTop,g=o.offsetHeight,m=l.clientHeight,h=d-u,p=g-m,v=Math.max(0,Math.min(h,p))/p;console.log(v),i(v),R1(v)}}var no=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var so=a=>{console.log("we are live in submitter about to to predef");let t=document.getElementById("contactForm"),i="service_9l2h8gg",r="template_36awvk9",n=document.getElementById("formMessage").value;emailjs.sendForm(i,r,t,"oYymItkIoREaVvBlM").then(s=>{console.log("SUCCESS!",s.status,s.text)}).catch(s=>{console.error(s.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${n}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),no()};var wd=document.getElementById("contactForm"),yd=document.getElementById("formName"),bd=document.getElementById("formEmail"),xd=document.getElementById("formMessage"),kn=!1,Tn=!1,Sn=!1,h0;function Cn(){console.log("GOIGM FOR ALL"),kn&&Tn&&Sn?(console.log("all fields pass!"),so()):(console.log("field failure"),console.log(kn,Tn,Sn))}function F1(a){return h0=/^[a-z a-z]+$/gi,h0.test(a)?(console.log("name pass"),kn=!0,Cn(),!0):(console.log("fail name"),!1)}function N1(a){return h0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,h0.test(a)?(console.log("email pass"),Tn=!0,Cn(),!0):(console.log("not a valid email"),!1)}function q1(a){return h0=/.{8}/,h0.test(a)?(console.log("message pass"),Sn=!0,Cn(),!0):(console.log("fail"),!1)}var kr=()=>{console.log("validating?"),F1(document.getElementById("formName").value),N1(document.getElementById("formEmail").value),q1(document.getElementById("formMessage").value)};var qi=[{header:"Presence Auditing",description:'<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Presence Auditing</div><div class="description"><p>Determining and reviewing where you are is a great first step in growing your online presences<br /><br /> we can get started by:</p> <ul><li class="fadeRight"> Branding consistency review</li><li class="fadeRight sec">SEO & UX audit</li><li class="fadeRight thi">Competitor analysis</li></ul></div></div></div></div>',slug:"auditicon",image:"src/components/images/marketingicons/assess.webp"},{header:"Strategy",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Strategy</div><div class="description"><p>   Need to figure out the most efficient way to
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
`],N0=["mc1","mc2","mc3","mc4","mc5"],Cd=document.getElementById("msParagraph"),ao=document.querySelector(".ms__icons"),Gt=0;var En;function H1(){return window.innerWidth<=768}H1()?console.log("User is on a mobile device"):console.log("User is on a desktop");var V1=a=>{ao.querySelector(".risen")&&(En=ao.querySelector(".risen"),console.log(En,"should be risen var"),En.classList.remove("risen")),document.querySelector(`#${a}`).classList.add("risen")},Y1=document.getElementById("msArrowLeft"),Tr=4,X1=document.getElementById("msArrowRight"),Sr=2,W1=a=>{console.log("in arrow"),console.log(a),Tr=a-1,a===0&&(Tr=4),Sr=a+1,a===4&&(Sr=0),Gt<0&&(Gt=qi.length-1),console.log(Tr,Sr),Y1.style.backgroundImage=`url(/${qi[Tr].image})`,X1.style.backgroundImage=`url(/${qi[Sr].image})`},G1=a=>{console.log("moving",a),a.forEach((t,i)=>{console.log(t,i),console.log(`${oo[i]}`),document.getElementById(`${t}`).style=`${oo[i]}`})},lo=a=>{if(a==="left"){Gt--,Gt<0&&(Gt=qi.length-1);let t=N0.pop();N0.unshift(t)}if(a==="right"){Gt++,Gt===qi.length&&(Gt=0);let t=N0.shift();N0.push(t)}V1(qi[Gt].slug),W1(Gt),G1(N0)},co=a=>{console.log("marketing controller live",a),a.classList.contains("arrowLeft")&&(console.log("Left!"),lo("left")),a.classList.contains("arrowRight")&&(console.log("Right!"),lo("right"))};var H=document.querySelector("#sc__hello");var q0=!1,bi=()=>{if(window.innerWidth<=768){q0=!q0,console.log(q0),q0?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):q0||(document.getElementById("mobileBack").innerHTML="");return}},H0=a=>{if(console.log("new",a.target),a==="cta"){H0("m--contact");return}if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(a==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(t=>{t.tagName&&t.tagName==="DIV"&&t.classList.add("hit")});return}if(a.target.classList.contains("arrow")&&co(a.target),a.target.classList.contains("nav--link")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let t=document.querySelectorAll(".hit");t.length>0&&t.forEach(i=>{i.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(i=>{i.classList.add("blur"),i.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(i=>{i.classList.contains("fadeup")||i.classList.add("fadeup")})}switch(a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"submit":console.log("submitting in the new controller"),a.preventDefault(),kr();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--marketing":H=document.querySelector("#sc__marketing"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--web":H=document.querySelector("#sc__websites"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--video":H=document.querySelector("#sc__video"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--nerd":H=document.querySelector("#sc__nerd"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")});let i=[...document.getElementsByTagName("li")],r=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{i.forEach(n=>{n.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--reference":H=document.querySelector("#sc__reference"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--contact":H=document.querySelector("#sc__contact"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break}a.target.classList.contains("marketing__mobileCard")&&console.log("should pull up swiper??")};function si(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function vo(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},g0={duration:.5,overwrite:!1,delay:0},Gn,Ne,ce,Bt=1e8,ne=1/Bt,On=Math.PI*2,U1=On/4,j1=0,wo=Math.sqrt,$1=Math.cos,J1=Math.sin,Me=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},ai=function(t){return typeof t=="number"},Or=function(t){return typeof t>"u"},$t=function(t){return typeof t=="object"},gt=function(t){return t!==!1},Un=function(){return typeof window<"u"},Cr=function(t){return me(t)||Me(t)},yo=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Dn=/(?:-?\.?\d|\.)+/gi,jn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ln=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$n=/[+-]=-?[.\d]+/,bo=/[^,'"\[\]\s]+/gi,K1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Ut,Rn,Jn,xt={},Br={},xo,ko=function(t){return(Br=m0(t,xt))&&Ue},Dr=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},U0=function(t,i){return!i&&console.warn(t)},To=function(t,i){return t&&(xt[t]=i)&&Br&&(Br[t]=i)||xt},j0=function(){return 0},Q1={suppressEvents:!0,isStart:!0,kill:!1},Er={suppressEvents:!0,kill:!1},Z1={suppressEvents:!0},Kn={},ki=[],Fn={},So,ht={},Mn={},uo=30,Lr=[],Qn="",Zn=function(t){var i=t[0],r,n;if($t(i)||me(i)||(t=[t]),!(r=(i._gsap||{}).harness)){for(n=Lr.length;n--&&!Lr[n].targetTest(i););r=Lr[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new is(t[n],r)))||t.splice(n,1);return t},Ti=function(t){return t._gsap||Zn(It(t))[0]._gsap},es=function(t,i,r){return(r=t[i])&&me(r)?t[i]():Or(r)&&t.getAttribute&&t.getAttribute(i)||r},it=function(t,i){return(t=t.split(",")).forEach(i)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wi=function(t,i){var r=i.charAt(0),n=parseFloat(i.substr(2));return t=parseFloat(t),r==="+"?t+n:r==="-"?t-n:r==="*"?t*n:t/n},el=function(t,i){for(var r=i.length,n=0;t.indexOf(i[n])<0&&++n<r;);return n<r},Ir=function(){var t=ki.length,i=ki.slice(0),r,n;for(Fn={},ki.length=0,r=0;r<t;r++)n=i[r],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Co=function(t,i,r,n){ki.length&&!Ne&&Ir(),t.render(i,r,n||Ne&&i<0&&(t._initted||t._startAt)),ki.length&&!Ne&&Ir()},Eo=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(bo).length<2?i:Me(t)?t.trim():t},Lo=function(t){return t},kt=function(t,i){for(var r in i)r in t||(t[r]=i[r]);return t},tl=function(t){return function(i,r){for(var n in r)n in i||n==="duration"&&t||n==="ease"||(i[n]=r[n])}},m0=function(t,i){for(var r in i)t[r]=i[r];return t},ho=function a(t,i){for(var r in i)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=$t(i[r])?a(t[r]||(t[r]={}),i[r]):i[r]);return t},Pr=function(t,i){var r={},n;for(n in t)n in i||(r[n]=t[n]);return r},X0=function(t){var i=t.parent||ue,r=t.keyframes?tl(Ge(t.keyframes)):kt;if(gt(t.inherit))for(;i;)r(t,i.vars.defaults),i=i.parent||i._dp;return t},il=function(t,i){for(var r=t.length,n=r===i.length;n&&r--&&t[r]===i[r];);return r<0},Mo=function(t,i,r,n,s){r===void 0&&(r="_first"),n===void 0&&(n="_last");var o=t[n],l;if(s)for(l=i[s];o&&o[s]>l;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=t[r],t[r]=i),i._next?i._next._prev=i:t[n]=i,i._prev=o,i.parent=i._dp=t,i},Rr=function(t,i,r,n){r===void 0&&(r="_first"),n===void 0&&(n="_last");var s=i._prev,o=i._next;s?s._next=o:t[r]===i&&(t[r]=o),o?o._prev=s:t[n]===i&&(t[n]=s),i._next=i._prev=i.parent=null},Si=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},rl=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},Nn=function(t,i,r,n){return t._startAt&&(Ne?t._startAt.revert(Er):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,n))},nl=function a(t){return!t||t._ts&&a(t.parent)},fo=function(t){return t._repeat?p0(t._tTime,t=t.duration()+t._rDelay)*t:0},p0=function(t,i){var r=Math.floor(t=Se(t/i));return t&&r===t?r-1:r},zr=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Fr=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Nr=function(t,i){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=Se(r._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),Fr(t),r._dirty||Hi(r,t)),t},Bo=function(t,i){var r;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(r=zr(t.rawTime(),i),(!i._dur||K0(0,i.totalDuration(),r)-i._tTime>ne)&&i.render(r,!0)),Hi(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-ne}},jt=function(t,i,r,n){return i.parent&&Si(i),i._start=Se((ai(r)?r:r||t!==ue?Mt(t,r,i):t._time)+i._delay),i._end=Se(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Mo(t,i,"_first","_last",t._sort?"_start":0),qn(i)||(t._recent=i),n||Bo(t,i),t._ts<0&&Nr(t,t._tTime),t},Io=function(t,i){return(xt.ScrollTrigger||Dr("scrollTrigger",i))&&xt.ScrollTrigger.create(i,t)},Po=function(t,i,r,n,s){if(ss(t,i,s),!t._initted)return 1;if(!r&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&So!==ft.frame)return ki.push(t),t._lazy=[s,n],1},sl=function a(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},qn=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},ol=function(t,i,r,n){var s=t.ratio,o=i<0||!i&&(!t._start&&sl(t)&&!(!t._initted&&qn(t))||(t._ts<0||t._dp._ts<0)&&!qn(t))?0:1,l=t._rDelay,c=0,d,u,g;if(l&&t._repeat&&(c=K0(0,t._tDur,i),u=p0(c,l),t._yoyo&&u&1&&(o=1-o),u!==p0(t._tTime,l)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ne||n||t._zTime===ne||!i&&t._zTime){if(!t._initted&&Po(t,i,n,r,c))return;for(g=t._zTime,t._zTime=i||(r?ne:0),r||(r=i&&!g),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,d=t._pt;d;)d.r(o,d.d),d=d._next;i<0&&Nn(t,i,r,!0),t._onUpdate&&!r&&bt(t,"onUpdate"),c&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===o&&(o&&Si(t,1),!r&&!Ne&&(bt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},al=function(t,i,r){var n;if(r>i)for(n=t._first;n&&n._start<=r;){if(n.data==="isPause"&&n._start>i)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if(n.data==="isPause"&&n._start<i)return n;n=n._prev}},_0=function(t,i,r,n){var s=t._repeat,o=Se(i)||0,l=t._tTime/t._tDur;return l&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Se(o*(s+1)+t._rDelay*s):o,l>0&&!n&&Nr(t,t._tTime=t._tDur*l),t.parent&&Fr(t),r||Hi(t.parent,t),t},go=function(t){return t instanceof Fe?Hi(t):_0(t,t._dur)},ll={_start:0,endTime:j0,totalDuration:j0},Mt=function a(t,i,r){var n=t.labels,s=t._recent||ll,o=t.duration()>=Bt?s.endTime(!1):t._dur,l,c,d;return Me(i)&&(isNaN(i)||i in n)?(c=i.charAt(0),d=i.substr(-1)==="%",l=i.indexOf("="),c==="<"||c===">"?(l>=0&&(i=i.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(d?(l<0?s:r).totalDuration()/100:1)):l<0?(i in n||(n[i]=o),n[i]):(c=parseFloat(i.charAt(l-1)+i.substr(l+1)),d&&r&&(c=c/100*(Ge(r)?r[0]:r).totalDuration()),l>1?a(t,i.substr(0,l-1),r)+c:o+c)):i==null?o:+i},W0=function(t,i,r){var n=ai(i[1]),s=(n?2:1)+(t<2?0:1),o=i[s],l,c;if(n&&(o.duration=i[1]),o.parent=r,t){for(l=o,c=r;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=gt(c.vars.inherit)&&c.parent;o.immediateRender=gt(l.immediateRender),t<2?o.runBackwards=1:o.startAt=i[s-1]}return new xe(i[0],o,i[s+1])},Ci=function(t,i){return t||t===0?i(t):i},K0=function(t,i,r){return r<t?t:r>i?i:r},qe=function(t,i){return!Me(t)||!(i=K1.exec(t))?"":i[1]},cl=function(t,i,r){return Ci(r,function(n){return K0(t,i,n)})},Hn=[].slice,zo=function(t,i){return t&&$t(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&$t(t[0]))&&!t.nodeType&&t!==Ut},dl=function(t,i,r){return r===void 0&&(r=[]),t.forEach(function(n){var s;return Me(n)&&!i||zo(n,1)?(s=r).push.apply(s,It(n)):r.push(n)})||r},It=function(t,i,r){return ce&&!i&&ce.selector?ce.selector(t):Me(t)&&!r&&(Rn||!v0())?Hn.call((i||Jn).querySelectorAll(t),0):Ge(t)?dl(t,r):zo(t)?Hn.call(t,0):t?[t]:[]},Vn=function(t){return t=It(t)[0]||U0("Invalid scope")||{},function(i){var r=t.current||t.nativeElement||t;return It(i,r.querySelectorAll?r:r===t?U0("Invalid scope")||Jn.createElement("div"):t)}},Ao=function(t){return t.sort(function(){return .5-Math.random()})},Oo=function(t){if(me(t))return t;var i=$t(t)?t:{each:t},r=Vi(i.ease),n=i.from||0,s=parseFloat(i.base)||0,o={},l=n>0&&n<1,c=isNaN(n)||l,d=i.axis,u=n,g=n;return Me(n)?u=g={center:.5,edges:.5,end:1}[n]||0:!l&&c&&(u=n[0],g=n[1]),function(m,h,p){var f=(p||i).length,v=o[f],k,x,S,y,T,E,b,M,C;if(!v){if(C=i.grid==="auto"?0:(i.grid||[1,Bt])[1],!C){for(b=-Bt;b<(b=p[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(v=o[f]=[],k=c?Math.min(C,f)*u-.5:n%C,x=C===Bt?0:c?f*g/C-.5:n/C|0,b=0,M=Bt,E=0;E<f;E++)S=E%C-k,y=x-(E/C|0),v[E]=T=d?Math.abs(d==="y"?y:S):wo(S*S+y*y),T>b&&(b=T),T<M&&(M=T);n==="random"&&Ao(v),v.max=b-M,v.min=M,v.v=f=(parseFloat(i.amount)||parseFloat(i.each)*(C>f?f-1:d?d==="y"?f/C:C:Math.max(C,f/C))||0)*(n==="edges"?-1:1),v.b=f<0?s-f:s,v.u=qe(i.amount||i.each)||0,r=r&&f<0?Xo(r):r}return f=(v[m]-v.min)/v.max||0,Se(v.b+(r?r(f):f)*v.v)+v.u}},Yn=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var n=Se(Math.round(parseFloat(r)/t)*t*i);return(n-n%1)/i+(ai(r)?0:qe(r))}},Do=function(t,i){var r=Ge(t),n,s;return!r&&$t(t)&&(n=r=t.radius||Bt,t.values?(t=It(t.values),(s=!ai(t[0]))&&(n*=n)):t=Yn(t.increment)),Ci(i,r?me(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var l=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),d=Bt,u=0,g=t.length,m,h;g--;)s?(m=t[g].x-l,h=t[g].y-c,m=m*m+h*h):m=Math.abs(t[g]-l),m<d&&(d=m,u=g);return u=!n||d<=n?t[u]:o,s||u===o||ai(o)?u:u+qe(o)}:Yn(t))},Ro=function(t,i,r,n){return Ci(Ge(t)?!i:r===!0?!!(r=0):!n,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(i-t+r*.99))/r)*r*n)/n})},ul=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return function(n){return i.reduce(function(s,o){return o(s)},n)}},hl=function(t,i){return function(r){return t(parseFloat(r))+(i||qe(r))}},fl=function(t,i,r){return No(t,i,0,1,r)},Fo=function(t,i,r){return Ci(r,function(n){return t[~~i(n)]})},gl=function a(t,i,r){var n=i-t;return Ge(t)?Fo(t,a(0,t.length),i):Ci(r,function(s){return(n+(s-t)%n)%n+t})},ml=function a(t,i,r){var n=i-t,s=n*2;return Ge(t)?Fo(t,a(0,t.length-1),i):Ci(r,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},w0=function(t){for(var i=0,r="",n,s,o,l;~(n=t.indexOf("random(",i));)o=t.indexOf(")",n),l=t.charAt(n+7)==="[",s=t.substr(n+7,o-n-7).match(l?bo:Dn),r+=t.substr(i,n-i)+Ro(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),i=o+1;return r+t.substr(i,t.length-i)},No=function(t,i,r,n,s){var o=i-t,l=n-r;return Ci(s,function(c){return r+((c-t)/o*l||0)})},pl=function a(t,i,r,n){var s=isNaN(t+i)?0:function(h){return(1-h)*t+h*i};if(!s){var o=Me(t),l={},c,d,u,g,m;if(r===!0&&(n=1)&&(r=null),o)t={p:t},i={p:i};else if(Ge(t)&&!Ge(i)){for(u=[],g=t.length,m=g-2,d=1;d<g;d++)u.push(a(t[d-1],t[d]));g--,s=function(p){p*=g;var f=Math.min(m,~~p);return u[f](p-f)},r=i}else n||(t=m0(Ge(t)?[]:{},t));if(!u){for(c in i)rs.call(l,t,c,"get",i[c]);s=function(p){return ls(p,l)||(o?t.p:t)}}}return Ci(r,s)},mo=function(t,i,r){var n=t.labels,s=Bt,o,l,c;for(o in n)l=n[o]-i,l<0==!!r&&l&&s>(l=Math.abs(l))&&(c=o,s=l);return c},bt=function(t,i,r){var n=t.vars,s=n[i],o=ce,l=t._ctx,c,d,u;if(s)return c=n[i+"Params"],d=n.callbackScope||t,r&&ki.length&&Ir(),l&&(ce=l),u=c?s.apply(d,c):s.call(d),ce=o,u},V0=function(t){return Si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&bt(t,"onInterrupt"),t},f0,qo=[],Ho=function(t){if(t)if(t=!t.name&&t.default||t,Un()||t.headless){var i=t.name,r=me(t),n=i&&!r&&t.init?function(){this._props=[]}:t,s={init:j0,render:ls,add:rs,kill:Pl,modifier:Il,rawVars:0},o={targetTest:0,get:0,getSetter:qr,aliases:{},register:0};if(v0(),t!==n){if(ht[i])return;kt(n,kt(Pr(t,s),o)),m0(n.prototype,m0(s,Pr(t,o))),ht[n.prop=i]=n,t.targetTest&&(Lr.push(n),Kn[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}To(i,n),t.register&&t.register(Ue,n,rt)}else qo.push(t)},re=255,Y0={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Bn=function(t,i,r){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(r-i)*t*6:t<.5?r:t*3<2?i+(r-i)*(2/3-t)*6:i)*re+.5|0},Vo=function(t,i,r){var n=t?ai(t)?[t>>16,t>>8&re,t&re]:0:Y0.black,s,o,l,c,d,u,g,m,h,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Y0[t])n=Y0[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),l=t.charAt(3),t="#"+s+s+o+o+l+l+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&re,n&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(Dn),!i)c=+n[0]%360/360,d=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(d+1):u+d-u*d,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=Bn(c+1/3,s,o),n[1]=Bn(c,s,o),n[2]=Bn(c-1/3,s,o);else if(~t.indexOf("="))return n=t.match(jn),r&&n.length<4&&(n[3]=1),n}else n=t.match(Dn)||Y0.transparent;n=n.map(Number)}return i&&!p&&(s=n[0]/re,o=n[1]/re,l=n[2]/re,g=Math.max(s,o,l),m=Math.min(s,o,l),u=(g+m)/2,g===m?c=d=0:(h=g-m,d=u>.5?h/(2-g-m):h/(g+m),c=g===s?(o-l)/h+(o<l?6:0):g===o?(l-s)/h+2:(s-o)/h+4,c*=60),n[0]=~~(c+.5),n[1]=~~(d*100+.5),n[2]=~~(u*100+.5)),r&&n.length<4&&(n[3]=1),n},Yo=function(t){var i=[],r=[],n=-1;return t.split(oi).forEach(function(s){var o=s.match(Xi)||[];i.push.apply(i,o),r.push(n+=o.length+1)}),i.c=r,i},po=function(t,i,r){var n="",s=(t+n).match(oi),o=i?"hsla(":"rgba(",l=0,c,d,u,g;if(!s)return t;if(s=s.map(function(m){return(m=Vo(m,i,1))&&o+(i?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),r&&(u=Yo(t),c=r.c,c.join(n)!==u.c.join(n)))for(d=t.replace(oi,"1").split(Xi),g=d.length-1;l<g;l++)n+=d[l]+(~c.indexOf(l)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:r).shift());if(!d)for(d=t.split(oi),g=d.length-1;l<g;l++)n+=d[l]+s[l];return n+d[g]},oi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Y0)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),_l=/hsl[a]?\(/,ts=function(t){var i=t.join(" "),r;if(oi.lastIndex=0,oi.test(i))return r=_l.test(i),t[1]=po(t[1],r),t[0]=po(t[0],r,Yo(t[1])),!0},$0,ft=function(){var a=Date.now,t=500,i=33,r=a(),n=r,s=1e3/240,o=s,l=[],c,d,u,g,m,h,p=function f(v){var k=a()-n,x=v===!0,S,y,T,E;if((k>t||k<0)&&(r+=k-i),n+=k,T=n-r,S=T-o,(S>0||x)&&(E=++g.frame,m=T-g.time*1e3,g.time=T=T/1e3,o+=S+(S>=s?4:s-S),y=1),x||(c=d(f)),y)for(h=0;h<l.length;h++)l[h](T,m,E,v)};return g={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(v){return m/(1e3/(v||60))},wake:function(){xo&&(!Rn&&Un()&&(Ut=Rn=window,Jn=Ut.document||{},xt.gsap=Ue,(Ut.gsapVersions||(Ut.gsapVersions=[])).push(Ue.version),ko(Br||Ut.GreenSockGlobals||!Ut.gsap&&Ut||{}),qo.forEach(Ho)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&g.sleep(),d=u||function(v){return setTimeout(v,o-g.time*1e3+1|0)},$0=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),$0=0,d=j0},lagSmoothing:function(v,k){t=v||1/0,i=Math.min(k||33,t)},fps:function(v){s=1e3/(v||240),o=g.time*1e3+s},add:function(v,k,x){var S=k?function(y,T,E,b){v(y,T,E,b),g.remove(S)}:v;return g.remove(v),l[x?"unshift":"push"](S),v0(),S},remove:function(v,k){~(k=l.indexOf(v))&&l.splice(k,1)&&h>=k&&h--},_listeners:l},g}(),v0=function(){return!$0&&ft.wake()},J={},vl=/^[\d.\-M][\d.\-,\s]/,wl=/["']/g,yl=function(t){for(var i={},r=t.substr(1,t.length-3).split(":"),n=r[0],s=1,o=r.length,l,c,d;s<o;s++)c=r[s],l=s!==o-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),i[n]=isNaN(d)?d.replace(wl,"").trim():+d,n=c.substr(l+1).trim();return i},bl=function(t){var i=t.indexOf("(")+1,r=t.indexOf(")"),n=t.indexOf("(",i);return t.substring(i,~n&&n<r?t.indexOf(")",r+1):r)},xl=function(t){var i=(t+"").split("("),r=J[i[0]];return r&&i.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[yl(i[1])]:bl(t).split(",").map(Eo)):J._CE&&vl.test(t)?J._CE("",t):r},Xo=function(t){return function(i){return 1-t(1-i)}},Wo=function a(t,i){for(var r=t._first,n;r;)r instanceof Fe?a(r,i):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==i&&(r.timeline?a(r.timeline,i):(n=r._ease,r._ease=r._yEase,r._yEase=n,r._yoyo=i)),r=r._next},Vi=function(t,i){return t&&(me(t)?t:J[t]||xl(t))||i},Gi=function(t,i,r,n){r===void 0&&(r=function(c){return 1-i(1-c)}),n===void 0&&(n=function(c){return c<.5?i(c*2)/2:1-i((1-c)*2)/2});var s={easeIn:i,easeOut:r,easeInOut:n},o;return it(t,function(l){J[l]=xt[l]=s,J[o=l.toLowerCase()]=r;for(var c in s)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[l+"."+c]=s[c]}),s},Go=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},In=function a(t,i,r){var n=i>=1?i:1,s=(r||(t?.3:.45))/(i<1?i:1),o=s/On*(Math.asin(1/n)||0),l=function(u){return u===1?1:n*Math.pow(2,-10*u)*J1((u-o)*s)+1},c=t==="out"?l:t==="in"?function(d){return 1-l(1-d)}:Go(l);return s=On/s,c.config=function(d,u){return a(t,d,u)},c},Pn=function a(t,i){i===void 0&&(i=1.70158);var r=function(o){return o?--o*o*((i+1)*o+i)+1:0},n=t==="out"?r:t==="in"?function(s){return 1-r(1-s)}:Go(r);return n.config=function(s){return a(t,s)},n};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var i=t<5?t+1:t;Gi(a+",Power"+(i-1),t?function(r){return Math.pow(r,i)}:function(r){return r},function(r){return 1-Math.pow(1-r,i)},function(r){return r<.5?Math.pow(r*2,i)/2:1-Math.pow((1-r)*2,i)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Gi("Elastic",In("in"),In("out"),In());(function(a,t){var i=1/t,r=2*i,n=2.5*i,s=function(l){return l<i?a*l*l:l<r?a*Math.pow(l-1.5/t,2)+.75:l<n?a*(l-=2.25/t)*l+.9375:a*Math.pow(l-2.625/t,2)+.984375};Gi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Gi("Circ",function(a){return-(wo(1-a*a)-1)});Gi("Sine",function(a){return a===1?1:-$1(a*U1)+1});Gi("Back",Pn("in"),Pn("out"),Pn());J.SteppedEase=J.steps=xt.SteppedEase={config:function(t,i){t===void 0&&(t=1);var r=1/t,n=t+(i?0:1),s=i?1:0,o=1-ne;return function(l){return((n*K0(0,o,l)|0)+s)*r}}};g0.ease=J["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Qn+=a+","+a+"Params,"});var is=function(t,i){this.id=j1++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:es,this.set=i?i.getSetter:qr},J0=function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,_0(this,+i.duration,1,1),this.data=i.data,ce&&(this._ctx=ce,ce.data.push(this)),$0||ft.wake()}var t=a.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,_0(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,n){if(v0(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nr(this,r),!s._dp||s.parent||Bo(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&jt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ne||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Co(this,r,n)),this},t.time=function(r,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+fo(this))%(this._dur+this._rDelay)||(r?this._dur:0),n):this._time},t.totalProgress=function(r,n){return arguments.length?this.totalTime(this.totalDuration()*r,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+fo(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*s,n):this._repeat?p0(this._tTime,s)+1:1},t.timeScale=function(r,n){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?zr(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-ne?0:this._rts,this.totalTime(K0(-Math.abs(this._delay),this._tDur,s),n!==!1),Fr(this),rl(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(v0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&jt(n,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(gt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var n=this.parent||this._dp;return n?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zr(n.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=Z1);var n=Ne;return Ne=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Ne=n,this},t.globalTime=function(r){for(var n=this,s=arguments.length?r:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(r):s},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,go(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var n=this._time;return this._rDelay=r,go(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,n){return this.totalTime(Mt(this,r),gt(n))},t.restart=function(r,n){return this.play().totalTime(r?-this._delay:0,gt(n)),this._dur||(this._zTime=-ne),this},t.play=function(r,n){return r!=null&&this.seek(r,n),this.reversed(!1).paused(!1)},t.reverse=function(r,n){return r!=null&&this.seek(r||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(r,n){return r!=null&&this.seek(r,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var r=this.parent||this._dp,n=this._start,s;return!!(!r||this._ts&&this._initted&&r.isActive()&&(s=r.rawTime(!0))>=n&&s<this.endTime(!0)-ne)},t.eventCallback=function(r,n,s){var o=this.vars;return arguments.length>1?(n?(o[r]=n,s&&(o[r+"Params"]=s),r==="onUpdate"&&(this._onUpdate=n)):delete o[r],this):o[r]},t.then=function(r){var n=this;return new Promise(function(s){var o=me(r)?r:Lo,l=function(){var d=n.then;n.then=null,me(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=d),s(o),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){V0(this)},a}();kt(J0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Fe=function(a){vo(t,a);function t(r,n){var s;return r===void 0&&(r={}),s=a.call(this,r)||this,s.labels={},s.smoothChildTiming=!!r.smoothChildTiming,s.autoRemoveChildren=!!r.autoRemoveChildren,s._sort=gt(r.sortChildren),ue&&jt(r.parent||ue,si(s),n),r.reversed&&s.reverse(),r.paused&&s.paused(!0),r.scrollTrigger&&Io(si(s),r.scrollTrigger),s}var i=t.prototype;return i.to=function(n,s,o){return W0(0,arguments,this),this},i.from=function(n,s,o){return W0(1,arguments,this),this},i.fromTo=function(n,s,o,l){return W0(2,arguments,this),this},i.set=function(n,s,o){return s.duration=0,s.parent=this,X0(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(n,s,Mt(this,o),1),this},i.call=function(n,s,o){return jt(this,xe.delayedCall(0,n,s),o)},i.staggerTo=function(n,s,o,l,c,d,u){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=d,o.onCompleteParams=u,o.parent=this,new xe(n,o,Mt(this,c)),this},i.staggerFrom=function(n,s,o,l,c,d,u){return o.runBackwards=1,X0(o).immediateRender=gt(o.immediateRender),this.staggerTo(n,s,o,l,c,d,u)},i.staggerFromTo=function(n,s,o,l,c,d,u,g){return l.startAt=o,X0(l).immediateRender=gt(l.immediateRender),this.staggerTo(n,s,l,c,d,u,g)},i.render=function(n,s,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=n<=0?0:Se(n),g=this._zTime<0!=n<0&&(this._initted||!d),m,h,p,f,v,k,x,S,y,T,E,b;if(this!==ue&&u>c&&n>=0&&(u=c),u!==this._tTime||o||g){if(l!==this._time&&d&&(u+=this._time-l,n+=this._time-l),m=u,y=this._start,S=this._ts,k=!S,g&&(d||(l=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,v=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,o);if(m=Se(u%v),u===c?(f=this._repeat,m=d):(T=Se(u/v),f=~~T,f&&f===T&&(m=d,f--),m>d&&(m=d)),T=p0(this._tTime,v),!l&&this._tTime&&T!==f&&this._tTime-T*v-this._dur<=0&&(T=f),E&&f&1&&(m=d-m,b=1),f!==T&&!this._lock){var M=E&&T&1,C=M===(E&&f&1);if(f<T&&(M=!M),l=M?0:u%d?d:u,this._lock=1,this.render(l||(b?0:Se(f*v)),s,!d)._lock=0,this._tTime=u,!s&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),l&&l!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=M?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Wo(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=al(this,Se(l),Se(m)),x&&(u-=m-(m=x._start))),this._tTime=u,this._time=m,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,l=0),!l&&m&&!s&&!f&&(bt(this,"onStart"),this._tTime!==u))return this;if(m>=l&&n>=0)for(h=this._first;h;){if(p=h._next,(h._act||m>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(m-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(m-h._start)*h._ts,s,o),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=-ne);break}}h=p}else{h=this._last;for(var L=n<0?n:m;h;){if(p=h._prev,(h._act||L<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(L-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(L-h._start)*h._ts,s,o||Ne&&(h._initted||h._startAt)),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=L?-ne:ne);break}}h=p}}if(x&&!s&&(this.pause(),x.render(m>=l?0:-ne)._zTime=m>=l?1:-1,this._ts))return this._start=y,Fr(this),this.render(n,s,o);this._onUpdate&&!s&&bt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(n<0&&!l)&&(u||l||!c)&&(bt(this,u===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(n,s){var o=this;if(ai(s)||(s=Mt(this,s,n)),!(n instanceof J0)){if(Ge(n))return n.forEach(function(l){return o.add(l,s)}),this;if(Me(n))return this.addLabel(n,s);if(me(n))n=xe.delayedCall(0,n);else return this}return this!==n?jt(this,n,s):this},i.getChildren=function(n,s,o,l){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-Bt);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof xe?s&&c.push(d):(o&&c.push(d),n&&c.push.apply(c,d.getChildren(!0,s,o)))),d=d._next;return c},i.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},i.remove=function(n){return Me(n)?this.removeLabel(n):me(n)?this.killTweensOf(n):(n.parent===this&&Rr(this,n),n===this._recent&&(this._recent=this._last),Hi(this))},i.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(ft.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},i.addLabel=function(n,s){return this.labels[n]=Mt(this,s),this},i.removeLabel=function(n){return delete this.labels[n],this},i.addPause=function(n,s,o){var l=xe.delayedCall(0,s||j0,o);return l.data="isPause",this._hasPause=1,jt(this,l,Mt(this,n))},i.removePause=function(n){var s=this._first;for(n=Mt(this,n);s;)s._start===n&&s.data==="isPause"&&Si(s),s=s._next},i.killTweensOf=function(n,s,o){for(var l=this.getTweensOf(n,o),c=l.length;c--;)xi!==l[c]&&l[c].kill(n,s);return this},i.getTweensOf=function(n,s){for(var o=[],l=It(n),c=this._first,d=ai(s),u;c;)c instanceof xe?el(c._targets,l)&&(d?(!xi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(l,s)).length&&o.push.apply(o,u),c=c._next;return o},i.tweenTo=function(n,s){s=s||{};var o=this,l=Mt(o,n),c=s,d=c.startAt,u=c.onStart,g=c.onStartParams,m=c.immediateRender,h,p=xe.to(o,kt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale())||ne,onStart:function(){if(o.pause(),!h){var v=s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale());p._dur!==v&&_0(p,v,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,g||[])}},s));return m?p.render(0):p},i.tweenFromTo=function(n,s,o){return this.tweenTo(s,kt({startAt:{time:Mt(this,n)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(n){return n===void 0&&(n=this._time),mo(this,Mt(this,n))},i.previousLabel=function(n){return n===void 0&&(n=this._time),mo(this,Mt(this,n),1)},i.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ne)},i.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,d;l;)l._start>=o&&(l._start+=n,l._end+=n),l=l._next;if(s)for(d in c)c[d]>=o&&(c[d]+=n);return Hi(this)},i.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return a.prototype.invalidate.call(this,n)},i.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Hi(this)},i.totalDuration=function(n){var s=0,o=this,l=o._last,c=Bt,d,u,g;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(g=o.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,jt(o,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(s-=u,(!g&&!o._dp||g&&g.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),l._end>s&&l._ts&&(s=l._end),l=d;_0(o,o===ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ue._ts&&(Co(ue,zr(n,ue)),So=ft.frame),ft.frame>=uo){uo+=mt.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&mt.autoSleep&&ft._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ft.sleep()}}},t}(J0);kt(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var kl=function(t,i,r,n,s,o,l){var c=new rt(this._pt,t,i,0,1,as,null,s),d=0,u=0,g,m,h,p,f,v,k,x;for(c.b=r,c.e=n,r+="",n+="",(k=~n.indexOf("random("))&&(n=w0(n)),o&&(x=[r,n],o(x,t,i),r=x[0],n=x[1]),m=r.match(Ln)||[];g=Ln.exec(n);)p=g[0],f=n.substring(d,g.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),p!==m[u++]&&(v=parseFloat(m[u-1])||0,c._pt={_next:c._pt,p:f||u===1?f:",",s:v,c:p.charAt(1)==="="?Wi(v,p)-v:parseFloat(p)-v,m:h&&h<4?Math.round:0},d=Ln.lastIndex);return c.c=d<n.length?n.substring(d,n.length):"",c.fp=l,($n.test(n)||k)&&(c.e=0),this._pt=c,c},rs=function(t,i,r,n,s,o,l,c,d,u){me(n)&&(n=n(s||0,t,o));var g=t[i],m=r!=="get"?r:me(g)?d?t[i.indexOf("set")||!me(t["get"+i.substr(3)])?i:"get"+i.substr(3)](d):t[i]():g,h=me(g)?d?Ll:$o:os,p;if(Me(n)&&(~n.indexOf("random(")&&(n=w0(n)),n.charAt(1)==="="&&(p=Wi(m,n)+(qe(m)||0),(p||p===0)&&(n=p))),!u||m!==n||Xn)return!isNaN(m*n)&&n!==""?(p=new rt(this._pt,t,i,+m||0,n-(m||0),typeof g=="boolean"?Bl:Jo,0,h),d&&(p.fp=d),l&&p.modifier(l,this,t),this._pt=p):(!g&&!(i in t)&&Dr(i,n),kl.call(this,t,i,m,n,h,c||mt.stringFilter,d))},Tl=function(t,i,r,n,s){if(me(t)&&(t=G0(t,s,i,r,n)),!$t(t)||t.style&&t.nodeType||Ge(t)||yo(t))return Me(t)?G0(t,s,i,r,n):t;var o={},l;for(l in t)o[l]=G0(t[l],s,i,r,n);return o},ns=function(t,i,r,n,s,o){var l,c,d,u;if(ht[t]&&(l=new ht[t]).init(s,l.rawVars?i[t]:Tl(i[t],n,s,o,r),r,n,o)!==!1&&(r._pt=c=new rt(r._pt,s,t,0,1,l.render,l,0,l.priority),r!==f0))for(d=r._ptLookup[r._targets.indexOf(s)],u=l._props.length;u--;)d[l._props[u]]=c;return l},xi,Xn,ss=function a(t,i,r){var n=t.vars,s=n.ease,o=n.startAt,l=n.immediateRender,c=n.lazy,d=n.onUpdate,u=n.runBackwards,g=n.yoyoEase,m=n.keyframes,h=n.autoRevert,p=t._dur,f=t._startAt,v=t._targets,k=t.parent,x=k&&k.data==="nested"?k.vars.targets:v,S=t._overwrite==="auto"&&!Gn,y=t.timeline,T,E,b,M,C,L,D,B,U,W,K,j,O;if(y&&(!m||!s)&&(s="none"),t._ease=Vi(s,g0.ease),t._yEase=g?Xo(Vi(g===!0?s:g,g0.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!y&&!!n.runBackwards,!y||m&&!n.stagger){if(B=v[0]?Ti(v[0]).harness:0,j=B&&n[B.prop],T=Pr(n,Kn),f&&(f._zTime<0&&f.progress(1),i<0&&u&&l&&!h?f.render(-1,!0):f.revert(u&&p?Er:Q1),f._lazy=0),o){if(Si(t._startAt=xe.set(v,kt({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!f&&gt(c),startAt:null,delay:0,onUpdate:d&&function(){return bt(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Ne||!l&&!h)&&t._startAt.revert(Er),l&&p&&i<=0&&r<=0){i&&(t._zTime=i);return}}else if(u&&p&&!f){if(i&&(l=!1),b=kt({overwrite:!1,data:"isFromStart",lazy:l&&!f&&gt(c),immediateRender:l,stagger:0,parent:k},T),j&&(b[B.prop]=j),Si(t._startAt=xe.set(v,b)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Ne?t._startAt.revert(Er):t._startAt.render(-1,!0)),t._zTime=i,!l)a(t._startAt,ne,ne);else if(!i)return}for(t._pt=t._ptCache=0,c=p&&gt(c)||c&&!p,E=0;E<v.length;E++){if(C=v[E],D=C._gsap||Zn(v)[E]._gsap,t._ptLookup[E]=W={},Fn[D.id]&&ki.length&&Ir(),K=x===v?E:x.indexOf(C),B&&(U=new B).init(C,j||T,t,K,x)!==!1&&(t._pt=M=new rt(t._pt,C,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Z){W[Z]=M}),U.priority&&(L=1)),!B||j)for(b in T)ht[b]&&(U=ns(b,T,t,K,C,x))?U.priority&&(L=1):W[b]=M=rs.call(t,C,b,"get",T[b],K,x,0,n.stringFilter);t._op&&t._op[E]&&t.kill(C,t._op[E]),S&&t._pt&&(xi=t,ue.killTweensOf(C,W,t.globalTime(i)),O=!t.parent,xi=0),t._pt&&c&&(Fn[D.id]=1)}L&&cs(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!O,m&&i<=0&&y.render(Bt,!0,!0)},Sl=function(t,i,r,n,s,o,l,c){var d=(t._pt&&t._ptCache||(t._ptCache={}))[i],u,g,m,h;if(!d)for(d=t._ptCache[i]=[],m=t._ptLookup,h=t._targets.length;h--;){if(u=m[h][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return Xn=1,t.vars[i]="+=0",ss(t,l),Xn=0,c?U0(i+" not eligible for reset"):1;d.push(u)}for(h=d.length;h--;)g=d[h],u=g._pt||g,u.s=(n||n===0)&&!s?n:u.s+(n||0)+o*u.c,u.c=r-u.s,g.e&&(g.e=pe(r)+qe(g.e)),g.b&&(g.b=u.s+qe(g.b))},Cl=function(t,i){var r=t[0]?Ti(t[0]).harness:0,n=r&&r.aliases,s,o,l,c;if(!n)return i;s=m0({},i);for(o in n)if(o in s)for(c=n[o].split(","),l=c.length;l--;)s[c[l]]=s[o];return s},El=function(t,i,r,n){var s=i.ease||n||"power1.inOut",o,l;if(Ge(i))l=r[t]||(r[t]=[]),i.forEach(function(c,d){return l.push({t:d/(i.length-1)*100,v:c,e:s})});else for(o in i)l=r[o]||(r[o]=[]),o==="ease"||l.push({t:parseFloat(t),v:i[o],e:s})},G0=function(t,i,r,n,s){return me(t)?t.call(i,r,n,s):Me(t)&&~t.indexOf("random(")?w0(t):t},Uo=Qn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jo={};it(Uo+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return jo[a]=1});var xe=function(a){vo(t,a);function t(r,n,s,o){var l;typeof n=="number"&&(s.duration=n,n=s,s=null),l=a.call(this,o?n:X0(n))||this;var c=l.vars,d=c.duration,u=c.delay,g=c.immediateRender,m=c.stagger,h=c.overwrite,p=c.keyframes,f=c.defaults,v=c.scrollTrigger,k=c.yoyoEase,x=n.parent||ue,S=(Ge(r)||yo(r)?ai(r[0]):"length"in n)?[r]:It(r),y,T,E,b,M,C,L,D;if(l._targets=S.length?Zn(S):U0("GSAP target "+r+" not found. https://gsap.com",!mt.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,p||m||Cr(d)||Cr(u)){if(n=l.vars,y=l.timeline=new Fe({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=si(l),y._start=0,m||Cr(d)||Cr(u)){if(b=S.length,L=m&&Oo(m),$t(m))for(M in m)~Uo.indexOf(M)&&(D||(D={}),D[M]=m[M]);for(T=0;T<b;T++)E=Pr(n,jo),E.stagger=0,k&&(E.yoyoEase=k),D&&m0(E,D),C=S[T],E.duration=+G0(d,si(l),T,C,S),E.delay=(+G0(u,si(l),T,C,S)||0)-l._delay,!m&&b===1&&E.delay&&(l._delay=u=E.delay,l._start+=u,E.delay=0),y.to(C,E,L?L(T,C,S):0),y._ease=J.none;y.duration()?d=u=0:l.timeline=0}else if(p){X0(kt(y.vars.defaults,{ease:"none"})),y._ease=Vi(p.ease||n.ease||"none");var B=0,U,W,K;if(Ge(p))p.forEach(function(j){return y.to(S,j,">")}),y.duration();else{E={};for(M in p)M==="ease"||M==="easeEach"||El(M,p[M],E,p.easeEach);for(M in E)for(U=E[M].sort(function(j,O){return j.t-O.t}),B=0,T=0;T<U.length;T++)W=U[T],K={ease:W.e,duration:(W.t-(T?U[T-1].t:0))/100*d},K[M]=W.v,y.to(S,K,B),B+=K.duration;y.duration()<d&&y.to({},{duration:d-y.duration()})}}d||l.duration(d=y.duration())}else l.timeline=0;return h===!0&&!Gn&&(xi=si(l),ue.killTweensOf(S),xi=0),jt(x,si(l),s),n.reversed&&l.reverse(),n.paused&&l.paused(!0),(g||!d&&!p&&l._start===Se(x._time)&&gt(g)&&nl(si(l))&&x.data!=="nested")&&(l._tTime=-ne,l.render(Math.max(0,-u)||0)),v&&Io(si(l),v),l}var i=t.prototype;return i.render=function(n,s,o){var l=this._time,c=this._tDur,d=this._dur,u=n<0,g=n>c-ne&&!u?c:n<ne?0:n,m,h,p,f,v,k,x,S,y;if(!d)ol(this,n,s,o);else if(g!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(m=g,S=this.timeline,this._repeat){if(f=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+n,s,o);if(m=Se(g%f),g===c?(p=this._repeat,m=d):(v=Se(g/f),p=~~v,p&&p===v?(m=d,p--):m>d&&(m=d)),k=this._yoyo&&p&1,k&&(y=this._yEase,m=d-m),v=p0(this._tTime,f),m===l&&!o&&this._initted&&p===v)return this._tTime=g,this;p!==v&&(S&&this._yEase&&Wo(S,k),this.vars.repeatRefresh&&!k&&!this._lock&&m!==f&&this._initted&&(this._lock=o=1,this.render(Se(f*p),!0).invalidate()._lock=0))}if(!this._initted){if(Po(this,u?n:m,o,s,g))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&p!==v))return this;if(d!==this._dur)return this.render(n,s,o)}if(this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(m/d),this._from&&(this.ratio=x=1-x),m&&!l&&!s&&!p&&(bt(this,"onStart"),this._tTime!==g))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;S&&S.render(n<0?n:S._dur*S._ease(m/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Nn(this,n,s,o),bt(this,"onUpdate")),this._repeat&&p!==v&&this.vars.onRepeat&&!s&&this.parent&&bt(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(u&&!this._onUpdate&&Nn(this,n,!0,!0),(n||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Si(this,1),!s&&!(u&&!l)&&(g||l||k)&&(bt(this,g===c?"onComplete":"onReverseComplete",!0),this._prom&&!(g<c&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},i.resetTo=function(n,s,o,l,c){$0||ft.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ss(this,d),u=this._ease(d/this._dur),Sl(this,n,s,o,l,u,d,c)?this.resetTo(n,s,o,l,1):(Nr(this,0),this.parent||Mo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?V0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,xi&&xi.vars.overwrite!==!0)._first||V0(this),this.parent&&o!==this.timeline.totalDuration()&&_0(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=n?It(n):l,d=this._ptLookup,u=this._pt,g,m,h,p,f,v,k;if((!s||s==="all")&&il(l,c))return s==="all"&&(this._pt=0),V0(this);for(g=this._op=this._op||[],s!=="all"&&(Me(s)&&(f={},it(s,function(x){return f[x]=1}),s=f),s=Cl(l,s)),k=l.length;k--;)if(~c.indexOf(l[k])){m=d[k],s==="all"?(g[k]=s,p=m,h={}):(h=g[k]=g[k]||{},p=s);for(f in p)v=m&&m[f],v&&((!("kill"in v.d)||v.d.kill(f)===!0)&&Rr(this,v,"_pt"),delete m[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&V0(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return W0(1,arguments)},t.delayedCall=function(n,s,o,l){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},t.fromTo=function(n,s,o){return W0(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return ue.killTweensOf(n,s,o)},t}(J0);kt(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(a){xe[a]=function(){var t=new Fe,i=Hn.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,i)}});var os=function(t,i,r){return t[i]=r},$o=function(t,i,r){return t[i](r)},Ll=function(t,i,r,n){return t[i](n.fp,r)},Ml=function(t,i,r){return t.setAttribute(i,r)},qr=function(t,i){return me(t[i])?$o:Or(t[i])&&t.setAttribute?Ml:os},Jo=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},Bl=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},as=function(t,i){var r=i._pt,n="";if(!t&&i.b)n=i.b;else if(t===1&&i.e)n=i.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+n,r=r._next;n+=i.c}i.set(i.t,i.p,n,i)},ls=function(t,i){for(var r=i._pt;r;)r.r(t,r.d),r=r._next},Il=function(t,i,r,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,i,r),s=o},Pl=function(t){for(var i=this._pt,r,n;i;)n=i._next,i.p===t&&!i.op||i.op===t?Rr(this,i,"_pt"):i.dep||(r=1),i=n;return!r},zl=function(t,i,r,n){n.mSet(t,i,n.m.call(n.tween,r,n.mt),n)},cs=function(t){for(var i=t._pt,r,n,s,o;i;){for(r=i._next,n=s;n&&n.pr>i.pr;)n=n._next;(i._prev=n?n._prev:o)?i._prev._next=i:s=i,(i._next=n)?n._prev=i:o=i,i=r}t._pt=s},rt=function(){function a(i,r,n,s,o,l,c,d,u){this.t=r,this.s=s,this.c=o,this.p=n,this.r=l||Jo,this.d=c||this,this.set=d||os,this.pr=u||0,this._next=i,i&&(i._prev=this)}var t=a.prototype;return t.modifier=function(r,n,s){this.mSet=this.mSet||this.set,this.set=zl,this.m=r,this.mt=s,this.tween=n},a}();it(Qn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Kn[a]=1});xt.TweenMax=xt.TweenLite=xe;xt.TimelineLite=xt.TimelineMax=Fe;ue=new Fe({sortChildren:!1,defaults:g0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=ts;var Yi=[],Mr={},Al=[],_o=0,Ol=0,zn=function(t){return(Mr[t]||Al).map(function(i){return i()})},Wn=function(){var t=Date.now(),i=[];t-_o>2&&(zn("matchMediaInit"),Yi.forEach(function(r){var n=r.queries,s=r.conditions,o,l,c,d;for(l in n)o=Ut.matchMedia(n[l]).matches,o&&(c=1),o!==s[l]&&(s[l]=o,d=1);d&&(r.revert(),c&&i.push(r))}),zn("matchMediaRevert"),i.forEach(function(r){return r.onMatch(r,function(n){return r.add(null,n)})}),_o=t,zn("matchMedia"))},Ko=function(){function a(i,r){this.selector=r&&Vn(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Ol++,i&&this.add(i)}var t=a.prototype;return t.add=function(r,n,s){me(r)&&(s=n,n=r,r=me);var o=this,l=function(){var d=ce,u=o.selector,g;return d&&d!==o&&d.data.push(o),s&&(o.selector=Vn(s)),ce=o,g=n.apply(o,arguments),me(g)&&o._r.push(g),ce=d,o.selector=u,o.isReverted=!1,g};return o.last=l,r===me?l(o,function(c){return o.add(null,c)}):r?o[r]=l:l},t.ignore=function(r){var n=ce;ce=null,r(this),ce=n},t.getTweens=function(){var r=[];return this.data.forEach(function(n){return n instanceof a?r.push.apply(r,n.getTweens()):n instanceof xe&&!(n.parent&&n.parent.data==="nested")&&r.push(n)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,n){var s=this;if(r?function(){for(var l=s.getTweens(),c=s.data.length,d;c--;)d=s.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,g){return g.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),c=s.data.length;c--;)d=s.data[c],d instanceof Fe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof xe)&&d.revert&&d.revert(r);s._r.forEach(function(u){return u(r,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),n)for(var o=Yi.length;o--;)Yi[o].id===this.id&&Yi.splice(o,1)},t.revert=function(r){this.kill(r||{})},a}(),Dl=function(){function a(i){this.contexts=[],this.scope=i,ce&&ce.data.push(this)}var t=a.prototype;return t.add=function(r,n,s){$t(r)||(r={matches:r});var o=new Ko(0,s||this.scope),l=o.conditions={},c,d,u;ce&&!o.selector&&(o.selector=ce.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=r;for(d in r)d==="all"?u=1:(c=Ut.matchMedia(r[d]),c&&(Yi.indexOf(o)<0&&Yi.push(o),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(Wn):c.addEventListener("change",Wn)));return u&&n(o,function(g){return o.add(null,g)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(n){return n.kill(r,!0)})},a}(),Ar={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];i.forEach(function(n){return Ho(n)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,i){return ue.getTweensOf(t,i)},getProperty:function(t,i,r,n){Me(t)&&(t=It(t)[0]);var s=Ti(t||{}).get,o=r?Lo:Eo;return r==="native"&&(r=""),t&&(i?o((ht[i]&&ht[i].get||s)(t,i,r,n)):function(l,c,d){return o((ht[l]&&ht[l].get||s)(t,l,c,d))})},quickSetter:function(t,i,r){if(t=It(t),t.length>1){var n=t.map(function(u){return Ue.quickSetter(u,i,r)}),s=n.length;return function(u){for(var g=s;g--;)n[g](u)}}t=t[0]||{};var o=ht[i],l=Ti(t),c=l.harness&&(l.harness.aliases||{})[i]||i,d=o?function(u){var g=new o;f0._pt=0,g.init(t,r?u+r:u,f0,0,[t]),g.render(1,g),f0._pt&&ls(1,f0)}:l.set(t,c);return o?d:function(u){return d(t,c,r?u+r:u,l,1)}},quickTo:function(t,i,r){var n,s=Ue.to(t,kt((n={},n[i]="+=0.1",n.paused=!0,n.stagger=0,n),r||{})),o=function(c,d,u){return s.resetTo(i,c,d,u)};return o.tween=s,o},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,g0.ease)),ho(g0,t||{})},config:function(t){return ho(mt,t||{})},registerEffect:function(t){var i=t.name,r=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(l){return l&&!ht[l]&&!xt[l]&&U0(i+" effect requires "+l+" plugin.")}),Mn[i]=function(l,c,d){return r(It(l),kt(c||{},s),d)},o&&(Fe.prototype[i]=function(l,c,d){return this.add(Mn[i](l,$t(c)?c:(d=c)&&{},this),d)})},registerEase:function(t,i){J[t]=Vi(i)},parseEase:function(t,i){return arguments.length?Vi(t,i):J},getById:function(t){return ue.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var r=new Fe(t),n,s;for(r.smoothChildTiming=gt(t.smoothChildTiming),ue.remove(r),r._dp=0,r._time=r._tTime=ue._time,n=ue._first;n;)s=n._next,(i||!(!n._dur&&n instanceof xe&&n.vars.onComplete===n._targets[0]))&&jt(r,n,n._start-n._delay),n=s;return jt(ue,r,0),r},context:function(t,i){return t?new Ko(t,i):ce},matchMedia:function(t){return new Dl(t)},matchMediaRefresh:function(){return Yi.forEach(function(t){var i=t.conditions,r,n;for(n in i)i[n]&&(i[n]=!1,r=1);r&&t.revert()})||Wn()},addEventListener:function(t,i){var r=Mr[t]||(Mr[t]=[]);~r.indexOf(i)||r.push(i)},removeEventListener:function(t,i){var r=Mr[t],n=r&&r.indexOf(i);n>=0&&r.splice(n,1)},utils:{wrap:gl,wrapYoyo:ml,distribute:Oo,random:Ro,snap:Do,normalize:fl,getUnit:qe,clamp:cl,splitColor:Vo,toArray:It,selector:Vn,mapRange:No,pipe:ul,unitize:hl,interpolate:pl,shuffle:Ao},install:ko,effects:Mn,ticker:ft,updateRoot:Fe.updateRoot,plugins:ht,globalTimeline:ue,core:{PropTween:rt,globals:To,Tween:xe,Timeline:Fe,Animation:J0,getCache:Ti,_removeLinkedListItem:Rr,reverting:function(){return Ne},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Gn=t}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ar[a]=xe[a]});ft.add(Fe.updateRoot);f0=Ar.to({},{duration:0});var Rl=function(t,i){for(var r=t._pt;r&&r.p!==i&&r.op!==i&&r.fp!==i;)r=r._next;return r},Fl=function(t,i){var r=t._targets,n,s,o;for(n in i)for(s=r.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Rl(o,n)),o&&o.modifier&&o.modifier(i[n],t,r[s],n))},An=function(t,i){return{name:t,rawVars:1,init:function(n,s,o){o._onInit=function(l){var c,d;if(Me(s)&&(c={},it(s,function(u){return c[u]=1}),s=c),i){c={};for(d in s)c[d]=i(s[d]);s=c}Fl(l,s)}}}},Ue=Ar.registerPlugin({name:"attr",init:function(t,i,r,n,s){var o,l,c;this.tween=r;for(o in i)c=t.getAttribute(o)||"",l=this.add(t,"setAttribute",(c||0)+"",i[o],n,s,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(t,i){for(var r=i._pt;r;)Ne?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,i){for(var r=i.length;r--;)this.add(t,r,t[r]||0,i[r],0,0,0,0,0,1)}},An("roundProps",Yn),An("modifiers"),An("snap",Do))||Ar;xe.version=Fe.version=Ue.version="3.12.7";xo=1;Un()&&v0();var Nl=J.Power0,ql=J.Power1,Hl=J.Power2,Vl=J.Power3,Yl=J.Power4,Xl=J.Linear,Wl=J.Quad,Gl=J.Cubic,Ul=J.Quart,jl=J.Quint,$l=J.Strong,Jl=J.Elastic,Kl=J.Back,Ql=J.SteppedEase,Zl=J.Bounce,ec=J.Sine,tc=J.Expo,ic=J.Circ;var Qo,Ei,b0,ms,Ji,rc,Zo,ps,nc=function(){return typeof window<"u"},ci={},$i=180/Math.PI,x0=Math.PI/180,y0=Math.atan2,ea=1e8,_s=/([A-Z])/g,sc=/(left|right|width|margin|padding|x)/i,oc=/[\s,\(]\S/,Jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},us=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},ac=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},lc=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},cc=function(t,i){var r=i.s+i.c*t;i.set(i.t,i.p,~~(r+(r<0?-.5:.5))+i.u,i)},la=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},ca=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},dc=function(t,i,r){return t.style[i]=r},uc=function(t,i,r){return t.style.setProperty(i,r)},hc=function(t,i,r){return t._gsap[i]=r},fc=function(t,i,r){return t._gsap.scaleX=t._gsap.scaleY=r},gc=function(t,i,r,n,s){var o=t._gsap;o.scaleX=o.scaleY=r,o.renderTransform(s,o)},mc=function(t,i,r,n,s){var o=t._gsap;o[i]=r,o.renderTransform(s,o)},he="transform",pt=he+"Origin",pc=function a(t,i){var r=this,n=this.target,s=n.style,o=n._gsap;if(t in ci&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Jt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(l){return r.tfm[l]=li(n,l)}):this.tfm[t]=o.x?o[t]:li(n,t),t===pt&&(this.tfm.zOrigin=o.zOrigin);else return Jt.transform.split(",").forEach(function(l){return a.call(r,l,i)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pt,i,"")),t=he}(s||i)&&this.props.push(t,i,s[t])},da=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_c=function(){var t=this.props,i=this.target,r=i.style,n=i._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?i[t[s]](t[s+2]):i[t[s]]=t[s+2]:t[s+2]?r[t[s]]=t[s+2]:r.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(_s,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=ps(),(!s||!s.isStart)&&!r[he]&&(da(r),n.zOrigin&&r[pt]&&(r[pt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ua=function(t,i){var r={target:t,props:[],revert:_c,save:pc};return t._gsap||Ue.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(n){return r.save(n)}),r},ha,hs=function(t,i){var r=Ei.createElementNS?Ei.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ei.createElement(t);return r&&r.style?r:Ei.createElement(t)},Kt=function a(t,i,r){var n=getComputedStyle(t);return n[i]||n.getPropertyValue(i.replace(_s,"-$1").toLowerCase())||n.getPropertyValue(i)||!r&&a(t,k0(i)||i,1)||""},ta="O,Moz,ms,Ms,Webkit".split(","),k0=function(t,i,r){var n=i||Ji,s=n.style,o=5;if(t in s&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ta[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ta[o]:"")+t},fs=function(){nc()&&window.document&&(Qo=window,Ei=Qo.document,b0=Ei.documentElement,Ji=hs("div")||{style:{}},rc=hs("div"),he=k0(he),pt=he+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ha=!!k0("perspective"),ps=Ue.core.reverting,ms=1)},ia=function(t){var i=t.ownerSVGElement,r=hs("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",r.appendChild(n),b0.appendChild(r);try{s=n.getBBox()}catch{}return r.removeChild(n),b0.removeChild(r),s},ra=function(t,i){for(var r=i.length;r--;)if(t.hasAttribute(i[r]))return t.getAttribute(i[r])},fa=function(t){var i,r;try{i=t.getBBox()}catch{i=ia(t),r=1}return i&&(i.width||i.height)||r||(i=ia(t)),i&&!i.width&&!i.x&&!i.y?{x:+ra(t,["x","cx","x1"])||0,y:+ra(t,["y","cy","y1"])||0,width:0,height:0}:i},ga=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fa(t))},Ki=function(t,i){if(i){var r=t.style,n;i in ci&&i!==pt&&(i=he),r.removeProperty?(n=i.substr(0,2),(n==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),r.removeProperty(n==="--"?i:i.replace(_s,"-$1").toLowerCase())):r.removeAttribute(i)}},Li=function(t,i,r,n,s,o){var l=new rt(t._pt,i,r,0,1,o?ca:la);return t._pt=l,l.b=n,l.e=s,t._props.push(r),l},na={deg:1,rad:1,turn:1},vc={grid:1,flex:1},Mi=function a(t,i,r,n){var s=parseFloat(r)||0,o=(r+"").trim().substr((s+"").length)||"px",l=Ji.style,c=sc.test(i),d=t.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),g=100,m=n==="px",h=n==="%",p,f,v,k;if(n===o||!s||na[n]||na[o])return s;if(o!=="px"&&!m&&(s=a(t,i,r,"px")),k=t.getCTM&&ga(t),(h||o==="%")&&(ci[i]||~i.indexOf("adius")))return p=k?t.getBBox()[c?"width":"height"]:t[u],pe(h?s/p*g:s/100*p);if(l[c?"width":"height"]=g+(m?o:n),f=n!=="rem"&&~i.indexOf("adius")||n==="em"&&t.appendChild&&!d?t:t.parentNode,k&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Ei||!f.appendChild)&&(f=Ei.body),v=f._gsap,v&&h&&v.width&&c&&v.time===ft.time&&!v.uncache)return pe(s/v.width*g);if(h&&(i==="height"||i==="width")){var x=t.style[i];t.style[i]=g+n,p=t[u],x?t.style[i]=x:Ki(t,i)}else(h||o==="%")&&!vc[Kt(f,"display")]&&(l.position=Kt(t,"position")),f===t&&(l.position="static"),f.appendChild(Ji),p=Ji[u],f.removeChild(Ji),l.position="absolute";return c&&h&&(v=Ti(f),v.time=ft.time,v.width=f[u]),pe(m?p*s/g:p&&s?g/p*s:0)},li=function(t,i,r,n){var s;return ms||fs(),i in Jt&&i!=="transform"&&(i=Jt[i],~i.indexOf(",")&&(i=i.split(",")[0])),ci[i]&&i!=="transform"?(s=er(t,n),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Vr(Kt(t,pt))+" "+s.zOrigin+"px"):(s=t.style[i],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Hr[i]&&Hr[i](t,i,r)||Kt(t,i)||es(t,i)||(i==="opacity"?1:0))),r&&!~(s+"").trim().indexOf(" ")?Mi(t,i,s,r)+r:s},wc=function(t,i,r,n){if(!r||r==="none"){var s=k0(i,t,1),o=s&&Kt(t,s,1);o&&o!==r?(i=s,r=o):i==="borderColor"&&(r=Kt(t,"borderTopColor"))}var l=new rt(this._pt,t.style,i,0,1,as),c=0,d=0,u,g,m,h,p,f,v,k,x,S,y,T;if(l.b=r,l.e=n,r+="",n+="",n==="auto"&&(f=t.style[i],t.style[i]=n,n=Kt(t,i)||n,f?t.style[i]=f:Ki(t,i)),u=[r,n],ts(u),r=u[0],n=u[1],m=r.match(Xi)||[],T=n.match(Xi)||[],T.length){for(;g=Xi.exec(n);)v=g[0],x=n.substring(c,g.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),v!==(f=m[d++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),v.charAt(1)==="="&&(v=Wi(h,v)+y),k=parseFloat(v),S=v.substr((k+"").length),c=Xi.lastIndex-S.length,S||(S=S||mt.units[i]||y,c===n.length&&(n+=S,l.e+=S)),y!==S&&(h=Mi(t,i,f,S)||0),l._pt={_next:l._pt,p:x||d===1?x:",",s:h,c:k-h,m:p&&p<4||i==="zIndex"?Math.round:0});l.c=c<n.length?n.substring(c,n.length):""}else l.r=i==="display"&&n==="none"?ca:la;return $n.test(n)&&(l.e=0),this._pt=l,l},sa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yc=function(t){var i=t.split(" "),r=i[0],n=i[1]||"50%";return(r==="top"||r==="bottom"||n==="left"||n==="right")&&(t=r,r=n,n=t),i[0]=sa[r]||r,i[1]=sa[n]||n,i.join(" ")},bc=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var r=i.t,n=r.style,s=i.u,o=r._gsap,l,c,d;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),d=s.length;--d>-1;)l=s[d],ci[l]&&(c=1,l=l==="transformOrigin"?pt:he),Ki(r,l);c&&(Ki(r,he),o&&(o.svg&&r.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",er(r,1),o.uncache=1,da(n)))}},Hr={clearProps:function(t,i,r,n,s){if(s.data!=="isFromStart"){var o=t._pt=new rt(t._pt,i,r,0,0,bc);return o.u=n,o.pr=-10,o.tween=s,t._props.push(r),1}}},Z0=[1,0,0,1,0,0],ma={},pa=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},oa=function(t){var i=Kt(t,he);return pa(i)?Z0:i.substr(7).match(jn).map(pe)},vs=function(t,i){var r=t._gsap||Ti(t),n=t.style,s=oa(t),o,l,c,d;return r.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Z0:s):(s===Z0&&!t.offsetParent&&t!==b0&&!r.svg&&(c=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,l=t.nextElementSibling,b0.appendChild(t)),s=oa(t),c?n.display=c:Ki(t,"display"),d&&(l?o.insertBefore(t,l):o?o.appendChild(t):b0.removeChild(t))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gs=function(t,i,r,n,s,o){var l=t._gsap,c=s||vs(t,!0),d=l.xOrigin||0,u=l.yOrigin||0,g=l.xOffset||0,m=l.yOffset||0,h=c[0],p=c[1],f=c[2],v=c[3],k=c[4],x=c[5],S=i.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,E,b,M,C;r?c!==Z0&&(b=h*v-p*f)&&(M=y*(v/b)+T*(-f/b)+(f*x-v*k)/b,C=y*(-p/b)+T*(h/b)-(h*x-p*k)/b,y=M,T=C):(E=fa(t),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(S[1]||S[0]).indexOf("%")?T/100*E.height:T)),n||n!==!1&&l.smooth?(k=y-d,x=T-u,l.xOffset=g+(k*h+x*f)-k,l.yOffset=m+(k*p+x*v)-x):l.xOffset=l.yOffset=0,l.xOrigin=y,l.yOrigin=T,l.smooth=!!n,l.origin=i,l.originIsAbsolute=!!r,t.style[pt]="0px 0px",o&&(Li(o,l,"xOrigin",d,y),Li(o,l,"yOrigin",u,T),Li(o,l,"xOffset",g,l.xOffset),Li(o,l,"yOffset",m,l.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},er=function(t,i){var r=t._gsap||new is(t);if("x"in r&&!i&&!r.uncache)return r;var n=t.style,s=r.scaleX<0,o="px",l="deg",c=getComputedStyle(t),d=Kt(t,pt)||"0",u,g,m,h,p,f,v,k,x,S,y,T,E,b,M,C,L,D,B,U,W,K,j,O,Z,oe,_,ae,Qe,Ot,fe,Oe;return u=g=m=f=v=k=x=S=y=0,h=p=1,r.svg=!!(t.getCTM&&ga(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[he]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[he]!=="none"?c[he]:"")),n.scale=n.rotate=n.translate="none"),b=vs(t,r.svg),r.svg&&(r.uncache?(Z=t.getBBox(),d=r.xOrigin-Z.x+"px "+(r.yOrigin-Z.y)+"px",O=""):O=!i&&t.getAttribute("data-svg-origin"),gs(t,O||d,!!O||r.originIsAbsolute,r.smooth!==!1,b)),T=r.xOrigin||0,E=r.yOrigin||0,b!==Z0&&(D=b[0],B=b[1],U=b[2],W=b[3],u=K=b[4],g=j=b[5],b.length===6?(h=Math.sqrt(D*D+B*B),p=Math.sqrt(W*W+U*U),f=D||B?y0(B,D)*$i:0,x=U||W?y0(U,W)*$i+f:0,x&&(p*=Math.abs(Math.cos(x*x0))),r.svg&&(u-=T-(T*D+E*U),g-=E-(T*B+E*W))):(Oe=b[6],Ot=b[7],_=b[8],ae=b[9],Qe=b[10],fe=b[11],u=b[12],g=b[13],m=b[14],M=y0(Oe,Qe),v=M*$i,M&&(C=Math.cos(-M),L=Math.sin(-M),O=K*C+_*L,Z=j*C+ae*L,oe=Oe*C+Qe*L,_=K*-L+_*C,ae=j*-L+ae*C,Qe=Oe*-L+Qe*C,fe=Ot*-L+fe*C,K=O,j=Z,Oe=oe),M=y0(-U,Qe),k=M*$i,M&&(C=Math.cos(-M),L=Math.sin(-M),O=D*C-_*L,Z=B*C-ae*L,oe=U*C-Qe*L,fe=W*L+fe*C,D=O,B=Z,U=oe),M=y0(B,D),f=M*$i,M&&(C=Math.cos(M),L=Math.sin(M),O=D*C+B*L,Z=K*C+j*L,B=B*C-D*L,j=j*C-K*L,D=O,K=Z),v&&Math.abs(v)+Math.abs(f)>359.9&&(v=f=0,k=180-k),h=pe(Math.sqrt(D*D+B*B+U*U)),p=pe(Math.sqrt(j*j+Oe*Oe)),M=y0(K,j),x=Math.abs(M)>2e-4?M*$i:0,y=fe?1/(fe<0?-fe:fe):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!pa(Kt(t,he)),O&&t.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),i=i||r.uncache,r.x=u-((r.xPercent=u&&(!i&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+o,r.y=g-((r.yPercent=g&&(!i&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+o,r.z=m+o,r.scaleX=pe(h),r.scaleY=pe(p),r.rotation=pe(f)+l,r.rotationX=pe(v)+l,r.rotationY=pe(k)+l,r.skewX=x+l,r.skewY=S+l,r.transformPerspective=y+o,(r.zOrigin=parseFloat(d.split(" ")[2])||!i&&r.zOrigin||0)&&(n[pt]=Vr(d)),r.xOffset=r.yOffset=0,r.force3D=mt.force3D,r.renderTransform=r.svg?kc:ha?_a:xc,r.uncache=0,r},Vr=function(t){return(t=t.split(" "))[0]+" "+t[1]},ds=function(t,i,r){var n=qe(i);return pe(parseFloat(i)+parseFloat(Mi(t,"x",r+"px",n)))+n},xc=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,_a(t,i)},Ui="0deg",Q0="0px",ji=") ",_a=function(t,i){var r=i||this,n=r.xPercent,s=r.yPercent,o=r.x,l=r.y,c=r.z,d=r.rotation,u=r.rotationY,g=r.rotationX,m=r.skewX,h=r.skewY,p=r.scaleX,f=r.scaleY,v=r.transformPerspective,k=r.force3D,x=r.target,S=r.zOrigin,y="",T=k==="auto"&&t&&t!==1||k===!0;if(S&&(g!==Ui||u!==Ui)){var E=parseFloat(u)*x0,b=Math.sin(E),M=Math.cos(E),C;E=parseFloat(g)*x0,C=Math.cos(E),o=ds(x,o,b*C*-S),l=ds(x,l,-Math.sin(E)*-S),c=ds(x,c,M*C*-S+S)}v!==Q0&&(y+="perspective("+v+ji),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(T||o!==Q0||l!==Q0||c!==Q0)&&(y+=c!==Q0||T?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+ji),d!==Ui&&(y+="rotate("+d+ji),u!==Ui&&(y+="rotateY("+u+ji),g!==Ui&&(y+="rotateX("+g+ji),(m!==Ui||h!==Ui)&&(y+="skew("+m+", "+h+ji),(p!==1||f!==1)&&(y+="scale("+p+", "+f+ji),x.style[he]=y||"translate(0, 0)"},kc=function(t,i){var r=i||this,n=r.xPercent,s=r.yPercent,o=r.x,l=r.y,c=r.rotation,d=r.skewX,u=r.skewY,g=r.scaleX,m=r.scaleY,h=r.target,p=r.xOrigin,f=r.yOrigin,v=r.xOffset,k=r.yOffset,x=r.forceCSS,S=parseFloat(o),y=parseFloat(l),T,E,b,M,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=x0,d*=x0,T=Math.cos(c)*g,E=Math.sin(c)*g,b=Math.sin(c-d)*-m,M=Math.cos(c-d)*m,d&&(u*=x0,C=Math.tan(d-u),C=Math.sqrt(1+C*C),b*=C,M*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),T*=C,E*=C)),T=pe(T),E=pe(E),b=pe(b),M=pe(M)):(T=g,M=m,E=b=0),(S&&!~(o+"").indexOf("px")||y&&!~(l+"").indexOf("px"))&&(S=Mi(h,"x",o,"px"),y=Mi(h,"y",l,"px")),(p||f||v||k)&&(S=pe(S+p-(p*T+f*b)+v),y=pe(y+f-(p*E+f*M)+k)),(n||s)&&(C=h.getBBox(),S=pe(S+n/100*C.width),y=pe(y+s/100*C.height)),C="matrix("+T+","+E+","+b+","+M+","+S+","+y+")",h.setAttribute("transform",C),x&&(h.style[he]=C)},Tc=function(t,i,r,n,s){var o=360,l=Me(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?$i:1),d=c-n,u=n+d+"deg",g,m;return l&&(g=s.split("_")[1],g==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),g==="cw"&&d<0?d=(d+o*ea)%o-~~(d/o)*o:g==="ccw"&&d>0&&(d=(d-o*ea)%o-~~(d/o)*o)),t._pt=m=new rt(t._pt,i,r,n,d,ac),m.e=u,m.u="deg",t._props.push(r),m},aa=function(t,i){for(var r in i)t[r]=i[r];return t},Sc=function(t,i,r){var n=aa({},r._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=r.style,l,c,d,u,g,m,h,p;n.svg?(d=r.getAttribute("transform"),r.setAttribute("transform",""),o[he]=i,l=er(r,1),Ki(r,he),r.setAttribute("transform",d)):(d=getComputedStyle(r)[he],o[he]=i,l=er(r,1),o[he]=d);for(c in ci)d=n[c],u=l[c],d!==u&&s.indexOf(c)<0&&(h=qe(d),p=qe(u),g=h!==p?Mi(r,c,d,p):parseFloat(d),m=parseFloat(u),t._pt=new rt(t._pt,l,c,g,m-g,us),t._pt.u=p||0,t._props.push(c));aa(l,n)};it("padding,margin,Width,Radius",function(a,t){var i="Top",r="Right",n="Bottom",s="Left",o=(t<3?[i,r,n,s]:[i+s,i+r,n+r,n+s]).map(function(l){return t<2?a+l:"border"+l+a});Hr[t>1?"border"+a:a]=function(l,c,d,u,g){var m,h;if(arguments.length<4)return m=o.map(function(p){return li(l,p,d)}),h=m.join(" "),h.split(m[0]).length===5?m[0]:h;m=(u+"").split(" "),h={},o.forEach(function(p,f){return h[p]=m[f]=m[f]||m[(f-1)/2|0]}),l.init(c,h,g)}});var ws={name:"css",register:fs,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,r,n,s){var o=this._props,l=t.style,c=r.vars.startAt,d,u,g,m,h,p,f,v,k,x,S,y,T,E,b,M;ms||fs(),this.styles=this.styles||ua(t),M=this.styles.props,this.tween=r;for(f in i)if(f!=="autoRound"&&(u=i[f],!(ht[f]&&ns(f,i,r,n,t,s)))){if(h=typeof u,p=Hr[f],h==="function"&&(u=u.call(r,n,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=w0(u)),p)p(this,t,f,u,r)&&(b=1);else if(f.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",oi.lastIndex=0,oi.test(d)||(v=qe(d),k=qe(u)),k?v!==k&&(d=Mi(t,f,d,k)+k):v&&(u+=v),this.add(l,"setProperty",d,u,n,s,0,0,f),o.push(f),M.push(f,0,l[f]);else if(h!=="undefined"){if(c&&f in c?(d=typeof c[f]=="function"?c[f].call(r,n,t,s):c[f],Me(d)&&~d.indexOf("random(")&&(d=w0(d)),qe(d+"")||d==="auto"||(d+=mt.units[f]||qe(li(t,f))||""),(d+"").charAt(1)==="="&&(d=li(t,f))):d=li(t,f),m=parseFloat(d),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),g=parseFloat(u),f in Jt&&(f==="autoAlpha"&&(m===1&&li(t,"visibility")==="hidden"&&g&&(m=0),M.push("visibility",0,l.visibility),Li(this,l,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),f!=="scale"&&f!=="transform"&&(f=Jt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),S=f in ci,S){if(this.styles.save(f),y||(T=t._gsap,T.renderTransform&&!i.parseTransform||er(t,i.parseTransform),E=i.smoothOrigin!==!1&&T.smooth,y=this._pt=new rt(this._pt,l,he,0,1,T.renderTransform,T,0,-1),y.dep=1),f==="scale")this._pt=new rt(this._pt,T,"scaleY",T.scaleY,(x?Wi(T.scaleY,x+g):g)-T.scaleY||0,us),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){M.push(pt,0,l[pt]),u=yc(u),T.svg?gs(t,u,0,E,0,this):(k=parseFloat(u.split(" ")[2])||0,k!==T.zOrigin&&Li(this,T,"zOrigin",T.zOrigin,k),Li(this,l,f,Vr(d),Vr(u)));continue}else if(f==="svgOrigin"){gs(t,u,1,E,0,this);continue}else if(f in ma){Tc(this,T,f,m,x?Wi(m,x+u):u);continue}else if(f==="smoothOrigin"){Li(this,T,"smooth",T.smooth,u);continue}else if(f==="force3D"){T[f]=u;continue}else if(f==="transform"){Sc(this,u,t);continue}}else f in l||(f=k0(f)||f);if(S||(g||g===0)&&(m||m===0)&&!oc.test(u)&&f in l)v=(d+"").substr((m+"").length),g||(g=0),k=qe(u)||(f in mt.units?mt.units[f]:v),v!==k&&(m=Mi(t,f,d,k)),this._pt=new rt(this._pt,S?T:l,f,m,(x?Wi(m,x+g):g)-m,!S&&(k==="px"||f==="zIndex")&&i.autoRound!==!1?cc:us),this._pt.u=k||0,v!==k&&k!=="%"&&(this._pt.b=d,this._pt.r=lc);else if(f in l)wc.call(this,t,f,d,x?x+u:u);else if(f in t)this.add(t,f,d||t[f],x?x+u:u,n,s);else if(f!=="parseTransform"){Dr(f,u);continue}S||(f in l?M.push(f,0,l[f]):typeof t[f]=="function"?M.push(f,2,t[f]()):M.push(f,1,d||t[f])),o.push(f)}}b&&cs(this)},render:function(t,i){if(i.tween._time||!ps())for(var r=i._pt;r;)r.r(t,r.d),r=r._next;else i.styles.revert()},get:li,aliases:Jt,getSetter:function(t,i,r){var n=Jt[i];return n&&n.indexOf(",")<0&&(i=n),i in ci&&i!==pt&&(t._gsap.x||li(t,"x"))?r&&Zo===r?i==="scale"?fc:hc:(Zo=r||{})&&(i==="scale"?gc:mc):t.style&&!Or(t.style[i])?dc:~i.indexOf("-")?uc:qr(t,i)},core:{_removeProperty:Ki,_getMatrix:vs}};Ue.utils.checkPrefix=k0;Ue.core.getStyleSaver=ua;(function(a,t,i,r){var n=it(a+","+t+","+i,function(s){ci[s]=1});it(t,function(s){mt.units[s]="deg",ma[s]=1}),Jt[n[13]]=a+","+t,it(r,function(s){var o=s.split(":");Jt[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){mt.units[a]="px"});Ue.registerPlugin(ws);var Bi=Ue.registerPlugin(ws)||Ue,Fd=Bi.core.Tween;function va(a,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function Cc(a,t,i){return t&&va(a.prototype,t),i&&va(a,i),a}var He,Wr,Ec,Tt,Ii,Pi,S0,ya,Qi,ir,ba,di,Ht,xa,ka=function(){return He||typeof window<"u"&&(He=window.gsap)&&He.registerPlugin&&He},Ta=1,T0=[],V=[],Vt=[],rr=Date.now,ys=function(t,i){return i},Lc=function(){var t=ir.core,i=t.bridge||{},r=t._scrollers,n=t._proxies;r.push.apply(r,V),n.push.apply(n,Vt),V=r,Vt=n,ys=function(o,l){return i[o](l)}},hi=function(t,i){return~Vt.indexOf(t)&&Vt[Vt.indexOf(t)+1][i]},nr=function(t){return!!~ba.indexOf(t)},st=function(t,i,r,n,s){return t.addEventListener(i,r,{passive:n!==!1,capture:!!s})},nt=function(t,i,r,n){return t.removeEventListener(i,r,!!n)},Yr="scrollLeft",Xr="scrollTop",bs=function(){return di&&di.isPressed||V.cache++},Gr=function(t,i){var r=function n(s){if(s||s===0){Ta&&(Tt.history.scrollRestoration="manual");var o=di&&di.isPressed;s=n.v=Math.round(s)||(di&&di.iOS?1:0),t(s),n.cacheID=V.cache,o&&ys("ss",s)}else(i||V.cache!==n.cacheID||ys("ref"))&&(n.cacheID=V.cache,n.v=t());return n.v+n.offset};return r.offset=0,t&&r},je={s:Yr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gr(function(a){return arguments.length?Tt.scrollTo(a,Ce.sc()):Tt.pageXOffset||Ii[Yr]||Pi[Yr]||S0[Yr]||0})},Ce={s:Xr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:je,sc:Gr(function(a){return arguments.length?Tt.scrollTo(je.sc(),a):Tt.pageYOffset||Ii[Xr]||Pi[Xr]||S0[Xr]||0})},ot=function(t,i){return(i&&i._ctx&&i._ctx.selector||He.utils.toArray)(t)[0]||(typeof t=="string"&&He.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ui=function(t,i){var r=i.s,n=i.sc;nr(t)&&(t=Ii.scrollingElement||Pi);var s=V.indexOf(t),o=n===Ce.sc?1:2;!~s&&(s=V.push(t)-1),V[s+o]||st(t,"scroll",bs);var l=V[s+o],c=l||(V[s+o]=Gr(hi(t,r),!0)||(nr(t)?n:Gr(function(d){return arguments.length?t[r]=d:t[r]})));return c.target=t,l||(c.smooth=He.getProperty(t,"scrollBehavior")==="smooth"),c},Ur=function(t,i,r){var n=t,s=t,o=rr(),l=o,c=i||50,d=Math.max(500,c*3),u=function(p,f){var v=rr();f||v-o>c?(s=n,n=p,l=o,o=v):r?n+=p:n=s+(p-s)/(v-l)*(o-l)},g=function(){s=n=r?0:n,l=o=0},m=function(p){var f=l,v=s,k=rr();return(p||p===0)&&p!==n&&u(p),o===l||k-l>d?0:(n+(r?v:-v))/((r?k:o)-f)*1e3};return{update:u,reset:g,getVelocity:m}},tr=function(t,i){return i&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wa=function(t){var i=Math.max.apply(Math,t),r=Math.min.apply(Math,t);return Math.abs(i)>=Math.abs(r)?i:r},Sa=function(){ir=He.core.globals().ScrollTrigger,ir&&ir.core&&Lc()},Ca=function(t){return He=t||ka(),!Wr&&He&&typeof document<"u"&&document.body&&(Tt=window,Ii=document,Pi=Ii.documentElement,S0=Ii.body,ba=[Tt,Ii,Pi,S0],Ec=He.utils.clamp,xa=He.core.context||function(){},Qi="onpointerenter"in S0?"pointer":"mouse",ya=_e.isTouch=Tt.matchMedia&&Tt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ht=_e.eventTypes=("ontouchstart"in Pi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ta=0},500),Sa(),Wr=1),Wr};je.op=Ce;V.cache=0;var _e=function(){function a(i){this.init(i)}var t=a.prototype;return t.init=function(r){Wr||Ca(He)||console.warn("Please gsap.registerPlugin(Observer)"),ir||Sa();var n=r.tolerance,s=r.dragMinimum,o=r.type,l=r.target,c=r.lineHeight,d=r.debounce,u=r.preventDefault,g=r.onStop,m=r.onStopDelay,h=r.ignore,p=r.wheelSpeed,f=r.event,v=r.onDragStart,k=r.onDragEnd,x=r.onDrag,S=r.onPress,y=r.onRelease,T=r.onRight,E=r.onLeft,b=r.onUp,M=r.onDown,C=r.onChangeX,L=r.onChangeY,D=r.onChange,B=r.onToggleX,U=r.onToggleY,W=r.onHover,K=r.onHoverEnd,j=r.onMove,O=r.ignoreCheck,Z=r.isNormalizer,oe=r.onGestureStart,_=r.onGestureEnd,ae=r.onWheel,Qe=r.onEnable,Ot=r.onDisable,fe=r.onClick,Oe=r.scrollSpeed,Ze=r.capture,ke=r.allowClicks,et=r.lockAxis,Ve=r.onLockAxis;this.target=l=ot(l)||Pi,this.vars=r,h&&(h=He.utils.toArray(h)),n=n||1e-9,s=s||0,p=p||1,Oe=Oe||1,o=o||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(Tt.getComputedStyle(S0).lineHeight)||22);var pi,tt,dt,Q,ve,ut,_t,w=this,vt=0,ei=0,_i=r.passive||!u&&r.passive!==!1,we=ui(l,je),ti=ui(l,Ce),vi=we(),Oi=ti(),Ie=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ht[0]==="pointerdown",wi=nr(l),ye=l.ownerDocument||Ii,Dt=[0,0,0],Lt=[0,0,0],ii=0,z0=function(){return ii=rr()},Te=function(A,ee){return(w.event=A)&&h&&~h.indexOf(A.target)||ee&&Ie&&A.pointerType!=="touch"||O&&O(A,ee)},yr=function(){w._vx.reset(),w._vy.reset(),tt.pause(),g&&g(w)},ri=function(){var A=w.deltaX=wa(Dt),ee=w.deltaY=wa(Lt),I=Math.abs(A)>=n,R=Math.abs(ee)>=n;D&&(I||R)&&D(w,A,ee,Dt,Lt),I&&(T&&w.deltaX>0&&T(w),E&&w.deltaX<0&&E(w),C&&C(w),B&&w.deltaX<0!=vt<0&&B(w),vt=w.deltaX,Dt[0]=Dt[1]=Dt[2]=0),R&&(M&&w.deltaY>0&&M(w),b&&w.deltaY<0&&b(w),L&&L(w),U&&w.deltaY<0!=ei<0&&U(w),ei=w.deltaY,Lt[0]=Lt[1]=Lt[2]=0),(Q||dt)&&(j&&j(w),dt&&(v&&dt===1&&v(w),x&&x(w),dt=0),Q=!1),ut&&!(ut=!1)&&Ve&&Ve(w),ve&&(ae(w),ve=!1),pi=0},c0=function(A,ee,I){Dt[I]+=A,Lt[I]+=ee,w._vx.update(A),w._vy.update(ee),d?pi||(pi=requestAnimationFrame(ri)):ri()},d0=function(A,ee){et&&!_t&&(w.axis=_t=Math.abs(A)>Math.abs(ee)?"x":"y",ut=!0),_t!=="y"&&(Dt[2]+=A,w._vx.update(A,!0)),_t!=="x"&&(Lt[2]+=ee,w._vy.update(ee,!0)),d?pi||(pi=requestAnimationFrame(ri)):ri()},yi=function(A){if(!Te(A,1)){A=tr(A,u);var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y,F=w.isDragging;w.x=ee,w.y=I,(F||(R||z)&&(Math.abs(w.startX-ee)>=s||Math.abs(w.startY-I)>=s))&&(dt=F?2:1,F||(w.isDragging=!0),d0(R,z))}},Di=w.onPress=function(N){Te(N,1)||N&&N.button||(w.axis=_t=null,tt.pause(),w.isPressed=!0,N=tr(N),vt=ei=0,w.startX=w.x=N.clientX,w.startY=w.y=N.clientY,w._vx.reset(),w._vy.reset(),st(Z?l:ye,Ht[1],yi,_i,!0),w.deltaX=w.deltaY=0,S&&S(w))},G=w.onRelease=function(N){if(!Te(N,1)){nt(Z?l:ye,Ht[1],yi,!0);var A=!isNaN(w.y-w.startY),ee=w.isDragging,I=ee&&(Math.abs(w.x-w.startX)>3||Math.abs(w.y-w.startY)>3),R=tr(N);!I&&A&&(w._vx.reset(),w._vy.reset(),u&&ke&&He.delayedCall(.08,function(){if(rr()-ii>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(ye.createEvent){var z=ye.createEvent("MouseEvents");z.initMouseEvent("click",!0,!0,Tt,1,R.screenX,R.screenY,R.clientX,R.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(z)}}})),w.isDragging=w.isGesturing=w.isPressed=!1,g&&ee&&!Z&&tt.restart(!0),dt&&ri(),k&&ee&&k(w),y&&y(w,I)}},Ri=function(A){return A.touches&&A.touches.length>1&&(w.isGesturing=!0)&&oe(A,w.isDragging)},Rt=function(){return(w.isGesturing=!1)||_(w)},Ft=function(A){if(!Te(A)){var ee=we(),I=ti();c0((ee-vi)*Oe,(I-Oi)*Oe,1),vi=ee,Oi=I,g&&tt.restart(!0)}},Nt=function(A){if(!Te(A)){A=tr(A,u),ae&&(ve=!0);var ee=(A.deltaMode===1?c:A.deltaMode===2?Tt.innerHeight:1)*p;c0(A.deltaX*ee,A.deltaY*ee,0),g&&!Z&&tt.restart(!0)}},Fi=function(A){if(!Te(A)){var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y;w.x=ee,w.y=I,Q=!0,g&&tt.restart(!0),(R||z)&&d0(R,z)}},u0=function(A){w.event=A,W(w)},ni=function(A){w.event=A,K(w)},A0=function(A){return Te(A)||tr(A,u)&&fe(w)};tt=w._dc=He.delayedCall(m||.25,yr).pause(),w.deltaX=w.deltaY=0,w._vx=Ur(0,50,!0),w._vy=Ur(0,50,!0),w.scrollX=we,w.scrollY=ti,w.isDragging=w.isGesturing=w.isPressed=!1,xa(this),w.enable=function(N){return w.isEnabled||(st(wi?ye:l,"scroll",bs),o.indexOf("scroll")>=0&&st(wi?ye:l,"scroll",Ft,_i,Ze),o.indexOf("wheel")>=0&&st(l,"wheel",Nt,_i,Ze),(o.indexOf("touch")>=0&&ya||o.indexOf("pointer")>=0)&&(st(l,Ht[0],Di,_i,Ze),st(ye,Ht[2],G),st(ye,Ht[3],G),ke&&st(l,"click",z0,!0,!0),fe&&st(l,"click",A0),oe&&st(ye,"gesturestart",Ri),_&&st(ye,"gestureend",Rt),W&&st(l,Qi+"enter",u0),K&&st(l,Qi+"leave",ni),j&&st(l,Qi+"move",Fi)),w.isEnabled=!0,w.isDragging=w.isGesturing=w.isPressed=Q=dt=!1,w._vx.reset(),w._vy.reset(),vi=we(),Oi=ti(),N&&N.type&&Di(N),Qe&&Qe(w)),w},w.disable=function(){w.isEnabled&&(T0.filter(function(N){return N!==w&&nr(N.target)}).length||nt(wi?ye:l,"scroll",bs),w.isPressed&&(w._vx.reset(),w._vy.reset(),nt(Z?l:ye,Ht[1],yi,!0)),nt(wi?ye:l,"scroll",Ft,Ze),nt(l,"wheel",Nt,Ze),nt(l,Ht[0],Di,Ze),nt(ye,Ht[2],G),nt(ye,Ht[3],G),nt(l,"click",z0,!0),nt(l,"click",A0),nt(ye,"gesturestart",Ri),nt(ye,"gestureend",Rt),nt(l,Qi+"enter",u0),nt(l,Qi+"leave",ni),nt(l,Qi+"move",Fi),w.isEnabled=w.isPressed=w.isDragging=!1,Ot&&Ot(w))},w.kill=w.revert=function(){w.disable();var N=T0.indexOf(w);N>=0&&T0.splice(N,1),di===w&&(di=0)},T0.push(w),Z&&nr(l)&&(di=w),w.enable(f)},Cc(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();_e.version="3.12.7";_e.create=function(a){return new _e(a)};_e.register=Ca;_e.getAll=function(){return T0.slice()};_e.getById=function(a){return T0.filter(function(t){return t.vars.id===a})[0]};ka()&&He.registerPlugin(_e);var P,L0,X,se,Et,te,Ds,dn,_r,ur,or,jr,$e,gn,Ms,lt,Ea,La,M0,Xa,xs,Wa,at,Bs,Ga,Ua,zi,Is,Rs,B0,Fs,un,Ps,ks,$r=1,Je=Date.now,Ts=Je(),At=0,ar=0,Ma=function(t,i,r){var n=Ct(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return r["_"+i+"Clamp"]=n,n?t.substr(6,t.length-7):t},Ba=function(t,i){return i&&(!Ct(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Mc=function a(){return ar&&requestAnimationFrame(a)},Ia=function(){return gn=1},Pa=function(){return gn=0},Qt=function(t){return t},lr=function(t){return Math.round(t*1e5)/1e5||0},ja=function(){return typeof window<"u"},$a=function(){return P||ja()&&(P=window.gsap)&&P.registerPlugin&&P},n0=function(t){return!!~Ds.indexOf(t)},Ja=function(t){return(t==="Height"?Fs:X["inner"+t])||Et["client"+t]||te["client"+t]},Ka=function(t){return hi(t,"getBoundingClientRect")||(n0(t)?function(){return cn.width=X.innerWidth,cn.height=Fs,cn}:function(){return fi(t)})},Bc=function(t,i,r){var n=r.d,s=r.d2,o=r.a;return(o=hi(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(i?Ja(s):t["client"+s])||0}},Ic=function(t,i){return!i||~Vt.indexOf(t)?Ka(t):function(){return cn}},Zt=function(t,i){var r=i.s,n=i.d2,s=i.d,o=i.a;return Math.max(0,(r="scroll"+n)&&(o=hi(t,r))?o()-Ka(t)()[s]:n0(t)?(Et[r]||te[r])-Ja(n):t[r]-t["offset"+n])},Jr=function(t,i){for(var r=0;r<M0.length;r+=3)(!i||~i.indexOf(M0[r+1]))&&t(M0[r],M0[r+1],M0[r+2])},Ct=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},cr=function(t){return typeof t=="number"},Zi=function(t){return typeof t=="object"},sr=function(t,i,r){return t&&t.progress(i?0:1)&&r&&t.pause()},Ss=function(t,i){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return i(t)}):i(t);r&&r.totalTime&&(t.callbackAnimation=r)}},C0=Math.abs,Qa="left",Za="top",Ns="right",qs="bottom",t0="width",i0="height",hr="Right",fr="Left",gr="Top",mr="Bottom",Ee="padding",Pt="margin",P0="Width",Hs="Height",Be="px",zt=function(t){return X.getComputedStyle(t)},Pc=function(t){var i=zt(t).position;t.style.position=i==="absolute"||i==="fixed"?i:"relative"},za=function(t,i){for(var r in i)r in t||(t[r]=i[r]);return t},fi=function(t,i){var r=i&&zt(t)[Ms]!=="matrix(1, 0, 0, 1, 0, 0)"&&P.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return r&&r.progress(0).kill(),n},hn=function(t,i){var r=i.d2;return t["offset"+r]||t["client"+r]||0},e1=function(t){var i=[],r=t.labels,n=t.duration(),s;for(s in r)i.push(r[s]/n);return i},zc=function(t){return function(i){return P.utils.snap(e1(t),i)}},Vs=function(t){var i=P.utils.snap(t),r=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return r?function(n,s,o){o===void 0&&(o=.001);var l;if(!s)return i(n);if(s>0){for(n-=o,l=0;l<r.length;l++)if(r[l]>=n)return r[l];return r[l-1]}else for(l=r.length,n+=o;l--;)if(r[l]<=n)return r[l];return r[0]}:function(n,s,o){o===void 0&&(o=.001);var l=i(n);return!s||Math.abs(l-n)<o||l-n<0==s<0?l:i(s<0?n-t:n+t)}},Ac=function(t){return function(i,r){return Vs(e1(t))(i,r.direction)}},Kr=function(t,i,r,n){return r.split(",").forEach(function(s){return t(i,s,n)})},Ae=function(t,i,r,n,s){return t.addEventListener(i,r,{passive:!n,capture:!!s})},ze=function(t,i,r,n){return t.removeEventListener(i,r,!!n)},Qr=function(t,i,r){r=r&&r.wheelHandler,r&&(t(i,"wheel",r),t(i,"touchmove",r))},Aa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zr={toggleActions:"play",anticipatePin:0},fn={top:0,left:0,center:.5,bottom:1,right:1},sn=function(t,i){if(Ct(t)){var r=t.indexOf("="),n=~r?+(t.charAt(r-1)+1)*parseFloat(t.substr(r+1)):0;~r&&(t.indexOf("%")>r&&(n*=i/100),t=t.substr(0,r-1)),t=n+(t in fn?fn[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0)}return t},en=function(t,i,r,n,s,o,l,c){var d=s.startColor,u=s.endColor,g=s.fontSize,m=s.indent,h=s.fontWeight,p=se.createElement("div"),f=n0(r)||hi(r,"pinType")==="fixed",v=t.indexOf("scroller")!==-1,k=f?te:r,x=t.indexOf("start")!==-1,S=x?d:u,y="border-color:"+S+";font-size:"+g+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((v||c)&&f?"fixed;":"absolute;"),(v||c||!f)&&(y+=(n===Ce?Ns:qs)+":"+(o+parseFloat(m))+"px;"),l&&(y+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(i?" marker-"+i:"")),p.style.cssText=y,p.innerText=i||i===0?t+"-"+i:t,k.children[0]?k.insertBefore(p,k.children[0]):k.appendChild(p),p._offset=p["offset"+n.op.d2],on(p,0,n,x),p},on=function(t,i,r,n){var s={display:"block"},o=r[n?"os2":"p2"],l=r[n?"p2":"os2"];t._isFlipped=n,s[r.a+"Percent"]=n?-100:0,s[r.a]=n?"1px":0,s["border"+o+P0]=1,s["border"+l+P0]=0,s[r.p]=i+"px",P.set(t,s)},Y=[],zs={},vr,Oa=function(){return Je()-At>34&&(vr||(vr=requestAnimationFrame(gi)))},E0=function(){(!at||!at.isPressed||at.startX>te.clientWidth)&&(V.cache++,at?vr||(vr=requestAnimationFrame(gi)):gi(),At||o0("scrollStart"),At=Je())},Cs=function(){Ua=X.innerWidth,Ga=X.innerHeight},dr=function(t){V.cache++,(t===!0||!$e&&!Wa&&!se.fullscreenElement&&!se.webkitFullscreenElement&&(!Bs||Ua!==X.innerWidth||Math.abs(X.innerHeight-Ga)>X.innerHeight*.25))&&dn.restart(!0)},s0={},Oc=[],t1=function a(){return ze(q,"scrollEnd",a)||e0(!0)},o0=function(t){return s0[t]&&s0[t].map(function(i){return i()})||Oc},St=[],i1=function(t){for(var i=0;i<St.length;i+=5)(!t||St[i+4]&&St[i+4].query===t)&&(St[i].style.cssText=St[i+1],St[i].getBBox&&St[i].setAttribute("transform",St[i+2]||""),St[i+3].uncache=1)},Ys=function(t,i){var r;for(lt=0;lt<Y.length;lt++)r=Y[lt],r&&(!i||r._ctx===i)&&(t?r.kill(1):r.revert(!0,!0));un=!0,i&&i1(i),i||o0("revert")},r1=function(t,i){V.cache++,(i||!ct)&&V.forEach(function(r){return Ke(r)&&r.cacheID++&&(r.rec=0)}),Ct(t)&&(X.history.scrollRestoration=Rs=t)},ct,r0=0,Da,Dc=function(){if(Da!==r0){var t=Da=r0;requestAnimationFrame(function(){return t===r0&&e0(!0)})}},n1=function(){te.appendChild(B0),Fs=!at&&B0.offsetHeight||X.innerHeight,te.removeChild(B0)},Ra=function(t){return _r(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=t?"none":"block"})},e0=function(t,i){if(Et=se.documentElement,te=se.body,Ds=[X,se,Et,te],At&&!t&&!un){Ae(q,"scrollEnd",t1);return}n1(),ct=q.isRefreshing=!0,V.forEach(function(n){return Ke(n)&&++n.cacheID&&(n.rec=n())});var r=o0("refreshInit");Xa&&q.sort(),i||Ys(),V.forEach(function(n){Ke(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Y.slice(0).forEach(function(n){return n.refresh()}),un=!1,Y.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Ps=1,Ra(!0),Y.forEach(function(n){var s=Zt(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,l=n._startClamp&&n.start>=s;(o||l)&&n.setPositions(l?s-1:n.start,o?Math.max(l?s:n.start+1,s):n.end,!0)}),Ra(!1),Ps=0,r.forEach(function(n){return n&&n.render&&n.render(-1)}),V.forEach(function(n){Ke(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),r1(Rs,1),dn.pause(),r0++,ct=2,gi(2),Y.forEach(function(n){return Ke(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ct=q.isRefreshing=!1,o0("refresh")},As=0,an=1,pr,gi=function(t){if(t===2||!ct&&!un){q.isUpdating=!0,pr&&pr.update(0);var i=Y.length,r=Je(),n=r-Ts>=50,s=i&&Y[0].scroll();if(an=As>s?-1:1,ct||(As=s),n&&(At&&!gn&&r-At>200&&(At=0,o0("scrollEnd")),or=Ts,Ts=r),an<0){for(lt=i;lt-- >0;)Y[lt]&&Y[lt].update(0,n);an=1}else for(lt=0;lt<i;lt++)Y[lt]&&Y[lt].update(0,n);q.isUpdating=!1}vr=0},Os=[Qa,Za,qs,Ns,Pt+mr,Pt+hr,Pt+gr,Pt+fr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ln=Os.concat([t0,i0,"boxSizing","max"+P0,"max"+Hs,"position",Pt,Ee,Ee+gr,Ee+hr,Ee+mr,Ee+fr]),Rc=function(t,i,r){I0(r);var n=t._gsap;if(n.spacerIsNative)I0(n.spacerState);else if(t._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(t,i),s.removeChild(i))}t._gsap.swappedIn=!1},Es=function(t,i,r,n){if(!t._gsap.swappedIn){for(var s=Os.length,o=i.style,l=t.style,c;s--;)c=Os[s],o[c]=r[c];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),l[qs]=l[Ns]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[t0]=hn(t,je)+Be,o[i0]=hn(t,Ce)+Be,o[Ee]=l[Pt]=l[Za]=l[Qa]="0",I0(n),l[t0]=l["max"+P0]=r[t0],l[i0]=l["max"+Hs]=r[i0],l[Ee]=r[Ee],t.parentNode!==i&&(t.parentNode.insertBefore(i,t),i.appendChild(t)),t._gsap.swappedIn=!0}},Fc=/([A-Z])/g,I0=function(t){if(t){var i=t.t.style,r=t.length,n=0,s,o;for((t.t._gsap||P.core.getCache(t.t)).uncache=1;n<r;n+=2)o=t[n+1],s=t[n],o?i[s]=o:i[s]&&i.removeProperty(s.replace(Fc,"-$1").toLowerCase())}},tn=function(t){for(var i=ln.length,r=t.style,n=[],s=0;s<i;s++)n.push(ln[s],r[ln[s]]);return n.t=t,n},Nc=function(t,i,r){for(var n=[],s=t.length,o=r?8:0,l;o<s;o+=2)l=t[o],n.push(l,l in i?i[l]:t[o+1]);return n.t=t.t,n},cn={left:0,top:0},Fa=function(t,i,r,n,s,o,l,c,d,u,g,m,h,p){Ke(t)&&(t=t(c)),Ct(t)&&t.substr(0,3)==="max"&&(t=m+(t.charAt(4)==="="?sn("0"+t.substr(3),r):0));var f=h?h.time():0,v,k,x;if(h&&h.seek(0),isNaN(t)||(t=+t),cr(t))h&&(t=P.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,m,t)),l&&on(l,r,n,!0);else{Ke(i)&&(i=i(c));var S=(t||"0").split(" "),y,T,E,b;x=ot(i,c)||te,y=fi(x)||{},(!y||!y.left&&!y.top)&&zt(x).display==="none"&&(b=x.style.display,x.style.display="block",y=fi(x),b?x.style.display=b:x.style.removeProperty("display")),T=sn(S[0],y[n.d]),E=sn(S[1]||"0",r),t=y[n.p]-d[n.p]-u+T+s-E,l&&on(l,E,n,r-E<20||l._isStart&&E>20),r-=r-E}if(p&&(c[p]=t||-.001,t<0&&(t=0)),o){var M=t+r,C=o._isStart;v="scroll"+n.d2,on(o,M,n,C&&M>20||!C&&(g?Math.max(te[v],Et[v]):o.parentNode[v])<=M+1),g&&(d=fi(l),g&&(o.style[n.op.p]=d[n.op.p]-n.op.m-o._offset+Be))}return h&&x&&(v=fi(x),h.seek(m),k=fi(x),h._caScrollDist=v[n.p]-k[n.p],t=t/h._caScrollDist*m),h&&h.seek(f),h?t:Math.round(t)},qc=/(webkit|moz|length|cssText|inset)/i,Na=function(t,i,r,n){if(t.parentNode!==i){var s=t.style,o,l;if(i===te){t._stOrig=s.cssText,l=zt(t);for(o in l)!+o&&!qc.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=r,s.left=n}else s.cssText=t._stOrig;P.core.getCache(t).uncache=1,i.appendChild(t)}},s1=function(t,i,r){var n=i,s=n;return function(o){var l=Math.round(t());return l!==n&&l!==s&&Math.abs(l-n)>3&&Math.abs(l-s)>3&&(o=l,r&&r()),s=n,n=Math.round(o),n}},rn=function(t,i,r){var n={};n[i.p]="+="+r,P.set(t,n)},qa=function(t,i){var r=ui(t,i),n="_scroll"+i.p2,s=function o(l,c,d,u,g){var m=o.tween,h=c.onComplete,p={};d=d||r();var f=s1(r,d,function(){m.kill(),o.tween=0});return g=u&&g||0,u=u||l-d,m&&m.kill(),c[n]=l,c.inherit=!1,c.modifiers=p,p[n]=function(){return f(d+u*m.ratio+g*m.ratio*m.ratio)},c.onUpdate=function(){V.cache++,o.tween&&gi()},c.onComplete=function(){o.tween=0,h&&h.call(m)},m=o.tween=P.to(t,c),m};return t[n]=r,r.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ae(t,"wheel",r.wheelHandler),q.isTouch&&Ae(t,"touchmove",r.wheelHandler),s},q=function(){function a(i,r){L0||a.register(P)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Is(this),this.init(i,r)}var t=a.prototype;return t.init=function(r,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ar){this.update=this.refresh=this.kill=Qt;return}r=za(Ct(r)||cr(r)||r.nodeType?{trigger:r}:r,Zr);var s=r,o=s.onUpdate,l=s.toggleClass,c=s.id,d=s.onToggle,u=s.onRefresh,g=s.scrub,m=s.trigger,h=s.pin,p=s.pinSpacing,f=s.invalidateOnRefresh,v=s.anticipatePin,k=s.onScrubComplete,x=s.onSnapComplete,S=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,b=s.containerAnimation,M=s.fastScrollEnd,C=s.preventOverlaps,L=r.horizontal||r.containerAnimation&&r.horizontal!==!1?je:Ce,D=!g&&g!==0,B=ot(r.scroller||X),U=P.core.getCache(B),W=n0(B),K=("pinType"in r?r.pinType:hi(B,"pinType")||W&&"fixed")==="fixed",j=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],O=D&&r.toggleActions.split(" "),Z="markers"in r?r.markers:Zr.markers,oe=W?0:parseFloat(zt(B)["border"+L.p2+P0])||0,_=this,ae=r.onRefreshInit&&function(){return r.onRefreshInit(_)},Qe=Bc(B,W,L),Ot=Ic(B,W),fe=0,Oe=0,Ze=0,ke=ui(B,L),et,Ve,pi,tt,dt,Q,ve,ut,_t,w,vt,ei,_i,we,ti,vi,Oi,Ie,wi,ye,Dt,Lt,ii,z0,Te,yr,ri,c0,d0,yi,Di,G,Ri,Rt,Ft,Nt,Fi,u0,ni;if(_._startClamp=_._endClamp=!1,_._dir=L,v*=45,_.scroller=B,_.scroll=b?b.time.bind(b):ke,tt=ke(),_.vars=r,n=n||r.animation,"refreshPriority"in r&&(Xa=1,r.refreshPriority===-9999&&(pr=_)),U.tweenScroll=U.tweenScroll||{top:qa(B,Ce),left:qa(B,je)},_.tweenTo=et=U.tweenScroll[L.p],_.scrubDuration=function(I){Ri=cr(I)&&I,Ri?G?G.duration(I):G=P.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ri,paused:!0,onComplete:function(){return k&&k(_)}}):(G&&G.progress(1).kill(),G=0)},n&&(n.vars.lazy=!1,n._initted&&!_.isReverted||n.vars.immediateRender!==!1&&r.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),_.animation=n.pause(),n.scrollTrigger=_,_.scrubDuration(g),yi=0,c||(c=n.vars.id)),y&&((!Zi(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in te.style&&P.set(W?[te,Et]:B,{scrollBehavior:"auto"}),V.forEach(function(I){return Ke(I)&&I.target===(W?se.scrollingElement||Et:B)&&(I.smooth=!1)}),pi=Ke(y.snapTo)?y.snapTo:y.snapTo==="labels"?zc(n):y.snapTo==="labelsDirectional"?Ac(n):y.directional!==!1?function(I,R){return Vs(y.snapTo)(I,Je()-Oe<500?0:R.direction)}:P.utils.snap(y.snapTo),Rt=y.duration||{min:.1,max:2},Rt=Zi(Rt)?ur(Rt.min,Rt.max):ur(Rt,Rt),Ft=P.delayedCall(y.delay||Ri/2||.1,function(){var I=ke(),R=Je()-Oe<500,z=et.tween;if((R||Math.abs(_.getVelocity())<10)&&!z&&!gn&&fe!==I){var F=(I-Q)/we,Pe=n&&!D?n.totalProgress():F,$=R?0:(Pe-Di)/(Je()-or)*1e3||0,be=P.utils.clamp(-F,1-F,C0($/2)*$/.185),Ye=F+(y.inertia===!1?0:be),ge,le,ie=y,qt=ie.onStart,de=ie.onInterrupt,wt=ie.onComplete;if(ge=pi(Ye,_),cr(ge)||(ge=Ye),le=Math.max(0,Math.round(Q+ge*we)),I<=ve&&I>=Q&&le!==I){if(z&&!z._initted&&z.data<=C0(le-I))return;y.inertia===!1&&(be=ge-F),et(le,{duration:Rt(C0(Math.max(C0(Ye-Pe),C0(ge-Pe))*.185/$/.05||0)),ease:y.ease||"power3",data:C0(le-I),onInterrupt:function(){return Ft.restart(!0)&&de&&de(_)},onComplete:function(){_.update(),fe=ke(),n&&!D&&(G?G.resetTo("totalProgress",ge,n._tTime/n._tDur):n.progress(ge)),yi=Di=n&&!D?n.totalProgress():_.progress,x&&x(_),wt&&wt(_)}},I,be*we,le-I-be*we),qt&&qt(_,et.tween)}}else _.isActive&&fe!==I&&Ft.restart(!0)}).pause()),c&&(zs[c]=_),m=_.trigger=ot(m||h!==!0&&h),ni=m&&m._gsap&&m._gsap.stRevert,ni&&(ni=ni(_)),h=h===!0?m:ot(h),Ct(l)&&(l={targets:m,className:l}),h&&(p===!1||p===Pt||(p=!p&&h.parentNode&&h.parentNode.style&&zt(h.parentNode).display==="flex"?!1:Ee),_.pin=h,Ve=P.core.getCache(h),Ve.spacer?ti=Ve.pinState:(E&&(E=ot(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ve.spacerIsNative=!!E,E&&(Ve.spacerState=tn(E))),Ve.spacer=Ie=E||se.createElement("div"),Ie.classList.add("pin-spacer"),c&&Ie.classList.add("pin-spacer-"+c),Ve.pinState=ti=tn(h)),r.force3D!==!1&&P.set(h,{force3D:!0}),_.spacer=Ie=Ve.spacer,d0=zt(h),z0=d0[p+L.os2],ye=P.getProperty(h),Dt=P.quickSetter(h,L.a,Be),Es(h,Ie,d0),Oi=tn(h)),Z){ei=Zi(Z)?za(Z,Aa):Aa,w=en("scroller-start",c,B,L,ei,0),vt=en("scroller-end",c,B,L,ei,0,w),wi=w["offset"+L.op.d2];var A0=ot(hi(B,"content")||B);ut=this.markerStart=en("start",c,A0,L,ei,wi,0,b),_t=this.markerEnd=en("end",c,A0,L,ei,wi,0,b),b&&(u0=P.quickSetter([ut,_t],L.a,Be)),!K&&!(Vt.length&&hi(B,"fixedMarkers")===!0)&&(Pc(W?te:B),P.set([w,vt],{force3D:!0}),yr=P.quickSetter(w,L.a,Be),c0=P.quickSetter(vt,L.a,Be))}if(b){var N=b.vars.onUpdate,A=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){_.update(0,0,1),N&&N.apply(b,A||[])})}if(_.previous=function(){return Y[Y.indexOf(_)-1]},_.next=function(){return Y[Y.indexOf(_)+1]},_.revert=function(I,R){if(!R)return _.kill(!0);var z=I!==!1||!_.enabled,F=$e;z!==_.isReverted&&(z&&(Nt=Math.max(ke(),_.scroll.rec||0),Ze=_.progress,Fi=n&&n.progress()),ut&&[ut,_t,w,vt].forEach(function(Pe){return Pe.style.display=z?"none":"block"}),z&&($e=_,_.update(z)),h&&(!T||!_.isActive)&&(z?Rc(h,Ie,ti):Es(h,Ie,zt(h),Te)),z||_.update(z),$e=F,_.isReverted=z)},_.refresh=function(I,R,z,F){if(!(($e||!_.enabled)&&!R)){if(h&&I&&At){Ae(a,"scrollEnd",t1);return}!ct&&ae&&ae(_),$e=_,et.tween&&!z&&(et.tween.kill(),et.tween=0),G&&G.pause(),f&&n&&n.revert({kill:!1}).invalidate(),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var Pe=Qe(),$=Ot(),be=b?b.duration():Zt(B,L),Ye=we<=.01,ge=0,le=F||0,ie=Zi(z)?z.end:r.end,qt=r.endTrigger||m,de=Zi(z)?z.start:r.start||(r.start===0||!m?0:h?"0 0":"0 100%"),wt=_.pinnedContainer=r.pinnedContainer&&ot(r.pinnedContainer,_),Yt=m&&Math.max(0,Y.indexOf(_))||0,De=Yt,Re,Xe,Ni,br,We,Le,Xt,xn,$s,O0,Wt,D0,xr;for(Z&&Zi(z)&&(D0=P.getProperty(w,L.p),xr=P.getProperty(vt,L.p));De-- >0;)Le=Y[De],Le.end||Le.refresh(0,1)||($e=_),Xt=Le.pin,Xt&&(Xt===m||Xt===h||Xt===wt)&&!Le.isReverted&&(O0||(O0=[]),O0.unshift(Le),Le.revert(!0,!0)),Le!==Y[De]&&(Yt--,De--);for(Ke(de)&&(de=de(_)),de=Ma(de,"start",_),Q=Fa(de,m,Pe,L,ke(),ut,w,_,$,oe,K,be,b,_._startClamp&&"_startClamp")||(h?-.001:0),Ke(ie)&&(ie=ie(_)),Ct(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(Ct(de)?de.split(" ")[0]:"")+ie:(ge=sn(ie.substr(2),Pe),ie=Ct(de)?de:(b?P.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Q):Q)+ge,qt=m)),ie=Ma(ie,"end",_),ve=Math.max(Q,Fa(ie||(qt?"100% 0":be),qt,Pe,L,ke()+ge,_t,vt,_,$,oe,K,be,b,_._endClamp&&"_endClamp"))||-.001,ge=0,De=Yt;De--;)Le=Y[De],Xt=Le.pin,Xt&&Le.start-Le._pinPush<=Q&&!b&&Le.end>0&&(Re=Le.end-(_._startClamp?Math.max(0,Le.start):Le.start),(Xt===m&&Le.start-Le._pinPush<Q||Xt===wt)&&isNaN(de)&&(ge+=Re*(1-Le.progress)),Xt===h&&(le+=Re));if(Q+=ge,ve+=ge,_._startClamp&&(_._startClamp+=ge),_._endClamp&&!ct&&(_._endClamp=ve||-.001,ve=Math.min(ve,Zt(B,L))),we=ve-Q||(Q-=.01)&&.001,Ye&&(Ze=P.utils.clamp(0,1,P.utils.normalize(Q,ve,Nt))),_._pinPush=le,ut&&ge&&(Re={},Re[L.a]="+="+ge,wt&&(Re[L.p]="-="+ke()),P.set([ut,_t],Re)),h&&!(Ps&&_.end>=Zt(B,L)))Re=zt(h),br=L===Ce,Ni=ke(),Lt=parseFloat(ye(L.a))+le,!be&&ve>1&&(Wt=(W?se.scrollingElement||Et:B).style,Wt={style:Wt,value:Wt["overflow"+L.a.toUpperCase()]},W&&zt(te)["overflow"+L.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+L.a.toUpperCase()]="scroll")),Es(h,Ie,Re),Oi=tn(h),Xe=fi(h,!0),xn=K&&ui(B,br?je:Ce)(),p?(Te=[p+L.os2,we+le+Be],Te.t=Ie,De=p===Ee?hn(h,L)+we+le:0,De&&(Te.push(L.d,De+Be),Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),I0(Te),wt&&Y.forEach(function(R0){R0.pin===wt&&R0.vars.pinSpacing!==!1&&(R0._subPinOffset=!0)}),K&&ke(Nt)):(De=hn(h,L),De&&Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),K&&(We={top:Xe.top+(br?Ni-Q:xn)+Be,left:Xe.left+(br?xn:Ni-Q)+Be,boxSizing:"border-box",position:"fixed"},We[t0]=We["max"+P0]=Math.ceil(Xe.width)+Be,We[i0]=We["max"+Hs]=Math.ceil(Xe.height)+Be,We[Pt]=We[Pt+gr]=We[Pt+hr]=We[Pt+mr]=We[Pt+fr]="0",We[Ee]=Re[Ee],We[Ee+gr]=Re[Ee+gr],We[Ee+hr]=Re[Ee+hr],We[Ee+mr]=Re[Ee+mr],We[Ee+fr]=Re[Ee+fr],vi=Nc(ti,We,T),ct&&ke(0)),n?($s=n._initted,xs(1),n.render(n.duration(),!0,!0),ii=ye(L.a)-Lt+we+le,ri=Math.abs(we-ii)>1,K&&ri&&vi.splice(vi.length-2,2),n.render(0,!0,!0),$s||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),xs(0)):ii=we,Wt&&(Wt.value?Wt.style["overflow"+L.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+L.a));else if(m&&ke()&&!b)for(Xe=m.parentNode;Xe&&Xe!==te;)Xe._pinOffset&&(Q-=Xe._pinOffset,ve-=Xe._pinOffset),Xe=Xe.parentNode;O0&&O0.forEach(function(R0){return R0.revert(!1,!0)}),_.start=Q,_.end=ve,tt=dt=ct?Nt:ke(),!b&&!ct&&(tt<Nt&&ke(Nt),_.scroll.rec=0),_.revert(!1,!0),Oe=Je(),Ft&&(fe=-1,Ft.restart(!0)),$e=0,n&&D&&(n._initted||Fi)&&n.progress()!==Fi&&n.progress(Fi||0,!0).render(n.time(),!0,!0),(Ye||Ze!==_.progress||b||f||n&&!n._initted)&&(n&&!D&&n.totalProgress(b&&Q<-.001&&!Ze?P.utils.normalize(Q,ve,0):Ze,!0),_.progress=Ye||(tt-Q)/we===Ze?0:Ze),h&&p&&(Ie._pinOffset=Math.round(_.progress*ii)),G&&G.invalidate(),isNaN(D0)||(D0-=P.getProperty(w,L.p),xr-=P.getProperty(vt,L.p),rn(w,L,D0),rn(ut,L,D0-(F||0)),rn(vt,L,xr),rn(_t,L,xr-(F||0))),Ye&&!ct&&_.update(),u&&!ct&&!_i&&(_i=!0,u(_),_i=!1)}},_.getVelocity=function(){return(ke()-dt)/(Je()-or)*1e3||0},_.endAnimation=function(){sr(_.callbackAnimation),n&&(G?G.progress(1):n.paused()?D||sr(n,_.direction<0,1):sr(n,n.reversed()))},_.labelToScroll=function(I){return n&&n.labels&&(Q||_.refresh()||Q)+n.labels[I]/n.duration()*we||0},_.getTrailing=function(I){var R=Y.indexOf(_),z=_.direction>0?Y.slice(0,R).reverse():Y.slice(R+1);return(Ct(I)?z.filter(function(F){return F.vars.preventOverlaps===I}):z).filter(function(F){return _.direction>0?F.end<=Q:F.start>=ve})},_.update=function(I,R,z){if(!(b&&!z&&!I)){var F=ct===!0?Nt:_.scroll(),Pe=I?0:(F-Q)/we,$=Pe<0?0:Pe>1?1:Pe||0,be=_.progress,Ye,ge,le,ie,qt,de,wt,Yt;if(R&&(dt=tt,tt=b?ke():F,y&&(Di=yi,yi=n&&!D?n.totalProgress():$)),v&&h&&!$e&&!$r&&At&&(!$&&Q<F+(F-dt)/(Je()-or)*v?$=1e-4:$===1&&ve>F+(F-dt)/(Je()-or)*v&&($=.9999)),$!==be&&_.enabled){if(Ye=_.isActive=!!$&&$<1,ge=!!be&&be<1,de=Ye!==ge,qt=de||!!$!=!!be,_.direction=$>be?1:-1,_.progress=$,qt&&!$e&&(le=$&&!be?0:$===1?1:be===1?2:3,D&&(ie=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Yt=n&&(ie==="complete"||ie==="reset"||ie in n))),C&&(de||Yt)&&(Yt||g||!n)&&(Ke(C)?C(_):_.getTrailing(C).forEach(function(Ni){return Ni.endAnimation()})),D||(G&&!$e&&!$r?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",$,n._tTime/n._tDur):(G.vars.totalProgress=$,G.invalidate().restart())):n&&n.totalProgress($,!!($e&&(Oe||I)))),h){if(I&&p&&(Ie.style[p+L.os2]=z0),!K)Dt(lr(Lt+ii*$));else if(qt){if(wt=!I&&$>be&&ve+1>F&&F+1>=Zt(B,L),T)if(!I&&(Ye||wt)){var De=fi(h,!0),Re=F-Q;Na(h,te,De.top+(L===Ce?Re:0)+Be,De.left+(L===Ce?0:Re)+Be)}else Na(h,Ie);I0(Ye||wt?vi:Oi),ri&&$<1&&Ye||Dt(Lt+($===1&&!wt?ii:0))}}y&&!et.tween&&!$e&&!$r&&Ft.restart(!0),l&&(de||S&&$&&($<1||!ks))&&_r(l.targets).forEach(function(Ni){return Ni.classList[Ye||S?"add":"remove"](l.className)}),o&&!D&&!I&&o(_),qt&&!$e?(D&&(Yt&&(ie==="complete"?n.pause().totalProgress(1):ie==="reset"?n.restart(!0).pause():ie==="restart"?n.restart(!0):n[ie]()),o&&o(_)),(de||!ks)&&(d&&de&&Ss(_,d),j[le]&&Ss(_,j[le]),S&&($===1?_.kill(!1,1):j[le]=0),de||(le=$===1?1:3,j[le]&&Ss(_,j[le]))),M&&!Ye&&Math.abs(_.getVelocity())>(cr(M)?M:2500)&&(sr(_.callbackAnimation),G?G.progress(1):sr(n,ie==="reverse"?1:!$,1))):D&&o&&!$e&&o(_)}if(c0){var Xe=b?F/b.duration()*(b._caScrollDist||0):F;yr(Xe+(w._isFlipped?1:0)),c0(Xe)}u0&&u0(-F/b.duration()*(b._caScrollDist||0))}},_.enable=function(I,R){_.enabled||(_.enabled=!0,Ae(B,"resize",dr),W||Ae(B,"scroll",E0),ae&&Ae(a,"refreshInit",ae),I!==!1&&(_.progress=Ze=0,tt=dt=fe=ke()),R!==!1&&_.refresh())},_.getTween=function(I){return I&&et?et.tween:G},_.setPositions=function(I,R,z,F){if(b){var Pe=b.scrollTrigger,$=b.duration(),be=Pe.end-Pe.start;I=Pe.start+be*I/$,R=Pe.start+be*R/$}_.refresh(!1,!1,{start:Ba(I,z&&!!_._startClamp),end:Ba(R,z&&!!_._endClamp)},F),_.update()},_.adjustPinSpacing=function(I){if(Te&&I){var R=Te.indexOf(L.d)+1;Te[R]=parseFloat(Te[R])+I+Be,Te[1]=parseFloat(Te[1])+I+Be,I0(Te)}},_.disable=function(I,R){if(_.enabled&&(I!==!1&&_.revert(!0,!0),_.enabled=_.isActive=!1,R||G&&G.pause(),Nt=0,Ve&&(Ve.uncache=1),ae&&ze(a,"refreshInit",ae),Ft&&(Ft.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!W)){for(var z=Y.length;z--;)if(Y[z].scroller===B&&Y[z]!==_)return;ze(B,"resize",dr),W||ze(B,"scroll",E0)}},_.kill=function(I,R){_.disable(I,R),G&&!R&&G.kill(),c&&delete zs[c];var z=Y.indexOf(_);z>=0&&Y.splice(z,1),z===lt&&an>0&&lt--,z=0,Y.forEach(function(F){return F.scroller===_.scroller&&(z=1)}),z||ct||(_.scroll.rec=0),n&&(n.scrollTrigger=null,I&&n.revert({kill:!1}),R||n.kill()),ut&&[ut,_t,w,vt].forEach(function(F){return F.parentNode&&F.parentNode.removeChild(F)}),pr===_&&(pr=0),h&&(Ve&&(Ve.uncache=1),z=0,Y.forEach(function(F){return F.pin===h&&z++}),z||(Ve.spacer=0)),r.onKill&&r.onKill(_)},Y.push(_),_.enable(!1,!1),ni&&ni(_),n&&n.add&&!we){var ee=_.update;_.update=function(){_.update=ee,V.cache++,Q||ve||_.refresh()},P.delayedCall(.01,_.update),we=.01,Q=ve=0}else _.refresh();h&&Dc()},a.register=function(r){return L0||(P=r||$a(),ja()&&window.document&&a.enable(),L0=ar),L0},a.defaults=function(r){if(r)for(var n in r)Zr[n]=r[n];return Zr},a.disable=function(r,n){ar=0,Y.forEach(function(o){return o[n?"kill":"disable"](r)}),ze(X,"wheel",E0),ze(se,"scroll",E0),clearInterval(jr),ze(se,"touchcancel",Qt),ze(te,"touchstart",Qt),Kr(ze,se,"pointerdown,touchstart,mousedown",Ia),Kr(ze,se,"pointerup,touchend,mouseup",Pa),dn.kill(),Jr(ze);for(var s=0;s<V.length;s+=3)Qr(ze,V[s],V[s+1]),Qr(ze,V[s],V[s+2])},a.enable=function(){if(X=window,se=document,Et=se.documentElement,te=se.body,P&&(_r=P.utils.toArray,ur=P.utils.clamp,Is=P.core.context||Qt,xs=P.core.suppressOverwrites||Qt,Rs=X.history.scrollRestoration||"auto",As=X.pageYOffset||0,P.core.globals("ScrollTrigger",a),te)){ar=1,B0=document.createElement("div"),B0.style.height="100vh",B0.style.position="absolute",n1(),Mc(),_e.register(P),a.isTouch=_e.isTouch,zi=_e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bs=_e.isTouch===1,Ae(X,"wheel",E0),Ds=[X,se,Et,te],P.matchMedia?(a.matchMedia=function(d){var u=P.matchMedia(),g;for(g in d)u.add(g,d[g]);return u},P.addEventListener("matchMediaInit",function(){return Ys()}),P.addEventListener("matchMediaRevert",function(){return i1()}),P.addEventListener("matchMedia",function(){e0(0,1),o0("matchMedia")}),P.matchMedia().add("(orientation: portrait)",function(){return Cs(),Cs})):console.warn("Requires GSAP 3.11.0 or later"),Cs(),Ae(se,"scroll",E0);var r=te.hasAttribute("style"),n=te.style,s=n.borderTopStyle,o=P.core.Animation.prototype,l,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",l=fi(te),Ce.m=Math.round(l.top+Ce.sc())||0,je.m=Math.round(l.left+je.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),r||(te.setAttribute("style",""),te.removeAttribute("style")),jr=setInterval(Oa,250),P.delayedCall(.5,function(){return $r=0}),Ae(se,"touchcancel",Qt),Ae(te,"touchstart",Qt),Kr(Ae,se,"pointerdown,touchstart,mousedown",Ia),Kr(Ae,se,"pointerup,touchend,mouseup",Pa),Ms=P.utils.checkPrefix("transform"),ln.push(Ms),L0=Je(),dn=P.delayedCall(.2,e0).pause(),M0=[se,"visibilitychange",function(){var d=X.innerWidth,u=X.innerHeight;se.hidden?(Ea=d,La=u):(Ea!==d||La!==u)&&dr()},se,"DOMContentLoaded",e0,X,"load",e0,X,"resize",dr],Jr(Ae),Y.forEach(function(d){return d.enable(0,1)}),c=0;c<V.length;c+=3)Qr(ze,V[c],V[c+1]),Qr(ze,V[c],V[c+2])}},a.config=function(r){"limitCallbacks"in r&&(ks=!!r.limitCallbacks);var n=r.syncInterval;n&&clearInterval(jr)||(jr=n)&&setInterval(Oa,n),"ignoreMobileResize"in r&&(Bs=a.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Jr(ze)||Jr(Ae,r.autoRefreshEvents||"none"),Wa=(r.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(r,n){var s=ot(r),o=V.indexOf(s),l=n0(s);~o&&V.splice(o,l?6:2),n&&(l?Vt.unshift(X,n,te,n,Et,n):Vt.unshift(s,n))},a.clearMatchMedia=function(r){Y.forEach(function(n){return n._ctx&&n._ctx.query===r&&n._ctx.kill(!0,!0)})},a.isInViewport=function(r,n,s){var o=(Ct(r)?ot(r):r).getBoundingClientRect(),l=o[s?t0:i0]*n||0;return s?o.right-l>0&&o.left+l<X.innerWidth:o.bottom-l>0&&o.top+l<X.innerHeight},a.positionInViewport=function(r,n,s){Ct(r)&&(r=ot(r));var o=r.getBoundingClientRect(),l=o[s?t0:i0],c=n==null?l/2:n in fn?fn[n]*l:~n.indexOf("%")?parseFloat(n)*l/100:parseFloat(n)||0;return s?(o.left+c)/X.innerWidth:(o.top+c)/X.innerHeight},a.killAll=function(r){if(Y.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),r!==!0){var n=s0.killAll||[];s0={},n.forEach(function(s){return s()})}},a}();q.version="3.12.7";q.saveStyles=function(a){return a?_r(a).forEach(function(t){if(t&&t.style){var i=St.indexOf(t);i>=0&&St.splice(i,5),St.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),P.core.getCache(t),Is())}}):St};q.revert=function(a,t){return Ys(!a,t)};q.create=function(a,t){return new q(a,t)};q.refresh=function(a){return a?dr(!0):(L0||q.register())&&e0(!0)};q.update=function(a){return++V.cache&&gi(a===!0?2:0)};q.clearScrollMemory=r1;q.maxScroll=function(a,t){return Zt(a,t?je:Ce)};q.getScrollFunc=function(a,t){return ui(ot(a),t?je:Ce)};q.getById=function(a){return zs[a]};q.getAll=function(){return Y.filter(function(a){return a.vars.id!=="ScrollSmoother"})};q.isScrolling=function(){return!!At};q.snapDirectional=Vs;q.addEventListener=function(a,t){var i=s0[a]||(s0[a]=[]);~i.indexOf(t)||i.push(t)};q.removeEventListener=function(a,t){var i=s0[a],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)};q.batch=function(a,t){var i=[],r={},n=t.interval||.016,s=t.batchMax||1e9,o=function(d,u){var g=[],m=[],h=P.delayedCall(n,function(){u(g,m),g=[],m=[]}).pause();return function(p){g.length||h.restart(!0),g.push(p.trigger),m.push(p),s<=g.length&&h.progress(1)}},l;for(l in t)r[l]=l.substr(0,2)==="on"&&Ke(t[l])&&l!=="onRefreshInit"?o(l,t[l]):t[l];return Ke(s)&&(s=s(),Ae(q,"refresh",function(){return s=t.batchMax()})),_r(a).forEach(function(c){var d={};for(l in r)d[l]=r[l];d.trigger=c,i.push(q.create(d))}),i};var Ha=function(t,i,r,n){return i>n?t(n):i<0&&t(0),r>n?(n-i)/(r-i):r<0?i/(i-r):1},Ls=function a(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+(_e.isTouch?" pinch-zoom":""):"none",t===Et&&a(te,i)},nn={auto:1,scroll:1},Hc=function(t){var i=t.event,r=t.target,n=t.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,o=s._gsap||P.core.getCache(s),l=Je(),c;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nn[(c=zt(s)).overflowY]||nn[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==r&&!n0(s)&&(nn[(c=zt(s)).overflowY]||nn[c.overflowX]),o._isScrollT=l}(o._isScroll||n==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},o1=function(t,i,r,n){return _e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:n=n&&Hc,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return r&&Ae(se,_e.eventTypes[0],Ya,!1,!0)},onDisable:function(){return ze(se,_e.eventTypes[0],Ya,!0)}})},Vc=/(input|label|select|textarea)/i,Va,Ya=function(t){var i=Vc.test(t.target.tagName);(i||Va)&&(t._gsapAllow=!0,Va=i)},Yc=function(t){Zi(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var i=t,r=i.normalizeScrollX,n=i.momentum,s=i.allowNestedScroll,o=i.onRelease,l,c,d=ot(t.target)||Et,u=P.core.globals().ScrollSmoother,g=u&&u.get(),m=zi&&(t.content&&ot(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),h=ui(d,Ce),p=ui(d,je),f=1,v=(_e.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,k=0,x=Ke(n)?function(){return n(l)}:function(){return n||2.8},S,y,T=o1(d,t.type,!0,s),E=function(){return y=!1},b=Qt,M=Qt,C=function(){c=Zt(d,Ce),M=ur(zi?1:0,c),r&&(b=ur(0,Zt(d,je))),S=r0},L=function(){m._gsap.y=lr(parseFloat(m._gsap.y)+h.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var Z=lr(l.deltaY/2),oe=M(h.v-Z);if(m&&oe!==h.v+h.offset){h.offset=oe-h.v;var _=lr((parseFloat(m&&m._gsap.y)||0)-h.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",m._gsap.y=_+"px",h.cacheID=V.cache,gi()}return!0}h.offset&&L(),y=!0},B,U,W,K,j=function(){C(),B.isActive()&&B.vars.scrollY>c&&(h()>c?B.progress(1)&&h(c):B.resetTo("scrollY",c))};return m&&P.set(m,{y:"+=0"}),t.ignoreCheck=function(O){return zi&&O.type==="touchmove"&&D(O)||f>1.05&&O.type!=="touchstart"||l.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=f;f=lr((X.visualViewport&&X.visualViewport.scale||1)/v),B.pause(),O!==f&&Ls(d,f>1.01?!0:r?!1:"x"),U=p(),W=h(),C(),S=r0},t.onRelease=t.onGestureStart=function(O,Z){if(h.offset&&L(),!Z)K.restart(!0);else{V.cache++;var oe=x(),_,ae;r&&(_=p(),ae=_+oe*.05*-O.velocityX/.227,oe*=Ha(p,_,ae,Zt(d,je)),B.vars.scrollX=b(ae)),_=h(),ae=_+oe*.05*-O.velocityY/.227,oe*=Ha(h,_,ae,Zt(d,Ce)),B.vars.scrollY=M(ae),B.invalidate().duration(oe).play(.01),(zi&&B.vars.scrollY>=c||_>=c-1)&&P.to({},{onUpdate:j,duration:oe})}o&&o(O)},t.onWheel=function(){B._ts&&B.pause(),Je()-k>1e3&&(S=0,k=Je())},t.onChange=function(O,Z,oe,_,ae){if(r0!==S&&C(),Z&&r&&p(b(_[2]===Z?U+(O.startX-O.x):p()+Z-_[1])),oe){h.offset&&L();var Qe=ae[2]===oe,Ot=Qe?W+O.startY-O.y:h()+oe-ae[1],fe=M(Ot);Qe&&Ot!==fe&&(W+=fe-Ot),h(fe)}(oe||Z)&&gi()},t.onEnable=function(){Ls(d,r?!1:"x"),q.addEventListener("refresh",j),Ae(X,"resize",j),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Ls(d,!0),ze(X,"resize",j),q.removeEventListener("refresh",j),T.kill()},t.lockAxis=t.lockAxis!==!1,l=new _e(t),l.iOS=zi,zi&&!h()&&h(1),zi&&P.ticker.add(Qt),K=l._dc,B=P.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:s1(h,h(),function(){return B.pause()})},onUpdate:gi,onComplete:K.vars.onComplete}),l};q.sort=function(a){if(Ke(a))return Y.sort(a);var t=X.pageYOffset||0;return q.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+X.innerHeight}),Y.sort(a||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};q.observe=function(a){return new _e(a)};q.normalizeScroll=function(a){if(typeof a>"u")return at;if(a===!0&&at)return at.enable();if(a===!1){at&&at.kill(),at=a;return}var t=a instanceof _e?a:Yc(a);return at&&at.target===t.target&&at.kill(),n0(t.target)&&(at=t),t};q.core={_getVelocityProp:Ur,_inputObserver:o1,_scrollers:V,_proxies:Vt,bridge:{ss:function(){At||o0("scrollStart"),At=Je()},ref:function(){return $e}}};$a()&&P.registerPlugin(q);var Xc={threshold:.7},a1=Array.from(document.querySelectorAll(".out-of-question")),l1=document.getElementById("intro-grid-one"),c1=document.getElementById("intro-grid-two"),Wc=document.querySelector(".tiny-boy"),Gc=document.querySelectorAll(".sad-child"),mn=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&a1.forEach((r,n)=>{n===0&&setTimeout(()=>{r.classList.remove("out-of-question")},500),n===1&&(setTimeout(()=>{r.classList.remove("out-of-question")},1e3),setTimeout(()=>{r.classList.add("upn-out-of-question")},1750)),n===2&&(setTimeout(()=>{r.classList.remove("out-of-question")},1750),setTimeout(()=>{r.classList.add("upn-out-of-question")},2500),setTimeout(()=>{a1[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{l1.classList.add("get-up"),c1.classList.add("get-down")},3500),setTimeout(()=>{l1.remove(),c1.remove(),Wc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Gc.forEach(s=>{s.classList.remove("sad-child")})},4500),setTimeout(()=>{Js("class","balloon-ball","add","in-wind")},5e3))});else return})},Xc);var d1=document.getElementById("brianSecondPageBox"),Uc=document.getElementById("brianSecondChair"),jc={threshold:.4},pn=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&(d1.classList.remove("unseen"),Uc.classList.add("slide-chair-in"),d1.classList.add("brianUp"));else return})},jc);var $c={threshold:.7},Jd=Array.from(document.querySelectorAll("iframe")),Kd=document.querySelector(".marketing--pitch-box"),_n=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log("func"),i.isIntersecting)i.isIntersecting&&console.log("here");else return})},$c);var Jc={threshold:.6},e3=document.getElementById("websiteVideo"),t3=new IntersectionObserver((a,t)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting){if(i.isIntersecting)switch(yt("load"),console.log(i.target," io"),i.target.scrollIntoView({behavior:"smooth",block:"end"}),i.target.id){case"gridHeader":yt(0);break;case"wpp__concept":yt(19);break;case"wpp__copy":yt(39);break;case"wpp__design":yt(59);break;case"wpp__creation":yt(79);break}}else return})},Jc);var Ai=document.getElementById("homeMonitor"),o3=document.getElementById("mob_fl_arrow"),a3=document.querySelector(".back--drop");var l3=document.querySelectorAll("iframe"),u1=a=>{if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(a.target),a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Ai.innerHTML=`
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
      `;let n=[...document.getElementsByTagName("li")],s=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{n.forEach(c=>{c.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":Ai.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":a.preventDefault(),kr();break;case"mob_fl_arrow":console.log("arrow clicked");let o=document.getElementById("fl_ex_list"),l=o.firstElementChild;o.appendChild(l),console.log(l);break}};var h1=()=>{console.log("lazy loading engaged")};Bi.registerPlugin(q);var vn="src/components/images/falling1.png",f1="src/components/images/falling2.png",wn="src/components/images/falling5.png",Xs="src/components/images/falling4.png",g1="src/components/images/falling6.png",Kc="src/components/images/panic1.png",m1="src/components/images/panic4.png",Qc="src/components/images/panic3.png",Zc=document.getElementById("image"),Ws=0,Gs=[vn,f1,vn,g1,wn,Xs,wn,Xs,vn,wn,Xs,wn,g1,vn,f1],e2=[Kc,m1,Qc,m1];function t2(){++Ws>=Gs.length&&(Ws=0),Zc.src=Gs[Ws]}var T3=document.getElementById("brianSecondPage"),S3=document.getElementById("brianSecondPageBox"),C3=document.getElementById("switchFree"),E3=document.getElementById("switchPort"),L3=document.getElementById("freelancePresenter"),M3=document.getElementById("backCloud"),B3=document.querySelector(".switchwrap"),i2=document.querySelector(".homeWrap"),r2=document.querySelectorAll("#target"),I3=document.getElementById("launch"),P3=document.getElementById("clear"),n2=!1,s2=document.getElementById("top-target"),o2=document.getElementById("hi"),a2=document.getElementById("hiBox"),l2=document.getElementById("iam"),c2=document.getElementById("iamBox"),d2=document.getElementById("brianBox"),u2=document.getElementById("strout"),h2=document.getElementById("stroutBox"),f2=document.getElementById("title"),g2=document.getElementById("titleBox"),m2=document.querySelectorAll(".first-letters"),p2=document.getElementById("first-n"),p1=document.getElementById("fallingShell"),_2=document.getElementById("wrapper"),v2=document.getElementById("moodring"),w2=document.querySelectorAll(".cloudsForward"),y2=document.querySelectorAll(".cloudsBackwards"),_1=[...w2],v1=[...y2],z3=document.getElementById("remainder"),A3=document.getElementById("c1"),O3=document.getElementById("c2"),D3=document.getElementById("c3"),R3=document.getElementById("c4"),F3=document.getElementById("c5"),N3=document.getElementById("c6"),q3=document.getElementById("c7"),H3=document.getElementById("c8"),V3=document.getElementById("c9"),Y3=document.getElementById("c10"),X3=document.getElementById("c11"),b2=document.getElementById("sun"),x2=document.getElementById("moon"),W3=document.getElementById("target"),G3=document.getElementById("switchPort"),U3=document.getElementById("brianSecondChair"),j3=document.getElementById("brianBlurbP"),$3=document.getElementById("listOfSkills"),k2=document.querySelectorAll(".shrunk"),J3=[...k2],K3=document.getElementById("listed_skills_media"),T2=document.getElementsByTagName("li"),Q3=[...T2],Z3=document.getElementById("absolute-cloud"),eu=document.getElementById("copy-gmail"),tu=document.getElementById("brianlinkedin"),iu=document.getElementById("briangithub"),ru=document.getElementById("resume-link"),nu=document.querySelectorAll("iframe"),su=document.getElementById("fallingSecond"),ou=document.getElementById("castle"),S2=document.querySelectorAll("#introToServices"),C2=Array.from(document.querySelectorAll(".nav--link")),w1=()=>{r2.forEach(n=>{pn.observe(n)}),S2.forEach(n=>{mn.observe(n)}),_n,setInterval(t2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),v2.addEventListener("click",()=>{_2.classList.toggle("dark"),b2.classList.toggle("sunset"),x2.classList.toggle("sunset")});let t=()=>{_1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),v1.forEach(n=>{n.classList.add("clouds-movement-background")})},i=()=>{p1.classList.add("falling"),setTimeout(()=>{n2=!0},3500)};window.addEventListener("load",()=>{s2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{o2.classList.remove("translatedHi"),l2.classList.remove("translatedIam"),[...m2].forEach(s=>{s.classList.add("first-name-falling-in")}),u2.classList.remove("translatedStrout"),f2.classList.remove("translatedTitle"),setTimeout(()=>{t()},2e3),setTimeout(()=>{i()},3500)},1e3),setTimeout(()=>{r()},7500)}),p2.addEventListener("transitionend",function(){});let r=()=>{a2.classList.add("up-and-out"),c2.classList.add("up-and-out"),d2.classList.add("up-and-out"),h2.classList.add("up-and-out"),g2.classList.add("up-and-out"),setTimeout(()=>{Gs=e2},2e3),setTimeout(()=>{a.style.overflow="visible",p1.classList.add("down-and-out"),_1.forEach(n=>{n.classList.add("unseen")}),v1.forEach(n=>{n.classList.add("unseen")})},2500),setTimeout(()=>{i2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{C2.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),H0("andgo"),h1()},6500)}};Bi.registerPlugin(q);var yn="src/components/images/falling1.png",y1="src/components/images/falling2.png",bn="src/components/images/falling5.png",Us="src/components/images/falling4.png",b1="src/components/images/falling6.png",E2="src/components/images/panic1.png",x1="src/components/images/panic4.png",L2="src/components/images/panic3.png",yu=document.getElementById("image");var M2=[yn,y1,yn,b1,bn,Us,bn,Us,yn,bn,Us,bn,b1,yn,y1],B2=[E2,x1,L2,x1];function I2(){}var bu=document.getElementById("brianSecondPage"),xu=document.getElementById("brianSecondPageBox"),ku=document.getElementById("switchFree"),Tu=document.getElementById("switchPort"),Su=document.getElementById("freelancePresenter"),Cu=document.getElementById("backCloud"),Eu=document.querySelector(".switchwrap"),P2=document.querySelector(".homeWrap"),z2=document.querySelectorAll("#target"),Lu=document.getElementById("launch"),Mu=document.getElementById("clear"),A2=!1,O2=document.getElementById("top-target"),D2=document.getElementById("hi"),R2=document.getElementById("hiBox"),F2=document.getElementById("iam"),N2=document.getElementById("iamBox"),q2=document.getElementById("brianBox"),H2=document.getElementById("strout"),V2=document.getElementById("stroutBox"),Y2=document.getElementById("title"),X2=document.getElementById("titleBox"),W2=document.querySelectorAll(".first-letters"),G2=document.getElementById("first-n"),k1=document.getElementById("fallingShell"),U2=document.getElementById("wrapper"),j2=document.getElementById("moodring"),$2=document.querySelectorAll(".cloudsForward"),J2=document.querySelectorAll(".cloudsBackwards"),T1=[...$2],S1=[...J2],Bu=document.getElementById("remainder"),Iu=document.getElementById("c1"),Pu=document.getElementById("c2"),zu=document.getElementById("c3"),Au=document.getElementById("c4"),Ou=document.getElementById("c5"),Du=document.getElementById("c6"),Ru=document.getElementById("c7"),Fu=document.getElementById("c8"),Nu=document.getElementById("c9"),qu=document.getElementById("c10"),Hu=document.getElementById("c11"),K2=document.getElementById("sun"),Q2=document.getElementById("moon"),Vu=document.getElementById("target"),Yu=document.getElementById("switchPort"),Xu=document.getElementById("brianSecondChair"),Wu=document.getElementById("brianBlurbP"),Gu=document.getElementById("listOfSkills"),Z2=document.querySelectorAll(".shrunk"),Uu=[...Z2],ju=document.getElementById("listed_skills_media"),ed=document.getElementsByTagName("li"),$u=[...ed],Ju=document.getElementById("absolute-cloud"),Ku=document.getElementById("copy-gmail"),Qu=document.getElementById("brianlinkedin"),Zu=document.getElementById("briangithub"),e5=document.getElementById("resume-link"),t5=document.querySelectorAll("iframe"),i5=document.getElementById("fallingSecond"),r5=document.getElementById("castle"),td=document.querySelectorAll("#introToServices"),id=Array.from(document.querySelectorAll(".nav--link")),C1=()=>{console.log("in development, skipping animation"),z2.forEach(n=>{pn.observe(n)}),td.forEach(n=>{mn.observe(n)}),_n,setInterval(I2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),j2.addEventListener("click",()=>{U2.classList.toggle("dark"),K2.classList.toggle("sunset"),Q2.classList.toggle("sunset")});let t=()=>{T1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),S1.forEach(n=>{n.classList.add("clouds-movement-background")})},i=()=>{k1.classList.add("falling"),setTimeout(()=>{A2=!0},0)};window.addEventListener("load",()=>{O2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{D2.classList.remove("translatedHi"),F2.classList.remove("translatedIam"),[...W2].forEach(s=>{s.classList.add("first-name-falling-in")}),H2.classList.remove("translatedStrout"),Y2.classList.remove("translatedTitle"),setTimeout(()=>{t()},0),setTimeout(()=>{i()},0)},0),setTimeout(()=>{r()},0)}),G2.addEventListener("transitionend",function(){});let r=()=>{R2.classList.add("up-and-out"),N2.classList.add("up-and-out"),q2.classList.add("up-and-out"),V2.classList.add("up-and-out"),X2.classList.add("up-and-out"),setTimeout(()=>{M2=B2},0),setTimeout(()=>{a.style.overflow="visible",k1.classList.add("down-and-out"),T1.forEach(n=>{n.classList.add("unseen")}),S1.forEach(n=>{n.classList.add("unseen")})},0),setTimeout(()=>{P2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{id.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),u1("intro")},0)}};var a0=document.getElementById("deckOfMarketingCards"),s5=a0.querySelectorAll(".marketing__mobileCard"),js=0,wr=!1,mi=null;function E1(a){if(console.log("moving"),!wr||!mi)return;let i=a.touches[0].clientX-js;mi.style.transform=`translateX(${i}px) rotate(${i/20}deg)`}function L1(a){console.log("touch start sensed"),!wr&&(mi=a0.firstElementChild,js=a.touches[0].clientX,wr=!0)}function M1(a){if(console.log("touch end sensed"),!wr||!mi)return;let i=a.changedTouches[0].clientX-js,r=window.innerWidth*.3;if(Math.abs(i)>r){let n=i>0?1:-1;mi.style.transition="transform 0.3s ease-out",mi.style.transform=`translateX(${n*100}vw) rotate(${n*20}deg)`,setTimeout(()=>{rd(mi)},300)}else mi.style.transition="transform 0.2s ease-out",mi.style.transform="translateX(0) rotate(0)";wr=!1}function rd(a){a.style.transition="none",a.style.transform="translateX(0) rotate(0)",a0.appendChild(a)}Bi.registerPlugin(q);var nd=!1;nd?C1():w1();function B1(){return window.innerWidth<=768}var m5=B1();B1&&(console.log("index has registered mobile we be launching listeners"),a0.addEventListener("touchstart",L1),a0.addEventListener("touchmove",E1),a0.addEventListener("touchend",M1));document.addEventListener("click",(a,t)=>{H0(a),console.log("click")});var p5=document.getElementById("portgithub"),_5=document.getElementById("mashagithub"),v5=document.getElementById("mashanetlify"),w5=document.getElementById("fugagithub"),y5=document.getElementById("fuganetlify");wrapper.addEventListener("click",a=>{if(!(a.target.nodeName==="BUTTON"))return;switch(a.target.id){case"portgithub":l0("github.com/BrianStrout/Portfolio");break;case"mashagithub":l0("github.com/BrianStrout/masha");break;case"mashanetlify":l0("mashaoflisbon.netlify.app/");break;case"fugagithub":l0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":l0("lafugitiva.netlify.app/");break;case"rotaryyoutube":l0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":l0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var l0=a=>{window.open(`https://${a}`,"_blank")};var sd=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){sd=!0}}))}catch{}var b5="onwheel"in document.createElement("div")?"wheel":"mousewheel";var od=document.querySelectorAll(".fademe");od.forEach(a=>{Ks.observe(a)});ro({elementId:"websiteGridPresentation",onProgress:a=>{}});var ad=Bi.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});ad.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
