// Modelo
const blogModel = {
    posts: [],
    addPost: function (title, content) {
        const post = {
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
        };
        this.posts.push(post);
    },
    getPosts: function () {
        return this.posts;
    }
};
