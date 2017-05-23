var square = x => x * x;
//can leave off parathensis from (x) if only one argument is being used

console.log(square(9));

var user = {
  name: 'Jay',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); //this keyword does not get bound when using arrow functions
  }, //when using methods in object literals, use below syntax
  sayHiAlternative () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

//user.sayHi(1, 2, 3);
user.sayHiAlternative(1, 2, 3);
