let catUrl = 'https://catfact.ninja/fact'
let activityUrl = 'https://www.boredapi.com/api/activity'
let catFact = document.querySelector('#catFact')
let btnCat = document.querySelector('#btnCat')
let btnActivity = document.querySelector('#btnactivity')

// cats
async function getFacts() {
    try{
        let res = await axios.get(catUrl)
        return res.data.fact
    }catch (e){
        console.log('error :', e);
    }
}
btnCat.addEventListener('click', async () => {
    let fact  = await getFacts()
    catFact.innerText = fact
})

// activity

async function getActivity() {
    try {
        let res = axios.get(activityUrl)
        return res
    }catch(e){
        console.log('This is error :- ', e);
    }
}

btnActivity.addEventListener('click', async () => {
    let activity = await getActivity()
    let p = document.querySelector('#activity')
    p.innerText = activity.data.activity
})

// predict gender

let genderUrl = 'https://api.genderize.io/?name='
async function genderFinder(name) {
    try{
        let res = await axios.get(genderUrl+name)
        return res
    }catch(e){
        let pGender = document.querySelector('#gender')
        pGender.innerText = 'Sorry request limit reached' 
    }
}

let btnGender = document.querySelector('#btnGender')
let inputName = document.querySelector('#genderFinder')
inputName.addEventListener('change', (e) => {
    let name = e.target.value
        btnGender.addEventListener('click', async () => {
            let gender = await genderFinder(name)
            let pName = document.querySelector('#name')
            let pGender = document.querySelector('#gender')
            pName.innerText = 'Name :- ' + name
            pGender.innerText = 'Gender :- ' +  gender.data.gender
            inputName.value = ''
        })
})

// 
