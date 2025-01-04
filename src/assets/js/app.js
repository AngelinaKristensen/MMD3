let baseurl = "https://0x.mohafh.dk/wp-json/wp/v2/posts/";

export function getPost(id){
    return fetch(baseurl+`${id}`)
    .then(res=>res.json())
    .then(data=> data)
    .catch(err=> console.log(err))
}

export function getQueryParameter(){
    let hash = window.location.hash;
    let queryString = hash.split("?")[1];
    let params = new URLSearchParams(queryString);
    return params.get('id');
}