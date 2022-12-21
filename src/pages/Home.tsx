
import React from 'react';
import './Home.css';
import '../theme/variables.css';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCol, 
  IonGrid,
  IonRow
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
const Home: React.FC = () =>  {
  return (
    <div>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar >
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className = "title-style">Western Downs Solar Farm - 460 MW</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="content">
        <IonGrid>
        <IonRow>
          <IonCol size="auto">
          <div className='column-style'><IonIcon  icon = {arrowBack} size ="large"> </IonIcon></div></IonCol>
          <IonCol className="sub-heading">Construction Progress Checksheet</IonCol>
        </IonRow>
        </IonGrid>
        <IonContent className="table-container">
          <ExploreContainer/>
        </IonContent>
        </IonContent>
      </IonPage>
    </div>
  );
}
export default Home;