sap.ui.define(["yelcho/sample/RoutingNestedComponent/base/BaseController","sap/m/ColumnListItem","sap/m/Text","sap/base/Log","sap/ui/model/type/Currency"],(function(e,t,n,o,s){return e.extend("yelcho.sample.RoutingNestedComponent.reuse.products.controller.List",{onInit:function(){e.prototype.onInit.apply(this,arguments),this.getOwnerComponent().getRouter().getRoute("list").attachMatched(this._onMatched,this)},_onMatched:function(e){var o=e.getParameter("arguments"),r=decodeURIComponent(o.basepath||"")+"/Products";this.getView().byId("table").bindItems({path:r,parameters:{expand:"Supplier"},template:new t({type:"Navigation",press:this.onPressListItem.bind(this),cells:[new n({text:"{ProductID}"}),new n({text:"{ProductName}"}),new n({text:"{Supplier/CompanyName}"}),new n({text:{parts:[{path:"UnitPrice"},{value:"$"}],type:new s({currencyCode:!1})}})]})})},onPressListItem:function(e){o.info(this.getView().getControllerName(),"onPressListItem");var t=e.getSource().getBindingContext().getProperty("ProductID");this.getOwnerComponent().fireEvent("toProduct",{productID:t})}})}));