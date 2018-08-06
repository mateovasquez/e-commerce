var app = new Vue ({
    el: '#libreria',
    data: {
        books: [
            {img: 'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg', title: 'Cartas des de la isla', price: '10.99$'},
            {img: 'https://assets2.domestika.org/project-items/002/029/582/05.top-10-libros-ilustrados-big.jpg?1501412355', title: 'Abrazame los monstruos', price: '06.99$'},
            {img: 'https://www.creativosonline.org/blog/wp-content/uploads/2010/04/creativos_online_portadas_libros_inspiracion.png', title: 'Leo Tolstoy', price: '07.99$'},
            {img: 'https://i.pinimg.com/736x/ae/18/a3/ae18a3aada7e59bd7822c37b5b4702a5.jpg', title: 'Mitos Tocados', price: '08.99$'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGA5SYJ3tfqO2EGptX5pF-RJJS_aX99wM79qUSfWNhHajKJlA', title: 'La ciudad de los libros malditos', price: '11.99$'},
            {img: 'https://www.agapea.com/Alfaguara/El-libro-de-la-selva-i1n12652086.jpg', title: 'El libro de la selva', price: '05.99$'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHh2694pYWfRSp-aNPpBlqcbqvizBeog9yhHLXvnHIf4YN4UP', title: 'El alfabeto de Babel', price: '08.99$'},
            {img: 'https://i.pinimg.com/736x/f5/85/a4/f585a47ffa59097b88d65f7b411fca48--book-jacket.jpg', title: 'Mundial manifiesto', price: '07.99$'},
            {img: 'https://i.pinimg.com/236x/6c/97/08/6c97082f9ead060b2cae224ee923fb89.jpg', title: 'La cuna de la Tierra', price: '06.99$'},
            {img: 'https://i.pinimg.com/originals/7e/a3/8b/7ea38b369a200c2c3ec0bd33de9fe84a.png', title: 'El santo Grial', price: '12.99$'},
            {img: 'http://planetadelibrosmexico.com/wp-content/uploads/2014/08/portada-paris.png', title: 'Caballo de Fuego', price: '32.99$'},
            {img: 'https://static.inkive.com/assets/img/layouts/EtHjABXYMZH-gK1AYQmJ.jpg', title: 'Bigger Better Ideas', price: '13.99$'},
            {img: 'https://i.pinimg.com/originals/ca/6e/70/ca6e708aaf2370b6d80bfd121f97f464.jpg', title: 'El legado', price: '05.99$'},
            {img: 'https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2016/10/portadas-libros-siencia-ficcion-cuatro.jpg', title: 'Horror Stories', price: '08.99$'},
            {img: 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-24.jpg', title: 'The investigation', price: '58.99$'},
            {img: 'https://i.pinimg.com/originals/c4/ba/d7/c4bad7c7e41c2385c007e10f4c39d864.jpg', title: 'Solo', price: '10.99$'}
            
        ],
        items : 0
    },
    methods: {
        showImage : function (event) {
            var image = event.target.src;
            var titulo = event.target.alt;
            document.getElementById('img-modal').src = image;
            document.querySelector('.modal-title').innerText = titulo;
        },
        addCarrito : function (){
            this.items ++;
            console.log(this.items)
        }
    }
})