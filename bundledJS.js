(()=>{var D0=document.querySelector(".canvas"),Xs=!0,vn={frame:0},js=D0.getContext("2d"),v1=80,wn=[],w1=a=>`/src/components/images/animation/${a}.png`,y1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let a=0;a<v1;a++){let e=new Image;e.src=w1(a),wn.push(e)}console.log("loaded image gallery"),console.log(wn)},b1=a=>{console.log("rendering function flying"),js.clearRect(0,0,D0.width,D0.height),js.drawImage(wn[a],0,0,D0.width,D0.height)};function x1(a,e){let i=a,t=a,r=2e3,n=e-a,s=performance.now();function o(){let l=performance.now()-s,c=Math.min(l/r,1);c=1-Math.pow(1-c,3),i=Math.round(a+c*n),i!==t&&(t=i,console.log(t),b1(t)),c<1&&requestAnimationFrame(o)}requestAnimationFrame(o)}var Fi=a=>{console.log("UAF called on",a),a==="load"&&Xs&&(y1(),Xs=!1),typeof a=="number"&&(console.log("number time!"),console.log(vn),x1(vn.frame,a),vn.frame=a)};var k1={threshold:.6},$2=document.getElementById("websiteVideo"),yn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting){if(i.isIntersecting)switch(Fi("load"),console.log(i.target," io"),i.target.scrollIntoView({behavior:"smooth",block:"end"}),i.target.id){case"gridHeader":Fi(0);break;case"wpp__concept":Fi(19);break;case"wpp__copy":Fi(39);break;case"wpp__design":Fi(59);break;case"wpp__creation":Fi(79);break}}else return})},k1);function Js(a,e,i,t,r){let n,s;if(a==="id")n=document.getElementById(`${e}`);else if(a==="class")s=Array.from(document.querySelectorAll(`.${e}`)),s.forEach(o=>{o.classList[i](`${t}`)});else{console.log("selector error");return}}var T1={threshold:.4},$s=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(i.isIntersecting)i.isIntersecting&&i.target.classList.remove("fadeup");else return})},T1);var Ks=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var Qs=a=>{console.log("we are live in submitter about to to predef");let e=document.getElementById("contactForm"),i="service_9l2h8gg",t="template_36awvk9",r=document.getElementById("formMessage").value;emailjs.sendForm(i,t,e,"oYymItkIoREaVvBlM").then(n=>{console.log("SUCCESS!",n.status,n.text)}).catch(n=>{console.error(n.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${r}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),Ks()};var o3=document.getElementById("contactForm"),a3=document.getElementById("formName"),l3=document.getElementById("formEmail"),c3=document.getElementById("formMessage"),bn=!1,xn=!1,kn=!1,c0;function Tn(){console.log("GOIGM FOR ALL"),bn&&xn&&kn?(console.log("all fields pass!"),Qs()):(console.log("field failure"),console.log(bn,xn,kn))}function S1(a){return c0=/^[a-z a-z]+$/gi,c0.test(a)?(console.log("name pass"),bn=!0,Tn(),!0):(console.log("fail name"),!1)}function C1(a){return c0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,c0.test(a)?(console.log("email pass"),xn=!0,Tn(),!0):(console.log("not a valid email"),!1)}function L1(a){return c0=/.{8}/,c0.test(a)?(console.log("message pass"),kn=!0,Tn(),!0):(console.log("fail"),!1)}var vr=()=>{console.log("validating?"),S1(document.getElementById("formName").value),C1(document.getElementById("formEmail").value),L1(document.getElementById("formMessage").value)};var ri=[{header:"Presence Auditing",description:`<p>Let's figure out where you stand today</p>
<ul>
<li class="fadeRight">Branding consistency review</li>
<li class="fadeRight sec">SEO & UX audit</li>
<li class="fadeRight thi"> Competitor analysis</li>
</ul>
`,slug:"auditicon",image:"src/components/images/marketingicons/assess.png"},{header:"Strategy",description:`<p>reach your audience and grow your business</p>
<ul>
<li class="fadeRight"> Clarifying target audience</li>
<li class="fadeRight sec">Website Builds</li>
<li class="fadeRight thi">Social media and promotional planning</li>
</ul>
`,slug:"straticon",image:"src/components/images/marketingicons/strategy.png"},{header:"Optimization",description:`<p>Streamline your efforts</p>
<ul>
<li class="fadeRight">SEO formatting</li>
<li class="fadeRight sec">Internal Market Linking</li>
<li class="fadeRight thi">Analytics and Reporting</li>
</ul>
`,slug:"optiicon",image:"src/components/images/marketingicons/optimize.png"},{header:"Topic Authority",description:`<p>Establish yourself as an industry leader </p>
      <ul>
      <li class="fadeRight">SEO oriented content</li>
      <li class="fadeRight sec">Multimedia content</li>
      <li class="fadeRight thi">Cross platform consistency </li>
      </ul>
      `,slug:"authicon",image:"src/components/images/marketingicons/authorize.png"},{header:"Implementation",description:`<p>Need longer term help</p>
      <ul>
      <li class="fadeRight">Blog & article creation</li>
      <li class="fadeRight sec">Email & automation setup and campaigns</li>
      <li class="fadeRight thi">Industry research and connection</li>
      </ul>
      `,slug:"implicon",image:"src/components/images/marketingicons/implement.png"}];var E1=document.getElementById("msHeader"),M1=document.getElementById("msParagraph"),Zs=document.querySelector(".ms__icons"),Lt=0;var Sn,B1=a=>{Zs.querySelector(".risen")&&(Sn=Zs.querySelector(".risen"),console.log(Sn,"should be risen var"),Sn.classList.remove("risen")),document.querySelector(`#${a}`).classList.add("risen")},I1=document.getElementById("msArrowLeft"),wr=4,P1=document.getElementById("msArrowRight"),yr=2,z1=a=>{console.log("in arrow"),console.log(a),wr=a-1,a===0&&(wr=4),yr=a+1,a===4&&(yr=0),Lt<0&&(Lt=ri.length-1),console.log(wr,yr),I1.style.backgroundImage=`url(/${ri[wr].image})`,P1.style.backgroundImage=`url(/${ri[yr].image})`},eo=a=>{a==="left"&&(Lt--,Lt<0&&(Lt=ri.length-1)),a==="right"&&(Lt++,Lt===ri.length&&(Lt=0)),E1.textContent=ri[Lt].header,M1.innerHTML=ri[Lt].description,B1(ri[Lt].slug),z1(Lt)},to=a=>{console.log("marketing controller live",a),a.classList.contains("arrowLeft")&&(console.log("Left!"),eo("left")),a.classList.contains("arrowRight")&&(console.log("Right!"),eo("right"))};var q=document.querySelector("#sc__hello");var d0=!1,wi=()=>{console.log(d0),d0=!d0,console.log(d0),d0?(document.querySelector(".front__and-center").classList.remove("front__and-center"),setTimeout(()=>{document.getElementById("mobileBack").innerHTML='<div class="mb1"></div><div class="mb2"></div><div class="mb3"></div><div class="mb4"></div><div class="mb5"></div><div class="mb6"></div><div class="mb7"></div><div class="mb8"></div>'},"750")):d0||(document.getElementById("mobileBack").innerHTML="")},R0=a=>{if(console.log("new"),a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(a==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),q=document.querySelector("#sc__hello"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(e=>{e.tagName&&e.tagName==="DIV"&&e.classList.add("hit")});return}if(a.target.classList.contains("arrow")&&to(a.target),a.target.classList.contains("nav--link")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let e=document.querySelectorAll(".hit");e.length>0&&e.forEach(i=>{i.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(i=>{i.classList.add("blur"),i.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(i=>{i.classList.contains("fadeup")||i.classList.add("fadeup")})}switch(a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"submit":console.log("submitting in the new controller"),a.preventDefault(),vr();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":q=document.querySelector("#sc__hello"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"m--marketing":q=document.querySelector("#sc__marketing"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"m--web":q=document.querySelector("#sc__websites"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"m--video":q=document.querySelector("#sc__video"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"m--nerd":q=document.querySelector("#sc__nerd"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")});let i=[...document.getElementsByTagName("li")],t=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{i.forEach(r=>{r.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"m--reference":q=document.querySelector("#sc__reference"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break;case"cta":R0("m--contact");break;case"m--contact":q=document.querySelector("#sc__contact"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),wi();break}};function ni(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function co(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},h0={duration:.5,overwrite:!1,delay:0},Un,Fe,le,Mt=1e8,re=1/Mt,zn=Math.PI*2,A1=zn/4,O1=0,uo=Math.sqrt,D1=Math.cos,R1=Math.sin,Ee=function(e){return typeof e=="string"},ge=function(e){return typeof e=="function"},oi=function(e){return typeof e=="number"},Br=function(e){return typeof e>"u"},Xt=function(e){return typeof e=="object"},ft=function(e){return e!==!1},Wn=function(){return typeof window<"u"},br=function(e){return ge(e)||Ee(e)},ho=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},We=Array.isArray,An=/(?:-?\.?\d|\.)+/gi,Gn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xn=/[+-]=-?[.\d]+/,fo=/[^,'"\[\]\s]+/gi,F1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Wt,On,jn,yt={},Sr={},go,mo=function(e){return(Sr=f0(e,yt))&&Ge},Ir=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Y0=function(e,i){return!i&&console.warn(e)},po=function(e,i){return e&&(yt[e]=i)&&Sr&&(Sr[e]=i)||yt},U0=function(){return 0},N1={suppressEvents:!0,isStart:!0,kill:!1},xr={suppressEvents:!0,kill:!1},q1={suppressEvents:!0},Jn={},bi=[],Dn={},_o,ut={},Ln={},io=30,kr=[],$n="",Kn=function(e){var i=e[0],t,r;if(Xt(i)||ge(i)||(e=[e]),!(t=(i._gsap||{}).harness)){for(r=kr.length;r--&&!kr[r].targetTest(i););t=kr[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new es(e[r],t)))||e.splice(r,1);return e},xi=function(e){return e._gsap||Kn(Bt(e))[0]._gsap},Qn=function(e,i,t){return(t=e[i])&&ge(t)?e[i]():Br(t)&&e.getAttribute&&e.getAttribute(i)||t},tt=function(e,i){return(e=e.split(",")).forEach(i)||e},me=function(e){return Math.round(e*1e5)/1e5||0},Te=function(e){return Math.round(e*1e7)/1e7||0},Yi=function(e,i){var t=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),t==="+"?e+r:t==="-"?e-r:t==="*"?e*r:e/r},H1=function(e,i){for(var t=i.length,r=0;e.indexOf(i[r])<0&&++r<t;);return r<t},Cr=function(){var e=bi.length,i=bi.slice(0),t,r;for(Dn={},bi.length=0,t=0;t<e;t++)r=i[t],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vo=function(e,i,t,r){bi.length&&!Fe&&Cr(),e.render(i,t,r||Fe&&i<0&&(e._initted||e._startAt)),bi.length&&!Fe&&Cr()},wo=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(fo).length<2?i:Ee(e)?e.trim():e},yo=function(e){return e},bt=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},V1=function(e){return function(i,t){for(var r in t)r in i||r==="duration"&&e||r==="ease"||(i[r]=t[r])}},f0=function(e,i){for(var t in i)e[t]=i[t];return e},ro=function a(e,i){for(var t in i)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=Xt(i[t])?a(e[t]||(e[t]={}),i[t]):i[t]);return e},Lr=function(e,i){var t={},r;for(r in e)r in i||(t[r]=e[r]);return t},q0=function(e){var i=e.parent||de,t=e.keyframes?V1(We(e.keyframes)):bt;if(ft(e.inherit))for(;i;)t(e,i.vars.defaults),i=i.parent||i._dp;return e},Y1=function(e,i){for(var t=e.length,r=t===i.length;r&&t--&&e[t]===i[t];);return t<0},bo=function(e,i,t,r,n){t===void 0&&(t="_first"),r===void 0&&(r="_last");var s=e[r],o;if(n)for(o=i[n];s&&s[n]>o;)s=s._prev;return s?(i._next=s._next,s._next=i):(i._next=e[t],e[t]=i),i._next?i._next._prev=i:e[r]=i,i._prev=s,i.parent=i._dp=e,i},Pr=function(e,i,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var n=i._prev,s=i._next;n?n._next=s:e[t]===i&&(e[t]=s),s?s._prev=n:e[r]===i&&(e[r]=n),i._next=i._prev=i.parent=null},ki=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ni=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},U1=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Rn=function(e,i,t,r){return e._startAt&&(Fe?e._startAt.revert(xr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},W1=function a(e){return!e||e._ts&&a(e.parent)},no=function(e){return e._repeat?g0(e._tTime,e=e.duration()+e._rDelay)*e:0},g0=function(e,i){var t=Math.floor(e=Te(e/i));return e&&t===e?t-1:t},Er=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},zr=function(e){return e._end=Te(e._start+(e._tDur/Math.abs(e._ts||e._rts||re)||0))},Ar=function(e,i){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Te(t._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),zr(e),t._dirty||Ni(t,e)),e},xo=function(e,i){var t;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(t=Er(e.rawTime(),i),(!i._dur||X0(0,i.totalDuration(),t)-i._tTime>re)&&i.render(t,!0)),Ni(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-re}},Gt=function(e,i,t,r){return i.parent&&ki(i),i._start=Te((oi(t)?t:t||e!==de?Et(e,t,i):e._time)+i._delay),i._end=Te(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),bo(e,i,"_first","_last",e._sort?"_start":0),Fn(i)||(e._recent=i),r||xo(e,i),e._ts<0&&Ar(e,e._tTime),e},ko=function(e,i){return(yt.ScrollTrigger||Ir("scrollTrigger",i))&&yt.ScrollTrigger.create(i,e)},To=function(e,i,t,r,n){if(rs(e,i,n),!e._initted)return 1;if(!t&&e._pt&&!Fe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_o!==ht.frame)return bi.push(e),e._lazy=[n,r],1},G1=function a(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},Fn=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},X1=function(e,i,t,r){var n=e.ratio,s=i<0||!i&&(!e._start&&G1(e)&&!(!e._initted&&Fn(e))||(e._ts<0||e._dp._ts<0)&&!Fn(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=X0(0,e._tDur,i),d=g0(l,o),e._yoyo&&d&1&&(s=1-s),d!==g0(e._tTime,o)&&(n=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==n||Fe||r||e._zTime===re||!i&&e._zTime){if(!e._initted&&To(e,i,r,t,l))return;for(f=e._zTime,e._zTime=i||(t?re:0),t||(t=i&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;i<0&&Rn(e,i,t,!0),e._onUpdate&&!t&&wt(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&wt(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===s&&(s&&ki(e,1),!t&&!Fe&&(wt(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},j1=function(e,i,t){var r;if(t>i)for(r=e._first;r&&r._start<=t;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=t;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},m0=function(e,i,t,r){var n=e._repeat,s=Te(i)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=n?n<0?1e10:Te(s*(n+1)+e._rDelay*n):s,o>0&&!r&&Ar(e,e._tTime=e._tDur*o),e.parent&&zr(e),t||Ni(e.parent,e),e},so=function(e){return e instanceof Re?Ni(e):m0(e,e._dur)},J1={_start:0,endTime:U0,totalDuration:U0},Et=function a(e,i,t){var r=e.labels,n=e._recent||J1,s=e.duration()>=Mt?n.endTime(!1):e._dur,o,l,c;return Ee(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),c=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(i.substr(1))||0)*(c?(o<0?n:t).totalDuration()/100:1)):o<0?(i in r||(r[i]=s),r[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),c&&t&&(l=l/100*(We(t)?t[0]:t).totalDuration()),o>1?a(e,i.substr(0,o-1),t)+l:s+l)):i==null?s:+i},H0=function(e,i,t){var r=oi(i[1]),n=(r?2:1)+(e<2?0:1),s=i[n],o,l;if(r&&(s.duration=i[1]),s.parent=t,e){for(o=s,l=t;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ft(l.vars.inherit)&&l.parent;s.immediateRender=ft(o.immediateRender),e<2?s.runBackwards=1:s.startAt=i[n-1]}return new be(i[0],s,i[n+1])},Ti=function(e,i){return e||e===0?i(e):i},X0=function(e,i,t){return t<e?e:t>i?i:t},Ne=function(e,i){return!Ee(e)||!(i=F1.exec(e))?"":i[1]},$1=function(e,i,t){return Ti(t,function(r){return X0(e,i,r)})},Nn=[].slice,So=function(e,i){return e&&Xt(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Xt(e[0]))&&!e.nodeType&&e!==Wt},K1=function(e,i,t){return t===void 0&&(t=[]),e.forEach(function(r){var n;return Ee(r)&&!i||So(r,1)?(n=t).push.apply(n,Bt(r)):t.push(r)})||t},Bt=function(e,i,t){return le&&!i&&le.selector?le.selector(e):Ee(e)&&!t&&(On||!p0())?Nn.call((i||jn).querySelectorAll(e),0):We(e)?K1(e,t):So(e)?Nn.call(e,0):e?[e]:[]},qn=function(e){return e=Bt(e)[0]||Y0("Invalid scope")||{},function(i){var t=e.current||e.nativeElement||e;return Bt(i,t.querySelectorAll?t:t===e?Y0("Invalid scope")||jn.createElement("div"):e)}},Co=function(e){return e.sort(function(){return .5-Math.random()})},Lo=function(e){if(ge(e))return e;var i=Xt(e)?e:{each:e},t=qi(i.ease),r=i.from||0,n=parseFloat(i.base)||0,s={},o=r>0&&r<1,l=isNaN(r)||o,c=i.axis,d=r,f=r;return Ee(r)?d=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],f=r[1]),function(g,u,m){var h=(m||i).length,_=s[h],x,b,T,w,k,C,y,E,S;if(!_){if(S=i.grid==="auto"?0:(i.grid||[1,Mt])[1],!S){for(y=-Mt;y<(y=m[S++].getBoundingClientRect().left)&&S<h;);S<h&&S--}for(_=s[h]=[],x=l?Math.min(S,h)*d-.5:r%S,b=S===Mt?0:l?h*f/S-.5:r/S|0,y=0,E=Mt,C=0;C<h;C++)T=C%S-x,w=b-(C/S|0),_[C]=k=c?Math.abs(c==="y"?w:T):uo(T*T+w*w),k>y&&(y=k),k<E&&(E=k);r==="random"&&Co(_),_.max=y-E,_.min=E,_.v=h=(parseFloat(i.amount)||parseFloat(i.each)*(S>h?h-1:c?c==="y"?h/S:S:Math.max(S,h/S))||0)*(r==="edges"?-1:1),_.b=h<0?n-h:n,_.u=Ne(i.amount||i.each)||0,t=t&&h<0?Do(t):t}return h=(_[g]-_.min)/_.max||0,Te(_.b+(t?t(h):h)*_.v)+_.u}},Hn=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var r=Te(Math.round(parseFloat(t)/e)*e*i);return(r-r%1)/i+(oi(t)?0:Ne(t))}},Eo=function(e,i){var t=We(e),r,n;return!t&&Xt(e)&&(r=t=e.radius||Mt,e.values?(e=Bt(e.values),(n=!oi(e[0]))&&(r*=r)):e=Hn(e.increment)),Ti(i,t?ge(e)?function(s){return n=e(s),Math.abs(n-s)<=r?n:s}:function(s){for(var o=parseFloat(n?s.x:s),l=parseFloat(n?s.y:0),c=Mt,d=0,f=e.length,g,u;f--;)n?(g=e[f].x-o,u=e[f].y-l,g=g*g+u*u):g=Math.abs(e[f]-o),g<c&&(c=g,d=f);return d=!r||c<=r?e[d]:s,n||d===s||oi(s)?d:d+Ne(s)}:Hn(e))},Mo=function(e,i,t,r){return Ti(We(e)?!i:t===!0?!!(t=0):!r,function(){return We(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(i-e+t*.99))/t)*t*r)/r})},Q1=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(r){return i.reduce(function(n,s){return s(n)},r)}},Z1=function(e,i){return function(t){return e(parseFloat(t))+(i||Ne(t))}},el=function(e,i,t){return Io(e,i,0,1,t)},Bo=function(e,i,t){return Ti(t,function(r){return e[~~i(r)]})},tl=function a(e,i,t){var r=i-e;return We(e)?Bo(e,a(0,e.length),i):Ti(t,function(n){return(r+(n-e)%r)%r+e})},il=function a(e,i,t){var r=i-e,n=r*2;return We(e)?Bo(e,a(0,e.length-1),i):Ti(t,function(s){return s=(n+(s-e)%n)%n||0,e+(s>r?n-s:s)})},_0=function(e){for(var i=0,t="",r,n,s,o;~(r=e.indexOf("random(",i));)s=e.indexOf(")",r),o=e.charAt(r+7)==="[",n=e.substr(r+7,s-r-7).match(o?fo:An),t+=e.substr(i,r-i)+Mo(o?n:+n[0],o?0:+n[1],+n[2]||1e-5),i=s+1;return t+e.substr(i,e.length-i)},Io=function(e,i,t,r,n){var s=i-e,o=r-t;return Ti(n,function(l){return t+((l-e)/s*o||0)})},rl=function a(e,i,t,r){var n=isNaN(e+i)?0:function(u){return(1-u)*e+u*i};if(!n){var s=Ee(e),o={},l,c,d,f,g;if(t===!0&&(r=1)&&(t=null),s)e={p:e},i={p:i};else if(We(e)&&!We(i)){for(d=[],f=e.length,g=f-2,c=1;c<f;c++)d.push(a(e[c-1],e[c]));f--,n=function(m){m*=f;var h=Math.min(g,~~m);return d[h](m-h)},t=i}else r||(e=f0(We(e)?[]:{},e));if(!d){for(l in i)ts.call(o,e,l,"get",i[l]);n=function(m){return os(m,o)||(s?e.p:e)}}}return Ti(t,n)},oo=function(e,i,t){var r=e.labels,n=Mt,s,o,l;for(s in r)o=r[s]-i,o<0==!!t&&o&&n>(o=Math.abs(o))&&(l=s,n=o);return l},wt=function(e,i,t){var r=e.vars,n=r[i],s=le,o=e._ctx,l,c,d;if(n)return l=r[i+"Params"],c=r.callbackScope||e,t&&bi.length&&Cr(),o&&(le=o),d=l?n.apply(c,l):n.call(c),le=s,d},F0=function(e){return ki(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Fe),e.progress()<1&&wt(e,"onInterrupt"),e},u0,Po=[],zo=function(e){if(e)if(e=!e.name&&e.default||e,Wn()||e.headless){var i=e.name,t=ge(e),r=i&&!t&&e.init?function(){this._props=[]}:e,n={init:U0,render:os,add:ts,kill:wl,modifier:vl,rawVars:0},s={targetTest:0,get:0,getSetter:Or,aliases:{},register:0};if(p0(),e!==r){if(ut[i])return;bt(r,bt(Lr(e,n),s)),f0(r.prototype,f0(n,Lr(e,s))),ut[r.prop=i]=r,e.targetTest&&(kr.push(r),Jn[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}po(i,r),e.register&&e.register(Ge,r,it)}else Po.push(e)},ie=255,N0={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},En=function(e,i,t){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(t-i)*e*6:e<.5?t:e*3<2?i+(t-i)*(2/3-e)*6:i)*ie+.5|0},Ao=function(e,i,t){var r=e?oi(e)?[e>>16,e>>8&ie,e&ie]:0:N0.black,n,s,o,l,c,d,f,g,u,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),N0[e])r=N0[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+n+n+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ie,e&ie]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(An),!i)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,s=d<=.5?d*(c+1):d+c-d*c,n=d*2-s,r.length>3&&(r[3]*=1),r[0]=En(l+1/3,n,s),r[1]=En(l,n,s),r[2]=En(l-1/3,n,s);else if(~e.indexOf("="))return r=e.match(Gn),t&&r.length<4&&(r[3]=1),r}else r=e.match(An)||N0.transparent;r=r.map(Number)}return i&&!m&&(n=r[0]/ie,s=r[1]/ie,o=r[2]/ie,f=Math.max(n,s,o),g=Math.min(n,s,o),d=(f+g)/2,f===g?l=c=0:(u=f-g,c=d>.5?u/(2-f-g):u/(f+g),l=f===n?(s-o)/u+(s<o?6:0):f===s?(o-n)/u+2:(n-s)/u+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),t&&r.length<4&&(r[3]=1),r},Oo=function(e){var i=[],t=[],r=-1;return e.split(si).forEach(function(n){var s=n.match(Vi)||[];i.push.apply(i,s),t.push(r+=s.length+1)}),i.c=t,i},ao=function(e,i,t){var r="",n=(e+r).match(si),s=i?"hsla(":"rgba(",o=0,l,c,d,f;if(!n)return e;if(n=n.map(function(g){return(g=Ao(g,i,1))&&s+(i?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),t&&(d=Oo(e),l=t.c,l.join(r)!==d.c.join(r)))for(c=e.replace(si,"1").split(Vi),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?n.shift()||s+"0,0,0,0)":(d.length?d:n.length?n:t).shift());if(!c)for(c=e.split(si),f=c.length-1;o<f;o++)r+=c[o]+n[o];return r+c[f]},si=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in N0)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),nl=/hsl[a]?\(/,Zn=function(e){var i=e.join(" "),t;if(si.lastIndex=0,si.test(i))return t=nl.test(i),e[1]=ao(e[1],t),e[0]=ao(e[0],t,Oo(e[1])),!0},W0,ht=function(){var a=Date.now,e=500,i=33,t=a(),r=t,n=1e3/240,s=n,o=[],l,c,d,f,g,u,m=function h(_){var x=a()-r,b=_===!0,T,w,k,C;if((x>e||x<0)&&(t+=x-i),r+=x,k=r-t,T=k-s,(T>0||b)&&(C=++f.frame,g=k-f.time*1e3,f.time=k=k/1e3,s+=T+(T>=n?4:n-T),w=1),b||(l=c(h)),w)for(u=0;u<o.length;u++)o[u](k,g,C,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return g/(1e3/(_||60))},wake:function(){go&&(!On&&Wn()&&(Wt=On=window,jn=Wt.document||{},yt.gsap=Ge,(Wt.gsapVersions||(Wt.gsapVersions=[])).push(Ge.version),mo(Sr||Wt.GreenSockGlobals||!Wt.gsap&&Wt||{}),Po.forEach(zo)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(_){return setTimeout(_,s-f.time*1e3+1|0)},W0=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),W0=0,c=U0},lagSmoothing:function(_,x){e=_||1/0,i=Math.min(x||33,e)},fps:function(_){n=1e3/(_||240),s=f.time*1e3+n},add:function(_,x,b){var T=x?function(w,k,C,y){_(w,k,C,y),f.remove(T)}:_;return f.remove(_),o[b?"unshift":"push"](T),p0(),T},remove:function(_,x){~(x=o.indexOf(_))&&o.splice(x,1)&&u>=x&&u--},_listeners:o},f}(),p0=function(){return!W0&&ht.wake()},J={},sl=/^[\d.\-M][\d.\-,\s]/,ol=/["']/g,al=function(e){for(var i={},t=e.substr(1,e.length-3).split(":"),r=t[0],n=1,s=t.length,o,l,c;n<s;n++)l=t[n],o=n!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),i[r]=isNaN(c)?c.replace(ol,"").trim():+c,r=l.substr(o+1).trim();return i},ll=function(e){var i=e.indexOf("(")+1,t=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<t?e.indexOf(")",t+1):t)},cl=function(e){var i=(e+"").split("("),t=J[i[0]];return t&&i.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[al(i[1])]:ll(e).split(",").map(wo)):J._CE&&sl.test(e)?J._CE("",e):t},Do=function(e){return function(i){return 1-e(1-i)}},Ro=function a(e,i){for(var t=e._first,r;t;)t instanceof Re?a(t,i):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==i&&(t.timeline?a(t.timeline,i):(r=t._ease,t._ease=t._yEase,t._yEase=r,t._yoyo=i)),t=t._next},qi=function(e,i){return e&&(ge(e)?e:J[e]||cl(e))||i},Ui=function(e,i,t,r){t===void 0&&(t=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var n={easeIn:i,easeOut:t,easeInOut:r},s;return tt(e,function(o){J[o]=yt[o]=n,J[s=o.toLowerCase()]=t;for(var l in n)J[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=J[o+"."+l]=n[l]}),n},Fo=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},Mn=function a(e,i,t){var r=i>=1?i:1,n=(t||(e?.3:.45))/(i<1?i:1),s=n/zn*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*R1((d-s)*n)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Fo(o);return n=zn/n,l.config=function(c,d){return a(e,c,d)},l},Bn=function a(e,i){i===void 0&&(i=1.70158);var t=function(s){return s?--s*s*((i+1)*s+i)+1:0},r=e==="out"?t:e==="in"?function(n){return 1-t(1-n)}:Fo(t);return r.config=function(n){return a(e,n)},r};tt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var i=e<5?e+1:e;Ui(a+",Power"+(i-1),e?function(t){return Math.pow(t,i)}:function(t){return t},function(t){return 1-Math.pow(1-t,i)},function(t){return t<.5?Math.pow(t*2,i)/2:1-Math.pow((1-t)*2,i)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Ui("Elastic",Mn("in"),Mn("out"),Mn());(function(a,e){var i=1/e,t=2*i,r=2.5*i,n=function(o){return o<i?a*o*o:o<t?a*Math.pow(o-1.5/e,2)+.75:o<r?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Ui("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Ui("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Ui("Circ",function(a){return-(uo(1-a*a)-1)});Ui("Sine",function(a){return a===1?1:-D1(a*A1)+1});Ui("Back",Bn("in"),Bn("out"),Bn());J.SteppedEase=J.steps=yt.SteppedEase={config:function(e,i){e===void 0&&(e=1);var t=1/e,r=e+(i?0:1),n=i?1:0,s=1-re;return function(o){return((r*X0(0,s,o)|0)+n)*t}}};h0.ease=J["quad.out"];tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return $n+=a+","+a+"Params,"});var es=function(e,i){this.id=O1++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Qn,this.set=i?i.getSetter:Or},G0=function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,m0(this,+i.duration,1,1),this.data=i.data,le&&(this._ctx=le,le.data.push(this)),W0||ht.wake()}var e=a.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,m0(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(p0(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ar(this,t),!n._dp||n.parent||xo(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Gt(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),vo(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+no(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+no(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,r):this._repeat?g0(this._tTime,n)+1:1},e.timeScale=function(t,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Er(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-re?0:this._rts,this.totalTime(X0(-Math.abs(this._delay),this._tDur,n),r!==!1),zr(this),U1(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(p0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gt(r,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(ft(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Er(r.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=q1);var r=Fe;return Fe=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Fe=r,this},e.globalTime=function(t){for(var r=this,n=arguments.length?t:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,so(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,so(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(Et(this,t),ft(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,ft(r)),this._dur||(this._zTime=-re),this},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-re:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},e.isActive=function(){var t=this.parent||this._dp,r=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=r&&n<this.endTime(!0)-re)},e.eventCallback=function(t,r,n){var s=this.vars;return arguments.length>1?(r?(s[t]=r,n&&(s[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=r)):delete s[t],this):s[t]},e.then=function(t){var r=this;return new Promise(function(n){var s=ge(t)?t:yo,o=function(){var c=r.then;r.then=null,ge(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=c),n(s),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){F0(this)},a}();bt(G0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Re=function(a){co(e,a);function e(t,r){var n;return t===void 0&&(t={}),n=a.call(this,t)||this,n.labels={},n.smoothChildTiming=!!t.smoothChildTiming,n.autoRemoveChildren=!!t.autoRemoveChildren,n._sort=ft(t.sortChildren),de&&Gt(t.parent||de,ni(n),r),t.reversed&&n.reverse(),t.paused&&n.paused(!0),t.scrollTrigger&&ko(ni(n),t.scrollTrigger),n}var i=e.prototype;return i.to=function(r,n,s){return H0(0,arguments,this),this},i.from=function(r,n,s){return H0(1,arguments,this),this},i.fromTo=function(r,n,s,o){return H0(2,arguments,this),this},i.set=function(r,n,s){return n.duration=0,n.parent=this,q0(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new be(r,n,Et(this,s),1),this},i.call=function(r,n,s){return Gt(this,be.delayedCall(0,r,n),s)},i.staggerTo=function(r,n,s,o,l,c,d){return s.duration=n,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=d,s.parent=this,new be(r,s,Et(this,l)),this},i.staggerFrom=function(r,n,s,o,l,c,d){return s.runBackwards=1,q0(s).immediateRender=ft(s.immediateRender),this.staggerTo(r,n,s,o,l,c,d)},i.staggerFromTo=function(r,n,s,o,l,c,d,f){return o.startAt=s,q0(o).immediateRender=ft(o.immediateRender),this.staggerTo(r,n,o,l,c,d,f)},i.render=function(r,n,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:Te(r),f=this._zTime<0!=r<0&&(this._initted||!c),g,u,m,h,_,x,b,T,w,k,C,y;if(this!==de&&d>l&&r>=0&&(d=l),d!==this._tTime||s||f){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),g=d,w=this._start,T=this._ts,x=!T,f&&(c||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,n,s);if(g=Te(d%_),d===l?(h=this._repeat,g=c):(k=Te(d/_),h=~~k,h&&h===k&&(g=c,h--),g>c&&(g=c)),k=g0(this._tTime,_),!o&&this._tTime&&k!==h&&this._tTime-k*_-this._dur<=0&&(k=h),C&&h&1&&(g=c-g,y=1),h!==k&&!this._lock){var E=C&&k&1,S=E===(C&&h&1);if(h<k&&(E=!E),o=E?0:d%c?c:d,this._lock=1,this.render(o||(y?0:Te(h*_)),n,!c)._lock=0,this._tTime=d,!n&&this.parent&&wt(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),o&&o!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=E?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Ro(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=j1(this,Te(o),Te(g)),b&&(d-=g-(g=b._start))),this._tTime=d,this._time=g,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&g&&!n&&!h&&(wt(this,"onStart"),this._tTime!==d))return this;if(g>=o&&r>=0)for(u=this._first;u;){if(m=u._next,(u._act||g>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,n,s);if(u.render(u._ts>0?(g-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(g-u._start)*u._ts,n,s),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=-re);break}}u=m}else{u=this._last;for(var L=r<0?r:g;u;){if(m=u._prev,(u._act||L<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,n,s);if(u.render(u._ts>0?(L-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(L-u._start)*u._ts,n,s||Fe&&(u._initted||u._startAt)),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=L?-re:re);break}}u=m}}if(b&&!n&&(this.pause(),b.render(g>=o?0:-re)._zTime=g>=o?1:-1,this._ts))return this._start=w,zr(this),this.render(r,n,s);this._onUpdate&&!n&&wt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(w===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&ki(this,1),!n&&!(r<0&&!o)&&(d||o||!l)&&(wt(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var s=this;if(oi(n)||(n=Et(this,n,r)),!(r instanceof G0)){if(We(r))return r.forEach(function(o){return s.add(o,n)}),this;if(Ee(r))return this.addLabel(r,n);if(ge(r))r=be.delayedCall(0,r);else return this}return this!==r?Gt(this,r,n):this},i.getChildren=function(r,n,s,o){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=-Mt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof be?n&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,n,s)))),c=c._next;return l},i.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},i.remove=function(r){return Ee(r)?this.removeLabel(r):ge(r)?this.killTweensOf(r):(r.parent===this&&Pr(this,r),r===this._recent&&(this._recent=this._last),Ni(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(ht.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=Et(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,s){var o=be.delayedCall(0,n||U0,s);return o.data="isPause",this._hasPause=1,Gt(this,o,Et(this,r))},i.removePause=function(r){var n=this._first;for(r=Et(this,r);n;)n._start===r&&n.data==="isPause"&&ki(n),n=n._next},i.killTweensOf=function(r,n,s){for(var o=this.getTweensOf(r,s),l=o.length;l--;)yi!==o[l]&&o[l].kill(r,n);return this},i.getTweensOf=function(r,n){for(var s=[],o=Bt(r),l=this._first,c=oi(n),d;l;)l instanceof be?H1(l._targets,o)&&(c?(!yi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&s.push(l):(d=l.getTweensOf(o,n)).length&&s.push.apply(s,d),l=l._next;return s},i.tweenTo=function(r,n){n=n||{};var s=this,o=Et(s,r),l=n,c=l.startAt,d=l.onStart,f=l.onStartParams,g=l.immediateRender,u,m=be.to(s,bt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||re,onStart:function(){if(s.pause(),!u){var _=n.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());m._dur!==_&&m0(m,_,0,1).render(m._time,!0,!0),u=1}d&&d.apply(m,f||[])}},n));return g?m.render(0):m},i.tweenFromTo=function(r,n,s){return this.tweenTo(n,bt({startAt:{time:Et(this,r)}},s))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),oo(this,Et(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),oo(this,Et(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},i.shiftChildren=function(r,n,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(n)for(c in l)l[c]>=s&&(l[c]+=r);return Ni(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return a.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ni(this)},i.totalDuration=function(r){var n=0,s=this,o=s._last,l=Mt,c,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Gt(s,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(n-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=d/s._ts,s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),l=0),o._end>n&&o._ts&&(n=o._end),o=c;m0(s,s===de&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(de._ts&&(vo(de,Er(r,de)),_o=ht.frame),ht.frame>=io){io+=gt.autoSleep||120;var n=de._first;if((!n||!n._ts)&&gt.autoSleep&&ht._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ht.sleep()}}},e}(G0);bt(Re.prototype,{_lock:0,_hasPause:0,_forcing:0});var dl=function(e,i,t,r,n,s,o){var l=new it(this._pt,e,i,0,1,ss,null,n),c=0,d=0,f,g,u,m,h,_,x,b;for(l.b=t,l.e=r,t+="",r+="",(x=~r.indexOf("random("))&&(r=_0(r)),s&&(b=[t,r],s(b,e,i),t=b[0],r=b[1]),g=t.match(Cn)||[];f=Cn.exec(r);)m=f[0],h=r.substring(c,f.index),u?u=(u+1)%5:h.substr(-5)==="rgba("&&(u=1),m!==g[d++]&&(_=parseFloat(g[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:_,c:m.charAt(1)==="="?Yi(_,m)-_:parseFloat(m)-_,m:u&&u<4?Math.round:0},c=Cn.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Xn.test(r)||x)&&(l.e=0),this._pt=l,l},ts=function(e,i,t,r,n,s,o,l,c,d){ge(r)&&(r=r(n||0,e,s));var f=e[i],g=t!=="get"?t:ge(f)?c?e[i.indexOf("set")||!ge(e["get"+i.substr(3)])?i:"get"+i.substr(3)](c):e[i]():f,u=ge(f)?c?ml:Ho:ns,m;if(Ee(r)&&(~r.indexOf("random(")&&(r=_0(r)),r.charAt(1)==="="&&(m=Yi(g,r)+(Ne(g)||0),(m||m===0)&&(r=m))),!d||g!==r||Vn)return!isNaN(g*r)&&r!==""?(m=new it(this._pt,e,i,+g||0,r-(g||0),typeof f=="boolean"?_l:Vo,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(i in e)&&Ir(i,r),dl.call(this,e,i,g,r,u,l||gt.stringFilter,c))},ul=function(e,i,t,r,n){if(ge(e)&&(e=V0(e,n,i,t,r)),!Xt(e)||e.style&&e.nodeType||We(e)||ho(e))return Ee(e)?V0(e,n,i,t,r):e;var s={},o;for(o in e)s[o]=V0(e[o],n,i,t,r);return s},is=function(e,i,t,r,n,s){var o,l,c,d;if(ut[e]&&(o=new ut[e]).init(n,o.rawVars?i[e]:ul(i[e],r,n,s,t),t,r,s)!==!1&&(t._pt=l=new it(t._pt,n,e,0,1,o.render,o,0,o.priority),t!==u0))for(c=t._ptLookup[t._targets.indexOf(n)],d=o._props.length;d--;)c[o._props[d]]=l;return o},yi,Vn,rs=function a(e,i,t){var r=e.vars,n=r.ease,s=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,f=r.yoyoEase,g=r.keyframes,u=r.autoRevert,m=e._dur,h=e._startAt,_=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:_,T=e._overwrite==="auto"&&!Un,w=e.timeline,k,C,y,E,S,L,O,M,G,U,$,X,A;if(w&&(!g||!n)&&(n="none"),e._ease=qi(n,h0.ease),e._yEase=f?Do(qi(f===!0?n:f,h0.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(M=_[0]?xi(_[0]).harness:0,X=M&&r[M.prop],k=Lr(r,Jn),h&&(h._zTime<0&&h.progress(1),i<0&&d&&o&&!u?h.render(-1,!0):h.revert(d&&m?xr:N1),h._lazy=0),s){if(ki(e._startAt=be.set(_,bt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!h&&ft(l),startAt:null,delay:0,onUpdate:c&&function(){return wt(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Fe||!o&&!u)&&e._startAt.revert(xr),o&&m&&i<=0&&t<=0){i&&(e._zTime=i);return}}else if(d&&m&&!h){if(i&&(o=!1),y=bt({overwrite:!1,data:"isFromStart",lazy:o&&!h&&ft(l),immediateRender:o,stagger:0,parent:x},k),X&&(y[M.prop]=X),ki(e._startAt=be.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Fe?e._startAt.revert(xr):e._startAt.render(-1,!0)),e._zTime=i,!o)a(e._startAt,re,re);else if(!i)return}for(e._pt=e._ptCache=0,l=m&&ft(l)||l&&!m,C=0;C<_.length;C++){if(S=_[C],O=S._gsap||Kn(_)[C]._gsap,e._ptLookup[C]=U={},Dn[O.id]&&bi.length&&Cr(),$=b===_?C:b.indexOf(S),M&&(G=new M).init(S,X||k,e,$,b)!==!1&&(e._pt=E=new it(e._pt,S,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(Q){U[Q]=E}),G.priority&&(L=1)),!M||X)for(y in k)ut[y]&&(G=is(y,k,e,$,S,b))?G.priority&&(L=1):U[y]=E=ts.call(e,S,y,"get",k[y],$,b,0,r.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),T&&e._pt&&(yi=e,de.killTweensOf(S,U,e.globalTime(i)),A=!e.parent,yi=0),e._pt&&l&&(Dn[O.id]=1)}L&&as(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!A,g&&i<=0&&w.render(Mt,!0,!0)},hl=function(e,i,t,r,n,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[i],d,f,g,u;if(!c)for(c=e._ptCache[i]=[],g=e._ptLookup,u=e._targets.length;u--;){if(d=g[u][i],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==i&&d.fp!==i;)d=d._next;if(!d)return Vn=1,e.vars[i]="+=0",rs(e,o),Vn=0,l?Y0(i+" not eligible for reset"):1;c.push(d)}for(u=c.length;u--;)f=c[u],d=f._pt||f,d.s=(r||r===0)&&!n?r:d.s+(r||0)+s*d.c,d.c=t-d.s,f.e&&(f.e=me(t)+Ne(f.e)),f.b&&(f.b=d.s+Ne(f.b))},fl=function(e,i){var t=e[0]?xi(e[0]).harness:0,r=t&&t.aliases,n,s,o,l;if(!r)return i;n=f0({},i);for(s in r)if(s in n)for(l=r[s].split(","),o=l.length;o--;)n[l[o]]=n[s];return n},gl=function(e,i,t,r){var n=i.ease||r||"power1.inOut",s,o;if(We(i))o=t[e]||(t[e]=[]),i.forEach(function(l,c){return o.push({t:c/(i.length-1)*100,v:l,e:n})});else for(s in i)o=t[s]||(t[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:i[s],e:n})},V0=function(e,i,t,r,n){return ge(e)?e.call(i,t,r,n):Ee(e)&&~e.indexOf("random(")?_0(e):e},No=$n+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qo={};tt(No+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return qo[a]=1});var be=function(a){co(e,a);function e(t,r,n,s){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=a.call(this,s?r:q0(r))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,g=l.stagger,u=l.overwrite,m=l.keyframes,h=l.defaults,_=l.scrollTrigger,x=l.yoyoEase,b=r.parent||de,T=(We(t)||ho(t)?oi(t[0]):"length"in r)?[t]:Bt(t),w,k,C,y,E,S,L,O;if(o._targets=T.length?Kn(T):Y0("GSAP target "+t+" not found. https://gsap.com",!gt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||g||br(c)||br(d)){if(r=o.vars,w=o.timeline=new Re({data:"nested",defaults:h||{},targets:b&&b.data==="nested"?b.vars.targets:T}),w.kill(),w.parent=w._dp=ni(o),w._start=0,g||br(c)||br(d)){if(y=T.length,L=g&&Lo(g),Xt(g))for(E in g)~No.indexOf(E)&&(O||(O={}),O[E]=g[E]);for(k=0;k<y;k++)C=Lr(r,qo),C.stagger=0,x&&(C.yoyoEase=x),O&&f0(C,O),S=T[k],C.duration=+V0(c,ni(o),k,S,T),C.delay=(+V0(d,ni(o),k,S,T)||0)-o._delay,!g&&y===1&&C.delay&&(o._delay=d=C.delay,o._start+=d,C.delay=0),w.to(S,C,L?L(k,S,T):0),w._ease=J.none;w.duration()?c=d=0:o.timeline=0}else if(m){q0(bt(w.vars.defaults,{ease:"none"})),w._ease=qi(m.ease||r.ease||"none");var M=0,G,U,$;if(We(m))m.forEach(function(X){return w.to(T,X,">")}),w.duration();else{C={};for(E in m)E==="ease"||E==="easeEach"||gl(E,m[E],C,m.easeEach);for(E in C)for(G=C[E].sort(function(X,A){return X.t-A.t}),M=0,k=0;k<G.length;k++)U=G[k],$={ease:U.e,duration:(U.t-(k?G[k-1].t:0))/100*c},$[E]=U.v,w.to(T,$,M),M+=$.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return u===!0&&!Un&&(yi=ni(o),de.killTweensOf(T),yi=0),Gt(b,ni(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!m&&o._start===Te(b._time)&&ft(f)&&W1(ni(o))&&b.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-d)||0)),_&&ko(ni(o),_),o}var i=e.prototype;return i.render=function(r,n,s){var o=this._time,l=this._tDur,c=this._dur,d=r<0,f=r>l-re&&!d?l:r<re?0:r,g,u,m,h,_,x,b,T,w;if(!c)X1(this,r,n,s);else if(f!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(g=f,T=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+r,n,s);if(g=Te(f%h),f===l?(m=this._repeat,g=c):(_=Te(f/h),m=~~_,m&&m===_?(g=c,m--):g>c&&(g=c)),x=this._yoyo&&m&1,x&&(w=this._yEase,g=c-g),_=g0(this._tTime,h),g===o&&!s&&this._initted&&m===_)return this._tTime=f,this;m!==_&&(T&&this._yEase&&Ro(T,x),this.vars.repeatRefresh&&!x&&!this._lock&&g!==h&&this._initted&&(this._lock=s=1,this.render(Te(h*m),!0).invalidate()._lock=0))}if(!this._initted){if(To(this,d?r:g,s,n,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,n,s)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(w||this._ease)(g/c),this._from&&(this.ratio=b=1-b),g&&!o&&!n&&!m&&(wt(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;T&&T.render(r<0?r:T._dur*T._ease(g/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(d&&Rn(this,r,n,s),wt(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!n&&this.parent&&wt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Rn(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ki(this,1),!n&&!(d&&!o)&&(f||o||x)&&(wt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,s,o,l){W0||ht.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||rs(this,c),d=this._ease(c/this._dur),hl(this,r,n,s,o,d,c,l)?this.resetTo(r,n,s,o,1):(Ar(this,0),this.parent||bo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?F0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,yi&&yi.vars.overwrite!==!0)._first||F0(this),this.parent&&s!==this.timeline.totalDuration()&&m0(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=r?Bt(r):o,c=this._ptLookup,d=this._pt,f,g,u,m,h,_,x;if((!n||n==="all")&&Y1(o,l))return n==="all"&&(this._pt=0),F0(this);for(f=this._op=this._op||[],n!=="all"&&(Ee(n)&&(h={},tt(n,function(b){return h[b]=1}),n=h),n=fl(o,n)),x=o.length;x--;)if(~l.indexOf(o[x])){g=c[x],n==="all"?(f[x]=n,m=g,u={}):(u=f[x]=f[x]||{},m=n);for(h in m)_=g&&g[h],_&&((!("kill"in _.d)||_.d.kill(h)===!0)&&Pr(this,_,"_pt"),delete g[h]),u!=="all"&&(u[h]=1)}return this._initted&&!this._pt&&d&&F0(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return H0(1,arguments)},e.delayedCall=function(r,n,s,o){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,n,s){return H0(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,s){return de.killTweensOf(r,n,s)},e}(G0);bt(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tt("staggerTo,staggerFrom,staggerFromTo",function(a){be[a]=function(){var e=new Re,i=Nn.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,i)}});var ns=function(e,i,t){return e[i]=t},Ho=function(e,i,t){return e[i](t)},ml=function(e,i,t,r){return e[i](r.fp,t)},pl=function(e,i,t){return e.setAttribute(i,t)},Or=function(e,i){return ge(e[i])?Ho:Br(e[i])&&e.setAttribute?pl:ns},Vo=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},_l=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},ss=function(e,i){var t=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+r,t=t._next;r+=i.c}i.set(i.t,i.p,r,i)},os=function(e,i){for(var t=i._pt;t;)t.r(e,t.d),t=t._next},vl=function(e,i,t,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(e,i,t),n=s},wl=function(e){for(var i=this._pt,t,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?Pr(this,i,"_pt"):i.dep||(t=1),i=r;return!t},yl=function(e,i,t,r){r.mSet(e,i,r.m.call(r.tween,t,r.mt),r)},as=function(e){for(var i=e._pt,t,r,n,s;i;){for(t=i._next,r=n;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:s)?i._prev._next=i:n=i,(i._next=r)?r._prev=i:s=i,i=t}e._pt=n},it=function(){function a(i,t,r,n,s,o,l,c,d){this.t=t,this.s=n,this.c=s,this.p=r,this.r=o||Vo,this.d=l||this,this.set=c||ns,this.pr=d||0,this._next=i,i&&(i._prev=this)}var e=a.prototype;return e.modifier=function(t,r,n){this.mSet=this.mSet||this.set,this.set=yl,this.m=t,this.mt=n,this.tween=r},a}();tt($n+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Jn[a]=1});yt.TweenMax=yt.TweenLite=be;yt.TimelineLite=yt.TimelineMax=Re;de=new Re({sortChildren:!1,defaults:h0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=Zn;var Hi=[],Tr={},bl=[],lo=0,xl=0,In=function(e){return(Tr[e]||bl).map(function(i){return i()})},Yn=function(){var e=Date.now(),i=[];e-lo>2&&(In("matchMediaInit"),Hi.forEach(function(t){var r=t.queries,n=t.conditions,s,o,l,c;for(o in r)s=Wt.matchMedia(r[o]).matches,s&&(l=1),s!==n[o]&&(n[o]=s,c=1);c&&(t.revert(),l&&i.push(t))}),In("matchMediaRevert"),i.forEach(function(t){return t.onMatch(t,function(r){return t.add(null,r)})}),lo=e,In("matchMedia"))},Yo=function(){function a(i,t){this.selector=t&&qn(t),this.data=[],this._r=[],this.isReverted=!1,this.id=xl++,i&&this.add(i)}var e=a.prototype;return e.add=function(t,r,n){ge(t)&&(n=r,r=t,t=ge);var s=this,o=function(){var c=le,d=s.selector,f;return c&&c!==s&&c.data.push(s),n&&(s.selector=qn(n)),le=s,f=r.apply(s,arguments),ge(f)&&s._r.push(f),le=c,s.selector=d,s.isReverted=!1,f};return s.last=o,t===ge?o(s,function(l){return s.add(null,l)}):t?s[t]=o:o},e.ignore=function(t){var r=le;le=null,t(this),le=r},e.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof a?t.push.apply(t,r.getTweens()):r instanceof be&&!(r.parent&&r.parent.data==="nested")&&t.push(r)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,r){var n=this;if(t?function(){for(var o=n.getTweens(),l=n.data.length,c;l--;)c=n.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(t)}),l=n.data.length;l--;)c=n.data[l],c instanceof Re?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(t);n._r.forEach(function(d){return d(t,n)}),n.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=Hi.length;s--;)Hi[s].id===this.id&&Hi.splice(s,1)},e.revert=function(t){this.kill(t||{})},a}(),kl=function(){function a(i){this.contexts=[],this.scope=i,le&&le.data.push(this)}var e=a.prototype;return e.add=function(t,r,n){Xt(t)||(t={matches:t});var s=new Yo(0,n||this.scope),o=s.conditions={},l,c,d;le&&!s.selector&&(s.selector=le.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=t;for(c in t)c==="all"?d=1:(l=Wt.matchMedia(t[c]),l&&(Hi.indexOf(s)<0&&Hi.push(s),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Yn):l.addEventListener("change",Yn)));return d&&r(s,function(f){return s.add(null,f)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(r){return r.kill(t,!0)})},a}(),Mr={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];i.forEach(function(r){return zo(r)})},timeline:function(e){return new Re(e)},getTweensOf:function(e,i){return de.getTweensOf(e,i)},getProperty:function(e,i,t,r){Ee(e)&&(e=Bt(e)[0]);var n=xi(e||{}).get,s=t?yo:wo;return t==="native"&&(t=""),e&&(i?s((ut[i]&&ut[i].get||n)(e,i,t,r)):function(o,l,c){return s((ut[o]&&ut[o].get||n)(e,o,l,c))})},quickSetter:function(e,i,t){if(e=Bt(e),e.length>1){var r=e.map(function(d){return Ge.quickSetter(d,i,t)}),n=r.length;return function(d){for(var f=n;f--;)r[f](d)}}e=e[0]||{};var s=ut[i],o=xi(e),l=o.harness&&(o.harness.aliases||{})[i]||i,c=s?function(d){var f=new s;u0._pt=0,f.init(e,t?d+t:d,u0,0,[e]),f.render(1,f),u0._pt&&os(1,u0)}:o.set(e,l);return s?c:function(d){return c(e,l,t?d+t:d,o,1)}},quickTo:function(e,i,t){var r,n=Ge.to(e,bt((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),t||{})),s=function(l,c,d){return n.resetTo(i,l,c,d)};return s.tween=n,s},isTweening:function(e){return de.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qi(e.ease,h0.ease)),ro(h0,e||{})},config:function(e){return ro(gt,e||{})},registerEffect:function(e){var i=e.name,t=e.effect,r=e.plugins,n=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ut[o]&&!yt[o]&&Y0(i+" effect requires "+o+" plugin.")}),Ln[i]=function(o,l,c){return t(Bt(o),bt(l||{},n),c)},s&&(Re.prototype[i]=function(o,l,c){return this.add(Ln[i](o,Xt(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,i){J[e]=qi(i)},parseEase:function(e,i){return arguments.length?qi(e,i):J},getById:function(e){return de.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var t=new Re(e),r,n;for(t.smoothChildTiming=ft(e.smoothChildTiming),de.remove(t),t._dp=0,t._time=t._tTime=de._time,r=de._first;r;)n=r._next,(i||!(!r._dur&&r instanceof be&&r.vars.onComplete===r._targets[0]))&&Gt(t,r,r._start-r._delay),r=n;return Gt(de,t,0),t},context:function(e,i){return e?new Yo(e,i):le},matchMedia:function(e){return new kl(e)},matchMediaRefresh:function(){return Hi.forEach(function(e){var i=e.conditions,t,r;for(r in i)i[r]&&(i[r]=!1,t=1);t&&e.revert()})||Yn()},addEventListener:function(e,i){var t=Tr[e]||(Tr[e]=[]);~t.indexOf(i)||t.push(i)},removeEventListener:function(e,i){var t=Tr[e],r=t&&t.indexOf(i);r>=0&&t.splice(r,1)},utils:{wrap:tl,wrapYoyo:il,distribute:Lo,random:Mo,snap:Eo,normalize:el,getUnit:Ne,clamp:$1,splitColor:Ao,toArray:Bt,selector:qn,mapRange:Io,pipe:Q1,unitize:Z1,interpolate:rl,shuffle:Co},install:mo,effects:Ln,ticker:ht,updateRoot:Re.updateRoot,plugins:ut,globalTimeline:de,core:{PropTween:it,globals:po,Tween:be,Timeline:Re,Animation:G0,getCache:xi,_removeLinkedListItem:Pr,reverting:function(){return Fe},context:function(e){return e&&le&&(le.data.push(e),e._ctx=le),le},suppressOverwrites:function(e){return Un=e}}};tt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Mr[a]=be[a]});ht.add(Re.updateRoot);u0=Mr.to({},{duration:0});var Tl=function(e,i){for(var t=e._pt;t&&t.p!==i&&t.op!==i&&t.fp!==i;)t=t._next;return t},Sl=function(e,i){var t=e._targets,r,n,s;for(r in i)for(n=t.length;n--;)s=e._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=Tl(s,r)),s&&s.modifier&&s.modifier(i[r],e,t[n],r))},Pn=function(e,i){return{name:e,rawVars:1,init:function(r,n,s){s._onInit=function(o){var l,c;if(Ee(n)&&(l={},tt(n,function(d){return l[d]=1}),n=l),i){l={};for(c in n)l[c]=i(n[c]);n=l}Sl(o,n)}}}},Ge=Mr.registerPlugin({name:"attr",init:function(e,i,t,r,n){var s,o,l;this.tween=t;for(s in i)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",i[s],r,n,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,i){for(var t=i._pt;t;)Fe?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",init:function(e,i){for(var t=i.length;t--;)this.add(e,t,e[t]||0,i[t],0,0,0,0,0,1)}},Pn("roundProps",Hn),Pn("modifiers"),Pn("snap",Eo))||Mr;be.version=Re.version=Ge.version="3.12.7";go=1;Wn()&&p0();var Cl=J.Power0,Ll=J.Power1,El=J.Power2,Ml=J.Power3,Bl=J.Power4,Il=J.Linear,Pl=J.Quad,zl=J.Cubic,Al=J.Quart,Ol=J.Quint,Dl=J.Strong,Rl=J.Elastic,Fl=J.Back,Nl=J.SteppedEase,ql=J.Bounce,Hl=J.Sine,Vl=J.Expo,Yl=J.Circ;var Uo,Si,w0,fs,ji,Ul,Wo,gs,Wl=function(){return typeof window<"u"},li={},Xi=180/Math.PI,y0=Math.PI/180,v0=Math.atan2,Go=1e8,ms=/([A-Z])/g,Gl=/(left|right|width|margin|padding|x)/i,Xl=/[\s,\(]\S/,jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cs=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},jl=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Jl=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},$l=function(e,i){var t=i.s+i.c*e;i.set(i.t,i.p,~~(t+(t<0?-.5:.5))+i.u,i)},ea=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},ta=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},Kl=function(e,i,t){return e.style[i]=t},Ql=function(e,i,t){return e.style.setProperty(i,t)},Zl=function(e,i,t){return e._gsap[i]=t},ec=function(e,i,t){return e._gsap.scaleX=e._gsap.scaleY=t},tc=function(e,i,t,r,n){var s=e._gsap;s.scaleX=s.scaleY=t,s.renderTransform(n,s)},ic=function(e,i,t,r,n){var s=e._gsap;s[i]=t,s.renderTransform(n,s)},ue="transform",mt=ue+"Origin",rc=function a(e,i){var t=this,r=this.target,n=r.style,s=r._gsap;if(e in li&&n){if(this.tfm=this.tfm||{},e!=="transform")e=jt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return t.tfm[o]=ai(r,o)}):this.tfm[e]=s.x?s[e]:ai(r,e),e===mt&&(this.tfm.zOrigin=s.zOrigin);else return jt.transform.split(",").forEach(function(o){return a.call(t,o,i)});if(this.props.indexOf(ue)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mt,i,"")),e=ue}(n||i)&&this.props.push(e,i,n[e])},ia=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nc=function(){var e=this.props,i=this.target,t=i.style,r=i._gsap,n,s;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?i[e[n]](e[n+2]):i[e[n]]=e[n+2]:e[n+2]?t[e[n]]=e[n+2]:t.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(ms,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),n=gs(),(!n||!n.isStart)&&!t[ue]&&(ia(t),r.zOrigin&&t[mt]&&(t[mt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ra=function(e,i){var t={target:e,props:[],revert:nc,save:rc};return e._gsap||Ge.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return t.save(r)}),t},na,ds=function(e,i){var t=Si.createElementNS?Si.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Si.createElement(e);return t&&t.style?t:Si.createElement(e)},Jt=function a(e,i,t){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(ms,"-$1").toLowerCase())||r.getPropertyValue(i)||!t&&a(e,b0(i)||i,1)||""},Xo="O,Moz,ms,Ms,Webkit".split(","),b0=function(e,i,t){var r=i||ji,n=r.style,s=5;if(e in n&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Xo[s]+e in n););return s<0?null:(s===3?"ms":s>=0?Xo[s]:"")+e},us=function(){Wl()&&window.document&&(Uo=window,Si=Uo.document,w0=Si.documentElement,ji=ds("div")||{style:{}},Ul=ds("div"),ue=b0(ue),mt=ue+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",na=!!b0("perspective"),gs=Ge.core.reverting,fs=1)},jo=function(e){var i=e.ownerSVGElement,t=ds("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",t.appendChild(r),w0.appendChild(t);try{n=r.getBBox()}catch{}return t.removeChild(r),w0.removeChild(t),n},Jo=function(e,i){for(var t=i.length;t--;)if(e.hasAttribute(i[t]))return e.getAttribute(i[t])},sa=function(e){var i,t;try{i=e.getBBox()}catch{i=jo(e),t=1}return i&&(i.width||i.height)||t||(i=jo(e)),i&&!i.width&&!i.x&&!i.y?{x:+Jo(e,["x","cx","x1"])||0,y:+Jo(e,["y","cy","y1"])||0,width:0,height:0}:i},oa=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sa(e))},Ji=function(e,i){if(i){var t=e.style,r;i in li&&i!==mt&&(i=ue),t.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),t.removeProperty(r==="--"?i:i.replace(ms,"-$1").toLowerCase())):t.removeAttribute(i)}},Ci=function(e,i,t,r,n,s){var o=new it(e._pt,i,t,0,1,s?ta:ea);return e._pt=o,o.b=r,o.e=n,e._props.push(t),o},$o={deg:1,rad:1,turn:1},sc={grid:1,flex:1},Li=function a(e,i,t,r){var n=parseFloat(t)||0,s=(t+"").trim().substr((n+"").length)||"px",o=ji.style,l=Gl.test(i),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,g=r==="px",u=r==="%",m,h,_,x;if(r===s||!n||$o[r]||$o[s])return n;if(s!=="px"&&!g&&(n=a(e,i,t,"px")),x=e.getCTM&&oa(e),(u||s==="%")&&(li[i]||~i.indexOf("adius")))return m=x?e.getBBox()[l?"width":"height"]:e[d],me(u?n/m*f:n/100*m);if(o[l?"width":"height"]=f+(g?s:r),h=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Si||!h.appendChild)&&(h=Si.body),_=h._gsap,_&&u&&_.width&&l&&_.time===ht.time&&!_.uncache)return me(n/_.width*f);if(u&&(i==="height"||i==="width")){var b=e.style[i];e.style[i]=f+r,m=e[d],b?e.style[i]=b:Ji(e,i)}else(u||s==="%")&&!sc[Jt(h,"display")]&&(o.position=Jt(e,"position")),h===e&&(o.position="static"),h.appendChild(ji),m=ji[d],h.removeChild(ji),o.position="absolute";return l&&u&&(_=xi(h),_.time=ht.time,_.width=h[d]),me(g?m*n/f:m&&n?f/m*n:0)},ai=function(e,i,t,r){var n;return fs||us(),i in jt&&i!=="transform"&&(i=jt[i],~i.indexOf(",")&&(i=i.split(",")[0])),li[i]&&i!=="transform"?(n=$0(e,r),n=i!=="transformOrigin"?n[i]:n.svg?n.origin:Rr(Jt(e,mt))+" "+n.zOrigin+"px"):(n=e.style[i],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Dr[i]&&Dr[i](e,i,t)||Jt(e,i)||Qn(e,i)||(i==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Li(e,i,n,t)+t:n},oc=function(e,i,t,r){if(!t||t==="none"){var n=b0(i,e,1),s=n&&Jt(e,n,1);s&&s!==t?(i=n,t=s):i==="borderColor"&&(t=Jt(e,"borderTopColor"))}var o=new it(this._pt,e.style,i,0,1,ss),l=0,c=0,d,f,g,u,m,h,_,x,b,T,w,k;if(o.b=t,o.e=r,t+="",r+="",r==="auto"&&(h=e.style[i],e.style[i]=r,r=Jt(e,i)||r,h?e.style[i]=h:Ji(e,i)),d=[t,r],Zn(d),t=d[0],r=d[1],g=t.match(Vi)||[],k=r.match(Vi)||[],k.length){for(;f=Vi.exec(r);)_=f[0],b=r.substring(l,f.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),_!==(h=g[c++]||"")&&(u=parseFloat(h)||0,w=h.substr((u+"").length),_.charAt(1)==="="&&(_=Yi(u,_)+w),x=parseFloat(_),T=_.substr((x+"").length),l=Vi.lastIndex-T.length,T||(T=T||gt.units[i]||w,l===r.length&&(r+=T,o.e+=T)),w!==T&&(u=Li(e,i,h,T)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:u,c:x-u,m:m&&m<4||i==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=i==="display"&&r==="none"?ta:ea;return Xn.test(r)&&(o.e=0),this._pt=o,o},Ko={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ac=function(e){var i=e.split(" "),t=i[0],r=i[1]||"50%";return(t==="top"||t==="bottom"||r==="left"||r==="right")&&(e=t,t=r,r=e),i[0]=Ko[t]||t,i[1]=Ko[r]||r,i.join(" ")},lc=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var t=i.t,r=t.style,n=i.u,s=t._gsap,o,l,c;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),c=n.length;--c>-1;)o=n[c],li[o]&&(l=1,o=o==="transformOrigin"?mt:ue),Ji(t,o);l&&(Ji(t,ue),s&&(s.svg&&t.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",$0(t,1),s.uncache=1,ia(r)))}},Dr={clearProps:function(e,i,t,r,n){if(n.data!=="isFromStart"){var s=e._pt=new it(e._pt,i,t,0,0,lc);return s.u=r,s.pr=-10,s.tween=n,e._props.push(t),1}}},J0=[1,0,0,1,0,0],aa={},la=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qo=function(e){var i=Jt(e,ue);return la(i)?J0:i.substr(7).match(Gn).map(me)},ps=function(e,i){var t=e._gsap||xi(e),r=e.style,n=Qo(e),s,o,l,c;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?J0:n):(n===J0&&!e.offsetParent&&e!==w0&&!t.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,w0.appendChild(e)),n=Qo(e),l?r.display=l:Ji(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):w0.removeChild(e))),i&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},hs=function(e,i,t,r,n,s){var o=e._gsap,l=n||ps(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,g=o.yOffset||0,u=l[0],m=l[1],h=l[2],_=l[3],x=l[4],b=l[5],T=i.split(" "),w=parseFloat(T[0])||0,k=parseFloat(T[1])||0,C,y,E,S;t?l!==J0&&(y=u*_-m*h)&&(E=w*(_/y)+k*(-h/y)+(h*b-_*x)/y,S=w*(-m/y)+k*(u/y)-(u*b-m*x)/y,w=E,k=S):(C=sa(e),w=C.x+(~T[0].indexOf("%")?w/100*C.width:w),k=C.y+(~(T[1]||T[0]).indexOf("%")?k/100*C.height:k)),r||r!==!1&&o.smooth?(x=w-c,b=k-d,o.xOffset=f+(x*u+b*h)-x,o.yOffset=g+(x*m+b*_)-b):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=k,o.smooth=!!r,o.origin=i,o.originIsAbsolute=!!t,e.style[mt]="0px 0px",s&&(Ci(s,o,"xOrigin",c,w),Ci(s,o,"yOrigin",d,k),Ci(s,o,"xOffset",f,o.xOffset),Ci(s,o,"yOffset",g,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},$0=function(e,i){var t=e._gsap||new es(e);if("x"in t&&!i&&!t.uncache)return t;var r=e.style,n=t.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Jt(e,mt)||"0",d,f,g,u,m,h,_,x,b,T,w,k,C,y,E,S,L,O,M,G,U,$,X,A,Q,se,p,oe,Ke,At,he,Ae;return d=f=g=h=_=x=b=T=w=0,u=m=1,t.svg=!!(e.getCTM&&oa(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),r.scale=r.rotate=r.translate="none"),y=ps(e,t.svg),t.svg&&(t.uncache?(Q=e.getBBox(),c=t.xOrigin-Q.x+"px "+(t.yOrigin-Q.y)+"px",A=""):A=!i&&e.getAttribute("data-svg-origin"),hs(e,A||c,!!A||t.originIsAbsolute,t.smooth!==!1,y)),k=t.xOrigin||0,C=t.yOrigin||0,y!==J0&&(O=y[0],M=y[1],G=y[2],U=y[3],d=$=y[4],f=X=y[5],y.length===6?(u=Math.sqrt(O*O+M*M),m=Math.sqrt(U*U+G*G),h=O||M?v0(M,O)*Xi:0,b=G||U?v0(G,U)*Xi+h:0,b&&(m*=Math.abs(Math.cos(b*y0))),t.svg&&(d-=k-(k*O+C*G),f-=C-(k*M+C*U))):(Ae=y[6],At=y[7],p=y[8],oe=y[9],Ke=y[10],he=y[11],d=y[12],f=y[13],g=y[14],E=v0(Ae,Ke),_=E*Xi,E&&(S=Math.cos(-E),L=Math.sin(-E),A=$*S+p*L,Q=X*S+oe*L,se=Ae*S+Ke*L,p=$*-L+p*S,oe=X*-L+oe*S,Ke=Ae*-L+Ke*S,he=At*-L+he*S,$=A,X=Q,Ae=se),E=v0(-G,Ke),x=E*Xi,E&&(S=Math.cos(-E),L=Math.sin(-E),A=O*S-p*L,Q=M*S-oe*L,se=G*S-Ke*L,he=U*L+he*S,O=A,M=Q,G=se),E=v0(M,O),h=E*Xi,E&&(S=Math.cos(E),L=Math.sin(E),A=O*S+M*L,Q=$*S+X*L,M=M*S-O*L,X=X*S-$*L,O=A,$=Q),_&&Math.abs(_)+Math.abs(h)>359.9&&(_=h=0,x=180-x),u=me(Math.sqrt(O*O+M*M+G*G)),m=me(Math.sqrt(X*X+Ae*Ae)),E=v0($,X),b=Math.abs(E)>2e-4?E*Xi:0,w=he?1/(he<0?-he:he):0),t.svg&&(A=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!la(Jt(e,ue)),A&&e.setAttribute("transform",A))),Math.abs(b)>90&&Math.abs(b)<270&&(n?(u*=-1,b+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),i=i||t.uncache,t.x=d-((t.xPercent=d&&(!i&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+s,t.y=f-((t.yPercent=f&&(!i&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+s,t.z=g+s,t.scaleX=me(u),t.scaleY=me(m),t.rotation=me(h)+o,t.rotationX=me(_)+o,t.rotationY=me(x)+o,t.skewX=b+o,t.skewY=T+o,t.transformPerspective=w+s,(t.zOrigin=parseFloat(c.split(" ")[2])||!i&&t.zOrigin||0)&&(r[mt]=Rr(c)),t.xOffset=t.yOffset=0,t.force3D=gt.force3D,t.renderTransform=t.svg?dc:na?ca:cc,t.uncache=0,t},Rr=function(e){return(e=e.split(" "))[0]+" "+e[1]},ls=function(e,i,t){var r=Ne(i);return me(parseFloat(i)+parseFloat(Li(e,"x",t+"px",r)))+r},cc=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,ca(e,i)},Wi="0deg",j0="0px",Gi=") ",ca=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,s=t.x,o=t.y,l=t.z,c=t.rotation,d=t.rotationY,f=t.rotationX,g=t.skewX,u=t.skewY,m=t.scaleX,h=t.scaleY,_=t.transformPerspective,x=t.force3D,b=t.target,T=t.zOrigin,w="",k=x==="auto"&&e&&e!==1||x===!0;if(T&&(f!==Wi||d!==Wi)){var C=parseFloat(d)*y0,y=Math.sin(C),E=Math.cos(C),S;C=parseFloat(f)*y0,S=Math.cos(C),s=ls(b,s,y*S*-T),o=ls(b,o,-Math.sin(C)*-T),l=ls(b,l,E*S*-T+T)}_!==j0&&(w+="perspective("+_+Gi),(r||n)&&(w+="translate("+r+"%, "+n+"%) "),(k||s!==j0||o!==j0||l!==j0)&&(w+=l!==j0||k?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Gi),c!==Wi&&(w+="rotate("+c+Gi),d!==Wi&&(w+="rotateY("+d+Gi),f!==Wi&&(w+="rotateX("+f+Gi),(g!==Wi||u!==Wi)&&(w+="skew("+g+", "+u+Gi),(m!==1||h!==1)&&(w+="scale("+m+", "+h+Gi),b.style[ue]=w||"translate(0, 0)"},dc=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,s=t.x,o=t.y,l=t.rotation,c=t.skewX,d=t.skewY,f=t.scaleX,g=t.scaleY,u=t.target,m=t.xOrigin,h=t.yOrigin,_=t.xOffset,x=t.yOffset,b=t.forceCSS,T=parseFloat(s),w=parseFloat(o),k,C,y,E,S;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=y0,c*=y0,k=Math.cos(l)*f,C=Math.sin(l)*f,y=Math.sin(l-c)*-g,E=Math.cos(l-c)*g,c&&(d*=y0,S=Math.tan(c-d),S=Math.sqrt(1+S*S),y*=S,E*=S,d&&(S=Math.tan(d),S=Math.sqrt(1+S*S),k*=S,C*=S)),k=me(k),C=me(C),y=me(y),E=me(E)):(k=f,E=g,C=y=0),(T&&!~(s+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(T=Li(u,"x",s,"px"),w=Li(u,"y",o,"px")),(m||h||_||x)&&(T=me(T+m-(m*k+h*y)+_),w=me(w+h-(m*C+h*E)+x)),(r||n)&&(S=u.getBBox(),T=me(T+r/100*S.width),w=me(w+n/100*S.height)),S="matrix("+k+","+C+","+y+","+E+","+T+","+w+")",u.setAttribute("transform",S),b&&(u.style[ue]=S)},uc=function(e,i,t,r,n){var s=360,o=Ee(n),l=parseFloat(n)*(o&&~n.indexOf("rad")?Xi:1),c=l-r,d=r+c+"deg",f,g;return o&&(f=n.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Go)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Go)%s-~~(c/s)*s)),e._pt=g=new it(e._pt,i,t,r,c,jl),g.e=d,g.u="deg",e._props.push(t),g},Zo=function(e,i){for(var t in i)e[t]=i[t];return e},hc=function(e,i,t){var r=Zo({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=t.style,o,l,c,d,f,g,u,m;r.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),s[ue]=i,o=$0(t,1),Ji(t,ue),t.setAttribute("transform",c)):(c=getComputedStyle(t)[ue],s[ue]=i,o=$0(t,1),s[ue]=c);for(l in li)c=r[l],d=o[l],c!==d&&n.indexOf(l)<0&&(u=Ne(c),m=Ne(d),f=u!==m?Li(t,l,c,m):parseFloat(c),g=parseFloat(d),e._pt=new it(e._pt,o,l,f,g-f,cs),e._pt.u=m||0,e._props.push(l));Zo(o,r)};tt("padding,margin,Width,Radius",function(a,e){var i="Top",t="Right",r="Bottom",n="Left",s=(e<3?[i,t,r,n]:[i+n,i+t,r+t,r+n]).map(function(o){return e<2?a+o:"border"+o+a});Dr[e>1?"border"+a:a]=function(o,l,c,d,f){var g,u;if(arguments.length<4)return g=s.map(function(m){return ai(o,m,c)}),u=g.join(" "),u.split(g[0]).length===5?g[0]:u;g=(d+"").split(" "),u={},s.forEach(function(m,h){return u[m]=g[h]=g[h]||g[(h-1)/2|0]}),o.init(l,u,f)}});var _s={name:"css",register:us,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,t,r,n){var s=this._props,o=e.style,l=t.vars.startAt,c,d,f,g,u,m,h,_,x,b,T,w,k,C,y,E;fs||us(),this.styles=this.styles||ra(e),E=this.styles.props,this.tween=t;for(h in i)if(h!=="autoRound"&&(d=i[h],!(ut[h]&&is(h,i,t,r,e,n)))){if(u=typeof d,m=Dr[h],u==="function"&&(d=d.call(t,r,e,n),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=_0(d)),m)m(this,e,h,d,t)&&(y=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",si.lastIndex=0,si.test(c)||(_=Ne(c),x=Ne(d)),x?_!==x&&(c=Li(e,h,c,x)+x):_&&(d+=_),this.add(o,"setProperty",c,d,r,n,0,0,h),s.push(h),E.push(h,0,o[h]);else if(u!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(t,r,e,n):l[h],Ee(c)&&~c.indexOf("random(")&&(c=_0(c)),Ne(c+"")||c==="auto"||(c+=gt.units[h]||Ne(ai(e,h))||""),(c+"").charAt(1)==="="&&(c=ai(e,h))):c=ai(e,h),g=parseFloat(c),b=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),f=parseFloat(d),h in jt&&(h==="autoAlpha"&&(g===1&&ai(e,"visibility")==="hidden"&&f&&(g=0),E.push("visibility",0,o.visibility),Ci(this,o,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=jt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),T=h in li,T){if(this.styles.save(h),w||(k=e._gsap,k.renderTransform&&!i.parseTransform||$0(e,i.parseTransform),C=i.smoothOrigin!==!1&&k.smooth,w=this._pt=new it(this._pt,o,ue,0,1,k.renderTransform,k,0,-1),w.dep=1),h==="scale")this._pt=new it(this._pt,k,"scaleY",k.scaleY,(b?Yi(k.scaleY,b+f):f)-k.scaleY||0,cs),this._pt.u=0,s.push("scaleY",h),h+="X";else if(h==="transformOrigin"){E.push(mt,0,o[mt]),d=ac(d),k.svg?hs(e,d,0,C,0,this):(x=parseFloat(d.split(" ")[2])||0,x!==k.zOrigin&&Ci(this,k,"zOrigin",k.zOrigin,x),Ci(this,o,h,Rr(c),Rr(d)));continue}else if(h==="svgOrigin"){hs(e,d,1,C,0,this);continue}else if(h in aa){uc(this,k,h,g,b?Yi(g,b+d):d);continue}else if(h==="smoothOrigin"){Ci(this,k,"smooth",k.smooth,d);continue}else if(h==="force3D"){k[h]=d;continue}else if(h==="transform"){hc(this,d,e);continue}}else h in o||(h=b0(h)||h);if(T||(f||f===0)&&(g||g===0)&&!Xl.test(d)&&h in o)_=(c+"").substr((g+"").length),f||(f=0),x=Ne(d)||(h in gt.units?gt.units[h]:_),_!==x&&(g=Li(e,h,c,x)),this._pt=new it(this._pt,T?k:o,h,g,(b?Yi(g,b+f):f)-g,!T&&(x==="px"||h==="zIndex")&&i.autoRound!==!1?$l:cs),this._pt.u=x||0,_!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=Jl);else if(h in o)oc.call(this,e,h,c,b?b+d:d);else if(h in e)this.add(e,h,c||e[h],b?b+d:d,r,n);else if(h!=="parseTransform"){Ir(h,d);continue}T||(h in o?E.push(h,0,o[h]):typeof e[h]=="function"?E.push(h,2,e[h]()):E.push(h,1,c||e[h])),s.push(h)}}y&&as(this)},render:function(e,i){if(i.tween._time||!gs())for(var t=i._pt;t;)t.r(e,t.d),t=t._next;else i.styles.revert()},get:ai,aliases:jt,getSetter:function(e,i,t){var r=jt[i];return r&&r.indexOf(",")<0&&(i=r),i in li&&i!==mt&&(e._gsap.x||ai(e,"x"))?t&&Wo===t?i==="scale"?ec:Zl:(Wo=t||{})&&(i==="scale"?tc:ic):e.style&&!Br(e.style[i])?Kl:~i.indexOf("-")?Ql:Or(e,i)},core:{_removeProperty:Ji,_getMatrix:ps}};Ge.utils.checkPrefix=b0;Ge.core.getStyleSaver=ra;(function(a,e,i,t){var r=tt(a+","+e+","+i,function(n){li[n]=1});tt(e,function(n){gt.units[n]="deg",aa[n]=1}),jt[r[13]]=a+","+e,tt(t,function(n){var s=n.split(":");jt[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gt.units[a]="px"});Ge.registerPlugin(_s);var Ei=Ge.registerPlugin(_s)||Ge,T3=Ei.core.Tween;function da(a,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function fc(a,e,i){return e&&da(a.prototype,e),i&&da(a,i),a}var qe,qr,gc,xt,Mi,Bi,k0,ha,$i,Q0,fa,ci,qt,ga,ma=function(){return qe||typeof window<"u"&&(qe=window.gsap)&&qe.registerPlugin&&qe},pa=1,x0=[],H=[],Ht=[],Z0=Date.now,vs=function(e,i){return i},mc=function(){var e=Q0.core,i=e.bridge||{},t=e._scrollers,r=e._proxies;t.push.apply(t,H),r.push.apply(r,Ht),H=t,Ht=r,vs=function(s,o){return i[s](o)}},ui=function(e,i){return~Ht.indexOf(e)&&Ht[Ht.indexOf(e)+1][i]},er=function(e){return!!~fa.indexOf(e)},nt=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:r!==!1,capture:!!n})},rt=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},Fr="scrollLeft",Nr="scrollTop",ws=function(){return ci&&ci.isPressed||H.cache++},Hr=function(e,i){var t=function r(n){if(n||n===0){pa&&(xt.history.scrollRestoration="manual");var s=ci&&ci.isPressed;n=r.v=Math.round(n)||(ci&&ci.iOS?1:0),e(n),r.cacheID=H.cache,s&&vs("ss",n)}else(i||H.cache!==r.cacheID||vs("ref"))&&(r.cacheID=H.cache,r.v=e());return r.v+r.offset};return t.offset=0,e&&t},Xe={s:Fr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hr(function(a){return arguments.length?xt.scrollTo(a,Se.sc()):xt.pageXOffset||Mi[Fr]||Bi[Fr]||k0[Fr]||0})},Se={s:Nr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xe,sc:Hr(function(a){return arguments.length?xt.scrollTo(Xe.sc(),a):xt.pageYOffset||Mi[Nr]||Bi[Nr]||k0[Nr]||0})},st=function(e,i){return(i&&i._ctx&&i._ctx.selector||qe.utils.toArray)(e)[0]||(typeof e=="string"&&qe.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},di=function(e,i){var t=i.s,r=i.sc;er(e)&&(e=Mi.scrollingElement||Bi);var n=H.indexOf(e),s=r===Se.sc?1:2;!~n&&(n=H.push(e)-1),H[n+s]||nt(e,"scroll",ws);var o=H[n+s],l=o||(H[n+s]=Hr(ui(e,t),!0)||(er(e)?r:Hr(function(c){return arguments.length?e[t]=c:e[t]})));return l.target=e,o||(l.smooth=qe.getProperty(e,"scrollBehavior")==="smooth"),l},Vr=function(e,i,t){var r=e,n=e,s=Z0(),o=s,l=i||50,c=Math.max(500,l*3),d=function(m,h){var _=Z0();h||_-s>l?(n=r,r=m,o=s,s=_):t?r+=m:r=n+(m-n)/(_-o)*(s-o)},f=function(){n=r=t?0:r,o=s=0},g=function(m){var h=o,_=n,x=Z0();return(m||m===0)&&m!==r&&d(m),s===o||x-o>c?0:(r+(t?_:-_))/((t?x:s)-h)*1e3};return{update:d,reset:f,getVelocity:g}},K0=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ua=function(e){var i=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(t)?i:t},_a=function(){Q0=qe.core.globals().ScrollTrigger,Q0&&Q0.core&&mc()},va=function(e){return qe=e||ma(),!qr&&qe&&typeof document<"u"&&document.body&&(xt=window,Mi=document,Bi=Mi.documentElement,k0=Mi.body,fa=[xt,Mi,Bi,k0],gc=qe.utils.clamp,ga=qe.core.context||function(){},$i="onpointerenter"in k0?"pointer":"mouse",ha=pe.isTouch=xt.matchMedia&&xt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qt=pe.eventTypes=("ontouchstart"in Bi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return pa=0},500),_a(),qr=1),qr};Xe.op=Se;H.cache=0;var pe=function(){function a(i){this.init(i)}var e=a.prototype;return e.init=function(t){qr||va(qe)||console.warn("Please gsap.registerPlugin(Observer)"),Q0||_a();var r=t.tolerance,n=t.dragMinimum,s=t.type,o=t.target,l=t.lineHeight,c=t.debounce,d=t.preventDefault,f=t.onStop,g=t.onStopDelay,u=t.ignore,m=t.wheelSpeed,h=t.event,_=t.onDragStart,x=t.onDragEnd,b=t.onDrag,T=t.onPress,w=t.onRelease,k=t.onRight,C=t.onLeft,y=t.onUp,E=t.onDown,S=t.onChangeX,L=t.onChangeY,O=t.onChange,M=t.onToggleX,G=t.onToggleY,U=t.onHover,$=t.onHoverEnd,X=t.onMove,A=t.ignoreCheck,Q=t.isNormalizer,se=t.onGestureStart,p=t.onGestureEnd,oe=t.onWheel,Ke=t.onEnable,At=t.onDisable,he=t.onClick,Ae=t.scrollSpeed,Qe=t.capture,xe=t.allowClicks,Ze=t.lockAxis,He=t.onLockAxis;this.target=o=st(o)||Bi,this.vars=t,u&&(u=qe.utils.toArray(u)),r=r||1e-9,n=n||0,m=m||1,Ae=Ae||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xt.getComputedStyle(k0).lineHeight)||22);var gi,et,ct,K,_e,dt,pt,v=this,_t=0,Qt=0,mi=t.passive||!d&&t.passive!==!1,ve=di(o,Xe),Zt=di(o,Se),pi=ve(),zi=Zt(),Be=~s.indexOf("touch")&&!~s.indexOf("pointer")&&qt[0]==="pointerdown",_i=er(o),we=o.ownerDocument||Mi,Ot=[0,0,0],Ct=[0,0,0],ei=0,I0=function(){return ei=Z0()},ke=function(z,Z){return(v.event=z)&&u&&~u.indexOf(z.target)||Z&&Be&&z.pointerType!=="touch"||A&&A(z,Z)},mr=function(){v._vx.reset(),v._vy.reset(),et.pause(),f&&f(v)},ti=function(){var z=v.deltaX=ua(Ot),Z=v.deltaY=ua(Ct),B=Math.abs(z)>=r,D=Math.abs(Z)>=r;O&&(B||D)&&O(v,z,Z,Ot,Ct),B&&(k&&v.deltaX>0&&k(v),C&&v.deltaX<0&&C(v),S&&S(v),M&&v.deltaX<0!=_t<0&&M(v),_t=v.deltaX,Ot[0]=Ot[1]=Ot[2]=0),D&&(E&&v.deltaY>0&&E(v),y&&v.deltaY<0&&y(v),L&&L(v),G&&v.deltaY<0!=Qt<0&&G(v),Qt=v.deltaY,Ct[0]=Ct[1]=Ct[2]=0),(K||ct)&&(X&&X(v),ct&&(_&&ct===1&&_(v),b&&b(v),ct=0),K=!1),dt&&!(dt=!1)&&He&&He(v),_e&&(oe(v),_e=!1),gi=0},o0=function(z,Z,B){Ot[B]+=z,Ct[B]+=Z,v._vx.update(z),v._vy.update(Z),c?gi||(gi=requestAnimationFrame(ti)):ti()},a0=function(z,Z){Ze&&!pt&&(v.axis=pt=Math.abs(z)>Math.abs(Z)?"x":"y",dt=!0),pt!=="y"&&(Ot[2]+=z,v._vx.update(z,!0)),pt!=="x"&&(Ct[2]+=Z,v._vy.update(Z,!0)),c?gi||(gi=requestAnimationFrame(ti)):ti()},vi=function(z){if(!ke(z,1)){z=K0(z,d);var Z=z.clientX,B=z.clientY,D=Z-v.x,P=B-v.y,R=v.isDragging;v.x=Z,v.y=B,(R||(D||P)&&(Math.abs(v.startX-Z)>=n||Math.abs(v.startY-B)>=n))&&(ct=R?2:1,R||(v.isDragging=!0),a0(D,P))}},Ai=v.onPress=function(F){ke(F,1)||F&&F.button||(v.axis=pt=null,et.pause(),v.isPressed=!0,F=K0(F),_t=Qt=0,v.startX=v.x=F.clientX,v.startY=v.y=F.clientY,v._vx.reset(),v._vy.reset(),nt(Q?o:we,qt[1],vi,mi,!0),v.deltaX=v.deltaY=0,T&&T(v))},W=v.onRelease=function(F){if(!ke(F,1)){rt(Q?o:we,qt[1],vi,!0);var z=!isNaN(v.y-v.startY),Z=v.isDragging,B=Z&&(Math.abs(v.x-v.startX)>3||Math.abs(v.y-v.startY)>3),D=K0(F);!B&&z&&(v._vx.reset(),v._vy.reset(),d&&xe&&qe.delayedCall(.08,function(){if(Z0()-ei>300&&!F.defaultPrevented){if(F.target.click)F.target.click();else if(we.createEvent){var P=we.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,xt,1,D.screenX,D.screenY,D.clientX,D.clientY,!1,!1,!1,!1,0,null),F.target.dispatchEvent(P)}}})),v.isDragging=v.isGesturing=v.isPressed=!1,f&&Z&&!Q&&et.restart(!0),ct&&ti(),x&&Z&&x(v),w&&w(v,B)}},Oi=function(z){return z.touches&&z.touches.length>1&&(v.isGesturing=!0)&&se(z,v.isDragging)},Dt=function(){return(v.isGesturing=!1)||p(v)},Rt=function(z){if(!ke(z)){var Z=ve(),B=Zt();o0((Z-pi)*Ae,(B-zi)*Ae,1),pi=Z,zi=B,f&&et.restart(!0)}},Ft=function(z){if(!ke(z)){z=K0(z,d),oe&&(_e=!0);var Z=(z.deltaMode===1?l:z.deltaMode===2?xt.innerHeight:1)*m;o0(z.deltaX*Z,z.deltaY*Z,0),f&&!Q&&et.restart(!0)}},Di=function(z){if(!ke(z)){var Z=z.clientX,B=z.clientY,D=Z-v.x,P=B-v.y;v.x=Z,v.y=B,K=!0,f&&et.restart(!0),(D||P)&&a0(D,P)}},l0=function(z){v.event=z,U(v)},ii=function(z){v.event=z,$(v)},P0=function(z){return ke(z)||K0(z,d)&&he(v)};et=v._dc=qe.delayedCall(g||.25,mr).pause(),v.deltaX=v.deltaY=0,v._vx=Vr(0,50,!0),v._vy=Vr(0,50,!0),v.scrollX=ve,v.scrollY=Zt,v.isDragging=v.isGesturing=v.isPressed=!1,ga(this),v.enable=function(F){return v.isEnabled||(nt(_i?we:o,"scroll",ws),s.indexOf("scroll")>=0&&nt(_i?we:o,"scroll",Rt,mi,Qe),s.indexOf("wheel")>=0&&nt(o,"wheel",Ft,mi,Qe),(s.indexOf("touch")>=0&&ha||s.indexOf("pointer")>=0)&&(nt(o,qt[0],Ai,mi,Qe),nt(we,qt[2],W),nt(we,qt[3],W),xe&&nt(o,"click",I0,!0,!0),he&&nt(o,"click",P0),se&&nt(we,"gesturestart",Oi),p&&nt(we,"gestureend",Dt),U&&nt(o,$i+"enter",l0),$&&nt(o,$i+"leave",ii),X&&nt(o,$i+"move",Di)),v.isEnabled=!0,v.isDragging=v.isGesturing=v.isPressed=K=ct=!1,v._vx.reset(),v._vy.reset(),pi=ve(),zi=Zt(),F&&F.type&&Ai(F),Ke&&Ke(v)),v},v.disable=function(){v.isEnabled&&(x0.filter(function(F){return F!==v&&er(F.target)}).length||rt(_i?we:o,"scroll",ws),v.isPressed&&(v._vx.reset(),v._vy.reset(),rt(Q?o:we,qt[1],vi,!0)),rt(_i?we:o,"scroll",Rt,Qe),rt(o,"wheel",Ft,Qe),rt(o,qt[0],Ai,Qe),rt(we,qt[2],W),rt(we,qt[3],W),rt(o,"click",I0,!0),rt(o,"click",P0),rt(we,"gesturestart",Oi),rt(we,"gestureend",Dt),rt(o,$i+"enter",l0),rt(o,$i+"leave",ii),rt(o,$i+"move",Di),v.isEnabled=v.isPressed=v.isDragging=!1,At&&At(v))},v.kill=v.revert=function(){v.disable();var F=x0.indexOf(v);F>=0&&x0.splice(F,1),ci===v&&(ci=0)},x0.push(v),Q&&er(o)&&(ci=v),v.enable(h)},fc(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();pe.version="3.12.7";pe.create=function(a){return new pe(a)};pe.register=va;pe.getAll=function(){return x0.slice()};pe.getById=function(a){return x0.filter(function(e){return e.vars.id===a})[0]};ma()&&qe.registerPlugin(pe);var I,C0,Y,ne,St,ee,As,sn,fr,ar,ir,Yr,je,cn,Ls,at,wa,ya,L0,Da,ys,Ra,ot,Es,Fa,Na,Ii,Ms,Os,E0,Ds,on,Bs,bs,Ur=1,Je=Date.now,xs=Je(),zt=0,rr=0,ba=function(e,i,t){var r=Tt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},xa=function(e,i){return i&&(!Tt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},pc=function a(){return rr&&requestAnimationFrame(a)},ka=function(){return cn=1},Ta=function(){return cn=0},$t=function(e){return e},nr=function(e){return Math.round(e*1e5)/1e5||0},qa=function(){return typeof window<"u"},Ha=function(){return I||qa()&&(I=window.gsap)&&I.registerPlugin&&I},i0=function(e){return!!~As.indexOf(e)},Va=function(e){return(e==="Height"?Ds:Y["inner"+e])||St["client"+e]||ee["client"+e]},Ya=function(e){return ui(e,"getBoundingClientRect")||(i0(e)?function(){return nn.width=Y.innerWidth,nn.height=Ds,nn}:function(){return hi(e)})},_c=function(e,i,t){var r=t.d,n=t.d2,s=t.a;return(s=ui(e,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(i?Va(n):e["client"+n])||0}},vc=function(e,i){return!i||~Ht.indexOf(e)?Ya(e):function(){return nn}},Kt=function(e,i){var t=i.s,r=i.d2,n=i.d,s=i.a;return Math.max(0,(t="scroll"+r)&&(s=ui(e,t))?s()-Ya(e)()[n]:i0(e)?(St[t]||ee[t])-Va(r):e[t]-e["offset"+r])},Wr=function(e,i){for(var t=0;t<L0.length;t+=3)(!i||~i.indexOf(L0[t+1]))&&e(L0[t],L0[t+1],L0[t+2])},Tt=function(e){return typeof e=="string"},$e=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},Ki=function(e){return typeof e=="object"},tr=function(e,i,t){return e&&e.progress(i?0:1)&&t&&e.pause()},ks=function(e,i){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return i(e)}):i(e);t&&t.totalTime&&(e.callbackAnimation=t)}},T0=Math.abs,Ua="left",Wa="top",Rs="right",Fs="bottom",Zi="width",e0="height",lr="Right",cr="Left",dr="Top",ur="Bottom",Ce="padding",It="margin",B0="Width",Ns="Height",Me="px",Pt=function(e){return Y.getComputedStyle(e)},wc=function(e){var i=Pt(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},Sa=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},hi=function(e,i){var t=i&&Pt(e)[Ls]!=="matrix(1, 0, 0, 1, 0, 0)"&&I.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return t&&t.progress(0).kill(),r},an=function(e,i){var t=i.d2;return e["offset"+t]||e["client"+t]||0},Ga=function(e){var i=[],t=e.labels,r=e.duration(),n;for(n in t)i.push(t[n]/r);return i},yc=function(e){return function(i){return I.utils.snap(Ga(e),i)}},qs=function(e){var i=I.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return t?function(r,n,s){s===void 0&&(s=.001);var o;if(!n)return i(r);if(n>0){for(r-=s,o=0;o<t.length;o++)if(t[o]>=r)return t[o];return t[o-1]}else for(o=t.length,r+=s;o--;)if(t[o]<=r)return t[o];return t[0]}:function(r,n,s){s===void 0&&(s=.001);var o=i(r);return!n||Math.abs(o-r)<s||o-r<0==n<0?o:i(n<0?r-e:r+e)}},bc=function(e){return function(i,t){return qs(Ga(e))(i,t.direction)}},Gr=function(e,i,t,r){return t.split(",").forEach(function(n){return e(i,n,r)})},ze=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:!r,capture:!!n})},Pe=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},Xr=function(e,i,t){t=t&&t.wheelHandler,t&&(e(i,"wheel",t),e(i,"touchmove",t))},Ca={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jr={toggleActions:"play",anticipatePin:0},ln={top:0,left:0,center:.5,bottom:1,right:1},Zr=function(e,i){if(Tt(e)){var t=e.indexOf("="),r=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(r*=i/100),e=e.substr(0,t-1)),e=r+(e in ln?ln[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Jr=function(e,i,t,r,n,s,o,l){var c=n.startColor,d=n.endColor,f=n.fontSize,g=n.indent,u=n.fontWeight,m=ne.createElement("div"),h=i0(t)||ui(t,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,x=h?ee:t,b=e.indexOf("start")!==-1,T=b?c:d,w="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||l)&&h?"fixed;":"absolute;"),(_||l||!h)&&(w+=(r===Se?Rs:Fs)+":"+(s+parseFloat(g))+"px;"),o&&(w+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),m.style.cssText=w,m.innerText=i||i===0?e+"-"+i:e,x.children[0]?x.insertBefore(m,x.children[0]):x.appendChild(m),m._offset=m["offset"+r.op.d2],en(m,0,r,b),m},en=function(e,i,t,r){var n={display:"block"},s=t[r?"os2":"p2"],o=t[r?"p2":"os2"];e._isFlipped=r,n[t.a+"Percent"]=r?-100:0,n[t.a]=r?"1px":0,n["border"+s+B0]=1,n["border"+o+B0]=0,n[t.p]=i+"px",I.set(e,n)},V=[],Is={},gr,La=function(){return Je()-zt>34&&(gr||(gr=requestAnimationFrame(fi)))},S0=function(){(!ot||!ot.isPressed||ot.startX>ee.clientWidth)&&(H.cache++,ot?gr||(gr=requestAnimationFrame(fi)):fi(),zt||n0("scrollStart"),zt=Je())},Ts=function(){Na=Y.innerWidth,Fa=Y.innerHeight},or=function(e){H.cache++,(e===!0||!je&&!Ra&&!ne.fullscreenElement&&!ne.webkitFullscreenElement&&(!Es||Na!==Y.innerWidth||Math.abs(Y.innerHeight-Fa)>Y.innerHeight*.25))&&sn.restart(!0)},r0={},xc=[],Xa=function a(){return Pe(N,"scrollEnd",a)||Qi(!0)},n0=function(e){return r0[e]&&r0[e].map(function(i){return i()})||xc},kt=[],ja=function(e){for(var i=0;i<kt.length;i+=5)(!e||kt[i+4]&&kt[i+4].query===e)&&(kt[i].style.cssText=kt[i+1],kt[i].getBBox&&kt[i].setAttribute("transform",kt[i+2]||""),kt[i+3].uncache=1)},Hs=function(e,i){var t;for(at=0;at<V.length;at++)t=V[at],t&&(!i||t._ctx===i)&&(e?t.kill(1):t.revert(!0,!0));on=!0,i&&ja(i),i||n0("revert")},Ja=function(e,i){H.cache++,(i||!lt)&&H.forEach(function(t){return $e(t)&&t.cacheID++&&(t.rec=0)}),Tt(e)&&(Y.history.scrollRestoration=Os=e)},lt,t0=0,Ea,kc=function(){if(Ea!==t0){var e=Ea=t0;requestAnimationFrame(function(){return e===t0&&Qi(!0)})}},$a=function(){ee.appendChild(E0),Ds=!ot&&E0.offsetHeight||Y.innerHeight,ee.removeChild(E0)},Ma=function(e){return fr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},Qi=function(e,i){if(St=ne.documentElement,ee=ne.body,As=[Y,ne,St,ee],zt&&!e&&!on){ze(N,"scrollEnd",Xa);return}$a(),lt=N.isRefreshing=!0,H.forEach(function(r){return $e(r)&&++r.cacheID&&(r.rec=r())});var t=n0("refreshInit");Da&&N.sort(),i||Hs(),H.forEach(function(r){$e(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),V.slice(0).forEach(function(r){return r.refresh()}),on=!1,V.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",s=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-s),r.refresh()}}),Bs=1,Ma(!0),V.forEach(function(r){var n=Kt(r.scroller,r._dir),s=r.vars.end==="max"||r._endClamp&&r.end>n,o=r._startClamp&&r.start>=n;(s||o)&&r.setPositions(o?n-1:r.start,s?Math.max(o?n:r.start+1,n):r.end,!0)}),Ma(!1),Bs=0,t.forEach(function(r){return r&&r.render&&r.render(-1)}),H.forEach(function(r){$e(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ja(Os,1),sn.pause(),t0++,lt=2,fi(2),V.forEach(function(r){return $e(r.vars.onRefresh)&&r.vars.onRefresh(r)}),lt=N.isRefreshing=!1,n0("refresh")},Ps=0,tn=1,hr,fi=function(e){if(e===2||!lt&&!on){N.isUpdating=!0,hr&&hr.update(0);var i=V.length,t=Je(),r=t-xs>=50,n=i&&V[0].scroll();if(tn=Ps>n?-1:1,lt||(Ps=n),r&&(zt&&!cn&&t-zt>200&&(zt=0,n0("scrollEnd")),ir=xs,xs=t),tn<0){for(at=i;at-- >0;)V[at]&&V[at].update(0,r);tn=1}else for(at=0;at<i;at++)V[at]&&V[at].update(0,r);N.isUpdating=!1}gr=0},zs=[Ua,Wa,Fs,Rs,It+ur,It+lr,It+dr,It+cr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rn=zs.concat([Zi,e0,"boxSizing","max"+B0,"max"+Ns,"position",It,Ce,Ce+dr,Ce+lr,Ce+ur,Ce+cr]),Tc=function(e,i,t){M0(t);var r=e._gsap;if(r.spacerIsNative)M0(r.spacerState);else if(e._gsap.swappedIn){var n=i.parentNode;n&&(n.insertBefore(e,i),n.removeChild(i))}e._gsap.swappedIn=!1},Ss=function(e,i,t,r){if(!e._gsap.swappedIn){for(var n=zs.length,s=i.style,o=e.style,l;n--;)l=zs[n],s[l]=t[l];s.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(s.display="inline-block"),o[Fs]=o[Rs]="auto",s.flexBasis=t.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Zi]=an(e,Xe)+Me,s[e0]=an(e,Se)+Me,s[Ce]=o[It]=o[Wa]=o[Ua]="0",M0(r),o[Zi]=o["max"+B0]=t[Zi],o[e0]=o["max"+Ns]=t[e0],o[Ce]=t[Ce],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Sc=/([A-Z])/g,M0=function(e){if(e){var i=e.t.style,t=e.length,r=0,n,s;for((e.t._gsap||I.core.getCache(e.t)).uncache=1;r<t;r+=2)s=e[r+1],n=e[r],s?i[n]=s:i[n]&&i.removeProperty(n.replace(Sc,"-$1").toLowerCase())}},$r=function(e){for(var i=rn.length,t=e.style,r=[],n=0;n<i;n++)r.push(rn[n],t[rn[n]]);return r.t=e,r},Cc=function(e,i,t){for(var r=[],n=e.length,s=t?8:0,o;s<n;s+=2)o=e[s],r.push(o,o in i?i[o]:e[s+1]);return r.t=e.t,r},nn={left:0,top:0},Ba=function(e,i,t,r,n,s,o,l,c,d,f,g,u,m){$e(e)&&(e=e(l)),Tt(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Zr("0"+e.substr(3),t):0));var h=u?u.time():0,_,x,b;if(u&&u.seek(0),isNaN(e)||(e=+e),sr(e))u&&(e=I.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),o&&en(o,t,r,!0);else{$e(i)&&(i=i(l));var T=(e||"0").split(" "),w,k,C,y;b=st(i,l)||ee,w=hi(b)||{},(!w||!w.left&&!w.top)&&Pt(b).display==="none"&&(y=b.style.display,b.style.display="block",w=hi(b),y?b.style.display=y:b.style.removeProperty("display")),k=Zr(T[0],w[r.d]),C=Zr(T[1]||"0",t),e=w[r.p]-c[r.p]-d+k+n-C,o&&en(o,C,r,t-C<20||o._isStart&&C>20),t-=t-C}if(m&&(l[m]=e||-.001,e<0&&(e=0)),s){var E=e+t,S=s._isStart;_="scroll"+r.d2,en(s,E,r,S&&E>20||!S&&(f?Math.max(ee[_],St[_]):s.parentNode[_])<=E+1),f&&(c=hi(o),f&&(s.style[r.op.p]=c[r.op.p]-r.op.m-s._offset+Me))}return u&&b&&(_=hi(b),u.seek(g),x=hi(b),u._caScrollDist=_[r.p]-x[r.p],e=e/u._caScrollDist*g),u&&u.seek(h),u?e:Math.round(e)},Lc=/(webkit|moz|length|cssText|inset)/i,Ia=function(e,i,t,r){if(e.parentNode!==i){var n=e.style,s,o;if(i===ee){e._stOrig=n.cssText,o=Pt(e);for(s in o)!+s&&!Lc.test(s)&&o[s]&&typeof n[s]=="string"&&s!=="0"&&(n[s]=o[s]);n.top=t,n.left=r}else n.cssText=e._stOrig;I.core.getCache(e).uncache=1,i.appendChild(e)}},Ka=function(e,i,t){var r=i,n=r;return function(s){var o=Math.round(e());return o!==r&&o!==n&&Math.abs(o-r)>3&&Math.abs(o-n)>3&&(s=o,t&&t()),n=r,r=Math.round(s),r}},Kr=function(e,i,t){var r={};r[i.p]="+="+t,I.set(e,r)},Pa=function(e,i){var t=di(e,i),r="_scroll"+i.p2,n=function s(o,l,c,d,f){var g=s.tween,u=l.onComplete,m={};c=c||t();var h=Ka(t,c,function(){g.kill(),s.tween=0});return f=d&&f||0,d=d||o-c,g&&g.kill(),l[r]=o,l.inherit=!1,l.modifiers=m,m[r]=function(){return h(c+d*g.ratio+f*g.ratio*g.ratio)},l.onUpdate=function(){H.cache++,s.tween&&fi()},l.onComplete=function(){s.tween=0,u&&u.call(g)},g=s.tween=I.to(e,l),g};return e[r]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},ze(e,"wheel",t.wheelHandler),N.isTouch&&ze(e,"touchmove",t.wheelHandler),n},N=function(){function a(i,t){C0||a.register(I)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ms(this),this.init(i,t)}var e=a.prototype;return e.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!rr){this.update=this.refresh=this.kill=$t;return}t=Sa(Tt(t)||sr(t)||t.nodeType?{trigger:t}:t,jr);var n=t,s=n.onUpdate,o=n.toggleClass,l=n.id,c=n.onToggle,d=n.onRefresh,f=n.scrub,g=n.trigger,u=n.pin,m=n.pinSpacing,h=n.invalidateOnRefresh,_=n.anticipatePin,x=n.onScrubComplete,b=n.onSnapComplete,T=n.once,w=n.snap,k=n.pinReparent,C=n.pinSpacer,y=n.containerAnimation,E=n.fastScrollEnd,S=n.preventOverlaps,L=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Xe:Se,O=!f&&f!==0,M=st(t.scroller||Y),G=I.core.getCache(M),U=i0(M),$=("pinType"in t?t.pinType:ui(M,"pinType")||U&&"fixed")==="fixed",X=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],A=O&&t.toggleActions.split(" "),Q="markers"in t?t.markers:jr.markers,se=U?0:parseFloat(Pt(M)["border"+L.p2+B0])||0,p=this,oe=t.onRefreshInit&&function(){return t.onRefreshInit(p)},Ke=_c(M,U,L),At=vc(M,U),he=0,Ae=0,Qe=0,xe=di(M,L),Ze,He,gi,et,ct,K,_e,dt,pt,v,_t,Qt,mi,ve,Zt,pi,zi,Be,_i,we,Ot,Ct,ei,I0,ke,mr,ti,o0,a0,vi,Ai,W,Oi,Dt,Rt,Ft,Di,l0,ii;if(p._startClamp=p._endClamp=!1,p._dir=L,_*=45,p.scroller=M,p.scroll=y?y.time.bind(y):xe,et=xe(),p.vars=t,r=r||t.animation,"refreshPriority"in t&&(Da=1,t.refreshPriority===-9999&&(hr=p)),G.tweenScroll=G.tweenScroll||{top:Pa(M,Se),left:Pa(M,Xe)},p.tweenTo=Ze=G.tweenScroll[L.p],p.scrubDuration=function(B){Oi=sr(B)&&B,Oi?W?W.duration(B):W=I.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Oi,paused:!0,onComplete:function(){return x&&x(p)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!p.isReverted||r.vars.immediateRender!==!1&&t.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),p.animation=r.pause(),r.scrollTrigger=p,p.scrubDuration(f),vi=0,l||(l=r.vars.id)),w&&((!Ki(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ee.style&&I.set(U?[ee,St]:M,{scrollBehavior:"auto"}),H.forEach(function(B){return $e(B)&&B.target===(U?ne.scrollingElement||St:M)&&(B.smooth=!1)}),gi=$e(w.snapTo)?w.snapTo:w.snapTo==="labels"?yc(r):w.snapTo==="labelsDirectional"?bc(r):w.directional!==!1?function(B,D){return qs(w.snapTo)(B,Je()-Ae<500?0:D.direction)}:I.utils.snap(w.snapTo),Dt=w.duration||{min:.1,max:2},Dt=Ki(Dt)?ar(Dt.min,Dt.max):ar(Dt,Dt),Rt=I.delayedCall(w.delay||Oi/2||.1,function(){var B=xe(),D=Je()-Ae<500,P=Ze.tween;if((D||Math.abs(p.getVelocity())<10)&&!P&&!cn&&he!==B){var R=(B-K)/ve,Ie=r&&!O?r.totalProgress():R,j=D?0:(Ie-Ai)/(Je()-ir)*1e3||0,ye=I.utils.clamp(-R,1-R,T0(j/2)*j/.185),Ve=R+(w.inertia===!1?0:ye),fe,ae,te=w,Nt=te.onStart,ce=te.onInterrupt,vt=te.onComplete;if(fe=gi(Ve,p),sr(fe)||(fe=Ve),ae=Math.max(0,Math.round(K+fe*ve)),B<=_e&&B>=K&&ae!==B){if(P&&!P._initted&&P.data<=T0(ae-B))return;w.inertia===!1&&(ye=fe-R),Ze(ae,{duration:Dt(T0(Math.max(T0(Ve-Ie),T0(fe-Ie))*.185/j/.05||0)),ease:w.ease||"power3",data:T0(ae-B),onInterrupt:function(){return Rt.restart(!0)&&ce&&ce(p)},onComplete:function(){p.update(),he=xe(),r&&!O&&(W?W.resetTo("totalProgress",fe,r._tTime/r._tDur):r.progress(fe)),vi=Ai=r&&!O?r.totalProgress():p.progress,b&&b(p),vt&&vt(p)}},B,ye*ve,ae-B-ye*ve),Nt&&Nt(p,Ze.tween)}}else p.isActive&&he!==B&&Rt.restart(!0)}).pause()),l&&(Is[l]=p),g=p.trigger=st(g||u!==!0&&u),ii=g&&g._gsap&&g._gsap.stRevert,ii&&(ii=ii(p)),u=u===!0?g:st(u),Tt(o)&&(o={targets:g,className:o}),u&&(m===!1||m===It||(m=!m&&u.parentNode&&u.parentNode.style&&Pt(u.parentNode).display==="flex"?!1:Ce),p.pin=u,He=I.core.getCache(u),He.spacer?Zt=He.pinState:(C&&(C=st(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),He.spacerIsNative=!!C,C&&(He.spacerState=$r(C))),He.spacer=Be=C||ne.createElement("div"),Be.classList.add("pin-spacer"),l&&Be.classList.add("pin-spacer-"+l),He.pinState=Zt=$r(u)),t.force3D!==!1&&I.set(u,{force3D:!0}),p.spacer=Be=He.spacer,a0=Pt(u),I0=a0[m+L.os2],we=I.getProperty(u),Ot=I.quickSetter(u,L.a,Me),Ss(u,Be,a0),zi=$r(u)),Q){Qt=Ki(Q)?Sa(Q,Ca):Ca,v=Jr("scroller-start",l,M,L,Qt,0),_t=Jr("scroller-end",l,M,L,Qt,0,v),_i=v["offset"+L.op.d2];var P0=st(ui(M,"content")||M);dt=this.markerStart=Jr("start",l,P0,L,Qt,_i,0,y),pt=this.markerEnd=Jr("end",l,P0,L,Qt,_i,0,y),y&&(l0=I.quickSetter([dt,pt],L.a,Me)),!$&&!(Ht.length&&ui(M,"fixedMarkers")===!0)&&(wc(U?ee:M),I.set([v,_t],{force3D:!0}),mr=I.quickSetter(v,L.a,Me),o0=I.quickSetter(_t,L.a,Me))}if(y){var F=y.vars.onUpdate,z=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){p.update(0,0,1),F&&F.apply(y,z||[])})}if(p.previous=function(){return V[V.indexOf(p)-1]},p.next=function(){return V[V.indexOf(p)+1]},p.revert=function(B,D){if(!D)return p.kill(!0);var P=B!==!1||!p.enabled,R=je;P!==p.isReverted&&(P&&(Ft=Math.max(xe(),p.scroll.rec||0),Qe=p.progress,Di=r&&r.progress()),dt&&[dt,pt,v,_t].forEach(function(Ie){return Ie.style.display=P?"none":"block"}),P&&(je=p,p.update(P)),u&&(!k||!p.isActive)&&(P?Tc(u,Be,Zt):Ss(u,Be,Pt(u),ke)),P||p.update(P),je=R,p.isReverted=P)},p.refresh=function(B,D,P,R){if(!((je||!p.enabled)&&!D)){if(u&&B&&zt){ze(a,"scrollEnd",Xa);return}!lt&&oe&&oe(p),je=p,Ze.tween&&!P&&(Ze.tween.kill(),Ze.tween=0),W&&W.pause(),h&&r&&r.revert({kill:!1}).invalidate(),p.isReverted||p.revert(!0,!0),p._subPinOffset=!1;var Ie=Ke(),j=At(),ye=y?y.duration():Kt(M,L),Ve=ve<=.01,fe=0,ae=R||0,te=Ki(P)?P.end:t.end,Nt=t.endTrigger||g,ce=Ki(P)?P.start:t.start||(t.start===0||!g?0:u?"0 0":"0 100%"),vt=p.pinnedContainer=t.pinnedContainer&&st(t.pinnedContainer,p),Vt=g&&Math.max(0,V.indexOf(p))||0,Oe=Vt,De,Ye,Ri,pr,Ue,Le,Yt,_n,Gs,z0,Ut,A0,_r;for(Q&&Ki(P)&&(A0=I.getProperty(v,L.p),_r=I.getProperty(_t,L.p));Oe-- >0;)Le=V[Oe],Le.end||Le.refresh(0,1)||(je=p),Yt=Le.pin,Yt&&(Yt===g||Yt===u||Yt===vt)&&!Le.isReverted&&(z0||(z0=[]),z0.unshift(Le),Le.revert(!0,!0)),Le!==V[Oe]&&(Vt--,Oe--);for($e(ce)&&(ce=ce(p)),ce=ba(ce,"start",p),K=Ba(ce,g,Ie,L,xe(),dt,v,p,j,se,$,ye,y,p._startClamp&&"_startClamp")||(u?-.001:0),$e(te)&&(te=te(p)),Tt(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(Tt(ce)?ce.split(" ")[0]:"")+te:(fe=Zr(te.substr(2),Ie),te=Tt(ce)?ce:(y?I.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,K):K)+fe,Nt=g)),te=ba(te,"end",p),_e=Math.max(K,Ba(te||(Nt?"100% 0":ye),Nt,Ie,L,xe()+fe,pt,_t,p,j,se,$,ye,y,p._endClamp&&"_endClamp"))||-.001,fe=0,Oe=Vt;Oe--;)Le=V[Oe],Yt=Le.pin,Yt&&Le.start-Le._pinPush<=K&&!y&&Le.end>0&&(De=Le.end-(p._startClamp?Math.max(0,Le.start):Le.start),(Yt===g&&Le.start-Le._pinPush<K||Yt===vt)&&isNaN(ce)&&(fe+=De*(1-Le.progress)),Yt===u&&(ae+=De));if(K+=fe,_e+=fe,p._startClamp&&(p._startClamp+=fe),p._endClamp&&!lt&&(p._endClamp=_e||-.001,_e=Math.min(_e,Kt(M,L))),ve=_e-K||(K-=.01)&&.001,Ve&&(Qe=I.utils.clamp(0,1,I.utils.normalize(K,_e,Ft))),p._pinPush=ae,dt&&fe&&(De={},De[L.a]="+="+fe,vt&&(De[L.p]="-="+xe()),I.set([dt,pt],De)),u&&!(Bs&&p.end>=Kt(M,L)))De=Pt(u),pr=L===Se,Ri=xe(),Ct=parseFloat(we(L.a))+ae,!ye&&_e>1&&(Ut=(U?ne.scrollingElement||St:M).style,Ut={style:Ut,value:Ut["overflow"+L.a.toUpperCase()]},U&&Pt(ee)["overflow"+L.a.toUpperCase()]!=="scroll"&&(Ut.style["overflow"+L.a.toUpperCase()]="scroll")),Ss(u,Be,De),zi=$r(u),Ye=hi(u,!0),_n=$&&di(M,pr?Xe:Se)(),m?(ke=[m+L.os2,ve+ae+Me],ke.t=Be,Oe=m===Ce?an(u,L)+ve+ae:0,Oe&&(ke.push(L.d,Oe+Me),Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Oe+Me)),M0(ke),vt&&V.forEach(function(O0){O0.pin===vt&&O0.vars.pinSpacing!==!1&&(O0._subPinOffset=!0)}),$&&xe(Ft)):(Oe=an(u,L),Oe&&Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Oe+Me)),$&&(Ue={top:Ye.top+(pr?Ri-K:_n)+Me,left:Ye.left+(pr?_n:Ri-K)+Me,boxSizing:"border-box",position:"fixed"},Ue[Zi]=Ue["max"+B0]=Math.ceil(Ye.width)+Me,Ue[e0]=Ue["max"+Ns]=Math.ceil(Ye.height)+Me,Ue[It]=Ue[It+dr]=Ue[It+lr]=Ue[It+ur]=Ue[It+cr]="0",Ue[Ce]=De[Ce],Ue[Ce+dr]=De[Ce+dr],Ue[Ce+lr]=De[Ce+lr],Ue[Ce+ur]=De[Ce+ur],Ue[Ce+cr]=De[Ce+cr],pi=Cc(Zt,Ue,k),lt&&xe(0)),r?(Gs=r._initted,ys(1),r.render(r.duration(),!0,!0),ei=we(L.a)-Ct+ve+ae,ti=Math.abs(ve-ei)>1,$&&ti&&pi.splice(pi.length-2,2),r.render(0,!0,!0),Gs||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ys(0)):ei=ve,Ut&&(Ut.value?Ut.style["overflow"+L.a.toUpperCase()]=Ut.value:Ut.style.removeProperty("overflow-"+L.a));else if(g&&xe()&&!y)for(Ye=g.parentNode;Ye&&Ye!==ee;)Ye._pinOffset&&(K-=Ye._pinOffset,_e-=Ye._pinOffset),Ye=Ye.parentNode;z0&&z0.forEach(function(O0){return O0.revert(!1,!0)}),p.start=K,p.end=_e,et=ct=lt?Ft:xe(),!y&&!lt&&(et<Ft&&xe(Ft),p.scroll.rec=0),p.revert(!1,!0),Ae=Je(),Rt&&(he=-1,Rt.restart(!0)),je=0,r&&O&&(r._initted||Di)&&r.progress()!==Di&&r.progress(Di||0,!0).render(r.time(),!0,!0),(Ve||Qe!==p.progress||y||h||r&&!r._initted)&&(r&&!O&&r.totalProgress(y&&K<-.001&&!Qe?I.utils.normalize(K,_e,0):Qe,!0),p.progress=Ve||(et-K)/ve===Qe?0:Qe),u&&m&&(Be._pinOffset=Math.round(p.progress*ei)),W&&W.invalidate(),isNaN(A0)||(A0-=I.getProperty(v,L.p),_r-=I.getProperty(_t,L.p),Kr(v,L,A0),Kr(dt,L,A0-(R||0)),Kr(_t,L,_r),Kr(pt,L,_r-(R||0))),Ve&&!lt&&p.update(),d&&!lt&&!mi&&(mi=!0,d(p),mi=!1)}},p.getVelocity=function(){return(xe()-ct)/(Je()-ir)*1e3||0},p.endAnimation=function(){tr(p.callbackAnimation),r&&(W?W.progress(1):r.paused()?O||tr(r,p.direction<0,1):tr(r,r.reversed()))},p.labelToScroll=function(B){return r&&r.labels&&(K||p.refresh()||K)+r.labels[B]/r.duration()*ve||0},p.getTrailing=function(B){var D=V.indexOf(p),P=p.direction>0?V.slice(0,D).reverse():V.slice(D+1);return(Tt(B)?P.filter(function(R){return R.vars.preventOverlaps===B}):P).filter(function(R){return p.direction>0?R.end<=K:R.start>=_e})},p.update=function(B,D,P){if(!(y&&!P&&!B)){var R=lt===!0?Ft:p.scroll(),Ie=B?0:(R-K)/ve,j=Ie<0?0:Ie>1?1:Ie||0,ye=p.progress,Ve,fe,ae,te,Nt,ce,vt,Vt;if(D&&(ct=et,et=y?xe():R,w&&(Ai=vi,vi=r&&!O?r.totalProgress():j)),_&&u&&!je&&!Ur&&zt&&(!j&&K<R+(R-ct)/(Je()-ir)*_?j=1e-4:j===1&&_e>R+(R-ct)/(Je()-ir)*_&&(j=.9999)),j!==ye&&p.enabled){if(Ve=p.isActive=!!j&&j<1,fe=!!ye&&ye<1,ce=Ve!==fe,Nt=ce||!!j!=!!ye,p.direction=j>ye?1:-1,p.progress=j,Nt&&!je&&(ae=j&&!ye?0:j===1?1:ye===1?2:3,O&&(te=!ce&&A[ae+1]!=="none"&&A[ae+1]||A[ae],Vt=r&&(te==="complete"||te==="reset"||te in r))),S&&(ce||Vt)&&(Vt||f||!r)&&($e(S)?S(p):p.getTrailing(S).forEach(function(Ri){return Ri.endAnimation()})),O||(W&&!je&&!Ur?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",j,r._tTime/r._tDur):(W.vars.totalProgress=j,W.invalidate().restart())):r&&r.totalProgress(j,!!(je&&(Ae||B)))),u){if(B&&m&&(Be.style[m+L.os2]=I0),!$)Ot(nr(Ct+ei*j));else if(Nt){if(vt=!B&&j>ye&&_e+1>R&&R+1>=Kt(M,L),k)if(!B&&(Ve||vt)){var Oe=hi(u,!0),De=R-K;Ia(u,ee,Oe.top+(L===Se?De:0)+Me,Oe.left+(L===Se?0:De)+Me)}else Ia(u,Be);M0(Ve||vt?pi:zi),ti&&j<1&&Ve||Ot(Ct+(j===1&&!vt?ei:0))}}w&&!Ze.tween&&!je&&!Ur&&Rt.restart(!0),o&&(ce||T&&j&&(j<1||!bs))&&fr(o.targets).forEach(function(Ri){return Ri.classList[Ve||T?"add":"remove"](o.className)}),s&&!O&&!B&&s(p),Nt&&!je?(O&&(Vt&&(te==="complete"?r.pause().totalProgress(1):te==="reset"?r.restart(!0).pause():te==="restart"?r.restart(!0):r[te]()),s&&s(p)),(ce||!bs)&&(c&&ce&&ks(p,c),X[ae]&&ks(p,X[ae]),T&&(j===1?p.kill(!1,1):X[ae]=0),ce||(ae=j===1?1:3,X[ae]&&ks(p,X[ae]))),E&&!Ve&&Math.abs(p.getVelocity())>(sr(E)?E:2500)&&(tr(p.callbackAnimation),W?W.progress(1):tr(r,te==="reverse"?1:!j,1))):O&&s&&!je&&s(p)}if(o0){var Ye=y?R/y.duration()*(y._caScrollDist||0):R;mr(Ye+(v._isFlipped?1:0)),o0(Ye)}l0&&l0(-R/y.duration()*(y._caScrollDist||0))}},p.enable=function(B,D){p.enabled||(p.enabled=!0,ze(M,"resize",or),U||ze(M,"scroll",S0),oe&&ze(a,"refreshInit",oe),B!==!1&&(p.progress=Qe=0,et=ct=he=xe()),D!==!1&&p.refresh())},p.getTween=function(B){return B&&Ze?Ze.tween:W},p.setPositions=function(B,D,P,R){if(y){var Ie=y.scrollTrigger,j=y.duration(),ye=Ie.end-Ie.start;B=Ie.start+ye*B/j,D=Ie.start+ye*D/j}p.refresh(!1,!1,{start:xa(B,P&&!!p._startClamp),end:xa(D,P&&!!p._endClamp)},R),p.update()},p.adjustPinSpacing=function(B){if(ke&&B){var D=ke.indexOf(L.d)+1;ke[D]=parseFloat(ke[D])+B+Me,ke[1]=parseFloat(ke[1])+B+Me,M0(ke)}},p.disable=function(B,D){if(p.enabled&&(B!==!1&&p.revert(!0,!0),p.enabled=p.isActive=!1,D||W&&W.pause(),Ft=0,He&&(He.uncache=1),oe&&Pe(a,"refreshInit",oe),Rt&&(Rt.pause(),Ze.tween&&Ze.tween.kill()&&(Ze.tween=0)),!U)){for(var P=V.length;P--;)if(V[P].scroller===M&&V[P]!==p)return;Pe(M,"resize",or),U||Pe(M,"scroll",S0)}},p.kill=function(B,D){p.disable(B,D),W&&!D&&W.kill(),l&&delete Is[l];var P=V.indexOf(p);P>=0&&V.splice(P,1),P===at&&tn>0&&at--,P=0,V.forEach(function(R){return R.scroller===p.scroller&&(P=1)}),P||lt||(p.scroll.rec=0),r&&(r.scrollTrigger=null,B&&r.revert({kill:!1}),D||r.kill()),dt&&[dt,pt,v,_t].forEach(function(R){return R.parentNode&&R.parentNode.removeChild(R)}),hr===p&&(hr=0),u&&(He&&(He.uncache=1),P=0,V.forEach(function(R){return R.pin===u&&P++}),P||(He.spacer=0)),t.onKill&&t.onKill(p)},V.push(p),p.enable(!1,!1),ii&&ii(p),r&&r.add&&!ve){var Z=p.update;p.update=function(){p.update=Z,H.cache++,K||_e||p.refresh()},I.delayedCall(.01,p.update),ve=.01,K=_e=0}else p.refresh();u&&kc()},a.register=function(t){return C0||(I=t||Ha(),qa()&&window.document&&a.enable(),C0=rr),C0},a.defaults=function(t){if(t)for(var r in t)jr[r]=t[r];return jr},a.disable=function(t,r){rr=0,V.forEach(function(s){return s[r?"kill":"disable"](t)}),Pe(Y,"wheel",S0),Pe(ne,"scroll",S0),clearInterval(Yr),Pe(ne,"touchcancel",$t),Pe(ee,"touchstart",$t),Gr(Pe,ne,"pointerdown,touchstart,mousedown",ka),Gr(Pe,ne,"pointerup,touchend,mouseup",Ta),sn.kill(),Wr(Pe);for(var n=0;n<H.length;n+=3)Xr(Pe,H[n],H[n+1]),Xr(Pe,H[n],H[n+2])},a.enable=function(){if(Y=window,ne=document,St=ne.documentElement,ee=ne.body,I&&(fr=I.utils.toArray,ar=I.utils.clamp,Ms=I.core.context||$t,ys=I.core.suppressOverwrites||$t,Os=Y.history.scrollRestoration||"auto",Ps=Y.pageYOffset||0,I.core.globals("ScrollTrigger",a),ee)){rr=1,E0=document.createElement("div"),E0.style.height="100vh",E0.style.position="absolute",$a(),pc(),pe.register(I),a.isTouch=pe.isTouch,Ii=pe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Es=pe.isTouch===1,ze(Y,"wheel",S0),As=[Y,ne,St,ee],I.matchMedia?(a.matchMedia=function(c){var d=I.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},I.addEventListener("matchMediaInit",function(){return Hs()}),I.addEventListener("matchMediaRevert",function(){return ja()}),I.addEventListener("matchMedia",function(){Qi(0,1),n0("matchMedia")}),I.matchMedia().add("(orientation: portrait)",function(){return Ts(),Ts})):console.warn("Requires GSAP 3.11.0 or later"),Ts(),ze(ne,"scroll",S0);var t=ee.hasAttribute("style"),r=ee.style,n=r.borderTopStyle,s=I.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=hi(ee),Se.m=Math.round(o.top+Se.sc())||0,Xe.m=Math.round(o.left+Xe.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),t||(ee.setAttribute("style",""),ee.removeAttribute("style")),Yr=setInterval(La,250),I.delayedCall(.5,function(){return Ur=0}),ze(ne,"touchcancel",$t),ze(ee,"touchstart",$t),Gr(ze,ne,"pointerdown,touchstart,mousedown",ka),Gr(ze,ne,"pointerup,touchend,mouseup",Ta),Ls=I.utils.checkPrefix("transform"),rn.push(Ls),C0=Je(),sn=I.delayedCall(.2,Qi).pause(),L0=[ne,"visibilitychange",function(){var c=Y.innerWidth,d=Y.innerHeight;ne.hidden?(wa=c,ya=d):(wa!==c||ya!==d)&&or()},ne,"DOMContentLoaded",Qi,Y,"load",Qi,Y,"resize",or],Wr(ze),V.forEach(function(c){return c.enable(0,1)}),l=0;l<H.length;l+=3)Xr(Pe,H[l],H[l+1]),Xr(Pe,H[l],H[l+2])}},a.config=function(t){"limitCallbacks"in t&&(bs=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(Yr)||(Yr=r)&&setInterval(La,r),"ignoreMobileResize"in t&&(Es=a.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Wr(Pe)||Wr(ze,t.autoRefreshEvents||"none"),Ra=(t.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(t,r){var n=st(t),s=H.indexOf(n),o=i0(n);~s&&H.splice(s,o?6:2),r&&(o?Ht.unshift(Y,r,ee,r,St,r):Ht.unshift(n,r))},a.clearMatchMedia=function(t){V.forEach(function(r){return r._ctx&&r._ctx.query===t&&r._ctx.kill(!0,!0)})},a.isInViewport=function(t,r,n){var s=(Tt(t)?st(t):t).getBoundingClientRect(),o=s[n?Zi:e0]*r||0;return n?s.right-o>0&&s.left+o<Y.innerWidth:s.bottom-o>0&&s.top+o<Y.innerHeight},a.positionInViewport=function(t,r,n){Tt(t)&&(t=st(t));var s=t.getBoundingClientRect(),o=s[n?Zi:e0],l=r==null?o/2:r in ln?ln[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return n?(s.left+l)/Y.innerWidth:(s.top+l)/Y.innerHeight},a.killAll=function(t){if(V.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var r=r0.killAll||[];r0={},r.forEach(function(n){return n()})}},a}();N.version="3.12.7";N.saveStyles=function(a){return a?fr(a).forEach(function(e){if(e&&e.style){var i=kt.indexOf(e);i>=0&&kt.splice(i,5),kt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),I.core.getCache(e),Ms())}}):kt};N.revert=function(a,e){return Hs(!a,e)};N.create=function(a,e){return new N(a,e)};N.refresh=function(a){return a?or(!0):(C0||N.register())&&Qi(!0)};N.update=function(a){return++H.cache&&fi(a===!0?2:0)};N.clearScrollMemory=Ja;N.maxScroll=function(a,e){return Kt(a,e?Xe:Se)};N.getScrollFunc=function(a,e){return di(st(a),e?Xe:Se)};N.getById=function(a){return Is[a]};N.getAll=function(){return V.filter(function(a){return a.vars.id!=="ScrollSmoother"})};N.isScrolling=function(){return!!zt};N.snapDirectional=qs;N.addEventListener=function(a,e){var i=r0[a]||(r0[a]=[]);~i.indexOf(e)||i.push(e)};N.removeEventListener=function(a,e){var i=r0[a],t=i&&i.indexOf(e);t>=0&&i.splice(t,1)};N.batch=function(a,e){var i=[],t={},r=e.interval||.016,n=e.batchMax||1e9,s=function(c,d){var f=[],g=[],u=I.delayedCall(r,function(){d(f,g),f=[],g=[]}).pause();return function(m){f.length||u.restart(!0),f.push(m.trigger),g.push(m),n<=f.length&&u.progress(1)}},o;for(o in e)t[o]=o.substr(0,2)==="on"&&$e(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return $e(n)&&(n=n(),ze(N,"refresh",function(){return n=e.batchMax()})),fr(a).forEach(function(l){var c={};for(o in t)c[o]=t[o];c.trigger=l,i.push(N.create(c))}),i};var za=function(e,i,t,r){return i>r?e(r):i<0&&e(0),t>r?(r-i)/(t-i):t<0?i/(i-t):1},Cs=function a(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(pe.isTouch?" pinch-zoom":""):"none",e===St&&a(ee,i)},Qr={auto:1,scroll:1},Ec=function(e){var i=e.event,t=e.target,r=e.axis,n=(i.changedTouches?i.changedTouches[0]:i).target,s=n._gsap||I.core.getCache(n),o=Je(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;n&&n!==ee&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Qr[(l=Pt(n)).overflowY]||Qr[l.overflowX]));)n=n.parentNode;s._isScroll=n&&n!==t&&!i0(n)&&(Qr[(l=Pt(n)).overflowY]||Qr[l.overflowX]),s._isScrollT=o}(s._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Qa=function(e,i,t,r){return pe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Ec,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return t&&ze(ne,pe.eventTypes[0],Oa,!1,!0)},onDisable:function(){return Pe(ne,pe.eventTypes[0],Oa,!0)}})},Mc=/(input|label|select|textarea)/i,Aa,Oa=function(e){var i=Mc.test(e.target.tagName);(i||Aa)&&(e._gsapAllow=!0,Aa=i)},Bc=function(e){Ki(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,t=i.normalizeScrollX,r=i.momentum,n=i.allowNestedScroll,s=i.onRelease,o,l,c=st(e.target)||St,d=I.core.globals().ScrollSmoother,f=d&&d.get(),g=Ii&&(e.content&&st(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=di(c,Se),m=di(c,Xe),h=1,_=(pe.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,x=0,b=$e(r)?function(){return r(o)}:function(){return r||2.8},T,w,k=Qa(c,e.type,!0,n),C=function(){return w=!1},y=$t,E=$t,S=function(){l=Kt(c,Se),E=ar(Ii?1:0,l),t&&(y=ar(0,Kt(c,Xe))),T=t0},L=function(){g._gsap.y=nr(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},O=function(){if(w){requestAnimationFrame(C);var Q=nr(o.deltaY/2),se=E(u.v-Q);if(g&&se!==u.v+u.offset){u.offset=se-u.v;var p=nr((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+p+", 0, 1)",g._gsap.y=p+"px",u.cacheID=H.cache,fi()}return!0}u.offset&&L(),w=!0},M,G,U,$,X=function(){S(),M.isActive()&&M.vars.scrollY>l&&(u()>l?M.progress(1)&&u(l):M.resetTo("scrollY",l))};return g&&I.set(g,{y:"+=0"}),e.ignoreCheck=function(A){return Ii&&A.type==="touchmove"&&O(A)||h>1.05&&A.type!=="touchstart"||o.isGesturing||A.touches&&A.touches.length>1},e.onPress=function(){w=!1;var A=h;h=nr((Y.visualViewport&&Y.visualViewport.scale||1)/_),M.pause(),A!==h&&Cs(c,h>1.01?!0:t?!1:"x"),G=m(),U=u(),S(),T=t0},e.onRelease=e.onGestureStart=function(A,Q){if(u.offset&&L(),!Q)$.restart(!0);else{H.cache++;var se=b(),p,oe;t&&(p=m(),oe=p+se*.05*-A.velocityX/.227,se*=za(m,p,oe,Kt(c,Xe)),M.vars.scrollX=y(oe)),p=u(),oe=p+se*.05*-A.velocityY/.227,se*=za(u,p,oe,Kt(c,Se)),M.vars.scrollY=E(oe),M.invalidate().duration(se).play(.01),(Ii&&M.vars.scrollY>=l||p>=l-1)&&I.to({},{onUpdate:X,duration:se})}s&&s(A)},e.onWheel=function(){M._ts&&M.pause(),Je()-x>1e3&&(T=0,x=Je())},e.onChange=function(A,Q,se,p,oe){if(t0!==T&&S(),Q&&t&&m(y(p[2]===Q?G+(A.startX-A.x):m()+Q-p[1])),se){u.offset&&L();var Ke=oe[2]===se,At=Ke?U+A.startY-A.y:u()+se-oe[1],he=E(At);Ke&&At!==he&&(U+=he-At),u(he)}(se||Q)&&fi()},e.onEnable=function(){Cs(c,t?!1:"x"),N.addEventListener("refresh",X),ze(Y,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),k.enable()},e.onDisable=function(){Cs(c,!0),Pe(Y,"resize",X),N.removeEventListener("refresh",X),k.kill()},e.lockAxis=e.lockAxis!==!1,o=new pe(e),o.iOS=Ii,Ii&&!u()&&u(1),Ii&&I.ticker.add($t),$=o._dc,M=I.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ka(u,u(),function(){return M.pause()})},onUpdate:fi,onComplete:$.vars.onComplete}),o};N.sort=function(a){if($e(a))return V.sort(a);var e=Y.pageYOffset||0;return N.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+Y.innerHeight}),V.sort(a||function(i,t){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};N.observe=function(a){return new pe(a)};N.normalizeScroll=function(a){if(typeof a>"u")return ot;if(a===!0&&ot)return ot.enable();if(a===!1){ot&&ot.kill(),ot=a;return}var e=a instanceof pe?a:Bc(a);return ot&&ot.target===e.target&&ot.kill(),i0(e.target)&&(ot=e),e};N.core={_getVelocityProp:Vr,_inputObserver:Qa,_scrollers:H,_proxies:Ht,bridge:{ss:function(){zt||n0("scrollStart"),zt=Je()},ref:function(){return je}}};Ha()&&I.registerPlugin(N);var Ic={threshold:.7},Za=Array.from(document.querySelectorAll(".out-of-question")),e1=document.getElementById("intro-grid-one"),t1=document.getElementById("intro-grid-two"),Pc=document.querySelector(".tiny-boy"),zc=document.querySelectorAll(".sad-child"),dn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&Za.forEach((t,r)=>{r===0&&setTimeout(()=>{t.classList.remove("out-of-question")},500),r===1&&(setTimeout(()=>{t.classList.remove("out-of-question")},1e3),setTimeout(()=>{t.classList.add("upn-out-of-question")},1750)),r===2&&(setTimeout(()=>{t.classList.remove("out-of-question")},1750),setTimeout(()=>{t.classList.add("upn-out-of-question")},2500),setTimeout(()=>{Za[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{e1.classList.add("get-up"),t1.classList.add("get-down")},3500),setTimeout(()=>{e1.remove(),t1.remove(),Pc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{zc.forEach(n=>{n.classList.remove("sad-child")})},4500),setTimeout(()=>{Js("class","balloon-ball","add","in-wind")},5e3))});else return})},Ic);var i1=document.getElementById("brianSecondPageBox"),Ac=document.getElementById("brianSecondChair"),Oc={threshold:.4},un=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&(i1.classList.remove("unseen"),Ac.classList.add("slide-chair-in"),i1.classList.add("brianUp"));else return})},Oc);var Dc={threshold:.7},D3=Array.from(document.querySelectorAll("iframe")),R3=document.querySelector(".marketing--pitch-box"),hn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log("func"),i.isIntersecting)i.isIntersecting&&console.log("here");else return})},Dc);var Pi=document.getElementById("homeMonitor"),V3=document.getElementById("mob_fl_arrow"),Y3=document.querySelector(".back--drop");var U3=document.querySelectorAll("iframe"),r1=a=>{if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(a.target),a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Pi.innerHTML=`
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
      
      `},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":Pi.innerHTML=`
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
      
      
      
      
      
      
      
      
      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},5);break;case"m--video":Pi.innerHTML=`
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
   
      
      
      `,setTimeout(()=>{document.querySelector(".movie--theater-screen").classList.add("glow"),document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":Pi.innerHTML=`
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
      `;let i=document.querySelector(".marketing--pitch-box");setTimeout(()=>{i.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":Pi.innerHTML=`
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
      `;let r=[...document.getElementsByTagName("li")],n=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{r.forEach(l=>{l.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":Pi.innerHTML=`
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

      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--contact":Pi.innerHTML=`
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
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":Pi.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":a.preventDefault(),vr();break;case"mob_fl_arrow":console.log("arrow clicked");let s=document.getElementById("fl_ex_list"),o=s.firstElementChild;s.appendChild(o),console.log(o);break}};Ei.registerPlugin(N);var fn="src/components/images/falling1.png",n1="src/components/images/falling2.png",gn="src/components/images/falling5.png",Vs="src/components/images/falling4.png",s1="src/components/images/falling6.png",Rc="src/components/images/panic1.png",o1="src/components/images/panic4.png",Fc="src/components/images/panic3.png",Nc=document.getElementById("image"),Ys=0,Us=[fn,n1,fn,s1,gn,Vs,gn,Vs,fn,gn,Vs,gn,s1,fn,n1],qc=[Rc,o1,Fc,o1];function Hc(){++Ys>=Us.length&&(Ys=0),Nc.src=Us[Ys]}var nd=document.getElementById("brianSecondPage"),sd=document.getElementById("brianSecondPageBox"),od=document.getElementById("switchFree"),ad=document.getElementById("switchPort"),ld=document.getElementById("freelancePresenter"),cd=document.getElementById("backCloud"),dd=document.querySelector(".switchwrap"),Vc=document.querySelector(".homeWrap"),Yc=document.querySelectorAll("#target"),ud=document.getElementById("launch"),hd=document.getElementById("clear"),Uc=!1,Wc=document.getElementById("top-target"),Gc=document.getElementById("hi"),Xc=document.getElementById("hiBox"),jc=document.getElementById("iam"),Jc=document.getElementById("iamBox"),$c=document.getElementById("brianBox"),Kc=document.getElementById("strout"),Qc=document.getElementById("stroutBox"),Zc=document.getElementById("title"),e2=document.getElementById("titleBox"),t2=document.querySelectorAll(".first-letters"),i2=document.getElementById("first-n"),a1=document.getElementById("fallingShell"),r2=document.getElementById("wrapper"),n2=document.getElementById("moodring"),s2=document.querySelectorAll(".cloudsForward"),o2=document.querySelectorAll(".cloudsBackwards"),l1=[...s2],c1=[...o2],fd=document.getElementById("remainder"),gd=document.getElementById("c1"),md=document.getElementById("c2"),pd=document.getElementById("c3"),_d=document.getElementById("c4"),vd=document.getElementById("c5"),wd=document.getElementById("c6"),yd=document.getElementById("c7"),bd=document.getElementById("c8"),xd=document.getElementById("c9"),kd=document.getElementById("c10"),Td=document.getElementById("c11"),a2=document.getElementById("sun"),l2=document.getElementById("moon"),Sd=document.getElementById("target"),Cd=document.getElementById("switchPort"),Ld=document.getElementById("brianSecondChair"),Ed=document.getElementById("brianBlurbP"),Md=document.getElementById("listOfSkills"),c2=document.querySelectorAll(".shrunk"),Bd=[...c2],Id=document.getElementById("listed_skills_media"),d2=document.getElementsByTagName("li"),Pd=[...d2],zd=document.getElementById("absolute-cloud"),Ad=document.getElementById("copy-gmail"),Od=document.getElementById("brianlinkedin"),Dd=document.getElementById("briangithub"),Rd=document.getElementById("resume-link"),Fd=document.querySelectorAll("iframe"),Nd=document.getElementById("fallingSecond"),qd=document.getElementById("castle"),u2=document.querySelectorAll("#introToServices"),h2=Array.from(document.querySelectorAll(".nav--link")),d1=()=>{Yc.forEach(r=>{un.observe(r)}),u2.forEach(r=>{dn.observe(r)}),hn,setInterval(Hc,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),n2.addEventListener("click",()=>{r2.classList.toggle("dark"),a2.classList.toggle("sunset"),l2.classList.toggle("sunset")});let e=()=>{l1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),c1.forEach(r=>{r.classList.add("clouds-movement-background")})},i=()=>{a1.classList.add("falling"),setTimeout(()=>{Uc=!0},3500)};window.addEventListener("load",()=>{Wc.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{Gc.classList.remove("translatedHi"),jc.classList.remove("translatedIam"),[...t2].forEach(n=>{n.classList.add("first-name-falling-in")}),Kc.classList.remove("translatedStrout"),Zc.classList.remove("translatedTitle"),setTimeout(()=>{e()},2e3),setTimeout(()=>{i()},3500)},1e3),setTimeout(()=>{t()},7500)}),i2.addEventListener("transitionend",function(){});let t=()=>{Xc.classList.add("up-and-out"),Jc.classList.add("up-and-out"),$c.classList.add("up-and-out"),Qc.classList.add("up-and-out"),e2.classList.add("up-and-out"),setTimeout(()=>{Us=qc},2e3),setTimeout(()=>{a.style.overflow="visible",a1.classList.add("down-and-out"),l1.forEach(r=>{r.classList.add("unseen")}),c1.forEach(r=>{r.classList.add("unseen")})},2500),setTimeout(()=>{Vc.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{h2.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),R0("andgo")},6500)}};Ei.registerPlugin(N);var mn="src/components/images/falling1.png",u1="src/components/images/falling2.png",pn="src/components/images/falling5.png",Ws="src/components/images/falling4.png",h1="src/components/images/falling6.png",f2="src/components/images/panic1.png",f1="src/components/images/panic4.png",g2="src/components/images/panic3.png",eu=document.getElementById("image");var m2=[mn,u1,mn,h1,pn,Ws,pn,Ws,mn,pn,Ws,pn,h1,mn,u1],p2=[f2,f1,g2,f1];function _2(){}var tu=document.getElementById("brianSecondPage"),iu=document.getElementById("brianSecondPageBox"),ru=document.getElementById("switchFree"),nu=document.getElementById("switchPort"),su=document.getElementById("freelancePresenter"),ou=document.getElementById("backCloud"),au=document.querySelector(".switchwrap"),v2=document.querySelector(".homeWrap"),w2=document.querySelectorAll("#target"),lu=document.getElementById("launch"),cu=document.getElementById("clear"),y2=!1,b2=document.getElementById("top-target"),x2=document.getElementById("hi"),k2=document.getElementById("hiBox"),T2=document.getElementById("iam"),S2=document.getElementById("iamBox"),C2=document.getElementById("brianBox"),L2=document.getElementById("strout"),E2=document.getElementById("stroutBox"),M2=document.getElementById("title"),B2=document.getElementById("titleBox"),I2=document.querySelectorAll(".first-letters"),P2=document.getElementById("first-n"),g1=document.getElementById("fallingShell"),z2=document.getElementById("wrapper"),A2=document.getElementById("moodring"),O2=document.querySelectorAll(".cloudsForward"),D2=document.querySelectorAll(".cloudsBackwards"),m1=[...O2],p1=[...D2],du=document.getElementById("remainder"),uu=document.getElementById("c1"),hu=document.getElementById("c2"),fu=document.getElementById("c3"),gu=document.getElementById("c4"),mu=document.getElementById("c5"),pu=document.getElementById("c6"),_u=document.getElementById("c7"),vu=document.getElementById("c8"),wu=document.getElementById("c9"),yu=document.getElementById("c10"),bu=document.getElementById("c11"),R2=document.getElementById("sun"),F2=document.getElementById("moon"),xu=document.getElementById("target"),ku=document.getElementById("switchPort"),Tu=document.getElementById("brianSecondChair"),Su=document.getElementById("brianBlurbP"),Cu=document.getElementById("listOfSkills"),N2=document.querySelectorAll(".shrunk"),Lu=[...N2],Eu=document.getElementById("listed_skills_media"),q2=document.getElementsByTagName("li"),Mu=[...q2],Bu=document.getElementById("absolute-cloud"),Iu=document.getElementById("copy-gmail"),Pu=document.getElementById("brianlinkedin"),zu=document.getElementById("briangithub"),Au=document.getElementById("resume-link"),Ou=document.querySelectorAll("iframe"),Du=document.getElementById("fallingSecond"),Ru=document.getElementById("castle"),H2=document.querySelectorAll("#introToServices"),V2=Array.from(document.querySelectorAll(".nav--link")),_1=()=>{console.log("in development ksipping animation"),w2.forEach(r=>{un.observe(r)}),H2.forEach(r=>{dn.observe(r)}),hn,setInterval(_2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),A2.addEventListener("click",()=>{z2.classList.toggle("dark"),R2.classList.toggle("sunset"),F2.classList.toggle("sunset")});let e=()=>{m1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),p1.forEach(r=>{r.classList.add("clouds-movement-background")})},i=()=>{g1.classList.add("falling"),setTimeout(()=>{y2=!0},0)};window.addEventListener("load",()=>{b2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{x2.classList.remove("translatedHi"),T2.classList.remove("translatedIam"),[...I2].forEach(n=>{n.classList.add("first-name-falling-in")}),L2.classList.remove("translatedStrout"),M2.classList.remove("translatedTitle"),setTimeout(()=>{e()},0),setTimeout(()=>{i()},0)},0),setTimeout(()=>{t()},0)}),P2.addEventListener("transitionend",function(){});let t=()=>{k2.classList.add("up-and-out"),S2.classList.add("up-and-out"),C2.classList.add("up-and-out"),E2.classList.add("up-and-out"),B2.classList.add("up-and-out"),setTimeout(()=>{m2=p2},0),setTimeout(()=>{a.style.overflow="visible",g1.classList.add("down-and-out"),m1.forEach(r=>{r.classList.add("unseen")}),p1.forEach(r=>{r.classList.add("unseen")})},0),setTimeout(()=>{v2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{V2.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),r1("intro")},0)}};Ei.registerPlugin(N);var Y2=!1;Y2?_1():d1();document.addEventListener("click",a=>{R0(a)});var Gu=document.getElementById("portgithub"),Xu=document.getElementById("mashagithub"),ju=document.getElementById("mashanetlify"),Ju=document.getElementById("fugagithub"),$u=document.getElementById("fuganetlify");wrapper.addEventListener("click",a=>{if(!(a.target.nodeName==="BUTTON"))return;switch(a.target.id){case"portgithub":s0("github.com/BrianStrout/Portfolio");break;case"mashagithub":s0("github.com/BrianStrout/masha");break;case"mashanetlify":s0("mashaoflisbon.netlify.app/");break;case"fugagithub":s0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":s0("lafugitiva.netlify.app/");break;case"rotaryyoutube":s0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":s0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var s0=a=>{window.open(`https://${a}`,"_blank")};var U2=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){U2=!0}}))}catch{}var Ku="onwheel"in document.createElement("div")?"wheel":"mousewheel";var W2=document.querySelectorAll(".web__process--presenter");W2.forEach(a=>{yn.observe(a)});yn.observe(document.getElementById("gridHeader"));var G2=document.querySelectorAll(".fademe");G2.forEach(a=>{$s.observe(a)});var X2=Ei.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});X2.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
