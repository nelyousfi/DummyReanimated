1. when the shared value is changed, nothing seems rendering on js side (neither the parent nor the child). Probably the rendering is happening on the native side?
2. when a shared value is changed, it is captured by the mutable set, then this setter runOnUiThread a worklet that was transformed using babel plugin where \_\_initData field was added, this field contains the code of the function hardcoded, source map and location.
3. inside this function, the babel plugin also inject some fields like \_closure. So we have something like function.\_closure. This \_closure object contains the mutable and newValue (the new value of the shared value).
4. the first recursive goes something like: function (inside the runOnUi) ~> function.\_closure ~> newValue.
5. the worklet also contains two other fields **workletHash and **version.
6. we have two native functions to check: makeShareableClone and scheduleOnUI? makeShareableClone is called with the newValue, workletHash, version. The returned sharableRef is passed to scheduleOnUI.
