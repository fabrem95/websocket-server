//Referencias HTML
const lblOnline     = document.querySelector('#userOnline')
const lblOffline    = document.querySelector('#userOffline')
const txtMsg        = document.querySelector('#txtMsg')
const btnEnviar     = document.querySelector('#btnEnviar')

const clientSocket = io();

clientSocket.on('connect', () => {

    lblOffline.style.display = 'none'
    lblOnline.style.display = 'block'
})

clientSocket.on('disconnect', () => {

    lblOnline.style.display = 'none'
    lblOffline.style.display = 'block'
})

clientSocket.on('send-msg', (payload) => {

    console.log(payload);
})

btnEnviar.addEventListener('click', () => {

    const msg = txtMsg.value;
    const payload = {
        msg,
        id: '123abc',
        fecha: new Date().getTime()
    }

    clientSocket.emit('send-msg', payload, (id) => {

        console.log('DESDE EL SERVER', id);
    })
})

