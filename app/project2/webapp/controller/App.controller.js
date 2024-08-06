sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("project2.controller.App", {
        onInit: function() {
          debugger
          var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
            usage: "screen1", async: true, manifest: true
        });
        ocustomerDetailContainer.then(
            function (ocustomerDetail) {
                debugger
                this.byId("screen1").setComponent(ocustomerDetail);
                this._customerDetailContainer = ocustomerDetail;
            }.bind(this)
        );

        }
      });
    }
  );
  