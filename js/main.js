const collapsibles = document.querySelectorAll(".collapsible");
const nav__toggler = document.getElementById("#nav__toggler");


let openedPanel = null;

function switchOpen() {
    if (openedPanel) openedPanel.classList.remove('collapsible--expanded');
    this.classList.add('collapsible--expanded');
    openedPanel = this;
}

function toggleOpen() {
    this.classList.toggle('collapsible--expanded');
}


collapsibles.forEach(collapsible => collapsible.addEventListener('click', toggleOpen));

nav__toggler?.addEventListener('click', (event) => {
    let target_closet = event.target.closest(".collapsible");
    target_closet.classList.toggle('collapsible--expanded')
});
const themeSwitcher = document.getElementById("theme-switcher");

//
function switchDark() {
    themeSwitcher.checked = true;
    document.documentElement.dataset.colorScheme = "dark";
    localStorage.setItem("mode", "dark");
}

function switchLight() {
    themeSwitcher.checked = false;
    document.documentElement.dataset.colorScheme = "light";
    localStorage.setItem("mode", "light");
}

document.addEventListener('DOMContentLoaded', function () {
    const mode = localStorage.getItem("mode");
    console.log('mode', mode);
    mode === "dark" ? switchDark() : switchLight()
})


themeSwitcher?.addEventListener('click', (event) => {
    const dark = event.target.checked;
    dark ? switchDark() : switchLight()
})

