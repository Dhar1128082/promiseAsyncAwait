

// <!--Ques1: Write one example explaining how you can write a callback function ? -->

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);



// Ques 2: "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"




const num = () => {
    console.log("Print all the numbers");
    setTimeout(() => {
        console.log(1)

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {

                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 1000);

                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);
}


num();





//   Ques3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let promFun = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

for (let num = 1; num <= 7; num++)
    promFun(num * 1000).then();

promFun(1000).then(() => console.log(1));
promFun(2000).then(() => console.log(2));
promFun(3000).then(() => console.log(3));
promFun(4000).then(() => console.log(4));
promFun(5000).then(() => console.log(5));
promFun(6000).then(() => console.log(6));
promFun(7000).then(() => console.log(7));


// Ques4: Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const getId = new Promise((resolve, reject) => {
	setTimeout(() => {
		let id = [1, 2, 3, 4, 5];
		resolve(id);
		reject('Error in fetching the details'); 
	}, 2000); // wait for 2 seconds
});

const getEmpDetails = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(data) => {
				let empDetails = {
					fName: 'Ravi',
					lName: 'Patel',
					age: 24,
				};
				resolve(
					`The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
				);
			},
			2000,
			data
		);
	});
};



getId
	.then((id) => {
		console.log('The id is', id);
		getEmpDetails(id[2]) // calling the function getEmpDetails(id[2])
			.then((data) => {
				console.log('the data is', data);
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	})
    .finally(()=>{
    console.log("End of promise chaining");
})



// Ques: 5 Create examples to explain callback hell function

setTimeout(()=>
{
    let empDetails={
        fName:"harsh",
        lName:"yadav",
        age:25,
    };
    console.log(` The name of the Employee id is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}  `);

    setTimeout(()=>
    {
        empDetails.gender="male",
        console.log(` The name of the Employee id is ${empDetails.fName} ${empDetails.lName}   age and gender  is ${empDetails.age} ${empDetails.gender}  `);
    },2000)
},2000)



//Ques6: Create examples to explain promises function


const getId1=new Promise ((resolve,reject))
{
    setTimeout(()=>{
        let id=[1,2,3,4,5];
        resolve(id);
        reject("Error in fetching the Details");
    },2000)
}


getId1
    .then((data)=>{
        console.log("the data resolve id", data);
    })

    .catch((error)
    {
        console.log(error);
    });

    // .finally (()=>
    // {
    //     console.log("End of Promise");
    // })



    //Ques7 Create examples to explain async await function


    const functionOne = () => {
        return "I am function One";
    }
    
    const functionTwo = () => {
        return new Promise((res,rej)=>{
            setTimeout(() => {
                res("I am function Two");
            }, 3000);
        })
    }
    
    const functionThree = () => {
        return "I am function Three";
    }
    
    const callAllFunctions = async () => {
        let responseOne = functionOne();
        console.log(responseOne);
    
        
        let responseTwo = await functionTwo();
        console.log(responseTwo);
    
        let responseThree = functionThree();
        console.log(responseThree);
    }
    
    callAllFunctions();

    


//Ques 8 Create examples to explain promise.all function


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
