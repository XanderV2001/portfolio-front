<template>
    <section class="container mx-auto px-4 flex gap-10 flex-col py-2">
        <div class="w-full flex gap-16 py-20 px-10">
            <img src="/xander.jpg" class="rounded drop-shadow-lg w-48 sm:w-52 md:w-60 lg:w-80" />
            <div class="flex flex-col gap-5">
                <p class="xl:text-9xl lg:text-7xl md:text-5xl sm:text-4xl text-4xl tracking-wider font-bold"> Xander
                    Vos </p>
                <p class="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl italic">Full-stack Software Engineer</p>
                <div class="flex justify-around">
                    <a :href=link.url target="_blank"
                        class="w-10 flex justify-center items-center hover:scale-110 hover:text-green-500 transition "
                        v-for="link in links">
                        <component :is="link.icon" />
                    </a>
                </div>
            </div>
        </div>
        <p class="text-lg">
            Hello! I'm a passionate and versatile full stack software engineer with a strong commitment to crafting
            robust,
            efficient, and innovative solutions. My journey in the world of software development began with a deep
            curiosity
            and
            a desire to create meaningful and user-friendly applications. Since then, I've dedicated myself to
            honing my
            skills
            and staying at the forefront of technology to deliver exceptional results.
        </p>
        <p class="text-lg">
            My love for software engineering stems from the thrill of turning ideas into reality. I thrive on
            problem-solving,
            taking on challenges that require a mix of creativity and technical expertise. Whether it's developing
            responsive
            web applications, building scalable back-end systems, or optimizing databases, I relish the opportunity
            to
            make
            a
            positive impact through code.
        </p>
        <p class="text-lg">
            My technical toolkit includes a wide range of languages, frameworks, and tools, enabling me to tackle
            both
            front-end
            and back-end development with ease. I've designed and developed user-friendly interfaces that not only
            look
            great
            but also provide a seamless user experience. My expertise in crafting efficient server-side solutions
            ensures
            that
            applications run smoothly, even under high loads.
        </p>
        <p class="text-lg">
            I'm a strong advocate for best practices in software development, including test-driven development,
            version
            control, and continuous integration. Collaboration and communication are also vital aspects of my work;
            I
            thrive
            in
            a team environment and am skilled at translating complex technical concepts into plain language for
            stakeholders.
        </p>
        <p class="text-lg">
            With a passion for lifelong learning, I stay up-to-date with the latest industry trends, ensuring my
            skills
            remain
            current and adaptable to emerging technologies. I believe that there is always room for improvement and
            innovation,
            and I embrace the opportunity to learn and grow in this ever-evolving field.
        </p>
        <p class="text-lg">
            I'm excited about the endless possibilities in the software engineering realm, and I'm always looking
            for
            new
            challenges and opportunities to contribute to projects that make a difference. If you're looking for a
            dedicated,
            creative, and experienced full stack software engineer to join your team or collaborate on your next
            project,
            I'd
            love to connect and explore how we can achieve greatness together. Let's bring your ideas to life
            through
            code!
        </p>

    </section>
</template>

<script setup>
import { Github as GithubIcon, LinkedinIn as LinkedinIcon, Discord as DiscordIcon, Envelope as EmailIcon } from '@vicons/fa';

let links = [
    {
        url: "https://github.com/XanderV2001",
        icon: GithubIcon
    },
    {
        url: "https://www.linkedin.com/in/xander-vos/",
        icon: LinkedinIcon
    },
    {
        url: "https://discordapp.com/users/371064544392511488",
        icon: DiscordIcon
    },
    {
        url: "mailto:contact@xandervos.dev",
        icon: EmailIcon
    }
];

</script>