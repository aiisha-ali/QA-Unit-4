import {add} from './checkErrors'


it('it should throw an error if an empty array is provided', () => {
    // Arrange
  let emptyArr = []
    // Act
  function errCheck (emptyArr) {
    if (emptyArr.length===0) {
      let emptyArrError = 'the array is empty' 
      return emptyArrError 
  // Assert
      expect(errCheck).toThrow(emptyArrError)
    }
  }

})
  
  it(' it should throw an error if no value is passed into the sum function.', () => {
    // Arrange and Act
    let emptyValue = []
    function arr(add) {
      if (arr.length===0){
        let arrError = 'No value is passsed'
        return arrError
     

    
    // create a function that calls the add function without any arguments and assign it to a variable
  
    // Assert
    // use the expect function to assert that the function throws an error, use toThrow function
    expect(emptyValue).toThrow(arrError)
  }}})