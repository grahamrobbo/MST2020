sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseController","sap/base/Log"],(function(e,t){return e.extend("yelcho.sample.RoutingNestedComponent.controller.App",{onInit:function(){t.info(this.getView().getControllerName(),"onInit"),this.getOwnerComponent().getRouter().attachRouteMatched(this._onRouteMatched,this),this.getOwnerComponent().getRouter().attachBypassed(this._onBypassed,this)},_onRouteMatched:function(e){t.info(this.getView().getControllerName(),"_onRouteMatched");var n=e.getParameter("config");this.setSelectedMenuItem(n.name)},setSelectedMenuItem:function(e){this.byId("navigationList").setSelectedKey(e)},_onBypassed:function(e){var n=e.getParameter("hash");t.info(this.getView().getControllerName(),"_onBypassed Hash="+n)},onItemSelect:function(e){var n=e.getParameter("item").getKey();t.info(this.getView().getControllerName(),"onItemSelect Key="+n),this.getOwnerComponent().getRouter().navTo(n)}})}));