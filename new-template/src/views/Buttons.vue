<template>
    <div>
        <Card>
            <template v-slot:header>
                Normal buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default">Default</Button>
                <Button class="demo-btn" type="primary">Primary</Button>
                <Button class="demo-btn" type="secondary">Secondary</Button>
                <Button class="demo-btn" type="success">Success</Button>
                <Button class="demo-btn" type="info">Info</Button>
                <Button class="demo-btn" type="warning">Warning</Button>
                <Button class="demo-btn" type="danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Rounded buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" rounded type="default">Default</Button>
                <Button class="demo-btn" rounded type="primary">Primary</Button>
                <Button class="demo-btn" rounded type="secondary">Secondary</Button>
                <Button class="demo-btn" rounded type="success">Success</Button>
                <Button class="demo-btn" rounded type="info">Info</Button>
                <Button class="demo-btn" rounded type="warning">Warning</Button>
                <Button class="demo-btn" rounded type="danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Edgy buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" edgy type="default">Default</Button>
                <Button class="demo-btn" edgy type="primary">Primary</Button>
                <Button class="demo-btn" edgy type="secondary">Secondary</Button>
                <Button class="demo-btn" edgy type="success">Success</Button>
                <Button class="demo-btn" edgy type="info">Info</Button>
                <Button class="demo-btn" edgy type="warning">Warning</Button>
                <Button class="demo-btn" edgy type="danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Outline light background buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="outline-light-bg-default">Default</Button>
                <Button class="demo-btn" type="outline-light-bg-primary">Primary</Button>
                <Button class="demo-btn" type="outline-light-bg-secondary">Secondary</Button>
                <Button class="demo-btn" type="outline-light-bg-success">Success</Button>
                <Button class="demo-btn" type="outline-light-bg-info">Info</Button>
                <Button class="demo-btn" type="outline-light-bg-warning">Warning</Button>
                <Button class="demo-btn" type="outline-light-bg-danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Outline buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="outline-default">Default</Button>
                <Button class="demo-btn" type="outline-primary">Primary</Button>
                <Button class="demo-btn" type="outline-secondary">Secondary</Button>
                <Button class="demo-btn" type="outline-success">Success</Button>
                <Button class="demo-btn" type="outline-info">Info</Button>
                <Button class="demo-btn" type="outline-warning">Warning</Button>
                <Button class="demo-btn" type="outline-danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Large buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" size="lg">Default</Button>
                <Button class="demo-btn" type="primary" size="lg">Primary</Button>
                <Button class="demo-btn" type="secondary" size="lg">Secondary</Button>
                <Button class="demo-btn" type="success" size="lg">Success</Button>
                <Button class="demo-btn" type="info" size="lg">Info</Button>
                <Button class="demo-btn" type="warning" size="lg">Warning</Button>
                <Button class="demo-btn" type="danger" size="lg">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Small buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" size="sm">Default</Button>
                <Button class="demo-btn" type="primary" size="sm">Primary</Button>
                <Button class="demo-btn" type="secondary" size="sm">Secondary</Button>
                <Button class="demo-btn" type="success" size="sm">Success</Button>
                <Button class="demo-btn" type="info" size="sm">Info</Button>
                <Button class="demo-btn" type="warning" size="sm">Warning</Button>
                <Button class="demo-btn" type="danger" size="sm">Danger</Button>
            </div>
        </Card>
        <Card class="mt-5 mb-5">
            <template v-slot:header>
                Buttons with icons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" >
                    <span v-html="icons.book"></span>
                    Default
                </Button>
                <Button class="demo-btn" type="primary" >
                    <span v-html="icons.book"></span>
                    Primary
                </Button>
                <Button class="demo-btn" type="secondary" >
                    <span v-html="icons.book"></span>
                    Secondary
                </Button>
                <Button class="demo-btn" type="success" >
                    <span v-html="icons.book"></span>
                    Success
                </Button>
                <Button class="demo-btn" type="info" >
                    <span v-html="icons.book"></span>
                    Info
                </Button>
                <Button class="demo-btn" type="warning" >
                    <span v-html="icons.book"></span>
                    Warning
                </Button>
                <Button class="demo-btn" type="danger" >
                    <span v-html="icons.book"></span>
                    Danger
                </Button>
            </div>
            <div class="showcase-wrapper mt-2">

                <Button class="demo-btn" type="default" >
                    <span v-html="icons.book"></span>
                </Button>
                <Button class="demo-btn" type="primary" >
                    <span v-html="icons.fire"></span>
                </Button>
                <Button class="demo-btn" type="success" >
                    <span v-html="icons.tree"></span>
                </Button>
                <Button class="demo-btn" type="info" >
                    <span v-html="icons.keyboard"></span>
                </Button>
                <Button class="demo-btn" type="warning" >
                    <span v-html="icons.steps"></span>
                </Button>
                <Button class="demo-btn" type="danger" >
                    <span v-html="icons.calculator"></span>
                </Button>
            </div>
        </Card>

    </div>
</template>

<script>

    export default {
        name: "Buttons",

        data(){
            return {
                icons:{
                    fire:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path  fill="currentColor" d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z" class=""></path>
                    </svg>
                    `,
                    book:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" class=""></path>
                    </svg>
                    `,
                    tree:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="currentColor" d="M378.94 321.41L284.7 224h49.22c15.3 0 23.66-16.6 13.86-27.53L234.45 69.96c3.43-6.61 5.55-14 5.55-21.96 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 7.96 2.12 15.35 5.55 21.96L36.22 196.47C26.42 207.4 34.78 224 50.08 224H99.3L5.06 321.41C-6.69 333.56 3.34 352 21.7 352H160v32H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h288c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16H224v-32h138.3c18.36 0 28.39-18.44 16.64-30.59zM192 31.98c8.85 0 16.02 7.17 16.02 16.02 0 8.84-7.17 16.02-16.02 16.02S175.98 56.84 175.98 48c0-8.85 7.17-16.02 16.02-16.02zM304 432v32H80v-32h224z" class=""></path>
                    </svg>
                    `,
                    steps:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="currentColor" d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z" class=""></path>
                    </svg>
                    `,
                    keyboard:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="currentColor" d="M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z" class=""></path>
                    </svg>
                    `,
                    calculator:`
                    <svg  style="display: inline-block;font-size: inherit;height: 1em;overflow: visible;vertical-align: -0.125em;"  aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
                        <path fill="currentColor" d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z" class=""></path>
                    </svg>
                    `,
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .showcase-wrapper{
        .demo-btn{
            margin: 5px 10px;
        }
    }
</style>