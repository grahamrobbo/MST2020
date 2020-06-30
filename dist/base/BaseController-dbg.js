sap.ui.define(["sap/ui/core/mvc/Controller", "sap/base/Log"], function(
	Controller,
	Log
) {
	return Controller.extend(
		"yelcho.sample.RoutingNestedComponent.base.BaseController",
		{
			onInit: function() {
				Log.info(this.getView().getControllerName(), "onInit")
			},
			northwindImageFormatter: function(picture) {
				return picture ? "data:image/bmp;base64," + picture.substr(104) : null
			}
		}
	)
})
