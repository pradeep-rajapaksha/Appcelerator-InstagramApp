Titanium.UI.setBackgroundColor("#000");var logicalDesityFactor=1*Ti.Platform.displayCaps.logicalDensityFactor,ex_height=1*Titanium.Platform.displayCaps.platformHeight,ex_width=1*Ti.Platform.displayCaps.platformWidth;if(ex_height>ex_width)var deviceHeight=1*Titanium.Platform.displayCaps.platformHeight/logicalDesityFactor;else var deviceHeight=1*Titanium.Platform.displayCaps.platformWidth/logicalDesityFactor;var appPixel=deviceHeight/100,deviceWidth=1*Titanium.Platform.displayCaps.platformWidth/logicalDesityFactor,Authorized_URL="https://instagram.com/oauth/authorize/",UserDetails_URL="https://api.instagram.com/v1/users/self/",UserFeeds_URL="https://api.instagram.com/v1/users/",win=Ti.UI.createWindow({width:"100%",height:"100%",backgroundColor:"#fff"}),main_view=Ti.UI.createView({width:"100%",height:"100%"});win.add(main_view),Ti.App.addEventListener("logout",function(){Ti.App.Properties.removeProperty("login"),main_view.remove(view_imageList),Ti.App.fireEvent("loadLoginView")}),Ti.App.addEventListener("loadImages",function(){var i=require("include/imageList"),e=i.getImageList();main_view.add(e)}),Ti.App.addEventListener("loadLoginView",function(){var i=require("include/login"),e=i.loginView();main_view.add(e)}),Ti.App.fireEvent(Ti.App.Properties.hasProperty("login")?"loadImages":"loadLoginView"),win.open();