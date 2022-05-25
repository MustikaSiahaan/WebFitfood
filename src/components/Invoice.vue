<template>
   
    <v-container>
        
        <v-row justify="center">
            <v-col lg="8">
                
                <v-card class="mx-auto my-12" max-width="500" align="center">
                <h2 class="text-center">Order Invoice</h2>
                <v-img width="150" height="150"
                src="./../assets/images/contact/order.jpg" alt="">
                </v-img>
                <p>Congratulations your order is success</p>
                <div>Name : {{dataInvoice.name}}</div>
                <div>Phone : {{dataInvoice.phone}}</div>
                <div>Product : {{dataInvoice.product}}</div>
                <div>Message : {{dataInvoice.message}}</div>
            </v-card>    
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import gql from "graphql-tag";
const GET_DATA = gql(
    `
    query MyQuery($_eq: Int!){
        Order(where: {id: {_eq: $_eq}}) {
            name
            phone
            product
            message
        }
    }
    `
);

    export default{
        name: "Invoice",
        data() {
        return {
            dataInvoice: [],
        };
    },
    methods:{
        async fetchData(){
            let hasil = await this.$apollo.query(
        {
        query:GET_DATA,
        variables:{
            _eq: this.$route.params.id,
        }
        });
        this.dataInvoice = hasil.data.Order[0];
        console.log("data Invoice : ", hasil.data.Order[0]);
        }
    },
    mounted(){
        this.fetchData()
    },  
};

</script>

<style scoped>
    div{
        margin-top: 30px;
    }
</style>