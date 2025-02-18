function r(n,o){let t=0;return function(...i){const e=new Date().getTime();e-t>o&&(t=e,n(...i))}}export{r as t};
