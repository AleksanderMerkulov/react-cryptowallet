// https://coinstatsopenapi.readme.io/reference/coincontroller_coinlist

const token = 'ZsO/krEZVo4MXLb4R/mPgqkdz7T1cG2QI311eEu218s='

async function getCoinsInfo() {
    // let response = await fetch('https://openapiv1.coinstats.app/coins?currency=USD', {headers: {'X-API-KEY': token}})
    let response = await fetch('/d1.json', {headers: {'X-API-KEY': token}})
    if(response.ok)
    {
        return await response.json()
    }
    else
    {
        return new Error(`Ошибка получения данных:${ response.status}`)
    }
}

export {getCoinsInfo}