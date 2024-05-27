// Controlador
const blogController = {
    init: function () {
        blogView.displayPosts(blogModel.getPosts());

        // Ejemplo: Agregar un nuevo post
        blogModel.addPost('Nuevo Post', 'Contenido del nuevo post.');
        blogView.displayPosts(blogModel.getPosts());
    }
};

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', blogController.init);
