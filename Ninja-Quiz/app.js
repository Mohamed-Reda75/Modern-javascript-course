const correctAnswers = ['A','A','B','B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    let result = document.querySelector('.result');

    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer , index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scroll(0,0);
    result.classList.remove('d-none');
    result.querySelector('span').textContent = `${score}%`;
    //console.log(score);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${score}%`;
        if (output === score) {
            clearInterval(timer); 
        } else {
            output++;
        }
    }, 10);


});