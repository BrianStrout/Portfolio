(()=>{var F0=document.querySelector(".canvas"),Qs=!0,xn={frame:0},Zs=F0.getContext("2d"),E1=80,kn=[],M1=l=>`/src/components/images/animation/${l}.png`,B1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let l=0;l<E1;l++){let t=new Image;t.src=M1(l),kn.push(t)}console.log("loaded image gallery"),console.log(kn)},I1=l=>{console.log("rendering function flying"),Zs.clearRect(0,0,F0.width,F0.height),Zs.drawImage(kn[l],0,0,F0.width,F0.height)};function P1(l,t){let r=l,i=l,n=2e3,s=t-l,o=performance.now();function a(){let c=performance.now()-o,d=Math.min(c/n,1);d=1-Math.pow(1-d,3),r=Math.round(l+d*s),r!==i&&(i=r,console.log(i),I1(i)),d<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}var qi=l=>{console.log("UAF called on",l),l==="load"&&Qs&&(B1(),Qs=!1),typeof l=="number"&&(console.log("number time!"),console.log(xn),P1(xn.frame,l),xn.frame=l)};var z1={threshold:.6},a3=document.getElementById("websiteVideo"),Tn=new IntersectionObserver((l,t)=>{l.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting){if(r.isIntersecting)switch(qi("load"),console.log(r.target," io"),r.target.scrollIntoView({behavior:"smooth",block:"end"}),r.target.id){case"gridHeader":qi(0);break;case"wpp__concept":qi(19);break;case"wpp__copy":qi(39);break;case"wpp__design":qi(59);break;case"wpp__creation":qi(79);break}}else return})},z1);function eo(l,t,r,i,n){let s,o;if(l==="id")s=document.getElementById(`${t}`);else if(l==="class")o=Array.from(document.querySelectorAll(`.${t}`)),o.forEach(a=>{a.classList[r](`${i}`)});else{console.log("selector error");return}}var A1={threshold:.4},to=new IntersectionObserver((l,t)=>{l.forEach(r=>{if(r.isIntersecting)r.isIntersecting&&r.target.classList.remove("fadeup");else return})},A1);var io=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var ro=l=>{console.log("we are live in submitter about to to predef");let t=document.getElementById("contactForm"),r="service_9l2h8gg",i="template_36awvk9",n=document.getElementById("formMessage").value;emailjs.sendForm(r,i,t,"oYymItkIoREaVvBlM").then(s=>{console.log("SUCCESS!",s.status,s.text)}).catch(s=>{console.error(s.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${n}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),io()};var _3=document.getElementById("contactForm"),v3=document.getElementById("formName"),w3=document.getElementById("formEmail"),y3=document.getElementById("formMessage"),Sn=!1,Cn=!1,Ln=!1,h0;function En(){console.log("GOIGM FOR ALL"),Sn&&Cn&&Ln?(console.log("all fields pass!"),ro()):(console.log("field failure"),console.log(Sn,Cn,Ln))}function O1(l){return h0=/^[a-z a-z]+$/gi,h0.test(l)?(console.log("name pass"),Sn=!0,En(),!0):(console.log("fail name"),!1)}function D1(l){return h0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,h0.test(l)?(console.log("email pass"),Cn=!0,En(),!0):(console.log("not a valid email"),!1)}function R1(l){return h0=/.{8}/,h0.test(l)?(console.log("message pass"),Ln=!0,En(),!0):(console.log("fail"),!1)}var xr=()=>{console.log("validating?"),O1(document.getElementById("formName").value),D1(document.getElementById("formEmail").value),R1(document.getElementById("formMessage").value)};var Ut=[{header:"Presence Auditing",description:'<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Presence Auditing</div><div class="description"><p>Determining and reviewing where you are is a great first step in growing your online presences<br /><br /> we can get started by:</p> <ul><li class="fadeRight"> Branding consistency review</li><li class="fadeRight sec">SEO & UX audit</li><li class="fadeRight thi">Competitor analysis</li></ul></div></div></div></div>',slug:"auditicon",image:"src/components/images/marketingicons/assess.png"},{header:"Strategy",description:`<div class="outercard"><div class="rim"><div class="innercard mobileAuditCard"><div class="suite"></div><div class="header newSubHeader">Strategy</div><div class="description"><p>   Need to figure out the most efficient way to
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
                                  </div></div></div></div>`,slug:"implicon",image:"src/components/images/marketingicons/implement.png"}];var F1=document.getElementById("msParagraph"),no=document.querySelector(".ms__icons"),yt=0;var Mn;function N1(){return window.innerWidth<=768}N1()?console.log("User is on a mobile device"):console.log("User is on a desktop");var q1=l=>{no.querySelector(".risen")&&(Mn=no.querySelector(".risen"),console.log(Mn,"should be risen var"),Mn.classList.remove("risen")),document.querySelector(`#${l}`).classList.add("risen")},H1=document.getElementById("msArrowLeft"),kr=4,V1=document.getElementById("msArrowRight"),Tr=2,Y1=l=>{console.log("in arrow"),console.log(l),kr=l-1,l===0&&(kr=4),Tr=l+1,l===4&&(Tr=0),yt<0&&(yt=Ut.length-1),console.log(kr,Tr),H1.style.backgroundImage=`url(/${Ut[kr].image})`,V1.style.backgroundImage=`url(/${Ut[Tr].image})`},so=l=>{l==="left"&&(yt--,yt<0&&(yt=Ut.length-1)),l==="right"&&(yt++,yt===Ut.length&&(yt=0)),F1.innerHTML=Ut[yt].description,console.log("suite?",document.querySelector(".suite")),console.log(Ut[yt].image),document.querySelector(".suite").style=`background-image: url(" ${Ut[yt].image}")`,q1(Ut[yt].slug),Y1(yt)},oo=l=>{console.log("marketing controller live",l),l.classList.contains("arrowLeft")&&(console.log("Left!"),so("left")),l.classList.contains("arrowRight")&&(console.log("Right!"),so("right"))};var H=document.querySelector("#sc__hello");var N0=!1,bi=()=>{if(window.innerWidth<=768){N0=!N0,console.log(N0),N0?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):N0||(document.getElementById("mobileBack").innerHTML="");return}},q0=l=>{if(console.log("new"),l==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(l==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(t=>{t.tagName&&t.tagName==="DIV"&&t.classList.add("hit")});return}if(l.target.classList.contains("arrow")&&oo(l.target),l.target.classList.contains("nav--link")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let t=document.querySelectorAll(".hit");t.length>0&&t.forEach(r=>{r.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(r=>{r.classList.add("blur"),r.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(r=>{r.classList.contains("fadeup")||r.classList.add("fadeup")})}switch(l.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"submit":console.log("submitting in the new controller"),l.preventDefault(),xr();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":H=document.querySelector("#sc__hello"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--marketing":H=document.querySelector("#sc__marketing"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--web":H=document.querySelector("#sc__websites"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--video":H=document.querySelector("#sc__video"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--nerd":H=document.querySelector("#sc__nerd"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")});let r=[...document.getElementsByTagName("li")],i=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{r.forEach(n=>{n.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"m--reference":H=document.querySelector("#sc__reference"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break;case"cta":q0("m--contact");break;case"m--contact":H=document.querySelector("#sc__contact"),H.classList.remove("blur"),H.classList.add("front__and-center"),H.scrollTo({top:0,left:0,behavior:"instant"}),H.childNodes.forEach(n=>{n.tagName&&n.tagName==="DIV"&&n.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(n=>{n.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),bi();break}l.target.classList.contains("marketing__mobileCard")&&console.log("should pull up swiper??")};function si(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function mo(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}var mt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},g0={duration:.5,overwrite:!1,delay:0},jn,Ne,ce,Bt=1e8,ne=1/Bt,Rn=Math.PI*2,X1=Rn/4,W1=0,po=Math.sqrt,U1=Math.cos,G1=Math.sin,Me=function(t){return typeof t=="string"},me=function(t){return typeof t=="function"},ai=function(t){return typeof t=="number"},Ar=function(t){return typeof t>"u"},$t=function(t){return typeof t=="object"},gt=function(t){return t!==!1},$n=function(){return typeof window<"u"},Sr=function(t){return me(t)||Me(t)},_o=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ue=Array.isArray,Fn=/(?:-?\.?\d|\.)+/gi,Jn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kn=/[+-]=-?[.\d]+/,vo=/[^,'"\[\]\s]+/gi,j1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Gt,Nn,Qn,xt={},Mr={},wo,yo=function(t){return(Mr=m0(t,xt))&&Ge},Or=function(t,r){return console.warn("Invalid property",t,"set to",r,"Missing plugin? gsap.registerPlugin()")},U0=function(t,r){return!r&&console.warn(t)},bo=function(t,r){return t&&(xt[t]=r)&&Mr&&(Mr[t]=r)||xt},G0=function(){return 0},$1={suppressEvents:!0,isStart:!0,kill:!1},Cr={suppressEvents:!0,kill:!1},J1={suppressEvents:!0},Zn={},ki=[],qn={},xo,ht={},In={},ao=30,Lr=[],es="",ts=function(t){var r=t[0],i,n;if($t(r)||me(r)||(t=[t]),!(i=(r._gsap||{}).harness)){for(n=Lr.length;n--&&!Lr[n].targetTest(r););i=Lr[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new ns(t[n],i)))||t.splice(n,1);return t},Ti=function(t){return t._gsap||ts(It(t))[0]._gsap},is=function(t,r,i){return(i=t[r])&&me(i)?t[r]():Ar(i)&&t.getAttribute&&t.getAttribute(r)||i},it=function(t,r){return(t=t.split(",")).forEach(r)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wi=function(t,r){var i=r.charAt(0),n=parseFloat(r.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},K1=function(t,r){for(var i=r.length,n=0;t.indexOf(r[n])<0&&++n<i;);return n<i},Br=function(){var t=ki.length,r=ki.slice(0),i,n;for(qn={},ki.length=0,i=0;i<t;i++)n=r[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},ko=function(t,r,i,n){ki.length&&!Ne&&Br(),t.render(r,i,n||Ne&&r<0&&(t._initted||t._startAt)),ki.length&&!Ne&&Br()},To=function(t){var r=parseFloat(t);return(r||r===0)&&(t+"").match(vo).length<2?r:Me(t)?t.trim():t},So=function(t){return t},kt=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},Q1=function(t){return function(r,i){for(var n in i)n in r||n==="duration"&&t||n==="ease"||(r[n]=i[n])}},m0=function(t,r){for(var i in r)t[i]=r[i];return t},lo=function l(t,r){for(var i in r)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=$t(r[i])?l(t[i]||(t[i]={}),r[i]):r[i]);return t},Ir=function(t,r){var i={},n;for(n in t)n in r||(i[n]=t[n]);return i},Y0=function(t){var r=t.parent||ue,i=t.keyframes?Q1(Ue(t.keyframes)):kt;if(gt(t.inherit))for(;r;)i(t,r.vars.defaults),r=r.parent||r._dp;return t},Z1=function(t,r){for(var i=t.length,n=i===r.length;n&&i--&&t[i]===r[i];);return i<0},Co=function(t,r,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=r[s];o&&o[s]>a;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=t[i],t[i]=r),r._next?r._next._prev=r:t[n]=r,r._prev=o,r.parent=r._dp=t,r},Dr=function(t,r,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=r._prev,o=r._next;s?s._next=o:t[i]===r&&(t[i]=o),o?o._prev=s:t[n]===r&&(t[n]=s),r._next=r._prev=r.parent=null},Si=function(t,r){t.parent&&(!r||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,r){if(t&&(!r||r._end>t._dur||r._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},el=function(t){for(var r=t.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return t},Hn=function(t,r,i,n){return t._startAt&&(Ne?t._startAt.revert(Cr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(r,!0,n))},tl=function l(t){return!t||t._ts&&l(t.parent)},co=function(t){return t._repeat?p0(t._tTime,t=t.duration()+t._rDelay)*t:0},p0=function(t,r){var i=Math.floor(t=Se(t/r));return t&&i===t?i-1:i},Pr=function(t,r){return(t-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Rr=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Fr=function(t,r){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Se(i._time-(t._ts>0?r/t._ts:((t._dirty?t.totalDuration():t._tDur)-r)/-t._ts)),Rr(t),i._dirty||Hi(i,t)),t},Lo=function(t,r){var i;if((r._time||!r._dur&&r._initted||r._start<t._time&&(r._dur||!r.add))&&(i=Pr(t.rawTime(),r),(!r._dur||J0(0,r.totalDuration(),i)-r._tTime>ne)&&r.render(i,!0)),Hi(t,r)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ne}},jt=function(t,r,i,n){return r.parent&&Si(r),r._start=Se((ai(i)?i:i||t!==ue?Mt(t,i,r):t._time)+r._delay),r._end=Se(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Co(t,r,"_first","_last",t._sort?"_start":0),Vn(r)||(t._recent=r),n||Lo(t,r),t._ts<0&&Fr(t,t._tTime),t},Eo=function(t,r){return(xt.ScrollTrigger||Or("scrollTrigger",r))&&xt.ScrollTrigger.create(r,t)},Mo=function(t,r,i,n,s){if(as(t,r,s),!t._initted)return 1;if(!i&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&xo!==ft.frame)return ki.push(t),t._lazy=[s,n],1},il=function l(t){var r=t.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||l(r))},Vn=function(t){var r=t.data;return r==="isFromStart"||r==="isStart"},rl=function(t,r,i,n){var s=t.ratio,o=r<0||!r&&(!t._start&&il(t)&&!(!t._initted&&Vn(t))||(t._ts<0||t._dp._ts<0)&&!Vn(t))?0:1,a=t._rDelay,c=0,d,u,g;if(a&&t._repeat&&(c=J0(0,t._tDur,r),u=p0(c,a),t._yoyo&&u&1&&(o=1-o),u!==p0(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ne||n||t._zTime===ne||!r&&t._zTime){if(!t._initted&&Mo(t,r,n,i,c))return;for(g=t._zTime,t._zTime=r||(i?ne:0),i||(i=r&&!g),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,d=t._pt;d;)d.r(o,d.d),d=d._next;r<0&&Hn(t,r,i,!0),t._onUpdate&&!i&&bt(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&bt(t,"onRepeat"),(r>=t._tDur||r<0)&&t.ratio===o&&(o&&Si(t,1),!i&&!Ne&&(bt(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=r)},nl=function(t,r,i){var n;if(i>r)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},_0=function(t,r,i,n){var s=t._repeat,o=Se(r)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Se(o*(s+1)+t._rDelay*s):o,a>0&&!n&&Fr(t,t._tTime=t._tDur*a),t.parent&&Rr(t),i||Hi(t.parent,t),t},uo=function(t){return t instanceof Fe?Hi(t):_0(t,t._dur)},sl={_start:0,endTime:G0,totalDuration:G0},Mt=function l(t,r,i){var n=t.labels,s=t._recent||sl,o=t.duration()>=Bt?s.endTime(!1):t._dur,a,c,d;return Me(r)&&(isNaN(r)||r in n)?(c=r.charAt(0),d=r.substr(-1)==="%",a=r.indexOf("="),c==="<"||c===">"?(a>=0&&(r=r.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(r.substr(1))||0)*(d?(a<0?s:i).totalDuration()/100:1)):a<0?(r in n||(n[r]=o),n[r]):(c=parseFloat(r.charAt(a-1)+r.substr(a+1)),d&&i&&(c=c/100*(Ue(i)?i[0]:i).totalDuration()),a>1?l(t,r.substr(0,a-1),i)+c:o+c)):r==null?o:+r},X0=function(t,r,i){var n=ai(r[1]),s=(n?2:1)+(t<2?0:1),o=r[s],a,c;if(n&&(o.duration=r[1]),o.parent=i,t){for(a=o,c=i;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=gt(c.vars.inherit)&&c.parent;o.immediateRender=gt(a.immediateRender),t<2?o.runBackwards=1:o.startAt=r[s-1]}return new xe(r[0],o,r[s+1])},Ci=function(t,r){return t||t===0?r(t):r},J0=function(t,r,i){return i<t?t:i>r?r:i},qe=function(t,r){return!Me(t)||!(r=j1.exec(t))?"":r[1]},ol=function(t,r,i){return Ci(i,function(n){return J0(t,r,n)})},Yn=[].slice,Bo=function(t,r){return t&&$t(t)&&"length"in t&&(!r&&!t.length||t.length-1 in t&&$t(t[0]))&&!t.nodeType&&t!==Gt},al=function(t,r,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return Me(n)&&!r||Bo(n,1)?(s=i).push.apply(s,It(n)):i.push(n)})||i},It=function(t,r,i){return ce&&!r&&ce.selector?ce.selector(t):Me(t)&&!i&&(Nn||!v0())?Yn.call((r||Qn).querySelectorAll(t),0):Ue(t)?al(t,i):Bo(t)?Yn.call(t,0):t?[t]:[]},Xn=function(t){return t=It(t)[0]||U0("Invalid scope")||{},function(r){var i=t.current||t.nativeElement||t;return It(r,i.querySelectorAll?i:i===t?U0("Invalid scope")||Qn.createElement("div"):t)}},Io=function(t){return t.sort(function(){return .5-Math.random()})},Po=function(t){if(me(t))return t;var r=$t(t)?t:{each:t},i=Vi(r.ease),n=r.from||0,s=parseFloat(r.base)||0,o={},a=n>0&&n<1,c=isNaN(n)||a,d=r.axis,u=n,g=n;return Me(n)?u=g={center:.5,edges:.5,end:1}[n]||0:!a&&c&&(u=n[0],g=n[1]),function(m,h,p){var f=(p||r).length,v=o[f],k,x,S,y,T,L,b,M,C;if(!v){if(C=r.grid==="auto"?0:(r.grid||[1,Bt])[1],!C){for(b=-Bt;b<(b=p[C++].getBoundingClientRect().left)&&C<f;);C<f&&C--}for(v=o[f]=[],k=c?Math.min(C,f)*u-.5:n%C,x=C===Bt?0:c?f*g/C-.5:n/C|0,b=0,M=Bt,L=0;L<f;L++)S=L%C-k,y=x-(L/C|0),v[L]=T=d?Math.abs(d==="y"?y:S):po(S*S+y*y),T>b&&(b=T),T<M&&(M=T);n==="random"&&Io(v),v.max=b-M,v.min=M,v.v=f=(parseFloat(r.amount)||parseFloat(r.each)*(C>f?f-1:d?d==="y"?f/C:C:Math.max(C,f/C))||0)*(n==="edges"?-1:1),v.b=f<0?s-f:s,v.u=qe(r.amount||r.each)||0,i=i&&f<0?Ho(i):i}return f=(v[m]-v.min)/v.max||0,Se(v.b+(i?i(f):f)*v.v)+v.u}},Wn=function(t){var r=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Se(Math.round(parseFloat(i)/t)*t*r);return(n-n%1)/r+(ai(i)?0:qe(i))}},zo=function(t,r){var i=Ue(t),n,s;return!i&&$t(t)&&(n=i=t.radius||Bt,t.values?(t=It(t.values),(s=!ai(t[0]))&&(n*=n)):t=Wn(t.increment)),Ci(r,i?me(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),d=Bt,u=0,g=t.length,m,h;g--;)s?(m=t[g].x-a,h=t[g].y-c,m=m*m+h*h):m=Math.abs(t[g]-a),m<d&&(d=m,u=g);return u=!n||d<=n?t[u]:o,s||u===o||ai(o)?u:u+qe(o)}:Wn(t))},Ao=function(t,r,i,n){return Ci(Ue(t)?!r:i===!0?!!(i=0):!n,function(){return Ue(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(r-t+i*.99))/i)*i*n)/n})},ll=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(n){return r.reduce(function(s,o){return o(s)},n)}},cl=function(t,r){return function(i){return t(parseFloat(i))+(r||qe(i))}},dl=function(t,r,i){return Do(t,r,0,1,i)},Oo=function(t,r,i){return Ci(i,function(n){return t[~~r(n)]})},ul=function l(t,r,i){var n=r-t;return Ue(t)?Oo(t,l(0,t.length),r):Ci(i,function(s){return(n+(s-t)%n)%n+t})},hl=function l(t,r,i){var n=r-t,s=n*2;return Ue(t)?Oo(t,l(0,t.length-1),r):Ci(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},w0=function(t){for(var r=0,i="",n,s,o,a;~(n=t.indexOf("random(",r));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",s=t.substr(n+7,o-n-7).match(a?vo:Fn),i+=t.substr(r,n-r)+Ao(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),r=o+1;return i+t.substr(r,t.length-r)},Do=function(t,r,i,n,s){var o=r-t,a=n-i;return Ci(s,function(c){return i+((c-t)/o*a||0)})},fl=function l(t,r,i,n){var s=isNaN(t+r)?0:function(h){return(1-h)*t+h*r};if(!s){var o=Me(t),a={},c,d,u,g,m;if(i===!0&&(n=1)&&(i=null),o)t={p:t},r={p:r};else if(Ue(t)&&!Ue(r)){for(u=[],g=t.length,m=g-2,d=1;d<g;d++)u.push(l(t[d-1],t[d]));g--,s=function(p){p*=g;var f=Math.min(m,~~p);return u[f](p-f)},i=r}else n||(t=m0(Ue(t)?[]:{},t));if(!u){for(c in r)ss.call(a,t,c,"get",r[c]);s=function(p){return ds(p,a)||(o?t.p:t)}}}return Ci(i,s)},ho=function(t,r,i){var n=t.labels,s=Bt,o,a,c;for(o in n)a=n[o]-r,a<0==!!i&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},bt=function(t,r,i){var n=t.vars,s=n[r],o=ce,a=t._ctx,c,d,u;if(s)return c=n[r+"Params"],d=n.callbackScope||t,i&&ki.length&&Br(),a&&(ce=a),u=c?s.apply(d,c):s.call(d),ce=o,u},H0=function(t){return Si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&bt(t,"onInterrupt"),t},f0,Ro=[],Fo=function(t){if(t)if(t=!t.name&&t.default||t,$n()||t.headless){var r=t.name,i=me(t),n=r&&!i&&t.init?function(){this._props=[]}:t,s={init:G0,render:ds,add:ss,kill:Ml,modifier:El,rawVars:0},o={targetTest:0,get:0,getSetter:Nr,aliases:{},register:0};if(v0(),t!==n){if(ht[r])return;kt(n,kt(Ir(t,s),o)),m0(n.prototype,m0(s,Ir(t,o))),ht[n.prop=r]=n,t.targetTest&&(Lr.push(n),Zn[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}bo(r,n),t.register&&t.register(Ge,n,rt)}else Ro.push(t)},re=255,V0={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Pn=function(t,r,i){return t+=t<0?1:t>1?-1:0,(t*6<1?r+(i-r)*t*6:t<.5?i:t*3<2?r+(i-r)*(2/3-t)*6:r)*re+.5|0},No=function(t,r,i){var n=t?ai(t)?[t>>16,t>>8&re,t&re]:0:V0.black,s,o,a,c,d,u,g,m,h,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),V0[t])n=V0[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&re,n&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(Fn),!r)c=+n[0]%360/360,d=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(d+1):u+d-u*d,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=Pn(c+1/3,s,o),n[1]=Pn(c,s,o),n[2]=Pn(c-1/3,s,o);else if(~t.indexOf("="))return n=t.match(Jn),i&&n.length<4&&(n[3]=1),n}else n=t.match(Fn)||V0.transparent;n=n.map(Number)}return r&&!p&&(s=n[0]/re,o=n[1]/re,a=n[2]/re,g=Math.max(s,o,a),m=Math.min(s,o,a),u=(g+m)/2,g===m?c=d=0:(h=g-m,d=u>.5?h/(2-g-m):h/(g+m),c=g===s?(o-a)/h+(o<a?6:0):g===o?(a-s)/h+2:(s-o)/h+4,c*=60),n[0]=~~(c+.5),n[1]=~~(d*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},qo=function(t){var r=[],i=[],n=-1;return t.split(oi).forEach(function(s){var o=s.match(Xi)||[];r.push.apply(r,o),i.push(n+=o.length+1)}),r.c=i,r},fo=function(t,r,i){var n="",s=(t+n).match(oi),o=r?"hsla(":"rgba(",a=0,c,d,u,g;if(!s)return t;if(s=s.map(function(m){return(m=No(m,r,1))&&o+(r?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),i&&(u=qo(t),c=i.c,c.join(n)!==u.c.join(n)))for(d=t.replace(oi,"1").split(Xi),g=d.length-1;a<g;a++)n+=d[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!d)for(d=t.split(oi),g=d.length-1;a<g;a++)n+=d[a]+s[a];return n+d[g]},oi=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in V0)l+="|"+t+"\\b";return new RegExp(l+")","gi")}(),gl=/hsl[a]?\(/,rs=function(t){var r=t.join(" "),i;if(oi.lastIndex=0,oi.test(r))return i=gl.test(r),t[1]=fo(t[1],i),t[0]=fo(t[0],i,qo(t[1])),!0},j0,ft=function(){var l=Date.now,t=500,r=33,i=l(),n=i,s=1e3/240,o=s,a=[],c,d,u,g,m,h,p=function f(v){var k=l()-n,x=v===!0,S,y,T,L;if((k>t||k<0)&&(i+=k-r),n+=k,T=n-i,S=T-o,(S>0||x)&&(L=++g.frame,m=T-g.time*1e3,g.time=T=T/1e3,o+=S+(S>=s?4:s-S),y=1),x||(c=d(f)),y)for(h=0;h<a.length;h++)a[h](T,m,L,v)};return g={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(v){return m/(1e3/(v||60))},wake:function(){wo&&(!Nn&&$n()&&(Gt=Nn=window,Qn=Gt.document||{},xt.gsap=Ge,(Gt.gsapVersions||(Gt.gsapVersions=[])).push(Ge.version),yo(Mr||Gt.GreenSockGlobals||!Gt.gsap&&Gt||{}),Ro.forEach(Fo)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&g.sleep(),d=u||function(v){return setTimeout(v,o-g.time*1e3+1|0)},j0=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),j0=0,d=G0},lagSmoothing:function(v,k){t=v||1/0,r=Math.min(k||33,t)},fps:function(v){s=1e3/(v||240),o=g.time*1e3+s},add:function(v,k,x){var S=k?function(y,T,L,b){v(y,T,L,b),g.remove(S)}:v;return g.remove(v),a[x?"unshift":"push"](S),v0(),S},remove:function(v,k){~(k=a.indexOf(v))&&a.splice(k,1)&&h>=k&&h--},_listeners:a},g}(),v0=function(){return!j0&&ft.wake()},J={},ml=/^[\d.\-M][\d.\-,\s]/,pl=/["']/g,_l=function(t){for(var r={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,c,d;s<o;s++)c=i[s],a=s!==o-1?c.lastIndexOf(","):c.length,d=c.substr(0,a),r[n]=isNaN(d)?d.replace(pl,"").trim():+d,n=c.substr(a+1).trim();return r},vl=function(t){var r=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",r);return t.substring(r,~n&&n<i?t.indexOf(")",i+1):i)},wl=function(t){var r=(t+"").split("("),i=J[r[0]];return i&&r.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[_l(r[1])]:vl(t).split(",").map(To)):J._CE&&ml.test(t)?J._CE("",t):i},Ho=function(t){return function(r){return 1-t(1-r)}},Vo=function l(t,r){for(var i=t._first,n;i;)i instanceof Fe?l(i,r):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==r&&(i.timeline?l(i.timeline,r):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=r)),i=i._next},Vi=function(t,r){return t&&(me(t)?t:J[t]||wl(t))||r},Ui=function(t,r,i,n){i===void 0&&(i=function(c){return 1-r(1-c)}),n===void 0&&(n=function(c){return c<.5?r(c*2)/2:1-r((1-c)*2)/2});var s={easeIn:r,easeOut:i,easeInOut:n},o;return it(t,function(a){J[a]=xt[a]=s,J[o=a.toLowerCase()]=i;for(var c in s)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[a+"."+c]=s[c]}),s},Yo=function(t){return function(r){return r<.5?(1-t(1-r*2))/2:.5+t((r-.5)*2)/2}},zn=function l(t,r,i){var n=r>=1?r:1,s=(i||(t?.3:.45))/(r<1?r:1),o=s/Rn*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*G1((u-o)*s)+1},c=t==="out"?a:t==="in"?function(d){return 1-a(1-d)}:Yo(a);return s=Rn/s,c.config=function(d,u){return l(t,d,u)},c},An=function l(t,r){r===void 0&&(r=1.70158);var i=function(o){return o?--o*o*((r+1)*o+r)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Yo(i);return n.config=function(s){return l(t,s)},n};it("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var r=t<5?t+1:t;Ui(l+",Power"+(r-1),t?function(i){return Math.pow(i,r)}:function(i){return i},function(i){return 1-Math.pow(1-i,r)},function(i){return i<.5?Math.pow(i*2,r)/2:1-Math.pow((1-i)*2,r)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Ui("Elastic",zn("in"),zn("out"),zn());(function(l,t){var r=1/t,i=2*r,n=2.5*r,s=function(a){return a<r?l*a*a:a<i?l*Math.pow(a-1.5/t,2)+.75:a<n?l*(a-=2.25/t)*a+.9375:l*Math.pow(a-2.625/t,2)+.984375};Ui("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ui("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});Ui("Circ",function(l){return-(po(1-l*l)-1)});Ui("Sine",function(l){return l===1?1:-U1(l*X1)+1});Ui("Back",An("in"),An("out"),An());J.SteppedEase=J.steps=xt.SteppedEase={config:function(t,r){t===void 0&&(t=1);var i=1/t,n=t+(r?0:1),s=r?1:0,o=1-ne;return function(a){return((n*J0(0,o,a)|0)+s)*i}}};g0.ease=J["quad.out"];it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return es+=l+","+l+"Params,"});var ns=function(t,r){this.id=W1++,t._gsap=this,this.target=t,this.harness=r,this.get=r?r.get:is,this.set=r?r.getSetter:Nr},$0=function(){function l(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,_0(this,+r.duration,1,1),this.data=r.data,ce&&(this._ctx=ce,ce.data.push(this)),j0||ft.wake()}var t=l.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,_0(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(v0(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fr(this,i),!s._dp||s.parent||Lo(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ne||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ko(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+co(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+co(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?p0(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Pr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ne?0:this._rts,this.totalTime(J0(-Math.abs(this._delay),this._tDur,s),n!==!1),Rr(this),el(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(v0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&jt(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(gt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pr(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=J1);var n=Ne;return Ne=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ne=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,uo(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,uo(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Mt(this,i),gt(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,gt(n)),this._dur||(this._zTime=-ne),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ne)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(s){var o=me(i)?i:So,a=function(){var d=n.then;n.then=null,me(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=d),s(o),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){H0(this)},l}();kt($0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Fe=function(l){mo(t,l);function t(i,n){var s;return i===void 0&&(i={}),s=l.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=gt(i.sortChildren),ue&&jt(i.parent||ue,si(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Eo(si(s),i.scrollTrigger),s}var r=t.prototype;return r.to=function(n,s,o){return X0(0,arguments,this),this},r.from=function(n,s,o){return X0(1,arguments,this),this},r.fromTo=function(n,s,o,a){return X0(2,arguments,this),this},r.set=function(n,s,o){return s.duration=0,s.parent=this,Y0(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(n,s,Mt(this,o),1),this},r.call=function(n,s,o){return jt(this,xe.delayedCall(0,n,s),o)},r.staggerTo=function(n,s,o,a,c,d,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=d,o.onCompleteParams=u,o.parent=this,new xe(n,o,Mt(this,c)),this},r.staggerFrom=function(n,s,o,a,c,d,u){return o.runBackwards=1,Y0(o).immediateRender=gt(o.immediateRender),this.staggerTo(n,s,o,a,c,d,u)},r.staggerFromTo=function(n,s,o,a,c,d,u,g){return a.startAt=o,Y0(a).immediateRender=gt(a.immediateRender),this.staggerTo(n,s,a,c,d,u,g)},r.render=function(n,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=n<=0?0:Se(n),g=this._zTime<0!=n<0&&(this._initted||!d),m,h,p,f,v,k,x,S,y,T,L,b;if(this!==ue&&u>c&&n>=0&&(u=c),u!==this._tTime||o||g){if(a!==this._time&&d&&(u+=this._time-a,n+=this._time-a),m=u,y=this._start,S=this._ts,k=!S,g&&(d||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(L=this._yoyo,v=d+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,s,o);if(m=Se(u%v),u===c?(f=this._repeat,m=d):(T=Se(u/v),f=~~T,f&&f===T&&(m=d,f--),m>d&&(m=d)),T=p0(this._tTime,v),!a&&this._tTime&&T!==f&&this._tTime-T*v-this._dur<=0&&(T=f),L&&f&1&&(m=d-m,b=1),f!==T&&!this._lock){var M=L&&T&1,C=M===(L&&f&1);if(f<T&&(M=!M),a=M?0:u%d?d:u,this._lock=1,this.render(a||(b?0:Se(f*v)),s,!d)._lock=0,this._tTime=u,!s&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,a=M?d:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;Vo(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=nl(this,Se(a),Se(m)),x&&(u-=m-(m=x._start))),this._tTime=u,this._time=m,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&m&&!s&&!f&&(bt(this,"onStart"),this._tTime!==u))return this;if(m>=a&&n>=0)for(h=this._first;h;){if(p=h._next,(h._act||m>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(m-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(m-h._start)*h._ts,s,o),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=-ne);break}}h=p}else{h=this._last;for(var E=n<0?n:m;h;){if(p=h._prev,(h._act||E<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(n,s,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,o||Ne&&(h._initted||h._startAt)),m!==this._time||!this._ts&&!k){x=0,p&&(u+=this._zTime=E?-ne:ne);break}}h=p}}if(x&&!s&&(this.pause(),x.render(m>=a?0:-ne)._zTime=m>=a?1:-1,this._ts))return this._start=y,Rr(this),this.render(n,s,o);this._onUpdate&&!s&&bt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(n<0&&!a)&&(u||a||!c)&&(bt(this,u===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,s){var o=this;if(ai(s)||(s=Mt(this,s,n)),!(n instanceof $0)){if(Ue(n))return n.forEach(function(a){return o.add(a,s)}),this;if(Me(n))return this.addLabel(n,s);if(me(n))n=xe.delayedCall(0,n);else return this}return this!==n?jt(this,n,s):this},r.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bt);for(var c=[],d=this._first;d;)d._start>=a&&(d instanceof xe?s&&c.push(d):(o&&c.push(d),n&&c.push.apply(c,d.getChildren(!0,s,o)))),d=d._next;return c},r.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},r.remove=function(n){return Me(n)?this.removeLabel(n):me(n)?this.killTweensOf(n):(n.parent===this&&Dr(this,n),n===this._recent&&(this._recent=this._last),Hi(this))},r.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(ft.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),l.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},r.addLabel=function(n,s){return this.labels[n]=Mt(this,s),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,s,o){var a=xe.delayedCall(0,s||G0,o);return a.data="isPause",this._hasPause=1,jt(this,a,Mt(this,n))},r.removePause=function(n){var s=this._first;for(n=Mt(this,n);s;)s._start===n&&s.data==="isPause"&&Si(s),s=s._next},r.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),c=a.length;c--;)xi!==a[c]&&a[c].kill(n,s);return this},r.getTweensOf=function(n,s){for(var o=[],a=It(n),c=this._first,d=ai(s),u;c;)c instanceof xe?K1(c._targets,a)&&(d?(!xi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},r.tweenTo=function(n,s){s=s||{};var o=this,a=Mt(o,n),c=s,d=c.startAt,u=c.onStart,g=c.onStartParams,m=c.immediateRender,h,p=xe.to(o,kt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(d&&"time"in d?d.time:o._time))/o.timeScale())||ne,onStart:function(){if(o.pause(),!h){var v=s.duration||Math.abs((a-(d&&"time"in d?d.time:o._time))/o.timeScale());p._dur!==v&&_0(p,v,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,g||[])}},s));return m?p.render(0):p},r.tweenFromTo=function(n,s,o){return this.tweenTo(s,kt({startAt:{time:Mt(this,n)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),ho(this,Mt(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),ho(this,Mt(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ne)},r.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,d;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(d in c)c[d]>=o&&(c[d]+=n);return Hi(this)},r.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return l.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Hi(this)},r.totalDuration=function(n){var s=0,o=this,a=o._last,c=Bt,d,u,g;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(g=o.parent;a;)d=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,jt(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!g&&!o._dp||g&&g.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=d;_0(o,o===ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ue._ts&&(ko(ue,Pr(n,ue)),xo=ft.frame),ft.frame>=ao){ao+=mt.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&mt.autoSleep&&ft._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ft.sleep()}}},t}($0);kt(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var yl=function(t,r,i,n,s,o,a){var c=new rt(this._pt,t,r,0,1,cs,null,s),d=0,u=0,g,m,h,p,f,v,k,x;for(c.b=i,c.e=n,i+="",n+="",(k=~n.indexOf("random("))&&(n=w0(n)),o&&(x=[i,n],o(x,t,r),i=x[0],n=x[1]),m=i.match(Bn)||[];g=Bn.exec(n);)p=g[0],f=n.substring(d,g.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),p!==m[u++]&&(v=parseFloat(m[u-1])||0,c._pt={_next:c._pt,p:f||u===1?f:",",s:v,c:p.charAt(1)==="="?Wi(v,p)-v:parseFloat(p)-v,m:h&&h<4?Math.round:0},d=Bn.lastIndex);return c.c=d<n.length?n.substring(d,n.length):"",c.fp=a,(Kn.test(n)||k)&&(c.e=0),this._pt=c,c},ss=function(t,r,i,n,s,o,a,c,d,u){me(n)&&(n=n(s||0,t,o));var g=t[r],m=i!=="get"?i:me(g)?d?t[r.indexOf("set")||!me(t["get"+r.substr(3)])?r:"get"+r.substr(3)](d):t[r]():g,h=me(g)?d?Sl:Uo:ls,p;if(Me(n)&&(~n.indexOf("random(")&&(n=w0(n)),n.charAt(1)==="="&&(p=Wi(m,n)+(qe(m)||0),(p||p===0)&&(n=p))),!u||m!==n||Un)return!isNaN(m*n)&&n!==""?(p=new rt(this._pt,t,r,+m||0,n-(m||0),typeof g=="boolean"?Ll:Go,0,h),d&&(p.fp=d),a&&p.modifier(a,this,t),this._pt=p):(!g&&!(r in t)&&Or(r,n),yl.call(this,t,r,m,n,h,c||mt.stringFilter,d))},bl=function(t,r,i,n,s){if(me(t)&&(t=W0(t,s,r,i,n)),!$t(t)||t.style&&t.nodeType||Ue(t)||_o(t))return Me(t)?W0(t,s,r,i,n):t;var o={},a;for(a in t)o[a]=W0(t[a],s,r,i,n);return o},os=function(t,r,i,n,s,o){var a,c,d,u;if(ht[t]&&(a=new ht[t]).init(s,a.rawVars?r[t]:bl(r[t],n,s,o,i),i,n,o)!==!1&&(i._pt=c=new rt(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==f0))for(d=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)d[a._props[u]]=c;return a},xi,Un,as=function l(t,r,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,c=n.lazy,d=n.onUpdate,u=n.runBackwards,g=n.yoyoEase,m=n.keyframes,h=n.autoRevert,p=t._dur,f=t._startAt,v=t._targets,k=t.parent,x=k&&k.data==="nested"?k.vars.targets:v,S=t._overwrite==="auto"&&!jn,y=t.timeline,T,L,b,M,C,E,D,B,G,W,K,j,O;if(y&&(!m||!s)&&(s="none"),t._ease=Vi(s,g0.ease),t._yEase=g?Ho(Vi(g===!0?s:g,g0.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!y&&!!n.runBackwards,!y||m&&!n.stagger){if(B=v[0]?Ti(v[0]).harness:0,j=B&&n[B.prop],T=Ir(n,Zn),f&&(f._zTime<0&&f.progress(1),r<0&&u&&a&&!h?f.render(-1,!0):f.revert(u&&p?Cr:$1),f._lazy=0),o){if(Si(t._startAt=xe.set(v,kt({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!f&&gt(c),startAt:null,delay:0,onUpdate:d&&function(){return bt(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ne||!a&&!h)&&t._startAt.revert(Cr),a&&p&&r<=0&&i<=0){r&&(t._zTime=r);return}}else if(u&&p&&!f){if(r&&(a=!1),b=kt({overwrite:!1,data:"isFromStart",lazy:a&&!f&&gt(c),immediateRender:a,stagger:0,parent:k},T),j&&(b[B.prop]=j),Si(t._startAt=xe.set(v,b)),t._startAt._dp=0,t._startAt._sat=t,r<0&&(Ne?t._startAt.revert(Cr):t._startAt.render(-1,!0)),t._zTime=r,!a)l(t._startAt,ne,ne);else if(!r)return}for(t._pt=t._ptCache=0,c=p&&gt(c)||c&&!p,L=0;L<v.length;L++){if(C=v[L],D=C._gsap||ts(v)[L]._gsap,t._ptLookup[L]=W={},qn[D.id]&&ki.length&&Br(),K=x===v?L:x.indexOf(C),B&&(G=new B).init(C,j||T,t,K,x)!==!1&&(t._pt=M=new rt(t._pt,C,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(Z){W[Z]=M}),G.priority&&(E=1)),!B||j)for(b in T)ht[b]&&(G=os(b,T,t,K,C,x))?G.priority&&(E=1):W[b]=M=ss.call(t,C,b,"get",T[b],K,x,0,n.stringFilter);t._op&&t._op[L]&&t.kill(C,t._op[L]),S&&t._pt&&(xi=t,ue.killTweensOf(C,W,t.globalTime(r)),O=!t.parent,xi=0),t._pt&&c&&(qn[D.id]=1)}E&&us(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!O,m&&r<=0&&y.render(Bt,!0,!0)},xl=function(t,r,i,n,s,o,a,c){var d=(t._pt&&t._ptCache||(t._ptCache={}))[r],u,g,m,h;if(!d)for(d=t._ptCache[r]=[],m=t._ptLookup,h=t._targets.length;h--;){if(u=m[h][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return Un=1,t.vars[r]="+=0",as(t,a),Un=0,c?U0(r+" not eligible for reset"):1;d.push(u)}for(h=d.length;h--;)g=d[h],u=g._pt||g,u.s=(n||n===0)&&!s?n:u.s+(n||0)+o*u.c,u.c=i-u.s,g.e&&(g.e=pe(i)+qe(g.e)),g.b&&(g.b=u.s+qe(g.b))},kl=function(t,r){var i=t[0]?Ti(t[0]).harness:0,n=i&&i.aliases,s,o,a,c;if(!n)return r;s=m0({},r);for(o in n)if(o in s)for(c=n[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},Tl=function(t,r,i,n){var s=r.ease||n||"power1.inOut",o,a;if(Ue(r))a=i[t]||(i[t]=[]),r.forEach(function(c,d){return a.push({t:d/(r.length-1)*100,v:c,e:s})});else for(o in r)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:r[o],e:s})},W0=function(t,r,i,n,s){return me(t)?t.call(r,i,n,s):Me(t)&&~t.indexOf("random(")?w0(t):t},Xo=es+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wo={};it(Xo+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return Wo[l]=1});var xe=function(l){mo(t,l);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=l.call(this,o?n:Y0(n))||this;var c=a.vars,d=c.duration,u=c.delay,g=c.immediateRender,m=c.stagger,h=c.overwrite,p=c.keyframes,f=c.defaults,v=c.scrollTrigger,k=c.yoyoEase,x=n.parent||ue,S=(Ue(i)||_o(i)?ai(i[0]):"length"in n)?[i]:It(i),y,T,L,b,M,C,E,D;if(a._targets=S.length?ts(S):U0("GSAP target "+i+" not found. https://gsap.com",!mt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,p||m||Sr(d)||Sr(u)){if(n=a.vars,y=a.timeline=new Fe({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=si(a),y._start=0,m||Sr(d)||Sr(u)){if(b=S.length,E=m&&Po(m),$t(m))for(M in m)~Xo.indexOf(M)&&(D||(D={}),D[M]=m[M]);for(T=0;T<b;T++)L=Ir(n,Wo),L.stagger=0,k&&(L.yoyoEase=k),D&&m0(L,D),C=S[T],L.duration=+W0(d,si(a),T,C,S),L.delay=(+W0(u,si(a),T,C,S)||0)-a._delay,!m&&b===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),y.to(C,L,E?E(T,C,S):0),y._ease=J.none;y.duration()?d=u=0:a.timeline=0}else if(p){Y0(kt(y.vars.defaults,{ease:"none"})),y._ease=Vi(p.ease||n.ease||"none");var B=0,G,W,K;if(Ue(p))p.forEach(function(j){return y.to(S,j,">")}),y.duration();else{L={};for(M in p)M==="ease"||M==="easeEach"||Tl(M,p[M],L,p.easeEach);for(M in L)for(G=L[M].sort(function(j,O){return j.t-O.t}),B=0,T=0;T<G.length;T++)W=G[T],K={ease:W.e,duration:(W.t-(T?G[T-1].t:0))/100*d},K[M]=W.v,y.to(S,K,B),B+=K.duration;y.duration()<d&&y.to({},{duration:d-y.duration()})}}d||a.duration(d=y.duration())}else a.timeline=0;return h===!0&&!jn&&(xi=si(a),ue.killTweensOf(S),xi=0),jt(x,si(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(g||!d&&!p&&a._start===Se(x._time)&&gt(g)&&tl(si(a))&&x.data!=="nested")&&(a._tTime=-ne,a.render(Math.max(0,-u)||0)),v&&Eo(si(a),v),a}var r=t.prototype;return r.render=function(n,s,o){var a=this._time,c=this._tDur,d=this._dur,u=n<0,g=n>c-ne&&!u?c:n<ne?0:n,m,h,p,f,v,k,x,S,y;if(!d)rl(this,n,s,o);else if(g!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(m=g,S=this.timeline,this._repeat){if(f=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+n,s,o);if(m=Se(g%f),g===c?(p=this._repeat,m=d):(v=Se(g/f),p=~~v,p&&p===v?(m=d,p--):m>d&&(m=d)),k=this._yoyo&&p&1,k&&(y=this._yEase,m=d-m),v=p0(this._tTime,f),m===a&&!o&&this._initted&&p===v)return this._tTime=g,this;p!==v&&(S&&this._yEase&&Vo(S,k),this.vars.repeatRefresh&&!k&&!this._lock&&m!==f&&this._initted&&(this._lock=o=1,this.render(Se(f*p),!0).invalidate()._lock=0))}if(!this._initted){if(Mo(this,u?n:m,o,s,g))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==v))return this;if(d!==this._dur)return this.render(n,s,o)}if(this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(m/d),this._from&&(this.ratio=x=1-x),m&&!a&&!s&&!p&&(bt(this,"onStart"),this._tTime!==g))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;S&&S.render(n<0?n:S._dur*S._ease(m/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Hn(this,n,s,o),bt(this,"onUpdate")),this._repeat&&p!==v&&this.vars.onRepeat&&!s&&this.parent&&bt(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(u&&!this._onUpdate&&Hn(this,n,!0,!0),(n||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Si(this,1),!s&&!(u&&!a)&&(g||a||k)&&(bt(this,g===c?"onComplete":"onReverseComplete",!0),this._prom&&!(g<c&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),l.prototype.invalidate.call(this,n)},r.resetTo=function(n,s,o,a,c){j0||ft.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||as(this,d),u=this._ease(d/this._dur),xl(this,n,s,o,a,u,d,c)?this.resetTo(n,s,o,a,1):(Fr(this,0),this.parent||Co(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?H0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,xi&&xi.vars.overwrite!==!0)._first||H0(this),this.parent&&o!==this.timeline.totalDuration()&&_0(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=n?It(n):a,d=this._ptLookup,u=this._pt,g,m,h,p,f,v,k;if((!s||s==="all")&&Z1(a,c))return s==="all"&&(this._pt=0),H0(this);for(g=this._op=this._op||[],s!=="all"&&(Me(s)&&(f={},it(s,function(x){return f[x]=1}),s=f),s=kl(a,s)),k=a.length;k--;)if(~c.indexOf(a[k])){m=d[k],s==="all"?(g[k]=s,p=m,h={}):(h=g[k]=g[k]||{},p=s);for(f in p)v=m&&m[f],v&&((!("kill"in v.d)||v.d.kill(f)===!0)&&Dr(this,v,"_pt"),delete m[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&H0(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return X0(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return X0(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return ue.killTweensOf(n,s,o)},t}($0);kt(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});it("staggerTo,staggerFrom,staggerFromTo",function(l){xe[l]=function(){var t=new Fe,r=Yn.call(arguments,0);return r.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,r)}});var ls=function(t,r,i){return t[r]=i},Uo=function(t,r,i){return t[r](i)},Sl=function(t,r,i,n){return t[r](n.fp,i)},Cl=function(t,r,i){return t.setAttribute(r,i)},Nr=function(t,r){return me(t[r])?Uo:Ar(t[r])&&t.setAttribute?Cl:ls},Go=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e6)/1e6,r)},Ll=function(t,r){return r.set(r.t,r.p,!!(r.s+r.c*t),r)},cs=function(t,r){var i=r._pt,n="";if(!t&&r.b)n=r.b;else if(t===1&&r.e)n=r.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=r.c}r.set(r.t,r.p,n,r)},ds=function(t,r){for(var i=r._pt;i;)i.r(t,i.d),i=i._next},El=function(t,r,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,r,i),s=o},Ml=function(t){for(var r=this._pt,i,n;r;)n=r._next,r.p===t&&!r.op||r.op===t?Dr(this,r,"_pt"):r.dep||(i=1),r=n;return!i},Bl=function(t,r,i,n){n.mSet(t,r,n.m.call(n.tween,i,n.mt),n)},us=function(t){for(var r=t._pt,i,n,s,o;r;){for(i=r._next,n=s;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:o)?r._prev._next=r:s=r,(r._next=n)?n._prev=r:o=r,r=i}t._pt=s},rt=function(){function l(r,i,n,s,o,a,c,d,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||Go,this.d=c||this,this.set=d||ls,this.pr=u||0,this._next=r,r&&(r._prev=this)}var t=l.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Bl,this.m=i,this.mt=s,this.tween=n},l}();it(es+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return Zn[l]=1});xt.TweenMax=xt.TweenLite=xe;xt.TimelineLite=xt.TimelineMax=Fe;ue=new Fe({sortChildren:!1,defaults:g0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mt.stringFilter=rs;var Yi=[],Er={},Il=[],go=0,Pl=0,On=function(t){return(Er[t]||Il).map(function(r){return r()})},Gn=function(){var t=Date.now(),r=[];t-go>2&&(On("matchMediaInit"),Yi.forEach(function(i){var n=i.queries,s=i.conditions,o,a,c,d;for(a in n)o=Gt.matchMedia(n[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,d=1);d&&(i.revert(),c&&r.push(i))}),On("matchMediaRevert"),r.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),go=t,On("matchMedia"))},jo=function(){function l(r,i){this.selector=i&&Xn(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Pl++,r&&this.add(r)}var t=l.prototype;return t.add=function(i,n,s){me(i)&&(s=n,n=i,i=me);var o=this,a=function(){var d=ce,u=o.selector,g;return d&&d!==o&&d.data.push(o),s&&(o.selector=Xn(s)),ce=o,g=n.apply(o,arguments),me(g)&&o._r.push(g),ce=d,o.selector=u,o.isReverted=!1,g};return o.last=a,i===me?a(o,function(c){return o.add(null,c)}):i?o[i]=a:a},t.ignore=function(i){var n=ce;ce=null,i(this),ce=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof l?i.push.apply(i,n.getTweens()):n instanceof xe&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?function(){for(var a=s.getTweens(),c=s.data.length,d;c--;)d=s.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,g){return g.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),c=s.data.length;c--;)d=s.data[c],d instanceof Fe?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof xe)&&d.revert&&d.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Yi.length;o--;)Yi[o].id===this.id&&Yi.splice(o,1)},t.revert=function(i){this.kill(i||{})},l}(),zl=function(){function l(r){this.contexts=[],this.scope=r,ce&&ce.data.push(this)}var t=l.prototype;return t.add=function(i,n,s){$t(i)||(i={matches:i});var o=new jo(0,s||this.scope),a=o.conditions={},c,d,u;ce&&!o.selector&&(o.selector=ce.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(d in i)d==="all"?u=1:(c=Gt.matchMedia(i[d]),c&&(Yi.indexOf(o)<0&&Yi.push(o),(a[d]=c.matches)&&(u=1),c.addListener?c.addListener(Gn):c.addEventListener("change",Gn)));return u&&n(o,function(g){return o.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},l}(),zr={registerPlugin:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];r.forEach(function(n){return Fo(n)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,r){return ue.getTweensOf(t,r)},getProperty:function(t,r,i,n){Me(t)&&(t=It(t)[0]);var s=Ti(t||{}).get,o=i?So:To;return i==="native"&&(i=""),t&&(r?o((ht[r]&&ht[r].get||s)(t,r,i,n)):function(a,c,d){return o((ht[a]&&ht[a].get||s)(t,a,c,d))})},quickSetter:function(t,r,i){if(t=It(t),t.length>1){var n=t.map(function(u){return Ge.quickSetter(u,r,i)}),s=n.length;return function(u){for(var g=s;g--;)n[g](u)}}t=t[0]||{};var o=ht[r],a=Ti(t),c=a.harness&&(a.harness.aliases||{})[r]||r,d=o?function(u){var g=new o;f0._pt=0,g.init(t,i?u+i:u,f0,0,[t]),g.render(1,g),f0._pt&&ds(1,f0)}:a.set(t,c);return o?d:function(u){return d(t,c,i?u+i:u,a,1)}},quickTo:function(t,r,i){var n,s=Ge.to(t,kt((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(c,d,u){return s.resetTo(r,c,d,u)};return o.tween=s,o},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,g0.ease)),lo(g0,t||{})},config:function(t){return lo(mt,t||{})},registerEffect:function(t){var r=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!ht[a]&&!xt[a]&&U0(r+" effect requires "+a+" plugin.")}),In[r]=function(a,c,d){return i(It(a),kt(c||{},s),d)},o&&(Fe.prototype[r]=function(a,c,d){return this.add(In[r](a,$t(c)?c:(d=c)&&{},this),d)})},registerEase:function(t,r){J[t]=Vi(r)},parseEase:function(t,r){return arguments.length?Vi(t,r):J},getById:function(t){return ue.getById(t)},exportRoot:function(t,r){t===void 0&&(t={});var i=new Fe(t),n,s;for(i.smoothChildTiming=gt(t.smoothChildTiming),ue.remove(i),i._dp=0,i._time=i._tTime=ue._time,n=ue._first;n;)s=n._next,(r||!(!n._dur&&n instanceof xe&&n.vars.onComplete===n._targets[0]))&&jt(i,n,n._start-n._delay),n=s;return jt(ue,i,0),i},context:function(t,r){return t?new jo(t,r):ce},matchMedia:function(t){return new zl(t)},matchMediaRefresh:function(){return Yi.forEach(function(t){var r=t.conditions,i,n;for(n in r)r[n]&&(r[n]=!1,i=1);i&&t.revert()})||Gn()},addEventListener:function(t,r){var i=Er[t]||(Er[t]=[]);~i.indexOf(r)||i.push(r)},removeEventListener:function(t,r){var i=Er[t],n=i&&i.indexOf(r);n>=0&&i.splice(n,1)},utils:{wrap:ul,wrapYoyo:hl,distribute:Po,random:Ao,snap:zo,normalize:dl,getUnit:qe,clamp:ol,splitColor:No,toArray:It,selector:Xn,mapRange:Do,pipe:ll,unitize:cl,interpolate:fl,shuffle:Io},install:yo,effects:In,ticker:ft,updateRoot:Fe.updateRoot,plugins:ht,globalTimeline:ue,core:{PropTween:rt,globals:bo,Tween:xe,Timeline:Fe,Animation:$0,getCache:Ti,_removeLinkedListItem:Dr,reverting:function(){return Ne},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return jn=t}}};it("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return zr[l]=xe[l]});ft.add(Fe.updateRoot);f0=zr.to({},{duration:0});var Al=function(t,r){for(var i=t._pt;i&&i.p!==r&&i.op!==r&&i.fp!==r;)i=i._next;return i},Ol=function(t,r){var i=t._targets,n,s,o;for(n in r)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Al(o,n)),o&&o.modifier&&o.modifier(r[n],t,i[s],n))},Dn=function(t,r){return{name:t,rawVars:1,init:function(n,s,o){o._onInit=function(a){var c,d;if(Me(s)&&(c={},it(s,function(u){return c[u]=1}),s=c),r){c={};for(d in s)c[d]=r(s[d]);s=c}Ol(a,s)}}}},Ge=zr.registerPlugin({name:"attr",init:function(t,r,i,n,s){var o,a,c;this.tween=i;for(o in r)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",r[o],n,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,r){for(var i=r._pt;i;)Ne?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,r){for(var i=r.length;i--;)this.add(t,i,t[i]||0,r[i],0,0,0,0,0,1)}},Dn("roundProps",Wn),Dn("modifiers"),Dn("snap",zo))||zr;xe.version=Fe.version=Ge.version="3.12.7";wo=1;$n()&&v0();var Dl=J.Power0,Rl=J.Power1,Fl=J.Power2,Nl=J.Power3,ql=J.Power4,Hl=J.Linear,Vl=J.Quad,Yl=J.Cubic,Xl=J.Quart,Wl=J.Quint,Ul=J.Strong,Gl=J.Elastic,jl=J.Back,$l=J.SteppedEase,Jl=J.Bounce,Kl=J.Sine,Ql=J.Expo,Zl=J.Circ;var $o,Li,b0,_s,Ji,ec,Jo,vs,tc=function(){return typeof window<"u"},ci={},$i=180/Math.PI,x0=Math.PI/180,y0=Math.atan2,Ko=1e8,ws=/([A-Z])/g,ic=/(left|right|width|margin|padding|x)/i,rc=/[\s,\(]\S/,Jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fs=function(t,r){return r.set(r.t,r.p,Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},nc=function(t,r){return r.set(r.t,r.p,t===1?r.e:Math.round((r.s+r.c*t)*1e4)/1e4+r.u,r)},sc=function(t,r){return r.set(r.t,r.p,t?Math.round((r.s+r.c*t)*1e4)/1e4+r.u:r.b,r)},oc=function(t,r){var i=r.s+r.c*t;r.set(r.t,r.p,~~(i+(i<0?-.5:.5))+r.u,r)},sa=function(t,r){return r.set(r.t,r.p,t?r.e:r.b,r)},oa=function(t,r){return r.set(r.t,r.p,t!==1?r.b:r.e,r)},ac=function(t,r,i){return t.style[r]=i},lc=function(t,r,i){return t.style.setProperty(r,i)},cc=function(t,r,i){return t._gsap[r]=i},dc=function(t,r,i){return t._gsap.scaleX=t._gsap.scaleY=i},uc=function(t,r,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},hc=function(t,r,i,n,s){var o=t._gsap;o[r]=i,o.renderTransform(s,o)},he="transform",pt=he+"Origin",fc=function l(t,r){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in ci&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Jt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=li(n,a)}):this.tfm[t]=o.x?o[t]:li(n,t),t===pt&&(this.tfm.zOrigin=o.zOrigin);else return Jt.transform.split(",").forEach(function(a){return l.call(i,a,r)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pt,r,"")),t=he}(s||r)&&this.props.push(t,r,s[t])},aa=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},gc=function(){var t=this.props,r=this.target,i=r.style,n=r._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?r[t[s]](t[s+2]):r[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ws,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),s=vs(),(!s||!s.isStart)&&!i[he]&&(aa(i),n.zOrigin&&i[pt]&&(i[pt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},la=function(t,r){var i={target:t,props:[],revert:gc,save:fc};return t._gsap||Ge.core.getCache(t),r&&t.style&&t.nodeType&&r.split(",").forEach(function(n){return i.save(n)}),i},ca,gs=function(t,r){var i=Li.createElementNS?Li.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Li.createElement(t);return i&&i.style?i:Li.createElement(t)},Kt=function l(t,r,i){var n=getComputedStyle(t);return n[r]||n.getPropertyValue(r.replace(ws,"-$1").toLowerCase())||n.getPropertyValue(r)||!i&&l(t,k0(r)||r,1)||""},Qo="O,Moz,ms,Ms,Webkit".split(","),k0=function(t,r,i){var n=r||Ji,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Qo[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Qo[o]:"")+t},ms=function(){tc()&&window.document&&($o=window,Li=$o.document,b0=Li.documentElement,Ji=gs("div")||{style:{}},ec=gs("div"),he=k0(he),pt=he+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ca=!!k0("perspective"),vs=Ge.core.reverting,_s=1)},Zo=function(t){var r=t.ownerSVGElement,i=gs("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),b0.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),b0.removeChild(i),s},ea=function(t,r){for(var i=r.length;i--;)if(t.hasAttribute(r[i]))return t.getAttribute(r[i])},da=function(t){var r,i;try{r=t.getBBox()}catch{r=Zo(t),i=1}return r&&(r.width||r.height)||i||(r=Zo(t)),r&&!r.width&&!r.x&&!r.y?{x:+ea(t,["x","cx","x1"])||0,y:+ea(t,["y","cy","y1"])||0,width:0,height:0}:r},ua=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&da(t))},Ki=function(t,r){if(r){var i=t.style,n;r in ci&&r!==pt&&(r=he),i.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),i.removeProperty(n==="--"?r:r.replace(ws,"-$1").toLowerCase())):i.removeAttribute(r)}},Ei=function(t,r,i,n,s,o){var a=new rt(t._pt,r,i,0,1,o?oa:sa);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},ta={deg:1,rad:1,turn:1},mc={grid:1,flex:1},Mi=function l(t,r,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ji.style,c=ic.test(r),d=t.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),g=100,m=n==="px",h=n==="%",p,f,v,k;if(n===o||!s||ta[n]||ta[o])return s;if(o!=="px"&&!m&&(s=l(t,r,i,"px")),k=t.getCTM&&ua(t),(h||o==="%")&&(ci[r]||~r.indexOf("adius")))return p=k?t.getBBox()[c?"width":"height"]:t[u],pe(h?s/p*g:s/100*p);if(a[c?"width":"height"]=g+(m?o:n),f=n!=="rem"&&~r.indexOf("adius")||n==="em"&&t.appendChild&&!d?t:t.parentNode,k&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Li||!f.appendChild)&&(f=Li.body),v=f._gsap,v&&h&&v.width&&c&&v.time===ft.time&&!v.uncache)return pe(s/v.width*g);if(h&&(r==="height"||r==="width")){var x=t.style[r];t.style[r]=g+n,p=t[u],x?t.style[r]=x:Ki(t,r)}else(h||o==="%")&&!mc[Kt(f,"display")]&&(a.position=Kt(t,"position")),f===t&&(a.position="static"),f.appendChild(Ji),p=Ji[u],f.removeChild(Ji),a.position="absolute";return c&&h&&(v=Ti(f),v.time=ft.time,v.width=f[u]),pe(m?p*s/g:p&&s?g/p*s:0)},li=function(t,r,i,n){var s;return _s||ms(),r in Jt&&r!=="transform"&&(r=Jt[r],~r.indexOf(",")&&(r=r.split(",")[0])),ci[r]&&r!=="transform"?(s=Z0(t,n),s=r!=="transformOrigin"?s[r]:s.svg?s.origin:Hr(Kt(t,pt))+" "+s.zOrigin+"px"):(s=t.style[r],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=qr[r]&&qr[r](t,r,i)||Kt(t,r)||is(t,r)||(r==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Mi(t,r,s,i)+i:s},pc=function(t,r,i,n){if(!i||i==="none"){var s=k0(r,t,1),o=s&&Kt(t,s,1);o&&o!==i?(r=s,i=o):r==="borderColor"&&(i=Kt(t,"borderTopColor"))}var a=new rt(this._pt,t.style,r,0,1,cs),c=0,d=0,u,g,m,h,p,f,v,k,x,S,y,T;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(f=t.style[r],t.style[r]=n,n=Kt(t,r)||n,f?t.style[r]=f:Ki(t,r)),u=[i,n],rs(u),i=u[0],n=u[1],m=i.match(Xi)||[],T=n.match(Xi)||[],T.length){for(;g=Xi.exec(n);)v=g[0],x=n.substring(c,g.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),v!==(f=m[d++]||"")&&(h=parseFloat(f)||0,y=f.substr((h+"").length),v.charAt(1)==="="&&(v=Wi(h,v)+y),k=parseFloat(v),S=v.substr((k+"").length),c=Xi.lastIndex-S.length,S||(S=S||mt.units[r]||y,c===n.length&&(n+=S,a.e+=S)),y!==S&&(h=Mi(t,r,f,S)||0),a._pt={_next:a._pt,p:x||d===1?x:",",s:h,c:k-h,m:p&&p<4||r==="zIndex"?Math.round:0});a.c=c<n.length?n.substring(c,n.length):""}else a.r=r==="display"&&n==="none"?oa:sa;return Kn.test(n)&&(a.e=0),this._pt=a,a},ia={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_c=function(t){var r=t.split(" "),i=r[0],n=r[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),r[0]=ia[i]||i,r[1]=ia[n]||n,r.join(" ")},vc=function(t,r){if(r.tween&&r.tween._time===r.tween._dur){var i=r.t,n=i.style,s=r.u,o=i._gsap,a,c,d;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),d=s.length;--d>-1;)a=s[d],ci[a]&&(c=1,a=a==="transformOrigin"?pt:he),Ki(i,a);c&&(Ki(i,he),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Z0(i,1),o.uncache=1,aa(n)))}},qr={clearProps:function(t,r,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new rt(t._pt,r,i,0,0,vc);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},Q0=[1,0,0,1,0,0],ha={},fa=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ra=function(t){var r=Kt(t,he);return fa(r)?Q0:r.substr(7).match(Jn).map(pe)},ys=function(t,r){var i=t._gsap||Ti(t),n=t.style,s=ra(t),o,a,c,d;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Q0:s):(s===Q0&&!t.offsetParent&&t!==b0&&!i.svg&&(c=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,a=t.nextElementSibling,b0.appendChild(t)),s=ra(t),c?n.display=c:Ki(t,"display"),d&&(a?o.insertBefore(t,a):o?o.appendChild(t):b0.removeChild(t))),r&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ps=function(t,r,i,n,s,o){var a=t._gsap,c=s||ys(t,!0),d=a.xOrigin||0,u=a.yOrigin||0,g=a.xOffset||0,m=a.yOffset||0,h=c[0],p=c[1],f=c[2],v=c[3],k=c[4],x=c[5],S=r.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,L,b,M,C;i?c!==Q0&&(b=h*v-p*f)&&(M=y*(v/b)+T*(-f/b)+(f*x-v*k)/b,C=y*(-p/b)+T*(h/b)-(h*x-p*k)/b,y=M,T=C):(L=da(t),y=L.x+(~S[0].indexOf("%")?y/100*L.width:y),T=L.y+(~(S[1]||S[0]).indexOf("%")?T/100*L.height:T)),n||n!==!1&&a.smooth?(k=y-d,x=T-u,a.xOffset=g+(k*h+x*f)-k,a.yOffset=m+(k*p+x*v)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!n,a.origin=r,a.originIsAbsolute=!!i,t.style[pt]="0px 0px",o&&(Ei(o,a,"xOrigin",d,y),Ei(o,a,"yOrigin",u,T),Ei(o,a,"xOffset",g,a.xOffset),Ei(o,a,"yOffset",m,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Z0=function(t,r){var i=t._gsap||new ns(t);if("x"in i&&!r&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",c=getComputedStyle(t),d=Kt(t,pt)||"0",u,g,m,h,p,f,v,k,x,S,y,T,L,b,M,C,E,D,B,G,W,K,j,O,Z,oe,_,ae,Qe,Ot,fe,Oe;return u=g=m=f=v=k=x=S=y=0,h=p=1,i.svg=!!(t.getCTM&&ua(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[he]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[he]!=="none"?c[he]:"")),n.scale=n.rotate=n.translate="none"),b=ys(t,i.svg),i.svg&&(i.uncache?(Z=t.getBBox(),d=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",O=""):O=!r&&t.getAttribute("data-svg-origin"),ps(t,O||d,!!O||i.originIsAbsolute,i.smooth!==!1,b)),T=i.xOrigin||0,L=i.yOrigin||0,b!==Q0&&(D=b[0],B=b[1],G=b[2],W=b[3],u=K=b[4],g=j=b[5],b.length===6?(h=Math.sqrt(D*D+B*B),p=Math.sqrt(W*W+G*G),f=D||B?y0(B,D)*$i:0,x=G||W?y0(G,W)*$i+f:0,x&&(p*=Math.abs(Math.cos(x*x0))),i.svg&&(u-=T-(T*D+L*G),g-=L-(T*B+L*W))):(Oe=b[6],Ot=b[7],_=b[8],ae=b[9],Qe=b[10],fe=b[11],u=b[12],g=b[13],m=b[14],M=y0(Oe,Qe),v=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=K*C+_*E,Z=j*C+ae*E,oe=Oe*C+Qe*E,_=K*-E+_*C,ae=j*-E+ae*C,Qe=Oe*-E+Qe*C,fe=Ot*-E+fe*C,K=O,j=Z,Oe=oe),M=y0(-G,Qe),k=M*$i,M&&(C=Math.cos(-M),E=Math.sin(-M),O=D*C-_*E,Z=B*C-ae*E,oe=G*C-Qe*E,fe=W*E+fe*C,D=O,B=Z,G=oe),M=y0(B,D),f=M*$i,M&&(C=Math.cos(M),E=Math.sin(M),O=D*C+B*E,Z=K*C+j*E,B=B*C-D*E,j=j*C-K*E,D=O,K=Z),v&&Math.abs(v)+Math.abs(f)>359.9&&(v=f=0,k=180-k),h=pe(Math.sqrt(D*D+B*B+G*G)),p=pe(Math.sqrt(j*j+Oe*Oe)),M=y0(K,j),x=Math.abs(M)>2e-4?M*$i:0,y=fe?1/(fe<0?-fe:fe):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!fa(Kt(t,he)),O&&t.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),r=r||i.uncache,i.x=u-((i.xPercent=u&&(!r&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=g-((i.yPercent=g&&(!r&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=m+o,i.scaleX=pe(h),i.scaleY=pe(p),i.rotation=pe(f)+a,i.rotationX=pe(v)+a,i.rotationY=pe(k)+a,i.skewX=x+a,i.skewY=S+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(d.split(" ")[2])||!r&&i.zOrigin||0)&&(n[pt]=Hr(d)),i.xOffset=i.yOffset=0,i.force3D=mt.force3D,i.renderTransform=i.svg?yc:ca?ga:wc,i.uncache=0,i},Hr=function(t){return(t=t.split(" "))[0]+" "+t[1]},hs=function(t,r,i){var n=qe(r);return pe(parseFloat(r)+parseFloat(Mi(t,"x",i+"px",n)))+n},wc=function(t,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,ga(t,r)},Gi="0deg",K0="0px",ji=") ",ga=function(t,r){var i=r||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,c=i.z,d=i.rotation,u=i.rotationY,g=i.rotationX,m=i.skewX,h=i.skewY,p=i.scaleX,f=i.scaleY,v=i.transformPerspective,k=i.force3D,x=i.target,S=i.zOrigin,y="",T=k==="auto"&&t&&t!==1||k===!0;if(S&&(g!==Gi||u!==Gi)){var L=parseFloat(u)*x0,b=Math.sin(L),M=Math.cos(L),C;L=parseFloat(g)*x0,C=Math.cos(L),o=hs(x,o,b*C*-S),a=hs(x,a,-Math.sin(L)*-S),c=hs(x,c,M*C*-S+S)}v!==K0&&(y+="perspective("+v+ji),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(T||o!==K0||a!==K0||c!==K0)&&(y+=c!==K0||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ji),d!==Gi&&(y+="rotate("+d+ji),u!==Gi&&(y+="rotateY("+u+ji),g!==Gi&&(y+="rotateX("+g+ji),(m!==Gi||h!==Gi)&&(y+="skew("+m+", "+h+ji),(p!==1||f!==1)&&(y+="scale("+p+", "+f+ji),x.style[he]=y||"translate(0, 0)"},yc=function(t,r){var i=r||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,c=i.rotation,d=i.skewX,u=i.skewY,g=i.scaleX,m=i.scaleY,h=i.target,p=i.xOrigin,f=i.yOrigin,v=i.xOffset,k=i.yOffset,x=i.forceCSS,S=parseFloat(o),y=parseFloat(a),T,L,b,M,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=x0,d*=x0,T=Math.cos(c)*g,L=Math.sin(c)*g,b=Math.sin(c-d)*-m,M=Math.cos(c-d)*m,d&&(u*=x0,C=Math.tan(d-u),C=Math.sqrt(1+C*C),b*=C,M*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),T*=C,L*=C)),T=pe(T),L=pe(L),b=pe(b),M=pe(M)):(T=g,M=m,L=b=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Mi(h,"x",o,"px"),y=Mi(h,"y",a,"px")),(p||f||v||k)&&(S=pe(S+p-(p*T+f*b)+v),y=pe(y+f-(p*L+f*M)+k)),(n||s)&&(C=h.getBBox(),S=pe(S+n/100*C.width),y=pe(y+s/100*C.height)),C="matrix("+T+","+L+","+b+","+M+","+S+","+y+")",h.setAttribute("transform",C),x&&(h.style[he]=C)},bc=function(t,r,i,n,s){var o=360,a=Me(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?$i:1),d=c-n,u=n+d+"deg",g,m;return a&&(g=s.split("_")[1],g==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),g==="cw"&&d<0?d=(d+o*Ko)%o-~~(d/o)*o:g==="ccw"&&d>0&&(d=(d-o*Ko)%o-~~(d/o)*o)),t._pt=m=new rt(t._pt,r,i,n,d,nc),m.e=u,m.u="deg",t._props.push(i),m},na=function(t,r){for(var i in r)t[i]=r[i];return t},xc=function(t,r,i){var n=na({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,c,d,u,g,m,h,p;n.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),o[he]=r,a=Z0(i,1),Ki(i,he),i.setAttribute("transform",d)):(d=getComputedStyle(i)[he],o[he]=r,a=Z0(i,1),o[he]=d);for(c in ci)d=n[c],u=a[c],d!==u&&s.indexOf(c)<0&&(h=qe(d),p=qe(u),g=h!==p?Mi(i,c,d,p):parseFloat(d),m=parseFloat(u),t._pt=new rt(t._pt,a,c,g,m-g,fs),t._pt.u=p||0,t._props.push(c));na(a,n)};it("padding,margin,Width,Radius",function(l,t){var r="Top",i="Right",n="Bottom",s="Left",o=(t<3?[r,i,n,s]:[r+s,r+i,n+i,n+s]).map(function(a){return t<2?l+a:"border"+a+l});qr[t>1?"border"+l:l]=function(a,c,d,u,g){var m,h;if(arguments.length<4)return m=o.map(function(p){return li(a,p,d)}),h=m.join(" "),h.split(m[0]).length===5?m[0]:h;m=(u+"").split(" "),h={},o.forEach(function(p,f){return h[p]=m[f]=m[f]||m[(f-1)/2|0]}),a.init(c,h,g)}});var bs={name:"css",register:ms,targetTest:function(t){return t.style&&t.nodeType},init:function(t,r,i,n,s){var o=this._props,a=t.style,c=i.vars.startAt,d,u,g,m,h,p,f,v,k,x,S,y,T,L,b,M;_s||ms(),this.styles=this.styles||la(t),M=this.styles.props,this.tween=i;for(f in r)if(f!=="autoRound"&&(u=r[f],!(ht[f]&&os(f,r,i,n,t,s)))){if(h=typeof u,p=qr[f],h==="function"&&(u=u.call(i,n,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=w0(u)),p)p(this,t,f,u,i)&&(b=1);else if(f.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",oi.lastIndex=0,oi.test(d)||(v=qe(d),k=qe(u)),k?v!==k&&(d=Mi(t,f,d,k)+k):v&&(u+=v),this.add(a,"setProperty",d,u,n,s,0,0,f),o.push(f),M.push(f,0,a[f]);else if(h!=="undefined"){if(c&&f in c?(d=typeof c[f]=="function"?c[f].call(i,n,t,s):c[f],Me(d)&&~d.indexOf("random(")&&(d=w0(d)),qe(d+"")||d==="auto"||(d+=mt.units[f]||qe(li(t,f))||""),(d+"").charAt(1)==="="&&(d=li(t,f))):d=li(t,f),m=parseFloat(d),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),g=parseFloat(u),f in Jt&&(f==="autoAlpha"&&(m===1&&li(t,"visibility")==="hidden"&&g&&(m=0),M.push("visibility",0,a.visibility),Ei(this,a,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),f!=="scale"&&f!=="transform"&&(f=Jt[f],~f.indexOf(",")&&(f=f.split(",")[0]))),S=f in ci,S){if(this.styles.save(f),y||(T=t._gsap,T.renderTransform&&!r.parseTransform||Z0(t,r.parseTransform),L=r.smoothOrigin!==!1&&T.smooth,y=this._pt=new rt(this._pt,a,he,0,1,T.renderTransform,T,0,-1),y.dep=1),f==="scale")this._pt=new rt(this._pt,T,"scaleY",T.scaleY,(x?Wi(T.scaleY,x+g):g)-T.scaleY||0,fs),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){M.push(pt,0,a[pt]),u=_c(u),T.svg?ps(t,u,0,L,0,this):(k=parseFloat(u.split(" ")[2])||0,k!==T.zOrigin&&Ei(this,T,"zOrigin",T.zOrigin,k),Ei(this,a,f,Hr(d),Hr(u)));continue}else if(f==="svgOrigin"){ps(t,u,1,L,0,this);continue}else if(f in ha){bc(this,T,f,m,x?Wi(m,x+u):u);continue}else if(f==="smoothOrigin"){Ei(this,T,"smooth",T.smooth,u);continue}else if(f==="force3D"){T[f]=u;continue}else if(f==="transform"){xc(this,u,t);continue}}else f in a||(f=k0(f)||f);if(S||(g||g===0)&&(m||m===0)&&!rc.test(u)&&f in a)v=(d+"").substr((m+"").length),g||(g=0),k=qe(u)||(f in mt.units?mt.units[f]:v),v!==k&&(m=Mi(t,f,d,k)),this._pt=new rt(this._pt,S?T:a,f,m,(x?Wi(m,x+g):g)-m,!S&&(k==="px"||f==="zIndex")&&r.autoRound!==!1?oc:fs),this._pt.u=k||0,v!==k&&k!=="%"&&(this._pt.b=d,this._pt.r=sc);else if(f in a)pc.call(this,t,f,d,x?x+u:u);else if(f in t)this.add(t,f,d||t[f],x?x+u:u,n,s);else if(f!=="parseTransform"){Or(f,u);continue}S||(f in a?M.push(f,0,a[f]):typeof t[f]=="function"?M.push(f,2,t[f]()):M.push(f,1,d||t[f])),o.push(f)}}b&&us(this)},render:function(t,r){if(r.tween._time||!vs())for(var i=r._pt;i;)i.r(t,i.d),i=i._next;else r.styles.revert()},get:li,aliases:Jt,getSetter:function(t,r,i){var n=Jt[r];return n&&n.indexOf(",")<0&&(r=n),r in ci&&r!==pt&&(t._gsap.x||li(t,"x"))?i&&Jo===i?r==="scale"?dc:cc:(Jo=i||{})&&(r==="scale"?uc:hc):t.style&&!Ar(t.style[r])?ac:~r.indexOf("-")?lc:Nr(t,r)},core:{_removeProperty:Ki,_getMatrix:ys}};Ge.utils.checkPrefix=k0;Ge.core.getStyleSaver=la;(function(l,t,r,i){var n=it(l+","+t+","+r,function(s){ci[s]=1});it(t,function(s){mt.units[s]="deg",ha[s]=1}),Jt[n[13]]=l+","+t,it(i,function(s){var o=s.split(":");Jt[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){mt.units[l]="px"});Ge.registerPlugin(bs);var Bi=Ge.registerPlugin(bs)||Ge,O3=Bi.core.Tween;function ma(l,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function kc(l,t,r){return t&&ma(l.prototype,t),r&&ma(l,r),l}var He,Xr,Tc,Tt,Ii,Pi,S0,_a,Qi,tr,va,di,Ht,wa,ya=function(){return He||typeof window<"u"&&(He=window.gsap)&&He.registerPlugin&&He},ba=1,T0=[],V=[],Vt=[],ir=Date.now,xs=function(t,r){return r},Sc=function(){var t=tr.core,r=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,V),n.push.apply(n,Vt),V=i,Vt=n,xs=function(o,a){return r[o](a)}},hi=function(t,r){return~Vt.indexOf(t)&&Vt[Vt.indexOf(t)+1][r]},rr=function(t){return!!~va.indexOf(t)},st=function(t,r,i,n,s){return t.addEventListener(r,i,{passive:n!==!1,capture:!!s})},nt=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},Vr="scrollLeft",Yr="scrollTop",ks=function(){return di&&di.isPressed||V.cache++},Wr=function(t,r){var i=function n(s){if(s||s===0){ba&&(Tt.history.scrollRestoration="manual");var o=di&&di.isPressed;s=n.v=Math.round(s)||(di&&di.iOS?1:0),t(s),n.cacheID=V.cache,o&&xs("ss",s)}else(r||V.cache!==n.cacheID||xs("ref"))&&(n.cacheID=V.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},je={s:Vr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wr(function(l){return arguments.length?Tt.scrollTo(l,Ce.sc()):Tt.pageXOffset||Ii[Vr]||Pi[Vr]||S0[Vr]||0})},Ce={s:Yr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:je,sc:Wr(function(l){return arguments.length?Tt.scrollTo(je.sc(),l):Tt.pageYOffset||Ii[Yr]||Pi[Yr]||S0[Yr]||0})},ot=function(t,r){return(r&&r._ctx&&r._ctx.selector||He.utils.toArray)(t)[0]||(typeof t=="string"&&He.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ui=function(t,r){var i=r.s,n=r.sc;rr(t)&&(t=Ii.scrollingElement||Pi);var s=V.indexOf(t),o=n===Ce.sc?1:2;!~s&&(s=V.push(t)-1),V[s+o]||st(t,"scroll",ks);var a=V[s+o],c=a||(V[s+o]=Wr(hi(t,i),!0)||(rr(t)?n:Wr(function(d){return arguments.length?t[i]=d:t[i]})));return c.target=t,a||(c.smooth=He.getProperty(t,"scrollBehavior")==="smooth"),c},Ur=function(t,r,i){var n=t,s=t,o=ir(),a=o,c=r||50,d=Math.max(500,c*3),u=function(p,f){var v=ir();f||v-o>c?(s=n,n=p,a=o,o=v):i?n+=p:n=s+(p-s)/(v-a)*(o-a)},g=function(){s=n=i?0:n,a=o=0},m=function(p){var f=a,v=s,k=ir();return(p||p===0)&&p!==n&&u(p),o===a||k-a>d?0:(n+(i?v:-v))/((i?k:o)-f)*1e3};return{update:u,reset:g,getVelocity:m}},er=function(t,r){return r&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},pa=function(t){var r=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(r)>=Math.abs(i)?r:i},xa=function(){tr=He.core.globals().ScrollTrigger,tr&&tr.core&&Sc()},ka=function(t){return He=t||ya(),!Xr&&He&&typeof document<"u"&&document.body&&(Tt=window,Ii=document,Pi=Ii.documentElement,S0=Ii.body,va=[Tt,Ii,Pi,S0],Tc=He.utils.clamp,wa=He.core.context||function(){},Qi="onpointerenter"in S0?"pointer":"mouse",_a=_e.isTouch=Tt.matchMedia&&Tt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ht=_e.eventTypes=("ontouchstart"in Pi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ba=0},500),xa(),Xr=1),Xr};je.op=Ce;V.cache=0;var _e=function(){function l(r){this.init(r)}var t=l.prototype;return t.init=function(i){Xr||ka(He)||console.warn("Please gsap.registerPlugin(Observer)"),tr||xa();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,c=i.lineHeight,d=i.debounce,u=i.preventDefault,g=i.onStop,m=i.onStopDelay,h=i.ignore,p=i.wheelSpeed,f=i.event,v=i.onDragStart,k=i.onDragEnd,x=i.onDrag,S=i.onPress,y=i.onRelease,T=i.onRight,L=i.onLeft,b=i.onUp,M=i.onDown,C=i.onChangeX,E=i.onChangeY,D=i.onChange,B=i.onToggleX,G=i.onToggleY,W=i.onHover,K=i.onHoverEnd,j=i.onMove,O=i.ignoreCheck,Z=i.isNormalizer,oe=i.onGestureStart,_=i.onGestureEnd,ae=i.onWheel,Qe=i.onEnable,Ot=i.onDisable,fe=i.onClick,Oe=i.scrollSpeed,Ze=i.capture,ke=i.allowClicks,et=i.lockAxis,Ve=i.onLockAxis;this.target=a=ot(a)||Pi,this.vars=i,h&&(h=He.utils.toArray(h)),n=n||1e-9,s=s||0,p=p||1,Oe=Oe||1,o=o||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(Tt.getComputedStyle(S0).lineHeight)||22);var pi,tt,dt,Q,ve,ut,_t,w=this,vt=0,ei=0,_i=i.passive||!u&&i.passive!==!1,we=ui(a,je),ti=ui(a,Ce),vi=we(),Oi=ti(),Ie=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ht[0]==="pointerdown",wi=rr(a),ye=a.ownerDocument||Ii,Dt=[0,0,0],Et=[0,0,0],ii=0,z0=function(){return ii=ir()},Te=function(A,ee){return(w.event=A)&&h&&~h.indexOf(A.target)||ee&&Ie&&A.pointerType!=="touch"||O&&O(A,ee)},wr=function(){w._vx.reset(),w._vy.reset(),tt.pause(),g&&g(w)},ri=function(){var A=w.deltaX=pa(Dt),ee=w.deltaY=pa(Et),I=Math.abs(A)>=n,R=Math.abs(ee)>=n;D&&(I||R)&&D(w,A,ee,Dt,Et),I&&(T&&w.deltaX>0&&T(w),L&&w.deltaX<0&&L(w),C&&C(w),B&&w.deltaX<0!=vt<0&&B(w),vt=w.deltaX,Dt[0]=Dt[1]=Dt[2]=0),R&&(M&&w.deltaY>0&&M(w),b&&w.deltaY<0&&b(w),E&&E(w),G&&w.deltaY<0!=ei<0&&G(w),ei=w.deltaY,Et[0]=Et[1]=Et[2]=0),(Q||dt)&&(j&&j(w),dt&&(v&&dt===1&&v(w),x&&x(w),dt=0),Q=!1),ut&&!(ut=!1)&&Ve&&Ve(w),ve&&(ae(w),ve=!1),pi=0},c0=function(A,ee,I){Dt[I]+=A,Et[I]+=ee,w._vx.update(A),w._vy.update(ee),d?pi||(pi=requestAnimationFrame(ri)):ri()},d0=function(A,ee){et&&!_t&&(w.axis=_t=Math.abs(A)>Math.abs(ee)?"x":"y",ut=!0),_t!=="y"&&(Dt[2]+=A,w._vx.update(A,!0)),_t!=="x"&&(Et[2]+=ee,w._vy.update(ee,!0)),d?pi||(pi=requestAnimationFrame(ri)):ri()},yi=function(A){if(!Te(A,1)){A=er(A,u);var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y,F=w.isDragging;w.x=ee,w.y=I,(F||(R||z)&&(Math.abs(w.startX-ee)>=s||Math.abs(w.startY-I)>=s))&&(dt=F?2:1,F||(w.isDragging=!0),d0(R,z))}},Di=w.onPress=function(N){Te(N,1)||N&&N.button||(w.axis=_t=null,tt.pause(),w.isPressed=!0,N=er(N),vt=ei=0,w.startX=w.x=N.clientX,w.startY=w.y=N.clientY,w._vx.reset(),w._vy.reset(),st(Z?a:ye,Ht[1],yi,_i,!0),w.deltaX=w.deltaY=0,S&&S(w))},U=w.onRelease=function(N){if(!Te(N,1)){nt(Z?a:ye,Ht[1],yi,!0);var A=!isNaN(w.y-w.startY),ee=w.isDragging,I=ee&&(Math.abs(w.x-w.startX)>3||Math.abs(w.y-w.startY)>3),R=er(N);!I&&A&&(w._vx.reset(),w._vy.reset(),u&&ke&&He.delayedCall(.08,function(){if(ir()-ii>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(ye.createEvent){var z=ye.createEvent("MouseEvents");z.initMouseEvent("click",!0,!0,Tt,1,R.screenX,R.screenY,R.clientX,R.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(z)}}})),w.isDragging=w.isGesturing=w.isPressed=!1,g&&ee&&!Z&&tt.restart(!0),dt&&ri(),k&&ee&&k(w),y&&y(w,I)}},Ri=function(A){return A.touches&&A.touches.length>1&&(w.isGesturing=!0)&&oe(A,w.isDragging)},Rt=function(){return(w.isGesturing=!1)||_(w)},Ft=function(A){if(!Te(A)){var ee=we(),I=ti();c0((ee-vi)*Oe,(I-Oi)*Oe,1),vi=ee,Oi=I,g&&tt.restart(!0)}},Nt=function(A){if(!Te(A)){A=er(A,u),ae&&(ve=!0);var ee=(A.deltaMode===1?c:A.deltaMode===2?Tt.innerHeight:1)*p;c0(A.deltaX*ee,A.deltaY*ee,0),g&&!Z&&tt.restart(!0)}},Fi=function(A){if(!Te(A)){var ee=A.clientX,I=A.clientY,R=ee-w.x,z=I-w.y;w.x=ee,w.y=I,Q=!0,g&&tt.restart(!0),(R||z)&&d0(R,z)}},u0=function(A){w.event=A,W(w)},ni=function(A){w.event=A,K(w)},A0=function(A){return Te(A)||er(A,u)&&fe(w)};tt=w._dc=He.delayedCall(m||.25,wr).pause(),w.deltaX=w.deltaY=0,w._vx=Ur(0,50,!0),w._vy=Ur(0,50,!0),w.scrollX=we,w.scrollY=ti,w.isDragging=w.isGesturing=w.isPressed=!1,wa(this),w.enable=function(N){return w.isEnabled||(st(wi?ye:a,"scroll",ks),o.indexOf("scroll")>=0&&st(wi?ye:a,"scroll",Ft,_i,Ze),o.indexOf("wheel")>=0&&st(a,"wheel",Nt,_i,Ze),(o.indexOf("touch")>=0&&_a||o.indexOf("pointer")>=0)&&(st(a,Ht[0],Di,_i,Ze),st(ye,Ht[2],U),st(ye,Ht[3],U),ke&&st(a,"click",z0,!0,!0),fe&&st(a,"click",A0),oe&&st(ye,"gesturestart",Ri),_&&st(ye,"gestureend",Rt),W&&st(a,Qi+"enter",u0),K&&st(a,Qi+"leave",ni),j&&st(a,Qi+"move",Fi)),w.isEnabled=!0,w.isDragging=w.isGesturing=w.isPressed=Q=dt=!1,w._vx.reset(),w._vy.reset(),vi=we(),Oi=ti(),N&&N.type&&Di(N),Qe&&Qe(w)),w},w.disable=function(){w.isEnabled&&(T0.filter(function(N){return N!==w&&rr(N.target)}).length||nt(wi?ye:a,"scroll",ks),w.isPressed&&(w._vx.reset(),w._vy.reset(),nt(Z?a:ye,Ht[1],yi,!0)),nt(wi?ye:a,"scroll",Ft,Ze),nt(a,"wheel",Nt,Ze),nt(a,Ht[0],Di,Ze),nt(ye,Ht[2],U),nt(ye,Ht[3],U),nt(a,"click",z0,!0),nt(a,"click",A0),nt(ye,"gesturestart",Ri),nt(ye,"gestureend",Rt),nt(a,Qi+"enter",u0),nt(a,Qi+"leave",ni),nt(a,Qi+"move",Fi),w.isEnabled=w.isPressed=w.isDragging=!1,Ot&&Ot(w))},w.kill=w.revert=function(){w.disable();var N=T0.indexOf(w);N>=0&&T0.splice(N,1),di===w&&(di=0)},T0.push(w),Z&&rr(a)&&(di=w),w.enable(f)},kc(l,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),l}();_e.version="3.12.7";_e.create=function(l){return new _e(l)};_e.register=ka;_e.getAll=function(){return T0.slice()};_e.getById=function(l){return T0.filter(function(t){return t.vars.id===l})[0]};ya()&&He.registerPlugin(_e);var P,E0,X,se,Lt,te,Fs,cn,pr,dr,sr,Gr,$e,fn,Is,lt,Ta,Sa,M0,Ha,Ts,Va,at,Ps,Ya,Xa,zi,zs,Ns,B0,qs,dn,As,Ss,jr=1,Je=Date.now,Cs=Je(),At=0,or=0,Ca=function(t,r,i){var n=Ct(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+r+"Clamp"]=n,n?t.substr(6,t.length-7):t},La=function(t,r){return r&&(!Ct(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Cc=function l(){return or&&requestAnimationFrame(l)},Ea=function(){return fn=1},Ma=function(){return fn=0},Qt=function(t){return t},ar=function(t){return Math.round(t*1e5)/1e5||0},Wa=function(){return typeof window<"u"},Ua=function(){return P||Wa()&&(P=window.gsap)&&P.registerPlugin&&P},n0=function(t){return!!~Fs.indexOf(t)},Ga=function(t){return(t==="Height"?qs:X["inner"+t])||Lt["client"+t]||te["client"+t]},ja=function(t){return hi(t,"getBoundingClientRect")||(n0(t)?function(){return ln.width=X.innerWidth,ln.height=qs,ln}:function(){return fi(t)})},Lc=function(t,r,i){var n=i.d,s=i.d2,o=i.a;return(o=hi(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(r?Ga(s):t["client"+s])||0}},Ec=function(t,r){return!r||~Vt.indexOf(t)?ja(t):function(){return ln}},Zt=function(t,r){var i=r.s,n=r.d2,s=r.d,o=r.a;return Math.max(0,(i="scroll"+n)&&(o=hi(t,i))?o()-ja(t)()[s]:n0(t)?(Lt[i]||te[i])-Ga(n):t[i]-t["offset"+n])},$r=function(t,r){for(var i=0;i<M0.length;i+=3)(!r||~r.indexOf(M0[i+1]))&&t(M0[i],M0[i+1],M0[i+2])},Ct=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},lr=function(t){return typeof t=="number"},Zi=function(t){return typeof t=="object"},nr=function(t,r,i){return t&&t.progress(r?0:1)&&i&&t.pause()},Ls=function(t,r){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return r(t)}):r(t);i&&i.totalTime&&(t.callbackAnimation=i)}},C0=Math.abs,$a="left",Ja="top",Hs="right",Vs="bottom",t0="width",i0="height",ur="Right",hr="Left",fr="Top",gr="Bottom",Le="padding",Pt="margin",P0="Width",Ys="Height",Be="px",zt=function(t){return X.getComputedStyle(t)},Mc=function(t){var r=zt(t).position;t.style.position=r==="absolute"||r==="fixed"?r:"relative"},Ba=function(t,r){for(var i in r)i in t||(t[i]=r[i]);return t},fi=function(t,r){var i=r&&zt(t)[Is]!=="matrix(1, 0, 0, 1, 0, 0)"&&P.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return i&&i.progress(0).kill(),n},un=function(t,r){var i=r.d2;return t["offset"+i]||t["client"+i]||0},Ka=function(t){var r=[],i=t.labels,n=t.duration(),s;for(s in i)r.push(i[s]/n);return r},Bc=function(t){return function(r){return P.utils.snap(Ka(t),r)}},Xs=function(t){var r=P.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return r(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=r(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:r(s<0?n-t:n+t)}},Ic=function(t){return function(r,i){return Xs(Ka(t))(r,i.direction)}},Jr=function(t,r,i,n){return i.split(",").forEach(function(s){return t(r,s,n)})},Ae=function(t,r,i,n,s){return t.addEventListener(r,i,{passive:!n,capture:!!s})},ze=function(t,r,i,n){return t.removeEventListener(r,i,!!n)},Kr=function(t,r,i){i=i&&i.wheelHandler,i&&(t(r,"wheel",i),t(r,"touchmove",i))},Ia={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qr={toggleActions:"play",anticipatePin:0},hn={top:0,left:0,center:.5,bottom:1,right:1},nn=function(t,r){if(Ct(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=r/100),t=t.substr(0,i-1)),t=n+(t in hn?hn[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0)}return t},Zr=function(t,r,i,n,s,o,a,c){var d=s.startColor,u=s.endColor,g=s.fontSize,m=s.indent,h=s.fontWeight,p=se.createElement("div"),f=n0(i)||hi(i,"pinType")==="fixed",v=t.indexOf("scroller")!==-1,k=f?te:i,x=t.indexOf("start")!==-1,S=x?d:u,y="border-color:"+S+";font-size:"+g+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((v||c)&&f?"fixed;":"absolute;"),(v||c||!f)&&(y+=(n===Ce?Hs:Vs)+":"+(o+parseFloat(m))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+t+(r?" marker-"+r:"")),p.style.cssText=y,p.innerText=r||r===0?t+"-"+r:t,k.children[0]?k.insertBefore(p,k.children[0]):k.appendChild(p),p._offset=p["offset"+n.op.d2],sn(p,0,n,x),p},sn=function(t,r,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+P0]=1,s["border"+a+P0]=0,s[i.p]=r+"px",P.set(t,s)},Y=[],Os={},_r,Pa=function(){return Je()-At>34&&(_r||(_r=requestAnimationFrame(gi)))},L0=function(){(!at||!at.isPressed||at.startX>te.clientWidth)&&(V.cache++,at?_r||(_r=requestAnimationFrame(gi)):gi(),At||o0("scrollStart"),At=Je())},Es=function(){Xa=X.innerWidth,Ya=X.innerHeight},cr=function(t){V.cache++,(t===!0||!$e&&!Va&&!se.fullscreenElement&&!se.webkitFullscreenElement&&(!Ps||Xa!==X.innerWidth||Math.abs(X.innerHeight-Ya)>X.innerHeight*.25))&&cn.restart(!0)},s0={},Pc=[],Qa=function l(){return ze(q,"scrollEnd",l)||e0(!0)},o0=function(t){return s0[t]&&s0[t].map(function(r){return r()})||Pc},St=[],Za=function(t){for(var r=0;r<St.length;r+=5)(!t||St[r+4]&&St[r+4].query===t)&&(St[r].style.cssText=St[r+1],St[r].getBBox&&St[r].setAttribute("transform",St[r+2]||""),St[r+3].uncache=1)},Ws=function(t,r){var i;for(lt=0;lt<Y.length;lt++)i=Y[lt],i&&(!r||i._ctx===r)&&(t?i.kill(1):i.revert(!0,!0));dn=!0,r&&Za(r),r||o0("revert")},e1=function(t,r){V.cache++,(r||!ct)&&V.forEach(function(i){return Ke(i)&&i.cacheID++&&(i.rec=0)}),Ct(t)&&(X.history.scrollRestoration=Ns=t)},ct,r0=0,za,zc=function(){if(za!==r0){var t=za=r0;requestAnimationFrame(function(){return t===r0&&e0(!0)})}},t1=function(){te.appendChild(B0),qs=!at&&B0.offsetHeight||X.innerHeight,te.removeChild(B0)},Aa=function(t){return pr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=t?"none":"block"})},e0=function(t,r){if(Lt=se.documentElement,te=se.body,Fs=[X,se,Lt,te],At&&!t&&!dn){Ae(q,"scrollEnd",Qa);return}t1(),ct=q.isRefreshing=!0,V.forEach(function(n){return Ke(n)&&++n.cacheID&&(n.rec=n())});var i=o0("refreshInit");Ha&&q.sort(),r||Ws(),V.forEach(function(n){Ke(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Y.slice(0).forEach(function(n){return n.refresh()}),dn=!1,Y.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),As=1,Aa(!0),Y.forEach(function(n){var s=Zt(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),Aa(!1),As=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),V.forEach(function(n){Ke(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),e1(Ns,1),cn.pause(),r0++,ct=2,gi(2),Y.forEach(function(n){return Ke(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ct=q.isRefreshing=!1,o0("refresh")},Ds=0,on=1,mr,gi=function(t){if(t===2||!ct&&!dn){q.isUpdating=!0,mr&&mr.update(0);var r=Y.length,i=Je(),n=i-Cs>=50,s=r&&Y[0].scroll();if(on=Ds>s?-1:1,ct||(Ds=s),n&&(At&&!fn&&i-At>200&&(At=0,o0("scrollEnd")),sr=Cs,Cs=i),on<0){for(lt=r;lt-- >0;)Y[lt]&&Y[lt].update(0,n);on=1}else for(lt=0;lt<r;lt++)Y[lt]&&Y[lt].update(0,n);q.isUpdating=!1}_r=0},Rs=[$a,Ja,Vs,Hs,Pt+gr,Pt+ur,Pt+fr,Pt+hr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],an=Rs.concat([t0,i0,"boxSizing","max"+P0,"max"+Ys,"position",Pt,Le,Le+fr,Le+ur,Le+gr,Le+hr]),Ac=function(t,r,i){I0(i);var n=t._gsap;if(n.spacerIsNative)I0(n.spacerState);else if(t._gsap.swappedIn){var s=r.parentNode;s&&(s.insertBefore(t,r),s.removeChild(r))}t._gsap.swappedIn=!1},Ms=function(t,r,i,n){if(!t._gsap.swappedIn){for(var s=Rs.length,o=r.style,a=t.style,c;s--;)c=Rs[s],o[c]=i[c];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Vs]=a[Hs]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[t0]=un(t,je)+Be,o[i0]=un(t,Ce)+Be,o[Le]=a[Pt]=a[Ja]=a[$a]="0",I0(n),a[t0]=a["max"+P0]=i[t0],a[i0]=a["max"+Ys]=i[i0],a[Le]=i[Le],t.parentNode!==r&&(t.parentNode.insertBefore(r,t),r.appendChild(t)),t._gsap.swappedIn=!0}},Oc=/([A-Z])/g,I0=function(t){if(t){var r=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||P.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?r[s]=o:r[s]&&r.removeProperty(s.replace(Oc,"-$1").toLowerCase())}},en=function(t){for(var r=an.length,i=t.style,n=[],s=0;s<r;s++)n.push(an[s],i[an[s]]);return n.t=t,n},Dc=function(t,r,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in r?r[a]:t[o+1]);return n.t=t.t,n},ln={left:0,top:0},Oa=function(t,r,i,n,s,o,a,c,d,u,g,m,h,p){Ke(t)&&(t=t(c)),Ct(t)&&t.substr(0,3)==="max"&&(t=m+(t.charAt(4)==="="?nn("0"+t.substr(3),i):0));var f=h?h.time():0,v,k,x;if(h&&h.seek(0),isNaN(t)||(t=+t),lr(t))h&&(t=P.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,m,t)),a&&sn(a,i,n,!0);else{Ke(r)&&(r=r(c));var S=(t||"0").split(" "),y,T,L,b;x=ot(r,c)||te,y=fi(x)||{},(!y||!y.left&&!y.top)&&zt(x).display==="none"&&(b=x.style.display,x.style.display="block",y=fi(x),b?x.style.display=b:x.style.removeProperty("display")),T=nn(S[0],y[n.d]),L=nn(S[1]||"0",i),t=y[n.p]-d[n.p]-u+T+s-L,a&&sn(a,L,n,i-L<20||a._isStart&&L>20),i-=i-L}if(p&&(c[p]=t||-.001,t<0&&(t=0)),o){var M=t+i,C=o._isStart;v="scroll"+n.d2,sn(o,M,n,C&&M>20||!C&&(g?Math.max(te[v],Lt[v]):o.parentNode[v])<=M+1),g&&(d=fi(a),g&&(o.style[n.op.p]=d[n.op.p]-n.op.m-o._offset+Be))}return h&&x&&(v=fi(x),h.seek(m),k=fi(x),h._caScrollDist=v[n.p]-k[n.p],t=t/h._caScrollDist*m),h&&h.seek(f),h?t:Math.round(t)},Rc=/(webkit|moz|length|cssText|inset)/i,Da=function(t,r,i,n){if(t.parentNode!==r){var s=t.style,o,a;if(r===te){t._stOrig=s.cssText,a=zt(t);for(o in a)!+o&&!Rc.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;P.core.getCache(t).uncache=1,r.appendChild(t)}},i1=function(t,r,i){var n=r,s=n;return function(o){var a=Math.round(t());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},tn=function(t,r,i){var n={};n[r.p]="+="+i,P.set(t,n)},Ra=function(t,r){var i=ui(t,r),n="_scroll"+r.p2,s=function o(a,c,d,u,g){var m=o.tween,h=c.onComplete,p={};d=d||i();var f=i1(i,d,function(){m.kill(),o.tween=0});return g=u&&g||0,u=u||a-d,m&&m.kill(),c[n]=a,c.inherit=!1,c.modifiers=p,p[n]=function(){return f(d+u*m.ratio+g*m.ratio*m.ratio)},c.onUpdate=function(){V.cache++,o.tween&&gi()},c.onComplete=function(){o.tween=0,h&&h.call(m)},m=o.tween=P.to(t,c),m};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ae(t,"wheel",i.wheelHandler),q.isTouch&&Ae(t,"touchmove",i.wheelHandler),s},q=function(){function l(r,i){E0||l.register(P)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zs(this),this.init(r,i)}var t=l.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!or){this.update=this.refresh=this.kill=Qt;return}i=Ba(Ct(i)||lr(i)||i.nodeType?{trigger:i}:i,Qr);var s=i,o=s.onUpdate,a=s.toggleClass,c=s.id,d=s.onToggle,u=s.onRefresh,g=s.scrub,m=s.trigger,h=s.pin,p=s.pinSpacing,f=s.invalidateOnRefresh,v=s.anticipatePin,k=s.onScrubComplete,x=s.onSnapComplete,S=s.once,y=s.snap,T=s.pinReparent,L=s.pinSpacer,b=s.containerAnimation,M=s.fastScrollEnd,C=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?je:Ce,D=!g&&g!==0,B=ot(i.scroller||X),G=P.core.getCache(B),W=n0(B),K=("pinType"in i?i.pinType:hi(B,"pinType")||W&&"fixed")==="fixed",j=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=D&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Qr.markers,oe=W?0:parseFloat(zt(B)["border"+E.p2+P0])||0,_=this,ae=i.onRefreshInit&&function(){return i.onRefreshInit(_)},Qe=Lc(B,W,E),Ot=Ec(B,W),fe=0,Oe=0,Ze=0,ke=ui(B,E),et,Ve,pi,tt,dt,Q,ve,ut,_t,w,vt,ei,_i,we,ti,vi,Oi,Ie,wi,ye,Dt,Et,ii,z0,Te,wr,ri,c0,d0,yi,Di,U,Ri,Rt,Ft,Nt,Fi,u0,ni;if(_._startClamp=_._endClamp=!1,_._dir=E,v*=45,_.scroller=B,_.scroll=b?b.time.bind(b):ke,tt=ke(),_.vars=i,n=n||i.animation,"refreshPriority"in i&&(Ha=1,i.refreshPriority===-9999&&(mr=_)),G.tweenScroll=G.tweenScroll||{top:Ra(B,Ce),left:Ra(B,je)},_.tweenTo=et=G.tweenScroll[E.p],_.scrubDuration=function(I){Ri=lr(I)&&I,Ri?U?U.duration(I):U=P.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ri,paused:!0,onComplete:function(){return k&&k(_)}}):(U&&U.progress(1).kill(),U=0)},n&&(n.vars.lazy=!1,n._initted&&!_.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),_.animation=n.pause(),n.scrollTrigger=_,_.scrubDuration(g),yi=0,c||(c=n.vars.id)),y&&((!Zi(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in te.style&&P.set(W?[te,Lt]:B,{scrollBehavior:"auto"}),V.forEach(function(I){return Ke(I)&&I.target===(W?se.scrollingElement||Lt:B)&&(I.smooth=!1)}),pi=Ke(y.snapTo)?y.snapTo:y.snapTo==="labels"?Bc(n):y.snapTo==="labelsDirectional"?Ic(n):y.directional!==!1?function(I,R){return Xs(y.snapTo)(I,Je()-Oe<500?0:R.direction)}:P.utils.snap(y.snapTo),Rt=y.duration||{min:.1,max:2},Rt=Zi(Rt)?dr(Rt.min,Rt.max):dr(Rt,Rt),Ft=P.delayedCall(y.delay||Ri/2||.1,function(){var I=ke(),R=Je()-Oe<500,z=et.tween;if((R||Math.abs(_.getVelocity())<10)&&!z&&!fn&&fe!==I){var F=(I-Q)/we,Pe=n&&!D?n.totalProgress():F,$=R?0:(Pe-Di)/(Je()-sr)*1e3||0,be=P.utils.clamp(-F,1-F,C0($/2)*$/.185),Ye=F+(y.inertia===!1?0:be),ge,le,ie=y,qt=ie.onStart,de=ie.onInterrupt,wt=ie.onComplete;if(ge=pi(Ye,_),lr(ge)||(ge=Ye),le=Math.max(0,Math.round(Q+ge*we)),I<=ve&&I>=Q&&le!==I){if(z&&!z._initted&&z.data<=C0(le-I))return;y.inertia===!1&&(be=ge-F),et(le,{duration:Rt(C0(Math.max(C0(Ye-Pe),C0(ge-Pe))*.185/$/.05||0)),ease:y.ease||"power3",data:C0(le-I),onInterrupt:function(){return Ft.restart(!0)&&de&&de(_)},onComplete:function(){_.update(),fe=ke(),n&&!D&&(U?U.resetTo("totalProgress",ge,n._tTime/n._tDur):n.progress(ge)),yi=Di=n&&!D?n.totalProgress():_.progress,x&&x(_),wt&&wt(_)}},I,be*we,le-I-be*we),qt&&qt(_,et.tween)}}else _.isActive&&fe!==I&&Ft.restart(!0)}).pause()),c&&(Os[c]=_),m=_.trigger=ot(m||h!==!0&&h),ni=m&&m._gsap&&m._gsap.stRevert,ni&&(ni=ni(_)),h=h===!0?m:ot(h),Ct(a)&&(a={targets:m,className:a}),h&&(p===!1||p===Pt||(p=!p&&h.parentNode&&h.parentNode.style&&zt(h.parentNode).display==="flex"?!1:Le),_.pin=h,Ve=P.core.getCache(h),Ve.spacer?ti=Ve.pinState:(L&&(L=ot(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Ve.spacerIsNative=!!L,L&&(Ve.spacerState=en(L))),Ve.spacer=Ie=L||se.createElement("div"),Ie.classList.add("pin-spacer"),c&&Ie.classList.add("pin-spacer-"+c),Ve.pinState=ti=en(h)),i.force3D!==!1&&P.set(h,{force3D:!0}),_.spacer=Ie=Ve.spacer,d0=zt(h),z0=d0[p+E.os2],ye=P.getProperty(h),Dt=P.quickSetter(h,E.a,Be),Ms(h,Ie,d0),Oi=en(h)),Z){ei=Zi(Z)?Ba(Z,Ia):Ia,w=Zr("scroller-start",c,B,E,ei,0),vt=Zr("scroller-end",c,B,E,ei,0,w),wi=w["offset"+E.op.d2];var A0=ot(hi(B,"content")||B);ut=this.markerStart=Zr("start",c,A0,E,ei,wi,0,b),_t=this.markerEnd=Zr("end",c,A0,E,ei,wi,0,b),b&&(u0=P.quickSetter([ut,_t],E.a,Be)),!K&&!(Vt.length&&hi(B,"fixedMarkers")===!0)&&(Mc(W?te:B),P.set([w,vt],{force3D:!0}),wr=P.quickSetter(w,E.a,Be),c0=P.quickSetter(vt,E.a,Be))}if(b){var N=b.vars.onUpdate,A=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){_.update(0,0,1),N&&N.apply(b,A||[])})}if(_.previous=function(){return Y[Y.indexOf(_)-1]},_.next=function(){return Y[Y.indexOf(_)+1]},_.revert=function(I,R){if(!R)return _.kill(!0);var z=I!==!1||!_.enabled,F=$e;z!==_.isReverted&&(z&&(Nt=Math.max(ke(),_.scroll.rec||0),Ze=_.progress,Fi=n&&n.progress()),ut&&[ut,_t,w,vt].forEach(function(Pe){return Pe.style.display=z?"none":"block"}),z&&($e=_,_.update(z)),h&&(!T||!_.isActive)&&(z?Ac(h,Ie,ti):Ms(h,Ie,zt(h),Te)),z||_.update(z),$e=F,_.isReverted=z)},_.refresh=function(I,R,z,F){if(!(($e||!_.enabled)&&!R)){if(h&&I&&At){Ae(l,"scrollEnd",Qa);return}!ct&&ae&&ae(_),$e=_,et.tween&&!z&&(et.tween.kill(),et.tween=0),U&&U.pause(),f&&n&&n.revert({kill:!1}).invalidate(),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var Pe=Qe(),$=Ot(),be=b?b.duration():Zt(B,E),Ye=we<=.01,ge=0,le=F||0,ie=Zi(z)?z.end:i.end,qt=i.endTrigger||m,de=Zi(z)?z.start:i.start||(i.start===0||!m?0:h?"0 0":"0 100%"),wt=_.pinnedContainer=i.pinnedContainer&&ot(i.pinnedContainer,_),Yt=m&&Math.max(0,Y.indexOf(_))||0,De=Yt,Re,Xe,Ni,yr,We,Ee,Xt,bn,Ks,O0,Wt,D0,br;for(Z&&Zi(z)&&(D0=P.getProperty(w,E.p),br=P.getProperty(vt,E.p));De-- >0;)Ee=Y[De],Ee.end||Ee.refresh(0,1)||($e=_),Xt=Ee.pin,Xt&&(Xt===m||Xt===h||Xt===wt)&&!Ee.isReverted&&(O0||(O0=[]),O0.unshift(Ee),Ee.revert(!0,!0)),Ee!==Y[De]&&(Yt--,De--);for(Ke(de)&&(de=de(_)),de=Ca(de,"start",_),Q=Oa(de,m,Pe,E,ke(),ut,w,_,$,oe,K,be,b,_._startClamp&&"_startClamp")||(h?-.001:0),Ke(ie)&&(ie=ie(_)),Ct(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(Ct(de)?de.split(" ")[0]:"")+ie:(ge=nn(ie.substr(2),Pe),ie=Ct(de)?de:(b?P.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Q):Q)+ge,qt=m)),ie=Ca(ie,"end",_),ve=Math.max(Q,Oa(ie||(qt?"100% 0":be),qt,Pe,E,ke()+ge,_t,vt,_,$,oe,K,be,b,_._endClamp&&"_endClamp"))||-.001,ge=0,De=Yt;De--;)Ee=Y[De],Xt=Ee.pin,Xt&&Ee.start-Ee._pinPush<=Q&&!b&&Ee.end>0&&(Re=Ee.end-(_._startClamp?Math.max(0,Ee.start):Ee.start),(Xt===m&&Ee.start-Ee._pinPush<Q||Xt===wt)&&isNaN(de)&&(ge+=Re*(1-Ee.progress)),Xt===h&&(le+=Re));if(Q+=ge,ve+=ge,_._startClamp&&(_._startClamp+=ge),_._endClamp&&!ct&&(_._endClamp=ve||-.001,ve=Math.min(ve,Zt(B,E))),we=ve-Q||(Q-=.01)&&.001,Ye&&(Ze=P.utils.clamp(0,1,P.utils.normalize(Q,ve,Nt))),_._pinPush=le,ut&&ge&&(Re={},Re[E.a]="+="+ge,wt&&(Re[E.p]="-="+ke()),P.set([ut,_t],Re)),h&&!(As&&_.end>=Zt(B,E)))Re=zt(h),yr=E===Ce,Ni=ke(),Et=parseFloat(ye(E.a))+le,!be&&ve>1&&(Wt=(W?se.scrollingElement||Lt:B).style,Wt={style:Wt,value:Wt["overflow"+E.a.toUpperCase()]},W&&zt(te)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+E.a.toUpperCase()]="scroll")),Ms(h,Ie,Re),Oi=en(h),Xe=fi(h,!0),bn=K&&ui(B,yr?je:Ce)(),p?(Te=[p+E.os2,we+le+Be],Te.t=Ie,De=p===Le?un(h,E)+we+le:0,De&&(Te.push(E.d,De+Be),Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),I0(Te),wt&&Y.forEach(function(R0){R0.pin===wt&&R0.vars.pinSpacing!==!1&&(R0._subPinOffset=!0)}),K&&ke(Nt)):(De=un(h,E),De&&Ie.style.flexBasis!=="auto"&&(Ie.style.flexBasis=De+Be)),K&&(We={top:Xe.top+(yr?Ni-Q:bn)+Be,left:Xe.left+(yr?bn:Ni-Q)+Be,boxSizing:"border-box",position:"fixed"},We[t0]=We["max"+P0]=Math.ceil(Xe.width)+Be,We[i0]=We["max"+Ys]=Math.ceil(Xe.height)+Be,We[Pt]=We[Pt+fr]=We[Pt+ur]=We[Pt+gr]=We[Pt+hr]="0",We[Le]=Re[Le],We[Le+fr]=Re[Le+fr],We[Le+ur]=Re[Le+ur],We[Le+gr]=Re[Le+gr],We[Le+hr]=Re[Le+hr],vi=Dc(ti,We,T),ct&&ke(0)),n?(Ks=n._initted,Ts(1),n.render(n.duration(),!0,!0),ii=ye(E.a)-Et+we+le,ri=Math.abs(we-ii)>1,K&&ri&&vi.splice(vi.length-2,2),n.render(0,!0,!0),Ks||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ts(0)):ii=we,Wt&&(Wt.value?Wt.style["overflow"+E.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+E.a));else if(m&&ke()&&!b)for(Xe=m.parentNode;Xe&&Xe!==te;)Xe._pinOffset&&(Q-=Xe._pinOffset,ve-=Xe._pinOffset),Xe=Xe.parentNode;O0&&O0.forEach(function(R0){return R0.revert(!1,!0)}),_.start=Q,_.end=ve,tt=dt=ct?Nt:ke(),!b&&!ct&&(tt<Nt&&ke(Nt),_.scroll.rec=0),_.revert(!1,!0),Oe=Je(),Ft&&(fe=-1,Ft.restart(!0)),$e=0,n&&D&&(n._initted||Fi)&&n.progress()!==Fi&&n.progress(Fi||0,!0).render(n.time(),!0,!0),(Ye||Ze!==_.progress||b||f||n&&!n._initted)&&(n&&!D&&n.totalProgress(b&&Q<-.001&&!Ze?P.utils.normalize(Q,ve,0):Ze,!0),_.progress=Ye||(tt-Q)/we===Ze?0:Ze),h&&p&&(Ie._pinOffset=Math.round(_.progress*ii)),U&&U.invalidate(),isNaN(D0)||(D0-=P.getProperty(w,E.p),br-=P.getProperty(vt,E.p),tn(w,E,D0),tn(ut,E,D0-(F||0)),tn(vt,E,br),tn(_t,E,br-(F||0))),Ye&&!ct&&_.update(),u&&!ct&&!_i&&(_i=!0,u(_),_i=!1)}},_.getVelocity=function(){return(ke()-dt)/(Je()-sr)*1e3||0},_.endAnimation=function(){nr(_.callbackAnimation),n&&(U?U.progress(1):n.paused()?D||nr(n,_.direction<0,1):nr(n,n.reversed()))},_.labelToScroll=function(I){return n&&n.labels&&(Q||_.refresh()||Q)+n.labels[I]/n.duration()*we||0},_.getTrailing=function(I){var R=Y.indexOf(_),z=_.direction>0?Y.slice(0,R).reverse():Y.slice(R+1);return(Ct(I)?z.filter(function(F){return F.vars.preventOverlaps===I}):z).filter(function(F){return _.direction>0?F.end<=Q:F.start>=ve})},_.update=function(I,R,z){if(!(b&&!z&&!I)){var F=ct===!0?Nt:_.scroll(),Pe=I?0:(F-Q)/we,$=Pe<0?0:Pe>1?1:Pe||0,be=_.progress,Ye,ge,le,ie,qt,de,wt,Yt;if(R&&(dt=tt,tt=b?ke():F,y&&(Di=yi,yi=n&&!D?n.totalProgress():$)),v&&h&&!$e&&!jr&&At&&(!$&&Q<F+(F-dt)/(Je()-sr)*v?$=1e-4:$===1&&ve>F+(F-dt)/(Je()-sr)*v&&($=.9999)),$!==be&&_.enabled){if(Ye=_.isActive=!!$&&$<1,ge=!!be&&be<1,de=Ye!==ge,qt=de||!!$!=!!be,_.direction=$>be?1:-1,_.progress=$,qt&&!$e&&(le=$&&!be?0:$===1?1:be===1?2:3,D&&(ie=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Yt=n&&(ie==="complete"||ie==="reset"||ie in n))),C&&(de||Yt)&&(Yt||g||!n)&&(Ke(C)?C(_):_.getTrailing(C).forEach(function(Ni){return Ni.endAnimation()})),D||(U&&!$e&&!jr?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",$,n._tTime/n._tDur):(U.vars.totalProgress=$,U.invalidate().restart())):n&&n.totalProgress($,!!($e&&(Oe||I)))),h){if(I&&p&&(Ie.style[p+E.os2]=z0),!K)Dt(ar(Et+ii*$));else if(qt){if(wt=!I&&$>be&&ve+1>F&&F+1>=Zt(B,E),T)if(!I&&(Ye||wt)){var De=fi(h,!0),Re=F-Q;Da(h,te,De.top+(E===Ce?Re:0)+Be,De.left+(E===Ce?0:Re)+Be)}else Da(h,Ie);I0(Ye||wt?vi:Oi),ri&&$<1&&Ye||Dt(Et+($===1&&!wt?ii:0))}}y&&!et.tween&&!$e&&!jr&&Ft.restart(!0),a&&(de||S&&$&&($<1||!Ss))&&pr(a.targets).forEach(function(Ni){return Ni.classList[Ye||S?"add":"remove"](a.className)}),o&&!D&&!I&&o(_),qt&&!$e?(D&&(Yt&&(ie==="complete"?n.pause().totalProgress(1):ie==="reset"?n.restart(!0).pause():ie==="restart"?n.restart(!0):n[ie]()),o&&o(_)),(de||!Ss)&&(d&&de&&Ls(_,d),j[le]&&Ls(_,j[le]),S&&($===1?_.kill(!1,1):j[le]=0),de||(le=$===1?1:3,j[le]&&Ls(_,j[le]))),M&&!Ye&&Math.abs(_.getVelocity())>(lr(M)?M:2500)&&(nr(_.callbackAnimation),U?U.progress(1):nr(n,ie==="reverse"?1:!$,1))):D&&o&&!$e&&o(_)}if(c0){var Xe=b?F/b.duration()*(b._caScrollDist||0):F;wr(Xe+(w._isFlipped?1:0)),c0(Xe)}u0&&u0(-F/b.duration()*(b._caScrollDist||0))}},_.enable=function(I,R){_.enabled||(_.enabled=!0,Ae(B,"resize",cr),W||Ae(B,"scroll",L0),ae&&Ae(l,"refreshInit",ae),I!==!1&&(_.progress=Ze=0,tt=dt=fe=ke()),R!==!1&&_.refresh())},_.getTween=function(I){return I&&et?et.tween:U},_.setPositions=function(I,R,z,F){if(b){var Pe=b.scrollTrigger,$=b.duration(),be=Pe.end-Pe.start;I=Pe.start+be*I/$,R=Pe.start+be*R/$}_.refresh(!1,!1,{start:La(I,z&&!!_._startClamp),end:La(R,z&&!!_._endClamp)},F),_.update()},_.adjustPinSpacing=function(I){if(Te&&I){var R=Te.indexOf(E.d)+1;Te[R]=parseFloat(Te[R])+I+Be,Te[1]=parseFloat(Te[1])+I+Be,I0(Te)}},_.disable=function(I,R){if(_.enabled&&(I!==!1&&_.revert(!0,!0),_.enabled=_.isActive=!1,R||U&&U.pause(),Nt=0,Ve&&(Ve.uncache=1),ae&&ze(l,"refreshInit",ae),Ft&&(Ft.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!W)){for(var z=Y.length;z--;)if(Y[z].scroller===B&&Y[z]!==_)return;ze(B,"resize",cr),W||ze(B,"scroll",L0)}},_.kill=function(I,R){_.disable(I,R),U&&!R&&U.kill(),c&&delete Os[c];var z=Y.indexOf(_);z>=0&&Y.splice(z,1),z===lt&&on>0&&lt--,z=0,Y.forEach(function(F){return F.scroller===_.scroller&&(z=1)}),z||ct||(_.scroll.rec=0),n&&(n.scrollTrigger=null,I&&n.revert({kill:!1}),R||n.kill()),ut&&[ut,_t,w,vt].forEach(function(F){return F.parentNode&&F.parentNode.removeChild(F)}),mr===_&&(mr=0),h&&(Ve&&(Ve.uncache=1),z=0,Y.forEach(function(F){return F.pin===h&&z++}),z||(Ve.spacer=0)),i.onKill&&i.onKill(_)},Y.push(_),_.enable(!1,!1),ni&&ni(_),n&&n.add&&!we){var ee=_.update;_.update=function(){_.update=ee,V.cache++,Q||ve||_.refresh()},P.delayedCall(.01,_.update),we=.01,Q=ve=0}else _.refresh();h&&zc()},l.register=function(i){return E0||(P=i||Ua(),Wa()&&window.document&&l.enable(),E0=or),E0},l.defaults=function(i){if(i)for(var n in i)Qr[n]=i[n];return Qr},l.disable=function(i,n){or=0,Y.forEach(function(o){return o[n?"kill":"disable"](i)}),ze(X,"wheel",L0),ze(se,"scroll",L0),clearInterval(Gr),ze(se,"touchcancel",Qt),ze(te,"touchstart",Qt),Jr(ze,se,"pointerdown,touchstart,mousedown",Ea),Jr(ze,se,"pointerup,touchend,mouseup",Ma),cn.kill(),$r(ze);for(var s=0;s<V.length;s+=3)Kr(ze,V[s],V[s+1]),Kr(ze,V[s],V[s+2])},l.enable=function(){if(X=window,se=document,Lt=se.documentElement,te=se.body,P&&(pr=P.utils.toArray,dr=P.utils.clamp,zs=P.core.context||Qt,Ts=P.core.suppressOverwrites||Qt,Ns=X.history.scrollRestoration||"auto",Ds=X.pageYOffset||0,P.core.globals("ScrollTrigger",l),te)){or=1,B0=document.createElement("div"),B0.style.height="100vh",B0.style.position="absolute",t1(),Cc(),_e.register(P),l.isTouch=_e.isTouch,zi=_e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ps=_e.isTouch===1,Ae(X,"wheel",L0),Fs=[X,se,Lt,te],P.matchMedia?(l.matchMedia=function(d){var u=P.matchMedia(),g;for(g in d)u.add(g,d[g]);return u},P.addEventListener("matchMediaInit",function(){return Ws()}),P.addEventListener("matchMediaRevert",function(){return Za()}),P.addEventListener("matchMedia",function(){e0(0,1),o0("matchMedia")}),P.matchMedia().add("(orientation: portrait)",function(){return Es(),Es})):console.warn("Requires GSAP 3.11.0 or later"),Es(),Ae(se,"scroll",L0);var i=te.hasAttribute("style"),n=te.style,s=n.borderTopStyle,o=P.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=fi(te),Ce.m=Math.round(a.top+Ce.sc())||0,je.m=Math.round(a.left+je.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(te.setAttribute("style",""),te.removeAttribute("style")),Gr=setInterval(Pa,250),P.delayedCall(.5,function(){return jr=0}),Ae(se,"touchcancel",Qt),Ae(te,"touchstart",Qt),Jr(Ae,se,"pointerdown,touchstart,mousedown",Ea),Jr(Ae,se,"pointerup,touchend,mouseup",Ma),Is=P.utils.checkPrefix("transform"),an.push(Is),E0=Je(),cn=P.delayedCall(.2,e0).pause(),M0=[se,"visibilitychange",function(){var d=X.innerWidth,u=X.innerHeight;se.hidden?(Ta=d,Sa=u):(Ta!==d||Sa!==u)&&cr()},se,"DOMContentLoaded",e0,X,"load",e0,X,"resize",cr],$r(Ae),Y.forEach(function(d){return d.enable(0,1)}),c=0;c<V.length;c+=3)Kr(ze,V[c],V[c+1]),Kr(ze,V[c],V[c+2])}},l.config=function(i){"limitCallbacks"in i&&(Ss=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Gr)||(Gr=n)&&setInterval(Pa,n),"ignoreMobileResize"in i&&(Ps=l.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&($r(ze)||$r(Ae,i.autoRefreshEvents||"none"),Va=(i.autoRefreshEvents+"").indexOf("resize")===-1)},l.scrollerProxy=function(i,n){var s=ot(i),o=V.indexOf(s),a=n0(s);~o&&V.splice(o,a?6:2),n&&(a?Vt.unshift(X,n,te,n,Lt,n):Vt.unshift(s,n))},l.clearMatchMedia=function(i){Y.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},l.isInViewport=function(i,n,s){var o=(Ct(i)?ot(i):i).getBoundingClientRect(),a=o[s?t0:i0]*n||0;return s?o.right-a>0&&o.left+a<X.innerWidth:o.bottom-a>0&&o.top+a<X.innerHeight},l.positionInViewport=function(i,n,s){Ct(i)&&(i=ot(i));var o=i.getBoundingClientRect(),a=o[s?t0:i0],c=n==null?a/2:n in hn?hn[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+c)/X.innerWidth:(o.top+c)/X.innerHeight},l.killAll=function(i){if(Y.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=s0.killAll||[];s0={},n.forEach(function(s){return s()})}},l}();q.version="3.12.7";q.saveStyles=function(l){return l?pr(l).forEach(function(t){if(t&&t.style){var r=St.indexOf(t);r>=0&&St.splice(r,5),St.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),P.core.getCache(t),zs())}}):St};q.revert=function(l,t){return Ws(!l,t)};q.create=function(l,t){return new q(l,t)};q.refresh=function(l){return l?cr(!0):(E0||q.register())&&e0(!0)};q.update=function(l){return++V.cache&&gi(l===!0?2:0)};q.clearScrollMemory=e1;q.maxScroll=function(l,t){return Zt(l,t?je:Ce)};q.getScrollFunc=function(l,t){return ui(ot(l),t?je:Ce)};q.getById=function(l){return Os[l]};q.getAll=function(){return Y.filter(function(l){return l.vars.id!=="ScrollSmoother"})};q.isScrolling=function(){return!!At};q.snapDirectional=Xs;q.addEventListener=function(l,t){var r=s0[l]||(s0[l]=[]);~r.indexOf(t)||r.push(t)};q.removeEventListener=function(l,t){var r=s0[l],i=r&&r.indexOf(t);i>=0&&r.splice(i,1)};q.batch=function(l,t){var r=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(d,u){var g=[],m=[],h=P.delayedCall(n,function(){u(g,m),g=[],m=[]}).pause();return function(p){g.length||h.restart(!0),g.push(p.trigger),m.push(p),s<=g.length&&h.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Ke(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ke(s)&&(s=s(),Ae(q,"refresh",function(){return s=t.batchMax()})),pr(l).forEach(function(c){var d={};for(a in i)d[a]=i[a];d.trigger=c,r.push(q.create(d))}),r};var Fa=function(t,r,i,n){return r>n?t(n):r<0&&t(0),i>n?(n-r)/(i-r):i<0?r/(r-i):1},Bs=function l(t,r){r===!0?t.style.removeProperty("touch-action"):t.style.touchAction=r===!0?"auto":r?"pan-"+r+(_e.isTouch?" pinch-zoom":""):"none",t===Lt&&l(te,r)},rn={auto:1,scroll:1},Fc=function(t){var r=t.event,i=t.target,n=t.axis,s=(r.changedTouches?r.changedTouches[0]:r).target,o=s._gsap||P.core.getCache(s),a=Je(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(rn[(c=zt(s)).overflowY]||rn[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!n0(s)&&(rn[(c=zt(s)).overflowY]||rn[c.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},r1=function(t,r,i,n){return _e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&Fc,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ae(se,_e.eventTypes[0],qa,!1,!0)},onDisable:function(){return ze(se,_e.eventTypes[0],qa,!0)}})},Nc=/(input|label|select|textarea)/i,Na,qa=function(t){var r=Nc.test(t.target.tagName);(r||Na)&&(t._gsapAllow=!0,Na=r)},qc=function(t){Zi(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var r=t,i=r.normalizeScrollX,n=r.momentum,s=r.allowNestedScroll,o=r.onRelease,a,c,d=ot(t.target)||Lt,u=P.core.globals().ScrollSmoother,g=u&&u.get(),m=zi&&(t.content&&ot(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),h=ui(d,Ce),p=ui(d,je),f=1,v=(_e.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,k=0,x=Ke(n)?function(){return n(a)}:function(){return n||2.8},S,y,T=r1(d,t.type,!0,s),L=function(){return y=!1},b=Qt,M=Qt,C=function(){c=Zt(d,Ce),M=dr(zi?1:0,c),i&&(b=dr(0,Zt(d,je))),S=r0},E=function(){m._gsap.y=ar(parseFloat(m._gsap.y)+h.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(y){requestAnimationFrame(L);var Z=ar(a.deltaY/2),oe=M(h.v-Z);if(m&&oe!==h.v+h.offset){h.offset=oe-h.v;var _=ar((parseFloat(m&&m._gsap.y)||0)-h.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",m._gsap.y=_+"px",h.cacheID=V.cache,gi()}return!0}h.offset&&E(),y=!0},B,G,W,K,j=function(){C(),B.isActive()&&B.vars.scrollY>c&&(h()>c?B.progress(1)&&h(c):B.resetTo("scrollY",c))};return m&&P.set(m,{y:"+=0"}),t.ignoreCheck=function(O){return zi&&O.type==="touchmove"&&D(O)||f>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=f;f=ar((X.visualViewport&&X.visualViewport.scale||1)/v),B.pause(),O!==f&&Bs(d,f>1.01?!0:i?!1:"x"),G=p(),W=h(),C(),S=r0},t.onRelease=t.onGestureStart=function(O,Z){if(h.offset&&E(),!Z)K.restart(!0);else{V.cache++;var oe=x(),_,ae;i&&(_=p(),ae=_+oe*.05*-O.velocityX/.227,oe*=Fa(p,_,ae,Zt(d,je)),B.vars.scrollX=b(ae)),_=h(),ae=_+oe*.05*-O.velocityY/.227,oe*=Fa(h,_,ae,Zt(d,Ce)),B.vars.scrollY=M(ae),B.invalidate().duration(oe).play(.01),(zi&&B.vars.scrollY>=c||_>=c-1)&&P.to({},{onUpdate:j,duration:oe})}o&&o(O)},t.onWheel=function(){B._ts&&B.pause(),Je()-k>1e3&&(S=0,k=Je())},t.onChange=function(O,Z,oe,_,ae){if(r0!==S&&C(),Z&&i&&p(b(_[2]===Z?G+(O.startX-O.x):p()+Z-_[1])),oe){h.offset&&E();var Qe=ae[2]===oe,Ot=Qe?W+O.startY-O.y:h()+oe-ae[1],fe=M(Ot);Qe&&Ot!==fe&&(W+=fe-Ot),h(fe)}(oe||Z)&&gi()},t.onEnable=function(){Bs(d,i?!1:"x"),q.addEventListener("refresh",j),Ae(X,"resize",j),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Bs(d,!0),ze(X,"resize",j),q.removeEventListener("refresh",j),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new _e(t),a.iOS=zi,zi&&!h()&&h(1),zi&&P.ticker.add(Qt),K=a._dc,B=P.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:i1(h,h(),function(){return B.pause()})},onUpdate:gi,onComplete:K.vars.onComplete}),a};q.sort=function(l){if(Ke(l))return Y.sort(l);var t=X.pageYOffset||0;return q.getAll().forEach(function(r){return r._sortY=r.trigger?t+r.trigger.getBoundingClientRect().top:r.start+X.innerHeight}),Y.sort(l||function(r,i){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};q.observe=function(l){return new _e(l)};q.normalizeScroll=function(l){if(typeof l>"u")return at;if(l===!0&&at)return at.enable();if(l===!1){at&&at.kill(),at=l;return}var t=l instanceof _e?l:qc(l);return at&&at.target===t.target&&at.kill(),n0(t.target)&&(at=t),t};q.core={_getVelocityProp:Ur,_inputObserver:r1,_scrollers:V,_proxies:Vt,bridge:{ss:function(){At||o0("scrollStart"),At=Je()},ref:function(){return $e}}};Ua()&&P.registerPlugin(q);var Hc={threshold:.7},n1=Array.from(document.querySelectorAll(".out-of-question")),s1=document.getElementById("intro-grid-one"),o1=document.getElementById("intro-grid-two"),Vc=document.querySelector(".tiny-boy"),Yc=document.querySelectorAll(".sad-child"),gn=new IntersectionObserver((l,t)=>{l.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting)r.isIntersecting&&n1.forEach((i,n)=>{n===0&&setTimeout(()=>{i.classList.remove("out-of-question")},500),n===1&&(setTimeout(()=>{i.classList.remove("out-of-question")},1e3),setTimeout(()=>{i.classList.add("upn-out-of-question")},1750)),n===2&&(setTimeout(()=>{i.classList.remove("out-of-question")},1750),setTimeout(()=>{i.classList.add("upn-out-of-question")},2500),setTimeout(()=>{n1[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{s1.classList.add("get-up"),o1.classList.add("get-down")},3500),setTimeout(()=>{s1.remove(),o1.remove(),Vc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Yc.forEach(s=>{s.classList.remove("sad-child")})},4500),setTimeout(()=>{eo("class","balloon-ball","add","in-wind")},5e3))});else return})},Hc);var a1=document.getElementById("brianSecondPageBox"),Xc=document.getElementById("brianSecondChair"),Wc={threshold:.4},mn=new IntersectionObserver((l,t)=>{l.forEach(r=>{if(console.log(r.target.classlist),r.isIntersecting)r.isIntersecting&&(a1.classList.remove("unseen"),Xc.classList.add("slide-chair-in"),a1.classList.add("brianUp"));else return})},Wc);var Uc={threshold:.7},G3=Array.from(document.querySelectorAll("iframe")),j3=document.querySelector(".marketing--pitch-box"),pn=new IntersectionObserver((l,t)=>{l.forEach(r=>{if(console.log("func"),r.isIntersecting)r.isIntersecting&&console.log("here");else return})},Uc);var Ai=document.getElementById("homeMonitor"),Z3=document.getElementById("mob_fl_arrow"),ed=document.querySelector(".back--drop");var td=document.querySelectorAll("iframe"),l1=l=>{if(l==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(l.target),l.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Ai.innerHTML=`
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
      `;let r=document.querySelector(".marketing--pitch-box");setTimeout(()=>{r.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":Ai.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":l.preventDefault(),xr();break;case"mob_fl_arrow":console.log("arrow clicked");let o=document.getElementById("fl_ex_list"),a=o.firstElementChild;o.appendChild(a),console.log(a);break}};var c1=()=>{console.log("lazy loading engaged")};Bi.registerPlugin(q);var _n="src/components/images/falling1.png",d1="src/components/images/falling2.png",vn="src/components/images/falling5.png",Us="src/components/images/falling4.png",u1="src/components/images/falling6.png",Gc="src/components/images/panic1.png",h1="src/components/images/panic4.png",jc="src/components/images/panic3.png",$c=document.getElementById("image"),Gs=0,js=[_n,d1,_n,u1,vn,Us,vn,Us,_n,vn,Us,vn,u1,_n,d1],Jc=[Gc,h1,jc,h1];function Kc(){++Gs>=js.length&&(Gs=0),$c.src=js[Gs]}var _d=document.getElementById("brianSecondPage"),vd=document.getElementById("brianSecondPageBox"),wd=document.getElementById("switchFree"),yd=document.getElementById("switchPort"),bd=document.getElementById("freelancePresenter"),xd=document.getElementById("backCloud"),kd=document.querySelector(".switchwrap"),Qc=document.querySelector(".homeWrap"),Zc=document.querySelectorAll("#target"),Td=document.getElementById("launch"),Sd=document.getElementById("clear"),e2=!1,t2=document.getElementById("top-target"),i2=document.getElementById("hi"),r2=document.getElementById("hiBox"),n2=document.getElementById("iam"),s2=document.getElementById("iamBox"),o2=document.getElementById("brianBox"),a2=document.getElementById("strout"),l2=document.getElementById("stroutBox"),c2=document.getElementById("title"),d2=document.getElementById("titleBox"),u2=document.querySelectorAll(".first-letters"),h2=document.getElementById("first-n"),f1=document.getElementById("fallingShell"),f2=document.getElementById("wrapper"),g2=document.getElementById("moodring"),m2=document.querySelectorAll(".cloudsForward"),p2=document.querySelectorAll(".cloudsBackwards"),g1=[...m2],m1=[...p2],Cd=document.getElementById("remainder"),Ld=document.getElementById("c1"),Ed=document.getElementById("c2"),Md=document.getElementById("c3"),Bd=document.getElementById("c4"),Id=document.getElementById("c5"),Pd=document.getElementById("c6"),zd=document.getElementById("c7"),Ad=document.getElementById("c8"),Od=document.getElementById("c9"),Dd=document.getElementById("c10"),Rd=document.getElementById("c11"),_2=document.getElementById("sun"),v2=document.getElementById("moon"),Fd=document.getElementById("target"),Nd=document.getElementById("switchPort"),qd=document.getElementById("brianSecondChair"),Hd=document.getElementById("brianBlurbP"),Vd=document.getElementById("listOfSkills"),w2=document.querySelectorAll(".shrunk"),Yd=[...w2],Xd=document.getElementById("listed_skills_media"),y2=document.getElementsByTagName("li"),Wd=[...y2],Ud=document.getElementById("absolute-cloud"),Gd=document.getElementById("copy-gmail"),jd=document.getElementById("brianlinkedin"),$d=document.getElementById("briangithub"),Jd=document.getElementById("resume-link"),Kd=document.querySelectorAll("iframe"),Qd=document.getElementById("fallingSecond"),Zd=document.getElementById("castle"),b2=document.querySelectorAll("#introToServices"),x2=Array.from(document.querySelectorAll(".nav--link")),p1=()=>{Zc.forEach(n=>{mn.observe(n)}),b2.forEach(n=>{gn.observe(n)}),pn,setInterval(Kc,200);let l=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),g2.addEventListener("click",()=>{f2.classList.toggle("dark"),_2.classList.toggle("sunset"),v2.classList.toggle("sunset")});let t=()=>{g1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),m1.forEach(n=>{n.classList.add("clouds-movement-background")})},r=()=>{f1.classList.add("falling"),setTimeout(()=>{e2=!0},3500)};window.addEventListener("load",()=>{t2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{i2.classList.remove("translatedHi"),n2.classList.remove("translatedIam"),[...u2].forEach(s=>{s.classList.add("first-name-falling-in")}),a2.classList.remove("translatedStrout"),c2.classList.remove("translatedTitle"),setTimeout(()=>{t()},2e3),setTimeout(()=>{r()},3500)},1e3),setTimeout(()=>{i()},7500)}),h2.addEventListener("transitionend",function(){});let i=()=>{r2.classList.add("up-and-out"),s2.classList.add("up-and-out"),o2.classList.add("up-and-out"),l2.classList.add("up-and-out"),d2.classList.add("up-and-out"),setTimeout(()=>{js=Jc},2e3),setTimeout(()=>{l.style.overflow="visible",f1.classList.add("down-and-out"),g1.forEach(n=>{n.classList.add("unseen")}),m1.forEach(n=>{n.classList.add("unseen")})},2500),setTimeout(()=>{Qc.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{x2.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),q0("andgo"),c1()},6500)}};Bi.registerPlugin(q);var wn="src/components/images/falling1.png",_1="src/components/images/falling2.png",yn="src/components/images/falling5.png",$s="src/components/images/falling4.png",v1="src/components/images/falling6.png",k2="src/components/images/panic1.png",w1="src/components/images/panic4.png",T2="src/components/images/panic3.png",fu=document.getElementById("image");var S2=[wn,_1,wn,v1,yn,$s,yn,$s,wn,yn,$s,yn,v1,wn,_1],C2=[k2,w1,T2,w1];function L2(){}var gu=document.getElementById("brianSecondPage"),mu=document.getElementById("brianSecondPageBox"),pu=document.getElementById("switchFree"),_u=document.getElementById("switchPort"),vu=document.getElementById("freelancePresenter"),wu=document.getElementById("backCloud"),yu=document.querySelector(".switchwrap"),E2=document.querySelector(".homeWrap"),M2=document.querySelectorAll("#target"),bu=document.getElementById("launch"),xu=document.getElementById("clear"),B2=!1,I2=document.getElementById("top-target"),P2=document.getElementById("hi"),z2=document.getElementById("hiBox"),A2=document.getElementById("iam"),O2=document.getElementById("iamBox"),D2=document.getElementById("brianBox"),R2=document.getElementById("strout"),F2=document.getElementById("stroutBox"),N2=document.getElementById("title"),q2=document.getElementById("titleBox"),H2=document.querySelectorAll(".first-letters"),V2=document.getElementById("first-n"),y1=document.getElementById("fallingShell"),Y2=document.getElementById("wrapper"),X2=document.getElementById("moodring"),W2=document.querySelectorAll(".cloudsForward"),U2=document.querySelectorAll(".cloudsBackwards"),b1=[...W2],x1=[...U2],ku=document.getElementById("remainder"),Tu=document.getElementById("c1"),Su=document.getElementById("c2"),Cu=document.getElementById("c3"),Lu=document.getElementById("c4"),Eu=document.getElementById("c5"),Mu=document.getElementById("c6"),Bu=document.getElementById("c7"),Iu=document.getElementById("c8"),Pu=document.getElementById("c9"),zu=document.getElementById("c10"),Au=document.getElementById("c11"),G2=document.getElementById("sun"),j2=document.getElementById("moon"),Ou=document.getElementById("target"),Du=document.getElementById("switchPort"),Ru=document.getElementById("brianSecondChair"),Fu=document.getElementById("brianBlurbP"),Nu=document.getElementById("listOfSkills"),$2=document.querySelectorAll(".shrunk"),qu=[...$2],Hu=document.getElementById("listed_skills_media"),J2=document.getElementsByTagName("li"),Vu=[...J2],Yu=document.getElementById("absolute-cloud"),Xu=document.getElementById("copy-gmail"),Wu=document.getElementById("brianlinkedin"),Uu=document.getElementById("briangithub"),Gu=document.getElementById("resume-link"),ju=document.querySelectorAll("iframe"),$u=document.getElementById("fallingSecond"),Ju=document.getElementById("castle"),K2=document.querySelectorAll("#introToServices"),Q2=Array.from(document.querySelectorAll(".nav--link")),k1=()=>{console.log("in development ksipping animation"),M2.forEach(n=>{mn.observe(n)}),K2.forEach(n=>{gn.observe(n)}),pn,setInterval(L2,200);let l=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),X2.addEventListener("click",()=>{Y2.classList.toggle("dark"),G2.classList.toggle("sunset"),j2.classList.toggle("sunset")});let t=()=>{b1.forEach(n=>{n.classList.add("clouds-movement-foreground")}),x1.forEach(n=>{n.classList.add("clouds-movement-background")})},r=()=>{y1.classList.add("falling"),setTimeout(()=>{B2=!0},0)};window.addEventListener("load",()=>{I2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{P2.classList.remove("translatedHi"),A2.classList.remove("translatedIam"),[...H2].forEach(s=>{s.classList.add("first-name-falling-in")}),R2.classList.remove("translatedStrout"),N2.classList.remove("translatedTitle"),setTimeout(()=>{t()},0),setTimeout(()=>{r()},0)},0),setTimeout(()=>{i()},0)}),V2.addEventListener("transitionend",function(){});let i=()=>{z2.classList.add("up-and-out"),O2.classList.add("up-and-out"),D2.classList.add("up-and-out"),F2.classList.add("up-and-out"),q2.classList.add("up-and-out"),setTimeout(()=>{S2=C2},0),setTimeout(()=>{l.style.overflow="visible",y1.classList.add("down-and-out"),b1.forEach(n=>{n.classList.add("unseen")}),x1.forEach(n=>{n.classList.add("unseen")})},0),setTimeout(()=>{E2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{Q2.forEach(n=>{n.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),l1("intro")},0)}};var a0=document.getElementById("deckOfMarketingCards"),Qu=a0.querySelectorAll(".marketing__mobileCard"),Js=0,vr=!1,mi=null;function T1(l){if(console.log("moving"),!vr||!mi)return;let r=l.touches[0].clientX-Js;mi.style.transform=`translateX(${r}px) rotate(${r/20}deg)`}function S1(l){console.log("touch start sensed"),!vr&&(mi=a0.firstElementChild,Js=l.touches[0].clientX,vr=!0)}function C1(l){if(console.log("touch end sensed"),!vr||!mi)return;let r=l.changedTouches[0].clientX-Js,i=window.innerWidth*.3;if(Math.abs(r)>i){let n=r>0?1:-1;mi.style.transition="transform 0.3s ease-out",mi.style.transform=`translateX(${n*100}vw) rotate(${n*20}deg)`,setTimeout(()=>{Z2(mi)},300)}else mi.style.transition="transform 0.2s ease-out",mi.style.transform="translateX(0) rotate(0)";vr=!1}function Z2(l){l.style.transition="none",l.style.transform="translateX(0) rotate(0)",a0.appendChild(l)}Bi.registerPlugin(q);var e3=!1;e3?k1():p1();function L1(){return window.innerWidth<=768}var l5=L1();L1&&(console.log("index has registered mobile we be launching listeners"),a0.addEventListener("touchstart",S1),a0.addEventListener("touchmove",T1),a0.addEventListener("touchend",C1));document.addEventListener("click",(l,t)=>{q0(l)});var c5=document.getElementById("portgithub"),d5=document.getElementById("mashagithub"),u5=document.getElementById("mashanetlify"),h5=document.getElementById("fugagithub"),f5=document.getElementById("fuganetlify");wrapper.addEventListener("click",l=>{if(!(l.target.nodeName==="BUTTON"))return;switch(l.target.id){case"portgithub":l0("github.com/BrianStrout/Portfolio");break;case"mashagithub":l0("github.com/BrianStrout/masha");break;case"mashanetlify":l0("mashaoflisbon.netlify.app/");break;case"fugagithub":l0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":l0("lafugitiva.netlify.app/");break;case"rotaryyoutube":l0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":l0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var l0=l=>{window.open(`https://${l}`,"_blank")};var t3=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t3=!0}}))}catch{}var g5="onwheel"in document.createElement("div")?"wheel":"mousewheel";var i3=document.querySelectorAll(".web__process--presenter");i3.forEach(l=>{Tn.observe(l)});Tn.observe(document.getElementById("gridHeader"));var r3=document.querySelectorAll(".fademe");r3.forEach(l=>{to.observe(l)});var n3=Bi.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});n3.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
