export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const ageCalculator = (birthdate) => {
    var today = new Date();
    var year = new Date(birthdate);
    var age = today.getFullYear() - year.getFullYear();
    var m = today.getMonth() - year.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < year.getDate())) {
        age--;
    }
    return age;
}