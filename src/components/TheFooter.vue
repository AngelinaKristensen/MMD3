<script setup>
import facebookIcon from "@/assets/Icons/facebookIcon.svg";
import instagramIcon from "@/assets/Icons/instagramIcon.svg";
</script>

<template>
    <main>
        <section class="footer-container">
            <div class="footer">
                <div class="footerNavigationPoint">
                    <h3>Find os</h3>
                    <ul>
                        <li>Løkken Bryggeri ApS</li>
                        <li>Vrenstedvej 12 9480 Løkken</li>
                        <li>CVR: 44696290</li>
                        <li>TLF: +4522954741</li>
                        <li>kontakt@loekkenbryggeri.dk</li>
                    </ul>
                </div>

                <div class="footerNavigationPoint">
                    <h3>Navigation</h3>
                    <ul>
                        <li><RouterLink to="/">Forside</RouterLink></li>
                        <li><RouterLink to="/VoresOel">Vores Øl</RouterLink></li>
                        <li><RouterLink to="/Begivenheder">Begivenheder</RouterLink></li>
                        <li><RouterLink to="/Kontakt">Kontakt</RouterLink></li>
                        <li><RouterLink to="/Galleri">Galleri</RouterLink></li>
                    </ul>
                </div>

                <div class="footerNavigationPoint">
                    <h3>Links</h3>
                    <ul>
                        <li><RouterLink to="/#">Privatlivspolitik</RouterLink></li>
                        <li><RouterLink to="/#">Vedtægter</RouterLink></li>
                        <li><RouterLink to="/#">Presse</RouterLink></li>
                    </ul>
                </div>

                <div class="footerNavigationPoint">
                    <h3>Følg OS</h3>
                    <ul>
                        <RouterLink to="/#">
                            <div class="iconCircle">
                                <img :src="instagramIcon" alt="Instagram" />
                            </div>
                        </RouterLink>

                        <RouterLink to="/#">
                            <div class="iconCircle">
                                <img :src="facebookIcon" alt="Facebook" />
                            </div>
                        </RouterLink>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.footer-container {
    background-color: var(--dark-2);
}

.footer {
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px; 
    margin: 0 auto; 
}

.footer > div {
    display: flex;
    flex-direction: column; 
}

/* Styling for ul */
.footer ul {
    list-style: none;
    padding: 0;
}

.footer ul li {
    list-style: none;
    color: white;
    padding-bottom: .5rem;
}

.footerNavigationPoint ul li a {
    text-decoration: none; 
    color: white; 
}

.footerNavigationPoint ul li a:hover {
    color: #f4a261;
}

.footer h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: var(--light);
}

/* Icons */
.iconCircle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:var(--CTA);
    font-size: 1.2rem;
    margin: 0 .5rem;
}

.iconCircle img {
    max-width: 70%; 
    max-height: 70%; 
    display: block; 
}

/* Desktop Layout */
@media (max-width: 768px) {
    .footer {
        flex-direction: column; /* skift til mobile layout */
        gap: 2rem;
       
    }
}
</style>