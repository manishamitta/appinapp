sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("project2.controller.App",{onInit:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"screen1",async:true,manifest:true});e.then(function(e){debugger;this.byId("screen1").setComponent(e);this._customerDetailContainer=e}.bind(this))}})});
//# sourceMappingURL=App.controller.js.map