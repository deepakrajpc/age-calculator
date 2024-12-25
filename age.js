const BtnEl = document.getElementById("Btn");
const BirthdayEl = document.getElementById("birthdate");
const resultEl = document.getElementById("result");

function CalculateAge(){
    const birthdayValue = BirthdayEl.value;
    if (birthdayValue === ""){
        alert("Plese Enter Valid Date")
    }else{
        const age = getAge(birthdayValue); 
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "year": "years"} old`;
    }

}

function getAge(birthdayValue){
    const currentdate = new Date();
    const birthdate = new Date(birthdayValue);
    const age = currentdate.getFullYear() - birthdate.getFullYear();
    
    const month = currentdate.getMonth() -birthdate.getMonth();
    if (
        month < 0 ||
        (month === 0 && currentdate.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      return age;

      console.log(age)
};



BtnEl.addEventListener("click",CalculateAge);
