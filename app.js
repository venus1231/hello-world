(function(){
	var app = angular.module('GemStore', []);

	app.controller('StoreController', function(){
		this.products = gem;//controller的屬性叫product
	});

	var gem = [{
		name:'iPhone 6S 128G',
		price:31500,
		description:'集所有優點於一身、3D touch、4K影片，功能強大',
		specification:'5吋螢幕',
		canPurchase:true,
		soldOut:false,
	},
	{
		name:'iPhone SE 64G',
		price:21500,
		description:'把iphone6S的規格裝進去iphone5的身體',
		specification:'4吋螢幕',
		canPurchase:true,
		soldOut:false,	
	}];

	app.controller('PanelController', function(){
		this.tab = 1; //跟ng-init="tab=1"意思一樣
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
})();
