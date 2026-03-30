document.getElementById("add").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    let url = new URL(tab.url);
    let domain = url.hostname;

    chrome.storage.sync.get(null, (config) => {

        chrome.runtime.sendMessage({
            type: "add",
            domain: domain,
            config: config
        }, (response) => {

            if (!response) {
                document.getElementById("status").innerText = "Нет ответа";
                return;
            }

            if (response.ok) {
                document.getElementById("status").innerText = "Добавлено!";
            } else {
                document.getElementById("status").innerText =
                    `Ошибка ${response.status || ""}: ${response.text || response.error}`;
            }
        });
    });
});