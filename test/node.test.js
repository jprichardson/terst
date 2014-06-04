var terst = require('../')

describe('terst', function() {
  describe('+ T()', function() {
    describe('> when truthy', function() {
      it('should not have any errors', function() {
        var err = 0
        try { T (true) } catch(e) { console.log(e); err += 1}
        try { T ({}) } catch(e) { console.log(e); err += 1}
        try { T (1) } catch(e) { console.log(e); err += 1}

        if (err !== 0) throw new Error(err + ' should be 0') 
      })
    })

    describe('> when falsey', function() {
      it('should have any errors', function() {
        var err = 0
        try { T (false) } catch(e) { err += 1}
        try { T (0) } catch(e) { err += 1}
        try { T ('') } catch(e) { err += 1}

        if (err !== 3) throw new Error(err + ' should not be 0') 
      })
    })
  })

  describe('+ F()', function() {
    describe('> when truthy', function() {
      it('should not have any errors', function() {
        var err = 0
        try { F (true) } catch(e) { err += 1}
        try { F ({}) } catch(e) {  err += 1}
        try { F (1) } catch(e) {  err += 1}

        if (err !== 3) throw new Error(err + ' should not be 0') 
      })
    })

    describe('> when falsey', function() {
      it('should have any errors', function() {
        var err = 0
        try { F (false) } catch(e) { err += 1}
        try { F (0) } catch(e) { err += 1}
        try { F ('') } catch(e) { err += 1}

        if (err > 0) throw new Error(err + ' should be 0') 
      })
    })
  })

  describe('+ EQ()', function() {
    describe('> when equal', function() {
      it('should not throw an exception', function() {
        EQ (1, 1)
        EQ ('1', '1')
        EQ (true, true)
        EQ (false, false)
        EQ (null, null)
        EQ (void 0, void 0)

        var err = 0
        try {
          EQ (NaN, NaN) //this is never true
        } catch (e) {
          err += 1
        }

        EQ (err, 1)

        var a = {}
        EQ (a, a)
      })
    })

    describe('> when not equal', function() {
      it('should throw an exception', function() {
        var err = 0
        try { EQ (1, 2) } catch(e) { err += 1}
        try { EQ (1, '1') } catch(e) { err += 1}
        try { EQ (true, 'true') } catch(e) { err += 1}
        try { EQ (true, 0) } catch(e) { err += 1}
        try { EQ (NaN, NaN) } catch(e) { err += 1}
        try { EQ ([], []) } catch(e) { err += 1}
        try { EQ ({}, {}) } catch(e) { err += 1}

        EQ (err, 7)
      })
    })
  })

  describe('+ NEQ()', function() {
    describe('> when not equal', function() {
      it('should not throw an exception', function() {
        NEQ (1, 2)
        NEQ (1, '1')
        NEQ (true, 0)
        NEQ (null, undefined)
        NEQ (NaN, NaN)
        NEQ ({}, {})
        NEQ ([], [])
      })
    })

    describe('> when equal', function() {
      it('should throw an exception', function() {
        var err = 0
        try { NEQ (1,1) } catch(e) {err += 1}
        try { NEQ ('hello','hello') } catch(e) {err += 1}
        try { NEQ (true,true) } catch(e) {err += 1}

        EQ (err, 3)
      })
    })
  })

  describe('+ APPROX()', function() {
    describe('> when within range', function() {
      it('should not throw an exception', function() {
        APPROX (100, 100.1, 0.1)
        APPROX (100, 105, 5)
        APPROX (-100, -100.1, 0.1)
        APPROX (97, 100, 5)
        APPROX (95, 100, 5)
      })
    })

    describe('> when not within range', function() {
      it('should throw an exception', function() {
        var err = 0
        try { APPROX (100, 100.2, 0.1)} catch(e) { err += 1}
        try { APPROX (50, 100, 0.1)} catch(e) { err += 1}
        try { APPROX (-100, 100.1, 0.1)} catch(e) { err += 1}
        try { APPROX (-100, -105, 2)} catch(e) { err += 1}

        if (err !== 4) throw new Error ("error count invalid")
      })
    })
  })

  describe('+ THROWS()', function() {
    it('should throw', function() {
      function methodThatThrows() {
        throw new Error('hi mom')
      }

      function methodThatDoesNotThrow() {}

      THROWS (methodThatThrows)

      var err = false
      try {
        THROWS (methodThatDoesNotThrow)
      } catch (e) {
        err = true
      }

      T (err)
    })

    it('should return an Error object when method throws', function() {
      var msg = "some error"
      var err = THROWS(function() {
        throw new Error(msg)
      })
      T (err)
      EQ (err.message, msg)
    })
  })
})



