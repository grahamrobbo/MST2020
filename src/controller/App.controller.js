sap.ui.define(
	[
		"yelcho/sample/RoutingNestedComponent/base/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/base/Log",
	],
	function (Controller, JSONModel, Log) {
		return Controller.extend(
			"yelcho.sample.RoutingNestedComponent.controller.App",
			{
				onInit: function () {
					Log.info(this.getView().getControllerName(), "onInit")

					var oTitlesModel = new JSONModel({
						title: "Component Based Navigation Demo",
					})
					this.getView().setModel(oTitlesModel, "titleModel")

					// this.getOwnerComponent()
					// 	.getRouter()
					// 	.attachTitleChanged(function (oEvent) {
					// 		let a = true
					// 		oTitlesModel.setData(oEvent.getParameters())
					// 		document.title = oEvent.getParameter("title")
					// 	})

					this.getOwnerComponent()
						.getRouter()
						.attachRouteMatched(this._onRouteMatched, this)
					this.getOwnerComponent()
						.getRouter()
						.attachBypassed(this._onBypassed, this)
				},

				_onRouteMatched: function (oEvent) {
					Log.info(this.getView().getControllerName(), "_onRouteMatched")
					var oConfig = oEvent.getParameter("config")

					// select the corresponding item in the left menu
					this.setSelectedMenuItem(oConfig.name)
				},

				setSelectedMenuItem: function (sKey) {
					this.byId("navigationList").setSelectedKey(sKey)
				},

				_onBypassed: function (oEvent) {
					var sHash = oEvent.getParameter("hash")
					Log.info(
						this.getView().getControllerName(),
						"_onBypassed Hash=" + sHash
					)
				},

				onItemSelect: function (oEvent) {
					var sKey = oEvent.getParameter("item").getKey()
					Log.info(
						this.getView().getControllerName(),
						"onItemSelect Key=" + sKey
					)

					this.getOwnerComponent().getRouter().navTo(sKey)
				},
			}
		)
	}
)
