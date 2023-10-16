console.log('hello');
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height))
    {
        results.innerHTML = 'Please provide valid details';
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        results.innerHTML = 'Please provide valid details';
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            const measurement = 'Under weight';
            results.innerHTML = `<span>${bmi}</span> You are ${measurement}`;
        }
        else if(bmi>=18.6 && bmi<24.9){
            const measurement = 'Normal weight';
            results.innerHTML = `<span>${bmi}</span> You are ${measurement}`;
        }
        else if(bmi>=24.9){
            const measurement = 'over weight';
            results.innerHTML = `<span>${bmi}</span> You are ${measurement}`;
        }
        

    }
})