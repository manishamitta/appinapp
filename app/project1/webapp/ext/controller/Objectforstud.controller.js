sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('project1.ext.controller.Objectforstud', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.Objectforstud
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				debugger;
		
			},
			routing :{
				onAfterBinding : async function(oBindingContext){
					debugger;
					

					var table = sap.ui.getCore().byId("project1::classObjectPage--fe::CustomSubSection::Table--idProductsTable");
					// table.bindAggregation("items", {
					// 	path: oBindingContext.getPath() + "/classtostud"
					// 	// template: table.getBindingInfo("items").template,
					// })
					// table.getBinding("items").refresh();
					table.bindItems({
						path: oBindingContext.getPath() + "/classtostud",
						template: table.getBindingInfo("items").template
					});

				}
			}
			
		}
	});
});
