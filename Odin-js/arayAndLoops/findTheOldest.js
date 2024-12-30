const person = [

]

const findTheOldests = function(array){

}

const students = [
    { first: "Nitish", last: "Verma", passed: 2076,    Dob: 2005 },
    { first: "Abhimanyu", last: "Mahto", passed: 2078, Dob: 2003 },
    { first: "Piyush", last: "Sharma", passed: 2080,   Dob: 2005 },
    { first: "Pankaj", last: "Verma", passed: 2079,    Dob: 2004 },
    { first: "Priya", last: "Verma", passed: 2095,     Dob: 2011 },
    { first: "Nikhil", last: "Verma", passed: 2085,    Dob: 2005 },
    { first: "Prince", last: "Mahto", passed: 2097,    Dob: 2003 },
    { first: "Deepak", last: "Sharma", passed: 2084,   Dob: 2004 },
    { first: "Pintu", last: "Verma", passed: 2092,     Dob: 2004 },
    { first: "Supriya", last: "Verma", passed: 2099,   Dob: 2011 }
];

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.Dob, oldest.passed);
      const currentAge = getAge(
        currentPerson.Dob,
        currentPerson.passed
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  console.log(findTheOldests(students));