document.querySelector('.timestamp').innerText = (new Date()).toLocaleTimeString();

document.querySelector('.ajax-html').addEventListener('click', getHtmlAjax);

    const XHR_STATE_DONE = 4;
    const HTTP_STATUS_CODE = 200;

function getHtmlAjax () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_DONE && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

//function fetchHtml() {
//    fetch('client-data.html')
//        .then( response => response.text() )
//        .then(html => document.querySelector('.html-container').innerHTML = html);
//}

async function fetchHtml() {
    const response = await fetch('client-data.html');
    const html = await response.text();
    document.querySelector('.html-container').innerHTML = html;
}

//JSON

document.querySelector('.ajax-json').addEventListener('click', getAjaxJson);

function getAjaxJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_DONE && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.balance;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

document.querySelector('.fetch-json').addEventListener('click', fetchJson);

function fetchJson() {
    fetch('client-data.json')
    .then( response => response.json() )
    .then( clientData => {
        document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.balance;
    });
}