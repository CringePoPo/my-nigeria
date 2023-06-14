// //   Variables
//   let hoverStates = document.querySelectorAll('.news-category');
//   let dropDown = document.querySelectorAll('.dropdown-content');


//   var hoverState;
//   let singleDrop;
// //  Loops to get single instance of hover states
// for (let i = 0; i < hoverStates.length; i++) {
//      hoverState = hoverStates[i];
// }
// //  Loops to get single instance of drop down

// for (let d = 0; d< dropDown.length; d++) {
//      singleDrop = dropDown[d];
//      // Event for hover state
//      hoverState.addEventListener('mouseout' , myFunction);
     
//      // Function to add an active hover class to the class
//      function myFunction(){
//          singleDrop.classList.add('active')
//          console.log('added hover state')
//      }
// }



// v2
// Variables
let hoverStates = document.querySelectorAll('.news-category');
let dropDowns = document.querySelectorAll('.dropdown-content');

// // Loop through hover states
// for (let i in dropDowns) {
//     let hoverState = hoverStates[i];
    
//     // Event for hover state
//     var singleDrop;
//     for (let i = 0; i < dropDowns.length; i++) {
        
//         singleDrop = dropDowns[i];
//     }
//     hoverState.addEventListener('mouseout', function() {
//         singleDrop.classList.add('active');
//         console.log('added hover state');
//     });
//     console.log(singleDrop)
// }

// for (let i in dropDowns, hoverStates) {
//     let hoverState = hoverStates[i];

//     let singleDrop = dropDowns[i];
 
//     // Event for hover state
//     hoverState.addEventListener('mouseout', function() {
//         singleDrop.classList.add('active');
//         console.log('added hover state');
//     });
//     console.log(singleDrop)
// }

// let dropDowns = document.querySelectorAll('.dropdown-content');
hoverStates.forEach((num1, index) =>{
    let num2 = dropDowns[index];
    console.log(num1, num2)


    num1.addEventListener('mouseout', function() {
        num2.classList.add('active');
    })
})