// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: Skin123.ggsk
// Generated 2020-10-25T21:34:29

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNODcuNSw0NC44SDQyLjVjLTYuNywwLTEwLjQsMS4yLTEyLjQsNGMtMi4zLDMuMi0yLjQsOC40LTIuNCwxNi41YzAsMTEuMSwyLDE2LjYsMy45LDE4LjFjMi44LDIuMSwzLjUsMi41LDgsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LDAsNS44LTAuOCw4LjEtMS43YzMuMi0xLjMsNy4yLTMsMTcuNC0zYzEwLjQsMCwxNC4zLDEuNywxNy41LDNjMi4yLDAuOSw0LDEuNyw3LjksMS43YzQuNSwwLDUuMi0wLjMsOC0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOS0xLjQsMy45'+
			'LTYuOSwzLjktMTguMWMwLTguMi0wLjItMTMuNC0yLjQtMTYuNUM5Ny45LDQ2LDk0LjIsNDQuOCw4Ny41LDQ0Ljh6IE00Ni45LDczLjNjLTUuMywwLTkuNi00LjMtOS42LTkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC01LjMsNC4zLTkuNiw5LjYtOS42YzUuMywwLDkuNiw0LjMsOS42LDkuNlM1Mi4xLDczLjMsNDYuOSw3My4zeiBNODAuOCw3My4zYy01LjMsMC05LjYtNC4zLTkuNi05LjZjMC01LjMsNC4zLTkuNiw5LjYtOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjMsMCw5LjYsNC4zLDkuNiw5LjZTODYuMSw3My4zLDgwLjgsNzMuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMD'+
			'AwMCIgZD0iTTY1LDlDMzQsOSw4LjksMzQuMSw4LjksNjUuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNC4xLDk2LDksNjUsOXogTTU2LjksMjUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQsMC4yLTAuOCwwLjYtMS4yYzAuNC0wLjQsMC44LTAuNiwxLjQtMC42aDEyLjNjMS40LDAsMiwwLjYsMiwxLjh2MTJINTYuOVYyNS43eiBNMTAxLjgsODcuN2MtMy45LDMtNS44LDMuNi0xMS4zLDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUsMC03LjYtMS4xLTEwLTIuMWMtMi45LTEuMi02LjEtMi42LTE1LjQtMi42Yy05LjEsMC0x'+
			'Mi40LDEuNC0xNS4zLDIuNmMtMi41LDEtNS4xLDIuMS0xMC4yLDIuMWMtNS42LDAtNy41LTAuNi0xMS4zLTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuOS0zLjgtNi0xNC4yLTYtMjIuM2MwLTkuMywwLjItMTUuMiwzLjQtMTkuN2MzLjktNS41LDExLTYuMiwxNi44LTYuMmg0NS4xYzUuNywwLDEyLjgsMC43LDE2LjgsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjIsNC41LDMuNSwxMC40LDMuNSwxOS43QzEwNy43LDczLjQsMTA2LjcsODMuOSwxMDEuOCw4Ny43eiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwNC4zLDQ1LjZjLTMuOS01Lj'+
			'UtMTEtNi4yLTE2LjgtNi4ySDQyLjVjLTUuNywwLTEyLjgsMC43LTE2LjgsNi4yYy0zLjIsNC41LTMuNCwxMC40LTMuNCwxOS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDguMSwxLDE4LjUsNiwyMi4zYzMuOSwzLDUuOCwzLjYsMTEuMywzLjZjNS4xLDAsNy42LTEuMSwxMC4yLTIuMWMyLjktMS4yLDYuMi0yLjYsMTUuMy0yLjZjOS4zLDAsMTIuNSwxLjQsMTUuNCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNSwxLDUsMi4xLDEwLDIuMWM1LjYsMCw3LjUtMC42LDExLjMtMy42YzQuOS0zLjgsNi0xNC4yLDYtMjIuM0MxMDcuNyw1Ni4xLDEwNy41LDUwLjEsMTA0LjMsNDUuNnog'+
			'TTk4LjUsODMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuOCwyLjEtMy41LDIuNS04LDIuNWMtMy45LDAtNS43LTAuNy03LjktMS43Yy0zLjItMS4zLTcuMS0zLTE3LjUtM2MtMTAuMSwwLTE0LjEsMS43LTE3LjQsM2MtMi4zLDEtNC4xLDEuNy04LjEsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC41LDAtNS4yLTAuMy04LTIuNWMtMS45LTEuNC0zLjktNi45LTMuOS0xOC4xYzAtOC4yLDAuMi0xMy40LDIuNC0xNi41YzItMi44LDUuNy00LDEyLjQtNGg0NS4xYzYuNywwLDEwLjQsMS4yLDEyLjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4zLDMuMiwyLjQsOC40LDIuNC'+
			'wxNi41QzEwMi4zLDc2LjQsMTAwLjMsODEuOSw5OC41LDgzLjR6Ii8+CiAgIDxjaXJjbGUgY3g9IjQ2LjkiIGZpbGw9IiNGRkZGRkYiIGN5PSI2My44IiByPSI5LjYiLz4KICAgPGNpcmNsZSBjeD0iODAuOCIgZmlsbD0iI0ZGRkZGRiIgY3k9IjYzLjgiIHI9IjkuNiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzMuMSwyNS43YzAtMS4yLTAuNi0xLjgtMi0xLjhINTguOWMtMC42LDAtMSwwLjItMS40LDAuNmMtMC40LDAuNC0wLjYsMC44LTAuNiwxLjJ2MTJoMTYuMkw3My4xLDI1LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDczLjEsMjUuN3oiLz4KICA8L2c+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzMCAxMzAiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHdpZH'+
			'RoPSIxMzBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTMwcHgiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIj4KIDxnIGlkPSJMYXll'+
			'cl8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNOTAuMDI4LDQyLjU3MUgzOS45NzFjLTcuNDM1LDAtMTEuNTQ3LDEuMzE2LTEzLjc1Myw0LjRjLTIuNTI4LDMuNTM0LTIuNzExLDkuMzAyLTIuNzExLDE4LjM4MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwxMi4zNTUsMi4yMjQsMTguNDY5LDQuMzA1LDIwLjA3YzMuMDk3LDIuMzg0LDMuODc0LDIuNzI3LDguOTE3LDIuNzI3YzQuNDE2LDAsNi40MzEtMC44MzcsOC45ODEtMS44OTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTczLTEuNDg2LDguMD'+
			'IxLTMuMzM1LDE5LjI5LTMuMzM1YzExLjUyOCwwLDE1LjkzLDEuODYzLDE5LjQ2NiwzLjM2MWMyLjQ3MiwxLjA0Niw0LjQyMywxLjg3Myw4LjgwMiwxLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS4wNDQsMCw1LjgyMS0wLjM0Myw4LjkxOS0yLjcyN2MyLjA4Mi0xLjYwMiw0LjMwNy03LjcxNiw0LjMwNy0yMC4wN2MwLTkuMDc4LTAuMTgzLTE0Ljg0NC0yLjcxNC0xOC4zODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwMS41NzIsNDMuODg3LDk3LjQ2LDQyLjU3MSw5MC4wMjgsNDIuNTcxeiBNNDQuODQsNzQuMjQ2Yy01Ljg3MSwwLTEwLjYyNy00Ljc1Ni0xMC42MjctMTAuNjI2JiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTUuODY5LDQuNzU2LTEwLjYyNiwxMC42MjctMTAuNjI2YzUuODY5LDAsMTAuNjI1LDQuNzU3LDEwLjYyNSwxMC42MjZDNTUuNDY1LDY5LjQ4OSw1MC43MDksNzQuMjQ2LDQ0Ljg0LDc0LjI0NnomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE04Mi41NTEsNzQuMjQ2Yy01Ljg3LDAtMTAuNjI2LTQuNzU2LTEwLjYyNi0xMC42MjZjMC01Ljg2OSw0Ljc1Ni0xMC42MjYsMTAuNjI2LTEwLjYyNmM1Ljg2OSwwLDEwLjYyNiw0Ljc1NywxMC42MjYsMTAuNjI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5My4xNzcsNjkuNDg5LDg4LjQyLDc0LjI0Niw4Mi41NT'+
			'EsNzQuMjQ2eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjQuOTk5LDIuNzM3QzMwLjU1OCwyLjczNywyLjYzOCwzMC42NTYsMi42MzgsNjUuMWMwLDM0LjQ0MSwyNy45Miw2Mi4zNjIsNjIuMzYxLDYyLjM2MnM2Mi4zNjMtMjcuOTIsNjIuMzYzLTYyLjM2MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTI3LjM2MiwzMC42NTYsOTkuNDQsMi43MzcsNjQuOTk5LDIuNzM3eiBNNTUuOTc0LDIxLjI4NWMwLTAuNDQsMC4yMi0wLjg4LDAuNjU5LTEuMzIxYzAuNDQxLTAuNDQsMC44ODItMC42NiwxLjU0MS0wLjY2aDEzLjY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU0LDAsMi4y'+
			'MDEsMC42NiwyLjIwMSwxLjk4djEzLjI4Nkg1NS45NzRWMjEuMjg1eiBNMTA1Ljg0Niw5MC4xNzhjLTQuMjkyLDMuMzA0LTYuNDA4LDMuOTcyLTEyLjU3OCwzLjk3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNTk3LDAtOC40MTUtMS4xOTMtMTEuMTQxLTIuMzQ3Qzc4LjkzMiw5MC40NSw3NS4zMSw4OC45MTcsNjUsODguOTE3Yy0xMC4wNzEsMC0xMy43NDUsMS41MjgtMTYuOTg2LDIuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi43ODgsMS4xNTktNS42NzEsMi4zNTgtMTEuMjg1LDIuMzU4Yy02LjE3LDAtOC4yODUtMC42NjgtMTIuNTc3LTMuOTczYy01LjQ5Mi00LjIyNy02Lj'+
			'Y0NS0xNS44MzMtNi42NDUtMjQuODI1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEwLjI3OCwwLjI1OC0xNi44NzksMy44MzEtMjEuODczYzQuMzgtNi4xMjQsMTIuMjU5LTYuOTA5LDE4LjYzMy02LjkwOWg1MC4wNThjNi4zNzIsMCwxNC4yNDgsMC43ODUsMTguNjMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTc3LDQuOTk4LDMuODM1LDExLjU5NywzLjgzNSwyMS44NzNDMTEyLjQ5Myw3NC4zNDUsMTExLjM0LDg1Ljk1MSwxMDUuODQ2LDkwLjE3OHoiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDguNjU4LDQzLjQ4Yy00LjM4Mi02LjEy'+
			'NC0xMi4yNTgtNi45MDktMTguNjMtNi45MDlIMzkuOTcxYy02LjM3NCwwLTE0LjI1MywwLjc4NS0xOC42MzMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjU3Myw0Ljk5NC0zLjgzMSwxMS41OTUtMy44MzEsMjEuODczYzAsOC45OTIsMS4xNTIsMjAuNTk4LDYuNjQ1LDI0LjgyNWM0LjI5MiwzLjMwNCw2LjQwNywzLjk3MywxMi41NzcsMy45NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzUuNjE0LDAsOC40OTctMS4xOTksMTEuMjg1LTIuMzU4YzMuMjQxLTEuMzQ4LDYuOTE1LTIuODc1LDE2Ljk4Ni0yLjg3NWMxMC4zMSwwLDEzLjkzMiwxLjUzMywxNy4xMjcsMi44ODYmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzI2LDEuMTU0LDUuNTQ0LDIuMzQ3LDExLjE0MSwyLjM0N2M2LjE3LDAsOC4yODYtMC42NjgsMTIuNTc4LTMuOTcyYzUuNDk0LTQuMjI4LDYuNjQ3LTE1LjgzMyw2LjY0Ny0yNC44MjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMi40OTMsNTUuMDc3LDExMi4yMzUsNDguNDc4LDEwOC42NTgsNDMuNDh6IE0xMDIuMTg3LDg1LjQyM2MtMy4wOTgsMi4zODQtMy44NzUsMi43MjctOC45MTksMi43MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjM3OSwwLTYuMzMtMC44MjYtOC44MDItMS44NzNDODAuOTMsODQuNzgsNzYuNTI4LDgyLjkxNyw2NSw4'+
			'Mi45MTdjLTExLjI3LDAtMTUuNzE3LDEuODUtMTkuMjksMy4zMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjU1MSwxLjA2MS00LjU2NSwxLjg5OC04Ljk4MSwxLjg5OGMtNS4wNDMsMC01LjgyLTAuMzQzLTguOTE3LTIuNzI3Yy0yLjA4MS0xLjYwMi00LjMwNS03LjcxNS00LjMwNS0yMC4wNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC05LjA4LDAuMTgzLTE0Ljg0OCwyLjcxMS0xOC4zODJjMi4yMDYtMy4wODQsNi4zMTgtNC40LDEzLjc1My00LjRoNTAuMDU4YzcuNDMyLDAsMTEuNTQ0LDEuMzE2LDEzLjc1MSw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNTMxLDMuNTM3LD'+
			'IuNzE0LDkuMzA0LDIuNzE0LDE4LjM4MUMxMDYuNDkzLDc3LjcwOCwxMDQuMjY5LDgzLjgyMSwxMDIuMTg3LDg1LjQyM3oiLz4KICAgPGNpcmNsZSBjeD0iNDQuODQiIGZpbGw9IiNGRkZGRkYiIGN5PSI2My42MTkiIHI9IjEwLjYyNiIvPgogICA8Y2lyY2xlIGN4PSI4Mi41NTEiIGZpbGw9IiNGRkZGRkYiIGN5PSI2My42MTkiIHI9IjEwLjYyNiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzQuMDI1LDIxLjI4NWMwLTEuMzIxLTAuNjYxLTEuOTgtMi4yMDEtMS45OGgtMTMuNjVjLTAuNjU5LDAtMS4xLDAuMjE5LTEuNTQxLDAuNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQz'+
			'OSwwLjQ0MS0wLjY1OSwwLjg4LTAuNjU5LDEuMzIxdjEzLjI4NmgxOC4wNTJWMjEuMjg1eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggDx=17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 13px;';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true)) && 
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._enter_vr);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 36px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTQ2LjgsMzguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMS00LDIuNi03LjMsNC45LTkuN2MxLjUtMS42LDMuNC0yLjcsNS41LTMuMXYwYzAuNi0wLjEsMS4yLTAuMiwxLjgtMC4yYzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuMyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7YzIuNCwxLjksNC43LDQuNSw2LjcsNy44YzEuNywyLjYsMy4yLDUuNiw0LjYsOC45YzAuMSwwLDAuMiwwLDAuMywwLjFsLTQuMSw0LjFjLTMtMC4zLTYuMi0wLjUtOS41LTAuNWwtMC45LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNiwwLDAuOSwwYzIuNywwLDUuNCwwLjEsOCwwLjNjLTIuMS00LjQtNC40LTguMS02LjgtMTAuNmMtMS43LTEuOC0zLjQtMy00LjgtMy42Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw1LjcsMjguNyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yLjMsMi4zbC02LTMwLjRjLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40Yy0xLDEtMS45LDIuNi'+
			'0yLjcsNC41Yy0xLjYsMy45LTIuNSw5LjUtMi41LDE1LjljMCw0LjgsMC41LDEwLjEsMS42LDE1LjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDEuMywwLjUsMi41LDAuOCwzLjhsLTMuNywzLjdjLTAuNi0yLjEtMS4xLTQuMy0xLjYtNi42Yy0xLjEtNS43LTEuNy0xMS4zLTEuNy0xNi40QzQ1LjIsNDcsNDUuOCw0Mi40LDQ2LjgsMzguNHogTTU4LjYsNDguOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjQsMC4yLTQuOCwwLjQtNywwLjdjMC4xLTEuNiwwLjItMy4xLDAuNC00LjZjMS45LTAuMiwzLjgtMC40LDUuOC0wLjZMNTguNiw0OC45eiBNMjAuNCw2OS43Yy0wLjctMS41LTEuMS0zLjEt'+
			'MS4xLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjNjLTAuMSwxLjUtMC4yLDMuMS0wLjIsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYsMS41LTExLDMuNi0xNC40LDZjLTIuMywxLjYtMy45LDMuNC00LjcsNWMtMC40LDAuOS0wLjcsMS44LTAuNywyLjhoMGMwLDAuOSwwLjIsMS44LDAuNywyLjhjMC41LDAuOSwxLjEsMS45LDIuMSwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjksMS45LDQuOSwzLjgsOC42LDUuNGMyLjgsMS4yLDUuOS'+
			'wyLjIsOS40LDNsLTMuNywzLjdjLTUuNy0xLjYtMTAuNi0zLjctMTQuNC02LjNDMjMuOCw3NC41LDIxLjYsNzIuMywyMC40LDY5Ljd6IE0zMi44LDEwMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMzMy42LDEwMC4yLDMzLjIsMTAwLjMsMzIuOCwxMDAuM3ogTTc4LjcsNjIuM2MtMC4zLTEuMy0wLjUtMi41LTAuOC0zLjhs'+
			'My43LTMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwyLjEsMS4xLDQuMywxLjYsNi42YzEuMSw1LjYsMS42LDExLDEuNywxNS45Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzgwLjMsNzMsNzkuOCw2Ny44LDc4LjcsNjIuM3ogTTY5LjMsNzkuNGMtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0xLjYtOC4xbDIuMy0yLjNMNjkuMyw3OS40eiBNMTA2LjcsNzMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjUsMi41LTUuOSw0LjYtMTAsNi40Yy04LjIsMy41LTE5LjQsNS42LTMxLjYsNS42Yy0yLj'+
			'csMC01LjQtMC4xLTgtMC4zYzIuMSw0LjQsNC40LDguMSw2LjgsMTAuNmMxLjcsMS44LDMuNCwzLDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTIsMS40LTQuNCwxLjktNy4yYzEtMC4xLDItMC4zLDMtMC41YzAuNi0wLjEsMS4xLTAuMiwxLjYtMC4zYy0wLjMsMi4xLTAuNiw0LjEtMS4xLDUuOWMtMS4xLDQtMi42LDcuMy00LjksOS43JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTtjLTEuNSwxLjYtMy40LDIuNy01LjUsMy4xbDAsMGMtMC42LDAuMS0xLjIsMC4yLTEuOCwwLjJjLTEuNCwwLTIuOC0wLjMtNC4xLTAuOGMtMS4zLTAuNS0yLjYtMS4zLTMuOC0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0wLjEsMC0wLjIsMC0wLjQtMC4xbDQuMS00LjFjMywwLjMsNi4yLDAuNSw5LjUsMC41YzcuNywwLDE0LjktMC45LDIxLjEtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LD'+
			'AuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44Yy0wLjQtMC45LTEuMS0xLjktMi4xLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjktMS45LTQuOS0zLjgtOC42LTUuNGMtMi44LTEuMi02LTIuMi05LjUtM2wzLjctMy43YzUuNywxLjYsMTAuNiwzLjcsMTQuNCw2LjNjMi44LDEuOSw0LjksNC4yLDYuMSw2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjdDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MS42LDQ5LjZjMi4zLTAuMyw0LjYt'+
			'MC42LDctMC43bC0wLjktNC41Yy0yLDAuMS0zLjksMC4zLTUuOCwwLjZDNTEuOCw0Ni41LDUxLjcsNDgsNTEuNiw0OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNNjYuNSw3OS41YzAuOSwwLDEuOCwwLDIuNy0wLjFsLTItMTAuM2wtMi4zLDIuM0w2Ni41LDc5LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04My40LDc3LjdjMC41LTAuMSwwLjktMC4yLDEuNC0wLjNjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjQtMi4zLTEtNC41LTEuNi02LjZsLTMuNywzLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjIsMC42LDIuNSwwLjgsMy44YzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRDODEuMyw3OC4xLDgyLjQsNzcuOSw4My40LDc3Ljd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00'+
			'OC41LDc1LjJsMy43LTMuN2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC43LTEuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41Yz'+
			'MuMywwLDYuNCwwLjIsOS41LDAuNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7QzQ3LjQsNzAuOCw0Ny45LDczLDQ4LjUsNzUuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0LjYsNzkuMWMtMy41LTAuOC02LjctMS44LTkuNC0zYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDBjMC0wLjksMC4yLTEuOCwwLjctMi44YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLT'+
			'QuMSwxLjgtNy41LDMuOS0xMCw2LjRjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjcsMi42LDguNiw0LjcsMTQuNCw2LjNMNDQuNiw3OS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTA5LjcsNjAuM2MtMS4yLTIuNi0zLjQtNC44LTYuMS02LjdjLTMuNy0yLjYtOC42LTQuNy0xNC40LTYuM2wtMy43LDMuN2MzLjUsMC44LDYuNywxLjgsOS41LDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNywxLjYsNi43'+
			'LDMuNSw4LjYsNS40YzEsMSwxLjcsMS45LDIuMSwyLjljMC40LDAuOSwwLjcsMS44LDAuNywyLjhjMCwwLjktMC4yLDEuOC0wLjcsMi44Yy0wLjgsMS42LTIuMywzLjQtNC43LDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjRjLTMuMywwLTYuNC0wLjItOS41LTAuNWwtNC4xLDQuMWMwLjEsMCwwLjIsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMyw1LjksNi43LDcuOGMxLjIsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLj'+
			'csMC44LDQuMSwwLjhjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuM2MtMSwwLjItMiwwLjMtMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjFsMi41LDEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYj'+
			'eDk7Yy0wLjYsMC0xLjMtMC4yLTItMC41Yy0xLjUtMC42LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuM2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNyw2MC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMwIDEzMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40QzEyNy40LDMwLjYsOTkuNSwyLjYsNjUsMi42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE00NC44LDM1LjRjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYw'+
			'YzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSwwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUsMC42LDIuOSwxLjQsNC4yLDIuNWMyLjcsMi4xLDUuMiw1LDcuNSw4LjZjMS44LDIuOSwzLjYsNi4yLDUuMSw5LjljMC4xLDAsMC4zLDAsMC40LDAuMWwtNC41LDQuNWMtMy40LTAuMy02LjktMC41LTEwLjUtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTRjLTAuOC0wLjMtMS41LTAuNS0yLjItMC41bDYuMywzMS44JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTtsLTIuNiwyLjZsLTYuNy0zMy44Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDVDNDkuMSwzNy41LDQ4LDQzLjYsNDgsNTAuOGMwLDUuMywwLjYsMTEuMiwxLjgsMTcuMmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMS40LDAuNiwyLjgsMC45LDQuMmwtNC4xLDQuMWMtMC43LTIuNC0xLjItNC44LTEuNy03LjNDNDMuNiw2Mi42LDQzLDU2LjQsNDMsNTAuOEM0Myw0NS4xLDQzLjYsMzkuOSw0NC44LDM1LjR6IE01Ny45LDQ3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi43LDAuMi01LjMsMC40LTcuOCwwLjhjMC4xLTEuOCwwLjItMy41LDAuNC01'+
			'LjFjMi4xLTAuMyw0LjItMC41LDYuNC0wLjZMNTcuOSw0Ny4xeiBNMTUuNCw3MC4yYy0wLjgtMS42LTEuMi0zLjQtMS4yLTUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjYsMS43LTEyLjIsNC0xNiw2LjdjLTIuNiwxLjgtNC4zLDMuNy01LjIsNS42Yy0wLjUsMS0wLjcsMi0wLjcsMy4xaDBjMCwxLDAuMiwyLDAuNywzLjFjMC41LDEsMS4zLDIuMS'+
			'wyLjMsMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4xLDIuMSw1LjQsNC4yLDkuNiw2YzMuMSwxLjMsNi42LDIuNCwxMC41LDMuM2wtNC4xLDQuMWMtNi40LTEuOC0xMS44LTQuMS0xNi03QzE5LjIsNzUuNiwxNi44LDczLjEsMTUuNCw3MC4yeiBNMjkuMywxMDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM0Mz'+
			'MC4xLDEwNC4xLDI5LjcsMTA0LjMsMjkuMywxMDQuM3ogTTgwLjIsNjJjLTAuMy0xLjQtMC42LTIuOC0wLjktNC4ybDQuMS00LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMi40LDEuMiw0LjgsMS43LDcuM2MxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43Yy0wLjUsMC4xLTEsMC4yLTEuNiwwLjNjLTEuMSwwLjItMi4zLDAuNC0zLjQsMC42YzAtMC4yLDAtMC4zLDAtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODIsNzMuOSw4MS40LDY4LjEsODAuMiw2MnogTTY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMS44LTguOWwyLjYtMi42TDY5LjcsODF6IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1Lj'+
			'EtMTEuMiw3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M5MSw4NS44LDc4LjYsODguMSw2NSw4OC4xYy0zLDAtNi0wLjEtOC45LTAuM2MyLjMsNC45LDQuOSw5LDcuNSwxMS43YzEuOSwyLDMuNywzLjMsNS40LDRjMC44LDAuMywxLjUsMC41LDIuMiwwLjVsLTIuOC0xNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNWMwLjktMi4yLDEuNi00LjksMi4xLThjMS4xLTAuMiwyLjMtMC4zLDMuMy0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0w'+
			'LjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNSwwLTMuMS0wLjMtNC41LTAuOWMtMS41LTAuNi0yLjktMS40LTQuMi0yLjVjLTIuNy0yLjEtNS4yLTUtNy41LTguNmMtMS44LTIuOS0zLjYtNi4yLTUuMS05LjljLTAuMSwwLTAuMywwLTAuNC0wLjFsNC41LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNCwwLjMsNi45LDAuNSwxMC41LDAuNWM4LjYsMCwxNi42LTEsMjMuNS0yLjdjNi45LTEuNywxMi42LTQuMSwxNi40LTYuOGMyLjYtMS44LD'+
			'QuMy0zLjcsNS4yLTUuNmMwLjUtMSwwLjctMiwwLjctMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0yLTAuNy0zLjFjLTAuNS0xLTEuMy0yLjEtMi4zLTMuMmMtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy0zLjEtMS4zLTYuNi0yLjQtMTAuNS0zLjRsNC4xLTQuMWM2LjQsMS44LDExLjgsNC4xLDE2LDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjEsMi4yLDUuNCw0LjYsNi44LDcuNWMwLjgsMS42LDEuMiwzLjQsMS4yLDUuMmMwLDEuOC0wLjQsMy42LTEuMiw1LjJDMTEzLjgsNzEuOSwxMTIuNyw3My40LDExMS4zLDc0Ljh6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01'+
			'MC4xLDQ3LjljMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45Yy0yLjIsMC4yLTQuMywwLjQtNi40LDAuNkM1MC4zLDQ0LjQsNTAuMiw0Ni4xLDUwLjEsNDcuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwMy44LDI4LjFsLTEuOC0xLjhjLTAuMy0wLjMtMC44LTAuNS0xLjItMC41cy0wLjksMC4yLTEuMiwwLjVMMjYuMiw5OS41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVzMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MxMDQuNCwyOS44LDEwNC40LDI4LjcsMTAzLjgsMjguMX'+
			'oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY2LjcsODEuMWMxLDAsMiwwLDMtMC4xbC0yLjMtMTEuNGwtMi42LDIuNkw2Ni43LDgxLjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04NS40LDc5LjFjMC41LTAuMSwxLTAuMiwxLjYtMC4zYzAtNS41LTAuNi0xMS41LTEuOS0xNy43Yy0wLjUtMi41LTEuMS01LTEuNy03LjNsLTQuMSw0LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjQsMC43LDIuOCwwLjksNC4yYzEuMiw2LjEsMS44LDExLjksMS44LDE3LjNjMCwwLjIsMCwwLjMsMCwwLjVDODMuMiw3OS41LDg0LjMsNzkuMyw4NS40LDc5LjF6Ii8+CiAgIDxw'+
			'YXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00Ni42LDc2LjNsNC4xLTQuMWMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsMCwwQzQ4LjYsNjEuOSw0OCw1Ni4xLDQ4LDUwLjhjMC03LjEsMS0xMy4zLDIuOC0xNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjktMi4yLDEuOS0zLjksMy01YzAuNy0wLjcsMS4zLTEuMiwyLTEuNWw2LjcsMzMuOGwyLjYtMi42TDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LjEsNDEuOSw2NSw0MS45Yy0wLjMsMC0wLj'+
			'csMC0xLDBsMSw1YzMuNiwwLDcuMSwwLjIsMTAuNSwwLjVsNC41LTQuNWMtMC4xLDAtMC4zLDAtMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNS0zLjctMy4zLTctNS4xLTkuOWMtMi4zLTMuNi00LjgtNi41LTcuNS04LjZjLTEuMy0xLjEtMi43LTEuOS00LjItMi41Yy0xLjUtMC42LTMtMC45LTQuNS0wLjljLTAuNywwLTEuNCwwLjEtMiwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNCwwLjUtNC40LDEuNy02LjEsMy41Yy0yLjUsMi43LTQuMiw2LjQtNS40LDEwLjhjLTEuMiw0LjQtMS44LDkuNi0xLjgsMTUuM2MwLDUuNywwLjYsMTEuOCwxLjksMTguMiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtDNDUuNCw3MS41LDQ2LDczLjksNDYuNiw3Ni4zeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDIuMyw4MC42Yy0zLjktMC45LTcuNC0yLTEwLjUtMy4zYy00LjItMS44LTcuNC0zLjktOS42LTZjLTEuMS0xLjEtMS44LTIuMS0yLjMtMy4yYy0wLjUtMS0wLjctMi0wLjctMy4xaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMSwwLjItMiwwLjctMy4xYzAuOS0xLjgsMi42LTMuOCw1LjItNS42YzMuOC0yLjcsOS4zLTUsMTUuOS02LjdjMC0xLjgsMC4xLTMuNSwwLjMtNS4yYy00LjIsMS04LDIuMi0xMS41LDMuNyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTtjLTQuNiwyLTguNCw0LjMtMTEuMiw3LjFjLTEuNCwxLjQtMi41LDIuOS0zLjMsNC41Yy0wLjgsMS42LTEuMiwzLjQtMS4yLDUuMmMwLDEuOCwwLjQsMy42LDEuMiw1LjJjMS40LDIuOSwzLjgsNS4zLDYuOCw3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMSwyLjksOS42LDUuMywxNiw3TDQyLjMsODAuNnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExNC42LDU5LjhjLTEuNC0yLjktMy44LTUuMy02LjgtNy41Yy00LjEtMi45LTkuNi01LjMtMTYtN2wtNC4xLDQuMWMzLjksMC45LDcuNCwyLDEwLjUsMy40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjIsMS44'+
			'LDcuNCwzLjksOS42LDZjMS4xLDEuMSwxLjgsMi4xLDIuMywzLjJjMC41LDEsMC43LDIsMC43LDMuMWMwLDEtMC4yLDItMC43LDMuMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjksMi43LTkuNiw1LjEtMTYuNCw2LjhjLTYuOSwxLjctMTQuOSwyLjctMjMuNSwyLjdjLTMuNiwwLTcuMi0wLjItMTAuNS0wLjVMNTAsODcuMWMwLjEsMCwwLjMsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjUsMy43LDMuMyw3LDUuMSw5LjljMi4zLDMuNiw0LjgsNi41LDcuNSw4LjZjMS4zLDEuMSwyLjcsMS45LDQuMiwyLjVjMS41LDAuNiwzLD'+
			'AuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLjJsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjQtMC41LDQuNC0xLjcsNi4xLTMuNWMyLjUtMi43LDQuMi02LjQsNS40LTEwLjhjMC41LTIsMC45LTQuMiwxLjItNi41Yy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMy0xLjIsNS43LTIuMSw4Yy0wLjksMi4yLTEuOSwzLjktMyw1Yy0wLjYsMC43LTEuMywxLjItMiwxLjVsLTIuNy0xMy41Yy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjct'+
			'MC4xLTEuNC0wLjItMi4yLTAuNWMtMS43LTAuNy0zLjUtMi01LjQtNGMtMi42LTIuOC01LjItNi44LTcuNS0xMS43QzU5LDg4LDYyLDg4LjEsNjUsODguMWMxMy42LDAsMjYtMi4zLDM1LjItNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjYtMiw4LjQtNC4zLDExLjItNy4xYzEuNC0xLjQsMi41LTIuOSwzLjMtNC41YzAuOC0xLjYsMS4yLTMuNCwxLjItNS4yQzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -3px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me.divSkin.appendChild(me._gyro);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._enter_vr.logicBlock_visible();
	me._gyro_off.logicBlock_alpha();
	player.addListener('changenode', function(args) { me._enter_vr.logicBlock_visible();me._gyro_off.logicBlock_alpha(); });
	player.addListener('gyrochanged', function(args) { me._enter_vr.logicBlock_visible();me._gyro_off.logicBlock_alpha(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	me.skinTimerEvent();
};