const {response, request} = require('express')


const usuariosGet = (req = request, res = response) => {
    const {q, nombre = 'noname', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res) => {
    // const body = req.body;
    // Tambien se puede hacer desestructurando, pero es mejor usando body para incluir todo:
    const { nombre, edad} = req.body;
    res.json({
        msg: 'post API - controlador',
        // body
        nombre, 
        edad
    });
}


const usuariosPut = (req, res) => {
    const id = req.params.id;

    res.json({
      msg: 'put API - controlador',
      id
  });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}