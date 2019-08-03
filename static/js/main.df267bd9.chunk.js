(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),s=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"top-left-corner"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"tutormatch logo",src:"/tutorstartup/assets/images/tutormatch-logo.svg"}))),r.a.createElement("div",{className:"top-right-corner"},r.a.createElement("a",{href:"/",id:"sign-up-link"},"Become a tutor"),r.a.createElement("button",{className:"ui button"},"Sign in")))),r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",{className:"ui center header"},"The place where students and tutors meet"),r.a.createElement("p",{id:"header-subtitle"},"Find out who can help you take your education to the next level."),r.a.createElement("div",{className:"ui column centered grid"},r.a.createElement("button",{id:"get-started-button",className:"ui green button"},"Get started now"))))},i=a(4),u=a(1),o=function(e){var t=e.cities,a=e.sortHandler,c=e.setCityFilter,l=Object(n.useState)("byname"),s=Object(u.a)(l,2),i=s[0],o=s[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),E=d[0],b=d[1],f=function(e){o(e),a(e)},v=t.map(function(e){return r.a.createElement("button",{key:e,className:"ui button ".concat(E===e?"green":""),onClick:function(){return function(e){b(E===e?"":e),c(e)}(e)}},r.a.createElement("p",null,e))});return r.a.createElement("div",{className:"filter-and-sort-menu"},r.a.createElement("div",null,r.a.createElement("p",{className:"filter-button-label"},"Filter by:"),r.a.createElement("div",{className:"three ui buttons filter-buttons"},v)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",{className:"filter-button-label"},"Sort by: "),r.a.createElement("div",{className:"ui buttons filter-buttons"},r.a.createElement("button",{onClick:function(){return f("byname")},className:"ui button ".concat("byname"===i?"green":"")},"Name"),r.a.createElement("button",{onClick:function(){return f("bycity")},className:"ui button ".concat("bycity"===i?"green":"")},"City"))))},m=function(e){var t=e.name,a=e.city,n=e.image;return r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:n,alt:"tutor",style:{maxWidth:"100%"}}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t)),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"City"),r.a.createElement("div",{className:"ui label"},a),r.a.createElement("p",null,"Students so far"),r.a.createElement("img",{className:"ui avatar image",src:"/tutorstartup/assets/images/student-photo.jpg",alt:"avatar"}),r.a.createElement("img",{className:"ui avatar image",src:"/tutorstartup/assets/images/student-photo.jpg",alt:"avatar"}),r.a.createElement("img",{className:"ui avatar image",src:"/tutorstartup/assets/images/student-photo.jpg",alt:"avatar"})))},d=function(e){var t=e.tutors,a=e.showAllTutors,c=e.hasFetchedAll,l=e.sortingBy,s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],d=i[1];Object(n.useEffect)(function(){d(!!c)},[c]);var E=t.sort(function(e,t){return"byname"===l?e.name<t.name?-1:1:"bycity"===l?e.address.city<t.address.city?-1:1:void 0}).map(function(e){return r.a.createElement(m,{key:e.id,name:e.name,city:e.address.city,image:"/tutorstartup/assets/images/user-photo.jpg"})});return r.a.createElement("div",null,r.a.createElement("div",{className:"ui container centered cards"},E),o?null:r.a.createElement("div",{className:"ui column centered grid"},r.a.createElement("button",{className:"ui button",id:"all-tutors-button",onClick:function(){a()}},"See all tutors")))},E=(a(11),function(){var e="https://jsonplaceholder.typicode.com/users",t=Object(n.useState)("byname"),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),E=m[0],b=m[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),g=v[0],h=v[1],p=Object(n.useState)(!1),y=Object(u.a)(p,2),N=y[0],j=y[1],O=Object(n.useState)(!1),w=Object(u.a)(O,2),k=w[0],S=w[1];Object(n.useEffect)(function(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";fetch(e+t).then(function(e){return e.json()}).then(function(e){return""===t&&S(!0),b(Object(i.a)(e))})}t(N?"":"?&_limit=3")},[c,N]);var C=function(e){var t={},a=e.map(function(e){return e.address.city});return a.forEach(function(e){return t[e]=0}),a.filter(function(e){return 1===++t[e]}).sort(function(e,a){return t[a]-t[e]}).splice(0,3)}(E),F=E.filter(function(e){return""===g||e.address.city===g});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui container tutorssection"},r.a.createElement("div",{className:"tutors-section-description"},r.a.createElement("h2",null,"Our Tutors"),r.a.createElement("p",null,"We have more than 10 tutors from various disciplines ready to match with you.")),r.a.createElement(o,{cities:C,sortHandler:function(e){l(e)},setCityFilter:function(e){h(g===e?"":e)}})),r.a.createElement("div",{className:"ui divider breaker"}),r.a.createElement("div",{className:"ui container",style:{margin:30}},r.a.createElement(d,{tutors:F,showAllTutors:function(){j(!0)},hasFetchedAll:k,sortingBy:c})))}),b=(a(12),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"background-color-fullwidth"},r.a.createElement(s,null)),r.a.createElement("div",null,r.a.createElement(E,null)))});l.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.df267bd9.chunk.js.map