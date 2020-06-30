jQuery.sap.registerPreloadedModules({
	version: "2.0",
	name:
		"yelcho/sample/RoutingNestedComponent/reuse/categories/Component-preload",
	modules: {
		"yelcho/sample/RoutingNestedComponent/reuse/categories/Component.js":
			'sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseComponent"],(function(e){return e.extend("yelcho.sample.RoutingNestedComponent.reuse.categories.Component",{metadata:{manifest:"json"},eventMappings:{productsComponent:[{name:"toProduct",forward:"toProduct"}]}})}));',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/App.controller.js":
			'sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseController"],(function(e){return e.extend("yelcho.sample.RoutingNestedComponent.reuse.categories.controller.App",{})}));',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/Detail.controller.js":
			'sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseController","sap/base/Log"],(function(e,t){return e.extend("yelcho.sample.RoutingNestedComponent.reuse.categories.controller.Detail",{onInit:function(){e.prototype.onInit.apply(this,arguments),this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this._onMatched,this)},_onMatched:function(e){t.info(this.getView().getControllerName(),"_onMatched");var n=e.getParameter("arguments");this.getOwnerComponent().getModel().metadataLoaded().then(this._bindData.bind(this,n.id))},_bindData:function(e){t.info(this.getView().getControllerName(),"_bindData");var n=this.getOwnerComponent().getModel().createKey("Categories",{CategoryID:e});this.getView().bindElement({path:"/"+n,events:{change:function(){t.info(this.getView().getControllerName(),"_bindData change"),this.getView().setBusy(!1)}.bind(this),dataRequested:function(){t.info(this.getView().getControllerName(),"_bindData dataRequested"),this.getView().setBusy(!0)}.bind(this),dataReceived:function(){t.info(this.getView().getControllerName(),"_bindData dataReceived"),this.getView().setBusy(!1),null===this.getView().getBindingContext()&&this.getOwnerComponent().getRouter().getTargets().display("notFound")}.bind(this)}})}})}));',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/List.controller.js":
			'sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseController","sap/base/Log"],(function(e,t){return e.extend("yelcho.sample.RoutingNestedComponent.reuse.categories.controller.List",{onPressListItem:function(e){t.info(this.getView().getControllerName(),"onPressListItem");var o=e.getSource().getBindingContext();this.getOwnerComponent().getRouter().navTo("detail",{id:o.getProperty("CategoryID")},{products:{route:"list",parameters:{basepath:encodeURIComponent(o.getPath())}}})}})}));',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/App.view.xml":
			'<mvc:View controllerName="yelcho.sample.RoutingNestedComponent.reuse.categories.controller.App" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" displayBlock="true"><App id="app" /></mvc:View>',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/Detail.view.xml":
			'<mvc:View controllerName="yelcho.sample.RoutingNestedComponent.reuse.categories.controller.Detail" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:l="sap.ui.layout" xmlns:f="sap.ui.layout.form" xmlns:core="sap.ui.core" displayBlock="true" busyIndicatorDelay="0"><Page id="page" showHeader="false" showNavButton="false" enableScrolling="true" class="sapUiContentPadding categoriesPage"><VBox id="box"><f:Form id="FormDisplay354" editable="false"><f:title><core:Title text="{i18n>detailViewTitle}" /></f:title><f:layout><f:ResponsiveGridLayout labelSpanXL="3" labelSpanL="3" labelSpanM="3" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="4" emptySpanL="4" emptySpanM="4" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false" /></f:layout><f:formContainers><f:FormContainer><f:formElements><f:FormElement label="ID"><f:fields><Text text="{CategoryID}" /></f:fields></f:FormElement><f:FormElement label="Name"><f:fields><Text text="{CategoryName}" /></f:fields></f:FormElement><f:FormElement label="Description"><f:fields><Text text="{Description}" /></f:fields></f:FormElement><f:FormElement label="Image"><f:fields><Image src="{path:\'Picture\', formatter:\'.northwindImageFormatter\'}" /></f:fields></f:FormElement></f:formElements></f:FormContainer></f:formContainers></f:Form></VBox></Page></mvc:View>',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/List.view.xml":
			'<mvc:View controllerName="yelcho.sample.RoutingNestedComponent.reuse.categories.controller.List" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" displayBlock="true"><Page id="page" showHeader="false" enableScrolling="true" class="sapUiContentPadding categoriesPage"><Table inset="false" busyIndicatorDelay="0" items="{/Categories}"><headerToolbar><OverflowToolbar><content><Title text="{i18n>listViewTitle}" level="H2" /><ToolbarSpacer /></content></OverflowToolbar></headerToolbar><columns><Column width="12em"><Text text="ID" /></Column><Column><Text text="Name" /></Column><Column><Text text="Description" /></Column></columns><items><ColumnListItem type="Navigation" press="onPressListItem"><cells><Text text="{CategoryID}" /><Text text="{CategoryName}" /><Text text="{Description}" /></cells></ColumnListItem></items></Table></Page></mvc:View>',
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/NotFound.view.xml":
			'<mvc:View xmlns="sap.m"xmlns:mvc="sap.ui.core.mvc"><MessagePage title="{i18n>detailViewTitle} Not Found"text="This resource was not found"description="Check your code"class="categoriesPage" /></mvc:View>',
	},
})
