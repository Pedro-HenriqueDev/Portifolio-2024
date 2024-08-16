<template>
    <div id="home-page" class="px-3 xl:px-0">
        <div>
            <div class="container-centered text-center">
                <div class="container-main-title">
                    <div class="title">PORTFÓLIO</div>
                    <div class="subtitle">Pedro Henrique</div>
                </div>
                <div class="year">2024</div>
            </div>
        </div>
        <div id="sobremim" class="ancora"></div>
        <div class="mt-40">
            <div class="container-styled flex justify-between flex-wrap">
                <div class="font-montserrat">
                    <div>
                        <div class="md:text-7xl text-5xl font-bold">Bem vindo!</div>
                        <div class="text-3xl font-bold mt-5">Eu sou Pedro Henrique</div>
                        <div class="text-xl italic">Desenvolvedor Web</div>

                        <div class="md:w-[700px] w-auto mt-10">
                            Tenho 3 anos de experiência com Vue e Node.js. Estou cursando Análise e Desenvolvimento de
                            Sistemas. Tenho paixão por programação e pela aplicação da tecnologia para resolver desafios
                            complexos de maneira eficiente. Meu objetivo é desenvolver programas rápidos, eficazes e de
                            relevância impactante.
                        </div>
                    </div>
                </div>
                <div class="container-image-profile d-flex justify-center items-center w-100">
                    <div class="d-flex justify-center items-center w-100 mt-5 md:mt-0">
                        <v-img
                            :max-width="500"
                            :width="300"
                            aspect-ratio="16/9"
                            cover
                            src="https://avatars.githubusercontent.com/u/82292364?s=400&u=b64d132c143f89a42f8f5b9d03f448ba5dd39096&v=4"
                        ></v-img>
                    </div>
                </div>
                <v-divider class="mt-20"></v-divider>
            </div>
        </div>
        <div id="habilidades" class="ancora"></div>
        <div class="mt-40">
            <div class="container-styled flex justify-between flex-wrap">
                <div class="font-montserrat">
                    <div>
                        <div class="md:text-7xl text-5xl font-bold">Habilidades</div>
                        <div class="md:w-[700px] w-auto mt-10">
                            Abaixo estão algumas das habilidades que adquiri em 3 anos de estudo e experiência.
                        </div>
                        <div class="text-2xl font-bold mt-5 mb-3">Front-End</div>
                        <div class="flex gap-2">
                            <template v-for="icon in frontEndIcons" :key="icon.title">
                                <Icons :linkSite="icon.officialSite" :title="icon.name" :linkIcon="icon.icon" />
                            </template>
                        </div>

                        <div class="text-2xl font-bold mt-5 mb-3">Back-end</div>
                        <div class="flex gap-2">
                            <template v-for="icon in backEndIcons" :key="icon.title">
                                <Icons :linkSite="icon.officialSite" :title="icon.name" :linkIcon="icon.icon" />
                            </template>
                        </div>

                        <div class="text-2xl font-bold mt-5 mb-3">Outras Habilidades</div>
                        <div class="flex gap-2">
                            <template v-for="icon in othersIcons" :key="icon.title">
                                <Icons :linkSite="icon.officialSite" :title="icon.name" :linkIcon="icon.icon" />
                            </template>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-auto flex items-center justify-center">
                    <div class="w-[300px] md:w-[500px]">
                        <Vue3Lottie
                            class="pt-8 flex items-center justify-center"
                            animationLink="https://lottie.host/d29be81d-180a-42f0-b6d5-951f650b3d7c/HR30sM3ZKS.json"
                            :loop="true"
                        />
                    </div>
                </div>

                <v-divider class="mt-20"></v-divider>
            </div>
        </div>
        <div id="educacao" class="ancora"></div>
        <div class="mt-40">
            <div class="container-styled flex flex-wrap">
                <div class="font-montserrat">
                    <div>
                        <div class="md:text-7xl text-5xl font-bold">Formação Acadêmica</div>

                        <div class="md:w-[500px] w-auto mt-20">
                            <div class="text-3xl font-bold mt-5">2023-2025</div>
                            <div class="text-3xl font-bold mt-2">Estácio de Sá</div>
                            <div class="mt-5">
                                Cursando Atualmente: Análise e Desenvolvimento de Sistemas - Tecnólogo
                            </div>
                        </div>
                        <div class="md:w-[500px] w-auto mt-10">
                            <div class="text-3xl font-bold mt-5">2022-2023</div>
                            <div class="text-3xl font-bold mt-2">Udemy - Formação Node.js</div>
                            <div class="mt-5">
                                Curso completo que vai do básico do Node.js, se aprofundado bastante no desenvolvimento
                                web com Javascript para o back-end, com bibliotecas como Express.js, e bancos de dados
                                como MongoDB e MySQL.
                            </div>
                        </div>
                    </div>
                </div>
                <v-divider class="mt-20"></v-divider>
            </div>
        </div>
        <div id="profissional" class="ancora"></div>
        <div class="mt-40">
            <div class="container-styled flex flex-wrap">
                <div class="md:text-7xl text-5xl font-bold">Experiências Profissionais</div>
                <div class="w-full flex flex-wrap justify-between font-montserrat">
                    <div>
                        <div class="md:w-[500px] w-auto mt-20">
                            <div class="text-3xl font-bold mt-5">Softagon Sistemas</div>
                            <div class="text-xl italic">Desenvolvedor Web</div>
                            <div>(2023-2024)</div>
                            <div class="mt-5 flex flex-col">
                                <div>
                                    Desenvolvendo Websites utilizando Vue.js e Node.js. Participação intensa na
                                    construção de layouts para portais de prefeituras no estado de Pernambuco.
                                </div>
                                <div class="flex flex-col mt-3 underline">
                                    <a class="text-[#F7E7DC]" href="https://www.dormentes.pe.gov.br/" target="_blank"
                                        >Cidade de Dormentes</a
                                    >
                                    <a
                                        class="text-[#F7E7DC]"
                                        href="https://santamariadaboavista.pe.gov.br/"
                                        target="_blank"
                                        >Cidade de Santa Maria</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="md:w-[500px] w-auto mt-10">
                            <div class="text-3xl font-bold mt-5">Arqtetando Brasil</div>
                            <div class="text-xl italic">Desenvolvedor Web</div>
                            <div>(2024- atualmente)</div>
                            <div class="mt-5">
                                Atualmente dando suporte ao site da empresa
                                <a class="text-[#F7E7DC] underline" href="https://arqtetando.com.br/" target="_blank"
                                    >Arqtetando Brasil</a
                                >. O sistema utiliza também de Node.js e Vue.js. O site tem o objetivo de relacionar
                                clientes e suas demandas a profissionais interessados, relacionados à construção civil e
                                engenharia.
                            </div>
                        </div>
                    </div>
                    <div class="w-[500px] flex justify-center items-center mt-10">
                        <v-row no-gutters class="gap-2">
                            <v-col cols="12">
                                <v-img height="100%" cover class="rounded" src="/img/experience/dormentes.png"></v-img>
                            </v-col>
                            <v-col cols="12">
                                <v-row>
                                    <v-col cols="4"
                                        ><v-img
                                            height="100%"
                                            cover
                                            class="rounded"
                                            src="/img/experience/dormentes_mobile.png"
                                        ></v-img
                                    ></v-col>
                                    <v-col cols="8">
                                        <v-row no-gutters class="gap-2">
                                            <v-col cols="12"
                                                ><v-img
                                                    height="100%"
                                                    cover
                                                    class="rounded"
                                                    src="/img/experience/santa_maria.png"
                                                ></v-img
                                            ></v-col>
                                            <v-col cols="12"
                                                ><v-img
                                                    height="100%"
                                                    cover
                                                    class="rounded"
                                                    src="/img/experience/arqtetando.png"
                                                ></v-img
                                            ></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                </div>

                <v-divider class="mt-20"></v-divider>
            </div>
        </div>

        <div id="projetos" class="ancora"></div>
        <div class="mt-40">
            <div class="container-styled flex flex-wrap">
                <div class="md:text-7xl text-5xl font-bold">Projetos Pessoais</div>

                <div class="w-full flex flex-wrap justify-between font-montserrat">
                    <div>
                        <div class="md:w-[500px] w-auto mt-20">
                            <div class="text-3xl font-bold mt-5">Love Movies</div>
                            <div class="text-xl italic">Vue.js e Node.js</div>
                            <div class="mt-5 flex flex-col">
                                <div>
                                    Website para pesquisar, ver informações e favoritar filmes. Esse site tem algumas
                                    funcionalidades bem interessantes, como:
                                    <ul class="list-disc ms-5 mt-2">
                                        <li>Cadastro de usuário</li>
                                        <li>Verificação de email</li>
                                        <li>Login de usuário</li>
                                        <li>Redefinição de Senha</li>
                                        <li>Visualização de filmes</li>
                                        <li>Pesquisa por filmes</li>
                                        <li>Lista de Favoritos</li>
                                    </ul>
                                </div>
                                <div class="flex flex-col mt-3 underline">
                                    <a class="text-[#F7E7DC]" href="https://love-movie.vercel.app/#/" target="_blank"
                                        >Link para o site</a
                                    >
                                    <a
                                        class="text-[#F7E7DC]"
                                        href="https://github.com/Pedro-HenriqueDev/loveMovie"
                                        target="_blank"
                                        >Link para o repositório</a
                                    >
                                    <a
                                        class="text-[#F7E7DC]"
                                        href="https://github.com/Pedro-HenriqueDev/loveMovie"
                                        target="_blank"
                                        >Link para o repositório do back-end</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[500px] flex justify-center items-center mt-10">
                        <v-row no-gutters class="gap-2">
                            <v-col cols="12">
                                <v-img height="100%" cover class="rounded" src="/img/love_movies/logged.png"></v-img>
                            </v-col>
                            <v-col cols="12">
                                <v-row>
                                    <v-col cols="4"
                                        ><v-img
                                            height="100%"
                                            cover
                                            class="rounded"
                                            src="/img/love_movies/logged_mobile.png"
                                        ></v-img
                                    ></v-col>
                                    <v-col cols="8">
                                        <v-row no-gutters class="gap-2">
                                            <v-col cols="12"
                                                ><v-img
                                                    height="100%"
                                                    cover
                                                    class="rounded"
                                                    src="/img/love_movies/search.png"
                                                ></v-img
                                            ></v-col>
                                            <v-col cols="12"
                                                ><v-img
                                                    height="100%"
                                                    cover
                                                    class="rounded"
                                                    src="/img/love_movies/movie_details.png"
                                                ></v-img
                                            ></v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                </div>

                <v-divider class="mt-20 pb-10"></v-divider>
            </div>
        </div>
    </div>
    <div class="bg-secondary pb-10 pt-14 lg:px-0 px-3">
        <div class="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center">
            <div class="flex flex-col">
                <div class="md:text-5xl text-3xl font-bold">Portfólio</div>
                <div class="flex mt-5 md:gap-40 gap-0">
                    <div class="flex flex-col gap-1 mt-4">
                        <p class="text-[#bebebe] underline">Sessões</p>
                        <a href="#sobremim" class="hover:underline">Resumo</a>
                        <a href="#habilidades" class="hover:underline">Habilidades</a>
                        <a href="#educacao" class="hover:underline">Educação</a>
                        <a href="#profissional" class="hover:underline">Profissional</a>
                        <a href="#projetos" class="hover:underline">Projetos Pessoais</a>
                    </div>
                    <div class="flex flex-col gap-1 mt-4">
                        <p class="text-[#bebebe] underline">Contato</p>
                        <a href="mailto:contatopedrohrq@gmail.com" class="hover:underline">contatopedrohrq@gmail.com</a>
                        <div class="hover:underline">(71) 99952-2030</div>
                    </div>
                </div>
            </div>

            <div class="flex gap-2 mt-5 sm:mt-0">
                <Icons
                    :linkSite="'https://www.linkedin.com/in/pedro-araujo-dev/'"
                    :title="'Linkedin'"
                    :linkIcon="'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'"
                />
                <Icons
                    :linkSite="'https://github.com/Pedro-HenriqueDev'"
                    :title="'Github'"
                    :linkIcon="'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'"
                />
                <Icons
                    :linkSite="'https://www.instagram.com/pedro_henriqqqq/'"
                    :title="'Instagram'"
                    :linkIcon="'https://img.icons8.com/?size=100&id=NdqqxfTuEK6C&format=png&color=000000'"
                />
            </div>
        </div>
        <div class="flex justify-center">
            <v-divider class="max-w-[1280px] mt-10"></v-divider>
        </div>
        <div class="flex justify-center mt-8">&#169; 2024. Desenvolvido por Pedro Henrique</div>
    </div>
