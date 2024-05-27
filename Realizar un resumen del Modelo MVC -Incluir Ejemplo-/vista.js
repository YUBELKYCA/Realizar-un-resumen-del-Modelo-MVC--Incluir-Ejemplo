// Vista
const blogView = {
    displayPosts: function (posts) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            const dateElement = document.createElement('small');
            dateElement.textContent = `Publicado el ${post.date}`;

            postDiv.appendChild(titleElement);
            postDiv.appendChild(contentElement);
            postDiv.appendChild(dateElement);

            contentDiv.appendChild(postDiv);
        });
    }
};
