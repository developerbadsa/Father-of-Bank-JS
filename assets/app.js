// capture all DOM element
//     const email = document.getElementById('email').value;
//     const passWord = document.getElementById('passWord').value; 


// // login section
// document.getElementById('loginSubmit').addEventListener('click', function(){
//     if(!email){
//         alert('Please provide Email for access')
//     }
//     else if(!passWord){
//         alert('Please provide password for access');
//     }else if(email === 'sontan@gmail.com' && passWord === '1234'){
//         window.location.href = 'dashboard.html'
//     }
// })


// dashboard section

// capture all DOM element


const withdraw = document.getElementById('withdraw').value;
const withdrawOutput = document.getElementById('withdrawOutput').value;



document.getElementById('depositeSubmit').addEventListener('click', function(){

    let deposite = document.getElementById('deposite');
    const depositOutput = document.getElementById('depositOutput');
    let BalanceOutput = document.getElementById('BalanceOutput');
    const depositeAmount = Number(depositOutput.innerText) + Number(deposite.value);
    depositOutput.innerText = depositeAmount;
    deposite.value = '';
    BalanceOutput.innerText = Number(BalanceOutput.innerText) + Number(deposite.value);

})


// withdrawSubmit