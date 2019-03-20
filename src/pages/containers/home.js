import React from 'react';
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/componets/categories.js'
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/componets/modal.js';
import VideoPlayer from '../../player/containers/video-player.js';
import SettingsMenu from '../../pages/components/menu.js';
import Nosotros from '../../pages/containers/nosotros.js';
import FormContacto from '../../pages/components/form.js';
import Twitter from '../../widgets/componets/twitter.js';
class Home extends React.Component{
    state = {
        modalVisible:false,
        modalNosotros: false,
        modalContacto: false
    }
    handleOpenModal = (media) =>{
        this.setState ({
            modalVisible: true,
            media
        })
    }
    handleCloseModalClick = (event) =>{
        this.setState({
            modalVisible: false,
        })
    }

    handleContacto = (event) =>{
        this.setState({
            modalVisible: true,
            media: null,
            modalContacto: true,
            modalNosotros: false
        })        
    }

    handleNosotros = (event) =>{
        this.setState({
            modalVisible: true,
            media: null,
            modalContacto: false,
            modalNosotros: true
        })        
    }   
    
    componentDidMount(){
        const authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTIyNTUzODcsImV4cCI6MTU1MjI1ODk4Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZ2lsIn0.MKq7fHdSv8AbR3OlQJYUXjdWTilUCQRjg4UPSi9k4uU_uUrycnx91UE38ePICih-92qjeQ5AXgQTvghLPeUPs4sNlFUQVIl1ghxdXiclYkOwpFa0UatD-ZMzgCDv9IzdMPtzCCCJ4ALqLvKDwQRoYxXZeNv_h0c5snCwkkuzsuYipfv-Y1sXURIYgO4jrS4VPAKvTopZfkPYjp3sHR6yzlTk5UJ2aUN9ERB_NPGdk2OyU7QmuzLB3s35ike6mJ0GJrUAhJ4jXrgUT9l52RywIxqQGI61qEJacocrVmbmXVVICiir96CwmAKC2_Ulj423tyBz5W1no3kZwb9_t-e3I79PHGMuQIHxtYuSJNoP4_PFVj_O_5QzIwXagPXUHF08r-fAz3d1jY37gqcBxwSvriKfJ-m5xkhZgKtYUol3prfecpsqsFpI1vVnDrWadC5tRR-G2otR3zzr3KLv5N_kE-Py51uy0ydP0cXjyNu7Wfj8-jqAhlpvx4pHHt7Lu7g5ZNB1fKnyTXV_uSibY5mkIKlsPvwa19trerRi10sZXcC3Vg87Ix50wi9ngehqgVDL4QT0gzZfFKLwMSDJ5NoxY8Ec2kTRdzWLvk5YoBS9D0WJZE0Obj7o4_vBcTQvDHMUiTUEqGozf3K54uU4GU5_G9sOFKjTOznucj1oHgufkP8";
        const requestOption = {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':authorization,
            }
        }


        
        const url = 'http://localhost/rtu/rtu-api/public/index.php/api/categories';
        fetch(url,requestOption).then(data => {            
            data.json();
       }).then(
           weather_data => {
               //const forecastData = transformForecast(weather_data);
               console.log(weather_data);
               //modificar el estado con el resultado de la promise (fetch)
              // dispatch(setForecastData({city: payload, forecastData}));
           }
       );
    }
    render(){


        return(
            <HomeLayout>
                <SettingsMenu 
                    handleContacto ={this.handleContacto}
                    handleNosotros ={this.handleNosotros}
                />
                <Categories 
                categories={this.props.data.categories} 
                handleOpenModal = {this.handleOpenModal}
                />   
                <Twitter />            
                
                {
                    this.state.modalVisible &&
                <ModalContainer>
                    <Modal
                    handleClick={this.handleCloseModalClick}
                    >
                    {
                        this.state.media != null ?
                        <VideoPlayer 
                        autoplay
                        src={this.state.media.src}
                        title={this.state.media.title}                            
                        /> :  this.state.modalNosotros ? <Nosotros /> : this.state.modalContacto && <FormContacto />                        
                        
                        
                    }
                    
                    
                    </Modal>                    
                </ModalContainer>

                                    
                }
            </HomeLayout>
        )
    }
}
export default Home;