<template>
    <v-container class="font-text">
        <h3>Salad</h3>
        <v-row>
            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu2/sbsusu.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Fruit Salad + Cream Milk</v-card-title>
            <v-card-text class="text--primary">
                <div>A mixture of apples, oranges, grapes, bananas and strawberries covered with milk cream</div>
                <div class="prices"><h3>Price : 35K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu2/sbyoughurt.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Fruit Salad + Youghurt</v-card-title>
            <v-card-text class="text--primary">
                <div>A mix of apples, grapes, watermelon and mayonnaise covered with yogurt. Its really fresh</div>
                <div class="prices"><h3>Price : 30K</h3></div>
            </v-card-text>
            <v-card-actions>
            <v-btn href="/order" class="white" color="green" text>Order</v-btn>
            </v-card-actions>
            </v-card>    
            </v-col>

            <v-col lg="3">
            <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px"
                src="./../assets/images/menu2/rainbowvegie.jpg" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Rainbow Vegie Salad</v-card-title>
            <v-card-text class="text--primary">
                <div>Packed with color, nutrients, crunch, and flavor!  Its naturally sweet, savory, and goes perfectly with any meal </div>
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
                src="./../assets/images/menu2/vegiesalad.png" alt=""
            >
            </v-img>
            <v-card-title class="pb-0">Marinated Vegie Salad</v-card-title>
            <v-card-text class="text--primary">
                <div>Fresh marinated veggie salad with cucumbers, tomatoes and peppers is perfect for summer get togethers </div>
                <div class="prices"><h3>Price : 25K</h3></div>
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