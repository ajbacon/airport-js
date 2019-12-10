describe("Plane", function() {
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['landPlane', 'takeOffPlane']);
  });

  it("can land a plane and confirm that it is at the Airport", function() {
    plane.land(airport)
    expect(airport.landPlane).toHaveBeenCalledWith(plane);
    expect(plane.location()).toEqual(airport)
  });

  it("can take off and confirm that it is in the 'sky", function() {
    plane.takeOff(airport)
    expect(airport.takeOffPlane).toHaveBeenCalledWith(plane);
    expect(plane.location()).toEqual("sky")
  });
}); 
