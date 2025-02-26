import { formResetter } from "./formReset.js";

const submitter = (e) => {
  console.log("we are live in submitter about to to predef");
  // e.preventDefault();
  const formSelector = document.getElementById("contactForm");
  const serviceID = "service_9l2h8gg";
  // const serviceID = "bad bad";
  const templateID = "template_36awvk9";

  let grabbed__text = document.getElementById("formMessage").value;

  emailjs
    .sendForm(serviceID, templateID, formSelector, "oYymItkIoREaVvBlM")
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      // alert("SUCCESS!");
    })
    .catch((e) => {
      console.error(e.message);
      console.log("confirming bad catcher here"); // "oh, no!"

      document.getElementById("contactForm").innerHTML = `
      
<h2>uh oh....</h2>
<br>
<p style="font-size: 22px" > it looks like something went wrong with the back end magic. 
Please shoot your message over directly in an email to strout.co@gmail.com.
 Here's the text your were using to copy/paste<br> 
 ${grabbed__text}
 <br><br>
 super sorry, please mention the problem with the for when you drop a line.</p>
      <br><br>-Brian</p>`;
    });
  formResetter();
};

export { submitter };
