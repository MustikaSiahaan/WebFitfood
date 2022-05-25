<template>

<div>
    <v-container>
        <v-row align="center" justify="center">
            <v-col lg="4">
                <v-form>
                    <h3 align="center">Order Form</h3>
                    <v-text-field label="Name" placeholder="Your Name" v-model="name"></v-text-field>
                    <v-text-field label="Phone" placeholder="Your phone number" v-model="phone"></v-text-field>
                    <v-text-field label="Product" placeholder="Your product to order" v-model="product"></v-text-field>
                    <v-text-field label="Message" placeholder="Your message for the order" v-model="message"></v-text-field>
                    <v-btn color="success" @click="add">Order</v-btn>
                </v-form>
                
            </v-col>
        </v-row>
    </v-container>
    
</div>

</template>

<script>
import gql from "graphql-tag";
const ADD_ORDER = gql(`

mutation MyMutation($name: String!, $phone: Int = 15, $product: String!, $message: String!) {
  insert_Order(objects: {name: $name, phone: $phone, product: $product, message: $message}) {
    returning {
      id
      name
      phone
      product
      message
    }
  }
}
`);

export default{
    name: "OrderPage", 
    data() {
        return {
            name: "",
            phone: "",
            product: "",
            message: "",
        };
    },
    methods: {
    async add() {
      let hasil = await this.$apollo.mutate({
        mutation: ADD_ORDER,
        variables: {
        name : this.name ,
        phone: this.phone,
        product: this.product,
        message: this.message}
      })
      console.log("hasil : ",hasil);
      this.$router.push(`/invoice/${hasil.data.insert_Order.returning[0].id}`)
        alert("Order now?");
    },
}
};
</script>

<style scoped>
    div{
        margin-top: 20px;
   }
  
</style>