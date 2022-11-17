const fetch = require('node-fetch')
const SplitFactory = require('@splitsoftware/splitio').SplitFactory;
const EventEmitter = require("events").EventEmitter;


exports.handler = async function () {
    const SEGMENT_API = ''
    let headers = new fetch.Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from("").toString('base64'))
    const response = await fetch(SEGMENT_API, {method:'GET',
        headers: headers,})

    const data = await response.json()

    const factory = SplitFactory({
        core: {
            authorizationKey: ""
        }
    });
// And get the client instance you'll use
    const client = factory.client();
    const treatment = {treatment: ""}
    await client.on(client.Event.SDK_READY, function(treatment) {
        let response = client.getTreatment("", "");

    });
    const t = client.getTreatment("", "")

    return {
        statusCode: 200,
        body: JSON.stringify(t)
    }
}