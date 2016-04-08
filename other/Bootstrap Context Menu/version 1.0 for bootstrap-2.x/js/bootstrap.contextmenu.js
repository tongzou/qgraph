(function($) {
    var _bfd = {};
    var _cm = {
        init:function(target,elements){
            var element_id;
            element_id = _cm.guid();
            var context_menu = $('<div class="dropdown clearfix bootstrap-contextmenu"></div>');
            context_menu
            .css({
                display:'none',
                position:'absolute'
            })
            .attr({
                id:element_id
            })
            .appendTo('body');
            
            $(target).data('e_id', element_id);
            mc = $(target).data('mc');
            
            if (mc == undefined){
            	mc = 3;
            }
            $(target).data('e',$.extend(true,{},elements));
            $(target).css('-moz-user-select','none');
            $(target).css('-khtml-user-select','none');
            $(target).css('user-select','none');
            
            _cm.buildElements(target,context_menu, elements,true);
            _cm.create(target,mc);
            
        },
        buildElements:function(target,parent,elements,is_parent){
            var ul = $('<ul aria-labelledby="dropdownMenu" role="menu" class="dropdown-menu"></ul>');
            is_parent = (is_parent != undefined)?is_parent:true
            if (is_parent == true){
                ul.show();
            }
            for(var i in elements){
                var li = $('<li></li>');
                li.attr({
                    id:i
                });
                switch (typeof elements[i]){
                    case 'object':
                        if (elements[i].text != undefined){
                            if (elements[i].text == '---'){
                                li.addClass('divider');
                            }else{
                                var _a = $('<a href="#" tabindex="-1"></a>');
                                if (typeof elements[i].icon == 'string'){
                                    li
                                    .append(_a
                                        .append(' <i class="'+elements[i].icon+'"></i> ')
                                        .append(elements[i].text));
                                }else{
                                    _a = $('<a href="#" tabindex="-1">'+elements[i].text+'</a>');
                                    li.append(_a);
                                    
                                }
                                if (typeof elements[i].click == 'function'){
                                    _a.bind('mousedown',{
                                        key:i,
                                        target:target,
                                        callback:elements[i].click
                                    },function(e){
                                        if (!$(this).parent().hasClass('disabled')){
                                            e.data.callback(e.data.target,$(this).parent());
                                        }
                                    });
                                }
                                if (elements[i].disabled != undefined && elements[i].disabled == true){
                                    li.addClass('disabled');
                                }
                                if (typeof elements[i].children == 'object'){
                                    if (!li.hasClass('disabled')){
                                        li.addClass('dropdown-submenu');
                                        _cm.buildElements(target,li, elements[i].children,false);
                                    }
                                }
                                if (li.hasClass('disabled')){
                                    li.children('a').children('i').hide();
                                }
                            }
                        }
                        break;
                    case 'string':
                        if (elements[i] == '---'){
                            li.addClass('divider');
                        }else{
                            li.append($('<a href="#" tabindex="-1">'+elements[i]+'</a>'));
                        }
                        break;
                        
                }
                ul.append(li);
            }
            parent.append(ul);
        },
        create:function(target,mc){
        	if (mc == undefined) mc = 3;
        	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        		 mc = 1;
         	}
            var element_id = $(target).data('e_id');
            $("#"+element_id).bind("contextmenu",function(e){
                e.preventDefault();
            });
            $(target).mousedown( function(e) {
            	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )) {
            		$("#"+element_id).hide();
            	}
            });
            $(target).bind("contextmenu",function(e){
                e.preventDefault();
            });
            $(document).mousedown( function(e) {
            	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )) {
            		$("#"+element_id).hide();
            	}
            });
            
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	            $("#"+element_id).mousedown( function(e) {
	        		$("#"+element_id).hide();
	            });
	            $(document).mousedown( function(e) {
	            	$('.bootstrap-contextmenu').hide();
	            });
            }
            
            $(target).mousedown( function(e) {
            	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )) {
            		$('.bootstrap-contextmenu').hide();
            	}
                var evt = e;
                e.stopPropagation();
                $(this).mouseup( function(e) {
                    e.stopPropagation();
                    $(this).unbind('mouseup');
                    if( evt.which == mc) {
                        if (_bfd[element_id] != undefined){
                            var fnc = _bfd[element_id];
                            fnc($(target));
                        }
                        var d = {}, x, y;
                        if( self.innerHeight ) {
                            d.pageYOffset = self.pageYOffset;
                            d.pageXOffset = self.pageXOffset;
                            d.innerHeight = self.innerHeight;
                            d.innerWidth = self.innerWidth;
                        } else if( document.documentElement &&
                            document.documentElement.clientHeight ) {
                            d.pageYOffset = document.documentElement.scrollTop;
                            d.pageXOffset = document.documentElement.scrollLeft;
                            d.innerHeight = document.documentElement.clientHeight;
                            d.innerWidth = document.documentElement.clientWidth;
                        } else if( document.body ) {
                            d.pageYOffset = document.body.scrollTop;
                            d.pageXOffset = document.body.scrollLeft;
                            d.innerHeight = document.body.clientHeight;
                            d.innerWidth = document.body.clientWidth;
                        }
                        (e.pageX) ? x = e.pageX : x = e.clientX;
                        (e.pageY) ? y = e.pageY : y = e.clientY;
                        var height = $("#x-context-"+$(target).attr('id')).height();
                        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                        	if ($("#"+element_id).css('display') == 'block'){
                        		$('.bootstrap-contextmenu').hide();
                        	}else{
	                        	if (y + height > $(document).height()){
		                            $("#"+element_id).css({
		                                top: y - height, 
		                                left: x
		                            }).fadeIn(20);
		                        }else{
		                            $("#"+element_id).css({
		                                top: y, 
		                                left: x
		                            }).fadeIn(20);
		                        }
                        	}
                        }else{
                        	if (y + height > $(document).height()){
	                            $("#"+element_id).css({
	                                top: y - height, 
	                                left: x
	                            }).fadeIn(20);
	                        }else{
	                            $("#"+element_id).css({
	                                top: y, 
	                                left: x
	                            }).fadeIn(20);
	                        }
                        }
                    }
                });
            });
        },
        guid:function() {
            var S4 = function() {
                return Math.floor(Math.random() * 0x10000 /* 65536 */
                    ).toString(16);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }
	
    }
        
    $.fn.contextMenu = function(elements,ids){
        ids = (ids != undefined)?ids:'';
        if (typeof elements == 'string' && ids != ''){
            var element_id = $(this).data('e_id');
            var _elements = $(this).data('e');
            if (typeof element_id == 'string' && element_id != ''){
                if (typeof ids != 'function'){
                    var ary = [];
                    if (ids.indexOf('>') > 0 ){
                        var tmp = ids.split('>');
                        for(var i in tmp){
                            ary[ary.length] = $.trim(tmp[i]);
                        }
                    }else{
                        ary[ary.length] = $.trim(ids);
                    }
                }
                switch(elements){
                    case 'disable':
                        $('#'+element_id).remove();
                        var tmpe = _elements;
                        var l = ary.length - 1;
                        for(var i in ary){
                            if (tmpe[ary[i]] != undefined){
                                if (i == l){
                                    tmpe[ary[i]].disabled = true;
                                }else{
                                    if (tmpe[ary[i]].children != undefined){
                                        tmpe = tmpe[ary[i]].children;
                                    }else{
                                        break;
                                    }
                                }
                            }else{
                                break;
                            }
                        }
                        _cm.init(this,_elements);
                        break;
                    case 'enable':
                        $('#'+element_id).remove();
                        var tmpe = _elements;
                        var l = ary.length - 1;
                        for(var i in ary){
                            if (tmpe[ary[i]] != undefined){
                                if (i == l){
                                    tmpe[ary[i]].disabled = false;
                                }else{
                                    if (tmpe[ary[i]].children != undefined){
                                        tmpe = tmpe[ary[i]].children;
                                    }else{
                                        break;
                                    }
                                }
                            }else{
                                break;
                            }
                        }
                        _cm.init(this,_elements);
                        break;
                   case 'beforeDisplay':
                       if (typeof ids == 'function'){
                           _bfd[element_id] = ids;
                       }
                       break;
                }
            }
        }else if(typeof elements == 'object'){
            return $(this).each(function(){
                _cm.init(this,elements);
            });
        }
        
    };
        
})(jQuery);