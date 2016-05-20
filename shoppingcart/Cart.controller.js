sap.ui.controller("shoppingcart.Cart", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.Cart
*/
	onInit: function() {

		var context = sap.ui.getCore().byId("app").getModel('cart').getContext('/');
		this.getView().setBindingContext(context,'cart');


		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

	},

	_handleRouteMatched: function(evt) {

		if("Cart" !== evt.getParameter("name")){
			return;
		}

		var data= sap.ui.getCore().byId("app").getModel("cart").getData();

		var total = 0;

		$.each(data.items, function(i,ele) {

			var price = ele.price;
			var quantity = ele.quantity;

			total += price * quantity;

		});


		if(total == 0){
			$("#itable").html("<h1 style='text-align:center;color:red'>Nothing in your cart!<br/>go back to buy!buy!buy! </h1>");
			$("#bid").hide();
		}else{
			$("#bid").show();
			$("#tid").html("<h3>Total: "+ total +"</h3>");
		}


	},


});