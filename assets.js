import logo from './pooja-logo1.png';
import banner from './pooja-banner.svg';
import ganeshpooja from './Ganesh-pooja1.png';
import chandipooja from './chandi-pooja1.png';
import gangamaapooja from './Maa-ganga-aarti.png';
// import hanumanpooja from './hanuman-pooja.png';
import haripauripooja from './Har-ki-pauri-pooja.png';
import laxmipooja from './laxmi-pooja1.png';
import maadurgapooja from './Maa-durga-pooja.png';
import mangalaarti from './Mangal-Aarti1.png';
import navgrahpooja from './Navgrah-shanti-pooja.png';
import shivabhishekpooja from './Shiv-abhisehk-pooja.png';
import payment from './cash-payment.png'
import confirm from './checked.png'
import select from './select.png'
import book from './reservation.png'
import havan from './havan.png'
import ajit from './ajit.png'
import prabhat from './prabhat-photoroom.png'
import poojan from './poojan-photoroom.png'
import hun from './hundred.png'
import diya from './diya.png'
import exp from './experiance.png'

export const assets = {
    logo,
    banner,
    havan
};

export const poojaDummyData = [
    {
        "_id": "1",
        "name": "Ganesh Pooja",
        "description": "A blessing ceremony for prosperity and new beginnings.",
        "price": 1500,
        "images": [ganeshpooja],
        "location": "Haridwar",
        "duration": "1 hour",
        "rating": 5,
        "facilities": ["Pooja Items", "Pandit Availability", "Online Support"]
    },
    {
        "_id": "2",
        "name": "Laxmi Pooja",
        "description": "Worship for wealth, prosperity, and success.",
        "price": 1800,
        "images": [laxmipooja],
        "location": "Haridwar",
        "duration": "1.5 hours",
        "rating": 4,
        "facilities": ["Pooja Items", "Pandit Availability"]
    },
    {
        "_id": "3",
        "name": "Maa Ganga Aarti",
        "description": "A divine river-side ceremony to worship Maa Ganga and seek blessings.",
        "price": 1200,
        "images": [gangamaapooja],
        "location": "Haridwar",
        "duration": "45 mins",
        "rating": 5,
        "facilities": ["Aarti Ritual", "Pandit Availability", "Live Streaming"]
    },
    {
        "_id": "4",
        "name": "Har Ki Pauri Pooja",
        "description": "A special pooja at the holy Ganga Ghat to offer prayers and seek divine blessings.",
        "price": 1500,
        "images": [haripauripooja],
        "location": "Haridwar",
        "duration": "1 hour",
        "rating": 5,
        "facilities": ["Pooja Items", "Pandit Availability", "Holy Ganga Dip"]
    },
    {
        "_id": "5",
        "name": "Maa Durga Pooja",
        "description": "A powerful ritual to invoke the blessings of Goddess Durga for protection and strength.",
        "price": 1800,
        "images": [maadurgapooja],
        "location": "Haridwar",
        "duration": "2 hours",
        "rating": 4,
        "facilities": ["Pooja Items", "Pandit Availability", "Holy Water from Ganga"]
    },
    {
        "_id": "6",
        "name": "Shiv Abhishek Pooja",
        "description": "A ritual performed to seek Lord Shiva's blessings for prosperity, health, and spiritual growth.",
        "price": 2000,
        "images": [shivabhishekpooja],
        "location": "Haridwar",
        "duration": "1 hour",
        "rating": 5,
        "facilities": ["Shiva Idol", "Abhishek Ritual", "Pandit Availability"]
    },
    {
        "_id": "7",
        "name": "Mangal Aarti",
        "description": "A daily morning aarti conducted to invoke Lord Hanuman's blessings for health and well-being.",
        "price": 1300,
        "images": [mangalaarti],
        "location": "Haridwar",
        "duration": "30 mins",
        "rating": 4,
        "facilities": ["Aarti Ritual", "Pandit Availability", "Blessing of Lord Hanuman"]
    },
    {
        "_id": "8",
        "name": "Navgraha Shanti Pooja",
        "description": "A pooja performed to seek the blessings of the nine planets for harmony and prosperity.",
        "price": 2500,
        "images": [navgrahpooja],
        "location": "Haridwar",
        "duration": "2 hours",
        "rating": 5,
        "facilities": ["Pooja Items", "Pandit Availability", "Astrological Consultation"]
    },
    {
        "_id": "9",
        "name": "Chandi Pooja",
        "description": "A powerful Vedic ritual performed for the blessings of Goddess Chandi to overcome challenges.",
        "price": 2800,
        "images": [chandipooja],
        "location": "Haridwar",
        "duration": "2 hours",
        "rating": 5,
        "facilities": ["Vedic Ritual", "Pandit Availability", "Pooja Items"]
    }
];

export const cardsData =[
    {
      "id": 1,
      "icon": [select],
      "title": "Select a Pooja",
      "subtitle": "Browse and choose the pooja as per your occasion or retirement"
    },
    {
      "id": 2,
      "icon": [book],
      "title": "Book Pandit Ji",
      "subtitle": "Pick your date, time and location for the pooja."
    },
    {
      "id": 3,
      "icon":[payment],
      "title": "Make Payment",
      "subtitle": "Secure and quick payment options for your convenience."
    },
    {
      "id": 4,
      "icon": [confirm],
      "title": "Get Confirmation",
      "subtitle": "Instant booking confirmation with all the details"
    }
];

export const testimonialsData = [
  {
    name: "Prabhat Nigam",
    role: "Chief Technology Officer",
    imageUrl: [prabhat],
    reviewText: "The pooja services provided a profound sense of calm and spiritual growth. Every detail was meticulously attended to, making the experience truly memorable.",
    rating: 5,
  },
  {
    name: "Ajit Upadhyaya",
    role: "Azure & Data Architect",
    imageUrl: [ajit],
    reviewText: "Pooja services have been a blessing in my life. The rituals are deeply rooted in tradition, and the experience was spiritually fulfilling.",
    rating: 4,
  },
  {
    name: "Poojan Patel",
    role: "Software engineer",
    imageUrl: [poojan],
    reviewText: "The pooja service was calming and peaceful. I felt a true connection with the traditions, and the team was incredibly attentive.",
    rating: 4,
  }
];


export const items = [
    {
      number: '01',
      title: '500+ Poojas Performed',
      text: 'Performed with devotion and Vedic rituals.',
      image: [diya]
    },
    {
      number: '02',
      title: '15+ Years of Experience',
      text: 'Deep knowledge of Vedas and rituals.',
      image:[hun]
    },
    {
      number: '03',
      title: '100% Satisfied Devotees',
      text: 'Personalized attention and guidance.',
      image:[exp]
    },
  ];