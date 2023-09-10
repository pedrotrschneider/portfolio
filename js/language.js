var languages = {
    en: {
        nav: {
            home: "Home",
            services: "What I do",
            about: "Who am I",
            work: "My projects"
        },

        intro: {
            greeting: "Hi! My name is <strong>Pedro Schneider</strong>",
            gameDeveloper: "Game developer"
        },

        myServices: {
            sectionTitle: "What I do",

            service1: {
                title: "Game Design and Development",
                body: "I develop games for fun since 2018. I started out learning by myself in high school, but, after falling in love with game development, I decided to get a Bachelor's degree in Computer Science at the University of São Paulo to sharpen my knowledge, especially in graphics programming",
            },

            service2: {
                title: "Game narrative design",
                body: "In the scope of game development, one of the areas that always fascinated me is narrative design. The huge expressiveness and interactivity present in games has a huge potential for great storytelling",
            },

            service3: {
                title: "Software development",
                body: "In addition to game development, I am also a software developer in general, encompassing command line tools for Linux system, with Bash and Rust, as well as desktop and Web app development, such as this website",
            },

            myProjects: "my projects",
        },

        aboutMe: {
            sectionTitle: "Who am I",
            sectionSubtitle: "Game designer and developer since 2018",

            sectionBody: {
                p1: "I started developing games in 2018, focusing on the technical aspects of the development. My first game was written in <strong>Java</strong>, in a Game Engine made by me, using <strong>OpenGL</strong>. However, I quickly realized that my favorite aspects of game development are the <strong>visual and creative</strong> processes. With that in mind, I began looking for ways to optimize the development process.",
                p2: "To that end, I started using established Game Engines, specifically <strong>Unity</strong> and <strong>Godot</strong>, and I continue using them to this day, for their simplicity, practicality, and ease of development. When I'm not using a Game Engine, <strong>Rust</strong> and <strong>C/C++</strong> are my languages of choice for general-purpose programming.",
                p3: "I also develop other kinds of software, such as <strong>command line tools</strong> for Linux and <strong>desktop aplications</strong>, in addition to <strong>web development</strong>, such as this website.",
                p4: "I'm currently a student of <strong>Bachelor's in Computer Science at the University of São Paulo</strong>, one of the best universities in Latin America, in my fifth semester.",
            },

            usedTechnologies: "Technologies I use",
        },

        myWork: {
            sectionTitle: "My work",
            sectionSubtitle: "A selection of my best personal projects",

            alfabetiza: {
                title: "Alfabetiza",
                description: "An educational game to teach children the Portuguese language.",
            },

            pulsar: {
                title: "Pulsar",
                description: "A futuristic base-building, strategy survival game.",
            },

            shaderFractals: {
                title: "Shader Fractals",
                description: "A collection of GLSL shaders to render 2D and 3D fractals using Ray Marching.",
            },

            taaots: {
                title: "Totally Accurate Attack on Titan Simulator",
                description: "A desktop game based on the Attack on Titan anime series.",
            },

            creativeCoding: {
                title: "Creative coding",
                description: "A collection of creative coding and computer graphics projects.",
            },

            callToAction: "<strong>Click to learn more!</strong>",
        },

        projectModals: {
            alfabetiza: {
                title: "Alfabetiza",

                section1: {
                    title: "An educational game to teach children the Portuguese language",
                    p1: "This game was developed in partnership with the Faculty of Education from the University of São Paulo (FEUSP) and the Institute of Mathematics and Statistics from the University of São Paulo (IME-USP).",
                    p2: "The goal of the game is to be a platform aimed at teaching children the Portuguese language",
                },

                section2: {
                    title: "Gameplay",
                    p1: "The game consists of a collection of mini-games, each one exploring a different aspect of the Portuguese language. The learning is developed by interactions based on images, text, and audio, to ensure a broad development of the children's communication skills.",
                    p2: "In addition to that, there is also a login system that can be utilized in a classroom. This way, the performance of the students in each mini-game can be registered, to be later analyzed by the professors, to identify learning difficulties in specific areas.",
                    p3: "Versions of the game without the login system can also be utilized, be it for tests, situations that don't allow for internet access, or when this kind of data isn't needed.",
                },

                section3: {
                    title: "Scenery",
                    p1: "The game as a whole takes place in a scenery based on Brazilian traditional indigenous legends. The minigames are divided between the four elements: Earth, Water, Fire, and Air.",
                    p2: "Each of the elements is based on a different indigenous legend, that can be listened to and read after completing the first minigame in each element.",
                    p3: "More information is available in the GitLab repository, and on the official documentation.",
                    p4: "The game is available for Web, Windows, Linux, and Android, and can be played on the browser via the itch.io page. All different builds of the game for all platforms are available on a GitLab repository.",
                },
            },

            pulsar: {
                title: "Pulsar",

                section1: {
                    p1: "This game was developed by a team of colleagues from my University's game development group, USP Game Dev, over the course of 72 hours, for the Ludum Dare 51 game jam.",
                    p2: "It's a base-building, strategy, and survival game, based on a futuristic scenery.",
                },

                section2: {
                    title: "Plot",
                    p1: "Hundreds of years after exhausting the natural resources of their home planet, Sunset, humanity travels through the cosmos in the direction of what seems to be their last hope.",
                    p2: "Planets orbiting the star PSR B1257+L13 emit a mysterious pulsating light that brightens the way for the last colonies to find refuge on these planets' rocky surfaces.",
                    p3: "As they approach, the people of Sunset are amazed. The amount of energy emitted by these pulses might be just enough to sustain all their ships and colonies!",
                },

                section3: {
                    title: "Gameplay",
                    p1: "It's based on the construction of power plants to generate energy for several different buildings in the colony.",
                    p2: "The source code and all of the assets are available in the GitLab repository, and builds for Windows, Linux, and Mac are available at the game's page on Ludum Dare 51's official site.",
                },
            },

            shaderFractals: {
                title: "Shader Fractals",

                section1: {
                    p1: "This project is a collection of GLSL shaders to render 2D and 3D fractals using Ray Marching",
                    p2: "The project consists of both the source code for the shaders, as well as mathematical explanations behind de creation and rendering of the geometric shapes.",
                    p3: "The modular way in which the code has been written allows for easy modification to generate a wide range of different fractals.",
                },

                section2: {
                    title: "Mandelbrot's Set",
                    p: "Visualization of one of the most famous fractals, based on Mandelbrot's Set.",
                },

                section3: {
                    title: "Julia's Set",
                    p: "One of the many visualizations of Julia's Set, described by the French mathematician Gaston Julia.",
                },

                section4: {
                    title: "Menger's Mushroom",
                    p: "Fractal created by me, using the 3D rendering shader, named after its resemblance to Menger's Sponge fractal.",
                },

                section5: {
                    title: "Menger's Broccoli",
                    p: "Fractal created by me, using the 3D rendering shader, named after its resemblance to Menger's Sponge fractal.",
                    p2: "These and many other fractals, along with their descriptions and histories, are available with the source code of the project.",
                },
            },

            taaots: {
                title: "Totally Accurate Attack on Titan Simulator",

                section1: {
                    p1: "This game was developed over the course of one week for the Chocolate Game Jam, using the Godot Game Engine.",
                    p2: "All the source code and assets for the game were made in the week of the jam.",
                    p3: "The main idea of the game was the simulation of the 3D maneuver system, as shown in the anime, for movement and combat.",
                    p4: "To that end, a big part of the default functionality of Godot's Physics system had to be re-written to accommodate the movement system I wanted to implement.",
                    p5: "The game features a complete tutorial, teaching the player how to use the game's movement system, in addition to an infinite arcade mode in which the player has to survive as long as they can, or kill as many titans as they can.",
                    p6: "It has over 8 thousand views and over 2.5 thousand downloads on itch.io.",
                },

                section2: {
                    title: "Tutorial",
                },

                section3: {
                    title: "Arcade Mode",
                    p: "All of the source code and assets from the game are available on GitLab, and builds for Windows, Linux, and Mac are available on itch.io.",
                },
            },

            creativeCoding: {
                title: "Creative Coding",

                section1: {
                    p1: "One of my favorite aspects of coding is creative coding, working together with computer graphics. Based on that, Daniel Shiffman, from <a href=\"https://www.youtube.com/@TheCodingTrain\">The Coding Train</a> YouTube channel, makes <a href=\"https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH\">Coding Challenges</a> that mix creative coding and computer graphics.",
                    p2: "With the goal of having fun and learning more, I decided to recreate his Coding Challenges using other technologies that I'm more familiar with.",
                    p3: "This is an ongoing project, and the goal is to, eventually, catch up to the over 200 challenges the original project has. I found it to be a great source of learning, both for me and for other people to see how to reach the same result from completely different platforms.",
                },

                section2: {
                    title: "Challenge 9: Solar System Part 3",
                },

                section3: {
                    title: "Challenge 12: Lorenz's Attractor",
                },

                section4: {
                    title: "Challenge 13: Reaction-Diffusion ALgorithm",
                    p: "The source code for all projects is available in the GitLab repository.",
                },
            },
        },

        footer: {
            copyright: "<strong>Layout & Code</strong>: Copyright <strong>©</strong> 2022-2023 <strong>Pedro Schneider</strong> via <strong>GPL-3.0</strong>"
        }
    },
    pt: {
        nav: {
            home: "Home",
            services: "O que eu faço",
            about: "Quem eu sou",
            work: "Meus projetos"
        },

        intro: {
            greeting: "Olá, meu nome é <strong>Pedro Schneider</strong>",
            gameDeveloper: "Desenvolvedor de jogos"
        },

        myServices: {
            sectionTitle: "O que eu faço",

            service1: {
                title: "Design e desenvolvimento de jogos",
                body: "Desde 2018 desenvolvo jogos por diversão. Comecei aprendendo sozinho durante o ensino médio, mas, depios de me apaixoar pela área, decidi buscar esino superior na USP em Ciência da Computação para aprofundar meus conhecimentos, especialmente na área de computação gráfica.",
            },

            service2: {
                title: "Design de narrativa para jogos",
                body: "Dentro de desenvolvimento de jogos, uma área que sempre me encantou foi o design de narrativas. A grande expressividade e interatividade presente em jogos tem um excelente potencial para contar ótimas histórias.",
            },

            service3: {
                title: "Desenvolvimento de software",
                body: "Além de jogos, também sou desenvolvedor de software no geral, englobando tanto ferramentas de linha de comando para sistemas Linux, com Bash e Rust, quanto desenvolvimento de aplicações para Desktop e Web, como este site.",
            },

            myProjects: "meus projetos",
        },

        aboutMe: {
            sectionTitle: "Quem eu sou",
            sectionSubtitle: "Designer e desenvolvedor de jogos desde 2018",

            sectionBody: {
                p1: "Comecei a desenvolver jogos em 2018, focando na parte técnica do desenvolvimento. Meu primeiro jogo foi feito em <strong>Java</strong>, com uma engine feita por mim mesmo, utilizando <strong>OpenGL</strong>. Rapidamente percebi que meu aspecto preferido do desenvolvimento de jogos era a parte <strong>criativa e visual</strong>. Tendo isso em mente, fui buscar formas de acelerar meu desenvolvimento.",
                p2: "Para isso, comecei a utilizar Game Engines, mais especificamente <strong>Unity</strong> e <strong>Godot</strong>, e permaneço com elas até hoje, por sua simplicidade, praticidade, e rapidez de desenvolvimento. Quando não estou utilizando uma Game Engine, <strong>Rust</strong> e <strong>C/C++</strong> são minhas linguagens de escolha para programação no geral.",
                p3: "Também desenvolvo outros tipos de software, como <strong>programas de linha de comando</strong> para Linux e <strong>aplicações de desktop</strong>, além de <strong>desenvolvimento web</strong>, como este site.",
                p4: "Atualmente, sou estudante do <strong>Bacharelado em Ciência da Computação na Universidade de São Paulo</strong>, cursando o quinto período.",
            },

            usedTechnologies: "Tecnologias que utilizo",
        },

        myWork: {
            sectionTitle: "Meus projetos",
            sectionSubtitle: "Uma seleção dos meus melhores trabalhos",

            alfabetiza: {
                title: "Alfabetiza",
                description: "Um jogo educacional para alfabetização de crianças na língua portuguesa.",
            },

            pulsar: {
                title: "Pulsar",
                description: "Um jogo de construção de bases, estratégia e sobrevivência futurístico.",
            },

            shaderFractals: {
                title: "Shaders de fractais",
                description: "Uma coletânea de shaders em GLSL que renderizam fractais 2D e 3D usando Ray Marching.",
            },

            taaots: {
                title: "Totally Accurate Attack on Titan Simulator",
                description: "Um jogo para desktop baseado no anime Attack on Titan.",
            },

            creativeCoding: {
                title: "Programação Criativa",
                description: "Uma coletânea de projetos de programação criativa e computação gráfica.",
            },

            callToAction: "<strong>Clique para saber mais!</strong>",
        },

        projectModals: {
            alfabetiza: {
                title: "Alfabetiza",

                section1: {
                    title: "Um jogo educacional para alfabetização de crianças na língua portuguesa",
                    p1: "Este jogo foi desenvolvido em parceria com a Faculdade de Educação da Universidade de São Paulo (FEUSP) e o Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP).",
                    p2: "Ele tem como objetivo ser uma plataforma voltada para a alfabetização de crianças na língua portuguesa.",
                },

                section2: {
                    title: "Gameplay",
                    p1: "O jogo consiste em uma coletânea de mini-jogos, cada um explorando um aspecto diferente da língua portuguesa. O aprendizado é desenvolvido por meio de interações baseadas em imagens, em textos e em áudios, para garantir um desenvolvimento abrangente das habilidades de comunicação da criança.",
                    p2: "Além disso, há um sistema de login para ser utilizado em sala de aula. Dessa forma, o desempenho dos alunos nos minijogos ficam registrados, e podem ser analisados pelo educador posteriormente, com o objetivo de identificar dificuldades em áreas específicas.",
                    p3: "Versões do jogo sem login também podem ser utilizadas para testes, ocasiões que não permitam acesso à internet, ou quando o acompanhamento individual não é necessário.",
                },

                section3: {
                    title: "Cenário",
                    p1: "O jogo como um todo está situado em um cenário baseado em lendas tradicionais indígenais brasileiras. Os minijogos são divididos entre os quatro elementos: Terra, Água, Fogo e Ar.",
                    p2: "Cada um dos elementos é baseado em alguma lenda indígena, que pode ser ouvida após completar o primeiro mini-jogo de cada elemento.",
                    p3: "Mais informações podem ser encontradas no repositório do projeto no GitLab, e na documentação oficial.",
                    p4: "O jogo está disponível para Web, Windows, Linux e Android, e pode ser jogado no navegador em sua página na itch.io. Todos os tipos de builds do jogo para todas as plataformas estão disponíveis no repositório de builds no GitLab.",
                },
            },

            pulsar: {
                title: "Pulsar",

                section1: {
                    p1: "Este jogo foi desenvolvido em parceria com colegas meus do grupo de extensão de desenvolvimento de jogos da USP, o USP Game Dev, durante um período de 72 horas para a jam Ludum Dare 51.",
                    p2: "Se trata de um jogo de construção de bases, estratégia e sobrevivência em um cenário futurista.",
                },

                section2: {
                    title: "Enredo",
                    p1: "Centenas de anos após acabar com os recursos naturais de seu planeta natal, Sunset, a humanidade viaja pelo cosmos em direção ao que parece ser sua última esperança.",
                    p2: "Planetas orbitando a estrela PSR B1257+L13 emitem um pulso misterioso de luz que serve sinalizador para as últimas colônias encontrarem refúgio nas superfícies rochosas desses planetas.",
                    p3: "Ao se aproximarem, os humanos ficam maravilhados. A energia emitida pelos pulsos parece ser suficiente para sustentar suas naves e colônias.",
                },

                section3: {
                    title: "Gameplay",
                    p1: "Se baseia na construção de estações de geração de energia para fazer funcionar diversas construções em sua colônia.",
                    p2: "O código fonte e todos os assets podem ser encontrados no repositório no GitLab, e builds para Windows, Linux e Mac estão disponíveis na página no jogo no site da Ludum Dare 51.",
                },
            },

            shaderFractals: {
                title: "Shaders de fractais",

                section1: {
                    p1: "Este projeto se trata de uma coletânea de shaders em GLSL que renderizam fractais 2D e 3D usando Ray Marching.",
                    p2: "Ele consiste do código fonte dos shaders, além de breves explicações sobre a matemática por trás da criação e renderização das formas geométricas.",
                    p3: "A forma modular na qual o código foi estruturado permite fácil modificação para gerar os mais diversos fractais.",
                },

                section2: {
                    title: "Conjunto de Mandelbrot",
                    p: "Visualização de um dos mais famosos fractais, baseado no Conjunto de Mandelbrot.",
                },

                section3: {
                    title: "Conjunto de Julia",
                    p: "Uma das possíveis visualizações do Conjunto de Julia, descrito pelo matemático francês Gaston Julia.",
                },

                section4: {
                    title: "Cogumelo de Menger",
                    p: "Fractal criado por mim, utilizando o shader de renderização de fractais 3D, nomeado por sua semelhança ao fractal Esponja de Menger.",
                },

                section5: {
                    title: "Brocolli de Menger",
                    p1: "Fractal criado por mim, utilizando o shader de renderização de fractais 3D, nomeado por sua semelhança ao fractal Esponja de Menger.",
                    p2: "Estes e outros fractais, com suas descrições e histórias, estão disponíveis junto com o código fonte.",
                },
            },

            taaots: {
                title: "Totally Accurate Attack on Titan Simulator",

                section1: {
                    p1: "Este jogo foi feito ao longo de uma semana para a Chocolate Game Jam, utilizando a engine Godot.",
                    p2: "Todo o código e assets do jogo foram feitos por mim ao longo da semana que durou a jam.",
                    p3: "A ideia principal do jogo era a simulação do sistema de manobras em 3D, apresentado no anime, para movimentação e combate.",
                    p4: "Para isso, grande parte da funcionalidade padrão do sistema de física da Godot teve que ser re-escrito para acomodar o sistema de movimentação que eu queria implementar.",
                    p5: "O jogo conta com um tutorial completo ensinando a utilizar o sistema de locomoção do jogo, além de um modo arcade infinito em que se pode tentar sobreviver o máximo possível, ou matar o maior número de titãs possível.",
                    p6: "Ele possui quase 8 mil visualizações e mais de 2.5 mil downloads na itch.io.",
                },

                section2: {
                    title: "Tutorial",
                },

                section3: {
                    title: "Modo Arcade",
                    p: "Todo o código fonte e assets do jogo estão disponíveis no GitLab, e builds para Windows, Linux e Mac estão disponíveis na página do jogo na itch.io.",
                },
            },

            creativeCoding: {
                title: "Programação Criativa",

                section1: {
                    p1: "Um dos meus aspectos preferidos da computação é a computação criativa, quando trabalha em conjunto com a computação gráfica. É baseado nisso que Daniel Shiffman, do canal do YouTube <a href=\"https://www.youtube.com/@TheCodingTrain\">The Coding Train</a>, realiza seus <a href=\"https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH\">Coding Challenges</a>.",
                    p2: "Com objetivos de aprendizado e diversão eu decidi recriar os projetos que ele desenvolve nessa série utilizando outras tecnologias.",
                    p3: "Este é um projeto em desenvolvimento, e o objetivo é eventualmente alcançar os mais de 200 desafios que o projeto original possui. É uma excelente forma de aprendizado, tanto para mim quanto para outras pessoas verem como chegar ao mesmo resultado utilizando plataformas completamente diferentes.",
                },

                section2: {
                    title: "Desafio 9: Sistema Solar Parte 3",
                },

                section3: {
                    title: "Desafio 12: Atrator de Lorenz",
                },

                section4: {
                    title: "Desafio 13: Algoritmo de Reação de Difusão",
                    p: "O código fonte de todos os projetos pode ser encontrado no repositório do GitLab.",
                },
            },
        },

        footer: {
            copyright: "<strong>Layout & Código</strong>: Copyright <strong>©</strong> 2022-2023 <strong>Pedro Schneider</strong> via <strong>GPL-3.0</strong>"
        }
    }
}

function setLanguage(lang) {
    var language = languages[lang];
    var templateDocument = document.getElementById("template").contentDocument;

    var languageElements = templateDocument.querySelectorAll('[id^="lang_"]');
    console.log(languageElements)
    for (var i = 0; i < languageElements.length; i++) {
        var element = languageElements[i];
        var idList = element.id.split("_");
        var HTMLContent = language;
        for (var j = 1; j < idList.length; j++)
            HTMLContent = HTMLContent[idList[j]];
        element.innerHTML = HTMLContent;
    }
}