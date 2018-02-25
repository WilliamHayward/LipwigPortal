var client;
document.getElementById('btnJoin').onclick = function() {
    const code = document.getElementById('txtCode').value;
    let location = 'ws';
    if (window.location.protocol === 'https') {
        location += 's';
    }
    location += '://' + window.location.hostname + ':8080';
    client = Lipwig.join(location, code);
    client.on('joined', joined);
}

function joined(id, name) {
    console.log(name);
    const frame = document.getElementById('content');
    frame.contentWindow.client = client;
    frame.src = 'modules/' + name + '/index.html';
    const portal = document.getElementById('portal');
    portal.style.display = 'none';
    frame.style.display = 'inline';
}