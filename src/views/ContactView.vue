<script setup>

</script>

<template>
    <main>
        <section>
            <article>
                <picture>
                    <source media="(min-width: 1000px)" srcset="../assets/billeder/logodesktop.png">
                    <img src="../assets/billeder/logomobil.png" alt="">
                </picture>
                <p>Løkken Bryggeri APS</p>
                <p>Vrenstedvej 12</p>
                <p>9480 Løkken</p>
            </article>
            <article>
                <h2>Kontakt os</h2>
                <p>Tlf: 22954741</p>
                <p>Mail: kontakt@loekkenbryggeri.dk</p>
                <p>MAN-FRE 12.00 – 16.00</p>
            </article>
            <article class="staff">
                <div>
                <img src="../assets/billeder/Rectangle 26.png" alt="">
                <p>Kent Bastian Boalth</p>
                <p>BRYGMESTER  / DIREKTØR</p>
                <p>22954741</p>
                </div>
                <div>
                <img src="../assets/billeder/Rectangle 26.png" alt="">
                <p>Kent Bastian Boalth</p>
                <p>BRYGMESTER  / DIREKTØR</p>
                <p>22954741</p>
                </div>
                <div>
                <img src="../assets/billeder/Rectangle 26.png" alt="">
                <p>Kent Bastian Boalth</p>
                <p>BRYGMESTER  / DIREKTØR</p>
                <p>22954741</p>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
section{
    background-color: var(--primary);
    color: white;
    padding: 0px 24px;
}
.staff{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.staff div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}
</style>