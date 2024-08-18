const url = 'https://7tccfb6njcdmuhj7ep3sn3x54a0gayfx.lambda-url.us-west-1.on.aws/'

const tradeWords = async (word) => {
    const response = await fetch(url + word)
    return response.json()
}

export default tradeWords
