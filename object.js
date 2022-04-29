/// This is using function  method

// let BioData = {
//     MyName: "suraj",
//     lastName: "pandit",
//     getData: function () {
//         console.log(`My name is ${BioData.MyName} and My age is${BioData.lastName}`);
//     }
// }
// // console.log(BioData.getData()); //it gives undefined without console it does not give undefined
// BioData.getData();

//  let BioData = {
//         MyName : {
//             Name:"suraj",
//         lastName: "pandit",
//         },
//         MyAge : 22,
//         getData() {
//             console.log(`My name is ${BioData.MyName} and My age is${BioData.lastName}`);
//         }
//     }
//     // console.log(BioData.getData()); //it gives undefined without console it does not give undefined
//    console.log( BioData.MyName);

   const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };