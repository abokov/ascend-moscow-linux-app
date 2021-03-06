var http = require('http'); 
var url = require('url'); 
var path = require('path'); 
var fs = require('fs'); http.createServer(function(req, res)
 {  var uri = url.parse(req.url).pathname , filename = path.join(process.cwd(), uri);  
if (uri == '/background.png') 
  {    fs.readFile(filename, "binary", function(err, file)
 {      res.writeHead(200);      res.write(file, "binary");      res.end();    });  }  
else  {    res.writeHead(200, { 'Content-Type': 'text/html'});   
 res.end("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  "
"  <title>test Microsoft Azure Web Site - Welcome<\/title>\r\n    <style type=\"text\/css\">\r\n "
"       html {\r\n            height: 100%;\r\n            width: 100%;\r\n        }\r\n\r\n        #feature {\r\n  "
"          width: 960px;\r\n            margin: 95px auto 0 auto;\r\n            overflow: auto;\r\n        }\r\n\r\n "
"       #content {\r\n            font-family: \"Segoe UI\";\r\n            font-weight: normal;\r\n        "
"    font-size: 26px;\r\n            color: #ffffff;\r\n            float: left;\r\n            width: 460px;\r\n       "
"     margin-top: 68px;\r\n            margin-left: 0px;\r\n            vertical-align: middle;\r\n        }\r\n\r\n     "
"       #content h1 {\r\n                font-family: \"Segoe UI Light\";\r\n                color: #ffffff;\r\n          "
"      font-weight: normal;\r\n                font-size: 70px;\r\n                line-height: 48pt;\r\n             "
"   width: 800px;\r\n            }\r\n\r\n\t    #content h2 {\r\n                font-family: \"Segoe UI Light\";\r\n  "
"              color: #ffffff;\r\n                font-weight: normal;\r\n                font-size: 60px;\r\n          "
"      line-height: 48pt;\r\n                width: 800px;\r\n            }\r\n\r\n   "
"     p a, p a:visited, p a:active, p a:hover {\r\n            color: #ffffff;\r\n        }\r\n\r\n   "
"     #content a.button {\r\n            background: #0DBCF2;\r\n            border: 1px solid #FFFFFF;\r\n     "
"       color: #FFFFFF;\r\n            display: inline-block;\r\n            font-family: Segoe UI;\r\n          "
"  font-size: 24px;\r\n            line-height: 46px;\r\n            margin-top: 10px;\r\n         "
"   padding: 0 15px 3px;\r\n            text-decoration: none;\r\n        }\r\n\r\n           "
" #content a.button img {\r\n                float: right;\r\n                padding: 10px 0 0 15px;\r\n     "
"       }\r\n\r\n            #content a.button:hover {\r\n                background: #1C75BC;\r\n          "
"  }\r\n\r\n        body {\r\n            background-image: url(\'./background.png\');\r\n       "
"     background-repeat: no-repeat;\r\n            background-position: center;\r\n        }\r\n  "
"  <\/style >\r\n    \r\n\r\n<\/head>\r\n<body bgcolor=\"#00abec\" >\r\n    <div id=\"feature\">\r\n  "
"      <div id=\"content\">\r\n            <h2>*test*This Node.js web application has been successfully created<\/h2>\r\n   "
"         <p>\r\n                There\'s nothing here yet, but Microsoft Azure makes it simple to publish content with\r\n "
" <a href=\"http:\/\/www.windowsazure.com\/en-us\/documentation\/articles\/web-sites-deploy\/#git\" alt=\"GIT\">GIT<\/a> and\r\n "
"            "
"   <a href=\"http:\/\/www.windowsazure.com\/en-us\/documentation\/articles\/web-sites-deploy\/#ftp\" alt=\"FTP\">FTP<\/a>\r\n            <\/p>\r\n\r\n            <a href=\"http:\/\/go.microsoft.com\/?LinkID=9844831\" class=\"button\">Tell me more<img border=\"0\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NERBNUVDMDBBNkE5MTFFMThGMDVCRkNEMjk1M0IwMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NERBNUVDMDFBNkE5MTFFMThGMDVCRkNEMjk1M0IwMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0REE1RUJGRUE2QTkxMUUxOEYwNUJGQ0QyOTUzQjAxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0REE1RUJGRkE2QTkxMUUxOEYwNUJGQ0QyOTUzQjAxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PnW1aqMAAAE1SURBVHjaxFeLEYMgDEUnYARHYAS7gSM4AiN0A0dxBEbQDewG7QYUeonlqHzksHl3Oe80yQtJCMhYBrTWnZG7EaXDUKDTZfpMKvQJwlggfRG5+cCNzJ7DxYg8cgpBStBxYX3wbHLzUhjZzqwikS3rSyTJgfgJRvY5sEJYW8+XCJJDqoPKhQH4i+EhclWTOBCA+iGHFCEGVhlH\/l1ybLD5RFO5wjNscPdsOzkYI3IHxHiwDXnGoEL0SD759bgwAOyrCclxMMiCWo5OM2EAIqIvHb3Piz0VFbo5ulu8En\/JE2k6i1gAO2XLroGt\/ZJq4NadcBXJX0ZuTdM8UjUjq7ld+QrfRAGxDVhBmt0VrwET5FjRAek+p5twpLOd\/FQjPc\/JbzKkdzjy2yv5vZ38j+Vf\/2pvAQYAVsHorRPkS+QAAAAASUVORK5CYII%3D\" \/><\/a>\r\n          <font face=\"Segoe UI\" size=\"4\">\r\n            <br\/>\r\n\t    <br\/>\r\n            <table width=\"750\" frame=\"below\">\r\n              <tr bgcolor=\"rgb(13,188,242)\">  \r\n                <th align=\"left\" width=\"200\">    Node Property  <\/th>  \r\n                <th align=\"left\" width=\"500\">    Value  <\/th>\r\n              <\/tr>\r\n              <tr><td>Version<\/td><td> " + process.version + " <\/td><\/tr>  \r\n              <tr><td>Working Directory<\/td><td> "+process.cwd()+" <\/td><\/tr> \r\n              <tr><td>Arch<\/td><td>"+ process.arch +"<\/td><\/tr>\r\n            <\/table>\r\n          <\/font>\r\n        <\/div>\r\n    <\/div>\r\n<\/body>\r\n\r\n<\/html>");  } }).listen(process.env.PORT);
