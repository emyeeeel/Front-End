import { IonContent, IonHeader, IonTitle,  IonToolbar, } from '@ionic/react';

const Reels: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reels Page</IonTitle>
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
          Reels Page
        </div>
      </IonContent>
    </>
  );
};

export default Reels;
