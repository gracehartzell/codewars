describe("Basic Tests", function(){
  it("It should work for basic tests.", function(){
  
  Test.assertEquals(primeString("abac"),true)
  
  Test.assertEquals(primeString("abab"),false)
  
  Test.assertEquals(primeString("aaaa"),false)
  
  Test.assertEquals(primeString("x"),true)
  
  Test.assertEquals(primeString("abc"),true)
  
  Test.assertEquals(primeString("fdsyffdsyffdsyffdsyffdsyf"),false)
  
  Test.assertEquals(primeString("utdutdtdutd"),true)
  
  Test.assertEquals(primeString("abba"),true)
  
  })})