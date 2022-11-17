const fetch = require('node-fetch')
const SplitFactory = require('@splitsoftware/splitio').SplitFactory;


exports.handler = async function () {
    // User sid is for eflannery@twilio.com
    const USER_SID = ''
    const SEGMENT_API = ''

    const headers = new fetch.Headers();
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
        let response = client.getTreatment(USER_SID, "");

    });
    const t = client.getTreatment(USER_SID, "")

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}