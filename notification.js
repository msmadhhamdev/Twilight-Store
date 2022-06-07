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
        document.querySelector('.notify-list').innerHTML = '<div class="notify-callback">No notifications arrived, all cleared!</div>';
        document.title = 'Twilight Store | Notifications';
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
                msgBody.innerHTML = `<strong>Details:</strong> ${notification.body}`;
                heading.textContent = notification.title;
                const dateEl = document.createElement('p');
                const date = new Date();
                const dateTxt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                dateEl.innerHTML = `<strong>Date:</strong> ${dateTxt}`
                container.append(heading);
                container.append(msgBody);
                container.append(dateEl);
                el.append(container);
                notifyList.append(el);
            });
            notifyCheckLength();
            notifyAppearanceCheck();
        });
    });
}
getNotifications();