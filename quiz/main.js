alert('Welcome to Quiz Ninja!');

const quiz = 
[
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0;

for( const [question, answer] of quiz)
{
    const response = prompt(question);
    if(response === answer)
    {
        alert('Correct!');
        score++;
    }
    else
    {
        //had to study using backticks and ${var}- pretty cool stuff. 
        alert(`Wrong- the coorect answer is ${answer}`);
    }
}

alert(`Game Over man, Game Over, you sored ${score} points:`);