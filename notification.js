const notifyCheckLength = () => {
    const listLength = document.querySelector('.notify-list').children.length;
    if (listLength > 0) {
        document.title = `(${listLength}) Twilight Store | Notifications`;
    }
}

const getNotifications = () => {
    const notifyRequest = fetch('/pushNotifications.json');
    notifyRequest.then(notifications => {
        const toObject = notifications.json();
        toObject.then(data => {
            data.forEach(notification => {
                const notifyList = document.querySelector('.notify-list');
                const el = document.createElement('div');
                el.setAttribute('class', 'message');
                const container = document.createElement('div');
                const heading = document.createElement('h2');
                const msgBody = document.createElement('p');
                msgBody.textContent = notification.body;
                heading.textContent = notification.title;
                container.append(heading);
                container.append(msgBody);
                el.append(container);
                el.innerHTML += '<i title="Delete" class="fas fa-trash"></i>';
                notifyList.append(el);
            });
            document.querySelectorAll('.fa-trash').forEach(btn => {
                btn.addEventListener('click', () => btn.parentElement.remove());
                notifyCheckLength();
            });
            notifyCheckLength();
        })
    })
}
getNotifications();