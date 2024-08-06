//@ui5-bundle project1/Component-preload.js
sap.ui.require.preload({
	"project1/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"}})});
},
	"project1/ext/controller/Controllerid.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("project1.ext.controller.Controllerid",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()}}})});
},
	"project1/ext/controller/Idobj.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("project1.ext.controller.Idobj",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()}}})});
},
	"project1/ext/controller/Listcontroller.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("project1.ext.controller.Listcontroller",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()}}})});
},
	"project1/ext/controller/Objcontroller.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("project1.ext.controller.Objcontroller",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()}}})});
},
	"project1/ext/fragment/Table.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><Table id="idProductsTable"\n\t\tinset="false"\n\t\titems="{\n\t\t\tpath: \'/student\'\n\t\t}"><columns><Column id = "c1"\n\t\t\t\twidth="12em"><Text id = "t1" text="id" /></Column><Column id = "c2"\n\t\t\t\tminScreenWidth="Tablet"\n\t\t\t\tdemandPopin="true"><Text id = "t2" text="name" /></Column></columns><items><ColumnListItem id = "cl" type="Navigation" press="onListPressed" vAlign="Middle"><cells><Text  text="{id}"></Text><Text id = "t4" text="{name}"></Text></cells></ColumnListItem></items></Table></core:FragmentDefinition>',
	"project1/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,15\nflpTitle=app\n',
	"project1/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"project1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.0","toolsId":"2d87b88e-9192-4dfa-b43f-aa5df594f5a8"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"semobj-display":{"semanticObject":"semobj","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.125.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"classList","target":"classList"},{"pattern":"class({key}):?query:","name":"classObjectPage","target":"classObjectPage"},{"pattern":"class({key})/classtostud({key2}):?query:","name":"class_classtostudObjectPage","target":"class_classtostudObjectPage"}],"targets":{"classList":{"type":"Component","id":"classList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/class","navigation":{"class":{"detail":{"route":"classObjectPage"}}}}}},"classObjectPage":{"type":"Component","id":"classObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/class","navigation":{"classtostud":{"detail":{"route":"class_classtostudObjectPage"}}},"content":{"body":{"sections":{"Table":{"template":"project1.ext.fragment.Table","position":{"placement":"After","anchor":"students"},"title":"custom table"}}}}}}},"class_classtostudObjectPage":{"type":"Component","id":"class_classtostudObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/class/classtostud","navigation":{}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ListReport.ListReportController":{"controllerName":"project1.ext.controller.Listcontroller"},"sap.fe.templates.ObjectPage.ObjectPageController":{"controllerName":"project1.ext.controller.Objcontroller"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"appin"}}'
});
//# sourceMappingURL=Component-preload.js.map
