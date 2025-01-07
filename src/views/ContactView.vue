<script setup>

</script>

<template>
    <main>
        <section class="gridwrap">
            <article class="placeinfo">
                <picture>
                    <source media="(min-width: 1000px)" srcset="../assets/billeder/logodesktop.png">
                    <img src="../assets/billeder/logomobil.png" alt="">
                </picture>
                <p>Løkken Bryggeri APS</p>
                <p>Vrenstedvej 12</p>
                <p>9480 Løkken</p>
            </article>
            <article class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2151.3423081478795!2d9.710103776854737!3d57.370253773725594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4648dbe56b03cc9f%3A0x96451778f0930e42!2sL%C3%B8kken%20Bryghus!5e0!3m2!1sda!2sdk!4v1736249959516!5m2!1sda!2sdk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </article>
            <article class="contactinfo">
                <h2>Kontakt os</h2>
                <p>Tlf: 22954741</p>
                <p>Mail: kontakt@loekkenbryggeri.dk</p>
                <p>MAN-FRE 12.00 – 16.00</p>
            </article>
            <article class="staff">
                <div>
                <img src="../assets/billeder/Kent.png" alt="Kent">
                <p>Kent Bastian Boalth</p>
                <p>BRYGMESTER  / DIREKTØR</p>
                <p>22954741</p>
                </div>
                <div>
                <img src="../assets/billeder/Ole.png" alt="Ole">
                <p>Ole Olesen</p>
                <p>Salg</p>
                <p>21481059</p>
                </div>
                <div>
                <img src="../assets/billeder/Louise.png" alt="Louise">
                <p>Louise Bastian Boalth</p>
                <p>ØKONOMI / MARKETING</p>
                <p>22954741</p>
                </div>
            </article>
            <div class="contact">
                <h2>Skriv til os</h2>
                <div class="inputfield">
                    <label for="firstname"></label>
                    <input type="text" name="firstname" id="firstname" placeholder="Dit navn">
                </div>
                <div class="inputfield">
                    <label for="email"></label>
                    <input type="email" name="email" id="email" placeholder="Din e-mail">
                </div>
                <div class="inputfield">
                    <label for="phone"></label>
                    <input type="text" name="email" id="email" placeholder="Din e-mail">
                </div>
                <div class="inputfield">
                    <label for="subject"></label>
                    <input type="text" name="subject" id="subject" placeholder="Emne">
                </div>
                <div class="inputfield">
                    <label for="message"></label>
                    <textarea name="message" id="message" rows="15" placeholder="Din besked"></textarea>
                </div>
                <div>
                <button>Send</button>
            </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.inputfield{
    margin-bottom: 16px;
}
input,textarea{
    width: 100%;
    border-radius: 8px;
}
input{
    padding: 20px 0px 20px 16px;
}
textarea{
    padding: 8px 0px 0px 16px;
}
iframe{
    width: 100%;
    height: 268px;
}
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

@media (min-width: 1000px){
    section{
        padding: 0px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: 300px;
        column-gap: 3rem;
        row-gap: 1rem;
        max-width: 1300px;
        justify-content: center;
        margin: 0 auto;
    }

    .staff{
        flex-direction: unset;
        align-items: unset;
        grid-column: 1 / 3;
        justify-content: space-evenly;
    }
  
    .contact{
        grid-column: 3;
        grid-row: 1;
    }

    .placeinfo img{
        max-width: 380px;
    }
    .contactinfo{
        align-self: center;
    }

    .iframe{
        width: 380px !important;
        height: 270px !important;
    }
    .map{
        grid-column: 2;
        grid-row: 1;
    }
}
</style>