const elsTabsItem = document.querySelectorAll('.site-main-tabs__item');
const elsTabsPanel = document.querySelectorAll('.site-main-tabs__card');
const elsTabLinks = document.querySelectorAll('.js-site-main-tabs__link');
const elsFaq = document.querySelectorAll(".accordion-container__faq")
function deActivateTabItems() {
    elsTabsItem.forEach(function (elsTabsItem) {
        elsTabsItem.classList.remove('site-main-tabs__item--active')
    })
}

function deActiveTabPanels() {
    elsTabsPanel.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove('site-main-tabs__card--active')
    })

}


elsTabLinks.forEach(function (elTablink, index) {
    elTablink.addEventListener('click', function (evt) {
        evt.preventDefault()

        // Remove active styles
        deActivateTabItems();
        deActiveTabPanels();

        // Add active class to parent element of tabs link
        elTablink.parentElement.classList.add('site-main-tabs__item--active')
        elsTabsPanel[index].classList.add('site-main-tabs__card--active')
    })
})


elsFaq.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('active')
    })
})