</template>

<script setup lang="ts">
    import { languagesFrontEnd, languagesBackEnd, others } from "../_mocks/icons";
    const frontEndIcons = languagesFrontEnd;
    const backEndIcons = languagesBackEnd;
    const othersIcons = others;

    useHead({
        title: "Pedro Henrique - Portfolio",
    });
    useSeoMeta({
        title: "Pedro Henrique - Portfolio",
        ogTitle: "Pedro Henrique - Portfolio",
        description: "Prazer, eu sou o Pedro e trabalho com desenvolvimento web há 3 anos.",
        ogDescription: "Prazer, eu sou o Pedro e trabalho com desenvolvimento web há 3 anos.",
        ogImage:
            "https://avatars.githubusercontent.com/u/82292364?s=400&u=b64d132c143f89a42f8f5b9d03f448ba5dd39096&v=4.png",

        ogUrl: "https://pedro-henrique.dev",
        ogType: "website",
        twitterCard: "summary_large_image",
        twitterTitle: "Pedro Henrique - Portfolio",
        twitterDescription: "Prazer, eu sou o Pedro e trabalho com desenvolvimento web através 3 anos.",
        twitterImage:
            "https://avatars.githubusercontent.com/u/82292364?s=400&u=b64d132c143f89a42f8f5b9d03f448ba5dd39096&v=4.png",
        ogLocale: "pt_BR",
        robots: "index",
    });

    definePageMeta({
        name: "Pedro Henrique - Portfólio",
    });
</script>
