Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: '../img/icon.png',
	indicator:true,
    glossOnIcon: true,
    onReady: function() {
        // Create a Carousel of Items
        var carousel1 = new Ext.Carousel({
            defaults: {
                cls: 'card'
            },
			height:100,
            ui: 'light',
            items: [{
                html: '<div id="top"><ul><li><img src="img/avatar1.jpeg" width="50" height="50"></li><li><img src="img/avatar2.jpeg" width="50" height="50"></li><li><img src="img/avatar4.jpeg" width="50" height="50"></li><li><img src="img/avatar3.jpeg" width="50" height="50"></li><li><img src="img/avatar5.jpeg" width="50" height="50"></li></ul></div><div id="main" style="text-align:center;"><div id="maincontent"><img src="img/homemain.png" style="width:100%"></div></div>'
            },
            {
                title: 'Tab 2',
                html: '<div id="top"><ul><li><img src="img/avatar2.jpeg" width="50" height="50"></li><li><img src="img/avatar1.jpeg" width="50" height="50"></li><li><img src="img/avatar3.jpeg" width="50" height="50"></li></ul></div><div id="main" style="text-align:center;"><div id="maincontent"><img src="img/homemain.png" style="width:100%"></div></div>'
            },
            {
                title: 'Tab 3',
                html: '<div id="top"><ul><li><img src="img/avatar4.jpeg" width="50" height="50"></li><li><img src="img/avatar5.jpeg" width="50" height="50"></li></ul></div><div id="main" style="text-align:center;"><div id="maincontent"><img src="img/homemain.png" style="width:100%"></div></div>'
            }]
        });
        

        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'card',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
            items: [carousel1]
        });
    }
});