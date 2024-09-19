const sendMessage = async (apiKey, number, text, endPoint) => {

    const myHeaders = new Headers();
    myHeaders.append("apiKey", apiKey);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "number": number,
        "text": text
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(endPoint, requestOptions)
        .then((response) => response.json())
        .then((result) => result)
        .catch((error) => console.error(error));

};

module.exports = {
    sendMessage
}