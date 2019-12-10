# airportjs


Approach
========

Tests:

Airport Spec
- Check that a Airport is created with no planes **done**
- Check that a plane can land at an airport (confirm plane has landed), landPlane function (stub the plane?) **done**
- check that the airport can land multiple planes **done**
- Check that a plane can take-off from the airport **done**
- Check that the correct plane is removed from the hangar when its taken off **done**
- check that a plane cannot land if adverse (stormy) weather conditions at the airport
- check that the plane can land in fair conditions

Plane spec
- check that the plane landing function calls the airport landPlane function (jasmine matcher: toHaveBeenCalledWith) **done**
- check that the plane takeOff function calls the airport takeOffPlane function (jasmine matcher: toHaveBeenCalledWith) **done**

Weather spec
- check that the weather conditions can be randomly generated