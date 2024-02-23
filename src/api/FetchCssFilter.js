import axios from 'axios';

const myURL = 'http://localhost:4000';


// GET:
const getCssFilter = (setFilter) => {
    axios.get(`${myURL}/getFilter`)
    .then(({data}) => {console.log(data)
        setFilter(data)
    })
}

export { getCssFilter };