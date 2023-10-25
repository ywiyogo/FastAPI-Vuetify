<template>
    <div>
        <Card>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Username:"
                    label-for="input-1"
                    class="my-4"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.name"
                        type="text"
                        placeholder="Username"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Email:" label-for="input-2" class="my-4">
                    <b-form-input
                        id="input-2"
                        type="email"
                        v-model="form.email"
                        placeholder="E-mail"
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
                <b-form-group id="input-group-4" label="Gender:" label-for="input-4" class="my-4">
                    <b-form-select
                    class="form-control capitilize"
                    id="input-4"
                    v-model="form.gender"
                    :options="gender"
                    required
                    ></b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mr-3" style="margin-right: 30px;">Register</b-button>
                <b-button type="reset" variant="danger">Reset Form</b-button>
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
            onSubmit(event) {
                event.preventDefault();
                const payload = {
                    email: this.form.email,
                    gender: this.form.gender,
                    password: this.form.password,
                    username: this.form.name
                }
                this.$store.dispatch("postRegister", payload).then(res=> {
                    console.log(res)
                }).catch(err=> {
                    console.log(err)
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