export function getNombreAPI(req, res) {
    const titulo = "Git Alfredo Calle";
    const mensaje = 'Ejemplo API REST';
    res.render('app', { titulo: titulo, mensaje: mensaje});
}