(()=>{function $s(a,t,r,i,n){let s,o;if(a==="id")s=document.getElementById(`${t}`);else if(a==="class")o=Array.from(document.querySelectorAll(`.${t}`)),o.forEach(l=>{l.classList[r](`${i}`)});else{console.log("selector error");return}}var M1={threshold:.4},Js=new IntersectionObserver((a,t)=>{a.forEach(r=>{if(r.isIntersecting)r.isIntersecting&&r.target.classList.remove("fadeup");else return})},M1);var F0=document.querySelector(".canvas"),Ks=!0,Qs={frame:0},Zs=F0.getContext("2d"),B1=80,eo=[],I1=a=>`/src/components/images/animation/${a}.png`,P1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let a=0;a<B1;a++){let t=new Image;t.src=I1(a),eo.push(t)}},z1=a=>{Zs.clearRect(0,0,F0.width,F0.height),Zs.drawImage(eo[a],0,0,F0.width,F0.height)};function A1(a,t){let r=a,i=a,n=2e3,s=t-a,o=performance.now();function l(){let c=performance.now()-o,d=Math.min(c/n,1);d=1-Math.pow(1-d,3),r=Math.round(a+d*s),r!==i&&(i=r,z1(i)),d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}var yt=a=>{console.log("updateAnimationFrame",a),Ks&&(P1(),Ks=!1),typeof a=="number"&&(A1(Qs.frame,a),Qs.frame=a)};var to=null;var O1=a=>{let t=Math.floor(a*100/25)*25;if(console.log(t,"new map"),a<.025?yt(0):a>.025&&a<.24?yt(19):a>.24&&a<.49?yt(39):a>.5&&a<.75?yt(59):a>.75&&yt(79),t===to||t===100)return;to=t,console.log(t,"is map adjuster");let r=document.querySelector(".web__grid--right");if(!r){console.warn("Element '.web__grid--right' not found.");return}r.style.transform=`translateX(-${t}%)`,console.log(r.style)};function io({elementId:a="websiteGridPresentation",parentID:t="sc__websites",onProgress:r=o=>{},scrollOffsetVh:i=10,enterThreshold:n=[.6,.98],stillnessDelay:s=1500}={}){console.log("Website scroll tracking initialized.");let o=document.getElementById(a),l=document.getElementById(t);if(!o||!l){console.warn(`Required element(s) not found: ${o?t:a}`);return}l.addEventListener("scroll",()=>{c()});function c(){let d=l.scrollTop,u=o.offsetTop,g=o.offsetHeight,m=l.clientHeight,h=d-u,p=g-m,v=Math.max(0,Math.min(h,p))/p;console.log(v),r(v),O1(v)}}var ro=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var no=a=>{console.log("we are live in submitter about to to predef");let t=document.getElementById("contactForm"),r="service_9l2h8gg",i="template_36awvk9",n=document.getElementById("formMessage").value;emailjs.sendForm(r,i,t,"oYymItkIoREaVvBlM").then(s=>{console.log("SUCCESS!",s.status,s.text)}).catch(s=>{console.error(s.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${n}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),ro()};var _d=document.getElementById("contactForm"),vd=document.getElementById("formName"),wd=document.getElementById("formEmail"),yd=document.getElementById("formMessage"),xn=!1,kn=!1,Tn=!1,h0;function Sn(){console.log("GOIGM FOR ALL"),xn&&kn&&Tn?(console.log("all fields pass!"),no()):(console.log("field failure"),console.log(xn,kn,Tn))}function D1(a){return h0=/^[a-z a-z]+$/gi,h0.test(a)?(console.log("name pass"),xn=!0,Sn(),!0):(console.log("fail name"),!1)}function R1(a){return h0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,h0.test(a)?(console.log("email pass"),kn=!0,Sn(),!0):(console.log("not a valid email"),!1)}function F1(a){return h0=/.{8}/,h0.test(a)?(console.log("message pass"),Tn=!0,Sn(),!0):(console.log("fail"),!1)}var xr=()=>{console.log("validating?"),D1(document.getElementById("formName").value),R1(document.getElementById("formEmail").value),F1(document.getElementById("formMessage").value)};var Ut=[{header:"Presence Auditing",description:'<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Presence Auditing</div><div class="description"><p>Determining and reviewing where you are is a great first step in growing your online presences<br /><br /> we can get started by:</p> <ul><li class="fadeRight"> Branding consistency review</li><li class="fadeRight sec">SEO & UX audit</li><li class="fadeRight thi">Competitor analysis</li></ul></div></div></div></div>',slug:"auditicon",image:"src/components/images/marketingicons/assess.png"},{header:"Strategy",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Strategy</div><div class="description"><p>   Need to figure out the most efficient way to
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
                                  </ul></div></div></div></div>`,slug:"straticon",image:"src/components/images/marketingicons/strategy.png"},{header:"Optimization",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Optimizing</div><div class="description">  <p>
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
                                  </ul></div></div></div></div>`,slug:"optiicon",image:"src/components/images/marketingicons/optimize.png"},{header:"Topic Authority",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Authority Building</div><div class="description"> <p>
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
                                  </ul>  </p></div></div></div></div>`,slug:"authicon",image:"src/components/images/marketingicons/authorize.png"},{header:"Implementation",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Implement & Action</div><div class="description"> <p>Got a plan ready to go and just need extra hands <br /><br /> We can also handle...</p>
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
                                  </div></div></div></div>`,slug:"implicon",image:"src/components/images/marketingicons/implement.png"}];var N1=document.getElementById("msParagraph"),so=document.querySelector(".ms__icons"),bt=0;var Cn;function q1(){return window.innerWidth<=768}q1()?console.log("User is on a mobile device"):console.log("User is on a desktop");var H1=a=>{so.querySelector(".risen")&&(Cn=so.querySelector(".risen"),console.log(Cn,"should be risen var"),Cn.classList.remove("risen")),document.querySelector(`#${a}`).classList.add("risen")},V1=document.getElementById("msArrowLeft"),kr=4,Y1=document.getElementById("msArrowRight"),Tr=2,X1=a=>{console.log("in arrow"),console.log(a),kr=a-1,a===0&&(kr=4),Tr=a+1,a===4&&(Tr=0),bt<0&&(bt=Ut.length-1),console.log(kr,Tr),V1.style.backgroundImage=`url(/${Ut[kr].image})`,Y1.style.backgroundImage=`url(/${Ut[Tr].image})`},oo=a=>{a==="left"&&(bt--,bt<0&&(bt=Ut.length-1)),a==="right"&&(bt++,bt===Ut.length&&(bt=0)),N1.innerHTML=Ut[bt].description,console.log("suite?",document.querySelector(".suite")),console.log(Ut[bt].image),document.querySelector(".suite").style=`background-image: url(" ${Ut[bt].image}")`,H1(Ut[bt].slug),X1(bt)},ao=a=>{console.log("marketing controller live",a),a.classList.contains("arrowLeft")&&(console.log("Left!"),oo("left")),a.classList.contains("arrowRight")&&(console.log("Right!"),oo("right"))};var H=document.querySelector("#sc__hello");var N0=!1,xi=()=>{if(window.innerWidth<=768){N0=!N0,console.log(N0),N0?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):N0||(document.getElementById("mobileBack").innerHTML="");return}},q0=a=>{if(console.log("new"),a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(a==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(t=>{t.tagName&&t.tagName==="DIV"&&t.classList.add("hit")});return}if(a.target.classList.contains("arrow")&&ao(a.target),a.target.classList.contains("nav--link")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let t=document.querySelectorAll(".hit");t.length>0&&t.forEach(r=>{r.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(r=>{r.classList.add("blur"),r.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(r=>{r.classList.contains("fadeup")||r.classList.add("fadeup")})}switch(a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"submit":console.log("submitting in the new controller"),a.preventDefault(),xr();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"m--marketing":H=document.querySelector("#sc__marketing"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"m--web":H=document.querySelector("#sc__websites"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"m--video":H=document.querySelector("#sc__video"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"m--nerd":H=document.querySelector("#sc__nerd"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")});let r=[...document.getElementsByTagName("li")],i=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{r.forEach(n=>{n.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"m--reference":H=document.querySelector("#sc__reference"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break;case"cta":q0("m--contact");break;case"m--contact":H=document.querySelector("#sc__contact"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),xi();break}a.target.classList.contains("marketing__mobileCard")&&console.log("should pull up swiper??")};function oi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function po(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},g0={duration:.5,overwrite:!1,delay:0},Wn,Ne,ce,It=1e8,ne=1/It,An=Math.PI*2,W1=An/4,G1=0,_o=Math.sqrt,U1=Math.cos,j1=Math.sin,Me=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},li=function(t){return typeof t=="number"},Ar=function(t){return typeof t>"u"},Jt=function(t){return typeof t=="object"},gt=function(t){return t!==!1},Gn=function(){return typeof window<"u"},Sr=function(t){return me(t)||Me(t)},vo=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,On=/(?:-?\.?\d|\.)+/gi,Un=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ln=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,jn=/[+-]=-?[.\d]+/,wo=/[^,'"\[\]\s]+/gi,$1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,jt,Dn,$n,kt={},Mr={},yo,bo=function(t){return(Mr=m0(t,kt))&&Ue},Or=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},G0=function(t,r){return!r&&console.warn(t)},xo=function(t,r){return t&&(kt[t]=r)&&Mr&&(Mr[t]=r)||kt},U0=function(){return 0},J1={suppressEvents:!0,isStart:!0,kill:!1},Cr={suppressEvents:!0,kill:!1},K1={suppressEvents:!0},Jn={},Ti=[],Rn={},ko,ht={},En={},lo=30,Lr=[],Kn="",Qn=function(t){var r=t[0],i,n;if(Jt(r)||me(r)||(t=[t]),!(i=(r._gsap||{}).harness)){for(n=Lr.length;n--&&!Lr[n].targetTest(r););i=Lr[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new ts(t[n],i)))||t.splice(n,1);return t},Si=function(t){return t._gsap||Qn(Pt(t))[0]._gsap},Zn=function(t,r,i){return(i=t[r])&&me(i)?t[r]():Ar(i)&&t.getAttribute&&t.getAttribute(r)||i},it=function(t,r){return(t=t.split(",")).forEach(r)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wi=function(t,r){var i=r.charAt(0),n=parseFloat(r.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Q1=function(t,r){for(var i=r.length,n=0;t.indexOf(r[n])<0&&++n<i;);return n<i},Br=function(){var t=Ti.length,r=Ti.slice(0),i,n;for(Rn={},Ti.length=0,i=0;i<t;i++)n=r[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},To=function(t,r,i,n){Ti.length&&!Ne&&Br(),t.render(r,i,n||Ne&&r<0&&(t._initted||t._startAt)),Ti.length&&!Ne&&Br()},So=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(wo).length<2?r:Me(t)?t.trim():t},Co=function(t){return t},Tt=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},Z1=function(t){return function(r,i){for(var n in i)n in r||n==="duration"&&t||n==="ease"||(r[n]=i[n])}},m0=function(t,r){for(var i in r)t[i]=r[i];return t},co=function a(t,r){for(var i in r)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Jt(r[i])?a(t[i]||(t[i]={}),r[i]):r[i]);return t},Ir=function(t,r){var i={},n;for(n in t)n in r||(i[n]=t[n]);return i},Y0=function(t){var r=t.parent||ue,i=t.keyframes?Z1(Ge(t.keyframes)):Tt;if(gt(t.inherit))for(;r;)i(t,r.vars.defaults),r=r.parent||r._dp;return t},el=function(t,r){for(var i=t.length,n=i===r.length;n&&i--&&t[i]===r[i];);return i<0},Lo=function(t,r,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],l;if(s)for(l=r[s];o&&o[s]>l;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=t[i],t[i]=r),r._next?r._next._prev=r:t[n]=r,r._prev=o,r.parent=r._dp=t,r},Dr=function(t,r,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=r._prev,o=r._next;s?s._next=o:t[i]===r&&(t[i]=o),o?o._prev=s:t[n]===r&&(t[n]=s),r._next=r._prev=r.parent=null},Ci=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},tl=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},Fn=function(t,r,i,n){return t._startAt&&(Ne?t._startAt.revert(Cr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,n))},il=function a(t){return!t||t._ts&&a(t.parent)},uo=function(t){return t._repeat?p0(t._tTime,t=t.duration()+t._rDelay)*t:0},p0=function(t,r){var i=Math.floor(t=Se(t/r));return t&&i===t?i-1:i},Pr=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Rr=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Fr=function(t,r){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Se(i._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),Rr(t),i._dirty||Hi(i,t)),t},Eo=function(t,r){var i;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(i=Pr(t.rawTime(),r),(!r._dur||J0(0,r.totalDuration(),i)-r._tTime>ne)&&r.render(i,!0)),Hi(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ne}},$t=function(t,r,i,n){return r.parent&&Ci(r),r._start=Se((li(i)?i:i||t!==ue?Bt(t,i,r):t._time)+r._delay),r._end=Se(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Lo(t,r,"_first","_last",t._sort?"_start":0),Nn(r)||(t._recent=r),n||Eo(t,r),t._ts<0&&Fr(t,t._tTime),t},Mo=function(t,r){return(kt.ScrollTrigger||Or("scrollTrigger",r))&&kt.ScrollTrigger.create(r,t)},Bo=function(t,r,i,n,s){if(ns(t,r,s),!t._initted)return 1;if(!i&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ko!==ft.frame)return Ti.push(t),t._lazy=[s,n],1},rl=function a(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||a(r))},Nn=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},nl=function(t,r,i,n){var s=t.ratio,o=r<0||!r&&(!t._start&&rl(t)&&!(!t._initted&&Nn(t))||(t._ts<0||t._dp._ts<0)&&!Nn(t))?0:1,l=t._rDelay,c=0,d,u,g;if(l&&t._repeat&&(c=J0(0,t._tDur,r),u=p0(c,l),t._yoyo&&u&1&&(o=1-o),u!==p0(t._tTime,l)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ne||n||t._zTime===ne||!r&&t._zTime){if(!t._initted&&Bo(t,r,n,i,c))return;for(g=t._zTime,t._zTime=r||(i?ne:0),i||(i=r&&!g),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,d=t._pt;d;)d.r(o,d.d),d=d._next;r<0&&Fn(t,r,i,!0),t._onUpdate&&!i&&xt(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&xt(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===o&&(o&&Ci(t,1),!i&&!Ne&&(xt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},sl=function(t,r,i){var n;if(i>r)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},_0=function(t,r,i,n){var s=t._repeat,o=Se(r)||0,l=t._tTime/t._tDur;return l&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Se(o*(s+1)+t._rDelay*s):o,l>0&&!n&&Fr(t,t._tTime=t._tDur*l),t.parent&&Rr(t),i||Hi(t.parent,t),t},ho=function(t){return t instanceof Fe?Hi(t):_0(t,t._dur)},ol={_start:0,endTime:U0,totalDuration:U0},Bt=function a(t,r,i){var n=t.labels,s=t._recent||ol,o=t.duration()>=It?s.endTime(!1):t._dur,l,c,d;return Me(r)&&(isNaN(r)||r in n)?(c=r.charAt(0),d=r.substr(-1)==="%",l=r.indexOf("="),c==="<"||c===">"?(l>=0&&(r=r.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(r.substr(1))||0)*(d?(l<0?s:i).totalDuration()/100:1)):l<0?(r in n||(n[r]=o),n[r]):(c=parseFloat(r.charAt(l-1)+r.substr(l+1)),d&&i&&(c=c/100*(Ge(i)?i[0]:i).totalDuration()),l>1?a(t,r.substr(0,l-1),i)+c:o+c)):r==null?o:+r},X0=function(t,r,i){var n=li(r[1]),s=(n?2:1)+(t<2?0:1),o=r[s],l,c;if(n&&(o.duration=r[1]),o.parent=i,t){for(l=o,c=i;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=gt(c.vars.inherit)&&c.parent;o.immediateRender=gt(l.immediateRender),t<2?o.runBackwards=1:o.startAt=r[s-1]}return new xe(r[0],o,r[s+1])},Li=function(t,r){return t||t===0?r(t):r},J0=function(t,r,i){return i<t?t:i>r?r:i},qe=function(t,r){return!Me(t)||!(r=$1.exec(t))?"":r[1]},al=function(t,r,i){return Li(i,function(n){return J0(t,r,n)})},qn=[].slice,Io=function(t,r){return t&&Jt(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&Jt(t[0]))&&!t.nodeType&&t!==jt},ll=function(t,r,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return Me(n)&&!r||Io(n,1)?(s=i).push.apply(s,Pt(n)):i.push(n)})||i},Pt=function(t,r,i){return ce&&!r&&ce.selector?ce.selector(t):Me(t)&&!i&&(Dn||!v0())?qn.call((r||$n).querySelectorAll(t),0):Ge(t)?ll(t,i):Io(t)?qn.call(t,0):t?[t]:[]},Hn=function(t){return t=Pt(t)[0]||G0("Invalid scope")||{},function(r){var i=t.current||t.nativeElement||t;return Pt(r,i.querySelectorAll?i:i===t?G0("Invalid scope")||$n.createElement("div"):t)}},Po=function(t){return t.sort(function(){return .5-Math.random()})},zo=function(t){if(me(t))return t;var r=Jt(t)?t:{each:t},i=Vi(r.ease),n=r.from||0,s=parseFloat(r.base)||0,o={},l=n>0&&n<1,c=isNaN(n)||l,d=r.axis,u=n,g=n;return Me(n)?u=g={center:.5,edges:.5,end:1}[n]||0:!l&&c&&(u=n[0],g=n[1]),function(m,h,p){var f=(p||r).length,v=o[f],k,x,S,y,T,L,b,M,C;if(!v){if(C=r.grid==="auto"?0:(r.grid||[1,It])[1],!C){for(b=-It;b<(b=p[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(v=o[f]=[],k=c?Math.min(C,f)*u-.5:n%C,x=C===It?0:c?f*g/C-.5:n/C|0,b=0,M=It,L=0;L<f;L++)S=L%C-k,y=x-(L/C|0),v[L]=T=d?Math.abs(d==="y"?y:S):_o(S*S+y*y),T>b&&(b=T),T<M&&(M=T);n==="random"&&Po(v),v.max=b-M,v.min=M,v.v=f=(parseFloat(r.amount)||parseFloat(r.each)*(C>f?f-1:d?d==="y"?f/C:C:Math.max(C,f/C))||0)*(n==="edges"?-1:1),v.b=f<0?s-f:s,v.u=qe(r.amount||r.each)||0,i=i&&f<0?Vo(i):i}return f=(v[m]-v.min)/v.max||0,Se(v.b+(i?i(f):f)*v.v)+v.u}},Vn=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Se(Math.round(parseFloat(i)/t)*t*r);return(n-n%1)/r+(li(i)?0:qe(i))}},Ao=function(t,r){var i=Ge(t),n,s;return!i&&Jt(t)&&(n=i=t.radius||It,t.values?(t=Pt(t.values),(s=!li(t[0]))&&(n*=n)):t=Vn(t.increment)),Li(r,i?me(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var l=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),d=It,u=0,g=t.length,m,h;g--;)s?(m=t[g].x-l,h=t[g].y-c,m=m*m+h*h):m=Math.abs(t[g]-l),m<d&&(d=m,u=g);return u=!n||d<=n?t[u]:o,s||u===o||li(o)?u:u+qe(o)}:Vn(t))},Oo=function(t,r,i,n){return Li(Ge(t)?!r:i===!0?!!(i=0):!n,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(r-t+i*.99))/i)*i*n)/n})},cl=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(n){return r.reduce(function(s,o){return o(s)},n)}},dl=function(t,r){return function(i){return t(parseFloat(i))+(r||qe(i))}},ul=function(t,r,i){return Ro(t,r,0,1,i)},Do=function(t,r,i){return Li(i,function(n){return t[~~r(n)]})},hl=function a(t,r,i){var n=r-t;return Ge(t)?Do(t,a(0,t.length),r):Li(i,function(s){return(n+(s-t)%n)%n+t})},fl=function a(t,r,i){var n=r-t,s=n*2;return Ge(t)?Do(t,a(0,t.length-1),r):Li(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},w0=function(t){for(var r=0,i="",n,s,o,l;~(n=t.indexOf("random(",r));)o=t.indexOf(")",n),l=t.charAt(n+7)==="[",s=t.substr(n+7,o-n-7).match(l?wo:On),i+=t.substr(r,n-r)+Oo(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),r=o+1;return i+t.substr(r,t.length-r)},Ro=function(t,r,i,n,s){var o=r-t,l=n-i;return Li(s,function(c){return i+((c-t)/o*l||0)})},gl=function a(t,r,i,n){var s=isNaN(t+r)?0:function(h){return(1-h)*t+h*r};if(!s){var o=Me(t),l={},c,d,u,g,m;if(i===!0&&(n=1)&&(i=null),o)t={p:t},r={p:r};else if(Ge(t)&&!Ge(r)){for(u=[],g=t.length,m=g-2,d=1;d<g;d++)u.push(a(t[d-1],t[d]));g--,s=function(p){p*=g;var f=Math.min(m,~~p);return u[f](p-f)},i=r}else n||(t=m0(Ge(t)?[]:{},t));if(!u){for(c in r)is.call(l,t,c,"get",r[c]);s=function(p){return as(p,l)||(o?t.p:t)}}}return Li(i,s)},fo=function(t,r,i){var n=t.labels,s=It,o,l,c;for(o in n)l=n[o]-r,l<0==!!i&&l&&s>(l=Math.abs(l))&&(c=o,s=l);return c},xt=function(t,r,i){var n=t.vars,s=n[r],o=ce,l=t._ctx,c,d,u;if(s)return c=n[r+"Params"],d=n.callbackScope||t,i&&Ti.length&&Br(),l&&(ce=l),u=c?s.apply(d,c):s.call(d),ce=o,u},H0=function(t){return Ci(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&xt(t,"onInterrupt"),t},f0,Fo=[],No=function(t){if(t)if(t=!t.name&&t.default||t,Gn()||t.headless){var r=t.name,i=me(t),n=r&&!i&&t.init?function(){this._props=[]}:t,s={init:U0,render:as,add:is,kill:Bl,modifier:Ml,rawVars:0},o={targetTest:0,get:0,getSetter:Nr,aliases:{},register:0};if(v0(),t!==n){if(ht[r])return;Tt(n,Tt(Ir(t,s),o)),m0(n.prototype,m0(s,Ir(t,o))),ht[n.prop=r]=n,t.targetTest&&(Lr.push(n),Jn[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}xo(r,n),t.register&&t.register(Ue,n,rt)}else Fo.push(t)},re=255,V0={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Mn=function(t,r,i){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(i-r)*t*6:t<.5?i:t*3<2?r+(i-r)*(2/3-t)*6:r)*re+.5|0},qo=function(t,r,i){var n=t?li(t)?[t>>16,t>>8&re,t&re]:0:V0.black,s,o,l,c,d,u,g,m,h,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),V0[t])n=V0[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),l=t.charAt(3),t="#"+s+s+o+o+l+l+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&re,n&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(On),!r)c=+n[0]%360/360,d=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(d+1):u+d-u*d,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=Mn(c+1/3,s,o),n[1]=Mn(c,s,o),n[2]=Mn(c-1/3,s,o);else if(~t.indexOf("="))return n=t.match(Un),i&&n.length<4&&(n[3]=1),n}else n=t.match(On)||V0.transparent;n=n.map(Number)}return r&&!p&&(s=n[0]/re,o=n[1]/re,l=n[2]/re,g=Math.max(s,o,l),m=Math.min(s,o,l),u=(g+m)/2,g===m?c=d=0:(h=g-m,d=u>.5?h/(2-g-m):h/(g+m),c=g===s?(o-l)/h+(o<l?6:0):g===o?(l-s)/h+2:(s-o)/h+4,c*=60),n[0]=~~(c+.5),n[1]=~~(d*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Ho=function(t){var r=[],i=[],n=-1;return t.split(ai).forEach(function(s){var o=s.match(Xi)||[];r.push.apply(r,o),i.push(n+=o.length+1)}),r.c=i,r},go=function(t,r,i){var n="",s=(t+n).match(ai),o=r?"hsla(":"rgba(",l=0,c,d,u,g;if(!s)return t;if(s=s.map(function(m){return(m=qo(m,r,1))&&o+(r?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),i&&(u=Ho(t),c=i.c,c.join(n)!==u.c.join(n)))for(d=t.replace(ai,"1").split(Xi),g=d.length-1;l<g;l++)n+=d[l]+(~c.indexOf(l)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!d)for(d=t.split(ai),g=d.length-1;l<g;l++)n+=d[l]+s[l];return n+d[g]},ai=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in V0)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),ml=/hsl[a]?\(/,es=function(t){var r=t.join(" "),i;if(ai.lastIndex=0,ai.test(r))return i=ml.test(r),t[1]=go(t[1],i),t[0]=go(t[0],i,Ho(t[1])),!0},j0,ft=function(){var a=Date.now,t=500,r=33,i=a(),n=i,s=1e3/240,o=s,l=[],c,d,u,g,m,h,p=function f(v){var k=a()-n,x=v===!0,S,y,T,L;if((k>t||k<0)&&(i+=k-r),n+=k,T=n-i,S=T-o,(S>0||x)&&(L=++g.frame,m=T-g.time*1e3,g.time=T=T/1e3,o+=S+(S>=s?4:s-S),y=1),x||(c=d(f)),y)for(h=0;h<l.length;h++)l[h](T,m,L,v)};return g={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(v){return m/(1e3/(v||60))},wake:function(){yo&&(!Dn&&Gn()&&(jt=Dn=window,$n=jt.document||{},kt.gsap=Ue,(jt.gsapVersions||(jt.gsapVersions=[])).push(Ue.version),bo(Mr||jt.GreenSockGlobals||!jt.gsap&&jt||{}),Fo.forEach(No)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&g.sleep(),d=u||function(v){return setTimeout(v,o-g.time*1e3+1|0)},j0=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),j0=0,d=U0},lagSmoothing:function(v,k){t=v||1/0,r=Math.min(k||33,t)},fps:function(v){s=1e3/(v||240),o=g.time*1e3+s},add:function(v,k,x){var S=k?function(y,T,L,b){v(y,T,L,b),g.remove(S)}:v;return g.remove(v),l[x?"unshift":"push"](S),v0(),S},remove:function(v,k){~(k=l.indexOf(v))&&l.splice(k,1)&&h>=k&&h--},_listeners:l},g}(),v0=function(){return!j0&&ft.wake()},J={},pl=/^[\d.\-M][\d.\-,\s]/,_l=/["']/g,vl=function(t){for(var r={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,l,c,d;s<o;s++)c=i[s],l=s!==o-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),r[n]=isNaN(d)?d.replace(_l,"").trim():+d,n=c.substr(l+1).trim();return r},wl=function(t){var r=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",r);return t.substring(r,~n&&n<i?t.indexOf(")",i+1):i)},yl=function(t){var r=(t+"").split("("),i=J[r[0]];return i&&r.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[vl(r[1])]:wl(t).split(",").map(So)):J._CE&&pl.test(t)?J._CE("",t):i},Vo=function(t){return function(r){return 1-t(1-r)}},Yo=function a(t,r){for(var i=t._first,n;i;)i instanceof Fe?a(i,r):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==r&&(i.timeline?a(i.timeline,r):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=r)),i=i._next},Vi=function(t,r){return t&&(me(t)?t:J[t]||yl(t))||r},Gi=function(t,r,i,n){i===void 0&&(i=function(c){return 1-r(1-c)}),n===void 0&&(n=function(c){return c<.5?r(c*2)/2:1-r((1-c)*2)/2});var s={easeIn:r,easeOut:i,easeInOut:n},o;return it(t,function(l){J[l]=kt[l]=s,J[o=l.toLowerCase()]=i;for(var c in s)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[l+"."+c]=s[c]}),s},Xo=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},Bn=function a(t,r,i){var n=r>=1?r:1,s=(i||(t?.3:.45))/(r<1?r:1),o=s/An*(Math.asin(1/n)||0),l=function(u){return u===1?1:n*Math.pow(2,-10*u)*j1((u-o)*s)+1},c=t==="out"?l:t==="in"?function(d){return 1-l(1-d)}:Xo(l);return s=An/s,c.config=function(d,u){return a(t,d,u)},c},In=function a(t,r){r===void 0&&(r=1.70158);var i=function(o){return o?--o*o*((r+1)*o+r)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Xo(i);return n.config=function(s){return a(t,s)},n};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var r=t<5?t+1:t;Gi(a+",Power"+(r-1),t?function(i){return Math.pow(i,r)}:function(i){return i},function(i){return 1-Math.pow(1-i,r)},function(i){return i<.5?Math.pow(i*2,r)/2:1-Math.pow((1-i)*2,r)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Gi("Elastic",Bn("in"),Bn("out"),Bn());(function(a,t){var r=1/t,i=2*r,n=2.5*r,s=function(l){return l<r?a*l*l:l<i?a*Math.pow(l-1.5/t,2)+.75:l<n?a*(l-=2.25/t)*l+.9375:a*Math.pow(l-2.625/t,2)+.984375};Gi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Gi("Circ",function(a){return-(_o(1-a*a)-1)});Gi("Sine",function(a){return a===1?1:-U1(a*W1)+1});Gi("Back",In("in"),In("out"),In());J.SteppedEase=J.steps=kt.SteppedEase={config:function(t,r){t===void 0&&(t=1);var i=1/t,n=t+(r?0:1),s=r?1:0,o=1-ne;return function(l){return((n*J0(0,o,l)|0)+s)*i}}};g0.ease=J["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Kn+=a+","+a+"Params,"});var ts=function(t,r){this.id=G1++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:Zn,this.set=r?r.getSetter:Nr},$0=function(){function a(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,_0(this,+r.duration,1,1),this.data=r.data,ce&&(this._ctx=ce,ce.data.push(this)),j0||ft.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,_0(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(v0(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fr(this,i),!s._dp||s.parent||Eo(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$t(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ne||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),To(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+uo(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+uo(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?p0(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Pr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ne?0:this._rts,this.totalTime(J0(-Math.abs(this._delay),this._tDur,s),n!==!1),Rr(this),tl(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(v0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&$t(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(gt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pr(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=K1);var n=Ne;return Ne=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ne=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ho(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ho(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Bt(this,i),gt(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,gt(n)),this._dur||(this._zTime=-ne),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ne)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(s){var o=me(i)?i:Co,l=function(){var d=n.then;n.then=null,me(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=d),s(o),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){H0(this)},a}();Tt($0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Fe=function(a){po(t,a);function t(i,n){var s;return i===void 0&&(i={}),s=a.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=gt(i.sortChildren),ue&&$t(i.parent||ue,oi(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Mo(oi(s),i.scrollTrigger),s}var r=t.prototype;return r.to=function(n,s,o){return X0(0,arguments,this),this},r.from=function(n,s,o){return X0(1,arguments,this),this},r.fromTo=function(n,s,o,l){return X0(2,arguments,this),this},r.set=function(n,s,o){return s.duration=0,s.parent=this,Y0(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(n,s,Bt(this,o),1),this},r.call=function(n,s,o){return $t(this,xe.delayedCall(0,n,s),o)},r.staggerTo=function(n,s,o,l,c,d,u){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=d,o.onCompleteParams=u,o.parent=this,new xe(n,o,Bt(this,c)),this},r.staggerFrom=function(n,s,o,l,c,d,u){return o.runBackwards=1,Y0(o).immediateRender=gt(o.immediateRender),this.staggerTo(n,s,o,l,c,d,u)},r.staggerFromTo=function(n,s,o,l,c,d,u,g){return l.startAt=o,Y0(l).immediateRender=gt(l.immediateRender),this.staggerTo(n,s,l,c,d,u,g)},r.render=function(n,s,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=n<=0?0:Se(n),g=this._zTime<0!=n<0&&(this._initted||!d),m,h,p,f,v,k,x,S,y,T,L,b;if(this!==ue&&u>c&&n>=0&&(u=c),u!==this._tTime||o||g){if(l!==this._time&&d&&(u+=this._time-l,n+=this._time-l),m=u,y=this._start,S=this._ts,k=!S,g&&(d||(l=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(L=this._yoyo,v=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,o);if(m=Se(u%v),u===c?(f=this._repeat,m=d):(T=Se(u/v),f=~~T,f&&f===T&&(m=d,f--),m>d&&(m=d)),T=p0(this._tTime,v),!l&&this._tTime&&T!==f&&this._tTime-T*v-this._dur<=0&&(T=f),L&&f&1&&(m=d-m,b=1),f!==T&&!this._lock){var M=L&&T&1,C=M===(L&&f&1);if(f<T&&(M=!M),l=M?0:u%d?d:u,this._lock=1,this.render(l||(b?0:Se(f*v)),s,!d)._lock=0,this._tTime=u,!s&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),l&&l!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=M?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Yo(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sl(this,Se(l),Se(m)),x&&(u-=m-(m=x._start))),this._tTime=u,this._time=m,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,l=0),!l&&m&&!s&&!f&&(xt(this,"onStart"),this._tTime!==u))return this;if(m>=l&&n>=0)for(h=this._first;h;){if(p=h._next,(h._act||m>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(m-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(m-h._start)*h._ts,s,o),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=-ne);break}}h=p}else{h=this._last;for(var E=n<0?n:m;h;){if(p=h._prev,(h._act||E<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,o||Ne&&(h._initted||h._startAt)),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=E?-ne:ne);break}}h=p}}if(x&&!s&&(this.pause(),x.render(m>=l?0:-ne)._zTime=m>=l?1:-1,this._ts))return this._start=y,Rr(this),this.render(n,s,o);this._onUpdate&&!s&&xt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Ci(this,1),!s&&!(n<0&&!l)&&(u||l||!c)&&(xt(this,u===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,s){var o=this;if(li(s)||(s=Bt(this,s,n)),!(n instanceof $0)){if(Ge(n))return n.forEach(function(l){return o.add(l,s)}),this;if(Me(n))return this.addLabel(n,s);if(me(n))n=xe.delayedCall(0,n);else return this}return this!==n?$t(this,n,s):this},r.getChildren=function(n,s,o,l){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-It);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof xe?s&&c.push(d):(o&&c.push(d),n&&c.push.apply(c,d.getChildren(!0,s,o)))),d=d._next;return c},r.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},r.remove=function(n){return Me(n)?this.removeLabel(n):me(n)?this.killTweensOf(n):(n.parent===this&&Dr(this,n),n===this._recent&&(this._recent=this._last),Hi(this))},r.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(ft.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},r.addLabel=function(n,s){return this.labels[n]=Bt(this,s),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,s,o){var l=xe.delayedCall(0,s||U0,o);return l.data="isPause",this._hasPause=1,$t(this,l,Bt(this,n))},r.removePause=function(n){var s=this._first;for(n=Bt(this,n);s;)s._start===n&&s.data==="isPause"&&Ci(s),s=s._next},r.killTweensOf=function(n,s,o){for(var l=this.getTweensOf(n,o),c=l.length;c--;)ki!==l[c]&&l[c].kill(n,s);return this},r.getTweensOf=function(n,s){for(var o=[],l=Pt(n),c=this._first,d=li(s),u;c;)c instanceof xe?Q1(c._targets,l)&&(d?(!ki||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(l,s)).length&&o.push.apply(o,u),c=c._next;return o},r.tweenTo=function(n,s){s=s||{};var o=this,l=Bt(o,n),c=s,d=c.startAt,u=c.onStart,g=c.onStartParams,m=c.immediateRender,h,p=xe.to(o,Tt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale())||ne,onStart:function(){if(o.pause(),!h){var v=s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale());p._dur!==v&&_0(p,v,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,g||[])}},s));return m?p.render(0):p},r.tweenFromTo=function(n,s,o){return this.tweenTo(s,Tt({startAt:{time:Bt(this,n)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),fo(this,Bt(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),fo(this,Bt(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ne)},r.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,d;l;)l._start>=o&&(l._start+=n,l._end+=n),l=l._next;if(s)for(d in c)c[d]>=o&&(c[d]+=n);return Hi(this)},r.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return a.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Hi(this)},r.totalDuration=function(n){var s=0,o=this,l=o._last,c=It,d,u,g;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(g=o.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,$t(o,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(s-=u,(!g&&!o._dp||g&&g.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),l._end>s&&l._ts&&(s=l._end),l=d;_0(o,o===ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ue._ts&&(To(ue,Pr(n,ue)),ko=ft.frame),ft.frame>=lo){lo+=mt.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&mt.autoSleep&&ft._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ft.sleep()}}},t}($0);Tt(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var bl=function(t,r,i,n,s,o,l){var c=new rt(this._pt,t,r,0,1,os,null,s),d=0,u=0,g,m,h,p,f,v,k,x;for(c.b=i,c.e=n,i+="",n+="",(k=~n.indexOf("random("))&&(n=w0(n)),o&&(x=[i,n],o(x,t,r),i=x[0],n=x[1]),m=i.match(Ln)||[];g=Ln.exec(n);)p=g[0],f=n.substring(d,g.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),p!==m[u++]&&(v=parseFloat(m[u-1])||0,c._pt={_next:c._pt,p:f||u===1?f:",",s:v,c:p.charAt(1)==="="?Wi(v,p)-v:parseFloat(p)-v,m:h&&h<4?Math.round:0},d=Ln.lastIndex);return c.c=d<n.length?n.substring(d,n.length):"",c.fp=l,(jn.test(n)||k)&&(c.e=0),this._pt=c,c},is=function(t,r,i,n,s,o,l,c,d,u){me(n)&&(n=n(s||0,t,o));var g=t[r],m=i!=="get"?i:me(g)?d?t[r.indexOf("set")||!me(t["get"+r.substr(3)])?r:"get"+r.substr(3)](d):t[r]():g,h=me(g)?d?Cl:Uo:ss,p;if(Me(n)&&(~n.indexOf("random(")&&(n=w0(n)),n.charAt(1)==="="&&(p=Wi(m,n)+(qe(m)||0),(p||p===0)&&(n=p))),!u||m!==n||Yn)return!isNaN(m*n)&&n!==""?(p=new rt(this._pt,t,r,+m||0,n-(m||0),typeof g=="boolean"?El:jo,0,h),d&&(p.fp=d),l&&p.modifier(l,this,t),this._pt=p):(!g&&!(r in t)&&Or(r,n),bl.call(this,t,r,m,n,h,c||mt.stringFilter,d))},xl=function(t,r,i,n,s){if(me(t)&&(t=W0(t,s,r,i,n)),!Jt(t)||t.style&&t.nodeType||Ge(t)||vo(t))return Me(t)?W0(t,s,r,i,n):t;var o={},l;for(l in t)o[l]=W0(t[l],s,r,i,n);return o},rs=function(t,r,i,n,s,o){var l,c,d,u;if(ht[t]&&(l=new ht[t]).init(s,l.rawVars?r[t]:xl(r[t],n,s,o,i),i,n,o)!==!1&&(i._pt=c=new rt(i._pt,s,t,0,1,l.render,l,0,l.priority),i!==f0))for(d=i._ptLookup[i._targets.indexOf(s)],u=l._props.length;u--;)d[l._props[u]]=c;return l},ki,Yn,ns=function a(t,r,i){var n=t.vars,s=n.ease,o=n.startAt,l=n.immediateRender,c=n.lazy,d=n.onUpdate,u=n.runBackwards,g=n.yoyoEase,m=n.keyframes,h=n.autoRevert,p=t._dur,f=t._startAt,v=t._targets,k=t.parent,x=k&&k.data==="nested"?k.vars.targets:v,S=t._overwrite==="auto"&&!Wn,y=t.timeline,T,L,b,M,C,E,D,B,U,W,K,j,O;if(y&&(!m||!s)&&(s="none"),t._ease=Vi(s,g0.ease),t._yEase=g?Vo(Vi(g===!0?s:g,g0.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!y&&!!n.runBackwards,!y||m&&!n.stagger){if(B=v[0]?Si(v[0]).harness:0,j=B&&n[B.prop],T=Ir(n,Jn),f&&(f._zTime<0&&f.progress(1),r<0&&u&&l&&!h?f.render(-1,!0):f.revert(u&&p?Cr:J1),f._lazy=0),o){if(Ci(t._startAt=xe.set(v,Tt({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!f&&gt(c),startAt:null,delay:0,onUpdate:d&&function(){return xt(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ne||!l&&!h)&&t._startAt.revert(Cr),l&&p&&r<=0&&i<=0){r&&(t._zTime=r);return}}else if(u&&p&&!f){if(r&&(l=!1),b=Tt({overwrite:!1,data:"isFromStart",lazy:l&&!f&&gt(c),immediateRender:l,stagger:0,parent:k},T),j&&(b[B.prop]=j),Ci(t._startAt=xe.set(v,b)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ne?t._startAt.revert(Cr):t._startAt.render(-1,!0)),t._zTime=r,!l)a(t._startAt,ne,ne);else if(!r)return}for(t._pt=t._ptCache=0,c=p&&gt(c)||c&&!p,L=0;L<v.length;L++){if(C=v[L],D=C._gsap||Qn(v)[L]._gsap,t._ptLookup[L]=W={},Rn[D.id]&&Ti.length&&Br(),K=x===v?L:x.indexOf(C),B&&(U=new B).init(C,j||T,t,K,x)!==!1&&(t._pt=M=new rt(t._pt,C,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Z){W[Z]=M}),U.priority&&(E=1)),!B||j)for(b in T)ht[b]&&(U=rs(b,T,t,K,C,x))?U.priority&&(E=1):W[b]=M=is.call(t,C,b,"get",T[b],K,x,0,n.stringFilter);t._op&&t._op[L]&&t.kill(C,t._op[L]),S&&t._pt&&(ki=t,ue.killTweensOf(C,W,t.globalTime(r)),O=!t.parent,ki=0),t._pt&&c&&(Rn[D.id]=1)}E&&ls(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!O,m&&r<=0&&y.render(It,!0,!0)},kl=function(t,r,i,n,s,o,l,c){var d=(t._pt&&t._ptCache||(t._ptCache={}))[r],u,g,m,h;if(!d)for(d=t._ptCache[r]=[],m=t._ptLookup,h=t._targets.length;h--;){if(u=m[h][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return Yn=1,t.vars[r]="+=0",ns(t,l),Yn=0,c?G0(r+" not eligible for reset"):1;d.push(u)}for(h=d.length;h--;)g=d[h],u=g._pt||g,u.s=(n||n===0)&&!s?n:u.s+(n||0)+o*u.c,u.c=i-u.s,g.e&&(g.e=pe(i)+qe(g.e)),g.b&&(g.b=u.s+qe(g.b))},Tl=function(t,r){var i=t[0]?Si(t[0]).harness:0,n=i&&i.aliases,s,o,l,c;if(!n)return r;s=m0({},r);for(o in n)if(o in s)for(c=n[o].split(","),l=c.length;l--;)s[c[l]]=s[o];return s},Sl=function(t,r,i,n){var s=r.ease||n||"power1.inOut",o,l;if(Ge(r))l=i[t]||(i[t]=[]),r.forEach(function(c,d){return l.push({t:d/(r.length-1)*100,v:c,e:s})});else for(o in r)l=i[o]||(i[o]=[]),o==="ease"||l.push({t:parseFloat(t),v:r[o],e:s})},W0=function(t,r,i,n,s){return me(t)?t.call(r,i,n,s):Me(t)&&~t.indexOf("random(")?w0(t):t},Wo=Kn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Go={};it(Wo+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Go[a]=1});var xe=function(a){po(t,a);function t(i,n,s,o){var l;typeof n=="number"&&(s.duration=n,n=s,s=null),l=a.call(this,o?n:Y0(n))||this;var c=l.vars,d=c.duration,u=c.delay,g=c.immediateRender,m=c.stagger,h=c.overwrite,p=c.keyframes,f=c.defaults,v=c.scrollTrigger,k=c.yoyoEase,x=n.parent||ue,S=(Ge(i)||vo(i)?li(i[0]):"length"in n)?[i]:Pt(i),y,T,L,b,M,C,E,D;if(l._targets=S.length?Qn(S):G0("GSAP target "+i+" not found. https://gsap.com",!mt.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,p||m||Sr(d)||Sr(u)){if(n=l.vars,y=l.timeline=new Fe({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=oi(l),y._start=0,m||Sr(d)||Sr(u)){if(b=S.length,E=m&&zo(m),Jt(m))for(M in m)~Wo.indexOf(M)&&(D||(D={}),D[M]=m[M]);for(T=0;T<b;T++)L=Ir(n,Go),L.stagger=0,k&&(L.yoyoEase=k),D&&m0(L,D),C=S[T],L.duration=+W0(d,oi(l),T,C,S),L.delay=(+W0(u,oi(l),T,C,S)||0)-l._delay,!m&&b===1&&L.delay&&(l._delay=u=L.delay,l._start+=u,L.delay=0),y.to(C,L,E?E(T,C,S):0),y._ease=J.none;y.duration()?d=u=0:l.timeline=0}else if(p){Y0(Tt(y.vars.defaults,{ease:"none"})),y._ease=Vi(p.ease||n.ease||"none");var B=0,U,W,K;if(Ge(p))p.forEach(function(j){return y.to(S,j,">")}),y.duration();else{L={};for(M in p)M==="ease"||M==="easeEach"||Sl(M,p[M],L,p.easeEach);for(M in L)for(U=L[M].sort(function(j,O){return j.t-O.t}),B=0,T=0;T<U.length;T++)W=U[T],K={ease:W.e,duration:(W.t-(T?U[T-1].t:0))/100*d},K[M]=W.v,y.to(S,K,B),B+=K.duration;y.duration()<d&&y.to({},{duration:d-y.duration()})}}d||l.duration(d=y.duration())}else l.timeline=0;return h===!0&&!Wn&&(ki=oi(l),ue.killTweensOf(S),ki=0),$t(x,oi(l),s),n.reversed&&l.reverse(),n.paused&&l.paused(!0),(g||!d&&!p&&l._start===Se(x._time)&&gt(g)&&il(oi(l))&&x.data!=="nested")&&(l._tTime=-ne,l.render(Math.max(0,-u)||0)),v&&Mo(oi(l),v),l}var r=t.prototype;return r.render=function(n,s,o){var l=this._time,c=this._tDur,d=this._dur,u=n<0,g=n>c-ne&&!u?c:n<ne?0:n,m,h,p,f,v,k,x,S,y;if(!d)nl(this,n,s,o);else if(g!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(m=g,S=this.timeline,this._repeat){if(f=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+n,s,o);if(m=Se(g%f),g===c?(p=this._repeat,m=d):(v=Se(g/f),p=~~v,p&&p===v?(m=d,p--):m>d&&(m=d)),k=this._yoyo&&p&1,k&&(y=this._yEase,m=d-m),v=p0(this._tTime,f),m===l&&!o&&this._initted&&p===v)return this._tTime=g,this;p!==v&&(S&&this._yEase&&Yo(S,k),this.vars.repeatRefresh&&!k&&!this._lock&&m!==f&&this._initted&&(this._lock=o=1,this.render(Se(f*p),!0).invalidate()._lock=0))}if(!this._initted){if(Bo(this,u?n:m,o,s,g))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&p!==v))return this;if(d!==this._dur)return this.render(n,s,o)}if(this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(m/d),this._from&&(this.ratio=x=1-x),m&&!l&&!s&&!p&&(xt(this,"onStart"),this._tTime!==g))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;S&&S.render(n<0?n:S._dur*S._ease(m/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Fn(this,n,s,o),xt(this,"onUpdate")),this._repeat&&p!==v&&this.vars.onRepeat&&!s&&this.parent&&xt(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(u&&!this._onUpdate&&Fn(this,n,!0,!0),(n||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ci(this,1),!s&&!(u&&!l)&&(g||l||k)&&(xt(this,g===c?"onComplete":"onReverseComplete",!0),this._prom&&!(g<c&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},r.resetTo=function(n,s,o,l,c){j0||ft.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ns(this,d),u=this._ease(d/this._dur),kl(this,n,s,o,l,u,d,c)?this.resetTo(n,s,o,l,1):(Fr(this,0),this.parent||Lo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?H0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,ki&&ki.vars.overwrite!==!0)._first||H0(this),this.parent&&o!==this.timeline.totalDuration()&&_0(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=n?Pt(n):l,d=this._ptLookup,u=this._pt,g,m,h,p,f,v,k;if((!s||s==="all")&&el(l,c))return s==="all"&&(this._pt=0),H0(this);for(g=this._op=this._op||[],s!=="all"&&(Me(s)&&(f={},it(s,function(x){return f[x]=1}),s=f),s=Tl(l,s)),k=l.length;k--;)if(~c.indexOf(l[k])){m=d[k],s==="all"?(g[k]=s,p=m,h={}):(h=g[k]=g[k]||{},p=s);for(f in p)v=m&&m[f],v&&((!("kill"in v.d)||v.d.kill(f)===!0)&&Dr(this,v,"_pt"),delete m[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&H0(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return X0(1,arguments)},t.delayedCall=function(n,s,o,l){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},t.fromTo=function(n,s,o){return X0(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return ue.killTweensOf(n,s,o)},t}($0);Tt(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(a){xe[a]=function(){var t=new Fe,r=qn.call(arguments,0);return r.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,r)}});var ss=function(t,r,i){return t[r]=i},Uo=function(t,r,i){return t[r](i)},Cl=function(t,r,i,n){return t[r](n.fp,i)},Ll=function(t,r,i){return t.setAttribute(r,i)},Nr=function(t,r){return me(t[r])?Uo:Ar(t[r])&&t.setAttribute?Ll:ss},jo=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},El=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},os=function(t,r){var i=r._pt,n="";if(!t&&r.b)n=r.b;else if(t===1&&r.e)n=r.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=r.c}r.set(r.t,r.p,n,r)},as=function(t,r){for(var i=r._pt;i;)i.r(t,i.d),i=i._next},Ml=function(t,r,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,r,i),s=o},Bl=function(t){for(var r=this._pt,i,n;r;)n=r._next,r.p===t&&!r.op||r.op===t?Dr(this,r,"_pt"):r.dep||(i=1),r=n;return!i},Il=function(t,r,i,n){n.mSet(t,r,n.m.call(n.tween,i,n.mt),n)},ls=function(t){for(var r=t._pt,i,n,s,o;r;){for(i=r._next,n=s;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:o)?r._prev._next=r:s=r,(r._next=n)?n._prev=r:o=r,r=i}t._pt=s},rt=function(){function a(r,i,n,s,o,l,c,d,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=l||jo,this.d=c||this,this.set=d||ss,this.pr=u||0,this._next=r,r&&(r._prev=this)}var t=a.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Il,this.m=i,this.mt=s,this.tween=n},a}();it(Kn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Jn[a]=1});kt.TweenMax=kt.TweenLite=xe;kt.TimelineLite=kt.TimelineMax=Fe;ue=new Fe({sortChildren:!1,defaults:g0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=es;var Yi=[],Er={},Pl=[],mo=0,zl=0,Pn=function(t){return(Er[t]||Pl).map(function(r){return r()})},Xn=function(){var t=Date.now(),r=[];t-mo>2&&(Pn("matchMediaInit"),Yi.forEach(function(i){var n=i.queries,s=i.conditions,o,l,c,d;for(l in n)o=jt.matchMedia(n[l]).matches,o&&(c=1),o!==s[l]&&(s[l]=o,d=1);d&&(i.revert(),c&&r.push(i))}),Pn("matchMediaRevert"),r.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),mo=t,Pn("matchMedia"))},$o=function(){function a(r,i){this.selector=i&&Hn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zl++,r&&this.add(r)}var t=a.prototype;return t.add=function(i,n,s){me(i)&&(s=n,n=i,i=me);var o=this,l=function(){var d=ce,u=o.selector,g;return d&&d!==o&&d.data.push(o),s&&(o.selector=Hn(s)),ce=o,g=n.apply(o,arguments),me(g)&&o._r.push(g),ce=d,o.selector=u,o.isReverted=!1,g};return o.last=l,i===me?l(o,function(c){return o.add(null,c)}):i?o[i]=l:l},t.ignore=function(i){var n=ce;ce=null,i(this),ce=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof xe&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?function(){for(var l=s.getTweens(),c=s.data.length,d;c--;)d=s.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,g){return g.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),c=s.data.length;c--;)d=s.data[c],d instanceof Fe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof xe)&&d.revert&&d.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),n)for(var o=Yi.length;o--;)Yi[o].id===this.id&&Yi.splice(o,1)},t.revert=function(i){this.kill(i||{})},a}(),Al=function(){function a(r){this.contexts=[],this.scope=r,ce&&ce.data.push(this)}var t=a.prototype;return t.add=function(i,n,s){Jt(i)||(i={matches:i});var o=new $o(0,s||this.scope),l=o.conditions={},c,d,u;ce&&!o.selector&&(o.selector=ce.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(d in i)d==="all"?u=1:(c=jt.matchMedia(i[d]),c&&(Yi.indexOf(o)<0&&Yi.push(o),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(Xn):c.addEventListener("change",Xn)));return u&&n(o,function(g){return o.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a}(),zr={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];r.forEach(function(n){return No(n)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,r){return ue.getTweensOf(t,r)},getProperty:function(t,r,i,n){Me(t)&&(t=Pt(t)[0]);var s=Si(t||{}).get,o=i?Co:So;return i==="native"&&(i=""),t&&(r?o((ht[r]&&ht[r].get||s)(t,r,i,n)):function(l,c,d){return o((ht[l]&&ht[l].get||s)(t,l,c,d))})},quickSetter:function(t,r,i){if(t=Pt(t),t.length>1){var n=t.map(function(u){return Ue.quickSetter(u,r,i)}),s=n.length;return function(u){for(var g=s;g--;)n[g](u)}}t=t[0]||{};var o=ht[r],l=Si(t),c=l.harness&&(l.harness.aliases||{})[r]||r,d=o?function(u){var g=new o;f0._pt=0,g.init(t,i?u+i:u,f0,0,[t]),g.render(1,g),f0._pt&&as(1,f0)}:l.set(t,c);return o?d:function(u){return d(t,c,i?u+i:u,l,1)}},quickTo:function(t,r,i){var n,s=Ue.to(t,Tt((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(c,d,u){return s.resetTo(r,c,d,u)};return o.tween=s,o},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,g0.ease)),co(g0,t||{})},config:function(t){return co(mt,t||{})},registerEffect:function(t){var r=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(l){return l&&!ht[l]&&!kt[l]&&G0(r+" effect requires "+l+" plugin.")}),En[r]=function(l,c,d){return i(Pt(l),Tt(c||{},s),d)},o&&(Fe.prototype[r]=function(l,c,d){return this.add(En[r](l,Jt(c)?c:(d=c)&&{},this),d)})},registerEase:function(t,r){J[t]=Vi(r)},parseEase:function(t,r){return arguments.length?Vi(t,r):J},getById:function(t){return ue.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var i=new Fe(t),n,s;for(i.smoothChildTiming=gt(t.smoothChildTiming),ue.remove(i),i._dp=0,i._time=i._tTime=ue._time,n=ue._first;n;)s=n._next,(r||!(!n._dur&&n instanceof xe&&n.vars.onComplete===n._targets[0]))&&$t(i,n,n._start-n._delay),n=s;return $t(ue,i,0),i},context:function(t,r){return t?new $o(t,r):ce},matchMedia:function(t){return new Al(t)},matchMediaRefresh:function(){return Yi.forEach(function(t){var r=t.conditions,i,n;for(n in r)r[n]&&(r[n]=!1,i=1);i&&t.revert()})||Xn()},addEventListener:function(t,r){var i=Er[t]||(Er[t]=[]);~i.indexOf(r)||i.push(r)},removeEventListener:function(t,r){var i=Er[t],n=i&&i.indexOf(r);n>=0&&i.splice(n,1)},utils:{wrap:hl,wrapYoyo:fl,distribute:zo,random:Oo,snap:Ao,normalize:ul,getUnit:qe,clamp:al,splitColor:qo,toArray:Pt,selector:Hn,mapRange:Ro,pipe:cl,unitize:dl,interpolate:gl,shuffle:Po},install:bo,effects:En,ticker:ft,updateRoot:Fe.updateRoot,plugins:ht,globalTimeline:ue,core:{PropTween:rt,globals:xo,Tween:xe,Timeline:Fe,Animation:$0,getCache:Si,_removeLinkedListItem:Dr,reverting:function(){return Ne},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Wn=t}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return zr[a]=xe[a]});ft.add(Fe.updateRoot);f0=zr.to({},{duration:0});var Ol=function(t,r){for(var i=t._pt;i&&i.p!==r&&i.op!==r&&i.fp!==r;)i=i._next;return i},Dl=function(t,r){var i=t._targets,n,s,o;for(n in r)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Ol(o,n)),o&&o.modifier&&o.modifier(r[n],t,i[s],n))},zn=function(t,r){return{name:t,rawVars:1,init:function(n,s,o){o._onInit=function(l){var c,d;if(Me(s)&&(c={},it(s,function(u){return c[u]=1}),s=c),r){c={};for(d in s)c[d]=r(s[d]);s=c}Dl(l,s)}}}},Ue=zr.registerPlugin({name:"attr",init:function(t,r,i,n,s){var o,l,c;this.tween=i;for(o in r)c=t.getAttribute(o)||"",l=this.add(t,"setAttribute",(c||0)+"",r[o],n,s,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(t,r){for(var i=r._pt;i;)Ne?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,r){for(var i=r.length;i--;)this.add(t,i,t[i]||0,r[i],0,0,0,0,0,1)}},zn("roundProps",Vn),zn("modifiers"),zn("snap",Ao))||zr;xe.version=Fe.version=Ue.version="3.12.7";yo=1;Gn()&&v0();var Rl=J.Power0,Fl=J.Power1,Nl=J.Power2,ql=J.Power3,Hl=J.Power4,Vl=J.Linear,Yl=J.Quad,Xl=J.Cubic,Wl=J.Quart,Gl=J.Quint,Ul=J.Strong,jl=J.Elastic,$l=J.Back,Jl=J.SteppedEase,Kl=J.Bounce,Ql=J.Sine,Zl=J.Expo,ec=J.Circ;var Jo,Ei,b0,gs,Ji,tc,Ko,ms,ic=function(){return typeof window<"u"},di={},$i=180/Math.PI,x0=Math.PI/180,y0=Math.atan2,Qo=1e8,ps=/([A-Z])/g,rc=/(left|right|width|margin|padding|x)/i,nc=/[\s,\(]\S/,Kt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ds=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},sc=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},oc=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},ac=function(t,r){var i=r.s+r.c*t;r.set(r.t,r.p,~~(i+(i<0?-.5:.5))+r.u,r)},oa=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},aa=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},lc=function(t,r,i){return t.style[r]=i},cc=function(t,r,i){return t.style.setProperty(r,i)},dc=function(t,r,i){return t._gsap[r]=i},uc=function(t,r,i){return t._gsap.scaleX=t._gsap.scaleY=i},hc=function(t,r,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},fc=function(t,r,i,n,s){var o=t._gsap;o[r]=i,o.renderTransform(s,o)},he="transform",pt=he+"Origin",gc=function a(t,r){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in di&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Kt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(l){return i.tfm[l]=ci(n,l)}):this.tfm[t]=o.x?o[t]:ci(n,t),t===pt&&(this.tfm.zOrigin=o.zOrigin);else return Kt.transform.split(",").forEach(function(l){return a.call(i,l,r)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pt,r,"")),t=he}(s||r)&&this.props.push(t,r,s[t])},la=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mc=function(){var t=this.props,r=this.target,i=r.style,n=r._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?r[t[s]](t[s+2]):r[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ps,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),s=ms(),(!s||!s.isStart)&&!i[he]&&(la(i),n.zOrigin&&i[pt]&&(i[pt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ca=function(t,r){var i={target:t,props:[],revert:mc,save:gc};return t._gsap||Ue.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(n){return i.save(n)}),i},da,us=function(t,r){var i=Ei.createElementNS?Ei.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ei.createElement(t);return i&&i.style?i:Ei.createElement(t)},Qt=function a(t,r,i){var n=getComputedStyle(t);return n[r]||n.getPropertyValue(r.replace(ps,"-$1").toLowerCase())||n.getPropertyValue(r)||!i&&a(t,k0(r)||r,1)||""},Zo="O,Moz,ms,Ms,Webkit".split(","),k0=function(t,r,i){var n=r||Ji,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Zo[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Zo[o]:"")+t},hs=function(){ic()&&window.document&&(Jo=window,Ei=Jo.document,b0=Ei.documentElement,Ji=us("div")||{style:{}},tc=us("div"),he=k0(he),pt=he+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",da=!!k0("perspective"),ms=Ue.core.reverting,gs=1)},ea=function(t){var r=t.ownerSVGElement,i=us("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),b0.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),b0.removeChild(i),s},ta=function(t,r){for(var i=r.length;i--;)if(t.hasAttribute(r[i]))return t.getAttribute(r[i])},ua=function(t){var r,i;try{r=t.getBBox()}catch{r=ea(t),i=1}return r&&(r.width||r.height)||i||(r=ea(t)),r&&!r.width&&!r.x&&!r.y?{x:+ta(t,["x","cx","x1"])||0,y:+ta(t,["y","cy","y1"])||0,width:0,height:0}:r},ha=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ua(t))},Ki=function(t,r){if(r){var i=t.style,n;r in di&&r!==pt&&(r=he),i.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),i.removeProperty(n==="--"?r:r.replace(ps,"-$1").toLowerCase())):i.removeAttribute(r)}},Mi=function(t,r,i,n,s,o){var l=new rt(t._pt,r,i,0,1,o?aa:oa);return t._pt=l,l.b=n,l.e=s,t._props.push(i),l},ia={deg:1,rad:1,turn:1},pc={grid:1,flex:1},Bi=function a(t,r,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",l=Ji.style,c=rc.test(r),d=t.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),g=100,m=n==="px",h=n==="%",p,f,v,k;if(n===o||!s||ia[n]||ia[o])return s;if(o!=="px"&&!m&&(s=a(t,r,i,"px")),k=t.getCTM&&ha(t),(h||o==="%")&&(di[r]||~r.indexOf("adius")))return p=k?t.getBBox()[c?"width":"height"]:t[u],pe(h?s/p*g:s/100*p);if(l[c?"width":"height"]=g+(m?o:n),f=n!=="rem"&&~r.indexOf("adius")||n==="em"&&t.appendChild&&!d?t:t.parentNode,k&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Ei||!f.appendChild)&&(f=Ei.body),v=f._gsap,v&&h&&v.width&&c&&v.time===ft.time&&!v.uncache)return pe(s/v.width*g);if(h&&(r==="height"||r==="width")){var x=t.style[r];t.style[r]=g+n,p=t[u],x?t.style[r]=x:Ki(t,r)}else(h||o==="%")&&!pc[Qt(f,"display")]&&(l.position=Qt(t,"position")),f===t&&(l.position="static"),f.appendChild(Ji),p=Ji[u],f.removeChild(Ji),l.position="absolute";return c&&h&&(v=Si(f),v.time=ft.time,v.width=f[u]),pe(m?p*s/g:p&&s?g/p*s:0)},ci=function(t,r,i,n){var s;return gs||hs(),r in Kt&&r!=="transform"&&(r=Kt[r],~r.indexOf(",")&&(r=r.split(",")[0])),di[r]&&r!=="transform"?(s=Z0(t,n),s=r!=="transformOrigin"?s[r]:s.svg?s.origin:Hr(Qt(t,pt))+" "+s.zOrigin+"px"):(s=t.style[r],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=qr[r]&&qr[r](t,r,i)||Qt(t,r)||Zn(t,r)||(r==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bi(t,r,s,i)+i:s},_c=function(t,r,i,n){if(!i||i==="none"){var s=k0(r,t,1),o=s&&Qt(t,s,1);o&&o!==i?(r=s,i=o):r==="borderColor"&&(i=Qt(t,"borderTopColor"))}var l=new rt(this._pt,t.style,r,0,1,os),c=0,d=0,u,g,m,h,p,f,v,k,x,S,y,T;if(l.b=i,l.e=n,i+="",n+="",n==="auto"&&(f=t.style[r],t.style[r]=n,n=Qt(t,r)||n,f?t.style[r]=f:Ki(t,r)),u=[i,n],es(u),i=u[0],n=u[1],m=i.match(Xi)||[],T=n.match(Xi)||[],T.length){for(;g=Xi.exec(n);)v=g[0],x=n.substring(c,g.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),v!==(f=m[d++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),v.charAt(1)==="="&&(v=Wi(h,v)+y),k=parseFloat(v),S=v.substr((k+"").length),c=Xi.lastIndex-S.length,S||(S=S||mt.units[r]||y,c===n.length&&(n+=S,l.e+=S)),y!==S&&(h=Bi(t,r,f,S)||0),l._pt={_next:l._pt,p:x||d===1?x:",",s:h,c:k-h,m:p&&p<4||r==="zIndex"?Math.round:0});l.c=c<n.length?n.substring(c,n.length):""}else l.r=r==="display"&&n==="none"?aa:oa;return jn.test(n)&&(l.e=0),this._pt=l,l},ra={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vc=function(t){var r=t.split(" "),i=r[0],n=r[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),r[0]=ra[i]||i,r[1]=ra[n]||n,r.join(" ")},wc=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var i=r.t,n=i.style,s=r.u,o=i._gsap,l,c,d;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),d=s.length;--d>-1;)l=s[d],di[l]&&(c=1,l=l==="transformOrigin"?pt:he),Ki(i,l);c&&(Ki(i,he),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Z0(i,1),o.uncache=1,la(n)))}},qr={clearProps:function(t,r,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new rt(t._pt,r,i,0,0,wc);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},Q0=[1,0,0,1,0,0],fa={},ga=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},na=function(t){var r=Qt(t,he);return ga(r)?Q0:r.substr(7).match(Un).map(pe)},_s=function(t,r){var i=t._gsap||Si(t),n=t.style,s=na(t),o,l,c,d;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Q0:s):(s===Q0&&!t.offsetParent&&t!==b0&&!i.svg&&(c=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,l=t.nextElementSibling,b0.appendChild(t)),s=na(t),c?n.display=c:Ki(t,"display"),d&&(l?o.insertBefore(t,l):o?o.appendChild(t):b0.removeChild(t))),r&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fs=function(t,r,i,n,s,o){var l=t._gsap,c=s||_s(t,!0),d=l.xOrigin||0,u=l.yOrigin||0,g=l.xOffset||0,m=l.yOffset||0,h=c[0],p=c[1],f=c[2],v=c[3],k=c[4],x=c[5],S=r.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,L,b,M,C;i?c!==Q0&&(b=h*v-p*f)&&(M=y*(v/b)+T*(-f/b)+(f*x-v*k)/b,C=y*(-p/b)+T*(h/b)-(h*x-p*k)/b,y=M,T=C):(L=ua(t),y=L.x+(~S[0].indexOf("%")?y/100*L.width:y),T=L.y+(~(S[1]||S[0]).indexOf("%")?T/100*L.height:T)),n||n!==!1&&l.smooth?(k=y-d,x=T-u,l.xOffset=g+(k*h+x*f)-k,l.yOffset=m+(k*p+x*v)-x):l.xOffset=l.yOffset=0,l.xOrigin=y,l.yOrigin=T,l.smooth=!!n,l.origin=r,l.originIsAbsolute=!!i,t.style[pt]="0px 0px",o&&(Mi(o,l,"xOrigin",d,y),Mi(o,l,"yOrigin",u,T),Mi(o,l,"xOffset",g,l.xOffset),Mi(o,l,"yOffset",m,l.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Z0=function(t,r){var i=t._gsap||new ts(t);if("x"in i&&!r&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",l="deg",c=getComputedStyle(t),d=Qt(t,pt)||"0",u,g,m,h,p,f,v,k,x,S,y,T,L,b,M,C,E,D,B,U,W,K,j,O,Z,oe,_,ae,Qe,Dt,fe,Oe;return u=g=m=f=v=k=x=S=y=0,h=p=1,i.svg=!!(t.getCTM&&ha(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[he]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[he]!=="none"?c[he]:"")),n.scale=n.rotate=n.translate="none"),b=_s(t,i.svg),i.svg&&(i.uncache?(Z=t.getBBox(),d=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",O=""):O=!r&&t.getAttribute("data-svg-origin"),fs(t,O||d,!!O||i.originIsAbsolute,i.smooth!==!1,b)),T=i.xOrigin||0,L=i.yOrigin||0,b!==Q0&&(D=b[0],B=b[1],U=b[2],W=b[3],u=K=b[4],g=j=b[5],b.length===6?(h=Math.sqrt(D*D+B*B),p=Math.sqrt(W*W+U*U),f=D||B?y0(B,D)*$i:0,x=U||W?y0(U,W)*$i+f:0,x&&(p*=Math.abs(Math.cos(x*x0))),i.svg&&(u-=T-(T*D+L*U),g-=L-(T*B+L*W))):(Oe=b[6],Dt=b[7],_=b[8],ae=b[9],Qe=b[10],fe=b[11],u=b[12],g=b[13],m=b[14],M=y0(Oe,Qe),v=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=K*C+_*E,Z=j*C+ae*E,oe=Oe*C+Qe*E,_=K*-E+_*C,ae=j*-E+ae*C,Qe=Oe*-E+Qe*C,fe=Dt*-E+fe*C,K=O,j=Z,Oe=oe),M=y0(-U,Qe),k=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=D*C-_*E,Z=B*C-ae*E,oe=U*C-Qe*E,fe=W*E+fe*C,D=O,B=Z,U=oe),M=y0(B,D),f=M*$i,M&&(C=Math.cos(M),E=Math.sin(M),O=D*C+B*E,Z=K*C+j*E,B=B*C-D*E,j=j*C-K*E,D=O,K=Z),v&&Math.abs(v)+Math.abs(f)>359.9&&(v=f=0,k=180-k),h=pe(Math.sqrt(D*D+B*B+U*U)),p=pe(Math.sqrt(j*j+Oe*Oe)),M=y0(K,j),x=Math.abs(M)>2e-4?M*$i:0,y=fe?1/(fe<0?-fe:fe):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ga(Qt(t,he)),O&&t.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),r=r||i.uncache,i.x=u-((i.xPercent=u&&(!r&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=g-((i.yPercent=g&&(!r&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=m+o,i.scaleX=pe(h),i.scaleY=pe(p),i.rotation=pe(f)+l,i.rotationX=pe(v)+l,i.rotationY=pe(k)+l,i.skewX=x+l,i.skewY=S+l,i.transformPerspective=y+o,(i.zOrigin=parseFloat(d.split(" ")[2])||!r&&i.zOrigin||0)&&(n[pt]=Hr(d)),i.xOffset=i.yOffset=0,i.force3D=mt.force3D,i.renderTransform=i.svg?bc:da?ma:yc,i.uncache=0,i},Hr=function(t){return(t=t.split(" "))[0]+" "+t[1]},cs=function(t,r,i){var n=qe(r);return pe(parseFloat(r)+parseFloat(Bi(t,"x",i+"px",n)))+n},yc=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,ma(t,r)},Ui="0deg",K0="0px",ji=") ",ma=function(t,r){var i=r||this,n=i.xPercent,s=i.yPercent,o=i.x,l=i.y,c=i.z,d=i.rotation,u=i.rotationY,g=i.rotationX,m=i.skewX,h=i.skewY,p=i.scaleX,f=i.scaleY,v=i.transformPerspective,k=i.force3D,x=i.target,S=i.zOrigin,y="",T=k==="auto"&&t&&t!==1||k===!0;if(S&&(g!==Ui||u!==Ui)){var L=parseFloat(u)*x0,b=Math.sin(L),M=Math.cos(L),C;L=parseFloat(g)*x0,C=Math.cos(L),o=cs(x,o,b*C*-S),l=cs(x,l,-Math.sin(L)*-S),c=cs(x,c,M*C*-S+S)}v!==K0&&(y+="perspective("+v+ji),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(T||o!==K0||l!==K0||c!==K0)&&(y+=c!==K0||T?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+ji),d!==Ui&&(y+="rotate("+d+ji),u!==Ui&&(y+="rotateY("+u+ji),g!==Ui&&(y+="rotateX("+g+ji),(m!==Ui||h!==Ui)&&(y+="skew("+m+", "+h+ji),(p!==1||f!==1)&&(y+="scale("+p+", "+f+ji),x.style[he]=y||"translate(0, 0)"},bc=function(t,r){var i=r||this,n=i.xPercent,s=i.yPercent,o=i.x,l=i.y,c=i.rotation,d=i.skewX,u=i.skewY,g=i.scaleX,m=i.scaleY,h=i.target,p=i.xOrigin,f=i.yOrigin,v=i.xOffset,k=i.yOffset,x=i.forceCSS,S=parseFloat(o),y=parseFloat(l),T,L,b,M,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=x0,d*=x0,T=Math.cos(c)*g,L=Math.sin(c)*g,b=Math.sin(c-d)*-m,M=Math.cos(c-d)*m,d&&(u*=x0,C=Math.tan(d-u),C=Math.sqrt(1+C*C),b*=C,M*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),T*=C,L*=C)),T=pe(T),L=pe(L),b=pe(b),M=pe(M)):(T=g,M=m,L=b=0),(S&&!~(o+"").indexOf("px")||y&&!~(l+"").indexOf("px"))&&(S=Bi(h,"x",o,"px"),y=Bi(h,"y",l,"px")),(p||f||v||k)&&(S=pe(S+p-(p*T+f*b)+v),y=pe(y+f-(p*L+f*M)+k)),(n||s)&&(C=h.getBBox(),S=pe(S+n/100*C.width),y=pe(y+s/100*C.height)),C="matrix("+T+","+L+","+b+","+M+","+S+","+y+")",h.setAttribute("transform",C),x&&(h.style[he]=C)},xc=function(t,r,i,n,s){var o=360,l=Me(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?$i:1),d=c-n,u=n+d+"deg",g,m;return l&&(g=s.split("_")[1],g==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),g==="cw"&&d<0?d=(d+o*Qo)%o-~~(d/o)*o:g==="ccw"&&d>0&&(d=(d-o*Qo)%o-~~(d/o)*o)),t._pt=m=new rt(t._pt,r,i,n,d,sc),m.e=u,m.u="deg",t._props.push(i),m},sa=function(t,r){for(var i in r)t[i]=r[i];return t},kc=function(t,r,i){var n=sa({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,l,c,d,u,g,m,h,p;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),o[he]=r,l=Z0(i,1),Ki(i,he),i.setAttribute("transform",d)):(d=getComputedStyle(i)[he],o[he]=r,l=Z0(i,1),o[he]=d);for(c in di)d=n[c],u=l[c],d!==u&&s.indexOf(c)<0&&(h=qe(d),p=qe(u),g=h!==p?Bi(i,c,d,p):parseFloat(d),m=parseFloat(u),t._pt=new rt(t._pt,l,c,g,m-g,ds),t._pt.u=p||0,t._props.push(c));sa(l,n)};it("padding,margin,Width,Radius",function(a,t){var r="Top",i="Right",n="Bottom",s="Left",o=(t<3?[r,i,n,s]:[r+s,r+i,n+i,n+s]).map(function(l){return t<2?a+l:"border"+l+a});qr[t>1?"border"+a:a]=function(l,c,d,u,g){var m,h;if(arguments.length<4)return m=o.map(function(p){return ci(l,p,d)}),h=m.join(" "),h.split(m[0]).length===5?m[0]:h;m=(u+"").split(" "),h={},o.forEach(function(p,f){return h[p]=m[f]=m[f]||m[(f-1)/2|0]}),l.init(c,h,g)}});var vs={name:"css",register:hs,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,i,n,s){var o=this._props,l=t.style,c=i.vars.startAt,d,u,g,m,h,p,f,v,k,x,S,y,T,L,b,M;gs||hs(),this.styles=this.styles||ca(t),M=this.styles.props,this.tween=i;for(f in r)if(f!=="autoRound"&&(u=r[f],!(ht[f]&&rs(f,r,i,n,t,s)))){if(h=typeof u,p=qr[f],h==="function"&&(u=u.call(i,n,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=w0(u)),p)p(this,t,f,u,i)&&(b=1);else if(f.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",ai.lastIndex=0,ai.test(d)||(v=qe(d),k=qe(u)),k?v!==k&&(d=Bi(t,f,d,k)+k):v&&(u+=v),this.add(l,"setProperty",d,u,n,s,0,0,f),o.push(f),M.push(f,0,l[f]);else if(h!=="undefined"){if(c&&f in c?(d=typeof c[f]=="function"?c[f].call(i,n,t,s):c[f],Me(d)&&~d.indexOf("random(")&&(d=w0(d)),qe(d+"")||d==="auto"||(d+=mt.units[f]||qe(ci(t,f))||""),(d+"").charAt(1)==="="&&(d=ci(t,f))):d=ci(t,f),m=parseFloat(d),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),g=parseFloat(u),f in Kt&&(f==="autoAlpha"&&(m===1&&ci(t,"visibility")==="hidden"&&g&&(m=0),M.push("visibility",0,l.visibility),Mi(this,l,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),f!=="scale"&&f!=="transform"&&(f=Kt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),S=f in di,S){if(this.styles.save(f),y||(T=t._gsap,T.renderTransform&&!r.parseTransform||Z0(t,r.parseTransform),L=r.smoothOrigin!==!1&&T.smooth,y=this._pt=new rt(this._pt,l,he,0,1,T.renderTransform,T,0,-1),y.dep=1),f==="scale")this._pt=new rt(this._pt,T,"scaleY",T.scaleY,(x?Wi(T.scaleY,x+g):g)-T.scaleY||0,ds),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){M.push(pt,0,l[pt]),u=vc(u),T.svg?fs(t,u,0,L,0,this):(k=parseFloat(u.split(" ")[2])||0,k!==T.zOrigin&&Mi(this,T,"zOrigin",T.zOrigin,k),Mi(this,l,f,Hr(d),Hr(u)));continue}else if(f==="svgOrigin"){fs(t,u,1,L,0,this);continue}else if(f in fa){xc(this,T,f,m,x?Wi(m,x+u):u);continue}else if(f==="smoothOrigin"){Mi(this,T,"smooth",T.smooth,u);continue}else if(f==="force3D"){T[f]=u;continue}else if(f==="transform"){kc(this,u,t);continue}}else f in l||(f=k0(f)||f);if(S||(g||g===0)&&(m||m===0)&&!nc.test(u)&&f in l)v=(d+"").substr((m+"").length),g||(g=0),k=qe(u)||(f in mt.units?mt.units[f]:v),v!==k&&(m=Bi(t,f,d,k)),this._pt=new rt(this._pt,S?T:l,f,m,(x?Wi(m,x+g):g)-m,!S&&(k==="px"||f==="zIndex")&&r.autoRound!==!1?ac:ds),this._pt.u=k||0,v!==k&&k!=="%"&&(this._pt.b=d,this._pt.r=oc);else if(f in l)_c.call(this,t,f,d,x?x+u:u);else if(f in t)this.add(t,f,d||t[f],x?x+u:u,n,s);else if(f!=="parseTransform"){Or(f,u);continue}S||(f in l?M.push(f,0,l[f]):typeof t[f]=="function"?M.push(f,2,t[f]()):M.push(f,1,d||t[f])),o.push(f)}}b&&ls(this)},render:function(t,r){if(r.tween._time||!ms())for(var i=r._pt;i;)i.r(t,i.d),i=i._next;else r.styles.revert()},get:ci,aliases:Kt,getSetter:function(t,r,i){var n=Kt[r];return n&&n.indexOf(",")<0&&(r=n),r in di&&r!==pt&&(t._gsap.x||ci(t,"x"))?i&&Ko===i?r==="scale"?uc:dc:(Ko=i||{})&&(r==="scale"?hc:fc):t.style&&!Ar(t.style[r])?lc:~r.indexOf("-")?cc:Nr(t,r)},core:{_removeProperty:Ki,_getMatrix:_s}};Ue.utils.checkPrefix=k0;Ue.core.getStyleSaver=ca;(function(a,t,r,i){var n=it(a+","+t+","+r,function(s){di[s]=1});it(t,function(s){mt.units[s]="deg",fa[s]=1}),Kt[n[13]]=a+","+t,it(i,function(s){var o=s.split(":");Kt[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){mt.units[a]="px"});Ue.registerPlugin(vs);var Ii=Ue.registerPlugin(vs)||Ue,Od=Ii.core.Tween;function pa(a,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function Tc(a,t,r){return t&&pa(a.prototype,t),r&&pa(a,r),a}var He,Xr,Sc,St,Pi,zi,S0,va,Qi,tr,wa,ui,Vt,ya,ba=function(){return He||typeof window<"u"&&(He=window.gsap)&&He.registerPlugin&&He},xa=1,T0=[],V=[],Yt=[],ir=Date.now,ws=function(t,r){return r},Cc=function(){var t=tr.core,r=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,V),n.push.apply(n,Yt),V=i,Yt=n,ws=function(o,l){return r[o](l)}},fi=function(t,r){return~Yt.indexOf(t)&&Yt[Yt.indexOf(t)+1][r]},rr=function(t){return!!~wa.indexOf(t)},st=function(t,r,i,n,s){return t.addEventListener(r,i,{passive:n!==!1,capture:!!s})},nt=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},Vr="scrollLeft",Yr="scrollTop",ys=function(){return ui&&ui.isPressed||V.cache++},Wr=function(t,r){var i=function n(s){if(s||s===0){xa&&(St.history.scrollRestoration="manual");var o=ui&&ui.isPressed;s=n.v=Math.round(s)||(ui&&ui.iOS?1:0),t(s),n.cacheID=V.cache,o&&ws("ss",s)}else(r||V.cache!==n.cacheID||ws("ref"))&&(n.cacheID=V.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},je={s:Vr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wr(function(a){return arguments.length?St.scrollTo(a,Ce.sc()):St.pageXOffset||Pi[Vr]||zi[Vr]||S0[Vr]||0})},Ce={s:Yr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:je,sc:Wr(function(a){return arguments.length?St.scrollTo(je.sc(),a):St.pageYOffset||Pi[Yr]||zi[Yr]||S0[Yr]||0})},ot=function(t,r){return(r&&r._ctx&&r._ctx.selector||He.utils.toArray)(t)[0]||(typeof t=="string"&&He.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},hi=function(t,r){var i=r.s,n=r.sc;rr(t)&&(t=Pi.scrollingElement||zi);var s=V.indexOf(t),o=n===Ce.sc?1:2;!~s&&(s=V.push(t)-1),V[s+o]||st(t,"scroll",ys);var l=V[s+o],c=l||(V[s+o]=Wr(fi(t,i),!0)||(rr(t)?n:Wr(function(d){return arguments.length?t[i]=d:t[i]})));return c.target=t,l||(c.smooth=He.getProperty(t,"scrollBehavior")==="smooth"),c},Gr=function(t,r,i){var n=t,s=t,o=ir(),l=o,c=r||50,d=Math.max(500,c*3),u=function(p,f){var v=ir();f||v-o>c?(s=n,n=p,l=o,o=v):i?n+=p:n=s+(p-s)/(v-l)*(o-l)},g=function(){s=n=i?0:n,l=o=0},m=function(p){var f=l,v=s,k=ir();return(p||p===0)&&p!==n&&u(p),o===l||k-l>d?0:(n+(i?v:-v))/((i?k:o)-f)*1e3};return{update:u,reset:g,getVelocity:m}},er=function(t,r){return r&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_a=function(t){var r=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(r)>=Math.abs(i)?r:i},ka=function(){tr=He.core.globals().ScrollTrigger,tr&&tr.core&&Cc()},Ta=function(t){return He=t||ba(),!Xr&&He&&typeof document<"u"&&document.body&&(St=window,Pi=document,zi=Pi.documentElement,S0=Pi.body,wa=[St,Pi,zi,S0],Sc=He.utils.clamp,ya=He.core.context||function(){},Qi="onpointerenter"in S0?"pointer":"mouse",va=_e.isTouch=St.matchMedia&&St.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in St||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vt=_e.eventTypes=("ontouchstart"in zi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xa=0},500),ka(),Xr=1),Xr};je.op=Ce;V.cache=0;var _e=function(){function a(r){this.init(r)}var t=a.prototype;return t.init=function(i){Xr||Ta(He)||console.warn("Please gsap.registerPlugin(Observer)"),tr||ka();var n=i.tolerance,s=i.dragMinimum,o=i.type,l=i.target,c=i.lineHeight,d=i.debounce,u=i.preventDefault,g=i.onStop,m=i.onStopDelay,h=i.ignore,p=i.wheelSpeed,f=i.event,v=i.onDragStart,k=i.onDragEnd,x=i.onDrag,S=i.onPress,y=i.onRelease,T=i.onRight,L=i.onLeft,b=i.onUp,M=i.onDown,C=i.onChangeX,E=i.onChangeY,D=i.onChange,B=i.onToggleX,U=i.onToggleY,W=i.onHover,K=i.onHoverEnd,j=i.onMove,O=i.ignoreCheck,Z=i.isNormalizer,oe=i.onGestureStart,_=i.onGestureEnd,ae=i.onWheel,Qe=i.onEnable,Dt=i.onDisable,fe=i.onClick,Oe=i.scrollSpeed,Ze=i.capture,ke=i.allowClicks,et=i.lockAxis,Ve=i.onLockAxis;this.target=l=ot(l)||zi,this.vars=i,h&&(h=He.utils.toArray(h)),n=n||1e-9,s=s||0,p=p||1,Oe=Oe||1,o=o||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(St.getComputedStyle(S0).lineHeight)||22);var _i,tt,dt,Q,ve,ut,_t,w=this,vt=0,ti=0,vi=i.passive||!u&&i.passive!==!1,we=hi(l,je),ii=hi(l,Ce),wi=we(),Di=ii(),Ie=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Vt[0]==="pointerdown",yi=rr(l),ye=l.ownerDocument||Pi,Rt=[0,0,0],Mt=[0,0,0],ri=0,z0=function(){return ri=ir()},Te=function(A,ee){return(w.event=A)&&h&&~h.indexOf(A.target)||ee&&Ie&&A.pointerType!=="touch"||O&&O(A,ee)},wr=function(){w._vx.reset(),w._vy.reset(),tt.pause(),g&&g(w)},ni=function(){var A=w.deltaX=_a(Rt),ee=w.deltaY=_a(Mt),I=Math.abs(A)>=n,R=Math.abs(ee)>=n;D&&(I||R)&&D(w,A,ee,Rt,Mt),I&&(T&&w.deltaX>0&&T(w),L&&w.deltaX<0&&L(w),C&&C(w),B&&w.deltaX<0!=vt<0&&B(w),vt=w.deltaX,Rt[0]=Rt[1]=Rt[2]=0),R&&(M&&w.deltaY>0&&M(w),b&&w.deltaY<0&&b(w),E&&E(w),U&&w.deltaY<0!=ti<0&&U(w),ti=w.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(Q||dt)&&(j&&j(w),dt&&(v&&dt===1&&v(w),x&&x(w),dt=0),Q=!1),ut&&!(ut=!1)&&Ve&&Ve(w),ve&&(ae(w),ve=!1),_i=0},c0=function(A,ee,I){Rt[I]+=A,Mt[I]+=ee,w._vx.update(A),w._vy.update(ee),d?_i||(_i=requestAnimationFrame(ni)):ni()},d0=function(A,ee){et&&!_t&&(w.axis=_t=Math.abs(A)>Math.abs(ee)?"x":"y",ut=!0),_t!=="y"&&(Rt[2]+=A,w._vx.update(A,!0)),_t!=="x"&&(Mt[2]+=ee,w._vy.update(ee,!0)),d?_i||(_i=requestAnimationFrame(ni)):ni()},bi=function(A){if(!Te(A,1)){A=er(A,u);var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y,F=w.isDragging;w.x=ee,w.y=I,(F||(R||z)&&(Math.abs(w.startX-ee)>=s||Math.abs(w.startY-I)>=s))&&(dt=F?2:1,F||(w.isDragging=!0),d0(R,z))}},Ri=w.onPress=function(N){Te(N,1)||N&&N.button||(w.axis=_t=null,tt.pause(),w.isPressed=!0,N=er(N),vt=ti=0,w.startX=w.x=N.clientX,w.startY=w.y=N.clientY,w._vx.reset(),w._vy.reset(),st(Z?l:ye,Vt[1],bi,vi,!0),w.deltaX=w.deltaY=0,S&&S(w))},G=w.onRelease=function(N){if(!Te(N,1)){nt(Z?l:ye,Vt[1],bi,!0);var A=!isNaN(w.y-w.startY),ee=w.isDragging,I=ee&&(Math.abs(w.x-w.startX)>3||Math.abs(w.y-w.startY)>3),R=er(N);!I&&A&&(w._vx.reset(),w._vy.reset(),u&&ke&&He.delayedCall(.08,function(){if(ir()-ri>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(ye.createEvent){var z=ye.createEvent("MouseEvents");z.initMouseEvent("click",!0,!0,St,1,R.screenX,R.screenY,R.clientX,R.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(z)}}})),w.isDragging=w.isGesturing=w.isPressed=!1,g&&ee&&!Z&&tt.restart(!0),dt&&ni(),k&&ee&&k(w),y&&y(w,I)}},Fi=function(A){return A.touches&&A.touches.length>1&&(w.isGesturing=!0)&&oe(A,w.isDragging)},Ft=function(){return(w.isGesturing=!1)||_(w)},Nt=function(A){if(!Te(A)){var ee=we(),I=ii();c0((ee-wi)*Oe,(I-Di)*Oe,1),wi=ee,Di=I,g&&tt.restart(!0)}},qt=function(A){if(!Te(A)){A=er(A,u),ae&&(ve=!0);var ee=(A.deltaMode===1?c:A.deltaMode===2?St.innerHeight:1)*p;c0(A.deltaX*ee,A.deltaY*ee,0),g&&!Z&&tt.restart(!0)}},Ni=function(A){if(!Te(A)){var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y;w.x=ee,w.y=I,Q=!0,g&&tt.restart(!0),(R||z)&&d0(R,z)}},u0=function(A){w.event=A,W(w)},si=function(A){w.event=A,K(w)},A0=function(A){return Te(A)||er(A,u)&&fe(w)};tt=w._dc=He.delayedCall(m||.25,wr).pause(),w.deltaX=w.deltaY=0,w._vx=Gr(0,50,!0),w._vy=Gr(0,50,!0),w.scrollX=we,w.scrollY=ii,w.isDragging=w.isGesturing=w.isPressed=!1,ya(this),w.enable=function(N){return w.isEnabled||(st(yi?ye:l,"scroll",ys),o.indexOf("scroll")>=0&&st(yi?ye:l,"scroll",Nt,vi,Ze),o.indexOf("wheel")>=0&&st(l,"wheel",qt,vi,Ze),(o.indexOf("touch")>=0&&va||o.indexOf("pointer")>=0)&&(st(l,Vt[0],Ri,vi,Ze),st(ye,Vt[2],G),st(ye,Vt[3],G),ke&&st(l,"click",z0,!0,!0),fe&&st(l,"click",A0),oe&&st(ye,"gesturestart",Fi),_&&st(ye,"gestureend",Ft),W&&st(l,Qi+"enter",u0),K&&st(l,Qi+"leave",si),j&&st(l,Qi+"move",Ni)),w.isEnabled=!0,w.isDragging=w.isGesturing=w.isPressed=Q=dt=!1,w._vx.reset(),w._vy.reset(),wi=we(),Di=ii(),N&&N.type&&Ri(N),Qe&&Qe(w)),w},w.disable=function(){w.isEnabled&&(T0.filter(function(N){return N!==w&&rr(N.target)}).length||nt(yi?ye:l,"scroll",ys),w.isPressed&&(w._vx.reset(),w._vy.reset(),nt(Z?l:ye,Vt[1],bi,!0)),nt(yi?ye:l,"scroll",Nt,Ze),nt(l,"wheel",qt,Ze),nt(l,Vt[0],Ri,Ze),nt(ye,Vt[2],G),nt(ye,Vt[3],G),nt(l,"click",z0,!0),nt(l,"click",A0),nt(ye,"gesturestart",Fi),nt(ye,"gestureend",Ft),nt(l,Qi+"enter",u0),nt(l,Qi+"leave",si),nt(l,Qi+"move",Ni),w.isEnabled=w.isPressed=w.isDragging=!1,Dt&&Dt(w))},w.kill=w.revert=function(){w.disable();var N=T0.indexOf(w);N>=0&&T0.splice(N,1),ui===w&&(ui=0)},T0.push(w),Z&&rr(l)&&(ui=w),w.enable(f)},Tc(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();_e.version="3.12.7";_e.create=function(a){return new _e(a)};_e.register=Ta;_e.getAll=function(){return T0.slice()};_e.getById=function(a){return T0.filter(function(t){return t.vars.id===a})[0]};ba()&&He.registerPlugin(_e);var P,E0,X,se,Et,te,Os,cn,pr,dr,sr,Ur,$e,fn,Es,lt,Sa,Ca,M0,Va,bs,Ya,at,Ms,Xa,Wa,Ai,Bs,Ds,B0,Rs,dn,Is,xs,jr=1,Je=Date.now,ks=Je(),Ot=0,or=0,La=function(t,r,i){var n=Lt(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+r+"Clamp"]=n,n?t.substr(6,t.length-7):t},Ea=function(t,r){return r&&(!Lt(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Lc=function a(){return or&&requestAnimationFrame(a)},Ma=function(){return fn=1},Ba=function(){return fn=0},Zt=function(t){return t},ar=function(t){return Math.round(t*1e5)/1e5||0},Ga=function(){return typeof window<"u"},Ua=function(){return P||Ga()&&(P=window.gsap)&&P.registerPlugin&&P},n0=function(t){return!!~Os.indexOf(t)},ja=function(t){return(t==="Height"?Rs:X["inner"+t])||Et["client"+t]||te["client"+t]},$a=function(t){return fi(t,"getBoundingClientRect")||(n0(t)?function(){return ln.width=X.innerWidth,ln.height=Rs,ln}:function(){return gi(t)})},Ec=function(t,r,i){var n=i.d,s=i.d2,o=i.a;return(o=fi(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(r?ja(s):t["client"+s])||0}},Mc=function(t,r){return!r||~Yt.indexOf(t)?$a(t):function(){return ln}},ei=function(t,r){var i=r.s,n=r.d2,s=r.d,o=r.a;return Math.max(0,(i="scroll"+n)&&(o=fi(t,i))?o()-$a(t)()[s]:n0(t)?(Et[i]||te[i])-ja(n):t[i]-t["offset"+n])},$r=function(t,r){for(var i=0;i<M0.length;i+=3)(!r||~r.indexOf(M0[i+1]))&&t(M0[i],M0[i+1],M0[i+2])},Lt=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},lr=function(t){return typeof t=="number"},Zi=function(t){return typeof t=="object"},nr=function(t,r,i){return t&&t.progress(r?0:1)&&i&&t.pause()},Ts=function(t,r){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return r(t)}):r(t);i&&i.totalTime&&(t.callbackAnimation=i)}},C0=Math.abs,Ja="left",Ka="top",Fs="right",Ns="bottom",t0="width",i0="height",ur="Right",hr="Left",fr="Top",gr="Bottom",Le="padding",zt="margin",P0="Width",qs="Height",Be="px",At=function(t){return X.getComputedStyle(t)},Bc=function(t){var r=At(t).position;t.style.position=r==="absolute"||r==="fixed"?r:"relative"},Ia=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},gi=function(t,r){var i=r&&At(t)[Es]!=="matrix(1, 0, 0, 1, 0, 0)"&&P.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return i&&i.progress(0).kill(),n},un=function(t,r){var i=r.d2;return t["offset"+i]||t["client"+i]||0},Qa=function(t){var r=[],i=t.labels,n=t.duration(),s;for(s in i)r.push(i[s]/n);return r},Ic=function(t){return function(r){return P.utils.snap(Qa(t),r)}},Hs=function(t){var r=P.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var l;if(!s)return r(n);if(s>0){for(n-=o,l=0;l<i.length;l++)if(i[l]>=n)return i[l];return i[l-1]}else for(l=i.length,n+=o;l--;)if(i[l]<=n)return i[l];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var l=r(n);return!s||Math.abs(l-n)<o||l-n<0==s<0?l:r(s<0?n-t:n+t)}},Pc=function(t){return function(r,i){return Hs(Qa(t))(r,i.direction)}},Jr=function(t,r,i,n){return i.split(",").forEach(function(s){return t(r,s,n)})},Ae=function(t,r,i,n,s){return t.addEventListener(r,i,{passive:!n,capture:!!s})},ze=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},Kr=function(t,r,i){i=i&&i.wheelHandler,i&&(t(r,"wheel",i),t(r,"touchmove",i))},Pa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qr={toggleActions:"play",anticipatePin:0},hn={top:0,left:0,center:.5,bottom:1,right:1},nn=function(t,r){if(Lt(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=r/100),t=t.substr(0,i-1)),t=n+(t in hn?hn[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0)}return t},Zr=function(t,r,i,n,s,o,l,c){var d=s.startColor,u=s.endColor,g=s.fontSize,m=s.indent,h=s.fontWeight,p=se.createElement("div"),f=n0(i)||fi(i,"pinType")==="fixed",v=t.indexOf("scroller")!==-1,k=f?te:i,x=t.indexOf("start")!==-1,S=x?d:u,y="border-color:"+S+";font-size:"+g+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((v||c)&&f?"fixed;":"absolute;"),(v||c||!f)&&(y+=(n===Ce?Fs:Ns)+":"+(o+parseFloat(m))+"px;"),l&&(y+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(r?" marker-"+r:"")),p.style.cssText=y,p.innerText=r||r===0?t+"-"+r:t,k.children[0]?k.insertBefore(p,k.children[0]):k.appendChild(p),p._offset=p["offset"+n.op.d2],sn(p,0,n,x),p},sn=function(t,r,i,n){var s={display:"block"},o=i[n?"os2":"p2"],l=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+P0]=1,s["border"+l+P0]=0,s[i.p]=r+"px",P.set(t,s)},Y=[],Ps={},_r,za=function(){return Je()-Ot>34&&(_r||(_r=requestAnimationFrame(mi)))},L0=function(){(!at||!at.isPressed||at.startX>te.clientWidth)&&(V.cache++,at?_r||(_r=requestAnimationFrame(mi)):mi(),Ot||o0("scrollStart"),Ot=Je())},Ss=function(){Wa=X.innerWidth,Xa=X.innerHeight},cr=function(t){V.cache++,(t===!0||!$e&&!Ya&&!se.fullscreenElement&&!se.webkitFullscreenElement&&(!Ms||Wa!==X.innerWidth||Math.abs(X.innerHeight-Xa)>X.innerHeight*.25))&&cn.restart(!0)},s0={},zc=[],Za=function a(){return ze(q,"scrollEnd",a)||e0(!0)},o0=function(t){return s0[t]&&s0[t].map(function(r){return r()})||zc},Ct=[],e1=function(t){for(var r=0;r<Ct.length;r+=5)(!t||Ct[r+4]&&Ct[r+4].query===t)&&(Ct[r].style.cssText=Ct[r+1],Ct[r].getBBox&&Ct[r].setAttribute("transform",Ct[r+2]||""),Ct[r+3].uncache=1)},Vs=function(t,r){var i;for(lt=0;lt<Y.length;lt++)i=Y[lt],i&&(!r||i._ctx===r)&&(t?i.kill(1):i.revert(!0,!0));dn=!0,r&&e1(r),r||o0("revert")},t1=function(t,r){V.cache++,(r||!ct)&&V.forEach(function(i){return Ke(i)&&i.cacheID++&&(i.rec=0)}),Lt(t)&&(X.history.scrollRestoration=Ds=t)},ct,r0=0,Aa,Ac=function(){if(Aa!==r0){var t=Aa=r0;requestAnimationFrame(function(){return t===r0&&e0(!0)})}},i1=function(){te.appendChild(B0),Rs=!at&&B0.offsetHeight||X.innerHeight,te.removeChild(B0)},Oa=function(t){return pr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=t?"none":"block"})},e0=function(t,r){if(Et=se.documentElement,te=se.body,Os=[X,se,Et,te],Ot&&!t&&!dn){Ae(q,"scrollEnd",Za);return}i1(),ct=q.isRefreshing=!0,V.forEach(function(n){return Ke(n)&&++n.cacheID&&(n.rec=n())});var i=o0("refreshInit");Va&&q.sort(),r||Vs(),V.forEach(function(n){Ke(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Y.slice(0).forEach(function(n){return n.refresh()}),dn=!1,Y.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Is=1,Oa(!0),Y.forEach(function(n){var s=ei(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,l=n._startClamp&&n.start>=s;(o||l)&&n.setPositions(l?s-1:n.start,o?Math.max(l?s:n.start+1,s):n.end,!0)}),Oa(!1),Is=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),V.forEach(function(n){Ke(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),t1(Ds,1),cn.pause(),r0++,ct=2,mi(2),Y.forEach(function(n){return Ke(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ct=q.isRefreshing=!1,o0("refresh")},zs=0,on=1,mr,mi=function(t){if(t===2||!ct&&!dn){q.isUpdating=!0,mr&&mr.update(0);var r=Y.length,i=Je(),n=i-ks>=50,s=r&&Y[0].scroll();if(on=zs>s?-1:1,ct||(zs=s),n&&(Ot&&!fn&&i-Ot>200&&(Ot=0,o0("scrollEnd")),sr=ks,ks=i),on<0){for(lt=r;lt-- >0;)Y[lt]&&Y[lt].update(0,n);on=1}else for(lt=0;lt<r;lt++)Y[lt]&&Y[lt].update(0,n);q.isUpdating=!1}_r=0},As=[Ja,Ka,Ns,Fs,zt+gr,zt+ur,zt+fr,zt+hr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],an=As.concat([t0,i0,"boxSizing","max"+P0,"max"+qs,"position",zt,Le,Le+fr,Le+ur,Le+gr,Le+hr]),Oc=function(t,r,i){I0(i);var n=t._gsap;if(n.spacerIsNative)I0(n.spacerState);else if(t._gsap.swappedIn){var s=r.parentNode;s&&(s.insertBefore(t,r),s.removeChild(r))}t._gsap.swappedIn=!1},Cs=function(t,r,i,n){if(!t._gsap.swappedIn){for(var s=As.length,o=r.style,l=t.style,c;s--;)c=As[s],o[c]=i[c];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),l[Ns]=l[Fs]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[t0]=un(t,je)+Be,o[i0]=un(t,Ce)+Be,o[Le]=l[zt]=l[Ka]=l[Ja]="0",I0(n),l[t0]=l["max"+P0]=i[t0],l[i0]=l["max"+qs]=i[i0],l[Le]=i[Le],t.parentNode!==r&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),t._gsap.swappedIn=!0}},Dc=/([A-Z])/g,I0=function(t){if(t){var r=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||P.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?r[s]=o:r[s]&&r.removeProperty(s.replace(Dc,"-$1").toLowerCase())}},en=function(t){for(var r=an.length,i=t.style,n=[],s=0;s<r;s++)n.push(an[s],i[an[s]]);return n.t=t,n},Rc=function(t,r,i){for(var n=[],s=t.length,o=i?8:0,l;o<s;o+=2)l=t[o],n.push(l,l in r?r[l]:t[o+1]);return n.t=t.t,n},ln={left:0,top:0},Da=function(t,r,i,n,s,o,l,c,d,u,g,m,h,p){Ke(t)&&(t=t(c)),Lt(t)&&t.substr(0,3)==="max"&&(t=m+(t.charAt(4)==="="?nn("0"+t.substr(3),i):0));var f=h?h.time():0,v,k,x;if(h&&h.seek(0),isNaN(t)||(t=+t),lr(t))h&&(t=P.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,m,t)),l&&sn(l,i,n,!0);else{Ke(r)&&(r=r(c));var S=(t||"0").split(" "),y,T,L,b;x=ot(r,c)||te,y=gi(x)||{},(!y||!y.left&&!y.top)&&At(x).display==="none"&&(b=x.style.display,x.style.display="block",y=gi(x),b?x.style.display=b:x.style.removeProperty("display")),T=nn(S[0],y[n.d]),L=nn(S[1]||"0",i),t=y[n.p]-d[n.p]-u+T+s-L,l&&sn(l,L,n,i-L<20||l._isStart&&L>20),i-=i-L}if(p&&(c[p]=t||-.001,t<0&&(t=0)),o){var M=t+i,C=o._isStart;v="scroll"+n.d2,sn(o,M,n,C&&M>20||!C&&(g?Math.max(te[v],Et[v]):o.parentNode[v])<=M+1),g&&(d=gi(l),g&&(o.style[n.op.p]=d[n.op.p]-n.op.m-o._offset+Be))}return h&&x&&(v=gi(x),h.seek(m),k=gi(x),h._caScrollDist=v[n.p]-k[n.p],t=t/h._caScrollDist*m),h&&h.seek(f),h?t:Math.round(t)},Fc=/(webkit|moz|length|cssText|inset)/i,Ra=function(t,r,i,n){if(t.parentNode!==r){var s=t.style,o,l;if(r===te){t._stOrig=s.cssText,l=At(t);for(o in l)!+o&&!Fc.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;P.core.getCache(t).uncache=1,r.appendChild(t)}},r1=function(t,r,i){var n=r,s=n;return function(o){var l=Math.round(t());return l!==n&&l!==s&&Math.abs(l-n)>3&&Math.abs(l-s)>3&&(o=l,i&&i()),s=n,n=Math.round(o),n}},tn=function(t,r,i){var n={};n[r.p]="+="+i,P.set(t,n)},Fa=function(t,r){var i=hi(t,r),n="_scroll"+r.p2,s=function o(l,c,d,u,g){var m=o.tween,h=c.onComplete,p={};d=d||i();var f=r1(i,d,function(){m.kill(),o.tween=0});return g=u&&g||0,u=u||l-d,m&&m.kill(),c[n]=l,c.inherit=!1,c.modifiers=p,p[n]=function(){return f(d+u*m.ratio+g*m.ratio*m.ratio)},c.onUpdate=function(){V.cache++,o.tween&&mi()},c.onComplete=function(){o.tween=0,h&&h.call(m)},m=o.tween=P.to(t,c),m};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ae(t,"wheel",i.wheelHandler),q.isTouch&&Ae(t,"touchmove",i.wheelHandler),s},q=function(){function a(r,i){E0||a.register(P)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bs(this),this.init(r,i)}var t=a.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!or){this.update=this.refresh=this.kill=Zt;return}i=Ia(Lt(i)||lr(i)||i.nodeType?{trigger:i}:i,Qr);var s=i,o=s.onUpdate,l=s.toggleClass,c=s.id,d=s.onToggle,u=s.onRefresh,g=s.scrub,m=s.trigger,h=s.pin,p=s.pinSpacing,f=s.invalidateOnRefresh,v=s.anticipatePin,k=s.onScrubComplete,x=s.onSnapComplete,S=s.once,y=s.snap,T=s.pinReparent,L=s.pinSpacer,b=s.containerAnimation,M=s.fastScrollEnd,C=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?je:Ce,D=!g&&g!==0,B=ot(i.scroller||X),U=P.core.getCache(B),W=n0(B),K=("pinType"in i?i.pinType:fi(B,"pinType")||W&&"fixed")==="fixed",j=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=D&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Qr.markers,oe=W?0:parseFloat(At(B)["border"+E.p2+P0])||0,_=this,ae=i.onRefreshInit&&function(){return i.onRefreshInit(_)},Qe=Ec(B,W,E),Dt=Mc(B,W),fe=0,Oe=0,Ze=0,ke=hi(B,E),et,Ve,_i,tt,dt,Q,ve,ut,_t,w,vt,ti,vi,we,ii,wi,Di,Ie,yi,ye,Rt,Mt,ri,z0,Te,wr,ni,c0,d0,bi,Ri,G,Fi,Ft,Nt,qt,Ni,u0,si;if(_._startClamp=_._endClamp=!1,_._dir=E,v*=45,_.scroller=B,_.scroll=b?b.time.bind(b):ke,tt=ke(),_.vars=i,n=n||i.animation,"refreshPriority"in i&&(Va=1,i.refreshPriority===-9999&&(mr=_)),U.tweenScroll=U.tweenScroll||{top:Fa(B,Ce),left:Fa(B,je)},_.tweenTo=et=U.tweenScroll[E.p],_.scrubDuration=function(I){Fi=lr(I)&&I,Fi?G?G.duration(I):G=P.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fi,paused:!0,onComplete:function(){return k&&k(_)}}):(G&&G.progress(1).kill(),G=0)},n&&(n.vars.lazy=!1,n._initted&&!_.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),_.animation=n.pause(),n.scrollTrigger=_,_.scrubDuration(g),bi=0,c||(c=n.vars.id)),y&&((!Zi(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in te.style&&P.set(W?[te,Et]:B,{scrollBehavior:"auto"}),V.forEach(function(I){return Ke(I)&&I.target===(W?se.scrollingElement||Et:B)&&(I.smooth=!1)}),_i=Ke(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ic(n):y.snapTo==="labelsDirectional"?Pc(n):y.directional!==!1?function(I,R){return Hs(y.snapTo)(I,Je()-Oe<500?0:R.direction)}:P.utils.snap(y.snapTo),Ft=y.duration||{min:.1,max:2},Ft=Zi(Ft)?dr(Ft.min,Ft.max):dr(Ft,Ft),Nt=P.delayedCall(y.delay||Fi/2||.1,function(){var I=ke(),R=Je()-Oe<500,z=et.tween;if((R||Math.abs(_.getVelocity())<10)&&!z&&!fn&&fe!==I){var F=(I-Q)/we,Pe=n&&!D?n.totalProgress():F,$=R?0:(Pe-Ri)/(Je()-sr)*1e3||0,be=P.utils.clamp(-F,1-F,C0($/2)*$/.185),Ye=F+(y.inertia===!1?0:be),ge,le,ie=y,Ht=ie.onStart,de=ie.onInterrupt,wt=ie.onComplete;if(ge=_i(Ye,_),lr(ge)||(ge=Ye),le=Math.max(0,Math.round(Q+ge*we)),I<=ve&&I>=Q&&le!==I){if(z&&!z._initted&&z.data<=C0(le-I))return;y.inertia===!1&&(be=ge-F),et(le,{duration:Ft(C0(Math.max(C0(Ye-Pe),C0(ge-Pe))*.185/$/.05||0)),ease:y.ease||"power3",data:C0(le-I),onInterrupt:function(){return Nt.restart(!0)&&de&&de(_)},onComplete:function(){_.update(),fe=ke(),n&&!D&&(G?G.resetTo("totalProgress",ge,n._tTime/n._tDur):n.progress(ge)),bi=Ri=n&&!D?n.totalProgress():_.progress,x&&x(_),wt&&wt(_)}},I,be*we,le-I-be*we),Ht&&Ht(_,et.tween)}}else _.isActive&&fe!==I&&Nt.restart(!0)}).pause()),c&&(Ps[c]=_),m=_.trigger=ot(m||h!==!0&&h),si=m&&m._gsap&&m._gsap.stRevert,si&&(si=si(_)),h=h===!0?m:ot(h),Lt(l)&&(l={targets:m,className:l}),h&&(p===!1||p===zt||(p=!p&&h.parentNode&&h.parentNode.style&&At(h.parentNode).display==="flex"?!1:Le),_.pin=h,Ve=P.core.getCache(h),Ve.spacer?ii=Ve.pinState:(L&&(L=ot(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Ve.spacerIsNative=!!L,L&&(Ve.spacerState=en(L))),Ve.spacer=Ie=L||se.createElement("div"),Ie.classList.add("pin-spacer"),c&&Ie.classList.add("pin-spacer-"+c),Ve.pinState=ii=en(h)),i.force3D!==!1&&P.set(h,{force3D:!0}),_.spacer=Ie=Ve.spacer,d0=At(h),z0=d0[p+E.os2],ye=P.getProperty(h),Rt=P.quickSetter(h,E.a,Be),Cs(h,Ie,d0),Di=en(h)),Z){ti=Zi(Z)?Ia(Z,Pa):Pa,w=Zr("scroller-start",c,B,E,ti,0),vt=Zr("scroller-end",c,B,E,ti,0,w),yi=w["offset"+E.op.d2];var A0=ot(fi(B,"content")||B);ut=this.markerStart=Zr("start",c,A0,E,ti,yi,0,b),_t=this.markerEnd=Zr("end",c,A0,E,ti,yi,0,b),b&&(u0=P.quickSetter([ut,_t],E.a,Be)),!K&&!(Yt.length&&fi(B,"fixedMarkers")===!0)&&(Bc(W?te:B),P.set([w,vt],{force3D:!0}),wr=P.quickSetter(w,E.a,Be),c0=P.quickSetter(vt,E.a,Be))}if(b){var N=b.vars.onUpdate,A=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){_.update(0,0,1),N&&N.apply(b,A||[])})}if(_.previous=function(){return Y[Y.indexOf(_)-1]},_.next=function(){return Y[Y.indexOf(_)+1]},_.revert=function(I,R){if(!R)return _.kill(!0);var z=I!==!1||!_.enabled,F=$e;z!==_.isReverted&&(z&&(qt=Math.max(ke(),_.scroll.rec||0),Ze=_.progress,Ni=n&&n.progress()),ut&&[ut,_t,w,vt].forEach(function(Pe){return Pe.style.display=z?"none":"block"}),z&&($e=_,_.update(z)),h&&(!T||!_.isActive)&&(z?Oc(h,Ie,ii):Cs(h,Ie,At(h),Te)),z||_.update(z),$e=F,_.isReverted=z)},_.refresh=function(I,R,z,F){if(!(($e||!_.enabled)&&!R)){if(h&&I&&Ot){Ae(a,"scrollEnd",Za);return}!ct&&ae&&ae(_),$e=_,et.tween&&!z&&(et.tween.kill(),et.tween=0),G&&G.pause(),f&&n&&n.revert({kill:!1}).invalidate(),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var Pe=Qe(),$=Dt(),be=b?b.duration():ei(B,E),Ye=we<=.01,ge=0,le=F||0,ie=Zi(z)?z.end:i.end,Ht=i.endTrigger||m,de=Zi(z)?z.start:i.start||(i.start===0||!m?0:h?"0 0":"0 100%"),wt=_.pinnedContainer=i.pinnedContainer&&ot(i.pinnedContainer,_),Xt=m&&Math.max(0,Y.indexOf(_))||0,De=Xt,Re,Xe,qi,yr,We,Ee,Wt,bn,js,O0,Gt,D0,br;for(Z&&Zi(z)&&(D0=P.getProperty(w,E.p),br=P.getProperty(vt,E.p));De-- >0;)Ee=Y[De],Ee.end||Ee.refresh(0,1)||($e=_),Wt=Ee.pin,Wt&&(Wt===m||Wt===h||Wt===wt)&&!Ee.isReverted&&(O0||(O0=[]),O0.unshift(Ee),Ee.revert(!0,!0)),Ee!==Y[De]&&(Xt--,De--);for(Ke(de)&&(de=de(_)),de=La(de,"start",_),Q=Da(de,m,Pe,E,ke(),ut,w,_,$,oe,K,be,b,_._startClamp&&"_startClamp")||(h?-.001:0),Ke(ie)&&(ie=ie(_)),Lt(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(Lt(de)?de.split(" ")[0]:"")+ie:(ge=nn(ie.substr(2),Pe),ie=Lt(de)?de:(b?P.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Q):Q)+ge,Ht=m)),ie=La(ie,"end",_),ve=Math.max(Q,Da(ie||(Ht?"100% 0":be),Ht,Pe,E,ke()+ge,_t,vt,_,$,oe,K,be,b,_._endClamp&&"_endClamp"))||-.001,ge=0,De=Xt;De--;)Ee=Y[De],Wt=Ee.pin,Wt&&Ee.start-Ee._pinPush<=Q&&!b&&Ee.end>0&&(Re=Ee.end-(_._startClamp?Math.max(0,Ee.start):Ee.start),(Wt===m&&Ee.start-Ee._pinPush<Q||Wt===wt)&&isNaN(de)&&(ge+=Re*(1-Ee.progress)),Wt===h&&(le+=Re));if(Q+=ge,ve+=ge,_._startClamp&&(_._startClamp+=ge),_._endClamp&&!ct&&(_._endClamp=ve||-.001,ve=Math.min(ve,ei(B,E))),we=ve-Q||(Q-=.01)&&.001,Ye&&(Ze=P.utils.clamp(0,1,P.utils.normalize(Q,ve,qt))),_._pinPush=le,ut&&ge&&(Re={},Re[E.a]="+="+ge,wt&&(Re[E.p]="-="+ke()),P.set([ut,_t],Re)),h&&!(Is&&_.end>=ei(B,E)))Re=At(h),yr=E===Ce,qi=ke(),Mt=parseFloat(ye(E.a))+le,!be&&ve>1&&(Gt=(W?se.scrollingElement||Et:B).style,Gt={style:Gt,value:Gt["overflow"+E.a.toUpperCase()]},W&&At(te)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Gt.style["overflow"+E.a.toUpperCase()]="scroll")),Cs(h,Ie,Re),Di=en(h),Xe=gi(h,!0),bn=K&&hi(B,yr?je:Ce)(),p?(Te=[p+E.os2,we+le+Be],Te.t=Ie,De=p===Le?un(h,E)+we+le:0,De&&(Te.push(E.d,De+Be),Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),I0(Te),wt&&Y.forEach(function(R0){R0.pin===wt&&R0.vars.pinSpacing!==!1&&(R0._subPinOffset=!0)}),K&&ke(qt)):(De=un(h,E),De&&Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),K&&(We={top:Xe.top+(yr?qi-Q:bn)+Be,left:Xe.left+(yr?bn:qi-Q)+Be,boxSizing:"border-box",position:"fixed"},We[t0]=We["max"+P0]=Math.ceil(Xe.width)+Be,We[i0]=We["max"+qs]=Math.ceil(Xe.height)+Be,We[zt]=We[zt+fr]=We[zt+ur]=We[zt+gr]=We[zt+hr]="0",We[Le]=Re[Le],We[Le+fr]=Re[Le+fr],We[Le+ur]=Re[Le+ur],We[Le+gr]=Re[Le+gr],We[Le+hr]=Re[Le+hr],wi=Rc(ii,We,T),ct&&ke(0)),n?(js=n._initted,bs(1),n.render(n.duration(),!0,!0),ri=ye(E.a)-Mt+we+le,ni=Math.abs(we-ri)>1,K&&ni&&wi.splice(wi.length-2,2),n.render(0,!0,!0),js||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),bs(0)):ri=we,Gt&&(Gt.value?Gt.style["overflow"+E.a.toUpperCase()]=Gt.value:Gt.style.removeProperty("overflow-"+E.a));else if(m&&ke()&&!b)for(Xe=m.parentNode;Xe&&Xe!==te;)Xe._pinOffset&&(Q-=Xe._pinOffset,ve-=Xe._pinOffset),Xe=Xe.parentNode;O0&&O0.forEach(function(R0){return R0.revert(!1,!0)}),_.start=Q,_.end=ve,tt=dt=ct?qt:ke(),!b&&!ct&&(tt<qt&&ke(qt),_.scroll.rec=0),_.revert(!1,!0),Oe=Je(),Nt&&(fe=-1,Nt.restart(!0)),$e=0,n&&D&&(n._initted||Ni)&&n.progress()!==Ni&&n.progress(Ni||0,!0).render(n.time(),!0,!0),(Ye||Ze!==_.progress||b||f||n&&!n._initted)&&(n&&!D&&n.totalProgress(b&&Q<-.001&&!Ze?P.utils.normalize(Q,ve,0):Ze,!0),_.progress=Ye||(tt-Q)/we===Ze?0:Ze),h&&p&&(Ie._pinOffset=Math.round(_.progress*ri)),G&&G.invalidate(),isNaN(D0)||(D0-=P.getProperty(w,E.p),br-=P.getProperty(vt,E.p),tn(w,E,D0),tn(ut,E,D0-(F||0)),tn(vt,E,br),tn(_t,E,br-(F||0))),Ye&&!ct&&_.update(),u&&!ct&&!vi&&(vi=!0,u(_),vi=!1)}},_.getVelocity=function(){return(ke()-dt)/(Je()-sr)*1e3||0},_.endAnimation=function(){nr(_.callbackAnimation),n&&(G?G.progress(1):n.paused()?D||nr(n,_.direction<0,1):nr(n,n.reversed()))},_.labelToScroll=function(I){return n&&n.labels&&(Q||_.refresh()||Q)+n.labels[I]/n.duration()*we||0},_.getTrailing=function(I){var R=Y.indexOf(_),z=_.direction>0?Y.slice(0,R).reverse():Y.slice(R+1);return(Lt(I)?z.filter(function(F){return F.vars.preventOverlaps===I}):z).filter(function(F){return _.direction>0?F.end<=Q:F.start>=ve})},_.update=function(I,R,z){if(!(b&&!z&&!I)){var F=ct===!0?qt:_.scroll(),Pe=I?0:(F-Q)/we,$=Pe<0?0:Pe>1?1:Pe||0,be=_.progress,Ye,ge,le,ie,Ht,de,wt,Xt;if(R&&(dt=tt,tt=b?ke():F,y&&(Ri=bi,bi=n&&!D?n.totalProgress():$)),v&&h&&!$e&&!jr&&Ot&&(!$&&Q<F+(F-dt)/(Je()-sr)*v?$=1e-4:$===1&&ve>F+(F-dt)/(Je()-sr)*v&&($=.9999)),$!==be&&_.enabled){if(Ye=_.isActive=!!$&&$<1,ge=!!be&&be<1,de=Ye!==ge,Ht=de||!!$!=!!be,_.direction=$>be?1:-1,_.progress=$,Ht&&!$e&&(le=$&&!be?0:$===1?1:be===1?2:3,D&&(ie=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Xt=n&&(ie==="complete"||ie==="reset"||ie in n))),C&&(de||Xt)&&(Xt||g||!n)&&(Ke(C)?C(_):_.getTrailing(C).forEach(function(qi){return qi.endAnimation()})),D||(G&&!$e&&!jr?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",$,n._tTime/n._tDur):(G.vars.totalProgress=$,G.invalidate().restart())):n&&n.totalProgress($,!!($e&&(Oe||I)))),h){if(I&&p&&(Ie.style[p+E.os2]=z0),!K)Rt(ar(Mt+ri*$));else if(Ht){if(wt=!I&&$>be&&ve+1>F&&F+1>=ei(B,E),T)if(!I&&(Ye||wt)){var De=gi(h,!0),Re=F-Q;Ra(h,te,De.top+(E===Ce?Re:0)+Be,De.left+(E===Ce?0:Re)+Be)}else Ra(h,Ie);I0(Ye||wt?wi:Di),ni&&$<1&&Ye||Rt(Mt+($===1&&!wt?ri:0))}}y&&!et.tween&&!$e&&!jr&&Nt.restart(!0),l&&(de||S&&$&&($<1||!xs))&&pr(l.targets).forEach(function(qi){return qi.classList[Ye||S?"add":"remove"](l.className)}),o&&!D&&!I&&o(_),Ht&&!$e?(D&&(Xt&&(ie==="complete"?n.pause().totalProgress(1):ie==="reset"?n.restart(!0).pause():ie==="restart"?n.restart(!0):n[ie]()),o&&o(_)),(de||!xs)&&(d&&de&&Ts(_,d),j[le]&&Ts(_,j[le]),S&&($===1?_.kill(!1,1):j[le]=0),de||(le=$===1?1:3,j[le]&&Ts(_,j[le]))),M&&!Ye&&Math.abs(_.getVelocity())>(lr(M)?M:2500)&&(nr(_.callbackAnimation),G?G.progress(1):nr(n,ie==="reverse"?1:!$,1))):D&&o&&!$e&&o(_)}if(c0){var Xe=b?F/b.duration()*(b._caScrollDist||0):F;wr(Xe+(w._isFlipped?1:0)),c0(Xe)}u0&&u0(-F/b.duration()*(b._caScrollDist||0))}},_.enable=function(I,R){_.enabled||(_.enabled=!0,Ae(B,"resize",cr),W||Ae(B,"scroll",L0),ae&&Ae(a,"refreshInit",ae),I!==!1&&(_.progress=Ze=0,tt=dt=fe=ke()),R!==!1&&_.refresh())},_.getTween=function(I){return I&&et?et.tween:G},_.setPositions=function(I,R,z,F){if(b){var Pe=b.scrollTrigger,$=b.duration(),be=Pe.end-Pe.start;I=Pe.start+be*I/$,R=Pe.start+be*R/$}_.refresh(!1,!1,{start:Ea(I,z&&!!_._startClamp),end:Ea(R,z&&!!_._endClamp)},F),_.update()},_.adjustPinSpacing=function(I){if(Te&&I){var R=Te.indexOf(E.d)+1;Te[R]=parseFloat(Te[R])+I+Be,Te[1]=parseFloat(Te[1])+I+Be,I0(Te)}},_.disable=function(I,R){if(_.enabled&&(I!==!1&&_.revert(!0,!0),_.enabled=_.isActive=!1,R||G&&G.pause(),qt=0,Ve&&(Ve.uncache=1),ae&&ze(a,"refreshInit",ae),Nt&&(Nt.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!W)){for(var z=Y.length;z--;)if(Y[z].scroller===B&&Y[z]!==_)return;ze(B,"resize",cr),W||ze(B,"scroll",L0)}},_.kill=function(I,R){_.disable(I,R),G&&!R&&G.kill(),c&&delete Ps[c];var z=Y.indexOf(_);z>=0&&Y.splice(z,1),z===lt&&on>0&&lt--,z=0,Y.forEach(function(F){return F.scroller===_.scroller&&(z=1)}),z||ct||(_.scroll.rec=0),n&&(n.scrollTrigger=null,I&&n.revert({kill:!1}),R||n.kill()),ut&&[ut,_t,w,vt].forEach(function(F){return F.parentNode&&F.parentNode.removeChild(F)}),mr===_&&(mr=0),h&&(Ve&&(Ve.uncache=1),z=0,Y.forEach(function(F){return F.pin===h&&z++}),z||(Ve.spacer=0)),i.onKill&&i.onKill(_)},Y.push(_),_.enable(!1,!1),si&&si(_),n&&n.add&&!we){var ee=_.update;_.update=function(){_.update=ee,V.cache++,Q||ve||_.refresh()},P.delayedCall(.01,_.update),we=.01,Q=ve=0}else _.refresh();h&&Ac()},a.register=function(i){return E0||(P=i||Ua(),Ga()&&window.document&&a.enable(),E0=or),E0},a.defaults=function(i){if(i)for(var n in i)Qr[n]=i[n];return Qr},a.disable=function(i,n){or=0,Y.forEach(function(o){return o[n?"kill":"disable"](i)}),ze(X,"wheel",L0),ze(se,"scroll",L0),clearInterval(Ur),ze(se,"touchcancel",Zt),ze(te,"touchstart",Zt),Jr(ze,se,"pointerdown,touchstart,mousedown",Ma),Jr(ze,se,"pointerup,touchend,mouseup",Ba),cn.kill(),$r(ze);for(var s=0;s<V.length;s+=3)Kr(ze,V[s],V[s+1]),Kr(ze,V[s],V[s+2])},a.enable=function(){if(X=window,se=document,Et=se.documentElement,te=se.body,P&&(pr=P.utils.toArray,dr=P.utils.clamp,Bs=P.core.context||Zt,bs=P.core.suppressOverwrites||Zt,Ds=X.history.scrollRestoration||"auto",zs=X.pageYOffset||0,P.core.globals("ScrollTrigger",a),te)){or=1,B0=document.createElement("div"),B0.style.height="100vh",B0.style.position="absolute",i1(),Lc(),_e.register(P),a.isTouch=_e.isTouch,Ai=_e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ms=_e.isTouch===1,Ae(X,"wheel",L0),Os=[X,se,Et,te],P.matchMedia?(a.matchMedia=function(d){var u=P.matchMedia(),g;for(g in d)u.add(g,d[g]);return u},P.addEventListener("matchMediaInit",function(){return Vs()}),P.addEventListener("matchMediaRevert",function(){return e1()}),P.addEventListener("matchMedia",function(){e0(0,1),o0("matchMedia")}),P.matchMedia().add("(orientation: portrait)",function(){return Ss(),Ss})):console.warn("Requires GSAP 3.11.0 or later"),Ss(),Ae(se,"scroll",L0);var i=te.hasAttribute("style"),n=te.style,s=n.borderTopStyle,o=P.core.Animation.prototype,l,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",l=gi(te),Ce.m=Math.round(l.top+Ce.sc())||0,je.m=Math.round(l.left+je.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(te.setAttribute("style",""),te.removeAttribute("style")),Ur=setInterval(za,250),P.delayedCall(.5,function(){return jr=0}),Ae(se,"touchcancel",Zt),Ae(te,"touchstart",Zt),Jr(Ae,se,"pointerdown,touchstart,mousedown",Ma),Jr(Ae,se,"pointerup,touchend,mouseup",Ba),Es=P.utils.checkPrefix("transform"),an.push(Es),E0=Je(),cn=P.delayedCall(.2,e0).pause(),M0=[se,"visibilitychange",function(){var d=X.innerWidth,u=X.innerHeight;se.hidden?(Sa=d,Ca=u):(Sa!==d||Ca!==u)&&cr()},se,"DOMContentLoaded",e0,X,"load",e0,X,"resize",cr],$r(Ae),Y.forEach(function(d){return d.enable(0,1)}),c=0;c<V.length;c+=3)Kr(ze,V[c],V[c+1]),Kr(ze,V[c],V[c+2])}},a.config=function(i){"limitCallbacks"in i&&(xs=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Ur)||(Ur=n)&&setInterval(za,n),"ignoreMobileResize"in i&&(Ms=a.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&($r(ze)||$r(Ae,i.autoRefreshEvents||"none"),Ya=(i.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(i,n){var s=ot(i),o=V.indexOf(s),l=n0(s);~o&&V.splice(o,l?6:2),n&&(l?Yt.unshift(X,n,te,n,Et,n):Yt.unshift(s,n))},a.clearMatchMedia=function(i){Y.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},a.isInViewport=function(i,n,s){var o=(Lt(i)?ot(i):i).getBoundingClientRect(),l=o[s?t0:i0]*n||0;return s?o.right-l>0&&o.left+l<X.innerWidth:o.bottom-l>0&&o.top+l<X.innerHeight},a.positionInViewport=function(i,n,s){Lt(i)&&(i=ot(i));var o=i.getBoundingClientRect(),l=o[s?t0:i0],c=n==null?l/2:n in hn?hn[n]*l:~n.indexOf("%")?parseFloat(n)*l/100:parseFloat(n)||0;return s?(o.left+c)/X.innerWidth:(o.top+c)/X.innerHeight},a.killAll=function(i){if(Y.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=s0.killAll||[];s0={},n.forEach(function(s){return s()})}},a}();q.version="3.12.7";q.saveStyles=function(a){return a?pr(a).forEach(function(t){if(t&&t.style){var r=Ct.indexOf(t);r>=0&&Ct.splice(r,5),Ct.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),P.core.getCache(t),Bs())}}):Ct};q.revert=function(a,t){return Vs(!a,t)};q.create=function(a,t){return new q(a,t)};q.refresh=function(a){return a?cr(!0):(E0||q.register())&&e0(!0)};q.update=function(a){return++V.cache&&mi(a===!0?2:0)};q.clearScrollMemory=t1;q.maxScroll=function(a,t){return ei(a,t?je:Ce)};q.getScrollFunc=function(a,t){return hi(ot(a),t?je:Ce)};q.getById=function(a){return Ps[a]};q.getAll=function(){return Y.filter(function(a){return a.vars.id!=="ScrollSmoother"})};q.isScrolling=function(){return!!Ot};q.snapDirectional=Hs;q.addEventListener=function(a,t){var r=s0[a]||(s0[a]=[]);~r.indexOf(t)||r.push(t)};q.removeEventListener=function(a,t){var r=s0[a],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)};q.batch=function(a,t){var r=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(d,u){var g=[],m=[],h=P.delayedCall(n,function(){u(g,m),g=[],m=[]}).pause();return function(p){g.length||h.restart(!0),g.push(p.trigger),m.push(p),s<=g.length&&h.progress(1)}},l;for(l in t)i[l]=l.substr(0,2)==="on"&&Ke(t[l])&&l!=="onRefreshInit"?o(l,t[l]):t[l];return Ke(s)&&(s=s(),Ae(q,"refresh",function(){return s=t.batchMax()})),pr(a).forEach(function(c){var d={};for(l in i)d[l]=i[l];d.trigger=c,r.push(q.create(d))}),r};var Na=function(t,r,i,n){return r>n?t(n):r<0&&t(0),i>n?(n-r)/(i-r):i<0?r/(r-i):1},Ls=function a(t,r){r===!0?t.style.removeProperty("touch-action"):t.style.touchAction=r===!0?"auto":r?"pan-"+r+(_e.isTouch?" pinch-zoom":""):"none",t===Et&&a(te,r)},rn={auto:1,scroll:1},Nc=function(t){var r=t.event,i=t.target,n=t.axis,s=(r.changedTouches?r.changedTouches[0]:r).target,o=s._gsap||P.core.getCache(s),l=Je(),c;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(rn[(c=At(s)).overflowY]||rn[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!n0(s)&&(rn[(c=At(s)).overflowY]||rn[c.overflowX]),o._isScrollT=l}(o._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},n1=function(t,r,i,n){return _e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&Nc,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ae(se,_e.eventTypes[0],Ha,!1,!0)},onDisable:function(){return ze(se,_e.eventTypes[0],Ha,!0)}})},qc=/(input|label|select|textarea)/i,qa,Ha=function(t){var r=qc.test(t.target.tagName);(r||qa)&&(t._gsapAllow=!0,qa=r)},Hc=function(t){Zi(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var r=t,i=r.normalizeScrollX,n=r.momentum,s=r.allowNestedScroll,o=r.onRelease,l,c,d=ot(t.target)||Et,u=P.core.globals().ScrollSmoother,g=u&&u.get(),m=Ai&&(t.content&&ot(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),h=hi(d,Ce),p=hi(d,je),f=1,v=(_e.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,k=0,x=Ke(n)?function(){return n(l)}:function(){return n||2.8},S,y,T=n1(d,t.type,!0,s),L=function(){return y=!1},b=Zt,M=Zt,C=function(){c=ei(d,Ce),M=dr(Ai?1:0,c),i&&(b=dr(0,ei(d,je))),S=r0},E=function(){m._gsap.y=ar(parseFloat(m._gsap.y)+h.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(y){requestAnimationFrame(L);var Z=ar(l.deltaY/2),oe=M(h.v-Z);if(m&&oe!==h.v+h.offset){h.offset=oe-h.v;var _=ar((parseFloat(m&&m._gsap.y)||0)-h.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",m._gsap.y=_+"px",h.cacheID=V.cache,mi()}return!0}h.offset&&E(),y=!0},B,U,W,K,j=function(){C(),B.isActive()&&B.vars.scrollY>c&&(h()>c?B.progress(1)&&h(c):B.resetTo("scrollY",c))};return m&&P.set(m,{y:"+=0"}),t.ignoreCheck=function(O){return Ai&&O.type==="touchmove"&&D(O)||f>1.05&&O.type!=="touchstart"||l.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=f;f=ar((X.visualViewport&&X.visualViewport.scale||1)/v),B.pause(),O!==f&&Ls(d,f>1.01?!0:i?!1:"x"),U=p(),W=h(),C(),S=r0},t.onRelease=t.onGestureStart=function(O,Z){if(h.offset&&E(),!Z)K.restart(!0);else{V.cache++;var oe=x(),_,ae;i&&(_=p(),ae=_+oe*.05*-O.velocityX/.227,oe*=Na(p,_,ae,ei(d,je)),B.vars.scrollX=b(ae)),_=h(),ae=_+oe*.05*-O.velocityY/.227,oe*=Na(h,_,ae,ei(d,Ce)),B.vars.scrollY=M(ae),B.invalidate().duration(oe).play(.01),(Ai&&B.vars.scrollY>=c||_>=c-1)&&P.to({},{onUpdate:j,duration:oe})}o&&o(O)},t.onWheel=function(){B._ts&&B.pause(),Je()-k>1e3&&(S=0,k=Je())},t.onChange=function(O,Z,oe,_,ae){if(r0!==S&&C(),Z&&i&&p(b(_[2]===Z?U+(O.startX-O.x):p()+Z-_[1])),oe){h.offset&&E();var Qe=ae[2]===oe,Dt=Qe?W+O.startY-O.y:h()+oe-ae[1],fe=M(Dt);Qe&&Dt!==fe&&(W+=fe-Dt),h(fe)}(oe||Z)&&mi()},t.onEnable=function(){Ls(d,i?!1:"x"),q.addEventListener("refresh",j),Ae(X,"resize",j),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Ls(d,!0),ze(X,"resize",j),q.removeEventListener("refresh",j),T.kill()},t.lockAxis=t.lockAxis!==!1,l=new _e(t),l.iOS=Ai,Ai&&!h()&&h(1),Ai&&P.ticker.add(Zt),K=l._dc,B=P.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:r1(h,h(),function(){return B.pause()})},onUpdate:mi,onComplete:K.vars.onComplete}),l};q.sort=function(a){if(Ke(a))return Y.sort(a);var t=X.pageYOffset||0;return q.getAll().forEach(function(r){return r._sortY=r.trigger?t+r.trigger.getBoundingClientRect().top:r.start+X.innerHeight}),Y.sort(a||function(r,i){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};q.observe=function(a){return new _e(a)};q.normalizeScroll=function(a){if(typeof a>"u")return at;if(a===!0&&at)return at.enable();if(a===!1){at&&at.kill(),at=a;return}var t=a instanceof _e?a:Hc(a);return at&&at.target===t.target&&at.kill(),n0(t.target)&&(at=t),t};q.core={_getVelocityProp:Gr,_inputObserver:n1,_scrollers:V,_proxies:Yt,bridge:{ss:function(){Ot||o0("scrollStart"),Ot=Je()},ref:function(){return $e}}};Ua()&&P.registerPlugin(q);var Vc={threshold:.7},s1=Array.from(document.querySelectorAll(".out-of-question")),o1=document.getElementById("intro-grid-one"),a1=document.getElementById("intro-grid-two"),Yc=document.querySelector(".tiny-boy"),Xc=document.querySelectorAll(".sad-child"),gn=new IntersectionObserver((a,t)=>{a.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting)r.isIntersecting&&s1.forEach((i,n)=>{n===0&&setTimeout(()=>{i.classList.remove("out-of-question")},500),n===1&&(setTimeout(()=>{i.classList.remove("out-of-question")},1e3),setTimeout(()=>{i.classList.add("upn-out-of-question")},1750)),n===2&&(setTimeout(()=>{i.classList.remove("out-of-question")},1750),setTimeout(()=>{i.classList.add("upn-out-of-question")},2500),setTimeout(()=>{s1[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{o1.classList.add("get-up"),a1.classList.add("get-down")},3500),setTimeout(()=>{o1.remove(),a1.remove(),Yc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Xc.forEach(s=>{s.classList.remove("sad-child")})},4500),setTimeout(()=>{$s("class","balloon-ball","add","in-wind")},5e3))});else return})},Vc);var l1=document.getElementById("brianSecondPageBox"),Wc=document.getElementById("brianSecondChair"),Gc={threshold:.4},mn=new IntersectionObserver((a,t)=>{a.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting)r.isIntersecting&&(l1.classList.remove("unseen"),Wc.classList.add("slide-chair-in"),l1.classList.add("brianUp"));else return})},Gc);var Uc={threshold:.7},Ud=Array.from(document.querySelectorAll("iframe")),jd=document.querySelector(".marketing--pitch-box"),pn=new IntersectionObserver((a,t)=>{a.forEach(r=>{if(console.log("func"),r.isIntersecting)r.isIntersecting&&console.log("here");else return})},Uc);var jc={threshold:.6},Kd=document.getElementById("websiteVideo"),Qd=new IntersectionObserver((a,t)=>{a.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting){if(r.isIntersecting)switch(yt("load"),console.log(r.target," io"),r.target.scrollIntoView({behavior:"smooth",block:"end"}),r.target.id){case"gridHeader":yt(0);break;case"wpp__concept":yt(19);break;case"wpp__copy":yt(39);break;case"wpp__design":yt(59);break;case"wpp__creation":yt(79);break}}else return})},jc);var Oi=document.getElementById("homeMonitor"),r3=document.getElementById("mob_fl_arrow"),n3=document.querySelector(".back--drop");var s3=document.querySelectorAll("iframe"),c1=a=>{if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(a.target),a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Oi.innerHTML=`
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
      
      `},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":Oi.innerHTML=`
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
      
      
      
      
      
      
      
      
      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},5);break;case"m--video":Oi.innerHTML=`
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
   
      
      
      `,setTimeout(()=>{document.querySelector(".movie--theater-screen").classList.add("glow"),document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":Oi.innerHTML=`
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
      `;let r=document.querySelector(".marketing--pitch-box");setTimeout(()=>{r.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":Oi.innerHTML=`
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
      `;let n=[...document.getElementsByTagName("li")],s=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{n.forEach(c=>{c.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":Oi.innerHTML=`
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

      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--contact":Oi.innerHTML=`
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
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(c=>{c.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":Oi.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":a.preventDefault(),xr();break;case"mob_fl_arrow":console.log("arrow clicked");let o=document.getElementById("fl_ex_list"),l=o.firstElementChild;o.appendChild(l),console.log(l);break}};var d1=()=>{console.log("lazy loading engaged")};Ii.registerPlugin(q);var _n="src/components/images/falling1.png",u1="src/components/images/falling2.png",vn="src/components/images/falling5.png",Ys="src/components/images/falling4.png",h1="src/components/images/falling6.png",$c="src/components/images/panic1.png",f1="src/components/images/panic4.png",Jc="src/components/images/panic3.png",Kc=document.getElementById("image"),Xs=0,Ws=[_n,u1,_n,h1,vn,Ys,vn,Ys,_n,vn,Ys,vn,h1,_n,u1],Qc=[$c,f1,Jc,f1];function Zc(){++Xs>=Ws.length&&(Xs=0),Kc.src=Ws[Xs]}var b3=document.getElementById("brianSecondPage"),x3=document.getElementById("brianSecondPageBox"),k3=document.getElementById("switchFree"),T3=document.getElementById("switchPort"),S3=document.getElementById("freelancePresenter"),C3=document.getElementById("backCloud"),L3=document.querySelector(".switchwrap"),e2=document.querySelector(".homeWrap"),t2=document.querySelectorAll("#target"),E3=document.getElementById("launch"),M3=document.getElementById("clear"),i2=!1,r2=document.getElementById("top-target"),n2=document.getElementById("hi"),s2=document.getElementById("hiBox"),o2=document.getElementById("iam"),a2=document.getElementById("iamBox"),l2=document.getElementById("brianBox"),c2=document.getElementById("strout"),d2=document.getElementById("stroutBox"),u2=document.getElementById("title"),h2=document.getElementById("titleBox"),f2=document.querySelectorAll(".first-letters"),g2=document.getElementById("first-n"),g1=document.getElementById("fallingShell"),m2=document.getElementById("wrapper"),p2=document.getElementById("moodring"),_2=document.querySelectorAll(".cloudsForward"),v2=document.querySelectorAll(".cloudsBackwards"),m1=[..._2],p1=[...v2],B3=document.getElementById("remainder"),I3=document.getElementById("c1"),P3=document.getElementById("c2"),z3=document.getElementById("c3"),A3=document.getElementById("c4"),O3=document.getElementById("c5"),D3=document.getElementById("c6"),R3=document.getElementById("c7"),F3=document.getElementById("c8"),N3=document.getElementById("c9"),q3=document.getElementById("c10"),H3=document.getElementById("c11"),w2=document.getElementById("sun"),y2=document.getElementById("moon"),V3=document.getElementById("target"),Y3=document.getElementById("switchPort"),X3=document.getElementById("brianSecondChair"),W3=document.getElementById("brianBlurbP"),G3=document.getElementById("listOfSkills"),b2=document.querySelectorAll(".shrunk"),U3=[...b2],j3=document.getElementById("listed_skills_media"),x2=document.getElementsByTagName("li"),$3=[...x2],J3=document.getElementById("absolute-cloud"),K3=document.getElementById("copy-gmail"),Q3=document.getElementById("brianlinkedin"),Z3=document.getElementById("briangithub"),eu=document.getElementById("resume-link"),tu=document.querySelectorAll("iframe"),iu=document.getElementById("fallingSecond"),ru=document.getElementById("castle"),k2=document.querySelectorAll("#introToServices"),T2=Array.from(document.querySelectorAll(".nav--link")),_1=()=>{t2.forEach(n=>{mn.observe(n)}),k2.forEach(n=>{gn.observe(n)}),pn,setInterval(Zc,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),p2.addEventListener("click",()=>{m2.classList.toggle("dark"),w2.classList.toggle("sunset"),y2.classList.toggle("sunset")});let t=()=>{m1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),p1.forEach(n=>{n.classList.add("clouds-movement-background")})},r=()=>{g1.classList.add("falling"),setTimeout(()=>{i2=!0},3500)};window.addEventListener("load",()=>{r2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{n2.classList.remove("translatedHi"),o2.classList.remove("translatedIam"),[...f2].forEach(s=>{s.classList.add("first-name-falling-in")}),c2.classList.remove("translatedStrout"),u2.classList.remove("translatedTitle"),setTimeout(()=>{t()},2e3),setTimeout(()=>{r()},3500)},1e3),setTimeout(()=>{i()},7500)}),g2.addEventListener("transitionend",function(){});let i=()=>{s2.classList.add("up-and-out"),a2.classList.add("up-and-out"),l2.classList.add("up-and-out"),d2.classList.add("up-and-out"),h2.classList.add("up-and-out"),setTimeout(()=>{Ws=Qc},2e3),setTimeout(()=>{a.style.overflow="visible",g1.classList.add("down-and-out"),m1.forEach(n=>{n.classList.add("unseen")}),p1.forEach(n=>{n.classList.add("unseen")})},2500),setTimeout(()=>{e2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{T2.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),q0("andgo"),d1()},6500)}};Ii.registerPlugin(q);var wn="src/components/images/falling1.png",v1="src/components/images/falling2.png",yn="src/components/images/falling5.png",Gs="src/components/images/falling4.png",w1="src/components/images/falling6.png",S2="src/components/images/panic1.png",y1="src/components/images/panic4.png",C2="src/components/images/panic3.png",_u=document.getElementById("image");var L2=[wn,v1,wn,w1,yn,Gs,yn,Gs,wn,yn,Gs,yn,w1,wn,v1],E2=[S2,y1,C2,y1];function M2(){}var vu=document.getElementById("brianSecondPage"),wu=document.getElementById("brianSecondPageBox"),yu=document.getElementById("switchFree"),bu=document.getElementById("switchPort"),xu=document.getElementById("freelancePresenter"),ku=document.getElementById("backCloud"),Tu=document.querySelector(".switchwrap"),B2=document.querySelector(".homeWrap"),I2=document.querySelectorAll("#target"),Su=document.getElementById("launch"),Cu=document.getElementById("clear"),P2=!1,z2=document.getElementById("top-target"),A2=document.getElementById("hi"),O2=document.getElementById("hiBox"),D2=document.getElementById("iam"),R2=document.getElementById("iamBox"),F2=document.getElementById("brianBox"),N2=document.getElementById("strout"),q2=document.getElementById("stroutBox"),H2=document.getElementById("title"),V2=document.getElementById("titleBox"),Y2=document.querySelectorAll(".first-letters"),X2=document.getElementById("first-n"),b1=document.getElementById("fallingShell"),W2=document.getElementById("wrapper"),G2=document.getElementById("moodring"),U2=document.querySelectorAll(".cloudsForward"),j2=document.querySelectorAll(".cloudsBackwards"),x1=[...U2],k1=[...j2],Lu=document.getElementById("remainder"),Eu=document.getElementById("c1"),Mu=document.getElementById("c2"),Bu=document.getElementById("c3"),Iu=document.getElementById("c4"),Pu=document.getElementById("c5"),zu=document.getElementById("c6"),Au=document.getElementById("c7"),Ou=document.getElementById("c8"),Du=document.getElementById("c9"),Ru=document.getElementById("c10"),Fu=document.getElementById("c11"),$2=document.getElementById("sun"),J2=document.getElementById("moon"),Nu=document.getElementById("target"),qu=document.getElementById("switchPort"),Hu=document.getElementById("brianSecondChair"),Vu=document.getElementById("brianBlurbP"),Yu=document.getElementById("listOfSkills"),K2=document.querySelectorAll(".shrunk"),Xu=[...K2],Wu=document.getElementById("listed_skills_media"),Q2=document.getElementsByTagName("li"),Gu=[...Q2],Uu=document.getElementById("absolute-cloud"),ju=document.getElementById("copy-gmail"),$u=document.getElementById("brianlinkedin"),Ju=document.getElementById("briangithub"),Ku=document.getElementById("resume-link"),Qu=document.querySelectorAll("iframe"),Zu=document.getElementById("fallingSecond"),e5=document.getElementById("castle"),Z2=document.querySelectorAll("#introToServices"),ed=Array.from(document.querySelectorAll(".nav--link")),T1=()=>{console.log("in development ksipping animation"),I2.forEach(n=>{mn.observe(n)}),Z2.forEach(n=>{gn.observe(n)}),pn,setInterval(M2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),G2.addEventListener("click",()=>{W2.classList.toggle("dark"),$2.classList.toggle("sunset"),J2.classList.toggle("sunset")});let t=()=>{x1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),k1.forEach(n=>{n.classList.add("clouds-movement-background")})},r=()=>{b1.classList.add("falling"),setTimeout(()=>{P2=!0},0)};window.addEventListener("load",()=>{z2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{A2.classList.remove("translatedHi"),D2.classList.remove("translatedIam"),[...Y2].forEach(s=>{s.classList.add("first-name-falling-in")}),N2.classList.remove("translatedStrout"),H2.classList.remove("translatedTitle"),setTimeout(()=>{t()},0),setTimeout(()=>{r()},0)},0),setTimeout(()=>{i()},0)}),X2.addEventListener("transitionend",function(){});let i=()=>{O2.classList.add("up-and-out"),R2.classList.add("up-and-out"),F2.classList.add("up-and-out"),q2.classList.add("up-and-out"),V2.classList.add("up-and-out"),setTimeout(()=>{L2=E2},0),setTimeout(()=>{a.style.overflow="visible",b1.classList.add("down-and-out"),x1.forEach(n=>{n.classList.add("unseen")}),k1.forEach(n=>{n.classList.add("unseen")})},0),setTimeout(()=>{B2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{ed.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),c1("intro")},0)}};var a0=document.getElementById("deckOfMarketingCards"),i5=a0.querySelectorAll(".marketing__mobileCard"),Us=0,vr=!1,pi=null;function S1(a){if(console.log("moving"),!vr||!pi)return;let r=a.touches[0].clientX-Us;pi.style.transform=`translateX(${r}px) rotate(${r/20}deg)`}function C1(a){console.log("touch start sensed"),!vr&&(pi=a0.firstElementChild,Us=a.touches[0].clientX,vr=!0)}function L1(a){if(console.log("touch end sensed"),!vr||!pi)return;let r=a.changedTouches[0].clientX-Us,i=window.innerWidth*.3;if(Math.abs(r)>i){let n=r>0?1:-1;pi.style.transition="transform 0.3s ease-out",pi.style.transform=`translateX(${n*100}vw) rotate(${n*20}deg)`,setTimeout(()=>{td(pi)},300)}else pi.style.transition="transform 0.2s ease-out",pi.style.transform="translateX(0) rotate(0)";vr=!1}function td(a){a.style.transition="none",a.style.transform="translateX(0) rotate(0)",a0.appendChild(a)}Ii.registerPlugin(q);var id=!0;id?T1():_1();function E1(){return window.innerWidth<=768}var h5=E1();E1&&(console.log("index has registered mobile we be launching listeners"),a0.addEventListener("touchstart",C1),a0.addEventListener("touchmove",S1),a0.addEventListener("touchend",L1));document.addEventListener("click",(a,t)=>{q0(a)});var f5=document.getElementById("portgithub"),g5=document.getElementById("mashagithub"),m5=document.getElementById("mashanetlify"),p5=document.getElementById("fugagithub"),_5=document.getElementById("fuganetlify");wrapper.addEventListener("click",a=>{if(!(a.target.nodeName==="BUTTON"))return;switch(a.target.id){case"portgithub":l0("github.com/BrianStrout/Portfolio");break;case"mashagithub":l0("github.com/BrianStrout/masha");break;case"mashanetlify":l0("mashaoflisbon.netlify.app/");break;case"fugagithub":l0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":l0("lafugitiva.netlify.app/");break;case"rotaryyoutube":l0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":l0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var l0=a=>{window.open(`https://${a}`,"_blank")};var rd=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){rd=!0}}))}catch{}var v5="onwheel"in document.createElement("div")?"wheel":"mousewheel";var nd=document.querySelectorAll(".fademe");nd.forEach(a=>{Js.observe(a)});io({elementId:"websiteGridPresentation",onProgress:a=>{}});var sd=Ii.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});sd.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
