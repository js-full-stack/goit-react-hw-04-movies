(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{34:function(e,t,a){"use strict";var n=a(36),c=a.n(n),r="a97e0a0a9b37b258134862ba760da91a";c.a.defaults.baseURL="https://api.themoviedb.org";var i="/3/trending/movie/day?api_key=".concat(r);t.a={fetchPopularMovies:function(){return c.a.get(i).then((function(e){return e.data.results}))},handleMovieSearch:function(e){var t="/3/search/movie?api_key=".concat(r,"&query=").concat(e);return c.a.get(t).then((function(e){return e.data.results}))},handleClickLinkMovie:function(e){var t="/3/movie/".concat(e,"?api_key=").concat(r);return c.a.get(t).then((function(e){return e.data}))}}},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(35),c=a(0),r=a(2),i=a(8),o=(a(64),a(34));function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=a.p+"static/media/sprite.62cf7aa2.svg",l=(a(65),a(1)),h=function(e){var t,a=e.onSubmit,i=Object(c.useState)(""),o=Object(n.a)(i,2),h=o[0],b=o[1],j=Object(r.g)(),f=j.pathname,v=j.state;console.log(f),console.log(v);return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),a(h),b("")},className:"SearchForm",children:Object(l.jsxs)("label",{className:"SearchLabel",children:[Object(l.jsx)("input",(t={className:"SearchInput",type:"text",value:h,onChange:function(e){return b(e.target.value)}},s(t,"className","SearchInput"),s(t,"placeholder","Enter the title of the movie"),t)),Object(l.jsxs)("button",{className:"SearchButton",type:"submit",children:["Search",Object(l.jsx)("svg",{className:"SearchIcon",children:Object(l.jsx)("use",{href:"".concat(u,"#icon-search")})})]})]})})},b=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1],u=Object(r.g)(),b=u.pathname;u.search;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Movies Page"}),Object(l.jsx)(h,{onSubmit:function(e){o.a.handleMovieSearch(e).then((function(e){return s(e)}))}}),a&&Object(l.jsx)("ul",{children:a.map((function(e){var t=e.title,a=e.id;return Object(l.jsx)("li",{className:"MovieItem",children:Object(l.jsx)(i.b,{className:"MoviesLink",to:"".concat(b,"/").concat(a),children:t})},a)}))}),Object(l.jsx)(r.c,{})]})}}}]);
//# sourceMappingURL=MoviesPage.db4e932e.chunk.js.map