import { domainPath } from "./Config";

const DeleteAPI = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/` + id, {method: 'DELETE'})
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default DeleteAPI;