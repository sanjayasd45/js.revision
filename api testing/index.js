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
})