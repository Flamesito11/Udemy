//Metodos de propiedades de un objeto
const reproductor = {
    reproducir: function(ID) {
        console.log(`Reproduciendo con el ID: ${ID}`);
    },
    pausar: function() {
        console.log('Pausando la cancion');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.Borrar = function(ID) {
    console.log(`Borrando la cancion con el ID: ${ID}`);
}

reproductor.reproducir(3211);
reproductor.pausar();
reproductor.Borrar(1234);
reproductor.crearPlaylist("Mis Favoritas");
reproductor.reproducirPlaylist("Mis Favoritas");