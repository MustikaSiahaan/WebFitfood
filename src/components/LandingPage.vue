<template>
    <v-container>
        <v-row>
            <v-col lg="6">
                <h2 class="text-title">Let's order health food in here!</h2>
                <p class="text">
                    Healthy and nutritious food is food that contains balanced nutritional values needed by the body, such as carbohydrates, protein, fiber, vitamins and minerals, and water. This webiste help you to get all of it
                </p>
            </v-col>
            <v-col lg="6">
                <img width="100%" src="./../assets/images/landing/land3.png" alt="">
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="6">
                <img width="100%" src="./../assets/images/landing/land2.png" alt="">
            </v-col>
            <v-col lg="6">
                <h2 class="text-title">Low Calories</h2>
                <p class="text">
                    Using complex carbohydrates
                    Use complex carbohydrates such as brown rice, whole grain pasta, sweet potatoes and potatoes to maintain blood sugar and a longer feeling of fullness.
                </p>
            </v-col>
            
        </v-row>

        <v-row>
            <v-col lg="6">
                <h2 class="text-title">Low Fat</h2>
                <p class="text">
                Baked, grilled, sauteed, steamed, boiled
                Processed with the use of minimal oil and only use olive oil or soybean oil which is high in unsaturated fatty acids.
                </p>
            </v-col>
            <v-col lg="6">
                <img width="100%" src="./../assets/images/landing/landl.png" alt="">
            </v-col>
        </v-row>
        
    </v-container>

</template>

<script>
    export default{
        name: "LandingPage"
    }
</script>

<style scoped>
    h2{
        font-size: 50px;
        font-weight: bold;
        font-family: cursive;
        margin-top: 100px;
        margin-bottom: 50px;
        color:#444;
    }
    p.text{
        font-size: 20px;
        font-family: cursive;
        color:#444444ba;
    }
</style>