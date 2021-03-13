<template>
<Card>
    <template v-slot:header>
        Modals
    </template>
    <div>
        <Modal :open="showModal" @closed="showModal = false">
            <div class="modal-header">
                <h5 class="modal-title m-0">Modal title</h5>
                <button @click="showModal = false" type="button" class="btn-close outline-none" data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here. You will find some great content here inside <code>.modal-body</code> element</p>
                <p>
                    Modals are fully customizable. You can put any valid html or other components inside the default slot.
                    Default slot content will be wrapped inside <code>.modal-content</code> which you can customize via <code>saas</code> files
                </p>
                <p>
                    You have to manage the display of modals manually. <code>@closed</code> event will be emitted when user clicks on modal backdrop.
                    You can use this event to hide modal, or ignore the event if you want to manage display of modal in another way.
                </p>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary me-3" data-dismiss="modal" @click="showModal = false">Close Modal</button>
                <button type="button" class="btn btn-primary">This button does nothing</button>
            </div>
        </Modal>
        <Modal class="modal-xl" :open="showModal2" @closed="showModal2 = false" :dialog-size="'modal-xl'">
            <div class="modal-header"><h5 class="modal-title m-0">Real big one</h5></div>
            <div class="modal-body">
                This is an xl modal with <code>.modal-xl</code> applied to <code>Modal</code> component
                <div>Close it by clicking outside the modal content</div>
            </div>
        </Modal>
        <Modal :open="showModal3" @closed="showModal3 = false">
            <div class="modal-header">
                <h5 class="modal-title m-0">Really long content one</h5>
                <button @click="showModal3 = false" type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula vel massa at semper. Vestibulum et nulla et neque elementum commodo. Quisque pretium quis ligula at semper. Maecenas dignissim quis urna in finibus. Donec posuere tempus arcu, ut blandit sapien faucibus vitae. Sed tincidunt turpis non est euismod vulputate. Phasellus condimentum risus nec lorem luctus, sed dictum quam dignissim. Nam et ligula eros. Maecenas tortor justo, ultricies eget molestie at, finibus eu magna. Sed eu dapibus justo, id scelerisque elit. Suspendisse congue massa vitae velit lobortis, in congue diam bibendum. In at molestie magna. Morbi maximus quam eget facilisis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit, purus nec tincidunt egestas, quam felis porttitor odio, eget feugiat dui purus nec purus. Nam erat ligula, tempus vel arcu eget, porta dapibus augue.

                Aliquam erat volutpat. Donec eget est in est mollis faucibus. Aenean vitae pharetra lectus. Praesent ullamcorper ipsum id diam suscipit, in eleifend ante hendrerit. Aenean euismod condimentum purus et posuere. Sed et magna nibh. Mauris imperdiet sodales bibendum. Vivamus faucibus nulla eu ipsum bibendum, at viverra massa ullamcorper. Praesent non massa viverra, congue quam maximus, interdum tellus. Maecenas consectetur nulla augue, in dignissim leo aliquet sed. Integer in nisi volutpat, viverra elit quis, maximus nunc. Curabitur vitae tortor sed nisi porttitor sollicitudin.

                Cras viverra tincidunt tellus, eu aliquam lorem pellentesque id. Maecenas ac erat bibendum, suscipit mauris eu, faucibus libero. Quisque sollicitudin viverra commodo. Donec facilisis ullamcorper leo, sit amet finibus enim tempus et. Praesent eros diam, tempus vitae ipsum ut, maximus dapibus ante. Fusce a fermentum diam. Nulla sit amet dictum enim, vitae faucibus tellus. Curabitur luctus convallis felis, vel gravida metus ultricies in. Proin accumsan tellus leo, id mattis tellus eleifend in. Morbi auctor dictum tincidunt. Proin tempus dictum consectetur. In hac habitasse platea dictumst. Aenean imperdiet nunc at est blandit, eu maximus justo dictum. Aliquam erat volutpat. Donec condimentum tristique ullamcorper.

                Fusce dignissim nisi non nulla interdum blandit. Integer varius rhoncus elit, ac accumsan turpis rhoncus non. Sed vestibulum laoreet odio sed finibus. Mauris porttitor nibh orci, vitae ornare orci blandit nec. Sed lectus eros, bibendum ac ante non, rhoncus sagittis felis. Praesent lobortis, mauris sed ornare laoreet, purus odio maximus dolor, et tincidunt orci libero in nulla. Pellentesque venenatis libero eu diam dapibus rhoncus. Aliquam erat volutpat. Suspendisse auctor condimentum ligula ac commodo.

                Quisque molestie magna a libero volutpat pellentesque. Maecenas bibendum turpis nec nunc rhoncus, eu blandit ex cursus. Mauris quis volutpat mi. Curabitur quis accumsan risus. Aenean rutrum augue libero, sed laoreet sem consequat eu. Phasellus imperdiet porta ornare. Phasellus non pharetra felis. Fusce et luctus dui. Etiam mollis lacus at urna porta tempus. Nulla lobortis, sapien non malesuada auctor, tortor tellus porttitor elit, in placerat eros lacus ut leo. Morbi id mattis nibh.
            </div>
        </Modal>
        <Modal ref="modal4" :open="showModal4">
            <div class="modal-body p-5">
                <div class="font-size-150 fw-bold text-center">
                    Sign up
                </div>
                <div class="font-size-100 color-gray-600 text-center">
                    And receive some awesome perks!
                </div>
                <div class="mt-4">
                    <form>
                        <Input placeholder="John Doe">
                            <template #label>Full name</template>
                        </Input>
                        <Input placeholder="john@doe.com">
                            <template #label>Email address</template>
                        </Input>
                        <Input placeholder="Password" type="password">
                            <template #label>Account password</template>
                        </Input>
                        <div class=" mt-4 d-flex flex-row justify-content-between align-items-center">
                            <Checkbox>
                                <span class="font-size-75">I Accept to our terms and conditions</span>
                            </Checkbox>
                            <Button>Register now</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>

        <Button class="me-3 my-3" @click="showModal = true">Click me</Button>
        <Button class="me-3 my-3" @click="showModal3 = true">Modal with really long content</Button>
        <Button class="me-3 my-3"  @click="showModal2 = true">Launch XL modal</Button>
        <Button class="me-3 my-3"  @click="$refs.modal4.openModal()">Registration modal</Button>
    </div>
</Card>
</template>

<script>
    export default {
        name: "Modals",

        data(){
            return {
                showModal:false,
                showModal2:false,
                showModal3:false,
                showModal4:false,
            }
        }
    }
</script>

<style scoped lang="scss">
</style>