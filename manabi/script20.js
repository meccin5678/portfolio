'use strict'

const tabs = document.querySelectorAll('.tabs-title p')
const tabsContents = document.querySelectorAll('.tabs-contents p')

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        document.getElementById(tab.dataset.id).classList.add('active');
        
    });
})