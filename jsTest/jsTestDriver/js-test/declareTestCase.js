// Test Case

var myTestCase = TestCase( "myTestCase" );

myTestCase.prototype.testA = function() {

    assertTrue( "假设是真的", true ) ;
};

TestCase( "testCase2", {
    testA: function() {
        assert( "假设也是真的", true );
    },
    testB: function() {
        assert( "让断言不成立", false );
    }
} );