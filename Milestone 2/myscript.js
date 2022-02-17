let app = new Vue ({
    el : '#app',
    data : {
        dischiArray : [],
    },
    created(){
        this.getElenco()
    },
    methods : {
        getElenco(){
            axios
                .get('http://localhost:8888/php-ajax-dischi/Milestone%202/database.php')
                .then( (risposta) => {
                    this.dischiArray = risposta.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
});