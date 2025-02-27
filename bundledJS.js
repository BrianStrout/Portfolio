(()=>{var A0=document.querySelector(".canvas"),Gs=!0,pn={frame:0},Ws=A0.getContext("2d"),p1=80,_n=[],_1=a=>`/src/components/images/animation/${a}.png`,v1=()=>{console.log("updateAnimationFrame has called in subFunction to populate animation slides");for(let a=0;a<p1;a++){let e=new Image;e.src=_1(a),_n.push(e)}console.log("loaded image gallery"),console.log(_n)},w1=a=>{console.log("rendering function flying"),Ws.clearRect(0,0,A0.width,A0.height),Ws.drawImage(_n[a],0,0,A0.width,A0.height)};function y1(a,e){let i=a,t=a,r=2e3,n=e-a,s=performance.now();function o(){let l=performance.now()-s,c=Math.min(l/r,1);c=1-Math.pow(1-c,3),i=Math.round(a+c*n),i!==t&&(t=i,console.log(t),w1(t)),c<1&&requestAnimationFrame(o)}requestAnimationFrame(o)}var Ri=a=>{console.log("UAF called on",a),a==="load"&&Gs&&(v1(),Gs=!1),typeof a=="number"&&(console.log("number time!"),console.log(pn),y1(pn.frame,a),pn.frame=a)};var b1={threshold:.6},j2=document.getElementById("websiteVideo"),vn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting){if(i.isIntersecting)switch(Ri("load"),console.log(i.target," io"),i.target.scrollIntoView({behavior:"smooth",block:"end"}),i.target.id){case"gridHeader":Ri(0);break;case"wpp__concept":Ri(19);break;case"wpp__copy":Ri(39);break;case"wpp__design":Ri(59);break;case"wpp__creation":Ri(79);break}}else return})},b1);function Xs(a,e,i,t,r){let n,s;if(a==="id")n=document.getElementById(`${e}`);else if(a==="class")s=Array.from(document.querySelectorAll(`.${e}`)),s.forEach(o=>{o.classList[i](`${t}`)});else{console.log("selector error");return}}var x1={threshold:.4},js=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(i.isIntersecting)i.isIntersecting&&i.target.classList.remove("fadeup");else return})},x1);var Js=()=>{document.getElementById("contactForm").innerHTML=`
    <p class="h">
      Thanks for reaching out friend, I will get back to you as soon as I can. In the meantime come find me on Instagram, Facebook, or Youtube.
    </p>
    `};var Ks=a=>{console.log("we are live in submitter about to to predef");let e=document.getElementById("contactForm"),i="service_9l2h8gg",t="template_36awvk9",r=document.getElementById("formMessage").value;emailjs.sendForm(i,t,e,"oYymItkIoREaVvBlM").then(n=>{console.log("SUCCESS!",n.status,n.text)}).catch(n=>{console.error(n.message),console.log("confirming bad catcher here"),document.getElementById("contactForm").innerHTML=`
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${r}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`}),Js()};var n3=document.getElementById("contactForm"),s3=document.getElementById("formName"),o3=document.getElementById("formEmail"),a3=document.getElementById("formMessage"),wn=!1,yn=!1,bn=!1,l0;function xn(){console.log("GOIGM FOR ALL"),wn&&yn&&bn?(console.log("all fields pass!"),Ks()):(console.log("field failure"),console.log(wn,yn,bn))}function k1(a){return l0=/^[a-z a-z]+$/gi,l0.test(a)?(console.log("name pass"),wn=!0,xn(),!0):(console.log("fail name"),!1)}function T1(a){return l0=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,l0.test(a)?(console.log("email pass"),yn=!0,xn(),!0):(console.log("not a valid email"),!1)}function S1(a){return l0=/.{8}/,l0.test(a)?(console.log("message pass"),bn=!0,xn(),!0):(console.log("fail"),!1)}var pr=()=>{console.log("validating?"),k1(document.getElementById("formName").value),T1(document.getElementById("formEmail").value),S1(document.getElementById("formMessage").value)};var ri=[{header:"Presence Auditing",description:"Start your next Marketing chapter with a full audit of your website\u2019s SEO and branding effectiveness to ensure maximum visibility and engagement. SEO & UX analysis Branding consistency review Competitor comparison Actionable improvement report",slug:"auditicon",image:"src/components/images/marketingicons/assess.png"},{header:"Strategy",description:"Develop a clear, effective plan to reach your audience and grow your business. Target audience research. Multi-channel strategy Growth-focused campaigns",slug:"straticon",image:"src/components/images/marketingicons/strategy.png"},{header:"Optimization",description:"Website SEO Optimize your site to rank higher and attract more organic traffic. Keyword optimization Technical SEO fixes Page speed & mobile improvements On-page & off-page SEO",slug:"optiicon",image:"src/components/images/marketingicons/optimize.png"},{header:"Topic Authority",description:" Establish your brand as an industry leader with high-value content. research and content creation, backlink targeting",slug:"authicon",image:"src/components/images/marketingicons/authorize.png"},{header:"Implementation",description:"Blog & article creation, Email & automation setup and campaigns, Social media execution, Ongoing performance analysis, Backlink strategy Social media content Thought leadership pieces, Implementing Your Marketing Strategy, Turn your strategy into action with expert execution and optimization.",slug:"implicon",image:"src/components/images/marketingicons/implement.png"}];var C1=document.getElementById("msHeader"),E1=document.getElementById("msParagraph"),$s=document.querySelector(".ms__icons"),Et=0;var kn,L1=a=>{$s.querySelector(".risen")&&(kn=$s.querySelector(".risen"),console.log(kn,"should be risen var"),kn.classList.remove("risen")),document.querySelector(`#${a}`).classList.add("risen")},M1=document.getElementById("msArrowLeft"),_r=4,B1=document.getElementById("msArrowRight"),vr=2,I1=a=>{console.log("in arrow"),console.log(a),_r=a-1,a===0&&(_r=4),vr=a+1,a===4&&(vr=0),Et<0&&(Et=ri.length-1),console.log(_r,vr),M1.style.backgroundImage=`url(/${ri[_r].image})`,B1.style.backgroundImage=`url(/${ri[vr].image})`},Qs=a=>{a==="left"&&(Et--,Et<0&&(Et=ri.length-1)),a==="right"&&(Et++,Et===ri.length&&(Et=0)),C1.textContent=ri[Et].header,E1.textContent=ri[Et].description,L1(ri[Et].slug),I1(Et)},Zs=a=>{console.log("marketing controller live",a),a.classList.contains("arrowLeft")&&(console.log("Left!"),Qs("left")),a.classList.contains("arrowRight")&&(console.log("Right!"),Qs("right"))};var q=document.querySelector("#sc__hello");var O0=a=>{if(console.log("new"),a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}if(a==="andgo"){document.querySelector(".hm--display").classList.remove("op0"),q=document.querySelector("#sc__hello"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(e=>{e.tagName&&e.tagName==="DIV"&&e.classList.add("hit")});return}if(a.target.classList.contains("arrow")&&Zs(a.target),a.target.classList.contains("nav--link")){console.log("NAV LINK NUMETAL!"),scrollTo(0,0);let e=document.querySelectorAll(".hit");e.length>0&&e.forEach(i=>{i.classList.remove("hit")}),document.querySelectorAll(".screen__card").forEach(i=>{i.classList.add("blur"),i.classList.remove("front__and-center")}),document.querySelectorAll(".fademe").forEach(i=>{i.classList.contains("fadeup")||i.classList.add("fadeup")})}switch(a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"submit":console.log("submitting in the new controller"),a.preventDefault(),pr();break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":console.log("is chets open?"),window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"port-port":codingProjectDisplay.innerHTML=`
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
        
        `;break;case"m--hi":q=document.querySelector("#sc__hello"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":q=document.querySelector("#sc__marketing"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":q=document.querySelector("#sc__websites"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--video":q=document.querySelector("#sc__video"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":q=document.querySelector("#sc__nerd"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")});let i=[...document.getElementsByTagName("li")],t=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{i.forEach(r=>{r.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":q=document.querySelector("#sc__reference"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":O0("m--contact");break;case"m--contact":q=document.querySelector("#sc__contact"),q.classList.remove("blur"),q.classList.add("front__and-center"),q.scrollTo({top:0,left:0,behavior:"instant"}),q.childNodes.forEach(r=>{r.tagName&&r.tagName==="DIV"&&r.classList.add("hit")}),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(r=>{r.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break}};function ni(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ao(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}var gt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},d0={duration:.5,overwrite:!1,delay:0},Vn,Fe,le,Mt=1e8,re=1/Mt,In=Math.PI*2,P1=In/4,z1=0,lo=Math.sqrt,A1=Math.cos,O1=Math.sin,Le=function(e){return typeof e=="string"},ge=function(e){return typeof e=="function"},oi=function(e){return typeof e=="number"},Lr=function(e){return typeof e>"u"},Xt=function(e){return typeof e=="object"},ft=function(e){return e!==!1},Yn=function(){return typeof window<"u"},wr=function(e){return ge(e)||Le(e)},co=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Pn=/(?:-?\.?\d|\.)+/gi,Un=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gn=/[+-]=-?[.\d]+/,uo=/[^,'"\[\]\s]+/gi,D1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Gt,zn,Wn,yt={},kr={},ho,fo=function(e){return(kr=u0(e,yt))&&We},Mr=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},H0=function(e,i){return!i&&console.warn(e)},go=function(e,i){return e&&(yt[e]=i)&&kr&&(kr[e]=i)||yt},V0=function(){return 0},R1={suppressEvents:!0,isStart:!0,kill:!1},yr={suppressEvents:!0,kill:!1},F1={suppressEvents:!0},Xn={},yi=[],An={},mo,ut={},Sn={},eo=30,br=[],jn="",Jn=function(e){var i=e[0],t,r;if(Xt(i)||ge(i)||(e=[e]),!(t=(i._gsap||{}).harness)){for(r=br.length;r--&&!br[r].targetTest(i););t=br[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Qn(e[r],t)))||e.splice(r,1);return e},bi=function(e){return e._gsap||Jn(Bt(e))[0]._gsap},Kn=function(e,i,t){return(t=e[i])&&ge(t)?e[i]():Lr(t)&&e.getAttribute&&e.getAttribute(i)||t},tt=function(e,i){return(e=e.split(",")).forEach(i)||e},me=function(e){return Math.round(e*1e5)/1e5||0},Te=function(e){return Math.round(e*1e7)/1e7||0},Vi=function(e,i){var t=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),t==="+"?e+r:t==="-"?e-r:t==="*"?e*r:e/r},N1=function(e,i){for(var t=i.length,r=0;e.indexOf(i[r])<0&&++r<t;);return r<t},Tr=function(){var e=yi.length,i=yi.slice(0),t,r;for(An={},yi.length=0,t=0;t<e;t++)r=i[t],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},po=function(e,i,t,r){yi.length&&!Fe&&Tr(),e.render(i,t,r||Fe&&i<0&&(e._initted||e._startAt)),yi.length&&!Fe&&Tr()},_o=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(uo).length<2?i:Le(e)?e.trim():e},vo=function(e){return e},bt=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},q1=function(e){return function(i,t){for(var r in t)r in i||r==="duration"&&e||r==="ease"||(i[r]=t[r])}},u0=function(e,i){for(var t in i)e[t]=i[t];return e},to=function a(e,i){for(var t in i)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=Xt(i[t])?a(e[t]||(e[t]={}),i[t]):i[t]);return e},Sr=function(e,i){var t={},r;for(r in e)r in i||(t[r]=e[r]);return t},F0=function(e){var i=e.parent||de,t=e.keyframes?q1(Ge(e.keyframes)):bt;if(ft(e.inherit))for(;i;)t(e,i.vars.defaults),i=i.parent||i._dp;return e},H1=function(e,i){for(var t=e.length,r=t===i.length;r&&t--&&e[t]===i[t];);return t<0},wo=function(e,i,t,r,n){t===void 0&&(t="_first"),r===void 0&&(r="_last");var s=e[r],o;if(n)for(o=i[n];s&&s[n]>o;)s=s._prev;return s?(i._next=s._next,s._next=i):(i._next=e[t],e[t]=i),i._next?i._next._prev=i:e[r]=i,i._prev=s,i.parent=i._dp=e,i},Br=function(e,i,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var n=i._prev,s=i._next;n?n._next=s:e[t]===i&&(e[t]=s),s?s._prev=n:e[r]===i&&(e[r]=n),i._next=i._prev=i.parent=null},xi=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fi=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},V1=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},On=function(e,i,t,r){return e._startAt&&(Fe?e._startAt.revert(yr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},Y1=function a(e){return!e||e._ts&&a(e.parent)},io=function(e){return e._repeat?h0(e._tTime,e=e.duration()+e._rDelay)*e:0},h0=function(e,i){var t=Math.floor(e=Te(e/i));return e&&t===e?t-1:t},Cr=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Ir=function(e){return e._end=Te(e._start+(e._tDur/Math.abs(e._ts||e._rts||re)||0))},Pr=function(e,i){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Te(t._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),Ir(e),t._dirty||Fi(t,e)),e},yo=function(e,i){var t;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(t=Cr(e.rawTime(),i),(!i._dur||G0(0,i.totalDuration(),t)-i._tTime>re)&&i.render(t,!0)),Fi(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-re}},Wt=function(e,i,t,r){return i.parent&&xi(i),i._start=Te((oi(t)?t:t||e!==de?Lt(e,t,i):e._time)+i._delay),i._end=Te(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),wo(e,i,"_first","_last",e._sort?"_start":0),Dn(i)||(e._recent=i),r||yo(e,i),e._ts<0&&Pr(e,e._tTime),e},bo=function(e,i){return(yt.ScrollTrigger||Mr("scrollTrigger",i))&&yt.ScrollTrigger.create(i,e)},xo=function(e,i,t,r,n){if(ts(e,i,n),!e._initted)return 1;if(!t&&e._pt&&!Fe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mo!==ht.frame)return yi.push(e),e._lazy=[n,r],1},U1=function a(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||a(i))},Dn=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},G1=function(e,i,t,r){var n=e.ratio,s=i<0||!i&&(!e._start&&U1(e)&&!(!e._initted&&Dn(e))||(e._ts<0||e._dp._ts<0)&&!Dn(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=G0(0,e._tDur,i),d=h0(l,o),e._yoyo&&d&1&&(s=1-s),d!==h0(e._tTime,o)&&(n=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==n||Fe||r||e._zTime===re||!i&&e._zTime){if(!e._initted&&xo(e,i,r,t,l))return;for(f=e._zTime,e._zTime=i||(t?re:0),t||(t=i&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;i<0&&On(e,i,t,!0),e._onUpdate&&!t&&wt(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&wt(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===s&&(s&&xi(e,1),!t&&!Fe&&(wt(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},W1=function(e,i,t){var r;if(t>i)for(r=e._first;r&&r._start<=t;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=t;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},f0=function(e,i,t,r){var n=e._repeat,s=Te(i)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=n?n<0?1e10:Te(s*(n+1)+e._rDelay*n):s,o>0&&!r&&Pr(e,e._tTime=e._tDur*o),e.parent&&Ir(e),t||Fi(e.parent,e),e},ro=function(e){return e instanceof Re?Fi(e):f0(e,e._dur)},X1={_start:0,endTime:V0,totalDuration:V0},Lt=function a(e,i,t){var r=e.labels,n=e._recent||X1,s=e.duration()>=Mt?n.endTime(!1):e._dur,o,l,c;return Le(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),c=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(i.substr(1))||0)*(c?(o<0?n:t).totalDuration()/100:1)):o<0?(i in r||(r[i]=s),r[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),c&&t&&(l=l/100*(Ge(t)?t[0]:t).totalDuration()),o>1?a(e,i.substr(0,o-1),t)+l:s+l)):i==null?s:+i},N0=function(e,i,t){var r=oi(i[1]),n=(r?2:1)+(e<2?0:1),s=i[n],o,l;if(r&&(s.duration=i[1]),s.parent=t,e){for(o=s,l=t;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ft(l.vars.inherit)&&l.parent;s.immediateRender=ft(o.immediateRender),e<2?s.runBackwards=1:s.startAt=i[n-1]}return new be(i[0],s,i[n+1])},ki=function(e,i){return e||e===0?i(e):i},G0=function(e,i,t){return t<e?e:t>i?i:t},Ne=function(e,i){return!Le(e)||!(i=D1.exec(e))?"":i[1]},j1=function(e,i,t){return ki(t,function(r){return G0(e,i,r)})},Rn=[].slice,ko=function(e,i){return e&&Xt(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Xt(e[0]))&&!e.nodeType&&e!==Gt},J1=function(e,i,t){return t===void 0&&(t=[]),e.forEach(function(r){var n;return Le(r)&&!i||ko(r,1)?(n=t).push.apply(n,Bt(r)):t.push(r)})||t},Bt=function(e,i,t){return le&&!i&&le.selector?le.selector(e):Le(e)&&!t&&(zn||!g0())?Rn.call((i||Wn).querySelectorAll(e),0):Ge(e)?J1(e,t):ko(e)?Rn.call(e,0):e?[e]:[]},Fn=function(e){return e=Bt(e)[0]||H0("Invalid scope")||{},function(i){var t=e.current||e.nativeElement||e;return Bt(i,t.querySelectorAll?t:t===e?H0("Invalid scope")||Wn.createElement("div"):e)}},To=function(e){return e.sort(function(){return .5-Math.random()})},So=function(e){if(ge(e))return e;var i=Xt(e)?e:{each:e},t=Ni(i.ease),r=i.from||0,n=parseFloat(i.base)||0,s={},o=r>0&&r<1,l=isNaN(r)||o,c=i.axis,d=r,f=r;return Le(r)?d=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],f=r[1]),function(g,u,m){var h=(m||i).length,_=s[h],x,b,T,w,k,C,y,L,S;if(!_){if(S=i.grid==="auto"?0:(i.grid||[1,Mt])[1],!S){for(y=-Mt;y<(y=m[S++].getBoundingClientRect().left)&&S<h;);S<h&&S--}for(_=s[h]=[],x=l?Math.min(S,h)*d-.5:r%S,b=S===Mt?0:l?h*f/S-.5:r/S|0,y=0,L=Mt,C=0;C<h;C++)T=C%S-x,w=b-(C/S|0),_[C]=k=c?Math.abs(c==="y"?w:T):lo(T*T+w*w),k>y&&(y=k),k<L&&(L=k);r==="random"&&To(_),_.max=y-L,_.min=L,_.v=h=(parseFloat(i.amount)||parseFloat(i.each)*(S>h?h-1:c?c==="y"?h/S:S:Math.max(S,h/S))||0)*(r==="edges"?-1:1),_.b=h<0?n-h:n,_.u=Ne(i.amount||i.each)||0,t=t&&h<0?Ao(t):t}return h=(_[g]-_.min)/_.max||0,Te(_.b+(t?t(h):h)*_.v)+_.u}},Nn=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var r=Te(Math.round(parseFloat(t)/e)*e*i);return(r-r%1)/i+(oi(t)?0:Ne(t))}},Co=function(e,i){var t=Ge(e),r,n;return!t&&Xt(e)&&(r=t=e.radius||Mt,e.values?(e=Bt(e.values),(n=!oi(e[0]))&&(r*=r)):e=Nn(e.increment)),ki(i,t?ge(e)?function(s){return n=e(s),Math.abs(n-s)<=r?n:s}:function(s){for(var o=parseFloat(n?s.x:s),l=parseFloat(n?s.y:0),c=Mt,d=0,f=e.length,g,u;f--;)n?(g=e[f].x-o,u=e[f].y-l,g=g*g+u*u):g=Math.abs(e[f]-o),g<c&&(c=g,d=f);return d=!r||c<=r?e[d]:s,n||d===s||oi(s)?d:d+Ne(s)}:Nn(e))},Eo=function(e,i,t,r){return ki(Ge(e)?!i:t===!0?!!(t=0):!r,function(){return Ge(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(i-e+t*.99))/t)*t*r)/r})},K1=function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(r){return i.reduce(function(n,s){return s(n)},r)}},$1=function(e,i){return function(t){return e(parseFloat(t))+(i||Ne(t))}},Q1=function(e,i,t){return Mo(e,i,0,1,t)},Lo=function(e,i,t){return ki(t,function(r){return e[~~i(r)]})},Z1=function a(e,i,t){var r=i-e;return Ge(e)?Lo(e,a(0,e.length),i):ki(t,function(n){return(r+(n-e)%r)%r+e})},el=function a(e,i,t){var r=i-e,n=r*2;return Ge(e)?Lo(e,a(0,e.length-1),i):ki(t,function(s){return s=(n+(s-e)%n)%n||0,e+(s>r?n-s:s)})},m0=function(e){for(var i=0,t="",r,n,s,o;~(r=e.indexOf("random(",i));)s=e.indexOf(")",r),o=e.charAt(r+7)==="[",n=e.substr(r+7,s-r-7).match(o?uo:Pn),t+=e.substr(i,r-i)+Eo(o?n:+n[0],o?0:+n[1],+n[2]||1e-5),i=s+1;return t+e.substr(i,e.length-i)},Mo=function(e,i,t,r,n){var s=i-e,o=r-t;return ki(n,function(l){return t+((l-e)/s*o||0)})},tl=function a(e,i,t,r){var n=isNaN(e+i)?0:function(u){return(1-u)*e+u*i};if(!n){var s=Le(e),o={},l,c,d,f,g;if(t===!0&&(r=1)&&(t=null),s)e={p:e},i={p:i};else if(Ge(e)&&!Ge(i)){for(d=[],f=e.length,g=f-2,c=1;c<f;c++)d.push(a(e[c-1],e[c]));f--,n=function(m){m*=f;var h=Math.min(g,~~m);return d[h](m-h)},t=i}else r||(e=u0(Ge(e)?[]:{},e));if(!d){for(l in i)Zn.call(o,e,l,"get",i[l]);n=function(m){return ns(m,o)||(s?e.p:e)}}}return ki(t,n)},no=function(e,i,t){var r=e.labels,n=Mt,s,o,l;for(s in r)o=r[s]-i,o<0==!!t&&o&&n>(o=Math.abs(o))&&(l=s,n=o);return l},wt=function(e,i,t){var r=e.vars,n=r[i],s=le,o=e._ctx,l,c,d;if(n)return l=r[i+"Params"],c=r.callbackScope||e,t&&yi.length&&Tr(),o&&(le=o),d=l?n.apply(c,l):n.call(c),le=s,d},D0=function(e){return xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Fe),e.progress()<1&&wt(e,"onInterrupt"),e},c0,Bo=[],Io=function(e){if(e)if(e=!e.name&&e.default||e,Yn()||e.headless){var i=e.name,t=ge(e),r=i&&!t&&e.init?function(){this._props=[]}:e,n={init:V0,render:ns,add:Zn,kill:_l,modifier:pl,rawVars:0},s={targetTest:0,get:0,getSetter:zr,aliases:{},register:0};if(g0(),e!==r){if(ut[i])return;bt(r,bt(Sr(e,n),s)),u0(r.prototype,u0(n,Sr(e,s))),ut[r.prop=i]=r,e.targetTest&&(br.push(r),Xn[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}go(i,r),e.register&&e.register(We,r,it)}else Bo.push(e)},ie=255,R0={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},Cn=function(e,i,t){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(t-i)*e*6:e<.5?t:e*3<2?i+(t-i)*(2/3-e)*6:i)*ie+.5|0},Po=function(e,i,t){var r=e?oi(e)?[e>>16,e>>8&ie,e&ie]:0:R0.black,n,s,o,l,c,d,f,g,u,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),R0[e])r=R0[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+n+n+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ie,r&ie,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ie,e&ie]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(Pn),!i)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,s=d<=.5?d*(c+1):d+c-d*c,n=d*2-s,r.length>3&&(r[3]*=1),r[0]=Cn(l+1/3,n,s),r[1]=Cn(l,n,s),r[2]=Cn(l-1/3,n,s);else if(~e.indexOf("="))return r=e.match(Un),t&&r.length<4&&(r[3]=1),r}else r=e.match(Pn)||R0.transparent;r=r.map(Number)}return i&&!m&&(n=r[0]/ie,s=r[1]/ie,o=r[2]/ie,f=Math.max(n,s,o),g=Math.min(n,s,o),d=(f+g)/2,f===g?l=c=0:(u=f-g,c=d>.5?u/(2-f-g):u/(f+g),l=f===n?(s-o)/u+(s<o?6:0):f===s?(o-n)/u+2:(n-s)/u+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),t&&r.length<4&&(r[3]=1),r},zo=function(e){var i=[],t=[],r=-1;return e.split(si).forEach(function(n){var s=n.match(Hi)||[];i.push.apply(i,s),t.push(r+=s.length+1)}),i.c=t,i},so=function(e,i,t){var r="",n=(e+r).match(si),s=i?"hsla(":"rgba(",o=0,l,c,d,f;if(!n)return e;if(n=n.map(function(g){return(g=Po(g,i,1))&&s+(i?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),t&&(d=zo(e),l=t.c,l.join(r)!==d.c.join(r)))for(c=e.replace(si,"1").split(Hi),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?n.shift()||s+"0,0,0,0)":(d.length?d:n.length?n:t).shift());if(!c)for(c=e.split(si),f=c.length-1;o<f;o++)r+=c[o]+n[o];return r+c[f]},si=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in R0)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),il=/hsl[a]?\(/,$n=function(e){var i=e.join(" "),t;if(si.lastIndex=0,si.test(i))return t=il.test(i),e[1]=so(e[1],t),e[0]=so(e[0],t,zo(e[1])),!0},Y0,ht=function(){var a=Date.now,e=500,i=33,t=a(),r=t,n=1e3/240,s=n,o=[],l,c,d,f,g,u,m=function h(_){var x=a()-r,b=_===!0,T,w,k,C;if((x>e||x<0)&&(t+=x-i),r+=x,k=r-t,T=k-s,(T>0||b)&&(C=++f.frame,g=k-f.time*1e3,f.time=k=k/1e3,s+=T+(T>=n?4:n-T),w=1),b||(l=c(h)),w)for(u=0;u<o.length;u++)o[u](k,g,C,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return g/(1e3/(_||60))},wake:function(){ho&&(!zn&&Yn()&&(Gt=zn=window,Wn=Gt.document||{},yt.gsap=We,(Gt.gsapVersions||(Gt.gsapVersions=[])).push(We.version),fo(kr||Gt.GreenSockGlobals||!Gt.gsap&&Gt||{}),Bo.forEach(Io)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(_){return setTimeout(_,s-f.time*1e3+1|0)},Y0=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Y0=0,c=V0},lagSmoothing:function(_,x){e=_||1/0,i=Math.min(x||33,e)},fps:function(_){n=1e3/(_||240),s=f.time*1e3+n},add:function(_,x,b){var T=x?function(w,k,C,y){_(w,k,C,y),f.remove(T)}:_;return f.remove(_),o[b?"unshift":"push"](T),g0(),T},remove:function(_,x){~(x=o.indexOf(_))&&o.splice(x,1)&&u>=x&&u--},_listeners:o},f}(),g0=function(){return!Y0&&ht.wake()},J={},rl=/^[\d.\-M][\d.\-,\s]/,nl=/["']/g,sl=function(e){for(var i={},t=e.substr(1,e.length-3).split(":"),r=t[0],n=1,s=t.length,o,l,c;n<s;n++)l=t[n],o=n!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),i[r]=isNaN(c)?c.replace(nl,"").trim():+c,r=l.substr(o+1).trim();return i},ol=function(e){var i=e.indexOf("(")+1,t=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<t?e.indexOf(")",t+1):t)},al=function(e){var i=(e+"").split("("),t=J[i[0]];return t&&i.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[sl(i[1])]:ol(e).split(",").map(_o)):J._CE&&rl.test(e)?J._CE("",e):t},Ao=function(e){return function(i){return 1-e(1-i)}},Oo=function a(e,i){for(var t=e._first,r;t;)t instanceof Re?a(t,i):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==i&&(t.timeline?a(t.timeline,i):(r=t._ease,t._ease=t._yEase,t._yEase=r,t._yoyo=i)),t=t._next},Ni=function(e,i){return e&&(ge(e)?e:J[e]||al(e))||i},Yi=function(e,i,t,r){t===void 0&&(t=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var n={easeIn:i,easeOut:t,easeInOut:r},s;return tt(e,function(o){J[o]=yt[o]=n,J[s=o.toLowerCase()]=t;for(var l in n)J[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=J[o+"."+l]=n[l]}),n},Do=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},En=function a(e,i,t){var r=i>=1?i:1,n=(t||(e?.3:.45))/(i<1?i:1),s=n/In*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*O1((d-s)*n)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Do(o);return n=In/n,l.config=function(c,d){return a(e,c,d)},l},Ln=function a(e,i){i===void 0&&(i=1.70158);var t=function(s){return s?--s*s*((i+1)*s+i)+1:0},r=e==="out"?t:e==="in"?function(n){return 1-t(1-n)}:Do(t);return r.config=function(n){return a(e,n)},r};tt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var i=e<5?e+1:e;Yi(a+",Power"+(i-1),e?function(t){return Math.pow(t,i)}:function(t){return t},function(t){return 1-Math.pow(1-t,i)},function(t){return t<.5?Math.pow(t*2,i)/2:1-Math.pow((1-t)*2,i)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Yi("Elastic",En("in"),En("out"),En());(function(a,e){var i=1/e,t=2*i,r=2.5*i,n=function(o){return o<i?a*o*o:o<t?a*Math.pow(o-1.5/e,2)+.75:o<r?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Yi("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Yi("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Yi("Circ",function(a){return-(lo(1-a*a)-1)});Yi("Sine",function(a){return a===1?1:-A1(a*P1)+1});Yi("Back",Ln("in"),Ln("out"),Ln());J.SteppedEase=J.steps=yt.SteppedEase={config:function(e,i){e===void 0&&(e=1);var t=1/e,r=e+(i?0:1),n=i?1:0,s=1-re;return function(o){return((r*G0(0,s,o)|0)+n)*t}}};d0.ease=J["quad.out"];tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return jn+=a+","+a+"Params,"});var Qn=function(e,i){this.id=z1++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:Kn,this.set=i?i.getSetter:zr},U0=function(){function a(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,f0(this,+i.duration,1,1),this.data=i.data,le&&(this._ctx=le,le.data.push(this)),Y0||ht.wake()}var e=a.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,f0(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(g0(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Pr(this,t),!n._dp||n.parent||yo(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Wt(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),po(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+io(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+io(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,r):this._repeat?h0(this._tTime,n)+1:1},e.timeScale=function(t,r){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Cr(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-re?0:this._rts,this.totalTime(G0(-Math.abs(this._delay),this._tDur,n),r!==!1),Ir(this),V1(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(g0(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wt(r,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(ft(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cr(r.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=F1);var r=Fe;return Fe=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Fe=r,this},e.globalTime=function(t){for(var r=this,n=arguments.length?t:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,ro(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,ro(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(Lt(this,t),ft(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,ft(r)),this._dur||(this._zTime=-re),this},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-re:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},e.isActive=function(){var t=this.parent||this._dp,r=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=r&&n<this.endTime(!0)-re)},e.eventCallback=function(t,r,n){var s=this.vars;return arguments.length>1?(r?(s[t]=r,n&&(s[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=r)):delete s[t],this):s[t]},e.then=function(t){var r=this;return new Promise(function(n){var s=ge(t)?t:vo,o=function(){var c=r.then;r.then=null,ge(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=c),n(s),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){D0(this)},a}();bt(U0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Re=function(a){ao(e,a);function e(t,r){var n;return t===void 0&&(t={}),n=a.call(this,t)||this,n.labels={},n.smoothChildTiming=!!t.smoothChildTiming,n.autoRemoveChildren=!!t.autoRemoveChildren,n._sort=ft(t.sortChildren),de&&Wt(t.parent||de,ni(n),r),t.reversed&&n.reverse(),t.paused&&n.paused(!0),t.scrollTrigger&&bo(ni(n),t.scrollTrigger),n}var i=e.prototype;return i.to=function(r,n,s){return N0(0,arguments,this),this},i.from=function(r,n,s){return N0(1,arguments,this),this},i.fromTo=function(r,n,s,o){return N0(2,arguments,this),this},i.set=function(r,n,s){return n.duration=0,n.parent=this,F0(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new be(r,n,Lt(this,s),1),this},i.call=function(r,n,s){return Wt(this,be.delayedCall(0,r,n),s)},i.staggerTo=function(r,n,s,o,l,c,d){return s.duration=n,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=d,s.parent=this,new be(r,s,Lt(this,l)),this},i.staggerFrom=function(r,n,s,o,l,c,d){return s.runBackwards=1,F0(s).immediateRender=ft(s.immediateRender),this.staggerTo(r,n,s,o,l,c,d)},i.staggerFromTo=function(r,n,s,o,l,c,d,f){return o.startAt=s,F0(o).immediateRender=ft(o.immediateRender),this.staggerTo(r,n,o,l,c,d,f)},i.render=function(r,n,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:Te(r),f=this._zTime<0!=r<0&&(this._initted||!c),g,u,m,h,_,x,b,T,w,k,C,y;if(this!==de&&d>l&&r>=0&&(d=l),d!==this._tTime||s||f){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),g=d,w=this._start,T=this._ts,x=!T,f&&(c||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,n,s);if(g=Te(d%_),d===l?(h=this._repeat,g=c):(k=Te(d/_),h=~~k,h&&h===k&&(g=c,h--),g>c&&(g=c)),k=h0(this._tTime,_),!o&&this._tTime&&k!==h&&this._tTime-k*_-this._dur<=0&&(k=h),C&&h&1&&(g=c-g,y=1),h!==k&&!this._lock){var L=C&&k&1,S=L===(C&&h&1);if(h<k&&(L=!L),o=L?0:d%c?c:d,this._lock=1,this.render(o||(y?0:Te(h*_)),n,!c)._lock=0,this._tTime=d,!n&&this.parent&&wt(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),o&&o!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Oo(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=W1(this,Te(o),Te(g)),b&&(d-=g-(g=b._start))),this._tTime=d,this._time=g,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&g&&!n&&!h&&(wt(this,"onStart"),this._tTime!==d))return this;if(g>=o&&r>=0)for(u=this._first;u;){if(m=u._next,(u._act||g>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,n,s);if(u.render(u._ts>0?(g-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(g-u._start)*u._ts,n,s),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=-re);break}}u=m}else{u=this._last;for(var E=r<0?r:g;u;){if(m=u._prev,(u._act||E<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(r,n,s);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,n,s||Fe&&(u._initted||u._startAt)),g!==this._time||!this._ts&&!x){b=0,m&&(d+=this._zTime=E?-re:re);break}}u=m}}if(b&&!n&&(this.pause(),b.render(g>=o?0:-re)._zTime=g>=o?1:-1,this._ts))return this._start=w,Ir(this),this.render(r,n,s);this._onUpdate&&!n&&wt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(w===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&xi(this,1),!n&&!(r<0&&!o)&&(d||o||!l)&&(wt(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var s=this;if(oi(n)||(n=Lt(this,n,r)),!(r instanceof U0)){if(Ge(r))return r.forEach(function(o){return s.add(o,n)}),this;if(Le(r))return this.addLabel(r,n);if(ge(r))r=be.delayedCall(0,r);else return this}return this!==r?Wt(this,r,n):this},i.getChildren=function(r,n,s,o){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=-Mt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof be?n&&l.push(c):(s&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,n,s)))),c=c._next;return l},i.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},i.remove=function(r){return Le(r)?this.removeLabel(r):ge(r)?this.killTweensOf(r):(r.parent===this&&Br(this,r),r===this._recent&&(this._recent=this._last),Fi(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(ht.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=Lt(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,s){var o=be.delayedCall(0,n||V0,s);return o.data="isPause",this._hasPause=1,Wt(this,o,Lt(this,r))},i.removePause=function(r){var n=this._first;for(r=Lt(this,r);n;)n._start===r&&n.data==="isPause"&&xi(n),n=n._next},i.killTweensOf=function(r,n,s){for(var o=this.getTweensOf(r,s),l=o.length;l--;)wi!==o[l]&&o[l].kill(r,n);return this},i.getTweensOf=function(r,n){for(var s=[],o=Bt(r),l=this._first,c=oi(n),d;l;)l instanceof be?N1(l._targets,o)&&(c?(!wi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&s.push(l):(d=l.getTweensOf(o,n)).length&&s.push.apply(s,d),l=l._next;return s},i.tweenTo=function(r,n){n=n||{};var s=this,o=Lt(s,r),l=n,c=l.startAt,d=l.onStart,f=l.onStartParams,g=l.immediateRender,u,m=be.to(s,bt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||re,onStart:function(){if(s.pause(),!u){var _=n.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());m._dur!==_&&f0(m,_,0,1).render(m._time,!0,!0),u=1}d&&d.apply(m,f||[])}},n));return g?m.render(0):m},i.tweenFromTo=function(r,n,s){return this.tweenTo(n,bt({startAt:{time:Lt(this,r)}},s))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),no(this,Lt(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),no(this,Lt(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},i.shiftChildren=function(r,n,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(n)for(c in l)l[c]>=s&&(l[c]+=r);return Fi(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return a.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Fi(this)},i.totalDuration=function(r){var n=0,s=this,o=s._last,l=Mt,c,d,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Wt(s,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(n-=d,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=d/s._ts,s._time-=d,s._tTime-=d),s.shiftChildren(-d,!1,-1/0),l=0),o._end>n&&o._ts&&(n=o._end),o=c;f0(s,s===de&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(de._ts&&(po(de,Cr(r,de)),mo=ht.frame),ht.frame>=eo){eo+=gt.autoSleep||120;var n=de._first;if((!n||!n._ts)&&gt.autoSleep&&ht._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ht.sleep()}}},e}(U0);bt(Re.prototype,{_lock:0,_hasPause:0,_forcing:0});var ll=function(e,i,t,r,n,s,o){var l=new it(this._pt,e,i,0,1,rs,null,n),c=0,d=0,f,g,u,m,h,_,x,b;for(l.b=t,l.e=r,t+="",r+="",(x=~r.indexOf("random("))&&(r=m0(r)),s&&(b=[t,r],s(b,e,i),t=b[0],r=b[1]),g=t.match(Tn)||[];f=Tn.exec(r);)m=f[0],h=r.substring(c,f.index),u?u=(u+1)%5:h.substr(-5)==="rgba("&&(u=1),m!==g[d++]&&(_=parseFloat(g[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:_,c:m.charAt(1)==="="?Vi(_,m)-_:parseFloat(m)-_,m:u&&u<4?Math.round:0},c=Tn.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Gn.test(r)||x)&&(l.e=0),this._pt=l,l},Zn=function(e,i,t,r,n,s,o,l,c,d){ge(r)&&(r=r(n||0,e,s));var f=e[i],g=t!=="get"?t:ge(f)?c?e[i.indexOf("set")||!ge(e["get"+i.substr(3)])?i:"get"+i.substr(3)](c):e[i]():f,u=ge(f)?c?fl:No:is,m;if(Le(r)&&(~r.indexOf("random(")&&(r=m0(r)),r.charAt(1)==="="&&(m=Vi(g,r)+(Ne(g)||0),(m||m===0)&&(r=m))),!d||g!==r||qn)return!isNaN(g*r)&&r!==""?(m=new it(this._pt,e,i,+g||0,r-(g||0),typeof f=="boolean"?ml:qo,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(i in e)&&Mr(i,r),ll.call(this,e,i,g,r,u,l||gt.stringFilter,c))},cl=function(e,i,t,r,n){if(ge(e)&&(e=q0(e,n,i,t,r)),!Xt(e)||e.style&&e.nodeType||Ge(e)||co(e))return Le(e)?q0(e,n,i,t,r):e;var s={},o;for(o in e)s[o]=q0(e[o],n,i,t,r);return s},es=function(e,i,t,r,n,s){var o,l,c,d;if(ut[e]&&(o=new ut[e]).init(n,o.rawVars?i[e]:cl(i[e],r,n,s,t),t,r,s)!==!1&&(t._pt=l=new it(t._pt,n,e,0,1,o.render,o,0,o.priority),t!==c0))for(c=t._ptLookup[t._targets.indexOf(n)],d=o._props.length;d--;)c[o._props[d]]=l;return o},wi,qn,ts=function a(e,i,t){var r=e.vars,n=r.ease,s=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,f=r.yoyoEase,g=r.keyframes,u=r.autoRevert,m=e._dur,h=e._startAt,_=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:_,T=e._overwrite==="auto"&&!Vn,w=e.timeline,k,C,y,L,S,E,O,M,W,U,K,X,A;if(w&&(!g||!n)&&(n="none"),e._ease=Ni(n,d0.ease),e._yEase=f?Ao(Ni(f===!0?n:f,d0.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(M=_[0]?bi(_[0]).harness:0,X=M&&r[M.prop],k=Sr(r,Xn),h&&(h._zTime<0&&h.progress(1),i<0&&d&&o&&!u?h.render(-1,!0):h.revert(d&&m?yr:R1),h._lazy=0),s){if(xi(e._startAt=be.set(_,bt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!h&&ft(l),startAt:null,delay:0,onUpdate:c&&function(){return wt(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Fe||!o&&!u)&&e._startAt.revert(yr),o&&m&&i<=0&&t<=0){i&&(e._zTime=i);return}}else if(d&&m&&!h){if(i&&(o=!1),y=bt({overwrite:!1,data:"isFromStart",lazy:o&&!h&&ft(l),immediateRender:o,stagger:0,parent:x},k),X&&(y[M.prop]=X),xi(e._startAt=be.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Fe?e._startAt.revert(yr):e._startAt.render(-1,!0)),e._zTime=i,!o)a(e._startAt,re,re);else if(!i)return}for(e._pt=e._ptCache=0,l=m&&ft(l)||l&&!m,C=0;C<_.length;C++){if(S=_[C],O=S._gsap||Jn(_)[C]._gsap,e._ptLookup[C]=U={},An[O.id]&&yi.length&&Tr(),K=b===_?C:b.indexOf(S),M&&(W=new M).init(S,X||k,e,K,b)!==!1&&(e._pt=L=new it(e._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(Q){U[Q]=L}),W.priority&&(E=1)),!M||X)for(y in k)ut[y]&&(W=es(y,k,e,K,S,b))?W.priority&&(E=1):U[y]=L=Zn.call(e,S,y,"get",k[y],K,b,0,r.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),T&&e._pt&&(wi=e,de.killTweensOf(S,U,e.globalTime(i)),A=!e.parent,wi=0),e._pt&&l&&(An[O.id]=1)}E&&ss(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!A,g&&i<=0&&w.render(Mt,!0,!0)},dl=function(e,i,t,r,n,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[i],d,f,g,u;if(!c)for(c=e._ptCache[i]=[],g=e._ptLookup,u=e._targets.length;u--;){if(d=g[u][i],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==i&&d.fp!==i;)d=d._next;if(!d)return qn=1,e.vars[i]="+=0",ts(e,o),qn=0,l?H0(i+" not eligible for reset"):1;c.push(d)}for(u=c.length;u--;)f=c[u],d=f._pt||f,d.s=(r||r===0)&&!n?r:d.s+(r||0)+s*d.c,d.c=t-d.s,f.e&&(f.e=me(t)+Ne(f.e)),f.b&&(f.b=d.s+Ne(f.b))},ul=function(e,i){var t=e[0]?bi(e[0]).harness:0,r=t&&t.aliases,n,s,o,l;if(!r)return i;n=u0({},i);for(s in r)if(s in n)for(l=r[s].split(","),o=l.length;o--;)n[l[o]]=n[s];return n},hl=function(e,i,t,r){var n=i.ease||r||"power1.inOut",s,o;if(Ge(i))o=t[e]||(t[e]=[]),i.forEach(function(l,c){return o.push({t:c/(i.length-1)*100,v:l,e:n})});else for(s in i)o=t[s]||(t[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:i[s],e:n})},q0=function(e,i,t,r,n){return ge(e)?e.call(i,t,r,n):Le(e)&&~e.indexOf("random(")?m0(e):e},Ro=jn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fo={};tt(Ro+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Fo[a]=1});var be=function(a){ao(e,a);function e(t,r,n,s){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=a.call(this,s?r:F0(r))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,g=l.stagger,u=l.overwrite,m=l.keyframes,h=l.defaults,_=l.scrollTrigger,x=l.yoyoEase,b=r.parent||de,T=(Ge(t)||co(t)?oi(t[0]):"length"in r)?[t]:Bt(t),w,k,C,y,L,S,E,O;if(o._targets=T.length?Jn(T):H0("GSAP target "+t+" not found. https://gsap.com",!gt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||g||wr(c)||wr(d)){if(r=o.vars,w=o.timeline=new Re({data:"nested",defaults:h||{},targets:b&&b.data==="nested"?b.vars.targets:T}),w.kill(),w.parent=w._dp=ni(o),w._start=0,g||wr(c)||wr(d)){if(y=T.length,E=g&&So(g),Xt(g))for(L in g)~Ro.indexOf(L)&&(O||(O={}),O[L]=g[L]);for(k=0;k<y;k++)C=Sr(r,Fo),C.stagger=0,x&&(C.yoyoEase=x),O&&u0(C,O),S=T[k],C.duration=+q0(c,ni(o),k,S,T),C.delay=(+q0(d,ni(o),k,S,T)||0)-o._delay,!g&&y===1&&C.delay&&(o._delay=d=C.delay,o._start+=d,C.delay=0),w.to(S,C,E?E(k,S,T):0),w._ease=J.none;w.duration()?c=d=0:o.timeline=0}else if(m){F0(bt(w.vars.defaults,{ease:"none"})),w._ease=Ni(m.ease||r.ease||"none");var M=0,W,U,K;if(Ge(m))m.forEach(function(X){return w.to(T,X,">")}),w.duration();else{C={};for(L in m)L==="ease"||L==="easeEach"||hl(L,m[L],C,m.easeEach);for(L in C)for(W=C[L].sort(function(X,A){return X.t-A.t}),M=0,k=0;k<W.length;k++)U=W[k],K={ease:U.e,duration:(U.t-(k?W[k-1].t:0))/100*c},K[L]=U.v,w.to(T,K,M),M+=K.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return u===!0&&!Vn&&(wi=ni(o),de.killTweensOf(T),wi=0),Wt(b,ni(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!m&&o._start===Te(b._time)&&ft(f)&&Y1(ni(o))&&b.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-d)||0)),_&&bo(ni(o),_),o}var i=e.prototype;return i.render=function(r,n,s){var o=this._time,l=this._tDur,c=this._dur,d=r<0,f=r>l-re&&!d?l:r<re?0:r,g,u,m,h,_,x,b,T,w;if(!c)G1(this,r,n,s);else if(f!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(g=f,T=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+r,n,s);if(g=Te(f%h),f===l?(m=this._repeat,g=c):(_=Te(f/h),m=~~_,m&&m===_?(g=c,m--):g>c&&(g=c)),x=this._yoyo&&m&1,x&&(w=this._yEase,g=c-g),_=h0(this._tTime,h),g===o&&!s&&this._initted&&m===_)return this._tTime=f,this;m!==_&&(T&&this._yEase&&Oo(T,x),this.vars.repeatRefresh&&!x&&!this._lock&&g!==h&&this._initted&&(this._lock=s=1,this.render(Te(h*m),!0).invalidate()._lock=0))}if(!this._initted){if(xo(this,d?r:g,s,n,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,n,s)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(w||this._ease)(g/c),this._from&&(this.ratio=b=1-b),g&&!o&&!n&&!m&&(wt(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;T&&T.render(r<0?r:T._dur*T._ease(g/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(d&&On(this,r,n,s),wt(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!n&&this.parent&&wt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&On(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&xi(this,1),!n&&!(d&&!o)&&(f||o||x)&&(wt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,s,o,l){Y0||ht.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||ts(this,c),d=this._ease(c/this._dur),dl(this,r,n,s,o,d,c,l)?this.resetTo(r,n,s,o,1):(Pr(this,0),this.parent||wo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?D0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,wi&&wi.vars.overwrite!==!0)._first||D0(this),this.parent&&s!==this.timeline.totalDuration()&&f0(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=r?Bt(r):o,c=this._ptLookup,d=this._pt,f,g,u,m,h,_,x;if((!n||n==="all")&&H1(o,l))return n==="all"&&(this._pt=0),D0(this);for(f=this._op=this._op||[],n!=="all"&&(Le(n)&&(h={},tt(n,function(b){return h[b]=1}),n=h),n=ul(o,n)),x=o.length;x--;)if(~l.indexOf(o[x])){g=c[x],n==="all"?(f[x]=n,m=g,u={}):(u=f[x]=f[x]||{},m=n);for(h in m)_=g&&g[h],_&&((!("kill"in _.d)||_.d.kill(h)===!0)&&Br(this,_,"_pt"),delete g[h]),u!=="all"&&(u[h]=1)}return this._initted&&!this._pt&&d&&D0(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return N0(1,arguments)},e.delayedCall=function(r,n,s,o){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,n,s){return N0(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,s){return de.killTweensOf(r,n,s)},e}(U0);bt(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tt("staggerTo,staggerFrom,staggerFromTo",function(a){be[a]=function(){var e=new Re,i=Rn.call(arguments,0);return i.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,i)}});var is=function(e,i,t){return e[i]=t},No=function(e,i,t){return e[i](t)},fl=function(e,i,t,r){return e[i](r.fp,t)},gl=function(e,i,t){return e.setAttribute(i,t)},zr=function(e,i){return ge(e[i])?No:Lr(e[i])&&e.setAttribute?gl:is},qo=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},ml=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},rs=function(e,i){var t=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+r,t=t._next;r+=i.c}i.set(i.t,i.p,r,i)},ns=function(e,i){for(var t=i._pt;t;)t.r(e,t.d),t=t._next},pl=function(e,i,t,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(e,i,t),n=s},_l=function(e){for(var i=this._pt,t,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?Br(this,i,"_pt"):i.dep||(t=1),i=r;return!t},vl=function(e,i,t,r){r.mSet(e,i,r.m.call(r.tween,t,r.mt),r)},ss=function(e){for(var i=e._pt,t,r,n,s;i;){for(t=i._next,r=n;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:s)?i._prev._next=i:n=i,(i._next=r)?r._prev=i:s=i,i=t}e._pt=n},it=function(){function a(i,t,r,n,s,o,l,c,d){this.t=t,this.s=n,this.c=s,this.p=r,this.r=o||qo,this.d=l||this,this.set=c||is,this.pr=d||0,this._next=i,i&&(i._prev=this)}var e=a.prototype;return e.modifier=function(t,r,n){this.mSet=this.mSet||this.set,this.set=vl,this.m=t,this.mt=n,this.tween=r},a}();tt(jn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Xn[a]=1});yt.TweenMax=yt.TweenLite=be;yt.TimelineLite=yt.TimelineMax=Re;de=new Re({sortChildren:!1,defaults:d0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gt.stringFilter=$n;var qi=[],xr={},wl=[],oo=0,yl=0,Mn=function(e){return(xr[e]||wl).map(function(i){return i()})},Hn=function(){var e=Date.now(),i=[];e-oo>2&&(Mn("matchMediaInit"),qi.forEach(function(t){var r=t.queries,n=t.conditions,s,o,l,c;for(o in r)s=Gt.matchMedia(r[o]).matches,s&&(l=1),s!==n[o]&&(n[o]=s,c=1);c&&(t.revert(),l&&i.push(t))}),Mn("matchMediaRevert"),i.forEach(function(t){return t.onMatch(t,function(r){return t.add(null,r)})}),oo=e,Mn("matchMedia"))},Ho=function(){function a(i,t){this.selector=t&&Fn(t),this.data=[],this._r=[],this.isReverted=!1,this.id=yl++,i&&this.add(i)}var e=a.prototype;return e.add=function(t,r,n){ge(t)&&(n=r,r=t,t=ge);var s=this,o=function(){var c=le,d=s.selector,f;return c&&c!==s&&c.data.push(s),n&&(s.selector=Fn(n)),le=s,f=r.apply(s,arguments),ge(f)&&s._r.push(f),le=c,s.selector=d,s.isReverted=!1,f};return s.last=o,t===ge?o(s,function(l){return s.add(null,l)}):t?s[t]=o:o},e.ignore=function(t){var r=le;le=null,t(this),le=r},e.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof a?t.push.apply(t,r.getTweens()):r instanceof be&&!(r.parent&&r.parent.data==="nested")&&t.push(r)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,r){var n=this;if(t?function(){for(var o=n.getTweens(),l=n.data.length,c;l--;)c=n.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(t)}),l=n.data.length;l--;)c=n.data[l],c instanceof Re?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(t);n._r.forEach(function(d){return d(t,n)}),n.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=qi.length;s--;)qi[s].id===this.id&&qi.splice(s,1)},e.revert=function(t){this.kill(t||{})},a}(),bl=function(){function a(i){this.contexts=[],this.scope=i,le&&le.data.push(this)}var e=a.prototype;return e.add=function(t,r,n){Xt(t)||(t={matches:t});var s=new Ho(0,n||this.scope),o=s.conditions={},l,c,d;le&&!s.selector&&(s.selector=le.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=t;for(c in t)c==="all"?d=1:(l=Gt.matchMedia(t[c]),l&&(qi.indexOf(s)<0&&qi.push(s),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Hn):l.addEventListener("change",Hn)));return d&&r(s,function(f){return s.add(null,f)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(r){return r.kill(t,!0)})},a}(),Er={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];i.forEach(function(r){return Io(r)})},timeline:function(e){return new Re(e)},getTweensOf:function(e,i){return de.getTweensOf(e,i)},getProperty:function(e,i,t,r){Le(e)&&(e=Bt(e)[0]);var n=bi(e||{}).get,s=t?vo:_o;return t==="native"&&(t=""),e&&(i?s((ut[i]&&ut[i].get||n)(e,i,t,r)):function(o,l,c){return s((ut[o]&&ut[o].get||n)(e,o,l,c))})},quickSetter:function(e,i,t){if(e=Bt(e),e.length>1){var r=e.map(function(d){return We.quickSetter(d,i,t)}),n=r.length;return function(d){for(var f=n;f--;)r[f](d)}}e=e[0]||{};var s=ut[i],o=bi(e),l=o.harness&&(o.harness.aliases||{})[i]||i,c=s?function(d){var f=new s;c0._pt=0,f.init(e,t?d+t:d,c0,0,[e]),f.render(1,f),c0._pt&&ns(1,c0)}:o.set(e,l);return s?c:function(d){return c(e,l,t?d+t:d,o,1)}},quickTo:function(e,i,t){var r,n=We.to(e,bt((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),t||{})),s=function(l,c,d){return n.resetTo(i,l,c,d)};return s.tween=n,s},isTweening:function(e){return de.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ni(e.ease,d0.ease)),to(d0,e||{})},config:function(e){return to(gt,e||{})},registerEffect:function(e){var i=e.name,t=e.effect,r=e.plugins,n=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ut[o]&&!yt[o]&&H0(i+" effect requires "+o+" plugin.")}),Sn[i]=function(o,l,c){return t(Bt(o),bt(l||{},n),c)},s&&(Re.prototype[i]=function(o,l,c){return this.add(Sn[i](o,Xt(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,i){J[e]=Ni(i)},parseEase:function(e,i){return arguments.length?Ni(e,i):J},getById:function(e){return de.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var t=new Re(e),r,n;for(t.smoothChildTiming=ft(e.smoothChildTiming),de.remove(t),t._dp=0,t._time=t._tTime=de._time,r=de._first;r;)n=r._next,(i||!(!r._dur&&r instanceof be&&r.vars.onComplete===r._targets[0]))&&Wt(t,r,r._start-r._delay),r=n;return Wt(de,t,0),t},context:function(e,i){return e?new Ho(e,i):le},matchMedia:function(e){return new bl(e)},matchMediaRefresh:function(){return qi.forEach(function(e){var i=e.conditions,t,r;for(r in i)i[r]&&(i[r]=!1,t=1);t&&e.revert()})||Hn()},addEventListener:function(e,i){var t=xr[e]||(xr[e]=[]);~t.indexOf(i)||t.push(i)},removeEventListener:function(e,i){var t=xr[e],r=t&&t.indexOf(i);r>=0&&t.splice(r,1)},utils:{wrap:Z1,wrapYoyo:el,distribute:So,random:Eo,snap:Co,normalize:Q1,getUnit:Ne,clamp:j1,splitColor:Po,toArray:Bt,selector:Fn,mapRange:Mo,pipe:K1,unitize:$1,interpolate:tl,shuffle:To},install:fo,effects:Sn,ticker:ht,updateRoot:Re.updateRoot,plugins:ut,globalTimeline:de,core:{PropTween:it,globals:go,Tween:be,Timeline:Re,Animation:U0,getCache:bi,_removeLinkedListItem:Br,reverting:function(){return Fe},context:function(e){return e&&le&&(le.data.push(e),e._ctx=le),le},suppressOverwrites:function(e){return Vn=e}}};tt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Er[a]=be[a]});ht.add(Re.updateRoot);c0=Er.to({},{duration:0});var xl=function(e,i){for(var t=e._pt;t&&t.p!==i&&t.op!==i&&t.fp!==i;)t=t._next;return t},kl=function(e,i){var t=e._targets,r,n,s;for(r in i)for(n=t.length;n--;)s=e._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=xl(s,r)),s&&s.modifier&&s.modifier(i[r],e,t[n],r))},Bn=function(e,i){return{name:e,rawVars:1,init:function(r,n,s){s._onInit=function(o){var l,c;if(Le(n)&&(l={},tt(n,function(d){return l[d]=1}),n=l),i){l={};for(c in n)l[c]=i(n[c]);n=l}kl(o,n)}}}},We=Er.registerPlugin({name:"attr",init:function(e,i,t,r,n){var s,o,l;this.tween=t;for(s in i)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",i[s],r,n,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,i){for(var t=i._pt;t;)Fe?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",init:function(e,i){for(var t=i.length;t--;)this.add(e,t,e[t]||0,i[t],0,0,0,0,0,1)}},Bn("roundProps",Nn),Bn("modifiers"),Bn("snap",Co))||Er;be.version=Re.version=We.version="3.12.7";ho=1;Yn()&&g0();var Tl=J.Power0,Sl=J.Power1,Cl=J.Power2,El=J.Power3,Ll=J.Power4,Ml=J.Linear,Bl=J.Quad,Il=J.Cubic,Pl=J.Quart,zl=J.Quint,Al=J.Strong,Ol=J.Elastic,Dl=J.Back,Rl=J.SteppedEase,Fl=J.Bounce,Nl=J.Sine,ql=J.Expo,Hl=J.Circ;var Vo,Ti,_0,us,Xi,Vl,Yo,hs,Yl=function(){return typeof window<"u"},li={},Wi=180/Math.PI,v0=Math.PI/180,p0=Math.atan2,Uo=1e8,fs=/([A-Z])/g,Ul=/(left|right|width|margin|padding|x)/i,Gl=/[\s,\(]\S/,jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},as=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Wl=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},Xl=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},jl=function(e,i){var t=i.s+i.c*e;i.set(i.t,i.p,~~(t+(t<0?-.5:.5))+i.u,i)},Qo=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},Zo=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},Jl=function(e,i,t){return e.style[i]=t},Kl=function(e,i,t){return e.style.setProperty(i,t)},$l=function(e,i,t){return e._gsap[i]=t},Ql=function(e,i,t){return e._gsap.scaleX=e._gsap.scaleY=t},Zl=function(e,i,t,r,n){var s=e._gsap;s.scaleX=s.scaleY=t,s.renderTransform(n,s)},ec=function(e,i,t,r,n){var s=e._gsap;s[i]=t,s.renderTransform(n,s)},ue="transform",mt=ue+"Origin",tc=function a(e,i){var t=this,r=this.target,n=r.style,s=r._gsap;if(e in li&&n){if(this.tfm=this.tfm||{},e!=="transform")e=jt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return t.tfm[o]=ai(r,o)}):this.tfm[e]=s.x?s[e]:ai(r,e),e===mt&&(this.tfm.zOrigin=s.zOrigin);else return jt.transform.split(",").forEach(function(o){return a.call(t,o,i)});if(this.props.indexOf(ue)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(mt,i,"")),e=ue}(n||i)&&this.props.push(e,i,n[e])},ea=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ic=function(){var e=this.props,i=this.target,t=i.style,r=i._gsap,n,s;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?i[e[n]](e[n+2]):i[e[n]]=e[n+2]:e[n+2]?t[e[n]]=e[n+2]:t.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(fs,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),n=hs(),(!n||!n.isStart)&&!t[ue]&&(ea(t),r.zOrigin&&t[mt]&&(t[mt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ta=function(e,i){var t={target:e,props:[],revert:ic,save:tc};return e._gsap||We.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return t.save(r)}),t},ia,ls=function(e,i){var t=Ti.createElementNS?Ti.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ti.createElement(e);return t&&t.style?t:Ti.createElement(e)},Jt=function a(e,i,t){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(fs,"-$1").toLowerCase())||r.getPropertyValue(i)||!t&&a(e,w0(i)||i,1)||""},Go="O,Moz,ms,Ms,Webkit".split(","),w0=function(e,i,t){var r=i||Xi,n=r.style,s=5;if(e in n&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Go[s]+e in n););return s<0?null:(s===3?"ms":s>=0?Go[s]:"")+e},cs=function(){Yl()&&window.document&&(Vo=window,Ti=Vo.document,_0=Ti.documentElement,Xi=ls("div")||{style:{}},Vl=ls("div"),ue=w0(ue),mt=ue+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ia=!!w0("perspective"),hs=We.core.reverting,us=1)},Wo=function(e){var i=e.ownerSVGElement,t=ls("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",t.appendChild(r),_0.appendChild(t);try{n=r.getBBox()}catch{}return t.removeChild(r),_0.removeChild(t),n},Xo=function(e,i){for(var t=i.length;t--;)if(e.hasAttribute(i[t]))return e.getAttribute(i[t])},ra=function(e){var i,t;try{i=e.getBBox()}catch{i=Wo(e),t=1}return i&&(i.width||i.height)||t||(i=Wo(e)),i&&!i.width&&!i.x&&!i.y?{x:+Xo(e,["x","cx","x1"])||0,y:+Xo(e,["y","cy","y1"])||0,width:0,height:0}:i},na=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ra(e))},ji=function(e,i){if(i){var t=e.style,r;i in li&&i!==mt&&(i=ue),t.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),t.removeProperty(r==="--"?i:i.replace(fs,"-$1").toLowerCase())):t.removeAttribute(i)}},Si=function(e,i,t,r,n,s){var o=new it(e._pt,i,t,0,1,s?Zo:Qo);return e._pt=o,o.b=r,o.e=n,e._props.push(t),o},jo={deg:1,rad:1,turn:1},rc={grid:1,flex:1},Ci=function a(e,i,t,r){var n=parseFloat(t)||0,s=(t+"").trim().substr((n+"").length)||"px",o=Xi.style,l=Ul.test(i),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,g=r==="px",u=r==="%",m,h,_,x;if(r===s||!n||jo[r]||jo[s])return n;if(s!=="px"&&!g&&(n=a(e,i,t,"px")),x=e.getCTM&&na(e),(u||s==="%")&&(li[i]||~i.indexOf("adius")))return m=x?e.getBBox()[l?"width":"height"]:e[d],me(u?n/m*f:n/100*m);if(o[l?"width":"height"]=f+(g?s:r),h=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Ti||!h.appendChild)&&(h=Ti.body),_=h._gsap,_&&u&&_.width&&l&&_.time===ht.time&&!_.uncache)return me(n/_.width*f);if(u&&(i==="height"||i==="width")){var b=e.style[i];e.style[i]=f+r,m=e[d],b?e.style[i]=b:ji(e,i)}else(u||s==="%")&&!rc[Jt(h,"display")]&&(o.position=Jt(e,"position")),h===e&&(o.position="static"),h.appendChild(Xi),m=Xi[d],h.removeChild(Xi),o.position="absolute";return l&&u&&(_=bi(h),_.time=ht.time,_.width=h[d]),me(g?m*n/f:m&&n?f/m*n:0)},ai=function(e,i,t,r){var n;return us||cs(),i in jt&&i!=="transform"&&(i=jt[i],~i.indexOf(",")&&(i=i.split(",")[0])),li[i]&&i!=="transform"?(n=j0(e,r),n=i!=="transformOrigin"?n[i]:n.svg?n.origin:Or(Jt(e,mt))+" "+n.zOrigin+"px"):(n=e.style[i],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Ar[i]&&Ar[i](e,i,t)||Jt(e,i)||Kn(e,i)||(i==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?Ci(e,i,n,t)+t:n},nc=function(e,i,t,r){if(!t||t==="none"){var n=w0(i,e,1),s=n&&Jt(e,n,1);s&&s!==t?(i=n,t=s):i==="borderColor"&&(t=Jt(e,"borderTopColor"))}var o=new it(this._pt,e.style,i,0,1,rs),l=0,c=0,d,f,g,u,m,h,_,x,b,T,w,k;if(o.b=t,o.e=r,t+="",r+="",r==="auto"&&(h=e.style[i],e.style[i]=r,r=Jt(e,i)||r,h?e.style[i]=h:ji(e,i)),d=[t,r],$n(d),t=d[0],r=d[1],g=t.match(Hi)||[],k=r.match(Hi)||[],k.length){for(;f=Hi.exec(r);)_=f[0],b=r.substring(l,f.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),_!==(h=g[c++]||"")&&(u=parseFloat(h)||0,w=h.substr((u+"").length),_.charAt(1)==="="&&(_=Vi(u,_)+w),x=parseFloat(_),T=_.substr((x+"").length),l=Hi.lastIndex-T.length,T||(T=T||gt.units[i]||w,l===r.length&&(r+=T,o.e+=T)),w!==T&&(u=Ci(e,i,h,T)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:u,c:x-u,m:m&&m<4||i==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=i==="display"&&r==="none"?Zo:Qo;return Gn.test(r)&&(o.e=0),this._pt=o,o},Jo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sc=function(e){var i=e.split(" "),t=i[0],r=i[1]||"50%";return(t==="top"||t==="bottom"||r==="left"||r==="right")&&(e=t,t=r,r=e),i[0]=Jo[t]||t,i[1]=Jo[r]||r,i.join(" ")},oc=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var t=i.t,r=t.style,n=i.u,s=t._gsap,o,l,c;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),c=n.length;--c>-1;)o=n[c],li[o]&&(l=1,o=o==="transformOrigin"?mt:ue),ji(t,o);l&&(ji(t,ue),s&&(s.svg&&t.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",j0(t,1),s.uncache=1,ea(r)))}},Ar={clearProps:function(e,i,t,r,n){if(n.data!=="isFromStart"){var s=e._pt=new it(e._pt,i,t,0,0,oc);return s.u=r,s.pr=-10,s.tween=n,e._props.push(t),1}}},X0=[1,0,0,1,0,0],sa={},oa=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ko=function(e){var i=Jt(e,ue);return oa(i)?X0:i.substr(7).match(Un).map(me)},gs=function(e,i){var t=e._gsap||bi(e),r=e.style,n=Ko(e),s,o,l,c;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?X0:n):(n===X0&&!e.offsetParent&&e!==_0&&!t.svg&&(l=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,_0.appendChild(e)),n=Ko(e),l?r.display=l:ji(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):_0.removeChild(e))),i&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},ds=function(e,i,t,r,n,s){var o=e._gsap,l=n||gs(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,g=o.yOffset||0,u=l[0],m=l[1],h=l[2],_=l[3],x=l[4],b=l[5],T=i.split(" "),w=parseFloat(T[0])||0,k=parseFloat(T[1])||0,C,y,L,S;t?l!==X0&&(y=u*_-m*h)&&(L=w*(_/y)+k*(-h/y)+(h*b-_*x)/y,S=w*(-m/y)+k*(u/y)-(u*b-m*x)/y,w=L,k=S):(C=ra(e),w=C.x+(~T[0].indexOf("%")?w/100*C.width:w),k=C.y+(~(T[1]||T[0]).indexOf("%")?k/100*C.height:k)),r||r!==!1&&o.smooth?(x=w-c,b=k-d,o.xOffset=f+(x*u+b*h)-x,o.yOffset=g+(x*m+b*_)-b):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=k,o.smooth=!!r,o.origin=i,o.originIsAbsolute=!!t,e.style[mt]="0px 0px",s&&(Si(s,o,"xOrigin",c,w),Si(s,o,"yOrigin",d,k),Si(s,o,"xOffset",f,o.xOffset),Si(s,o,"yOffset",g,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},j0=function(e,i){var t=e._gsap||new Qn(e);if("x"in t&&!i&&!t.uncache)return t;var r=e.style,n=t.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Jt(e,mt)||"0",d,f,g,u,m,h,_,x,b,T,w,k,C,y,L,S,E,O,M,W,U,K,X,A,Q,se,p,oe,$e,At,he,Ae;return d=f=g=h=_=x=b=T=w=0,u=m=1,t.svg=!!(e.getCTM&&na(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),r.scale=r.rotate=r.translate="none"),y=gs(e,t.svg),t.svg&&(t.uncache?(Q=e.getBBox(),c=t.xOrigin-Q.x+"px "+(t.yOrigin-Q.y)+"px",A=""):A=!i&&e.getAttribute("data-svg-origin"),ds(e,A||c,!!A||t.originIsAbsolute,t.smooth!==!1,y)),k=t.xOrigin||0,C=t.yOrigin||0,y!==X0&&(O=y[0],M=y[1],W=y[2],U=y[3],d=K=y[4],f=X=y[5],y.length===6?(u=Math.sqrt(O*O+M*M),m=Math.sqrt(U*U+W*W),h=O||M?p0(M,O)*Wi:0,b=W||U?p0(W,U)*Wi+h:0,b&&(m*=Math.abs(Math.cos(b*v0))),t.svg&&(d-=k-(k*O+C*W),f-=C-(k*M+C*U))):(Ae=y[6],At=y[7],p=y[8],oe=y[9],$e=y[10],he=y[11],d=y[12],f=y[13],g=y[14],L=p0(Ae,$e),_=L*Wi,L&&(S=Math.cos(-L),E=Math.sin(-L),A=K*S+p*E,Q=X*S+oe*E,se=Ae*S+$e*E,p=K*-E+p*S,oe=X*-E+oe*S,$e=Ae*-E+$e*S,he=At*-E+he*S,K=A,X=Q,Ae=se),L=p0(-W,$e),x=L*Wi,L&&(S=Math.cos(-L),E=Math.sin(-L),A=O*S-p*E,Q=M*S-oe*E,se=W*S-$e*E,he=U*E+he*S,O=A,M=Q,W=se),L=p0(M,O),h=L*Wi,L&&(S=Math.cos(L),E=Math.sin(L),A=O*S+M*E,Q=K*S+X*E,M=M*S-O*E,X=X*S-K*E,O=A,K=Q),_&&Math.abs(_)+Math.abs(h)>359.9&&(_=h=0,x=180-x),u=me(Math.sqrt(O*O+M*M+W*W)),m=me(Math.sqrt(X*X+Ae*Ae)),L=p0(K,X),b=Math.abs(L)>2e-4?L*Wi:0,w=he?1/(he<0?-he:he):0),t.svg&&(A=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!oa(Jt(e,ue)),A&&e.setAttribute("transform",A))),Math.abs(b)>90&&Math.abs(b)<270&&(n?(u*=-1,b+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),i=i||t.uncache,t.x=d-((t.xPercent=d&&(!i&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+s,t.y=f-((t.yPercent=f&&(!i&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+s,t.z=g+s,t.scaleX=me(u),t.scaleY=me(m),t.rotation=me(h)+o,t.rotationX=me(_)+o,t.rotationY=me(x)+o,t.skewX=b+o,t.skewY=T+o,t.transformPerspective=w+s,(t.zOrigin=parseFloat(c.split(" ")[2])||!i&&t.zOrigin||0)&&(r[mt]=Or(c)),t.xOffset=t.yOffset=0,t.force3D=gt.force3D,t.renderTransform=t.svg?lc:ia?aa:ac,t.uncache=0,t},Or=function(e){return(e=e.split(" "))[0]+" "+e[1]},os=function(e,i,t){var r=Ne(i);return me(parseFloat(i)+parseFloat(Ci(e,"x",t+"px",r)))+r},ac=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,aa(e,i)},Ui="0deg",W0="0px",Gi=") ",aa=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,s=t.x,o=t.y,l=t.z,c=t.rotation,d=t.rotationY,f=t.rotationX,g=t.skewX,u=t.skewY,m=t.scaleX,h=t.scaleY,_=t.transformPerspective,x=t.force3D,b=t.target,T=t.zOrigin,w="",k=x==="auto"&&e&&e!==1||x===!0;if(T&&(f!==Ui||d!==Ui)){var C=parseFloat(d)*v0,y=Math.sin(C),L=Math.cos(C),S;C=parseFloat(f)*v0,S=Math.cos(C),s=os(b,s,y*S*-T),o=os(b,o,-Math.sin(C)*-T),l=os(b,l,L*S*-T+T)}_!==W0&&(w+="perspective("+_+Gi),(r||n)&&(w+="translate("+r+"%, "+n+"%) "),(k||s!==W0||o!==W0||l!==W0)&&(w+=l!==W0||k?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Gi),c!==Ui&&(w+="rotate("+c+Gi),d!==Ui&&(w+="rotateY("+d+Gi),f!==Ui&&(w+="rotateX("+f+Gi),(g!==Ui||u!==Ui)&&(w+="skew("+g+", "+u+Gi),(m!==1||h!==1)&&(w+="scale("+m+", "+h+Gi),b.style[ue]=w||"translate(0, 0)"},lc=function(e,i){var t=i||this,r=t.xPercent,n=t.yPercent,s=t.x,o=t.y,l=t.rotation,c=t.skewX,d=t.skewY,f=t.scaleX,g=t.scaleY,u=t.target,m=t.xOrigin,h=t.yOrigin,_=t.xOffset,x=t.yOffset,b=t.forceCSS,T=parseFloat(s),w=parseFloat(o),k,C,y,L,S;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=v0,c*=v0,k=Math.cos(l)*f,C=Math.sin(l)*f,y=Math.sin(l-c)*-g,L=Math.cos(l-c)*g,c&&(d*=v0,S=Math.tan(c-d),S=Math.sqrt(1+S*S),y*=S,L*=S,d&&(S=Math.tan(d),S=Math.sqrt(1+S*S),k*=S,C*=S)),k=me(k),C=me(C),y=me(y),L=me(L)):(k=f,L=g,C=y=0),(T&&!~(s+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(T=Ci(u,"x",s,"px"),w=Ci(u,"y",o,"px")),(m||h||_||x)&&(T=me(T+m-(m*k+h*y)+_),w=me(w+h-(m*C+h*L)+x)),(r||n)&&(S=u.getBBox(),T=me(T+r/100*S.width),w=me(w+n/100*S.height)),S="matrix("+k+","+C+","+y+","+L+","+T+","+w+")",u.setAttribute("transform",S),b&&(u.style[ue]=S)},cc=function(e,i,t,r,n){var s=360,o=Le(n),l=parseFloat(n)*(o&&~n.indexOf("rad")?Wi:1),c=l-r,d=r+c+"deg",f,g;return o&&(f=n.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Uo)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Uo)%s-~~(c/s)*s)),e._pt=g=new it(e._pt,i,t,r,c,Wl),g.e=d,g.u="deg",e._props.push(t),g},$o=function(e,i){for(var t in i)e[t]=i[t];return e},dc=function(e,i,t){var r=$o({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=t.style,o,l,c,d,f,g,u,m;r.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),s[ue]=i,o=j0(t,1),ji(t,ue),t.setAttribute("transform",c)):(c=getComputedStyle(t)[ue],s[ue]=i,o=j0(t,1),s[ue]=c);for(l in li)c=r[l],d=o[l],c!==d&&n.indexOf(l)<0&&(u=Ne(c),m=Ne(d),f=u!==m?Ci(t,l,c,m):parseFloat(c),g=parseFloat(d),e._pt=new it(e._pt,o,l,f,g-f,as),e._pt.u=m||0,e._props.push(l));$o(o,r)};tt("padding,margin,Width,Radius",function(a,e){var i="Top",t="Right",r="Bottom",n="Left",s=(e<3?[i,t,r,n]:[i+n,i+t,r+t,r+n]).map(function(o){return e<2?a+o:"border"+o+a});Ar[e>1?"border"+a:a]=function(o,l,c,d,f){var g,u;if(arguments.length<4)return g=s.map(function(m){return ai(o,m,c)}),u=g.join(" "),u.split(g[0]).length===5?g[0]:u;g=(d+"").split(" "),u={},s.forEach(function(m,h){return u[m]=g[h]=g[h]||g[(h-1)/2|0]}),o.init(l,u,f)}});var ms={name:"css",register:cs,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,t,r,n){var s=this._props,o=e.style,l=t.vars.startAt,c,d,f,g,u,m,h,_,x,b,T,w,k,C,y,L;us||cs(),this.styles=this.styles||ta(e),L=this.styles.props,this.tween=t;for(h in i)if(h!=="autoRound"&&(d=i[h],!(ut[h]&&es(h,i,t,r,e,n)))){if(u=typeof d,m=Ar[h],u==="function"&&(d=d.call(t,r,e,n),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=m0(d)),m)m(this,e,h,d,t)&&(y=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",si.lastIndex=0,si.test(c)||(_=Ne(c),x=Ne(d)),x?_!==x&&(c=Ci(e,h,c,x)+x):_&&(d+=_),this.add(o,"setProperty",c,d,r,n,0,0,h),s.push(h),L.push(h,0,o[h]);else if(u!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(t,r,e,n):l[h],Le(c)&&~c.indexOf("random(")&&(c=m0(c)),Ne(c+"")||c==="auto"||(c+=gt.units[h]||Ne(ai(e,h))||""),(c+"").charAt(1)==="="&&(c=ai(e,h))):c=ai(e,h),g=parseFloat(c),b=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),f=parseFloat(d),h in jt&&(h==="autoAlpha"&&(g===1&&ai(e,"visibility")==="hidden"&&f&&(g=0),L.push("visibility",0,o.visibility),Si(this,o,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=jt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),T=h in li,T){if(this.styles.save(h),w||(k=e._gsap,k.renderTransform&&!i.parseTransform||j0(e,i.parseTransform),C=i.smoothOrigin!==!1&&k.smooth,w=this._pt=new it(this._pt,o,ue,0,1,k.renderTransform,k,0,-1),w.dep=1),h==="scale")this._pt=new it(this._pt,k,"scaleY",k.scaleY,(b?Vi(k.scaleY,b+f):f)-k.scaleY||0,as),this._pt.u=0,s.push("scaleY",h),h+="X";else if(h==="transformOrigin"){L.push(mt,0,o[mt]),d=sc(d),k.svg?ds(e,d,0,C,0,this):(x=parseFloat(d.split(" ")[2])||0,x!==k.zOrigin&&Si(this,k,"zOrigin",k.zOrigin,x),Si(this,o,h,Or(c),Or(d)));continue}else if(h==="svgOrigin"){ds(e,d,1,C,0,this);continue}else if(h in sa){cc(this,k,h,g,b?Vi(g,b+d):d);continue}else if(h==="smoothOrigin"){Si(this,k,"smooth",k.smooth,d);continue}else if(h==="force3D"){k[h]=d;continue}else if(h==="transform"){dc(this,d,e);continue}}else h in o||(h=w0(h)||h);if(T||(f||f===0)&&(g||g===0)&&!Gl.test(d)&&h in o)_=(c+"").substr((g+"").length),f||(f=0),x=Ne(d)||(h in gt.units?gt.units[h]:_),_!==x&&(g=Ci(e,h,c,x)),this._pt=new it(this._pt,T?k:o,h,g,(b?Vi(g,b+f):f)-g,!T&&(x==="px"||h==="zIndex")&&i.autoRound!==!1?jl:as),this._pt.u=x||0,_!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=Xl);else if(h in o)nc.call(this,e,h,c,b?b+d:d);else if(h in e)this.add(e,h,c||e[h],b?b+d:d,r,n);else if(h!=="parseTransform"){Mr(h,d);continue}T||(h in o?L.push(h,0,o[h]):typeof e[h]=="function"?L.push(h,2,e[h]()):L.push(h,1,c||e[h])),s.push(h)}}y&&ss(this)},render:function(e,i){if(i.tween._time||!hs())for(var t=i._pt;t;)t.r(e,t.d),t=t._next;else i.styles.revert()},get:ai,aliases:jt,getSetter:function(e,i,t){var r=jt[i];return r&&r.indexOf(",")<0&&(i=r),i in li&&i!==mt&&(e._gsap.x||ai(e,"x"))?t&&Yo===t?i==="scale"?Ql:$l:(Yo=t||{})&&(i==="scale"?Zl:ec):e.style&&!Lr(e.style[i])?Jl:~i.indexOf("-")?Kl:zr(e,i)},core:{_removeProperty:ji,_getMatrix:gs}};We.utils.checkPrefix=w0;We.core.getStyleSaver=ta;(function(a,e,i,t){var r=tt(a+","+e+","+i,function(n){li[n]=1});tt(e,function(n){gt.units[n]="deg",sa[n]=1}),jt[r[13]]=a+","+e,tt(t,function(n){var s=n.split(":");jt[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gt.units[a]="px"});We.registerPlugin(ms);var Ei=We.registerPlugin(ms)||We,x3=Ei.core.Tween;function la(a,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function uc(a,e,i){return e&&la(a.prototype,e),i&&la(a,i),a}var qe,Fr,hc,xt,Li,Mi,b0,da,Ji,K0,ua,ci,qt,ha,fa=function(){return qe||typeof window<"u"&&(qe=window.gsap)&&qe.registerPlugin&&qe},ga=1,y0=[],H=[],Ht=[],$0=Date.now,ps=function(e,i){return i},fc=function(){var e=K0.core,i=e.bridge||{},t=e._scrollers,r=e._proxies;t.push.apply(t,H),r.push.apply(r,Ht),H=t,Ht=r,ps=function(s,o){return i[s](o)}},ui=function(e,i){return~Ht.indexOf(e)&&Ht[Ht.indexOf(e)+1][i]},Q0=function(e){return!!~ua.indexOf(e)},nt=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:r!==!1,capture:!!n})},rt=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},Dr="scrollLeft",Rr="scrollTop",_s=function(){return ci&&ci.isPressed||H.cache++},Nr=function(e,i){var t=function r(n){if(n||n===0){ga&&(xt.history.scrollRestoration="manual");var s=ci&&ci.isPressed;n=r.v=Math.round(n)||(ci&&ci.iOS?1:0),e(n),r.cacheID=H.cache,s&&ps("ss",n)}else(i||H.cache!==r.cacheID||ps("ref"))&&(r.cacheID=H.cache,r.v=e());return r.v+r.offset};return t.offset=0,e&&t},Xe={s:Dr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Nr(function(a){return arguments.length?xt.scrollTo(a,Se.sc()):xt.pageXOffset||Li[Dr]||Mi[Dr]||b0[Dr]||0})},Se={s:Rr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xe,sc:Nr(function(a){return arguments.length?xt.scrollTo(Xe.sc(),a):xt.pageYOffset||Li[Rr]||Mi[Rr]||b0[Rr]||0})},st=function(e,i){return(i&&i._ctx&&i._ctx.selector||qe.utils.toArray)(e)[0]||(typeof e=="string"&&qe.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},di=function(e,i){var t=i.s,r=i.sc;Q0(e)&&(e=Li.scrollingElement||Mi);var n=H.indexOf(e),s=r===Se.sc?1:2;!~n&&(n=H.push(e)-1),H[n+s]||nt(e,"scroll",_s);var o=H[n+s],l=o||(H[n+s]=Nr(ui(e,t),!0)||(Q0(e)?r:Nr(function(c){return arguments.length?e[t]=c:e[t]})));return l.target=e,o||(l.smooth=qe.getProperty(e,"scrollBehavior")==="smooth"),l},qr=function(e,i,t){var r=e,n=e,s=$0(),o=s,l=i||50,c=Math.max(500,l*3),d=function(m,h){var _=$0();h||_-s>l?(n=r,r=m,o=s,s=_):t?r+=m:r=n+(m-n)/(_-o)*(s-o)},f=function(){n=r=t?0:r,o=s=0},g=function(m){var h=o,_=n,x=$0();return(m||m===0)&&m!==r&&d(m),s===o||x-o>c?0:(r+(t?_:-_))/((t?x:s)-h)*1e3};return{update:d,reset:f,getVelocity:g}},J0=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ca=function(e){var i=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(t)?i:t},ma=function(){K0=qe.core.globals().ScrollTrigger,K0&&K0.core&&fc()},pa=function(e){return qe=e||fa(),!Fr&&qe&&typeof document<"u"&&document.body&&(xt=window,Li=document,Mi=Li.documentElement,b0=Li.body,ua=[xt,Li,Mi,b0],hc=qe.utils.clamp,ha=qe.core.context||function(){},Ji="onpointerenter"in b0?"pointer":"mouse",da=pe.isTouch=xt.matchMedia&&xt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qt=pe.eventTypes=("ontouchstart"in Mi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ga=0},500),ma(),Fr=1),Fr};Xe.op=Se;H.cache=0;var pe=function(){function a(i){this.init(i)}var e=a.prototype;return e.init=function(t){Fr||pa(qe)||console.warn("Please gsap.registerPlugin(Observer)"),K0||ma();var r=t.tolerance,n=t.dragMinimum,s=t.type,o=t.target,l=t.lineHeight,c=t.debounce,d=t.preventDefault,f=t.onStop,g=t.onStopDelay,u=t.ignore,m=t.wheelSpeed,h=t.event,_=t.onDragStart,x=t.onDragEnd,b=t.onDrag,T=t.onPress,w=t.onRelease,k=t.onRight,C=t.onLeft,y=t.onUp,L=t.onDown,S=t.onChangeX,E=t.onChangeY,O=t.onChange,M=t.onToggleX,W=t.onToggleY,U=t.onHover,K=t.onHoverEnd,X=t.onMove,A=t.ignoreCheck,Q=t.isNormalizer,se=t.onGestureStart,p=t.onGestureEnd,oe=t.onWheel,$e=t.onEnable,At=t.onDisable,he=t.onClick,Ae=t.scrollSpeed,Qe=t.capture,xe=t.allowClicks,Ze=t.lockAxis,He=t.onLockAxis;this.target=o=st(o)||Mi,this.vars=t,u&&(u=qe.utils.toArray(u)),r=r||1e-9,n=n||0,m=m||1,Ae=Ae||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xt.getComputedStyle(b0).lineHeight)||22);var gi,et,ct,$,_e,dt,pt,v=this,_t=0,Qt=0,mi=t.passive||!d&&t.passive!==!1,ve=di(o,Xe),Zt=di(o,Se),pi=ve(),Pi=Zt(),Be=~s.indexOf("touch")&&!~s.indexOf("pointer")&&qt[0]==="pointerdown",_i=Q0(o),we=o.ownerDocument||Li,Ot=[0,0,0],Ct=[0,0,0],ei=0,M0=function(){return ei=$0()},ke=function(z,Z){return(v.event=z)&&u&&~u.indexOf(z.target)||Z&&Be&&z.pointerType!=="touch"||A&&A(z,Z)},fr=function(){v._vx.reset(),v._vy.reset(),et.pause(),f&&f(v)},ti=function(){var z=v.deltaX=ca(Ot),Z=v.deltaY=ca(Ct),B=Math.abs(z)>=r,D=Math.abs(Z)>=r;O&&(B||D)&&O(v,z,Z,Ot,Ct),B&&(k&&v.deltaX>0&&k(v),C&&v.deltaX<0&&C(v),S&&S(v),M&&v.deltaX<0!=_t<0&&M(v),_t=v.deltaX,Ot[0]=Ot[1]=Ot[2]=0),D&&(L&&v.deltaY>0&&L(v),y&&v.deltaY<0&&y(v),E&&E(v),W&&v.deltaY<0!=Qt<0&&W(v),Qt=v.deltaY,Ct[0]=Ct[1]=Ct[2]=0),($||ct)&&(X&&X(v),ct&&(_&&ct===1&&_(v),b&&b(v),ct=0),$=!1),dt&&!(dt=!1)&&He&&He(v),_e&&(oe(v),_e=!1),gi=0},s0=function(z,Z,B){Ot[B]+=z,Ct[B]+=Z,v._vx.update(z),v._vy.update(Z),c?gi||(gi=requestAnimationFrame(ti)):ti()},o0=function(z,Z){Ze&&!pt&&(v.axis=pt=Math.abs(z)>Math.abs(Z)?"x":"y",dt=!0),pt!=="y"&&(Ot[2]+=z,v._vx.update(z,!0)),pt!=="x"&&(Ct[2]+=Z,v._vy.update(Z,!0)),c?gi||(gi=requestAnimationFrame(ti)):ti()},vi=function(z){if(!ke(z,1)){z=J0(z,d);var Z=z.clientX,B=z.clientY,D=Z-v.x,P=B-v.y,R=v.isDragging;v.x=Z,v.y=B,(R||(D||P)&&(Math.abs(v.startX-Z)>=n||Math.abs(v.startY-B)>=n))&&(ct=R?2:1,R||(v.isDragging=!0),o0(D,P))}},zi=v.onPress=function(F){ke(F,1)||F&&F.button||(v.axis=pt=null,et.pause(),v.isPressed=!0,F=J0(F),_t=Qt=0,v.startX=v.x=F.clientX,v.startY=v.y=F.clientY,v._vx.reset(),v._vy.reset(),nt(Q?o:we,qt[1],vi,mi,!0),v.deltaX=v.deltaY=0,T&&T(v))},G=v.onRelease=function(F){if(!ke(F,1)){rt(Q?o:we,qt[1],vi,!0);var z=!isNaN(v.y-v.startY),Z=v.isDragging,B=Z&&(Math.abs(v.x-v.startX)>3||Math.abs(v.y-v.startY)>3),D=J0(F);!B&&z&&(v._vx.reset(),v._vy.reset(),d&&xe&&qe.delayedCall(.08,function(){if($0()-ei>300&&!F.defaultPrevented){if(F.target.click)F.target.click();else if(we.createEvent){var P=we.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,xt,1,D.screenX,D.screenY,D.clientX,D.clientY,!1,!1,!1,!1,0,null),F.target.dispatchEvent(P)}}})),v.isDragging=v.isGesturing=v.isPressed=!1,f&&Z&&!Q&&et.restart(!0),ct&&ti(),x&&Z&&x(v),w&&w(v,B)}},Ai=function(z){return z.touches&&z.touches.length>1&&(v.isGesturing=!0)&&se(z,v.isDragging)},Dt=function(){return(v.isGesturing=!1)||p(v)},Rt=function(z){if(!ke(z)){var Z=ve(),B=Zt();s0((Z-pi)*Ae,(B-Pi)*Ae,1),pi=Z,Pi=B,f&&et.restart(!0)}},Ft=function(z){if(!ke(z)){z=J0(z,d),oe&&(_e=!0);var Z=(z.deltaMode===1?l:z.deltaMode===2?xt.innerHeight:1)*m;s0(z.deltaX*Z,z.deltaY*Z,0),f&&!Q&&et.restart(!0)}},Oi=function(z){if(!ke(z)){var Z=z.clientX,B=z.clientY,D=Z-v.x,P=B-v.y;v.x=Z,v.y=B,$=!0,f&&et.restart(!0),(D||P)&&o0(D,P)}},a0=function(z){v.event=z,U(v)},ii=function(z){v.event=z,K(v)},B0=function(z){return ke(z)||J0(z,d)&&he(v)};et=v._dc=qe.delayedCall(g||.25,fr).pause(),v.deltaX=v.deltaY=0,v._vx=qr(0,50,!0),v._vy=qr(0,50,!0),v.scrollX=ve,v.scrollY=Zt,v.isDragging=v.isGesturing=v.isPressed=!1,ha(this),v.enable=function(F){return v.isEnabled||(nt(_i?we:o,"scroll",_s),s.indexOf("scroll")>=0&&nt(_i?we:o,"scroll",Rt,mi,Qe),s.indexOf("wheel")>=0&&nt(o,"wheel",Ft,mi,Qe),(s.indexOf("touch")>=0&&da||s.indexOf("pointer")>=0)&&(nt(o,qt[0],zi,mi,Qe),nt(we,qt[2],G),nt(we,qt[3],G),xe&&nt(o,"click",M0,!0,!0),he&&nt(o,"click",B0),se&&nt(we,"gesturestart",Ai),p&&nt(we,"gestureend",Dt),U&&nt(o,Ji+"enter",a0),K&&nt(o,Ji+"leave",ii),X&&nt(o,Ji+"move",Oi)),v.isEnabled=!0,v.isDragging=v.isGesturing=v.isPressed=$=ct=!1,v._vx.reset(),v._vy.reset(),pi=ve(),Pi=Zt(),F&&F.type&&zi(F),$e&&$e(v)),v},v.disable=function(){v.isEnabled&&(y0.filter(function(F){return F!==v&&Q0(F.target)}).length||rt(_i?we:o,"scroll",_s),v.isPressed&&(v._vx.reset(),v._vy.reset(),rt(Q?o:we,qt[1],vi,!0)),rt(_i?we:o,"scroll",Rt,Qe),rt(o,"wheel",Ft,Qe),rt(o,qt[0],zi,Qe),rt(we,qt[2],G),rt(we,qt[3],G),rt(o,"click",M0,!0),rt(o,"click",B0),rt(we,"gesturestart",Ai),rt(we,"gestureend",Dt),rt(o,Ji+"enter",a0),rt(o,Ji+"leave",ii),rt(o,Ji+"move",Oi),v.isEnabled=v.isPressed=v.isDragging=!1,At&&At(v))},v.kill=v.revert=function(){v.disable();var F=y0.indexOf(v);F>=0&&y0.splice(F,1),ci===v&&(ci=0)},y0.push(v),Q&&Q0(o)&&(ci=v),v.enable(h)},uc(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();pe.version="3.12.7";pe.create=function(a){return new pe(a)};pe.register=pa;pe.getAll=function(){return y0.slice()};pe.getById=function(a){return y0.filter(function(e){return e.vars.id===a})[0]};fa()&&qe.registerPlugin(pe);var I,T0,Y,ne,St,ee,Ps,rn,ur,sr,er,Hr,je,an,Ss,at,_a,va,S0,Aa,vs,Oa,ot,Cs,Da,Ra,Bi,Es,zs,C0,As,nn,Ls,ws,Vr=1,Je=Date.now,ys=Je(),zt=0,tr=0,wa=function(e,i,t){var r=Tt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},ya=function(e,i){return i&&(!Tt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gc=function a(){return tr&&requestAnimationFrame(a)},ba=function(){return an=1},xa=function(){return an=0},Kt=function(e){return e},ir=function(e){return Math.round(e*1e5)/1e5||0},Fa=function(){return typeof window<"u"},Na=function(){return I||Fa()&&(I=window.gsap)&&I.registerPlugin&&I},t0=function(e){return!!~Ps.indexOf(e)},qa=function(e){return(e==="Height"?As:Y["inner"+e])||St["client"+e]||ee["client"+e]},Ha=function(e){return ui(e,"getBoundingClientRect")||(t0(e)?function(){return tn.width=Y.innerWidth,tn.height=As,tn}:function(){return hi(e)})},mc=function(e,i,t){var r=t.d,n=t.d2,s=t.a;return(s=ui(e,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(i?qa(n):e["client"+n])||0}},pc=function(e,i){return!i||~Ht.indexOf(e)?Ha(e):function(){return tn}},$t=function(e,i){var t=i.s,r=i.d2,n=i.d,s=i.a;return Math.max(0,(t="scroll"+r)&&(s=ui(e,t))?s()-Ha(e)()[n]:t0(e)?(St[t]||ee[t])-qa(r):e[t]-e["offset"+r])},Yr=function(e,i){for(var t=0;t<S0.length;t+=3)(!i||~i.indexOf(S0[t+1]))&&e(S0[t],S0[t+1],S0[t+2])},Tt=function(e){return typeof e=="string"},Ke=function(e){return typeof e=="function"},rr=function(e){return typeof e=="number"},Ki=function(e){return typeof e=="object"},Z0=function(e,i,t){return e&&e.progress(i?0:1)&&t&&e.pause()},bs=function(e,i){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return i(e)}):i(e);t&&t.totalTime&&(e.callbackAnimation=t)}},x0=Math.abs,Va="left",Ya="top",Os="right",Ds="bottom",Qi="width",Zi="height",or="Right",ar="Left",lr="Top",cr="Bottom",Ce="padding",It="margin",L0="Width",Rs="Height",Me="px",Pt=function(e){return Y.getComputedStyle(e)},_c=function(e){var i=Pt(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},ka=function(e,i){for(var t in i)t in e||(e[t]=i[t]);return e},hi=function(e,i){var t=i&&Pt(e)[Ss]!=="matrix(1, 0, 0, 1, 0, 0)"&&I.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return t&&t.progress(0).kill(),r},sn=function(e,i){var t=i.d2;return e["offset"+t]||e["client"+t]||0},Ua=function(e){var i=[],t=e.labels,r=e.duration(),n;for(n in t)i.push(t[n]/r);return i},vc=function(e){return function(i){return I.utils.snap(Ua(e),i)}},Fs=function(e){var i=I.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return t?function(r,n,s){s===void 0&&(s=.001);var o;if(!n)return i(r);if(n>0){for(r-=s,o=0;o<t.length;o++)if(t[o]>=r)return t[o];return t[o-1]}else for(o=t.length,r+=s;o--;)if(t[o]<=r)return t[o];return t[0]}:function(r,n,s){s===void 0&&(s=.001);var o=i(r);return!n||Math.abs(o-r)<s||o-r<0==n<0?o:i(n<0?r-e:r+e)}},wc=function(e){return function(i,t){return Fs(Ua(e))(i,t.direction)}},Ur=function(e,i,t,r){return t.split(",").forEach(function(n){return e(i,n,r)})},ze=function(e,i,t,r,n){return e.addEventListener(i,t,{passive:!r,capture:!!n})},Pe=function(e,i,t,r){return e.removeEventListener(i,t,!!r)},Gr=function(e,i,t){t=t&&t.wheelHandler,t&&(e(i,"wheel",t),e(i,"touchmove",t))},Ta={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wr={toggleActions:"play",anticipatePin:0},on={top:0,left:0,center:.5,bottom:1,right:1},$r=function(e,i){if(Tt(e)){var t=e.indexOf("="),r=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(r*=i/100),e=e.substr(0,t-1)),e=r+(e in on?on[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Xr=function(e,i,t,r,n,s,o,l){var c=n.startColor,d=n.endColor,f=n.fontSize,g=n.indent,u=n.fontWeight,m=ne.createElement("div"),h=t0(t)||ui(t,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,x=h?ee:t,b=e.indexOf("start")!==-1,T=b?c:d,w="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((_||l)&&h?"fixed;":"absolute;"),(_||l||!h)&&(w+=(r===Se?Os:Ds)+":"+(s+parseFloat(g))+"px;"),o&&(w+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),m.style.cssText=w,m.innerText=i||i===0?e+"-"+i:e,x.children[0]?x.insertBefore(m,x.children[0]):x.appendChild(m),m._offset=m["offset"+r.op.d2],Qr(m,0,r,b),m},Qr=function(e,i,t,r){var n={display:"block"},s=t[r?"os2":"p2"],o=t[r?"p2":"os2"];e._isFlipped=r,n[t.a+"Percent"]=r?-100:0,n[t.a]=r?"1px":0,n["border"+s+L0]=1,n["border"+o+L0]=0,n[t.p]=i+"px",I.set(e,n)},V=[],Ms={},hr,Sa=function(){return Je()-zt>34&&(hr||(hr=requestAnimationFrame(fi)))},k0=function(){(!ot||!ot.isPressed||ot.startX>ee.clientWidth)&&(H.cache++,ot?hr||(hr=requestAnimationFrame(fi)):fi(),zt||r0("scrollStart"),zt=Je())},xs=function(){Ra=Y.innerWidth,Da=Y.innerHeight},nr=function(e){H.cache++,(e===!0||!je&&!Oa&&!ne.fullscreenElement&&!ne.webkitFullscreenElement&&(!Cs||Ra!==Y.innerWidth||Math.abs(Y.innerHeight-Da)>Y.innerHeight*.25))&&rn.restart(!0)},i0={},yc=[],Ga=function a(){return Pe(N,"scrollEnd",a)||$i(!0)},r0=function(e){return i0[e]&&i0[e].map(function(i){return i()})||yc},kt=[],Wa=function(e){for(var i=0;i<kt.length;i+=5)(!e||kt[i+4]&&kt[i+4].query===e)&&(kt[i].style.cssText=kt[i+1],kt[i].getBBox&&kt[i].setAttribute("transform",kt[i+2]||""),kt[i+3].uncache=1)},Ns=function(e,i){var t;for(at=0;at<V.length;at++)t=V[at],t&&(!i||t._ctx===i)&&(e?t.kill(1):t.revert(!0,!0));nn=!0,i&&Wa(i),i||r0("revert")},Xa=function(e,i){H.cache++,(i||!lt)&&H.forEach(function(t){return Ke(t)&&t.cacheID++&&(t.rec=0)}),Tt(e)&&(Y.history.scrollRestoration=zs=e)},lt,e0=0,Ca,bc=function(){if(Ca!==e0){var e=Ca=e0;requestAnimationFrame(function(){return e===e0&&$i(!0)})}},ja=function(){ee.appendChild(C0),As=!ot&&C0.offsetHeight||Y.innerHeight,ee.removeChild(C0)},Ea=function(e){return ur(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},$i=function(e,i){if(St=ne.documentElement,ee=ne.body,Ps=[Y,ne,St,ee],zt&&!e&&!nn){ze(N,"scrollEnd",Ga);return}ja(),lt=N.isRefreshing=!0,H.forEach(function(r){return Ke(r)&&++r.cacheID&&(r.rec=r())});var t=r0("refreshInit");Aa&&N.sort(),i||Ns(),H.forEach(function(r){Ke(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),V.slice(0).forEach(function(r){return r.refresh()}),nn=!1,V.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",s=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-s),r.refresh()}}),Ls=1,Ea(!0),V.forEach(function(r){var n=$t(r.scroller,r._dir),s=r.vars.end==="max"||r._endClamp&&r.end>n,o=r._startClamp&&r.start>=n;(s||o)&&r.setPositions(o?n-1:r.start,s?Math.max(o?n:r.start+1,n):r.end,!0)}),Ea(!1),Ls=0,t.forEach(function(r){return r&&r.render&&r.render(-1)}),H.forEach(function(r){Ke(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Xa(zs,1),rn.pause(),e0++,lt=2,fi(2),V.forEach(function(r){return Ke(r.vars.onRefresh)&&r.vars.onRefresh(r)}),lt=N.isRefreshing=!1,r0("refresh")},Bs=0,Zr=1,dr,fi=function(e){if(e===2||!lt&&!nn){N.isUpdating=!0,dr&&dr.update(0);var i=V.length,t=Je(),r=t-ys>=50,n=i&&V[0].scroll();if(Zr=Bs>n?-1:1,lt||(Bs=n),r&&(zt&&!an&&t-zt>200&&(zt=0,r0("scrollEnd")),er=ys,ys=t),Zr<0){for(at=i;at-- >0;)V[at]&&V[at].update(0,r);Zr=1}else for(at=0;at<i;at++)V[at]&&V[at].update(0,r);N.isUpdating=!1}hr=0},Is=[Va,Ya,Ds,Os,It+cr,It+or,It+lr,It+ar,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],en=Is.concat([Qi,Zi,"boxSizing","max"+L0,"max"+Rs,"position",It,Ce,Ce+lr,Ce+or,Ce+cr,Ce+ar]),xc=function(e,i,t){E0(t);var r=e._gsap;if(r.spacerIsNative)E0(r.spacerState);else if(e._gsap.swappedIn){var n=i.parentNode;n&&(n.insertBefore(e,i),n.removeChild(i))}e._gsap.swappedIn=!1},ks=function(e,i,t,r){if(!e._gsap.swappedIn){for(var n=Is.length,s=i.style,o=e.style,l;n--;)l=Is[n],s[l]=t[l];s.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(s.display="inline-block"),o[Ds]=o[Os]="auto",s.flexBasis=t.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Qi]=sn(e,Xe)+Me,s[Zi]=sn(e,Se)+Me,s[Ce]=o[It]=o[Ya]=o[Va]="0",E0(r),o[Qi]=o["max"+L0]=t[Qi],o[Zi]=o["max"+Rs]=t[Zi],o[Ce]=t[Ce],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},kc=/([A-Z])/g,E0=function(e){if(e){var i=e.t.style,t=e.length,r=0,n,s;for((e.t._gsap||I.core.getCache(e.t)).uncache=1;r<t;r+=2)s=e[r+1],n=e[r],s?i[n]=s:i[n]&&i.removeProperty(n.replace(kc,"-$1").toLowerCase())}},jr=function(e){for(var i=en.length,t=e.style,r=[],n=0;n<i;n++)r.push(en[n],t[en[n]]);return r.t=e,r},Tc=function(e,i,t){for(var r=[],n=e.length,s=t?8:0,o;s<n;s+=2)o=e[s],r.push(o,o in i?i[o]:e[s+1]);return r.t=e.t,r},tn={left:0,top:0},La=function(e,i,t,r,n,s,o,l,c,d,f,g,u,m){Ke(e)&&(e=e(l)),Tt(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?$r("0"+e.substr(3),t):0));var h=u?u.time():0,_,x,b;if(u&&u.seek(0),isNaN(e)||(e=+e),rr(e))u&&(e=I.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,g,e)),o&&Qr(o,t,r,!0);else{Ke(i)&&(i=i(l));var T=(e||"0").split(" "),w,k,C,y;b=st(i,l)||ee,w=hi(b)||{},(!w||!w.left&&!w.top)&&Pt(b).display==="none"&&(y=b.style.display,b.style.display="block",w=hi(b),y?b.style.display=y:b.style.removeProperty("display")),k=$r(T[0],w[r.d]),C=$r(T[1]||"0",t),e=w[r.p]-c[r.p]-d+k+n-C,o&&Qr(o,C,r,t-C<20||o._isStart&&C>20),t-=t-C}if(m&&(l[m]=e||-.001,e<0&&(e=0)),s){var L=e+t,S=s._isStart;_="scroll"+r.d2,Qr(s,L,r,S&&L>20||!S&&(f?Math.max(ee[_],St[_]):s.parentNode[_])<=L+1),f&&(c=hi(o),f&&(s.style[r.op.p]=c[r.op.p]-r.op.m-s._offset+Me))}return u&&b&&(_=hi(b),u.seek(g),x=hi(b),u._caScrollDist=_[r.p]-x[r.p],e=e/u._caScrollDist*g),u&&u.seek(h),u?e:Math.round(e)},Sc=/(webkit|moz|length|cssText|inset)/i,Ma=function(e,i,t,r){if(e.parentNode!==i){var n=e.style,s,o;if(i===ee){e._stOrig=n.cssText,o=Pt(e);for(s in o)!+s&&!Sc.test(s)&&o[s]&&typeof n[s]=="string"&&s!=="0"&&(n[s]=o[s]);n.top=t,n.left=r}else n.cssText=e._stOrig;I.core.getCache(e).uncache=1,i.appendChild(e)}},Ja=function(e,i,t){var r=i,n=r;return function(s){var o=Math.round(e());return o!==r&&o!==n&&Math.abs(o-r)>3&&Math.abs(o-n)>3&&(s=o,t&&t()),n=r,r=Math.round(s),r}},Jr=function(e,i,t){var r={};r[i.p]="+="+t,I.set(e,r)},Ba=function(e,i){var t=di(e,i),r="_scroll"+i.p2,n=function s(o,l,c,d,f){var g=s.tween,u=l.onComplete,m={};c=c||t();var h=Ja(t,c,function(){g.kill(),s.tween=0});return f=d&&f||0,d=d||o-c,g&&g.kill(),l[r]=o,l.inherit=!1,l.modifiers=m,m[r]=function(){return h(c+d*g.ratio+f*g.ratio*g.ratio)},l.onUpdate=function(){H.cache++,s.tween&&fi()},l.onComplete=function(){s.tween=0,u&&u.call(g)},g=s.tween=I.to(e,l),g};return e[r]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},ze(e,"wheel",t.wheelHandler),N.isTouch&&ze(e,"touchmove",t.wheelHandler),n},N=function(){function a(i,t){T0||a.register(I)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Es(this),this.init(i,t)}var e=a.prototype;return e.init=function(t,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!tr){this.update=this.refresh=this.kill=Kt;return}t=ka(Tt(t)||rr(t)||t.nodeType?{trigger:t}:t,Wr);var n=t,s=n.onUpdate,o=n.toggleClass,l=n.id,c=n.onToggle,d=n.onRefresh,f=n.scrub,g=n.trigger,u=n.pin,m=n.pinSpacing,h=n.invalidateOnRefresh,_=n.anticipatePin,x=n.onScrubComplete,b=n.onSnapComplete,T=n.once,w=n.snap,k=n.pinReparent,C=n.pinSpacer,y=n.containerAnimation,L=n.fastScrollEnd,S=n.preventOverlaps,E=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Xe:Se,O=!f&&f!==0,M=st(t.scroller||Y),W=I.core.getCache(M),U=t0(M),K=("pinType"in t?t.pinType:ui(M,"pinType")||U&&"fixed")==="fixed",X=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],A=O&&t.toggleActions.split(" "),Q="markers"in t?t.markers:Wr.markers,se=U?0:parseFloat(Pt(M)["border"+E.p2+L0])||0,p=this,oe=t.onRefreshInit&&function(){return t.onRefreshInit(p)},$e=mc(M,U,E),At=pc(M,U),he=0,Ae=0,Qe=0,xe=di(M,E),Ze,He,gi,et,ct,$,_e,dt,pt,v,_t,Qt,mi,ve,Zt,pi,Pi,Be,_i,we,Ot,Ct,ei,M0,ke,fr,ti,s0,o0,vi,zi,G,Ai,Dt,Rt,Ft,Oi,a0,ii;if(p._startClamp=p._endClamp=!1,p._dir=E,_*=45,p.scroller=M,p.scroll=y?y.time.bind(y):xe,et=xe(),p.vars=t,r=r||t.animation,"refreshPriority"in t&&(Aa=1,t.refreshPriority===-9999&&(dr=p)),W.tweenScroll=W.tweenScroll||{top:Ba(M,Se),left:Ba(M,Xe)},p.tweenTo=Ze=W.tweenScroll[E.p],p.scrubDuration=function(B){Ai=rr(B)&&B,Ai?G?G.duration(B):G=I.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ai,paused:!0,onComplete:function(){return x&&x(p)}}):(G&&G.progress(1).kill(),G=0)},r&&(r.vars.lazy=!1,r._initted&&!p.isReverted||r.vars.immediateRender!==!1&&t.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),p.animation=r.pause(),r.scrollTrigger=p,p.scrubDuration(f),vi=0,l||(l=r.vars.id)),w&&((!Ki(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in ee.style&&I.set(U?[ee,St]:M,{scrollBehavior:"auto"}),H.forEach(function(B){return Ke(B)&&B.target===(U?ne.scrollingElement||St:M)&&(B.smooth=!1)}),gi=Ke(w.snapTo)?w.snapTo:w.snapTo==="labels"?vc(r):w.snapTo==="labelsDirectional"?wc(r):w.directional!==!1?function(B,D){return Fs(w.snapTo)(B,Je()-Ae<500?0:D.direction)}:I.utils.snap(w.snapTo),Dt=w.duration||{min:.1,max:2},Dt=Ki(Dt)?sr(Dt.min,Dt.max):sr(Dt,Dt),Rt=I.delayedCall(w.delay||Ai/2||.1,function(){var B=xe(),D=Je()-Ae<500,P=Ze.tween;if((D||Math.abs(p.getVelocity())<10)&&!P&&!an&&he!==B){var R=(B-$)/ve,Ie=r&&!O?r.totalProgress():R,j=D?0:(Ie-zi)/(Je()-er)*1e3||0,ye=I.utils.clamp(-R,1-R,x0(j/2)*j/.185),Ve=R+(w.inertia===!1?0:ye),fe,ae,te=w,Nt=te.onStart,ce=te.onInterrupt,vt=te.onComplete;if(fe=gi(Ve,p),rr(fe)||(fe=Ve),ae=Math.max(0,Math.round($+fe*ve)),B<=_e&&B>=$&&ae!==B){if(P&&!P._initted&&P.data<=x0(ae-B))return;w.inertia===!1&&(ye=fe-R),Ze(ae,{duration:Dt(x0(Math.max(x0(Ve-Ie),x0(fe-Ie))*.185/j/.05||0)),ease:w.ease||"power3",data:x0(ae-B),onInterrupt:function(){return Rt.restart(!0)&&ce&&ce(p)},onComplete:function(){p.update(),he=xe(),r&&!O&&(G?G.resetTo("totalProgress",fe,r._tTime/r._tDur):r.progress(fe)),vi=zi=r&&!O?r.totalProgress():p.progress,b&&b(p),vt&&vt(p)}},B,ye*ve,ae-B-ye*ve),Nt&&Nt(p,Ze.tween)}}else p.isActive&&he!==B&&Rt.restart(!0)}).pause()),l&&(Ms[l]=p),g=p.trigger=st(g||u!==!0&&u),ii=g&&g._gsap&&g._gsap.stRevert,ii&&(ii=ii(p)),u=u===!0?g:st(u),Tt(o)&&(o={targets:g,className:o}),u&&(m===!1||m===It||(m=!m&&u.parentNode&&u.parentNode.style&&Pt(u.parentNode).display==="flex"?!1:Ce),p.pin=u,He=I.core.getCache(u),He.spacer?Zt=He.pinState:(C&&(C=st(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),He.spacerIsNative=!!C,C&&(He.spacerState=jr(C))),He.spacer=Be=C||ne.createElement("div"),Be.classList.add("pin-spacer"),l&&Be.classList.add("pin-spacer-"+l),He.pinState=Zt=jr(u)),t.force3D!==!1&&I.set(u,{force3D:!0}),p.spacer=Be=He.spacer,o0=Pt(u),M0=o0[m+E.os2],we=I.getProperty(u),Ot=I.quickSetter(u,E.a,Me),ks(u,Be,o0),Pi=jr(u)),Q){Qt=Ki(Q)?ka(Q,Ta):Ta,v=Xr("scroller-start",l,M,E,Qt,0),_t=Xr("scroller-end",l,M,E,Qt,0,v),_i=v["offset"+E.op.d2];var B0=st(ui(M,"content")||M);dt=this.markerStart=Xr("start",l,B0,E,Qt,_i,0,y),pt=this.markerEnd=Xr("end",l,B0,E,Qt,_i,0,y),y&&(a0=I.quickSetter([dt,pt],E.a,Me)),!K&&!(Ht.length&&ui(M,"fixedMarkers")===!0)&&(_c(U?ee:M),I.set([v,_t],{force3D:!0}),fr=I.quickSetter(v,E.a,Me),s0=I.quickSetter(_t,E.a,Me))}if(y){var F=y.vars.onUpdate,z=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){p.update(0,0,1),F&&F.apply(y,z||[])})}if(p.previous=function(){return V[V.indexOf(p)-1]},p.next=function(){return V[V.indexOf(p)+1]},p.revert=function(B,D){if(!D)return p.kill(!0);var P=B!==!1||!p.enabled,R=je;P!==p.isReverted&&(P&&(Ft=Math.max(xe(),p.scroll.rec||0),Qe=p.progress,Oi=r&&r.progress()),dt&&[dt,pt,v,_t].forEach(function(Ie){return Ie.style.display=P?"none":"block"}),P&&(je=p,p.update(P)),u&&(!k||!p.isActive)&&(P?xc(u,Be,Zt):ks(u,Be,Pt(u),ke)),P||p.update(P),je=R,p.isReverted=P)},p.refresh=function(B,D,P,R){if(!((je||!p.enabled)&&!D)){if(u&&B&&zt){ze(a,"scrollEnd",Ga);return}!lt&&oe&&oe(p),je=p,Ze.tween&&!P&&(Ze.tween.kill(),Ze.tween=0),G&&G.pause(),h&&r&&r.revert({kill:!1}).invalidate(),p.isReverted||p.revert(!0,!0),p._subPinOffset=!1;var Ie=$e(),j=At(),ye=y?y.duration():$t(M,E),Ve=ve<=.01,fe=0,ae=R||0,te=Ki(P)?P.end:t.end,Nt=t.endTrigger||g,ce=Ki(P)?P.start:t.start||(t.start===0||!g?0:u?"0 0":"0 100%"),vt=p.pinnedContainer=t.pinnedContainer&&st(t.pinnedContainer,p),Vt=g&&Math.max(0,V.indexOf(p))||0,Oe=Vt,De,Ye,Di,gr,Ue,Ee,Yt,mn,Us,I0,Ut,P0,mr;for(Q&&Ki(P)&&(P0=I.getProperty(v,E.p),mr=I.getProperty(_t,E.p));Oe-- >0;)Ee=V[Oe],Ee.end||Ee.refresh(0,1)||(je=p),Yt=Ee.pin,Yt&&(Yt===g||Yt===u||Yt===vt)&&!Ee.isReverted&&(I0||(I0=[]),I0.unshift(Ee),Ee.revert(!0,!0)),Ee!==V[Oe]&&(Vt--,Oe--);for(Ke(ce)&&(ce=ce(p)),ce=wa(ce,"start",p),$=La(ce,g,Ie,E,xe(),dt,v,p,j,se,K,ye,y,p._startClamp&&"_startClamp")||(u?-.001:0),Ke(te)&&(te=te(p)),Tt(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(Tt(ce)?ce.split(" ")[0]:"")+te:(fe=$r(te.substr(2),Ie),te=Tt(ce)?ce:(y?I.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,$):$)+fe,Nt=g)),te=wa(te,"end",p),_e=Math.max($,La(te||(Nt?"100% 0":ye),Nt,Ie,E,xe()+fe,pt,_t,p,j,se,K,ye,y,p._endClamp&&"_endClamp"))||-.001,fe=0,Oe=Vt;Oe--;)Ee=V[Oe],Yt=Ee.pin,Yt&&Ee.start-Ee._pinPush<=$&&!y&&Ee.end>0&&(De=Ee.end-(p._startClamp?Math.max(0,Ee.start):Ee.start),(Yt===g&&Ee.start-Ee._pinPush<$||Yt===vt)&&isNaN(ce)&&(fe+=De*(1-Ee.progress)),Yt===u&&(ae+=De));if($+=fe,_e+=fe,p._startClamp&&(p._startClamp+=fe),p._endClamp&&!lt&&(p._endClamp=_e||-.001,_e=Math.min(_e,$t(M,E))),ve=_e-$||($-=.01)&&.001,Ve&&(Qe=I.utils.clamp(0,1,I.utils.normalize($,_e,Ft))),p._pinPush=ae,dt&&fe&&(De={},De[E.a]="+="+fe,vt&&(De[E.p]="-="+xe()),I.set([dt,pt],De)),u&&!(Ls&&p.end>=$t(M,E)))De=Pt(u),gr=E===Se,Di=xe(),Ct=parseFloat(we(E.a))+ae,!ye&&_e>1&&(Ut=(U?ne.scrollingElement||St:M).style,Ut={style:Ut,value:Ut["overflow"+E.a.toUpperCase()]},U&&Pt(ee)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Ut.style["overflow"+E.a.toUpperCase()]="scroll")),ks(u,Be,De),Pi=jr(u),Ye=hi(u,!0),mn=K&&di(M,gr?Xe:Se)(),m?(ke=[m+E.os2,ve+ae+Me],ke.t=Be,Oe=m===Ce?sn(u,E)+ve+ae:0,Oe&&(ke.push(E.d,Oe+Me),Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Oe+Me)),E0(ke),vt&&V.forEach(function(z0){z0.pin===vt&&z0.vars.pinSpacing!==!1&&(z0._subPinOffset=!0)}),K&&xe(Ft)):(Oe=sn(u,E),Oe&&Be.style.flexBasis!=="auto"&&(Be.style.flexBasis=Oe+Me)),K&&(Ue={top:Ye.top+(gr?Di-$:mn)+Me,left:Ye.left+(gr?mn:Di-$)+Me,boxSizing:"border-box",position:"fixed"},Ue[Qi]=Ue["max"+L0]=Math.ceil(Ye.width)+Me,Ue[Zi]=Ue["max"+Rs]=Math.ceil(Ye.height)+Me,Ue[It]=Ue[It+lr]=Ue[It+or]=Ue[It+cr]=Ue[It+ar]="0",Ue[Ce]=De[Ce],Ue[Ce+lr]=De[Ce+lr],Ue[Ce+or]=De[Ce+or],Ue[Ce+cr]=De[Ce+cr],Ue[Ce+ar]=De[Ce+ar],pi=Tc(Zt,Ue,k),lt&&xe(0)),r?(Us=r._initted,vs(1),r.render(r.duration(),!0,!0),ei=we(E.a)-Ct+ve+ae,ti=Math.abs(ve-ei)>1,K&&ti&&pi.splice(pi.length-2,2),r.render(0,!0,!0),Us||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),vs(0)):ei=ve,Ut&&(Ut.value?Ut.style["overflow"+E.a.toUpperCase()]=Ut.value:Ut.style.removeProperty("overflow-"+E.a));else if(g&&xe()&&!y)for(Ye=g.parentNode;Ye&&Ye!==ee;)Ye._pinOffset&&($-=Ye._pinOffset,_e-=Ye._pinOffset),Ye=Ye.parentNode;I0&&I0.forEach(function(z0){return z0.revert(!1,!0)}),p.start=$,p.end=_e,et=ct=lt?Ft:xe(),!y&&!lt&&(et<Ft&&xe(Ft),p.scroll.rec=0),p.revert(!1,!0),Ae=Je(),Rt&&(he=-1,Rt.restart(!0)),je=0,r&&O&&(r._initted||Oi)&&r.progress()!==Oi&&r.progress(Oi||0,!0).render(r.time(),!0,!0),(Ve||Qe!==p.progress||y||h||r&&!r._initted)&&(r&&!O&&r.totalProgress(y&&$<-.001&&!Qe?I.utils.normalize($,_e,0):Qe,!0),p.progress=Ve||(et-$)/ve===Qe?0:Qe),u&&m&&(Be._pinOffset=Math.round(p.progress*ei)),G&&G.invalidate(),isNaN(P0)||(P0-=I.getProperty(v,E.p),mr-=I.getProperty(_t,E.p),Jr(v,E,P0),Jr(dt,E,P0-(R||0)),Jr(_t,E,mr),Jr(pt,E,mr-(R||0))),Ve&&!lt&&p.update(),d&&!lt&&!mi&&(mi=!0,d(p),mi=!1)}},p.getVelocity=function(){return(xe()-ct)/(Je()-er)*1e3||0},p.endAnimation=function(){Z0(p.callbackAnimation),r&&(G?G.progress(1):r.paused()?O||Z0(r,p.direction<0,1):Z0(r,r.reversed()))},p.labelToScroll=function(B){return r&&r.labels&&($||p.refresh()||$)+r.labels[B]/r.duration()*ve||0},p.getTrailing=function(B){var D=V.indexOf(p),P=p.direction>0?V.slice(0,D).reverse():V.slice(D+1);return(Tt(B)?P.filter(function(R){return R.vars.preventOverlaps===B}):P).filter(function(R){return p.direction>0?R.end<=$:R.start>=_e})},p.update=function(B,D,P){if(!(y&&!P&&!B)){var R=lt===!0?Ft:p.scroll(),Ie=B?0:(R-$)/ve,j=Ie<0?0:Ie>1?1:Ie||0,ye=p.progress,Ve,fe,ae,te,Nt,ce,vt,Vt;if(D&&(ct=et,et=y?xe():R,w&&(zi=vi,vi=r&&!O?r.totalProgress():j)),_&&u&&!je&&!Vr&&zt&&(!j&&$<R+(R-ct)/(Je()-er)*_?j=1e-4:j===1&&_e>R+(R-ct)/(Je()-er)*_&&(j=.9999)),j!==ye&&p.enabled){if(Ve=p.isActive=!!j&&j<1,fe=!!ye&&ye<1,ce=Ve!==fe,Nt=ce||!!j!=!!ye,p.direction=j>ye?1:-1,p.progress=j,Nt&&!je&&(ae=j&&!ye?0:j===1?1:ye===1?2:3,O&&(te=!ce&&A[ae+1]!=="none"&&A[ae+1]||A[ae],Vt=r&&(te==="complete"||te==="reset"||te in r))),S&&(ce||Vt)&&(Vt||f||!r)&&(Ke(S)?S(p):p.getTrailing(S).forEach(function(Di){return Di.endAnimation()})),O||(G&&!je&&!Vr?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",j,r._tTime/r._tDur):(G.vars.totalProgress=j,G.invalidate().restart())):r&&r.totalProgress(j,!!(je&&(Ae||B)))),u){if(B&&m&&(Be.style[m+E.os2]=M0),!K)Ot(ir(Ct+ei*j));else if(Nt){if(vt=!B&&j>ye&&_e+1>R&&R+1>=$t(M,E),k)if(!B&&(Ve||vt)){var Oe=hi(u,!0),De=R-$;Ma(u,ee,Oe.top+(E===Se?De:0)+Me,Oe.left+(E===Se?0:De)+Me)}else Ma(u,Be);E0(Ve||vt?pi:Pi),ti&&j<1&&Ve||Ot(Ct+(j===1&&!vt?ei:0))}}w&&!Ze.tween&&!je&&!Vr&&Rt.restart(!0),o&&(ce||T&&j&&(j<1||!ws))&&ur(o.targets).forEach(function(Di){return Di.classList[Ve||T?"add":"remove"](o.className)}),s&&!O&&!B&&s(p),Nt&&!je?(O&&(Vt&&(te==="complete"?r.pause().totalProgress(1):te==="reset"?r.restart(!0).pause():te==="restart"?r.restart(!0):r[te]()),s&&s(p)),(ce||!ws)&&(c&&ce&&bs(p,c),X[ae]&&bs(p,X[ae]),T&&(j===1?p.kill(!1,1):X[ae]=0),ce||(ae=j===1?1:3,X[ae]&&bs(p,X[ae]))),L&&!Ve&&Math.abs(p.getVelocity())>(rr(L)?L:2500)&&(Z0(p.callbackAnimation),G?G.progress(1):Z0(r,te==="reverse"?1:!j,1))):O&&s&&!je&&s(p)}if(s0){var Ye=y?R/y.duration()*(y._caScrollDist||0):R;fr(Ye+(v._isFlipped?1:0)),s0(Ye)}a0&&a0(-R/y.duration()*(y._caScrollDist||0))}},p.enable=function(B,D){p.enabled||(p.enabled=!0,ze(M,"resize",nr),U||ze(M,"scroll",k0),oe&&ze(a,"refreshInit",oe),B!==!1&&(p.progress=Qe=0,et=ct=he=xe()),D!==!1&&p.refresh())},p.getTween=function(B){return B&&Ze?Ze.tween:G},p.setPositions=function(B,D,P,R){if(y){var Ie=y.scrollTrigger,j=y.duration(),ye=Ie.end-Ie.start;B=Ie.start+ye*B/j,D=Ie.start+ye*D/j}p.refresh(!1,!1,{start:ya(B,P&&!!p._startClamp),end:ya(D,P&&!!p._endClamp)},R),p.update()},p.adjustPinSpacing=function(B){if(ke&&B){var D=ke.indexOf(E.d)+1;ke[D]=parseFloat(ke[D])+B+Me,ke[1]=parseFloat(ke[1])+B+Me,E0(ke)}},p.disable=function(B,D){if(p.enabled&&(B!==!1&&p.revert(!0,!0),p.enabled=p.isActive=!1,D||G&&G.pause(),Ft=0,He&&(He.uncache=1),oe&&Pe(a,"refreshInit",oe),Rt&&(Rt.pause(),Ze.tween&&Ze.tween.kill()&&(Ze.tween=0)),!U)){for(var P=V.length;P--;)if(V[P].scroller===M&&V[P]!==p)return;Pe(M,"resize",nr),U||Pe(M,"scroll",k0)}},p.kill=function(B,D){p.disable(B,D),G&&!D&&G.kill(),l&&delete Ms[l];var P=V.indexOf(p);P>=0&&V.splice(P,1),P===at&&Zr>0&&at--,P=0,V.forEach(function(R){return R.scroller===p.scroller&&(P=1)}),P||lt||(p.scroll.rec=0),r&&(r.scrollTrigger=null,B&&r.revert({kill:!1}),D||r.kill()),dt&&[dt,pt,v,_t].forEach(function(R){return R.parentNode&&R.parentNode.removeChild(R)}),dr===p&&(dr=0),u&&(He&&(He.uncache=1),P=0,V.forEach(function(R){return R.pin===u&&P++}),P||(He.spacer=0)),t.onKill&&t.onKill(p)},V.push(p),p.enable(!1,!1),ii&&ii(p),r&&r.add&&!ve){var Z=p.update;p.update=function(){p.update=Z,H.cache++,$||_e||p.refresh()},I.delayedCall(.01,p.update),ve=.01,$=_e=0}else p.refresh();u&&bc()},a.register=function(t){return T0||(I=t||Na(),Fa()&&window.document&&a.enable(),T0=tr),T0},a.defaults=function(t){if(t)for(var r in t)Wr[r]=t[r];return Wr},a.disable=function(t,r){tr=0,V.forEach(function(s){return s[r?"kill":"disable"](t)}),Pe(Y,"wheel",k0),Pe(ne,"scroll",k0),clearInterval(Hr),Pe(ne,"touchcancel",Kt),Pe(ee,"touchstart",Kt),Ur(Pe,ne,"pointerdown,touchstart,mousedown",ba),Ur(Pe,ne,"pointerup,touchend,mouseup",xa),rn.kill(),Yr(Pe);for(var n=0;n<H.length;n+=3)Gr(Pe,H[n],H[n+1]),Gr(Pe,H[n],H[n+2])},a.enable=function(){if(Y=window,ne=document,St=ne.documentElement,ee=ne.body,I&&(ur=I.utils.toArray,sr=I.utils.clamp,Es=I.core.context||Kt,vs=I.core.suppressOverwrites||Kt,zs=Y.history.scrollRestoration||"auto",Bs=Y.pageYOffset||0,I.core.globals("ScrollTrigger",a),ee)){tr=1,C0=document.createElement("div"),C0.style.height="100vh",C0.style.position="absolute",ja(),gc(),pe.register(I),a.isTouch=pe.isTouch,Bi=pe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cs=pe.isTouch===1,ze(Y,"wheel",k0),Ps=[Y,ne,St,ee],I.matchMedia?(a.matchMedia=function(c){var d=I.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},I.addEventListener("matchMediaInit",function(){return Ns()}),I.addEventListener("matchMediaRevert",function(){return Wa()}),I.addEventListener("matchMedia",function(){$i(0,1),r0("matchMedia")}),I.matchMedia().add("(orientation: portrait)",function(){return xs(),xs})):console.warn("Requires GSAP 3.11.0 or later"),xs(),ze(ne,"scroll",k0);var t=ee.hasAttribute("style"),r=ee.style,n=r.borderTopStyle,s=I.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=hi(ee),Se.m=Math.round(o.top+Se.sc())||0,Xe.m=Math.round(o.left+Xe.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),t||(ee.setAttribute("style",""),ee.removeAttribute("style")),Hr=setInterval(Sa,250),I.delayedCall(.5,function(){return Vr=0}),ze(ne,"touchcancel",Kt),ze(ee,"touchstart",Kt),Ur(ze,ne,"pointerdown,touchstart,mousedown",ba),Ur(ze,ne,"pointerup,touchend,mouseup",xa),Ss=I.utils.checkPrefix("transform"),en.push(Ss),T0=Je(),rn=I.delayedCall(.2,$i).pause(),S0=[ne,"visibilitychange",function(){var c=Y.innerWidth,d=Y.innerHeight;ne.hidden?(_a=c,va=d):(_a!==c||va!==d)&&nr()},ne,"DOMContentLoaded",$i,Y,"load",$i,Y,"resize",nr],Yr(ze),V.forEach(function(c){return c.enable(0,1)}),l=0;l<H.length;l+=3)Gr(Pe,H[l],H[l+1]),Gr(Pe,H[l],H[l+2])}},a.config=function(t){"limitCallbacks"in t&&(ws=!!t.limitCallbacks);var r=t.syncInterval;r&&clearInterval(Hr)||(Hr=r)&&setInterval(Sa,r),"ignoreMobileResize"in t&&(Cs=a.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Yr(Pe)||Yr(ze,t.autoRefreshEvents||"none"),Oa=(t.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(t,r){var n=st(t),s=H.indexOf(n),o=t0(n);~s&&H.splice(s,o?6:2),r&&(o?Ht.unshift(Y,r,ee,r,St,r):Ht.unshift(n,r))},a.clearMatchMedia=function(t){V.forEach(function(r){return r._ctx&&r._ctx.query===t&&r._ctx.kill(!0,!0)})},a.isInViewport=function(t,r,n){var s=(Tt(t)?st(t):t).getBoundingClientRect(),o=s[n?Qi:Zi]*r||0;return n?s.right-o>0&&s.left+o<Y.innerWidth:s.bottom-o>0&&s.top+o<Y.innerHeight},a.positionInViewport=function(t,r,n){Tt(t)&&(t=st(t));var s=t.getBoundingClientRect(),o=s[n?Qi:Zi],l=r==null?o/2:r in on?on[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return n?(s.left+l)/Y.innerWidth:(s.top+l)/Y.innerHeight},a.killAll=function(t){if(V.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var r=i0.killAll||[];i0={},r.forEach(function(n){return n()})}},a}();N.version="3.12.7";N.saveStyles=function(a){return a?ur(a).forEach(function(e){if(e&&e.style){var i=kt.indexOf(e);i>=0&&kt.splice(i,5),kt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),I.core.getCache(e),Es())}}):kt};N.revert=function(a,e){return Ns(!a,e)};N.create=function(a,e){return new N(a,e)};N.refresh=function(a){return a?nr(!0):(T0||N.register())&&$i(!0)};N.update=function(a){return++H.cache&&fi(a===!0?2:0)};N.clearScrollMemory=Xa;N.maxScroll=function(a,e){return $t(a,e?Xe:Se)};N.getScrollFunc=function(a,e){return di(st(a),e?Xe:Se)};N.getById=function(a){return Ms[a]};N.getAll=function(){return V.filter(function(a){return a.vars.id!=="ScrollSmoother"})};N.isScrolling=function(){return!!zt};N.snapDirectional=Fs;N.addEventListener=function(a,e){var i=i0[a]||(i0[a]=[]);~i.indexOf(e)||i.push(e)};N.removeEventListener=function(a,e){var i=i0[a],t=i&&i.indexOf(e);t>=0&&i.splice(t,1)};N.batch=function(a,e){var i=[],t={},r=e.interval||.016,n=e.batchMax||1e9,s=function(c,d){var f=[],g=[],u=I.delayedCall(r,function(){d(f,g),f=[],g=[]}).pause();return function(m){f.length||u.restart(!0),f.push(m.trigger),g.push(m),n<=f.length&&u.progress(1)}},o;for(o in e)t[o]=o.substr(0,2)==="on"&&Ke(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return Ke(n)&&(n=n(),ze(N,"refresh",function(){return n=e.batchMax()})),ur(a).forEach(function(l){var c={};for(o in t)c[o]=t[o];c.trigger=l,i.push(N.create(c))}),i};var Ia=function(e,i,t,r){return i>r?e(r):i<0&&e(0),t>r?(r-i)/(t-i):t<0?i/(i-t):1},Ts=function a(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(pe.isTouch?" pinch-zoom":""):"none",e===St&&a(ee,i)},Kr={auto:1,scroll:1},Cc=function(e){var i=e.event,t=e.target,r=e.axis,n=(i.changedTouches?i.changedTouches[0]:i).target,s=n._gsap||I.core.getCache(n),o=Je(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;n&&n!==ee&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Kr[(l=Pt(n)).overflowY]||Kr[l.overflowX]));)n=n.parentNode;s._isScroll=n&&n!==t&&!t0(n)&&(Kr[(l=Pt(n)).overflowY]||Kr[l.overflowX]),s._isScrollT=o}(s._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Ka=function(e,i,t,r){return pe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Cc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return t&&ze(ne,pe.eventTypes[0],za,!1,!0)},onDisable:function(){return Pe(ne,pe.eventTypes[0],za,!0)}})},Ec=/(input|label|select|textarea)/i,Pa,za=function(e){var i=Ec.test(e.target.tagName);(i||Pa)&&(e._gsapAllow=!0,Pa=i)},Lc=function(e){Ki(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,t=i.normalizeScrollX,r=i.momentum,n=i.allowNestedScroll,s=i.onRelease,o,l,c=st(e.target)||St,d=I.core.globals().ScrollSmoother,f=d&&d.get(),g=Bi&&(e.content&&st(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=di(c,Se),m=di(c,Xe),h=1,_=(pe.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,x=0,b=Ke(r)?function(){return r(o)}:function(){return r||2.8},T,w,k=Ka(c,e.type,!0,n),C=function(){return w=!1},y=Kt,L=Kt,S=function(){l=$t(c,Se),L=sr(Bi?1:0,l),t&&(y=sr(0,$t(c,Xe))),T=e0},E=function(){g._gsap.y=ir(parseFloat(g._gsap.y)+u.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},O=function(){if(w){requestAnimationFrame(C);var Q=ir(o.deltaY/2),se=L(u.v-Q);if(g&&se!==u.v+u.offset){u.offset=se-u.v;var p=ir((parseFloat(g&&g._gsap.y)||0)-u.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+p+", 0, 1)",g._gsap.y=p+"px",u.cacheID=H.cache,fi()}return!0}u.offset&&E(),w=!0},M,W,U,K,X=function(){S(),M.isActive()&&M.vars.scrollY>l&&(u()>l?M.progress(1)&&u(l):M.resetTo("scrollY",l))};return g&&I.set(g,{y:"+=0"}),e.ignoreCheck=function(A){return Bi&&A.type==="touchmove"&&O(A)||h>1.05&&A.type!=="touchstart"||o.isGesturing||A.touches&&A.touches.length>1},e.onPress=function(){w=!1;var A=h;h=ir((Y.visualViewport&&Y.visualViewport.scale||1)/_),M.pause(),A!==h&&Ts(c,h>1.01?!0:t?!1:"x"),W=m(),U=u(),S(),T=e0},e.onRelease=e.onGestureStart=function(A,Q){if(u.offset&&E(),!Q)K.restart(!0);else{H.cache++;var se=b(),p,oe;t&&(p=m(),oe=p+se*.05*-A.velocityX/.227,se*=Ia(m,p,oe,$t(c,Xe)),M.vars.scrollX=y(oe)),p=u(),oe=p+se*.05*-A.velocityY/.227,se*=Ia(u,p,oe,$t(c,Se)),M.vars.scrollY=L(oe),M.invalidate().duration(se).play(.01),(Bi&&M.vars.scrollY>=l||p>=l-1)&&I.to({},{onUpdate:X,duration:se})}s&&s(A)},e.onWheel=function(){M._ts&&M.pause(),Je()-x>1e3&&(T=0,x=Je())},e.onChange=function(A,Q,se,p,oe){if(e0!==T&&S(),Q&&t&&m(y(p[2]===Q?W+(A.startX-A.x):m()+Q-p[1])),se){u.offset&&E();var $e=oe[2]===se,At=$e?U+A.startY-A.y:u()+se-oe[1],he=L(At);$e&&At!==he&&(U+=he-At),u(he)}(se||Q)&&fi()},e.onEnable=function(){Ts(c,t?!1:"x"),N.addEventListener("refresh",X),ze(Y,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),k.enable()},e.onDisable=function(){Ts(c,!0),Pe(Y,"resize",X),N.removeEventListener("refresh",X),k.kill()},e.lockAxis=e.lockAxis!==!1,o=new pe(e),o.iOS=Bi,Bi&&!u()&&u(1),Bi&&I.ticker.add(Kt),K=o._dc,M=I.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ja(u,u(),function(){return M.pause()})},onUpdate:fi,onComplete:K.vars.onComplete}),o};N.sort=function(a){if(Ke(a))return V.sort(a);var e=Y.pageYOffset||0;return N.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+Y.innerHeight}),V.sort(a||function(i,t){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};N.observe=function(a){return new pe(a)};N.normalizeScroll=function(a){if(typeof a>"u")return ot;if(a===!0&&ot)return ot.enable();if(a===!1){ot&&ot.kill(),ot=a;return}var e=a instanceof pe?a:Lc(a);return ot&&ot.target===e.target&&ot.kill(),t0(e.target)&&(ot=e),e};N.core={_getVelocityProp:qr,_inputObserver:Ka,_scrollers:H,_proxies:Ht,bridge:{ss:function(){zt||r0("scrollStart"),zt=Je()},ref:function(){return je}}};Na()&&I.registerPlugin(N);var Mc={threshold:.7},$a=Array.from(document.querySelectorAll(".out-of-question")),Qa=document.getElementById("intro-grid-one"),Za=document.getElementById("intro-grid-two"),Bc=document.querySelector(".tiny-boy"),Ic=document.querySelectorAll(".sad-child"),ln=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&$a.forEach((t,r)=>{r===0&&setTimeout(()=>{t.classList.remove("out-of-question")},500),r===1&&(setTimeout(()=>{t.classList.remove("out-of-question")},1e3),setTimeout(()=>{t.classList.add("upn-out-of-question")},1750)),r===2&&(setTimeout(()=>{t.classList.remove("out-of-question")},1750),setTimeout(()=>{t.classList.add("upn-out-of-question")},2500),setTimeout(()=>{$a[0].classList.add("upn-out-of-question")},3e3),setTimeout(()=>{Qa.classList.add("get-up"),Za.classList.add("get-down")},3500),setTimeout(()=>{Qa.remove(),Za.remove(),Bc.classList.remove("tiny-boy")},4e3),setTimeout(()=>{Ic.forEach(n=>{n.classList.remove("sad-child")})},4500),setTimeout(()=>{Xs("class","balloon-ball","add","in-wind")},5e3))});else return})},Mc);var e1=document.getElementById("brianSecondPageBox"),Pc=document.getElementById("brianSecondChair"),zc={threshold:.4},cn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log(i.target.classlist),i.isIntersecting)i.isIntersecting&&(e1.classList.remove("unseen"),Pc.classList.add("slide-chair-in"),e1.classList.add("brianUp"));else return})},zc);var Ac={threshold:.7},A3=Array.from(document.querySelectorAll("iframe")),O3=document.querySelector(".marketing--pitch-box"),dn=new IntersectionObserver((a,e)=>{a.forEach(i=>{if(console.log("func"),i.isIntersecting)i.isIntersecting&&console.log("here");else return})},Ac);var Ii=document.getElementById("homeMonitor"),q3=document.getElementById("mob_fl_arrow"),H3=document.querySelector(".back--drop");var V3=document.querySelectorAll("iframe"),t1=a=>{if(a==="intro"){document.querySelector(".hm--display").classList.remove("op0");return}switch(console.log(a.target),a.target.id){case"mobileToggle":homeWrap.scrollIntoView({behavior:"smooth"}),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--ball":document.getElementById("m--ball").classList.add("popped");break;case"m--hi":setTimeout(()=>{Ii.innerHTML=`
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
      
      `},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--web":Ii.innerHTML=`
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
      
      
      
      
      
      
      
      
      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle"),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},5);break;case"m--video":Ii.innerHTML=`
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
   
      
      
      `,setTimeout(()=>{document.querySelector(".movie--theater-screen").classList.add("glow"),document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},500),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--marketing":Ii.innerHTML=`
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
      `;let i=document.querySelector(".marketing--pitch-box");setTimeout(()=>{i.style.paddingTop="10px"},2e3),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--nerd":Ii.innerHTML=`
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
      `;let r=[...document.getElementsByTagName("li")],n=Array.from(document.querySelectorAll(".shrunk"));setTimeout(()=>{r.forEach(l=>{l.classList.remove("list-fixer")})},10),setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--reference":Ii.innerHTML=`
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

      `,document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"m--contact":Ii.innerHTML=`
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
       
        </div>`,setTimeout(()=>{document.querySelectorAll(".transition--cover").forEach(l=>{l.classList.remove("transition--cover")})},250),document.getElementById("mobileToggle").classList.toggle("toggle"),document.querySelector(".homeNavShell").classList.toggle("toggle"),document.querySelector(".sky").classList.toggle("toggle");break;case"cta":Ii.innerHTML=`
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
      
      `;break;case"paypal":window.open("https://paypal.me/BStrout","_blank");break;case"venmo":window.open("https://account.venmo.com/u/brian-strout-2","_blank");break;case"fugi":window.open("https://lafugitiva.netlify.app","_blank");break;case"winter":window.open("https://winterdemo.netlify.app/","_blank");break;case"mookies":window.open("https://mookies.netlify.app/","_blank");break;case"masha":window.open("https://mashaoflisbon.netlify.app/","_blank");break;case"rotary":window.open("https://www.youtube.com/watch?v=RNCwRMOqxVs","_blank");break;case"ghost":window.open("https://www.youtube.com/watch?v=l_2cQxfxDrs","_blank");break;case"chets":window.open("https://www.youtube.com/watch?v=q5HUqWw6BOk&t=28s","_blank");break;case"linkig":window.open("https://www.instagram.com/strout.co","_blank");break;case"linkfb":window.open("https://www.facebook.com/strout.co","_blank");break;case"linkyt":window.open("https://www.youtube.com/@stroutco2070","_blank");break;case"linkgh":window.open("https://www.github.com/brianstrout","_blank");break;case"submit":a.preventDefault(),pr();break;case"mob_fl_arrow":console.log("arrow clicked");let s=document.getElementById("fl_ex_list"),o=s.firstElementChild;s.appendChild(o),console.log(o);break}};Ei.registerPlugin(N);var un="src/components/images/falling1.png",i1="src/components/images/falling2.png",hn="src/components/images/falling5.png",qs="src/components/images/falling4.png",r1="src/components/images/falling6.png",Oc="src/components/images/panic1.png",n1="src/components/images/panic4.png",Dc="src/components/images/panic3.png",Rc=document.getElementById("image"),Hs=0,Vs=[un,i1,un,r1,hn,qs,hn,qs,un,hn,qs,hn,r1,un,i1],Fc=[Oc,n1,Dc,n1];function Nc(){++Hs>=Vs.length&&(Hs=0),Rc.src=Vs[Hs]}var id=document.getElementById("brianSecondPage"),rd=document.getElementById("brianSecondPageBox"),nd=document.getElementById("switchFree"),sd=document.getElementById("switchPort"),od=document.getElementById("freelancePresenter"),ad=document.getElementById("backCloud"),ld=document.querySelector(".switchwrap"),qc=document.querySelector(".homeWrap"),Hc=document.querySelectorAll("#target"),cd=document.getElementById("launch"),dd=document.getElementById("clear"),Vc=!1,Yc=document.getElementById("top-target"),Uc=document.getElementById("hi"),Gc=document.getElementById("hiBox"),Wc=document.getElementById("iam"),Xc=document.getElementById("iamBox"),jc=document.getElementById("brianBox"),Jc=document.getElementById("strout"),Kc=document.getElementById("stroutBox"),$c=document.getElementById("title"),Qc=document.getElementById("titleBox"),Zc=document.querySelectorAll(".first-letters"),e2=document.getElementById("first-n"),s1=document.getElementById("fallingShell"),t2=document.getElementById("wrapper"),i2=document.getElementById("moodring"),r2=document.querySelectorAll(".cloudsForward"),n2=document.querySelectorAll(".cloudsBackwards"),o1=[...r2],a1=[...n2],ud=document.getElementById("remainder"),hd=document.getElementById("c1"),fd=document.getElementById("c2"),gd=document.getElementById("c3"),md=document.getElementById("c4"),pd=document.getElementById("c5"),_d=document.getElementById("c6"),vd=document.getElementById("c7"),wd=document.getElementById("c8"),yd=document.getElementById("c9"),bd=document.getElementById("c10"),xd=document.getElementById("c11"),s2=document.getElementById("sun"),o2=document.getElementById("moon"),kd=document.getElementById("target"),Td=document.getElementById("switchPort"),Sd=document.getElementById("brianSecondChair"),Cd=document.getElementById("brianBlurbP"),Ed=document.getElementById("listOfSkills"),a2=document.querySelectorAll(".shrunk"),Ld=[...a2],Md=document.getElementById("listed_skills_media"),l2=document.getElementsByTagName("li"),Bd=[...l2],Id=document.getElementById("absolute-cloud"),Pd=document.getElementById("copy-gmail"),zd=document.getElementById("brianlinkedin"),Ad=document.getElementById("briangithub"),Od=document.getElementById("resume-link"),Dd=document.querySelectorAll("iframe"),Rd=document.getElementById("fallingSecond"),Fd=document.getElementById("castle"),c2=document.querySelectorAll("#introToServices"),d2=Array.from(document.querySelectorAll(".nav--link")),l1=()=>{Hc.forEach(r=>{cn.observe(r)}),c2.forEach(r=>{ln.observe(r)}),dn,setInterval(Nc,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),i2.addEventListener("click",()=>{t2.classList.toggle("dark"),s2.classList.toggle("sunset"),o2.classList.toggle("sunset")});let e=()=>{o1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),a1.forEach(r=>{r.classList.add("clouds-movement-background")})},i=()=>{s1.classList.add("falling"),setTimeout(()=>{Vc=!0},3500)};window.addEventListener("load",()=>{Yc.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{Uc.classList.remove("translatedHi"),Wc.classList.remove("translatedIam"),[...Zc].forEach(n=>{n.classList.add("first-name-falling-in")}),Jc.classList.remove("translatedStrout"),$c.classList.remove("translatedTitle"),setTimeout(()=>{e()},2e3),setTimeout(()=>{i()},3500)},1e3),setTimeout(()=>{t()},7500)}),e2.addEventListener("transitionend",function(){});let t=()=>{Gc.classList.add("up-and-out"),Xc.classList.add("up-and-out"),jc.classList.add("up-and-out"),Kc.classList.add("up-and-out"),Qc.classList.add("up-and-out"),setTimeout(()=>{Vs=Fc},2e3),setTimeout(()=>{a.style.overflow="visible",s1.classList.add("down-and-out"),o1.forEach(r=>{r.classList.add("unseen")}),a1.forEach(r=>{r.classList.add("unseen")})},2500),setTimeout(()=>{qc.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},2800),setTimeout(()=>{fallingSecond.classList.add("toEarth")},4500),setTimeout(()=>{d2.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),O0("andgo")},6500)}};Ei.registerPlugin(N);var fn="src/components/images/falling1.png",c1="src/components/images/falling2.png",gn="src/components/images/falling5.png",Ys="src/components/images/falling4.png",d1="src/components/images/falling6.png",u2="src/components/images/panic1.png",u1="src/components/images/panic4.png",h2="src/components/images/panic3.png",Qd=document.getElementById("image");var f2=[fn,c1,fn,d1,gn,Ys,gn,Ys,fn,gn,Ys,gn,d1,fn,c1],g2=[u2,u1,h2,u1];function m2(){}var Zd=document.getElementById("brianSecondPage"),eu=document.getElementById("brianSecondPageBox"),tu=document.getElementById("switchFree"),iu=document.getElementById("switchPort"),ru=document.getElementById("freelancePresenter"),nu=document.getElementById("backCloud"),su=document.querySelector(".switchwrap"),p2=document.querySelector(".homeWrap"),_2=document.querySelectorAll("#target"),ou=document.getElementById("launch"),au=document.getElementById("clear"),v2=!1,w2=document.getElementById("top-target"),y2=document.getElementById("hi"),b2=document.getElementById("hiBox"),x2=document.getElementById("iam"),k2=document.getElementById("iamBox"),T2=document.getElementById("brianBox"),S2=document.getElementById("strout"),C2=document.getElementById("stroutBox"),E2=document.getElementById("title"),L2=document.getElementById("titleBox"),M2=document.querySelectorAll(".first-letters"),B2=document.getElementById("first-n"),h1=document.getElementById("fallingShell"),I2=document.getElementById("wrapper"),P2=document.getElementById("moodring"),z2=document.querySelectorAll(".cloudsForward"),A2=document.querySelectorAll(".cloudsBackwards"),f1=[...z2],g1=[...A2],lu=document.getElementById("remainder"),cu=document.getElementById("c1"),du=document.getElementById("c2"),uu=document.getElementById("c3"),hu=document.getElementById("c4"),fu=document.getElementById("c5"),gu=document.getElementById("c6"),mu=document.getElementById("c7"),pu=document.getElementById("c8"),_u=document.getElementById("c9"),vu=document.getElementById("c10"),wu=document.getElementById("c11"),O2=document.getElementById("sun"),D2=document.getElementById("moon"),yu=document.getElementById("target"),bu=document.getElementById("switchPort"),xu=document.getElementById("brianSecondChair"),ku=document.getElementById("brianBlurbP"),Tu=document.getElementById("listOfSkills"),R2=document.querySelectorAll(".shrunk"),Su=[...R2],Cu=document.getElementById("listed_skills_media"),F2=document.getElementsByTagName("li"),Eu=[...F2],Lu=document.getElementById("absolute-cloud"),Mu=document.getElementById("copy-gmail"),Bu=document.getElementById("brianlinkedin"),Iu=document.getElementById("briangithub"),Pu=document.getElementById("resume-link"),zu=document.querySelectorAll("iframe"),Au=document.getElementById("fallingSecond"),Ou=document.getElementById("castle"),N2=document.querySelectorAll("#introToServices"),q2=Array.from(document.querySelectorAll(".nav--link")),m1=()=>{console.log("in development ksipping animation"),_2.forEach(r=>{cn.observe(r)}),N2.forEach(r=>{ln.observe(r)}),dn,setInterval(m2,200);let a=document.body;window.addEventListener("onbeforeload",()=>{window.scrollTo(0,0)}),P2.addEventListener("click",()=>{I2.classList.toggle("dark"),O2.classList.toggle("sunset"),D2.classList.toggle("sunset")});let e=()=>{f1.forEach(r=>{r.classList.add("clouds-movement-foreground")}),g1.forEach(r=>{r.classList.add("clouds-movement-background")})},i=()=>{h1.classList.add("falling"),setTimeout(()=>{v2=!0},0)};window.addEventListener("load",()=>{w2.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{y2.classList.remove("translatedHi"),x2.classList.remove("translatedIam"),[...M2].forEach(n=>{n.classList.add("first-name-falling-in")}),S2.classList.remove("translatedStrout"),E2.classList.remove("translatedTitle"),setTimeout(()=>{e()},0),setTimeout(()=>{i()},0)},0),setTimeout(()=>{t()},0)}),B2.addEventListener("transitionend",function(){});let t=()=>{b2.classList.add("up-and-out"),k2.classList.add("up-and-out"),T2.classList.add("up-and-out"),C2.classList.add("up-and-out"),L2.classList.add("up-and-out"),setTimeout(()=>{f2=g2},0),setTimeout(()=>{a.style.overflow="visible",h1.classList.add("down-and-out"),f1.forEach(r=>{r.classList.add("unseen")}),g1.forEach(r=>{r.classList.add("unseen")})},0),setTimeout(()=>{p2.scrollIntoView({behavior:"smooth"}),document.getElementById("wrapperTop").style="height: 0vh"},0),setTimeout(()=>{fallingSecond.classList.add("toEarth")},0),setTimeout(()=>{q2.forEach(r=>{r.classList.add("introd")}),document.getElementById("mobileToggle").classList.remove("offset--right"),t1("intro")},0)}};Ei.registerPlugin(N);var H2=!1;H2?m1():l1();document.addEventListener("click",a=>{O0(a)});var Uu=document.getElementById("portgithub"),Gu=document.getElementById("mashagithub"),Wu=document.getElementById("mashanetlify"),Xu=document.getElementById("fugagithub"),ju=document.getElementById("fuganetlify");wrapper.addEventListener("click",a=>{if(!(a.target.nodeName==="BUTTON"))return;switch(a.target.id){case"portgithub":n0("github.com/BrianStrout/Portfolio");break;case"mashagithub":n0("github.com/BrianStrout/masha");break;case"mashanetlify":n0("mashaoflisbon.netlify.app/");break;case"fugagithub":n0("github.com/BrianStrout/Fugitiva");break;case"fuganetlify":n0("lafugitiva.netlify.app/");break;case"rotaryyoutube":n0("www.youtube.com/watch?v=RNCwRMOqxVs");break;case"gitmyoutube":n0("www.youtube.com/watch?v=l_2cQxfxDrs");break;default:break}});var n0=a=>{window.open(`https://${a}`,"_blank")};var V2=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){V2=!0}}))}catch{}var Ju="onwheel"in document.createElement("div")?"wheel":"mousewheel";var Y2=document.querySelectorAll(".web__process--presenter");Y2.forEach(a=>{vn.observe(a)});vn.observe(document.getElementById("gridHeader"));var U2=document.querySelectorAll(".fademe");U2.forEach(a=>{js.observe(a)});var G2=Ei.timeline({scrollTrigger:{scroller:"#sc__websites",trigger:".scroll__trigger",markers:!1,start:"top 90%",end:"bottom 0%",scrub:!0}});G2.to(".sc__right",{marginLeft:"0%"},"a").to(".sc__left",{marginLeft:"0%"},"a");})();
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
