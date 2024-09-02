const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: '34 Vue API',
            email: ''
        };
    },
    created() {
        console.log('PRIMA DELLE CHIAMATE API');
        
        for (let i = 0; i < 5; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    // console.log('La Promise ha ottenuto un risultato');
                    // console.log('Intero oggetto risposta:', resp);
                    // console.log('Risposta dell\'API:', resp.data);
                    console.log('Dato email della risposta API ' + i + ':', resp.data.response);

                    this.email = resp.data.response;
                });
        }

        console.log('DOPO LE CHIAMATE API');
    }
}).mount('#app');