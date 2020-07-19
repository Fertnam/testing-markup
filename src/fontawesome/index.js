import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCartPlus, faTimes);

Vue.component('fa-icon', FontAwesomeIcon);
