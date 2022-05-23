const notifyAppearanceCheck = () => {
    let getAppearance = localStorage.getItem('appearance');
    if (getAppearance == 'dark') {
      document.querySelectorAll('.message').forEach(msg => {
          msg.style = "filter: invert()";
      });
    } else if (getAppearance == 'light') {
        document.querySelectorAll('.message').forEach(msg => {
            msg.style = "filter: invert() invert()";
        });
    }
}

const notifyCheckLength = () => {
    const listLength = document.querySelector('.notify-list').children.length;
    if (listLength > 0) {
        document.title = `(${listLength}) Twilight Store | Notifications`;
    } else if (listLength == false) {
        document.querySelector('.notify-list').innerHTML = 'No notifications arrived, all cleared!';
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
                msgBody.innerHTML = `<strong>Duration:</strong> ${notification.body}`;
                heading.textContent = notification.title;
                const dateEl = document.createElement('p');
                const date = new Date();
                const dateTxt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                dateEl.innerHTML = `<strong>Date added:</strong> ${dateTxt}`
                container.append(heading);
                container.append(msgBody);
                container.append(dateEl);
                el.append(container);
                el.innerHTML += '<i title="Delete" class="fas fa-trash"></i>';
                notifyList.append(el);
            });
            document.querySelectorAll('.fa-trash').forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    notifyCheckLength();
                });
                
            });
            notifyCheckLength();
            notifyAppearanceCheck();
        });
    });
}
getNotifications();