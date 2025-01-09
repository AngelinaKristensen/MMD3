import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BeerView from '@/views/BeerView.vue'
import BryggerstuenView from '@/views/BryggerstuenView.vue'
import BrewingProcessView from '@/views/BrewingProcessView.vue'
import TasteGuideView from '@/views/TasteGuideView.vue'
import TourView from '@/views/TourView.vue'
import ValuesView from '@/views/ValuesView.vue'
import EventsView from '@/views/EventsView.vue'
import ContactView from '@/views/ContactView.vue'
import GalleriView from '@/views/GalleriView.vue'
import Beer from '@/views/Beer.vue'


const routes = [
  {
    path: "/",
    name: "forside",
    component: HomeView
  },
  {
    path: "/VoresOel",
    name: "voresoel",
    component: BeerView
  },
  {
    path: "/Bryggerstuen",
    name: "bryggerstuen",
    component: BryggerstuenView
  },
  {
    path: "/Brygproces",
    name: "brygproces",
    component: BrewingProcessView
  },
  {
    path: "/SmagsGuide",
    name: "smagsguide",
    component: TasteGuideView
  },
  {
    path: "/Rundvisning",
    name: "rundvisning",
    component: TourView
  },
  {
    path: "/Vaerdier",
    name: "vaerdier",
    component: ValuesView
  },
  {
    path: "/Begivenheder",
    name: "begivenheder",
    component: EventsView
  },
  {
    path: "/Kontakt",
    name: "kontakt",
    component: ContactView
  },
  {
    path: "/Galleri",
    name: "galleri",
    component: GalleriView
  },
  {
    path: "/Beer",
    name: "Beer",
    component: Beer,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});



export default router
