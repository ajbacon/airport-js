describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
    anotherPlane = jasmine.createSpyObj('anotherPlane', ['land']);
  });

  it("has no plane by default", function(){
    expect(airport.planes()).toEqual([]);
  });

  it("can land a plane and confirm that it is at the Airport", function() {
    airport.landPlane(plane);
    expect(airport.planes()).toContain(plane);
  });

  it("can land a plane and confirm that it is at the Airport", function() {
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it("can land more than one plane", function() {
    airport.landPlane(plane)
    airport.landPlane(anotherPlane)
    expect(airport.planes().length).toEqual(2);
  });

  it("removes the correct plane from the hangar when taking off", function() {
    airport.landPlane(plane);
    airport.landPlane(anotherPlane);
    airport.takeOffPlane(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it("raises an error when trying to land plane in stormy conditions", function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.landPlane(plane)}).toThrowError('cannot land in stormy conditions');
  });



}); 

/* useful link for jasmine spies

  https://scriptverse.academy/tutorials/jasmine-createspy-createspyobj.html

*/