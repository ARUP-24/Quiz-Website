// Questions will be asked
const Questions = [{
        id: 0,
        q: "Who was the first president of India?",
        a: [{ text: "Sarvepalli Radhakrishnan", isCorrect: false },
            { text: "Zakir Husain", isCorrect: false },
            { text: "Rajendra Prasad", isCorrect: true },
            { text: "A. P. J. Abdul Kalam", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "Who was the 2nd prime minister of India?",
        a: [{ text: "Jawaharlal Nehru", isCorrect: false, isSelected: false },
            { text: "Lal Bahadur Shastri", isCorrect: false },
            { text: "Indira Gandhi", isCorrect: false },
            { text: "Gulzarilal Nanda", isCorrect: true }
        ]

    },
    {
        id: 2,
        q: "What is the capital of India?",
        a: [{ text: "Gujarat", isCorrect: false },
            { text: "Odisha", isCorrect: false },
            { text: "Delhi", isCorrect: true },
            { text: "Tamil Nadu", isCorrect: false }
        ]

    },
    {
        id: 3,
        q: "What is the capital of Odisha?",
        a: [{ text: "Surat", isCorrect: false },
            { text: "Delhi", isCorrect: false },
            { text: "Bhubaneswar", isCorrect: true },
            { text: "Mumbai", isCorrect: false }
        ]

    },
    {
        id: 4,
        q: "Who had composed the original Ramayana?",
        a: [{ text: "Tulsi Das", isCorrect: false },
            { text: "Sant Ek Nath", isCorrect: false },
            { text: "Rishi Valmiki", isCorrect: true },
            { text: "Anhinanda", isCorrect: false }
        ]

    }

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Wrong";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }

})