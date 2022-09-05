<template>

    <form id="checkout-container" action="/">
        <p v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        </p>
        <input class="checkout-input" type="text" name="name" id="name" placeholder="Nome Completo" v-model="this.name">
        <div class="double-section">
            <input class="checkout-input" type="number" id="cpf" name="cpf" placeholder="CPF" v-model.number="this.cpf">
            <input class="checkout-input" type="number" id="phone" name="phone" placeholder="Celular"
                v-model.number="this.phone">
        </div>
        <input class="checkout-input" type="email" id="email" name="email" placeholder="E-mail" v-model="this.email">
        <div class="double-section">
            <input class="checkout-input" type="number" id="cep" name="cep" placeholder="CEP" v-model.number="this.cep">
            <input class="checkout-input" type="text" id="end" name="end" placeholder="Endereço" v-model="this.end">
        </div>
        <div class="double-section">
            <input class="checkout-input" type="text" id="city" name="city" placeholder="Cidade" v-model="this.city">
            <input class="checkout-input" type="text" id="state" name="state" placeholder="Estado" v-model="this.state">
        </div>
        <input type="button" v-bind:onclick="()=>checkForm()" class="submit-form" value="Finalizar a compra" />
    </form>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
export default {
    name: 'CheckoutForm',
    data() {
        return {
            errors: [],
            name: "",
            cpf: "",
            phone: "",
            email: "",
            cep: "",
            end: "",
            city: "",
            state: ""
        }
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        return{
            store,
            router
        }
    },

    methods: {
        checkForm: function () {
           
            this.errors = []
            if (this.name.length < 4) {
                this.errors.push("Insira o nome completo")
            }
            if (this.cpf.length < 11) {
                this.errors.push("CPF incorreto")
            }
            if (this.phone.length < 9) {
                this.errors.push("Telefone incorreto")
            }
            if (this.email.indexOf('@') === -1 || this.email.indexOf('.com') === -1) {
                this.errors.push("Insira e-mail válido")
            }
            if (this.cep.length < 8) {
                this.errors.push("CEP incorreto")
            }
            if (this.end.length < 5) {
                this.errors.push("Endereço incorreto")
            }
            if (this.city.length < 2) {
                this.errors.push("Cidade incorreto")
            }
            if (this.state.length < 2) {
                this.errors.push("Estado incorreto")
            }
            if (!this.errors.length) {
                this.store.commit('clearCarts')
                this.router.push('/finalizer/')
            } else {
               
                return false
            }

        }
    }


}
</script>

<style>
#checkout-container {
    width: 500px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}



.wrapper-form {
    display: flex;
    flex-direction: column;
}

.checkout-input {
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    outline: none;
    margin-bottom: 10px;

}

.double-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.double-section input {

    align-items: baseline;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;
}

.checkout-input::placeholder {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.3);
}

.submit-form {

    width: 60%;
    height: 50px;
    background-color: #000;
    color: #FFF;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    border: 2px solid #000;
    transition: .5s cubic-bezier(0.55, 0.025, 0.675, 0.97);
    border-radius: 10px;
    cursor: pointer;
}

.submit-form:hover {

    background-color: #414141;
    border: 3px solid #000000;
}

@media(max-width: 1050px) {
    #checkout-container {
      
    height: 400px;
    
    justify-content: flex-start;
   
    }
}
</style>