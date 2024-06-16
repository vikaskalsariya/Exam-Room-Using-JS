<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam room</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <section class="startPage">
            <div class="container d-flex justify-content-center align-item-center startBody">
                <button class="startButton" onclick="startExam()">start exam</button>
            </div>
        </section>
        <section class="mainBody">
            <div class="container">
                <div class="webBody flex-column justify-space-around">
                    <div class="topcontent d-flex align-item-center justify-space-between border">
                        <h3 id="queCount">1 / 5</h3>
                        <h3 id="timeCount">60s</h3>
                        <button type="button" class="nextButton">Next</button>
                    </div>
                    <div class="questinBox d-flex justify-content-center align-item-center border">
                        <p id="quetion">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate! "</p>
                    </div>
                    <div class="optionsBox options d-flex row justify-content-center justify-space-between border">
                        <div class="w-2">
                            <button class="option-1 w-1" type="button" value="1"></button>
                        </div>
                        <div class="w-2">
                            <button class="option-2 w-1" type="button" value="2"></button>
                        </div>
                        <div class="w-2">
                            <button class="option-3 w-1" type="button" value="3"></button>
                        </div>
                        <div class="w-2">
                            <button class="option-4 w-1" type="button" value="4"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <section class="resultPage">
        <div class="container">
            <div class="result d-flex align-item-center">
                <ul class="box d-flex flex-column justify-space-around ">
                    <h3>- : Result : -</h3>
                    <li>Total Marks : 5</li>
                    <li>true quetions : <span id="trueQue"></span></li>
                    <li>Falses quetions : <span id="falseQue"></span></li>
                    <li>result : <span id="cullectMark"></span></li>
                </ul>
            </div>
        </div>
    </section>
</body>

<script>
    // variable dilaration 
    var mainBody = document.querySelector('.mainBody');
    var resultPage = document.querySelector('.resultPage');
    var startBody = document.querySelector('.startBody');
    var quetion = document.getElementById('quetion');
    var prevButton = document.querySelector('.prevButton');
    var nextButton = document.querySelector('.nextButton');
    var opt1 = document.querySelector('.option-1');
    var opt2 = document.querySelector('.option-2');
    var opt3 = document.querySelector('.option-3');
    var opt4 = document.querySelector('.option-4');
    var queCount = document.getElementById("queCount");
    var timeCount = document.getElementById('timeCount');
    var optBtn = Array.from(document.querySelectorAll('.options button'));
    var que = 0;
    var queNo = 1;
    var mark = 0;
    var selectOpt = 0;
    var time = 60;
    var False = 0;
    var cullectMark = document.getElementById('cullectMark');
    var trueQue = document.getElementById('trueQue');
    var falseQue = document.getElementById('falseQue');
    var quetionArrey = [
        {
            question: "Javascript is an _______ language ?",
            optn1: "Object-Oriented",
            optn2: "Object-based",
            optn3: "Procedural",
            optn4: "None of the above",
            answerKey: 1,
        },

        {
            question: "Which of the following keywords is used to define a variable in Javascript ?",
            optn1: "Var",
            optn2: "let",
            optn3: "Both A and B",
            optn4: "None of the above",
            answerKey: 3,
        },

        {
            question: "Which of the following methods is used to access HTML elements using Javascript ?",
            optn1: "getElementById()",
            optn2: "getElementByClassName()",
            optn3: "None of the above",
            optn4: "Both A and B",
            answerKey: 4,
        },
        {
            question: "Upon encountering empty statements, what does the Javascript Interpreter do ?",
            optn1: "Ignores the statements",
            optn2: "Throws an error",
            optn3: "Gives a warning",
            optn4: "None of the above++",
            answerKey: 2,
        },
        {
            question: "How can a datatype be declared to be a constant type?",
            optn1: "Const",
            optn2: "var",
            optn3: "let",
            optn4: "constant",
            answerKey: 1,
        },
    ];

    // start exam dunction 
    function startExam() {
        // button hindden 
        mainBody.style.display = "block";
        startBody.style.display = "none";
        quetionAndanswer();
    }

    function quetionAndanswer() {
        window.countingStopt = setInterval(counting, 1000);
        // quetion and anwers 
        quetion.innerHTML = quetionArrey[que].question;
        opt1.innerHTML = quetionArrey[que].optn1;
        opt2.innerHTML = quetionArrey[que].optn2;
        opt3.innerHTML = quetionArrey[que].optn3;
        opt4.innerHTML = quetionArrey[que].optn4;

        // count timing 
        function counting() {
            setTimeout(() => {
                if (time == -1) {

                    time = 3
                    que++; //for quetion counting
                    queNo++; // for quetion counting
                    if (queNo == 5) {
                        result()
                    }
                    else {
                        if (que > quetionArrey.length - 1) {
                            result()
                        }
                        queCount.innerHTML = queNo + " / 5";
                        quetion.innerHTML = quetionArrey[que].question;
                        opt1.innerHTML = quetionArrey[que].optn1;
                        opt2.innerHTML = quetionArrey[que].optn2;
                        opt3.innerHTML = quetionArrey[que].optn3;
                        opt4.innerHTML = quetionArrey[que].optn4;
                    }
                }
                timeCount.innerHTML = time + "s";
                if (que > quetionArrey.length - 2) {
                    nextButton.innerHTML = "Submit"
                }
            }, 500);
            time--;
        }
    }
    // chek ostions true of not 
    optBtn.forEach((element) => {
        element.addEventListener('click', () => {
            selectOpt = 0;
            selectOpt = element.value;
        });
    });
    // next Button 
    nextButton.addEventListener('click', () => {
        // mark iplimentationn 
        var falseQue = mark;
        if (selectOpt == quetionArrey[que].answerKey) {
            mark = mark + 1;
        }
        else {
            selectOpt = 0;
        }
        if (falseQue == mark) {
            False++;
        }
        if (nextButton.innerHTML == "Submit") {
            result();
        };
        time = 60;
        que++; //for quetion counting
        queNo++; // for quetion counting
        queCount.innerHTML = queNo + " / 5";
        if (que > quetionArrey.length - 2) {
            nextButton.innerHTML = "Submit"
        };
        if (que != quetionArrey.length) {
            quetion.innerHTML = quetionArrey[que].question;
            opt1.innerHTML = quetionArrey[que].optn1;
            opt2.innerHTML = quetionArrey[que].optn2;
            opt3.innerHTML = quetionArrey[que].optn3;
            opt4.innerHTML = quetionArrey[que].optn4;
        }
    });

    function result() {
        clearInterval(countingStopt);
        mainBody.style.display = "none";
        resultPage.style.display = "block";
        cullectMark.innerHTML = mark;
        trueQue.innerHTML = (quetionArrey.length - False);
        falseQue.innerHTML = False;
    }
</script>

</html>
