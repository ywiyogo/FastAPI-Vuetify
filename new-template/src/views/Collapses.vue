<template>
    <div>
        <Card>
            <template slot="header">Collapse</template>

            <!-- Simple collapse examples -->
            <p class="mb-3">Collapse with <code>v-collapse</code> directive</p>
            <Button v-collapse="'collapse'">
                Collapse
            </Button>
            <Collapse id="collapse">
                <Card class="mt-4" header-classes="d-flex flex-row align-items-center" slot="default">
                    <template slot="header">
                        Collapsed card
                        <Badge class="ms-3" type="secondary" inverse>It's cool</Badge>
                    </template>
                    Some great collapse stuff
                    <Button v-tooltip="{id:'tooltip', placement:'top'}" type="secondary" size="sm">Hover over me
                    </Button>
                    <Tooltip id="tooltip">
                        Tooltip inside collapse
                    </Tooltip>
                </Card>
            </Collapse>

            <p class="mb-3 mt-5">Collapse with manual control via <code>$refs</code> and <code>toggle()</code> method
            </p>
            <Button @click="$refs['referenced-collapse'].toggle()">
                Collapse
            </Button>
            <Collapse ref="referenced-collapse">
                <Card class="mt-4" header-classes="d-flex flex-row align-items-center" slot="default">
                    <template slot="header">
                        Collapsed card
                        <Badge class="ms-3" type="secondary" inverse>It's cool</Badge>
                    </template>
                    Some great collapse stuff
                    <Button v-tooltip="{id:'tooltip2', placement:'top'}" type="secondary" size="sm">Hover over me
                    </Button>
                    <Tooltip id="tooltip2">
                        Tooltip inside collapse
                    </Tooltip>
                </Card>
            </Collapse>
        </Card>

        <!-- Accordion examples -->
        <Card class="mt-5">
            <template slot="header" >
                Accordion example
            </template>
            <h5 class="mt-1 mb-3">Simple accordion</h5>
            <Accordion>
                <AccordionItem>
                    <b slot="default">Test accordion item</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 1
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 2</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 2
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 3</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 3
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 4</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 4
                        </h1>
                    </div>
                </AccordionItem>
            </Accordion>
            <h5 class="mt-5  mb-3">Accordion with always one item open</h5>
            <Accordion always-one>
                <AccordionItem>
                    <b slot="default">Test accordion item</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 1
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 2</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 2
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 3</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 3
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 4</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 4
                        </h1>
                        <Accordion>
                            <AccordionItem>
                                <b slot="default">Accordion inside accordion</b>
                                <div slot="body">
                                    It's real
                                </div>
                            </AccordionItem>
                            <AccordionItem>
                                <b slot="default">Accordion inside accordion</b>
                                <div slot="body">
                                    It's real, I am not lying!
                                    <Accordion>
                                        <AccordionItem>
                                            <b slot="default">Clickable 1</b>
                                            <b slot="body">Clickable 1 content</b>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <b slot="default">Clickable 2</b>
                                            <b slot="body">Clickable 2 content</b>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </AccordionItem>
            </Accordion>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Collapses"
    }
</script>

<style scoped>

</style>