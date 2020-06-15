(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+DN8":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return i}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("NC8T");var r={},o={_frontmatter:r},c=l.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Flash component informs users of successful or pending actions."),Object(a.b)("h2",null,"Default example"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Flash>Default Flash</Flash>\n<Flash variant="success">Success Flash</Flash>\n<Flash variant="warning">Warning Flash</Flash>\n<Flash variant="danger">Danger Flash</Flash>\n')),Object(a.b)("h2",null,"With an icon"),Object(a.b)("p",null,"Flash components with icons inside of them will automatically set the correct color for the icon depending on the type of Flash, as well as applying the correct right margin."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Flash variant="success">\n  <StyledOcticon icon={Check}/>\n  Success!\n</Flash>\n')),Object(a.b)("h2",null,"System props"),Object(a.b)("p",null,"Flash components get ",Object(a.b)("inlineCode",{parentName:"p"},"COMMON")," system props. Read our ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/components/staging/test-branches/system-props"}),"System Props")," doc page for a full list of available props."),Object(a.b)("h2",null,"Component props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Default"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"full"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Boolean"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Creates a full width Flash component")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"variant"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"default"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Can be one of ",Object(a.b)("inlineCode",{parentName:"td"},"default"),", ",Object(a.b)("inlineCode",{parentName:"td"},"success"),", ",Object(a.b)("inlineCode",{parentName:"td"},"warning"),", or ",Object(a.b)("inlineCode",{parentName:"td"},"danger")," - sets the background color and border of the Flash component")))))}i.isMDXComponent=!0},NC8T:function(e,t,n){"use strict";var a=n("UutA"),l=n("oXiK"),r=n("aOgs"),o=n("q1tI"),c=n.n(o),i=n("8gyx"),s=n("VhsB"),b=n("nkI/"),m=n("bWhc"),p=n("og4h"),u=n("sqpL"),d=Object(a.f)(l.Box).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-4czghc-0"})({listStyle:"none"});function g(e){var t=e.items,n=e.depth;return c.a.createElement(d,{as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.Box,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(l.Link,{display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(g,{items:e.items,depth:n+1}):null)})))}g.defaultProps={depth:0};var f=g,h=Object(a.f)(l.Flex).withConfig({displayName:"layout___StyledFlex",componentId:"sc-15zk0ku-0"})({zIndex:0}),O=Object(a.f)(l.Grid).withConfig({displayName:"layout___StyledGrid",componentId:"sc-15zk0ku-1"})({alignItems:"start",alignSelf:"start"}),j=Object(a.f)(l.BorderBox).withConfig({displayName:"layout___StyledBorderBox",componentId:"sc-15zk0ku-2"})({gridArea:"heading"}),y=Object(a.f)(l.Position).withConfig({displayName:"layout___StyledPosition",componentId:"sc-15zk0ku-3"})({gridArea:"table-of-contents",overflow:"auto"}),N=Object(a.f)(l.Box).withConfig({displayName:"layout___StyledBox",componentId:"sc-15zk0ku-4"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,o=a.title,d=a.description,g=a.status,x=a.source,E=a.additionalContributors,C=void 0===E?[]:E;return c.a.createElement(l.Flex,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(i.a,{title:o,description:d}),c.a.createElement(s.b,null),c.a.createElement(h,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.Box,{display:["none",null,null,"block"]},c.a.createElement(m.a,null)),c.a.createElement(O,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading ." "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(j,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(l.Heading,null,o)),n.tableOfContents.items?c.a.createElement(y,{display:["none",null,"block"],position:"sticky",top:s.a+24,maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(l.Text,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(f,{items:n.tableOfContents.items})):null,c.a.createElement(N,null,g||x?c.a.createElement(l.Flex,{mb:3,alignItems:"center"},g?c.a.createElement(u.a,{status:g}):null,c.a.createElement(l.Box,{mx:"auto"}),x?c.a.createElement(p.a,{href:x}):null):null,n.tableOfContents.items?c.a.createElement(l.Box,{display:["block",null,"none"],mb:3},c.a.createElement(l.Details,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.Text,{as:"summary",fontWeight:"bold"},c.a.createElement(l.StyledOcticon,{icon:t?r.b:r.c,mr:2}),"Table of contents"),c.a.createElement(l.Box,{pt:1},c.a.createElement(f,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(C.map((function(e){return{login:e}})))})))))}}}]);
//# sourceMappingURL=component---content-flash-md-78f116c12593ae939e34.js.map