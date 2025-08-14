const questions = [
    {
        question: "Which company developed JavaScript?",
        answer: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
            { text: "Sun Microsystems", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript single line?",
        answer: [
            { text: "//", correct: true },
            { text: "/* */", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "#", correct: false }
        ]
    },
    {
        question: "Which method is used to print something in the console?",
        answer: [
            { text: "console.print()", correct: false },
            { text: "console.write()", correct: false },
            { text: "console.log()", correct: true },
            { text: "print.console()", correct: false }
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answer: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which operator is used for strict equality?",
        answer: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "=", correct: false },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "What is the output of: typeof null?",
        answer: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "string", correct: false }
        ]
    },
    {
        question: "Which method converts JSON data to a JavaScript object?",
        answer: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.toObject()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "Which keyword is used to define a constant variable?",
        answer: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "constant", correct: false },
            { text: "const", correct: true }
        ]
    },
    {
        question: "What does DOM stand for?",
        answer: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Document Oriented Method", correct: false },
            { text: "Digital Object Management", correct: false }
        ]
    },
    {
        question: "Which function is used to delay execution of code?",
        answer: [
            { text: "delay()", correct: false },
            { text: "setTimeout()", correct: true },
            { text: "wait()", correct: false },
            { text: "pause()", correct: false }
        ]
    }
];

let timeLeft=10;
let countDown;
let theQuestion =document.querySelector("#question");
let options= document.querySelectorAll(".button");
let submitBtn=document.querySelector("#submit");

let currentIndex=0;
let score=0;

let beforeStart=()=>{
    currentIndex=0;
    document.querySelector("#before").style.display="";

    theQuestion.style.display="none";
    options.forEach((option)=>{
        option.style.display="none";
    })
    submitBtn.style.display="none";
    document.querySelector("#timer").style.display="none";
    clearInterval(countDown);
    document.querySelector("#startBtn").style.display="block";

};
beforeStart();


document.querySelector("#startBtn").addEventListener("click",()=>{
     console.log("Clicked");
    document.querySelector("#before").style.display="none";
    theQuestion.style.display="block";
    options.forEach((option)=>{
        option.style.display="";
    })
    submitBtn.style.display="block";
    document.querySelector("#timer").style.display="";
    startQuiz();
   
})





let startQuiz=()=>{
    currentIndex=0;
    score=0;
    displayQuestions();


};



 let startTimer=()=>{
    timeLeft=10;
    document.querySelector("#time").innerText=timeLeft;

     countDown= setInterval(()=>{
        timeLeft--;
        document.querySelector("#time").innerText=timeLeft;
        if(timeLeft==0){
            clearInterval(countDown);

            options.forEach((option)=>{
                option.disabled=true;
                // document.querySelector("#timer").style.display="none";
                document.querySelector("#submit").style.display="block";
            })
        }


        
 },1000)


 };
//  startTimer();

 


let displayQuestions=()=>{
    startTimer();
    options.forEach((option)=>{
        option.style.backgroundColor="";
        option.style.color="";
        option.disabled=false;
    });
           submitBtn.style.display="none";

    theQuestion.innerText=questions[currentIndex].question;

    options[0].innerText=questions[currentIndex].answer[0].text;
    options[0].value=questions[currentIndex].answer[0].correct;


    options[1].innerText=questions[currentIndex].answer[1].text;
    options[1].value=questions[currentIndex].answer[1].correct;

    options[2].innerText=questions[currentIndex].answer[2].text;
    options[2].value=questions[currentIndex].answer[2].correct;

    options[3].innerText=questions[currentIndex].answer[3].text;
    options[3].value=questions[currentIndex].answer[3].correct;

};
// displayQuestions();

 options.forEach((option)=>{
    option.addEventListener("click",()=>{
        if(option.value=="true"){
            score++;
           option.style.backgroundColor="#8ABA63";
           option.style.color="white";
           submitBtn.style.display="block";
              
        }else if(option.value=="false"){
           option.style.backgroundColor="#C9585C";
           option.style.color="white";


           console.log((option.value));
           submitBtn.style.display="block";


        }
        clearInterval(countDown);
      
        options.forEach((option)=>{
            option.disabled=true;
        })
        
    })
 });
 let disableButtons=()=>{
    options.forEach((opt)=>{
        opt.style.userSelect="none";
    })
}

 submitBtn.addEventListener("click",()=>{
    if(currentIndex==9){
        options.forEach((opt)=>{
        opt.style.display="None";
        submitBtn.style.display="none";

        document.querySelector("#question").innerText=`Your score is ${score} out of 10`;
        document.querySelector("#timer").style.display="none";
        currentIndex==0;
    
        

    })
    }

    else{
        // startTimer();
        currentIndex++;
        displayQuestions();

    }
    
    

 })

 


