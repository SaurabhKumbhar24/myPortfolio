import AyurGPT from '../assets/Ayurveda.png';
import Election from '../assets/election.png';
import SDist from '../assets/social_distancing.png';
import Cric from '../assets/cric.jpg';
import arca from '../assets/arca.jpg';
import prowash from '../assets/prowash.png';
import mscape from '../assets/mscape.png';
import smt from '../assets/smt.png';

const data = {
    BasicInfo:"I'm pursuing my Masters in Analytics field and I have completed my Bachelors in Computer Science and Engineering. I have 3+ years of experience in tech industry. I have worked as a Machine Learning Engineer and Data Scientist. I'm looking for job opportunities in the field of Data Science.",
    Contact:{
        mail:'saurabh.kumbhar24@outlook.com',
        linkedin:'https://www.linkedin.com/in/saurabhkumbhar',
        github:'https://www.github.com/SaurabhKumbhar24'
    },
    colors:{
        primary:"#000",
        nameColor:"grey",
    },
    catSkills:[
        {
            cat:'AI',
            skills:[
                "Python","R","SQL","Tableau",
                "TensorFlow","Keras","PyTorch",
                "SciKit-Learn","Matplotlib","Seaborn",
                "Docker","GitHub","OpenCV"
            ]
        },
        {
            cat:'Web',
            skills:[
                "HTML","CSS","JavaScript",
                "Java","C/C++","MongoDB",
                "AWS", "GCP","Google Analytics",
                "DynamoDB","FireBase","Android Studio",
                "ReactJS","NodeJS","ExpressJS","Raspberry Pi",
                "Rest Api"
            ]
        },
        {
            cat:'Pub',
            skills:["Python","TensorFlow","Keras","OpenCV","Jupyter Notebook"]
        }
    ],
    Categories:[
        {
            id:'AI',
            name:'Machine Learning | Deep Learning | Computer Vision'
        },
        {
            id:'Web',
            name:'Web Development | App Development | Internet of Things (IoT)'
        },
        {
            id:'Pub',
            name:'Publication'
        }
    ],
    Projects:[
        {
            id:0,
            category:'Pub',
            title:'Indian Sign Language Recognition System, International Journal of Innovative Science and Research Technology (IJISRT) Volume 6 – 2021, Issue 6 – June',
            shortDescription:'Designed a system to recognize Sign Language (realtime hand gestures) using Computer Vision and Convolutional Neural Network (CNN)',
            GitHubLink:'https://ijisrt.com/indian-sign-language-recognition-system',
            skills:['Python','TensorFlow','Keras']
        },
        {
            id:1,
            category:'AI',
            title:'AyurGPT',
            shortDescription:'Large Language Model (LLM) chatbot utilizing the ChatGPT API to provide personalized Ayurvedic healthcare recommendations',
            GitHubLink:'https://github.com/SaurabhKumbhar24/AyurGPT',
            skills:['Python','TensorFlow','ChatGPT Api','ReactJS'],
            img:AyurGPT,
        },
        {
            id:2,
            category:'AI',
            title:'US 2020 Election',
            shortDescription:'Analyzed Twitter Tweets based on voter sentiments to predict the 2020 US Election Results.',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Sentiment-Analysis-on-2020-US-Election',
            skills:['Python','TensorFlow','Keras','NLTK','Jupyter Notebook'],
            img:Election

        },
        {
            id:3,
            category:'AI',
            title:'Social Distancing',
            shortDescription:'Visualize the social distance between pedestrian using Computer Vision and Transfer Learning',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Social-Distancing',
            skills:['Python','TensorFlow','Jupyter Notebook','OpenCV'],
            img:SDist

        },
        {
            id:4,
            category:'AI',
            title:'Cricket Test Series',
            shortDescription:'Analyzed Cricket Team Data to predict the winning probability using Linear and Logistic Regression.',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Data-Analysis-Cricket-Test-Series-',
            skills:['Python','SciKit-Learn','Jupyter Notebook'],
            img:Cric

        },
        {
            id:5,
            category:'Web',
            title:'ARCA: Room Area Calculator',
            shortDescription:'Developed an IoT Device used to Calculate Area of Room and showcase the area on Android App',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ARCA',
            skills:['Java','Python','Tensorflow','Keras','Firebase'],
            img:arca

        },
        {
            id:6,
            category:'Web',
            title:'ProWash: Washing Center App',
            shortDescription:'Laundry delivery App that connects the Washing Centers with the consumers.',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ProWash',
            skills:['Java','Android Studio','XML','MySQL'],
            img:prowash
        },
        {
            id:7,
            category:'Web',
            title:'Motleyscape',
            shortDescription:'Website that showcases the WebAR, WebVR and Web3D projects',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Motleyscape-3D',
            skills:['HTML','JavaScript','8th Wall','ThreeJs','AWS'],
            img:mscape
        },
        {
            id:8,
            category:'Web',
            title:'Serve My Table',
            shortDescription:'Web application to collect order, manage payments and restaurant on QR Code.',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ServeMyTable',
            skills:['HTML','CSS','JavaScript','ReactJs','GCP','REST API'],
            img:smt
        },
    ]
};

export default data;