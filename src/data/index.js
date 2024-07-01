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
        // primary:"#7FD858",
        // nameColor:"#FFF"
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
                "Docker","GitHub"
            ]
        },
        {
            cat:'Web',
            skills:[
                "HTML","CSS","JavaScript",
                "Java","MongoDB","AWS",
                "GCP","Google Analytics",
                "DynamoDB","FireBase","Android Studio",
                "ReactJS","NodeJS","ExpressJS","Raspberry Pi",
                "Arduino", "C/C++"
            ]
        },
        {
            cat:'Pub',
            skills:["Python","TensorFlow","Keras","Jupyter Notebook"]
        }
    ],
    Categories:[
        {
            id:'AI',
            name:'AI | Machine Learning | Deep Learning'
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
            shortDescription:'Designed a system to recognize Sign Language using Convolutional Neural Network (CNN)',
            GitHubLink:'https://ijisrt.com/indian-sign-language-recognition-system',
            skills:['Python','TensorFlow','Keras']
        },
        {
            id:1,
            category:'AI',
            title:'AyurGPT',
            shortDescription:'LLM ChatBot on Ayurvedic healthcare solutions',
            GitHubLink:'https://github.com/SaurabhKumbhar24/AyurGPT',
            skills:['Python','TensorFlow','ChatGPT Api','ReactJS'],
            img:AyurGPT,
        },
        {
            id:2,
            category:'AI',
            title:'US 2020 Election',
            shortDescription:'Analyzed Twitter Tweets to get the election results',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Sentiment-Analysis-on-2020-US-Election',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:Election

        },
        {
            id:3,
            category:'AI',
            title:'Social Distancing',
            shortDescription:'Visualize the social distance between pedestrian',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Social-Distancing',
            skills:['Python','TensorFlow','Jupyter Notebook','OpenCV'],
            img:SDist

        },
        {
            id:4,
            category:'AI',
            title:'Cricket Test Series',
            shortDescription:'Analyzed Cricket Team Data to predict the winning probability',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Data-Analysis-Cricket-Test-Series-',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:Cric

        },
        {
            id:5,
            category:'Web',
            title:'ARCA: Room Area Calculator',
            shortDescription:'Calculate Area of Room and showcase the area on Android App',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ARCA',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:arca

        },
        {
            id:6,
            category:'Web',
            title:'ProWash: Washing Center App',
            shortDescription:'Laundry delivery App that connects the Washing Centers',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ProWash',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:prowash
        },
        {
            id:7,
            category:'Web',
            title:'Motleyscape',
            shortDescription:'Website to showcase the AR, VR and 3D projects on Web',
            GitHubLink:'https://github.com/SaurabhKumbhar24/Motleyscape-3D',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:mscape
        },
        {
            id:8,
            category:'Web',
            title:'Serve My Table',
            shortDescription:'Web application to collect order and manage payments',
            GitHubLink:'https://github.com/SaurabhKumbhar24/ServeMyTable',
            skills:['Python','TensorFlow','Keras','Jupyter Notebook'],
            img:smt
        },
    ]
};

export default data;