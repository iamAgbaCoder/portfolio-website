import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home" }) {

    return (
        <Head>
            <title>IamAgbaCoder (Lade Bamgboye) -  Software Developer and Tech Aficionado </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="Favour Bamgboye — Teenage Software Developer and Cybersecurity Analyst" />
            <meta name="description" content="Favour Oluwademilade Bamgboye, Tech Aficionado, iamAgbaCoder, Tech Whiz, also known as Demilade Bamgboye and AgbaCoder, 17-year-old software developer and cybersecurity analyst. With expertise in Python, Mobile Development, Hacking and Pentesting, API creation, and Backend Engineering, he's dedicated to crafting digital solutions and ensuring online security. Explore his portfolio to witness a world of code and innovation." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/iamAgbaCoder/" />
            <meta property="og:title" content="IamAgbaCoder - Favour Oluwademilade Bamgboye" />
            <meta property="og:description" content="Favour Oluwademilade Bamgboye,Tech Aficionado, iamAgbaCoder, Tech Whiz, also known as Demilade Bamgboye and AgbaCoder, 17-year-old software developer and cybersecurity analyst. With expertise in Python, Mobile Development, Hacking and Pentesting, API creation, and Backend Engineering, he's dedicated to crafting digital solutions and ensuring online security. Explore his portfolio to witness a world of code and innovation." />
            <meta property="og:image" content="https://github.com/Benrobo/baaymax-cli/raw/master/readmeImg/cli.png?raw=true" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="IamAgbaCoder - Favour Oluwademilade Bamgboye" />
            <meta property="twitter:description" content="Favour Oluwademilade Bamgboye, Tech Aficionado, iamAgbaCoder, Tech Whiz, also known as Demilade Bamgboye and AgbaCoder, 17-year-old software developer and cybersecurity analyst. With expertise in Python, Mobile Development, Hacking and Pentesting, API creation, and Backend Engineering, he's dedicated to crafting digital solutions and ensuring online security. Explore his portfolio to witness a world of code and innovation." />
            <meta property="twitter:image" content="https://github.com/Benrobo/iamAgbaCoder/" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

