<template>
<div>
    <v-container>
        <v-row align="center" justify="center">
            <v-col lg="4">
                <h1 align="center">Sign Up</h1>
                <v-form>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                  
                    <v-btn color="success">Sign Up</v-btn>
                </v-form>
                
            </v-col>
        </v-row>
    </v-container>
    
</div>

</template>



<script>
export default{
    name: "SignUpPage",
}
</script>

<style scoped>
div{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>

