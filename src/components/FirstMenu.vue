<template>
    <v-container class="font-text">
        <h1>MENU</h1>
        <h3>Maincourse</h3>
        <v-row>
            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu1/salmon.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Salmon + French fries</v-card-title>
            <v-card-text class="text--primary">
                <div>The salmon is huge, it's around 100gr and it's a high quality one. Very fresh! Contains 450 - 500 calories</div>
                <div class="prices"><h3>Price : 75K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu1/redrice.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Red rice + Chicken</v-card-title>
            <v-card-text class="text--primary">
                <div>The chicken is juicy, it's around 100gr and it's a high quality one. Very fresh! Contains 450 - 500 calories</div>
                <div class="prices"><h3>Price : 55K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu1/chicken.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Potato + Chicken</v-card-title>
            <v-card-text class="text--primary">
                <div>The chicken is juicy, it's around 100gr and it's a high quality one. Very fresh! Contains 450 - 500 calories</div>
                <div class="prices"><h3>Price : 55K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu1/pasta.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Pasta + Salmon</v-card-title>
            <v-card-text class="text--primary">
                <div>The salmon is huge, it's around 100gr and it's a high quality one. Very fresh! Contains 450 - 500 calories</div>
                <div class="prices"><h3>Price : 75K</h3></div>
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
        margin-top: 100PX;
        margin-bottom: 50px;
        text-align: center;
    }
    div.prices{
        margin-top: 15px;
    }
    .font-text{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
</style>