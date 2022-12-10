const addApplicant = (pList, speakerName) => {
    pList.applicants.push({
        name: speakerName
    })
    return pList;
}

const addLanguage = (pList, language, helloInLanguage) => {
    pList.data.languages[language] = {
        hello: helloInLanguage
    }
    return pList;
}

const addCountry = (pList, name, capital, population) => {
    pList.data.continents.europe.countries[name] = {
        capital: capital,
        population: population
    }
}

export { addApplicant, addLanguage, addCountry };