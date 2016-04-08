$(document).ready(function() {
    HoeDatapp = {
        appinit: function() {
            HoeDatapp.HandleSidebartoggle();
            HoeDatapp.Handlelpanel();
            HoeDatapp.Handlelpanelmenu();
            HoeDatapp.Handlethemeoption();
            HoeDatapp.Handlesidebareffect();
            HoeDatapp.Handlesidebarposition();
            HoeDatapp.Handlecontentheight();
            HoeDatapp.Handlethemecolor();
			HoeDatapp.Handlenavigationtype();
			HoeDatapp.Handlesidebarside();
			 

        },
		Handlesidebarside: function() {
			 $('#navigation-side').change(function() {
                if ($(this).val() == 'rightside') {
                  $('body').attr("nav-position-type", "right");  
                }else {
				 $('body').attr("nav-position-type", "left");  	
				}
            });
        },
		Handlenavigationtype: function() {
			 $('#navigation-type').change(function() {
                if ($(this).val() == 'horizontal') {
                    $('body').attr("navigation-type", "horizontal");
					$('#theme-wrapper').removeClass("compact-hmenu");
					$('#header, #theme-container').removeClass("minimized-lpanel");
                }else if  ($(this).val() == 'horizontal-compact'){
                    $('body').attr("navigation-type", "horizontal");
					$('#theme-wrapper').addClass("compact-hmenu");
					$('#header, #theme-container').removeClass("minimized-lpanel");
                }else if  ($(this).val() == 'vertical-compact'){
                    $('body').attr("navigation-type", "vertical-compact");
					$('#theme-wrapper').removeClass("compact-hmenu");
					$('#header, #theme-container').addClass("minimized-lpanel");
                }else {
					$('body').attr("navigation-type", "vertical-compact");
					$('#theme-wrapper').removeClass("compact-hmenu");
					$('#header, #theme-container').removeClass("minimized-lpanel");
				}
            });
        },
		
        Handlethemecolor: function() {

            function setheadercolor() {
                $('#theme-color > a.header-bg').click(function() {
                    $('#header > .right-header').attr("color-type", $(this).attr("color-type"));
                });
            };

            function setlpanelcolor() {
                $('#theme-color > a.lpanel-bg').click(function() {
                    $('#theme-container').attr("color-type", $(this).attr("color-type"));
                });
            };

            function setllogocolor() {
                $('#theme-color > a.logo-bg').click(function() {
                    $('#header').attr("color-type", $(this).attr("color-type"));
                });
            };
            setheadercolor();
            setlpanelcolor();
            setllogocolor();
        },
        Handlecontentheight: function() {

            function setHeight() {
                var WH = $(window).height();
                var HH = $("#header").innerHeight();
                var FH = $("#footer").innerHeight();
                var contentH = WH - HH - FH - 2;
				var lpanelH = WH - HH - 2;
                $("#main-content ").css('min-height', contentH)
				 $(".inner-left-panel ").css('height', lpanelH)

            };
            setHeight();

            $(window).resize(function() {
                setHeight();
            });
        },
        Handlesidebarposition: function() {

            $('#sidebar-position').change(function() {
                if ($(this).val() == 'fixed') {
                    $('#left-panel,.left-header').attr("position-type", "fixed");
                } else {
                    $('#left-panel,.left-header').attr("position-type", "absolute");
                }
            });
        },
        Handlesidebareffect: function() {
            $('#leftpanel-effect').change(function() {
                if ($(this).val() == 'overlay') {
                    $('#header, #theme-container').attr("lpanel-effect", "overlay");
                } else if ($(this).val() == 'push') {
                    $('#header, #theme-container').attr("lpanel-effect", "push");
                } else {
                    $('#header, #theme-container').attr("lpanel-effect", "shrink");
                }
            });

        },

        Handlethemeoption: function() {
            $('.selector-toggle > a').click(function() {
                $('#styleSelector').toggleClass('open')
            });

        },
        Handlelpanelmenu: function() {
            $('.has-menu > a').click(function() {
                var compactMenu = $(this).closest('.minimized-lpanel').length;
                if (compactMenu === 0) {
                    $(this).parent('.has-menu').parent('ul').find('ul:visible').slideUp('fast');
                    $(this).parent('.has-menu').parent('ul').find('.opened').removeClass('opened');
                    var submenu = $(this).parent('.has-menu').find('>.sub-menu');
                    if (submenu.is(':hidden')) {
                        submenu.slideDown('fast');
                        $(this).parent('.has-menu').addClass('opened');
                    } else {
                        $(this).parent('.has-menu').parent('ul').find('ul:visible').slideUp('fast');
                        $(this).parent('.has-menu').removeClass('opened');
                    }
                }
            });

        },
        HandleSidebartoggle: function() {
            $('.sidebar-toggle a').click(function() {
                if ($('#theme-wrapper').attr("device-type") !== "phone") {
                    $('#theme-container').toggleClass('minimized-lpanel');
                    $('#header').toggleClass('minimized-lpanel');
                } else {
                    if (!$('#theme-wrapper').hasClass('hide-lpanel')) {
                        $('#theme-wrapper').addClass('hide-lpanel');
                    } else {
                        $('#theme-wrapper').removeClass('hide-lpanel');
                    }
                }
            });

        },
        Handlelpanel: function() {

            function Responsivelpanel() {
                
				var totalwidth = $(window)[0].innerWidth;
                if (totalwidth >= 768 && totalwidth <= 1024) {
                    $('#theme-wrapper').attr("device-type", "tablet");
                    $('#header, #theme-container').addClass('minimized-lpanel');
					$('li.theme-option select').attr('disabled', false);
                } else if (totalwidth < 768) {
                    $('#theme-wrapper').attr("device-type", "phone");
                    $('#header, #theme-container').removeClass('minimized-lpanel');
					$('li.theme-option select').attr('disabled', 'disabled');
                } else {
                    $('#theme-wrapper').attr("device-type", "desktop");
                    $('#header, #theme-container').removeClass('minimized-lpanel');
					$('li.theme-option select').attr('disabled', false);
                }
            }
            Responsivelpanel();
            $(window).resize(Responsivelpanel);

        },

    };
    HoeDatapp.appinit();
});