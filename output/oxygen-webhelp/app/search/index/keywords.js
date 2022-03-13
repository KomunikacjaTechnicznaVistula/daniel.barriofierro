define(function() {var keywords=[{w:"My",p:["p0","p1","p2"]},{w:"first",p:["p0","p1","p2"]},{w:"map",p:["p0"]},{w:"topic",p:["p1","p2"]},{w:"reference",p:["p2"]},{w:"Doing",p:["p3"]},{w:"something",p:["p3"]}];
var ph={};
ph["p0"]=[0, 1, 2];
ph["p1"]=[0, 1, 3];
ph["p2"]=[0, 1, 4, 3];
ph["p3"]=[5, 6];
     return {
         keywords: keywords,
         ph: ph
     }
});
