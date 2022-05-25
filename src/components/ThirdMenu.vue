<template>
    <v-container class="font-text">
        <h3>Smoothies</h3>
        <v-row>
            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu3/blue.jpeg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Blueberry Smoothies</v-card-title>
            <v-card-text class="text--primary">
                <div>Consisting of a mixture of blueberries and fresh milk. Very fresh!</div>
                <div class="prices"><h3>Price : 25K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu3/pink.jpeg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Strawberry Smoothies</v-card-title>
            <v-card-text class="text--primary">
                <div>Consisting of a mixture of strawberries and fresh milk. Very fresh!</div>
                <div class="prices"><h3>Price : 25K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>    

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu3/green.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Vegie Smoothies</v-card-title>
            <v-card-text class="text--primary">
                <div>Consisting of a mixture of vegies and fresh milk. Very fresh!</div>
                <div class="prices"><h3>Price : 20K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu3/yellow.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Mango Smoothies</v-card-title>
            <v-card-text class="text--primary">
                <div>Consisting of a mixture of mangoes and fresh milk. Very fresh!</div>
                <div class="prices"><h3>Price : 20K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default{
        name: "FirstMenu"
    }
</script>

<style scoped>
    h1{
        margin-top: 50PX;
        text-align: center;
    }
    div.prices{
        margin-top: 15px;
    }
    .font-text{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>