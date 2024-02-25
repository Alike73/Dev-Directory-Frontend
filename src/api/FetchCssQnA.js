
import axios from 'axios';

const myURL = 'http://localhost:4000';


// GET:
const getCssQnA = (setCssQnA) => {
    axios.get(`${myURL}/getQnA`)
    .then(({data}) => {console.log(data)
        setCssQnA(data)
    })
}

export { getCssQnA };