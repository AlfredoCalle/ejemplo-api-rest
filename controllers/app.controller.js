export function getNombreAPI(req, res) {
    const titulo = "GitHub Alfredo Calle";
    const mensaje = 'Ejemplo Básico API REST';
    res.render('app', { titulo: titulo, mensaje: mensaje});
}