var terst = require('../lib/terst')

describe('terst', function() {
  describe('+ T', function() {
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

  describe('+ F', function() {
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
})