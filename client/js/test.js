test = {
    1:{"question":"Какой метод Unity позволяет создавать объекты во время игры?",
    "ansA":"Функция - Instantiate();",
    "ansB":"Функция - Coroutine();",
    "ansC":"Функция - Update();",
    "ansD":"Функция - Create();", 
    "answer":"1"}, 
    2:{"question":"В какой строке правильно присвоен компонент переменной в Unity?",
    "ansA":"rb = GetComponent <Rigidbody> ();",
    "ansB":"rb = GetComponent (Rigidbody);",
    "ansC":"rb = GetComponent (Rigidbody) <>;",
    "ansD":"rb = GetComponent <Rigidbody>;", 
    "answer":"1"},
    3:{"question":"В чем отличия между Update и FixedUpate в Unity?",
    "ansA":"FixedUpdate имеет фиксированное время вызова, функция Update вызывается без фиксированного времени",
    "ansB":"Никаких отличий нет",
    "ansC":"FixedUpate вызывается лишь несколько раз за всю игру, Update постоянно",
    "ansD":"FixedUpdate работает лишь с физическими объектами, Update со всеми", 
    "answer":"1"},
    4:{"question":"Отметьте правдивую информацию про libgdx?",
    "ansA":"разработчики вынуждены создавать на LibGDX собственный инструменты для разработки, редактора карт.",
    "ansB":"можно делать игры без программирования.",
    "ansC":"подходит только для разработки 2D игр",
    "ansD":"нет трудностей с публикацией игры на iOS, так как эта платформа поддерживает Java.", 
    "answer":"1"},
    5:{"question":"Какое слово отвечает за создание константы на языке Dart?",
    "ansA":"const",
    "ansB":"constant",
    "ansC":"ver",
    "ansD":"dynamic", 
    "answer":"1"},
    6:{"question":"Какой класс отвечает за всплывающие подсказки в Android?",
    "ansA":"Toast",
    "ansB":"Message",
    "ansC":"Alert",
    "ansD":"Hint", 
    "answer":"1"},
    7:{"question":"Какое свойство растягивает элемент на всю ширину экрана в XML?",
    "ansA":"match_parent",
    "ansB":"parent_wrap",
    "ansC":"fill_parent",
    "ansD":"size_parent", 
    "answer":"1"}
}
answers = {
    1:"uncorrect",
    2:"uncorrect",
    3:"uncorrect",
    4:"uncorrect",
    5:"uncorrect",
    6:"uncorrect",
    7:"uncorrect",
    8:"uncorrect"
}
lenOfTest = 7
let questionNow = 1
let nowAnswer = 0

function putCircles(len){
    for (let i = 1; i <= len; i+= 1){
        const box = document.createElement("a");
        box.href='#'
        box.className = "button-7 w-button";
        box.id = `box${i}`
        document.getElementById("smt").appendChild(box);
    }
}

putCircles(lenOfTest)
document.getElementById("box1").className = "button-5 w-button"


function putQuestion(question, ans1, ans2, ans3, asn4, answer){
    document.getElementById("question").innerHTML = question;


    document.getElementById("answer1").innerHTML = ans1;
    document.getElementById("answer2").innerHTML = ans2;
    document.getElementById("answer3").innerHTML = ans3;
    document.getElementById("answer4").innerHTML = asn4;
}

function nextQuestion(){
    try {
        document.getElementById(`box${questionNow}`).className = "button-4 w-button"
        document.getElementById(`box${questionNow+1}`).className = "button-5 w-button"
        if (nowAnswer == test[`${questionNow}`]["answer"]){
            answers[`${questionNow}`] = "correct"
        }
        else{
            answers[`${questionNow}`] = "uncorrect"
        }
        if (questionNow != lenOfTest){
            questionNow += 1
            putQuestion(test[`${questionNow}`]["question"], test[`${questionNow}`]["ansA"], test[`${questionNow}`]["ansB"], test[`${questionNow}`]["ansC"], test[`${questionNow}`]["ansD"], test[`${questionNow}`]["answer"]);
            
        }
        else{
            console.log(answers);
            window.location.href = "http://www.w3schools.com";
        }
    } catch (error) {
        window.location.href = "http://127.0.0.1:5500/client/RoadMap.html#";
    }
    
    

}

function chooseAnswer1(){
    nowAnswer = 1
}

function chooseAnswer2(){
    nowAnswer = 2
}

function chooseAnswer3(){
    nowAnswer = 3
}

function chooseAnswer4(){
    nowAnswer = 4
}

