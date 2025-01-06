<script setup>

</script>

<template>
    <header>
       <div>
        <img src="../assets/billeder/logomobil.png" alt="">
        <p class="aligntext">VI BRYGGER MED RESPEKT FOR HÅNDVÆRKET</p>
        <div><p>Fredag 12-19 Lørdag 11-18</p>
            <p>Vrenstedvej 12</p></div>
       </div>
    </header>
    <main>
        <section>
            <article>
                <h1>Velkommen</h1>
                <p>På Løkken Bryghus, der er beliggende i byens centrum og tæt på tovet, brygger øl efter de gamle håndværkstraditioner.  Brygmester Kent Boalth har en hånd med i hele processen lige fra omhyggelig udvælgelse af de fineste malt- og humletyper til brygning og tapning på flasker eller fad. På Løkken Bryghus brygges der med økologisk malt, der dyrkes blot 12 km fra bryghuset. </p>
                <p>Et besøg på Løkken Bryghus er en ganske særlig oplevelse af ølbrygningens kunst og giver et unikt indblik i det særlige håndværk, der kræves for netop at skabe Løkken Bryghus-øl. Bryggerstuen er stedet, hvor vores mange gæster mødes for at smage, vurdere og nyde de forskellige øltyper i hyggelige og afslappede omgivelser. Oplev Løkken Bryghus indefra i vores hyggelige bryggerstue eller køb øl i vores brewshop og gå en tur omkring Løkkens mange skønne seværdigheder. </p>
            </article>
        </section>
    </main>
</template>

<style scoped>
section>article{
    padding: 35px 20px;
    background-color: var(--primary);
    color: white;
}

header{
    background-image: url(../assets/billeder/headermobil.png);
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

header>div{
    text-align: center;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.aligntext{
    width: 30ch;
}
</style>