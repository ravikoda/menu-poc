# menu-poc
menu-poc

1) Setup node js 
2) change directory to app
3) npm install
4) to start static server 
    gulp

TO add dynamic menu item , open js/menus.json and append following one more menu item as shown in below, 
[
  {
    "title":"home",
    "url": "/home",
    "templateUrl" : "/modules/home/home.html",
     "controller"  : "HomeController"
  },
 .......
 , {
    "title":"misc",
    "url": "/mics",
    "templateUrl" : "/modules/home/home.html",
     "controller"  : "HomeController"
  }
]



