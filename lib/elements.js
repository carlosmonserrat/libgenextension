//mock api, soon we will have a great backend tracking status
const proxies = [
    {id: "default-recommended", name: "libgen.is (suggested free from ads!)", url: "https://libgen.is"},
    {id:"libgen-li", name:"libgen.li", url:"https://libgen.li"},
    {id:"libgen-st", name:"libgen.st", url:"http://libgen.st"},
    {id:"libgen-gs", name:"libgen.gs", url:"http://libgen.gs"},
    {id: "custom", name: "custom", url: "custom"}
]

//interface
const loadProxies = () => {
    const proxyMenu = document.getElementById("chooseProxy");

    proxies.forEach(proxy => {
        const newDiv = document.createElement("div")
        newDiv.classList.add("form-check")
        newDiv.classList.add("mt-3")

        //Radio buttons
        const newRadioButton = document.createElement("input")
        newRadioButton.classList.add("form-check-input")
        newRadioButton.setAttribute("type", "radio")
        newRadioButton.setAttribute("id", "radio" + proxy.id)
        newRadioButton.setAttribute("name", "flexRadioDefault")

        //Labels config
        const label = document.createElement("label")
        label.setAttribute("for", `radio${proxy.id}`)
        label.classList.add("form-check-label")
        label.innerText = proxy.name

        //Custom Input values
        const customInput = document.createElement("input")
        customInput.setAttribute("id", "customSearchInput")
        customInput.setAttribute("type", "search")
        customInput.setAttribute("placeholder", "https://my.proxy.com")
        customInput.classList.add("custom-url-input")
        customInput.classList.add("ml-1")
        customInput.classList.add("mr-sm-2")
        customInput.onclick=()=>{
            newRadioButton.checked = true;
        }

        //Rules for setting the default recommended proxy
        if (proxy.id === 'default-recommended') {
            newRadioButton.checked = true;
            window.selectedProxy = proxy
        }

        newRadioButton.onclick = () => {
            window.selectedProxy = proxy
        }

        // Construction of interface
        newDiv.append(newRadioButton)
        newDiv.append(label)
        if (proxy.id === 'custom') {
            newDiv.append(customInput)
            newDiv.classList.add("mt-3")
        }
        proxyMenu.append(newDiv)
    })
}

loadProxies();