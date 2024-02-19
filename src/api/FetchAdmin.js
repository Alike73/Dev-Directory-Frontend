import axios from 'axios';

const myURL = 'http://localhost:4000';


// GET:
const getMeAdmin = (setIsAdmin) => {
    axios.get(`${myURL}/getAdmin`)
    .then(({data}) => {console.log(data)
        setIsAdmin(data)
    })
}

export { getMeAdmin };