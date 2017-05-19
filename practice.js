//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //The 'this' keyword will bind whatever is to the left of the dot notation to the reference to 'this' in the code.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1. 'this' refers to the window object when contained in the global scope.
      //2. If a function using 'this' is called by a preceding dot, the object to the left of the dot is what 'this' refers to.
      //3. When constructor function is used, 'this' refers to the specific instance of the object created.
      //4. When 'call' or 'apply' are used, 'this' is explicitly defined.

  // 3) What is the difference between call and apply?

      //Answer
      //'call' accepts the 'this' object first and an argument (or multiple) afterward.
      //'apply' accepts the 'this' object first, and then an array, from which it will only use the first item in the array as the argument.

  // 4) What does .bind do?

      //Answer
      //'.bind' will explicitly bind the object defined to the function but will wait to call it until explicitly called.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'someUserName',
      email: 'someUserName@email.com',
      getUsername: function() {
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

  user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year
  };

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

  Car.prototype.move = 0;
  Car.prototype.moveCar = function() {
    return this.move+= 10;
  };


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  getYear.call(prius);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //Nothing

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  //Nothing


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
