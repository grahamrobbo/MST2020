sap.ui.define(
	["yelcho/sample/RoutingNestedComponent/base/BaseComponent"],
	function(BaseComponent) {
		return BaseComponent.extend(
			"yelcho.sample.RoutingNestedComponent.reuse.categories.Component",
			{
				metadata: {
					manifest: "json"
				},
				eventMappings: {
					productsComponent: [
						{
							name: "toProduct",
							forward: "toProduct"
						}
					]
				}
			}
		)
	}
)
