document.getElementById("save").addEventListener("click", () => {
    const config = {
        routerIp: document.getElementById("routerIp").value,
        port: document.getElementById("port").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        listName: document.getElementById("listName").value,
        comment: document.getElementById("comment").value
    };

    chrome.storage.sync.set(config, () => {
        alert("Сохранено!");
    });
});

window.onload = () => {
    chrome.storage.sync.get(null, (items) => {
        for (let key in items) {
            if (document.getElementById(key)) {
                document.getElementById(key).value = items[key];
            }
        }
    });
};