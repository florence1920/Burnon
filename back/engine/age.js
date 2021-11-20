//나이 판별
function ageCategory(user_age){
    if(user_age <= 13){
    console.log('13세 이하입니다');
    }else if(user_age >= 14 && user_age <= 16){
        console.log('중학생입니다.');
    }else if(user_age >= 17 && user_age <= 19){
        console.log('고등학생입니다.');
    }else if(user_age >= 20 && user_age <= 29){
        console.log('20~29살 입니다.');
    }else if(user_age >= 30 && user_age <= 39){
        console.log('30~39살 입니다.');
    }else if(user_age >= 40){
        console.log('노인입니다');
    }
}


function ageCategory(job){
    job.lifecycle.forEach(i => {
        if(i.min < user.age <= i.max) {
            console.log(i.ment);
        }
    });
}

export { ageCategory }