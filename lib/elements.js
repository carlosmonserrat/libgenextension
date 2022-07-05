//mock api, soon we will have a great backend tracking status
const proxies = [
    {id: "default-recommended", name: "pb.proxybay.ca (suggested free from ads!)", url: "https://pb.proxybay.ca"},
    {id: "piratebayproxy-shop", name: "piratebayproxy.shop", url: "https://piratebayproxy.shop"},
    {id: "pirateproxy-surf", name: "pirateproxy.surf", url: "https://pirateproxy.surf"},
    {id: "PirateProxy-ink", name: "PirateProxy.ink", url: "https://PirateProxy.ink"},
    {id: "OpenPirate-org", name: "OpenPirate.org", url: "https://OpenPirate.org"},
    {id: "piratebayproxy-xyz", name: "piratebayproxy.xyz", url: "https://piratebayproxy.xyz"},
    {id: "OpenPirate-cc", name: "OpenPirate.cc", url: "https://OpenPirate.cc"},
    {id: "piratebayproxy-autos", name: "piratebayproxy.autos", url: "https://piratebayproxy.autos"},
    {id: "PirateProxy-world", name: "PirateProxy.world", url: "https://PirateProxy.world"},
    {id: "piratebayproxy-sbs", name: "piratebayproxy.sbs", url: "https://piratebayproxy.sbs"},
    {id: "thepiratebays-shop", name: "thepiratebays.shop", url: "https://thepiratebays.shop"},
    {id: "thepiratebays-xyz", name: "thepiratebays.xyz", url: "https://thepiratebays.xyz"},
    {id: "thepiratebays-best", name: "thepiratebays.best", url: "https://thepiratebays.best"},
    {id: "thepiratebays-sbs", name: "thepiratebays.sbs", url: "https://thepiratebays.sbs"},
    {id: "thepiratebays-club", name: "thepiratebays.club", url: "https://thepiratebays.club"},
    {id: "thepiratebays-buzz", name: "thepiratebays.buzz", url: "https://thepiratebays.buzz"},
    {id: "thepiratebays-pro", name: "thepiratebays.pro", url: "https://thepiratebays.pro"},
    {id: "piratebayproxy-pro", name: "piratebayproxy.pro", url: "https://piratebayproxy.pro"},
    {id: "piratebayproxy-email", name: "piratebayproxy.email", url: "https://piratebayproxy.email"},
    {id: "thepiratebays-digital", name: "thepiratebays.digital", url: "https://thepiratebays.digital"},
    {id: "thepiratebay0-cyou", name: "thepiratebay0.cyou", url: "https://thepiratebay0.cyou"},
    {id: "thepiratebays-solutions", name: "thepiratebays.solutions", url: "https://thepiratebays.solutions"},
    {id: "thepiratebays-consulting", name: "thepiratebays.consulting", url: "https://thepiratebays.consulting"},
    {id: "thepiratebays-design", name: "thepiratebays.design", url: "https://thepiratebays.design"},
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