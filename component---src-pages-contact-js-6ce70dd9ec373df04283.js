(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i={_origin:"https://api.emailjs.com"},r=function(e,t,a){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=s((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,l){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,a=new c(t);200===a.status||"OK"===a.text?n(a):l(a)})),r.addEventListener("error",(function(e){var t=e.target;l(new c(t))})),r.open("POST",i._origin+e,!0),Object.keys(a).forEach((function(e){r.setRequestHeader(e,a[e])})),r.send(t)}))},u=function(e,t,a,n){var l=n||i._userID;r(l,e,t);var o={lib_version:"3.2.0",user_id:l,service_id:e,template_id:t,template_params:a};return m("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},d=a("70lj"),p=a("Bl7J"),f=function(e){var t=e.fieldName;return l.a.createElement("span",{style:{color:"#ff4542"}}," — "+t+" is required!")};t.default=function(e){var t=e.data.site,a=Object(n.useState)(!1),i=a[0],r=a[1],o=Object(n.useState)([]),s=o[0],c=o[1];return l.a.createElement(p.a,null,l.a.createElement(d.a,{title:"Contact | "+t.siteMetadata.title,description:"Contact page of "+t.siteMetadata.description}),l.a.createElement("div",{className:"two-grids -contact"},l.a.createElement("div",null,l.a.createElement("h1",{className:"post-title"},"Contact us"),l.a.createElement("div",{className:"primary-content"},"If you're interested in joining the lab, collaborating, or have any inquiries, please don't hesitate to send us an email at",l.a.createElement("a",{href:"mailto:rise.bkai@gmail.com"}," ","rise.bkai@gmail.com"," "),"or use the form on this page →"),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"Student Recruitment for Research Team:"),"The Research Group for Intelligent Software Engineering (RISE) is looking for undergraduate students driven by excellence, excited about innovation, and looking to make a difference. If this sounds like you, you have come to the right place!"),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"Your Role:"),"The students will be instructed by supervisors and participate in professional, scientific research. The research topics include but are not limited to:",l.a.createElement("ul",null,l.a.createElement("li",null,"Automated Bug Fixing"),l.a.createElement("li",null,"Just-in-time Defect Prediction"),l.a.createElement("li",null,"Automatic Code Summarization"),l.a.createElement("li",null,"Software Supply Chain Security"),l.a.createElement("li",null,"Automated Software Verification"),l.a.createElement("li",null,"Bidirectional Programming")),"The position holder will be required to perform the following tasks:",l.a.createElement("ul",null,l.a.createElement("li",null,"Complete the tasks assigned by mentors"),l.a.createElement("li",null,"Perform literature review and empirical studies on assigned topics"),l.a.createElement("li",null,"Implement solutions"),l.a.createElement("li",null,"Present and report at least once a week"),l.a.createElement("li",null,"Communicate and coordinate with partners"),l.a.createElement("li",null,"Plan and participate in project meetings"))),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"Qualifications:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Have a passion for academic research or have a studying orientation in advanced countries for postgraduate (Master's or Ph.D.)"),l.a.createElement("li",null,"Interest in one of the following areas: Software Engineering, Artificial Intelligence, Machine Learning"),l.a.createElement("li",null,"Good background in Deep Learning or Program Analysis/Software Testing or Web Development"),l.a.createElement("li",null,"Strong programming skills"),l.a.createElement("li",null,"English skills: reading and writing (optional)"))),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"Office:")," Hanoi University of Science and Technology, B1 Building, Room 409, Tran Dai Nghia Road, Hai Ba Trung District, Hanoi, Vietnam.")),l.a.createElement("div",null,l.a.createElement("form",{className:"form-container",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),a={name:t.get("w3lName"),replyTo:t.get("w3lSender"),subject:t.get("w3lSubject"),message:t.get("w3lMessage")},n=[];Object.entries(a).forEach((function(e){var t=e[0];e[1]?n=n.filter((function(e){return e!==t})):n.push(t)})),c(n),0===n.length&&u("service_uqpndcg","template_m09ybqm",a,"t2_39GqpP09bl4pnN").then((function(e){console.log(e.text),r(!0)}),(function(e){console.error(e.text)}))}},i?l.a.createElement("p",{style:{margin:0,lineHeight:"1.5em"}},"Your message has successfully been sent! It generally takes one to two days for us to reply."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lName"},"Name"," ",s.includes("name")&&l.a.createElement(f,{fieldName:"Name"})),l.a.createElement("input",{type:"text",name:"w3lName",id:"w3lName"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lSender"},"Email",s.includes("replyTo")&&l.a.createElement(f,{fieldName:"Email"})),l.a.createElement("input",{type:"email",name:"w3lSender",id:"w3lSender"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lSubject"},"Subject",s.includes("subject")&&l.a.createElement(f,{fieldName:"Subject"})),l.a.createElement("input",{type:"text",name:"w3lSubject",id:"w3lSubject"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lMessage"},"Message",s.includes("message")&&l.a.createElement(f,{fieldName:"Message"})),l.a.createElement("textarea",{name:"w3lMessage",id:"w3lMessage"})),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("input",{type:"submit",className:"button -primary",style:{marginRight:0}})))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-6ce70dd9ec373df04283.js.map