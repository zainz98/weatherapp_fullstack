const axios = require('axios').default;

/**
 * Generic method for all necessary HTTP GET requests made 
 * by this application.
 * 
 *
 * @param {String} url The URL with the get request
 * @return {Object} The body of the response as JS element
 */
async function makeGetRequest(url)
{
    try {
       const data = await axios.get(url);
       console.log(data);
       return data;

    } catch (err)
    {
        return { message: 'HTTP Request through got ' +
        'has failed.\n'+
        'URL: ' + url + "\nError Message:\n", err };
    }
} 

module.exports = {
    makeGetRequest: makeGetRequest
}