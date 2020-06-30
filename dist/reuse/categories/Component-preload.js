jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "yelcho/sample/RoutingNestedComponent/reuse/categories/Component-preload",
	"modules": {
		"yelcho/sample/RoutingNestedComponent/reuse/categories/Component.js": "sap.ui.define([\"yelcho/sample/RoutingNestedComponent/base/BaseComponent\"],(function(e){return e.extend(\"yelcho.sample.RoutingNestedComponent.reuse.categories.Component\",{metadata:{manifest:\"json\"},eventMappings:{productsComponent:[{name:\"toProduct\",forward:\"toProduct\"}]}})}));",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/App.controller.js": "sap.ui.define([\"yelcho/sample/RoutingNestedComponent/base/BaseController\"],(function(e){return e.extend(\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.App\",{})}));",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/Detail.controller.js": "sap.ui.define([\"yelcho/sample/RoutingNestedComponent/base/BaseController\",\"sap/base/Log\"],(function(e,t){return e.extend(\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.Detail\",{onInit:function(){e.prototype.onInit.apply(this,arguments),this.getOwnerComponent().getRouter().getRoute(\"detail\").attachMatched(this._onMatched,this)},_onMatched:function(e){t.info(this.getView().getControllerName(),\"_onMatched\");var n=e.getParameter(\"arguments\");this.getOwnerComponent().getModel().metadataLoaded().then(this._bindData.bind(this,n.id))},_bindData:function(e){t.info(this.getView().getControllerName(),\"_bindData\");var n=this.getOwnerComponent().getModel().createKey(\"Categories\",{CategoryID:e});this.getView().bindElement({path:\"/\"+n,events:{change:function(){t.info(this.getView().getControllerName(),\"_bindData change\"),this.getView().setBusy(!1)}.bind(this),dataRequested:function(){t.info(this.getView().getControllerName(),\"_bindData dataRequested\"),this.getView().setBusy(!0)}.bind(this),dataReceived:function(){t.info(this.getView().getControllerName(),\"_bindData dataReceived\"),this.getView().setBusy(!1),null===this.getView().getBindingContext()&&this.getOwnerComponent().getRouter().getTargets().display(\"notFound\")}.bind(this)}})}})}));",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/controller/List.controller.js": "sap.ui.define([\"yelcho/sample/RoutingNestedComponent/base/BaseController\",\"sap/base/Log\"],(function(e,t){return e.extend(\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.List\",{onPressListItem:function(e){t.info(this.getView().getControllerName(),\"onPressListItem\");var o=e.getSource().getBindingContext();this.getOwnerComponent().getRouter().navTo(\"detail\",{id:o.getProperty(\"CategoryID\")},{products:{route:\"list\",parameters:{basepath:encodeURIComponent(o.getPath())}}})}})}));",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/App.view.xml": "<mvc:View controllerName=\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.App\" \n\t\n  xmlns:mvc=\"sap.ui.core.mvc\" \n\t\n  xmlns=\"sap.m\" \n\tdisplayBlock=\"true\">\n  <App id=\"app\" />\n</mvc:View>\n",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/Detail.view.xml": "<mvc:View controllerName=\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.Detail\" \n\t\n  xmlns:mvc=\"sap.ui.core.mvc\" \n\t\n  xmlns=\"sap.m\" \n\t\n  xmlns:l=\"sap.ui.layout\" \n\t\n  xmlns:f=\"sap.ui.layout.form\" \n\t\n  xmlns:core=\"sap.ui.core\" \n\tdisplayBlock=\"true\" \n\tbusyIndicatorDelay=\"0\">\n  <Page id=\"page\" \n\t\tshowHeader=\"false\" \n\t\tshowNavButton=\"false\" \n\t\tenableScrolling=\"true\" \n\t\tclass=\"sapUiContentPadding categoriesPage\">\n    <VBox id=\"box\">\n      <f:Form id=\"FormDisplay354\" \n\t\t\t\teditable=\"false\">\n        <f:title>\n          <core:Title text=\"{i18n>detailViewTitle}\" />\n        </f:title>\n        <f:layout>\n          <f:ResponsiveGridLayout labelSpanXL=\"3\" \n\t\t\t\t\t\tlabelSpanL=\"3\" \n\t\t\t\t\t\tlabelSpanM=\"3\" \n\t\t\t\t\t\tlabelSpanS=\"12\" \n\t\t\t\t\t\tadjustLabelSpan=\"false\" \n\t\t\t\t\t\temptySpanXL=\"4\" \n\t\t\t\t\t\temptySpanL=\"4\" \n\t\t\t\t\t\temptySpanM=\"4\" \n\t\t\t\t\t\temptySpanS=\"0\" \n\t\t\t\t\t\tcolumnsXL=\"1\" \n\t\t\t\t\t\tcolumnsL=\"1\" \n\t\t\t\t\t\tcolumnsM=\"1\" \n\t\t\t\t\t\tsingleContainerFullSize=\"false\" />\n        </f:layout>\n        <f:formContainers>\n          <f:FormContainer>\n            <f:formElements>\n              <f:FormElement label=\"ID\">\n                <f:fields>\n                  <Text text=\"{CategoryID}\" />\n                </f:fields>\n              </f:FormElement>\n              <f:FormElement label=\"Name\">\n                <f:fields>\n                  <Text text=\"{CategoryName}\" />\n                </f:fields>\n              </f:FormElement>\n              <f:FormElement label=\"Description\">\n                <f:fields>\n                  <Text text=\"{Description}\" />\n                </f:fields>\n              </f:FormElement>\n              <f:FormElement label=\"Image\">\n                <f:fields>\n                  <Image src=\"{path:'Picture', formatter:'.northwindImageFormatter'}\" />\n                </f:fields>\n              </f:FormElement>\n            </f:formElements>\n          </f:FormContainer>\n        </f:formContainers>\n      </f:Form>\n    </VBox>\n  </Page>\n</mvc:View>\n",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/List.view.xml": "<mvc:View controllerName=\"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.List\" \n\t\n  xmlns:mvc=\"sap.ui.core.mvc\" \n\t\n  xmlns=\"sap.m\" \n\tdisplayBlock=\"true\">\n  <Page id=\"page\" \n\t\tshowHeader=\"false\" \n\t\tenableScrolling=\"true\" \n\t\tclass=\"sapUiContentPadding categoriesPage\">\n    <Table inset=\"false\" \n\t\t\tbusyIndicatorDelay=\"0\" \n\t\t\titems=\"{/Categories}\">\n      <headerToolbar>\n        <OverflowToolbar>\n          <content>\n            <Title text=\"{i18n>listViewTitle}\" \n\t\t\t\t\t\t\tlevel=\"H2\" />\n            <ToolbarSpacer />\n          </content>\n        </OverflowToolbar>\n      </headerToolbar>\n      <columns>\n        <Column width=\"12em\">\n          <Text text=\"ID\" />\n        </Column>\n        <Column>\n          <Text text=\"Name\" />\n        </Column>\n        <Column>\n          <Text text=\"Description\" />\n        </Column>\n      </columns>\n      <items>\n        <ColumnListItem type=\"Navigation\" \n\t\t\t\t\tpress=\"onPressListItem\">\n          <cells>\n            <Text text=\"{CategoryID}\" />\n            <Text text=\"{CategoryName}\" />\n            <Text text=\"{Description}\" />\n          </cells>\n        </ColumnListItem>\n      </items>\n    </Table>\n  </Page>\n</mvc:View>\n",
		"yelcho/sample/RoutingNestedComponent/reuse/categories/view/NotFound.view.xml": "<mvc:View \n  xmlns=\"sap.m\"\n\t\n  xmlns:mvc=\"sap.ui.core.mvc\">\n  <MessagePage title=\"{i18n>detailViewTitle} Not Found\"\n\t\ttext=\"This resource was not found\"\n\t\tdescription=\"Check your code\"\n\t\tclass=\"categoriesPage\" />\n</mvc:View>\n"
	}
});