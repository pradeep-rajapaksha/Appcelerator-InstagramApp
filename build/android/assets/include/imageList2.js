exports.getImageList=function(){function e(){var e={access_token:Ti.App.Properties.getString("access_token")},i=Ti.Network.createHTTPClient({timeout:5e3,autoEncodeUrl:!1,onload:function(){var e=[],e=JSON.parse(this.responseText);Ti.App.Properties.setString("profile_pic",e.data.profile_picture),a.image=Ti.App.Properties.getString("profile_pic")},onerror:function(e){Ti.API.debug(e.error)}});i.open("GET",UserDetails_URL),i.send(e)}e();var i=Ti.UI.createView({layout:"vertical",height:"100%",width:"100%"}),t=Ti.UI.createView({height:8*appPixel,top:0*appPixel,width:"100%",backgroundColor:"#009ce6"}),a=Ti.UI.createImageView({left:"2.5%",height:"80%",image:Ti.App.Properties.getString("profile_pic")}),r=Ti.UI.createImageView({right:"2.5%",height:"80%",image:"/images/quit.png"});t.add(a),t.add(r),main_view.add(t);var o=Ti.UI.createView({top:.08*deviceHeight,layout:"vertical",height:.92*deviceHeight}),n=Ti.UI.createView({top:0,width:"100%",height:"75%",backgroundColor:"#111111"}),g=Ti.UI.createImageView({image:"/images/A.png",height:"90%",width:"90%"});n.add(g);var d=Ti.UI.createView({backgroundColor:"#111"}),p=Ti.UI.createImageView({image:"/images/A.png",height:"96%",width:"32%",left:"1%"}),s=Ti.UI.createImageView({image:"/images/B.png",height:"96%",width:"32%"}),c=Ti.UI.createImageView({image:"/images/C.png",height:"96%",width:"32%",right:"1%"});d.add(p),d.add(s),d.add(c);var l=Ti.UI.createView({backgroundColor:"#111"}),h=Ti.UI.createImageView({image:"/images/D.png",height:"96%",width:"32%",left:"1%"}),m=Ti.UI.createImageView({image:"/images/E.png",height:"96%",width:"32%"}),u=Ti.UI.createImageView({image:"/images/F.png",height:"96%",width:"32%",right:"1%"});l.add(h),l.add(m),l.add(u);var T=Ti.UI.createView({backgroundColor:"#111"}),w=Ti.UI.createImageView({image:"/images/G.png",height:"96%",width:"32%",left:"1%"}),I=Ti.UI.createImageView({image:"/images/H.png",height:"96%",width:"32%"}),f=Ti.UI.createImageView({image:"/images/I.png",height:"96%",width:"32%",right:"1%"});T.add(w),T.add(I),T.add(f);var v=Ti.UI.createScrollableView({bottom:0,width:"100%",height:"25%",views:[d,l,T],backgroundColor:"#111",showPagingControl:!0});return o.add(n),o.add(v),i.add(o),i};