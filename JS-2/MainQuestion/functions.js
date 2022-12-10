import schoolData from './data.js'

// Todo: List all class names in a order as [8A,8B,...]
const classNames =
    schoolData
        .map(pClass => `${pClass.grade}${pClass.group}`)
        .sort();

// !==================================================
// Todo: Make a new list and add an email account to the list (lastname.firstname@hicoders.ch) by using firstname, lastname of the students and with @hicoders.ch domain name.
const listWithEmail = schoolData.map(pClass => {
    pClass.students.forEach(student => student['email'] = `${student.lastname.toLowerCase()}.${student.firstname.toLowerCase()}@hicoders.ch`)

    return pClass;
})

// !=======================================================
// Todo: Create a login information for each student and add it as an object (logInfo:{username:fLastname,password:the day of the birthdate+the last_three_chars_of_the_lastname+zipCode})

const listWithLogin = schoolData.map(pClass => {
    pClass.students.forEach(student => {
        const userName = `${student.firstname[0].toLowerCase()}${student.lastname.toLowerCase()}`
        const birthday = new Date(student.bod).getDate();
        const zipCode = student.parents.address.zip
        const theLastLetters = student.lastname.slice(-3)

        const loginObj = {}
        loginObj['username'] = userName
        loginObj['password'] = `${birthday}${theLastLetters}${zipCode}`;
        student['logInfo'] = loginObj;
    })
    return pClass;
})

// !=======================================================
// Todo: Make a statistic [{className="8A",male:6,female:8,total:14},{...}]

const classMaleFemale = schoolData.map(pClass => {
    let female = 0;
    let male = 0;
    pClass.students.forEach(student => {
        if (student.gender === 'Female') {
            female++;
        } else {
            male++;
        }
    })
    return { ...{}, 'className': `${pClass.grade}${pClass.group}`, 'female': female, 'male': male, 'total': pClass.students.length };
})

// !=======================================================

export { classNames, listWithEmail, listWithLogin, classMaleFemale };

