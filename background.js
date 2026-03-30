chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "add") {

        const config = request.config;

        const protocol = config.port == 443 ? "https" : "http";
        const portPart = config.port ? `:${config.port}` : "";

        const apiUrl = `${protocol}://${config.routerIp}${portPart}/rest/ip/firewall/address-list/add`;

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa(`${config.username}:${config.password}`)
            },
            body: JSON.stringify({
                address: request.domain,
                list: config.listName,
                comment: config.comment
            })
        })
        .then(res => res.text().then(text => ({ ok: res.ok, status: res.status, text })))
        .then(data => sendResponse(data))
        .catch(err => sendResponse({ ok: false, error: err.message }));

        return true; // важно для async
    }
});