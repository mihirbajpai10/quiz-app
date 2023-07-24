const questions=[
    {
      'ques': 'Which is not a Vowel ? ',
        'a' : 'H',
        'b' : 'E',
        'c' : 'A',
        'd' : 'O',
        'correct' : 'a'
    },
    {
        'ques': 'When INDIA got Independence ? ',
          'a' : '1966',
          'b' : '1987',
          'c' : '1991',
          'd' : '1947',
          'correct' : 'd'
    },
    {
        'ques': 'When we celebrate Republic Day ?  ',
          'a' : '20 JAN',
          'b' : '26 JAN',
          'c' : '22 JAN ',
          'd' : '16 JAN',
          'correct' : 'b'
    },
    {
        'ques': 'Which is not a Consonant ?',
          'a' : 'k',
          'b' : 'a',
          'c' : 'J',
          'd' : 'z',
          'correct' : 'b'
    }
]
let index = 0;
let total = questions.length;
let right=0;
     wrong =0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(' .options')
const loadquestion = () => {
    if(index === total){
        return endquiz()
    }
      reset();
    const data = questions[index]
    console.log(data)
    quesbox.innerText =  `${index+1}) ${data.ques}  `;
    optionInputs[0].nextElementSibling.innerText = data.a; 
    optionInputs[1].nextElementSibling.innerText = data.b; 
    optionInputs[2].nextElementSibling.innerText = data.c; 
    optionInputs[3].nextElementSibling.innerText = data.d; 
}
const submitquiz = () =>  {
    const data = questions[index]
    const ans = getanswer()
    if (ans === data.correct){
    right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
         input.checked = false;
        }
    )
}
const endquiz = () => {
  document.getElementById("box").innerHTML = `
  <h3> Thankyou for playing the Quiz </h3>
  <h2> ${right} / ${total} are correct</h2>
  `
}
loadquestion();