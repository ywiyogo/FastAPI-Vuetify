<template>
    <div>
        <Card>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Email:"
                    label-for="input-1"
                    class="my-4"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        required
                    ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-3" label="Password:" label-for="input-2" class="my-4">
                    <b-form-input
                        id="input-3"
                        type="password"
                        v-model="form.password"
                        placeholder="Password"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="success" class="mr-3" style="margin-right: 30px;">Login</b-button>
                <b-button @click="toRegister()" variant="primary">Create Account</b-button>
            </b-form>
        </Card>
    </div>
</template>
<style scoped>
.capitilize {
    text-transform: capitalize;
}
</style>
<script>
    export default {
        name: "Alerts",
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    password: '',
                    gender: 'male'
                },
                gender: ["male","female"]
            }
        },
        methods: {
            toRegister() {
                this.$router.push({name: "register"})  ;
            },
            onSubmit(event) {
                event.preventDefault();
                const payload = {
                    username: this.form.email,
                    password: this.form.password,
                }
                this.$store.dispatch("postLogin", payload).then(res=> {
                    console.log(res)
                    this.$toasts.add({
                        body: "Login successfuly",
                        title: "Success",
                        position: "top-center",
                        timeout: 5000,
                        showCloseButton: true,
                        closeOnClick: false,
                        type: "success",
                    });
                    this.$router.push({name: "dashboard"})
                }).catch(err=> {
                    this.$toasts.add({
                        body: err.response.data,
                        title: "Error",
                        position: "top-center",
                        timeout: 5000,
                        showCloseButton: true,
                        closeOnClick: false,
                        type: "danger",
                    });
                });
            },
            onReset(event) {
                event.preventDefault()
                this.form.email = '';
                this.form.name = '';
                this.form.gender = 'male';
                this.form.password = '';
            }
        }
    }
</script>

<style scoped>

</style>