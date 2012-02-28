GreeterTest = TestCase( "GreeterTest" );

GreeterTest.prototype.testGreet = function() {
    var greeter = new app.Greeter();
    assertEquals( "Hello World!", greeter.greet( "World" ) );
};
GreeterTest.prototype.testName= function() {
    assertEquals( "_jsTestDriver", app.name );
};