import { IonContent, IonHeader, IonTitle,  IonToolbar, } from '@ionic/react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Home Page
        </div>
      </IonContent>
    </>
  );
};

export default Home;
