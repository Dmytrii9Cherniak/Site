import React, {useEffect} from 'react';
import '../home/Home.scss';
import Contacts from '../contacts/Contacts';
import GoogleMap from './google_map/GoogleMap';
import Certificates from './certificates/Certificates';
import MainContent from './main_content/MainContent';
import MainPhotoMapContent from './main_photo_map_content/MainPhotoMapContent';
import ImagesSlider from './slider/ImagesSlider';

function Home() {

    useEffect(() => {
        document.title = 'Домашня'
    }, [])

    return (<main>
                <MainPhotoMapContent />
                <MainContent />
                <ImagesSlider/>
                <Certificates />
                <GoogleMap />
                <Contacts />
            </main>);
}

export default Home;