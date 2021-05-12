sap.ui.define(
	["yelcho/sample/RoutingNestedComponent/base/BaseController", "sap/base/Log"],
	function(Controller, Log) {
		return Controller.extend(
			"yelcho.sample.RoutingNestedComponent.reuse.categories.controller.List",
			{
				onPressListItem: function(oEvent) {
					Log.info(this.getView().getControllerName(), "onPressListItem")

					var oBindingContext = oEvent.getSource().getBindingContext()

					// navigate to the detail page. Because the products component is
					// integrated in the detail page, it's also needed to provide route
					// information for the deeply nested products component
					this.getOwnerComponent()
						.getRouter()
						.navTo(
							"detail",
							{
								id: oBindingContext.getProperty("CategoryID")
							},
							{
								products: {
									route: "list",
									parameters: {
										// encode the path because it could contain "/" which
										// isn't allowed to use as pattern parameter directly
										basepath: encodeURIComponent(oBindingContext.getPath())
									}
								}
							}
						)
				}
			}
		)
	}
)
